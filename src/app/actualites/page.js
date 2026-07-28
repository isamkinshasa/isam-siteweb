import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/data/siteData";
import NewsCard from "@/components/ui/NewsCard";
import EventCard from "@/components/ui/EventCard";
import { sanityFetch } from "@/sanity/client";
import { allArticlesQuery, allEventsQuery } from "@/sanity/queries";
import { Calendar, Newspaper } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Actualités",
  description:
    "Toutes les actualités et événements de l'Institut Supérieur des Arts et Métiers de Kinshasa.",
  alternates: {
    canonical: "/actualites",
  },
  openGraph: {
    title: "Actualités | ISAM Kinshasa",
    description: "Toutes les actualités et événements de l'Institut Supérieur des Arts et Métiers de Kinshasa.",
    url: "/actualites",
  },
};



export default async function ActualitesPage() {
  let articles = [];
  let events = [];

  try {
    const [fetchedArticles, fetchedEvents] = await Promise.all([
      sanityFetch({ query: allArticlesQuery, tags: ["article"] }),
      sanityFetch({ query: allEventsQuery, tags: ["event"] }),
    ]);
    articles = fetchedArticles || [];
    events = fetchedEvents || [];
  } catch (error) {
    console.error("Erreur Sanity :", error);
  }

  const displayArticles =
    articles && articles.length > 0
      ? articles.map((a) => ({
        id: a._id,
        slug: typeof a.slug === "object" ? a.slug?.current : a.slug,
        title: a.title,
        category: a.category,
        dateObj: a.publishedAt || a._createdAt ? new Date(a.publishedAt || a._createdAt) : new Date(0),
        date: a.publishedAt || a._createdAt
          ? new Date(a.publishedAt || a._createdAt).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
          : "",
        excerpt: a.excerpt,
        image: a.image || "https://images.unsplash.com/photo-1523580494112-071f1629bcce?q=80&w=800",
        type: "article",
      }))
      : [];

  const displayEvents =
    events && events.length > 0
      ? events.map((e) => {
        const d = e.date ? new Date(e.date) : null;
        return {
          id: e._id,
          dateObj: d || new Date(0),
          day: d ? String(d.getDate()).padStart(2, "0") : "--",
          month: d
            ? d.toLocaleDateString("fr-FR", { month: "long", year: "numeric" })
            : "",
          title: e.title,
          time: e.time || "",
          location: e.location || "",
          description: e.description,
          image: e.image,
          type: "event",
        };
      })
      : [];

  const combinedFeed = [...displayArticles, ...displayEvents].sort((a, b) => b.dateObj - a.dateObj);

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">

        {/* ── Page Hero ── */}
        <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1920&auto=format&fit=crop"
            alt="Actualités et Événements ISAM"
            className="absolute inset-0 w-full h-full object-cover scale-105"
            style={{ transformOrigin: "center" }}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/50 to-gray-900/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-isam-blue/60 to-transparent mix-blend-multiply" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left mt-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 border border-white/25 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-6 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-isam-yellow animate-pulse" />
                Dernières nouvelles
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight font-display max-w-3xl mb-6">
                Actualités & Événements
              </h1>
              <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                Restez informé des dernières nouvelles, annonces et activités de l'Institut Supérieur des Arts et Métiers de Kinshasa.
              </p>

              {/* Stats strip */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 mt-10">
                <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                  <Newspaper className="w-5 h-5 text-isam-yellow" />
                  <span className="text-sm font-medium">{displayArticles.length} article{displayArticles.length > 1 ? "s" : ""}</span>
                </div>
                <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                  <Calendar className="w-5 h-5 text-isam-yellow" />
                  <span className="text-sm font-medium">{displayEvents.length} événement{displayEvents.length > 1 ? "s" : ""}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="w-full">

            {/* Articles et Événements */}
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <h2 className="text-xl font-bold font-display text-slate-800 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-isam-blue rounded-full" />
                  Toutes les Publications
                </h2>
                <span className="text-sm text-gray-400">{combinedFeed.length} publication{combinedFeed.length > 1 ? "s" : ""}</span>
              </div>

              {combinedFeed.length === 0 ? (
                <div className="text-center py-20 bg-isam-light rounded-3xl border border-dashed border-gray-200">
                  <Newspaper className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Aucune publication pour le moment.</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Ajoutez des articles ou événements depuis le{" "}
                    <Link href="/structure" className="text-isam-blue underline">
                      Studio Sanity
                    </Link>
                    .
                  </p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {combinedFeed.map((item, index) => (
                    item.type === "article" ? (
                      <NewsCard key={item.id || index} article={item} index={index} />
                    ) : (
                      <EventCard key={item.id || index} event={item} index={index} />
                    )
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
