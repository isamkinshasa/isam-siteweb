import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/data/siteData";
import NewsCard from "@/components/ui/NewsCard";
import EventCard from "@/components/ui/EventCard";
import { sanityFetch } from "@/sanity/client";
import { allArticlesQuery, allEventsQuery } from "@/sanity/queries";
import { Calendar, Newspaper, ArrowRight, Rss } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Actualités | ISAM Kinshasa",
  description:
    "Toutes les actualités et événements de l'Institut Supérieur des Arts et Métiers de Kinshasa.",
};

export const revalidate = 60;

export default async function ActualitesPage() {
  let articles = [];
  let events = [];

  try {
    [articles, events] = await Promise.all([
      sanityFetch({ query: allArticlesQuery, tags: ["article"] }),
      sanityFetch({ query: allEventsQuery, tags: ["event"] }),
    ]);
  } catch (error) {
    console.error("Erreur Sanity :", error);
  }

  const displayArticles =
    articles && articles.length > 0
      ? articles.map((a) => ({
          id: a._id,
          slug: a.slug?.current,
          title: a.title,
          category: a.category,
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
      <main className="bg-white min-h-screen">

        {/* ── Page Hero ── */}
        <div className="bg-isam-blue pt-28 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 section-dots opacity-15" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-isam-yellow/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 border border-white/25 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-isam-yellow animate-pulse" />
              Dernières nouvelles
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-4 max-w-2xl leading-tight">
              Actualités & Événements
            </h1>
            <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
              Restez informé des dernières nouvelles, annonces et activités de l'ISAM Kinshasa.
            </p>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-2 text-white">
                <Newspaper className="w-4 h-4 text-isam-yellow" />
                <span className="text-sm font-medium">{displayArticles.length} article{displayArticles.length > 1 ? "s" : ""}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Calendar className="w-4 h-4 text-isam-yellow" />
                <span className="text-sm font-medium">{displayEvents.length} événement{displayEvents.length > 1 ? "s" : ""}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[1fr_340px] gap-14">

            {/* Articles */}
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <h2 className="text-xl font-bold font-display text-slate-800 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-isam-blue rounded-full" />
                  Toutes les Actualités
                </h2>
                <span className="text-sm text-gray-400">{displayArticles.length} article{displayArticles.length > 1 ? "s" : ""}</span>
              </div>

              {displayArticles.length === 0 ? (
                <div className="text-center py-20 bg-isam-light rounded-3xl border border-dashed border-gray-200">
                  <Newspaper className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Aucun article publié pour le moment.</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Ajoutez des articles depuis le{" "}
                    <Link href="/structure" className="text-isam-blue underline">
                      Studio Sanity
                    </Link>
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

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-28 self-start">

              {/* Events section */}
              <div className="bg-isam-light rounded-3xl p-6 border border-gray-100">
                <h2 className="text-lg font-bold font-display text-slate-800 flex items-center gap-2 mb-6">
                  <span className="w-1.5 h-6 bg-isam-yellow rounded-full" />
                  Agenda
                </h2>
                {displayEvents.length === 0 ? (
                  <div className="text-center py-8">
                    <Calendar className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-400 text-sm">Aucun événement à venir.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {displayEvents.map((event, index) => (
                      <EventCard key={event.id || index} event={event} index={index} />
                    ))}
                  </div>
                )}
              </div>

              {/* Newsletter */}
              <div className="bg-isam-blue rounded-3xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Rss className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-2">Newsletter</h3>
                  <p className="text-blue-200 text-sm mb-5 leading-relaxed">
                    Ne manquez aucune actualité importante de l'ISAM Kinshasa.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      className="w-full px-4 py-3 rounded-xl border-0 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-isam-yellow shadow-sm"
                    />
                    <button className="w-full bg-isam-yellow hover:bg-isam-yellow-dark text-gray-900 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5">
                      S'abonner
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* CTA inscription */}
              <div className="border border-isam-blue/20 rounded-3xl p-6 bg-isam-blue/4">
                <h3 className="font-bold text-slate-800 font-display mb-2">Rejoindre l'ISAM</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Inscrivez-vous à l'une de nos formations professionnelles pour l'année académique 2025–2026.
                </p>
                <a
                  href="https://isam.optsolution.net/demande-d-inscription-en-ligne-2025-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-isam-blue hover:bg-isam-blue-dark text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md shadow-isam-blue/25 w-full justify-center hover:-translate-y-0.5"
                >
                  S'inscrire en ligne
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
