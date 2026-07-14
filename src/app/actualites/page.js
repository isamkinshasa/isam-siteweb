import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/data/siteData";
import SectionHeader from "@/components/ui/SectionHeader";
import NewsCard from "@/components/ui/NewsCard";
import EventCard from "@/components/ui/EventCard";
import { sanityFetch } from "@/sanity/client";
import { allArticlesQuery, allEventsQuery } from "@/sanity/queries";

export const metadata = {
  title: "Actualités | ISAM Kinshasa",
  description:
    "Toutes les actualités et événements de l'Institut Supérieur des Arts et Métiers de Kinshasa.",
};

export const revalidate = 60;

export default async function ActualitesPage() {
  // Récupération des données depuis Sanity
  let articles = [];
  let events = [];

  try {
    articles = await sanityFetch({ query: allArticlesQuery, tags: ["article"] });
    events = await sanityFetch({ query: allEventsQuery, tags: ["event"] });
  } catch (error) {
    console.error("Erreur Sanity :", error);
  }

  // Fallback sur les données statiques si Sanity est vide ou inaccessible
  const displayArticles =
    articles && articles.length > 0
      ? articles.map((a) => ({
          id: a._id,
          slug: a.slug?.current,
          title: a.title,
          date: a.publishedAt
            ? new Date(a.publishedAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : "",
          excerpt: a.excerpt,
          image: a.image || "https://images.unsplash.com/photo-1523580494112-071f1629bcce?q=80&w=800",
        }))
      : siteData.news;

  const displayEvents =
    events && events.length > 0
      ? events.map((e) => {
          const d = e.date ? new Date(e.date) : null;
          return {
            id: e._id,
            day: d ? String(d.getDate()).padStart(2, "0") : "--",
            month: d
              ? d.toLocaleDateString("fr-FR", { month: "long", year: "numeric" })
              : "",
            title: e.title,
            time: e.time || e.location || "",
            description: e.description,
          };
        })
      : siteData.events;

  return (
    <>
      <Header />
      <main className="pt-32 pb-24 flex-grow bg-isam-light min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="À la Une de l'ISAM"
            subtitle="Actualités & Événements"
          />

          <div className="grid lg:grid-cols-3 gap-12 mt-12">
            {/* Main News Section */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-bold mb-8 border-b border-gray-200 pb-4">
                Toutes les Actualités
              </h2>
              {displayArticles.length === 0 ? (
                <div className="text-center py-20 text-gray-400">
                  <p className="text-lg">Aucun article publié pour le moment.</p>
                  <p className="text-sm mt-2">
                    Ajoutez des articles depuis le{" "}
                    <a href="/studio" className="text-isam-blue underline">
                      Studio Sanity
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-6">
                  {displayArticles.map((article, index) => (
                    <NewsCard key={article.id || index} article={article} index={index} />
                  ))}
                </div>
              )}
            </div>

            {/* Events Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h2 className="text-2xl font-serif font-bold mb-8 border-b border-gray-200 pb-4">
                  Agenda
                </h2>
                <div className="space-y-6">
                  {displayEvents.length === 0 ? (
                    <p className="text-gray-400 text-sm">Aucun événement à venir.</p>
                  ) : (
                    displayEvents.map((event, index) => (
                      <EventCard key={event.id || index} event={event} index={index} />
                    ))
                  )}
                </div>

                <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-isam-yellow/20 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold font-serif mb-2">Newsletter</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Ne manquez aucun événement important. Abonnez-vous à notre newsletter.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-isam-blue/20"
                    />
                    <button className="w-full bg-isam-blue text-white px-4 py-3 rounded-xl font-medium hover:bg-isam-blue-dark transition-colors">
                      S'abonner
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
