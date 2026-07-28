import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { sanityFetch } from "@/sanity/client";
import { eventByIdQuery, latestArticlesQuery, allEventsQuery } from "@/sanity/queries";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin, Share2, Tag } from "lucide-react";
import Link from "next/link";
import ZoomableImage from "@/components/ui/ZoomableImage";
import EnrollButton from "@/components/ui/EnrollButton";
import ShareBlock from "@/components/ui/ShareBlock";

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const events = await sanityFetch({
      query: allEventsQuery,
      tags: ["event"],
    });
    
    if (!events || events.length === 0) {
      return [{ id: "no-events" }];
    }
    
    return events.map((event) => ({
      id: event._id,
    }));
  } catch (error) {
    console.error("Erreur lors de la génération des params statiques :", error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  try {
    const event = await sanityFetch({
      query: eventByIdQuery,
      params: { id },
      tags: ["event"],
    });
    if (!event) return { title: "Événement non trouvé | ISAM Kinshasa" };
    
    const desc = event.description || "Détails de l'événement ISAM Kinshasa";
    return {
      title: event.title,
      description: desc,
      alternates: {
        canonical: `/actualites/evenement/${event._id}`,
      },
      openGraph: {
        title: event.title,
        description: desc,
        images: event.image ? [{ url: event.image }] : [],
        type: "article",
        publishedTime: event.date || event._createdAt,
        authors: ["ISAM Kinshasa"],
        url: `/actualites/evenement/${event._id}`,
      },
      twitter: {
        card: "summary_large_image",
        title: event.title,
        description: desc,
        images: event.image ? [event.image] : [],
      },
    };
  } catch {
    return { title: "Événement | ISAM Kinshasa" };
  }
}

const categoryLabels = {
  actualites: "Actualités",
  evenements: "Événements",
  partenariats: "Partenariats",
  formations: "Formations",
  "vie-etudiante": "Vie étudiante",
};

const categoryColors = {
  actualites: "bg-isam-blue/10 text-isam-blue border-isam-blue/20",
  evenements: "bg-isam-yellow/20 text-yellow-700 border-isam-yellow/30",
  partenariats: "bg-isam-green/10 text-isam-green border-isam-green/20",
  formations: "bg-purple-50 text-purple-600 border-purple-200",
  "vie-etudiante": "bg-rose-50 text-rose-600 border-rose-200",
};

function RelatedCard({ article }) {
  const isEvent = article.date !== undefined && article.slug === undefined;
  const href = isEvent
    ? `/actualites/evenement/${article._id}`
    : `/actualites/${article.slug?.current || article.slug}`;
    
  const catStyle = categoryColors[article.category] || categoryColors.actualites;
  const dateStr = article.publishedAt || article.date;
  const date = dateStr
    ? new Date(dateStr).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })
    : "";

  return (
    <Link href={href} className="group flex gap-4 p-4 rounded-2xl hover:bg-isam-light border border-transparent hover:border-gray-100 transition-all duration-300">
      {article.image && (
        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        {article.category && (
          <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border mb-1.5 ${catStyle}`}>
            {categoryLabels[article.category] || article.category}
          </span>
        )}
        <h4 className="text-sm font-semibold text-slate-700 group-hover:text-isam-blue transition-colors line-clamp-2 leading-snug mb-1">
          {article.title}
        </h4>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
    </Link>
  );
}

export default async function EventDetailPage({ params }) {
  const { id } = await params;
  
  let event = null;
  let recentArticles = [];
  try {
    const [fetchedEvent, fetchedArticles, fetchedEvents] = await Promise.all([
      sanityFetch({ query: eventByIdQuery, params: { id }, tags: ["event"] }),
      sanityFetch({ query: latestArticlesQuery, tags: ["article"] }),
      sanityFetch({ query: allEventsQuery, tags: ["event"] }),
    ]);
    
    event = fetchedEvent;
    
    const combined = [...(fetchedArticles || []), ...(fetchedEvents || [])]
      .filter((item) => item._id !== id)
      .sort((a, b) => new Date(b.publishedAt || b.date || 0) - new Date(a.publishedAt || a.date || 0))
      .slice(0, 3);
      
    recentArticles = combined;
  } catch (error) {
    console.error("Erreur Sanity :", error);
  }

  if (!event) notFound();

  // Préparation de la date pour correspondre au format précédent
  const dateObj = event.date ? new Date(event.date) : null;
  const day = dateObj ? String(dateObj.getDate()).padStart(2, "0") : null;
  const month = dateObj ? dateObj.toLocaleDateString("fr-FR", { month: "long", year: "numeric" }) : null;

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        
        {/* ── Page Hero ── */}
        <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920&auto=format&fit=crop"
            alt="Événement ISAM"
            className="absolute inset-0 w-full h-full object-cover scale-105"
            style={{ transformOrigin: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-900/60 to-gray-900/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-isam-blue/60 to-transparent mix-blend-multiply" />
          
          <div className="absolute inset-0 flex flex-col justify-end pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <Link
                href="/actualites"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                Retour aux actualités
              </Link>
              
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-isam-blue text-white font-bold uppercase tracking-widest text-[10px] rounded-full">
                  <Tag className="w-3 h-3" />
                  Événement {event.category ? `- ${event.category}` : ""}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-display leading-tight max-w-4xl">
                {event.title}
              </h1>
            </div>
          </div>
        </div>

        {/* ── Content area ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
            
            {/* ── Event body ── */}
            <div className="w-full bg-white">
              
              <div>
                <div className="flex flex-wrap gap-3 mb-10 text-sm">
                  {(day || month) && (
                    <div className="inline-flex items-center gap-1.5 text-isam-blue bg-isam-blue/10 px-4 py-2 rounded-full font-semibold">
                      <Calendar className="w-4 h-4" />
                      {day} {month}
                    </div>
                  )}
                  {event.time && (
                    <div className="inline-flex items-center gap-1.5 text-gray-600 bg-gray-100 px-4 py-2 rounded-full font-medium">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                  )}
                  {event.location && (
                    <div className="inline-flex items-center gap-1.5 text-gray-600 bg-gray-100 px-4 py-2 rounded-full font-medium">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  )}
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-800 mb-8 leading-tight">
                  {event.title}
                </h1>

                {event.image && (
                  <ZoomableImage src={event.image} alt={event.title} />
                )}

                <div className="text-gray-600 text-base md:text-lg leading-relaxed mb-12 whitespace-pre-line text-justify">
                  {event.description}
                </div>

                <ShareBlock title={event.title} type="événement" />

                <div className="pt-6 mt-10">
                  <Link
                    href="/actualites"
                    className="inline-flex items-center gap-2 text-isam-blue font-semibold hover:gap-3 transition-all duration-300 group text-sm"
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Voir tous les événements
                  </Link>
                </div>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <aside className="space-y-6 lg:sticky lg:top-28">

              {/* Related articles */}
              {recentArticles?.length > 0 && (
                <div className="bg-isam-light rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-slate-800 font-display mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-isam-blue rounded-full" />
                    Publications récentes
                  </h3>
                  <div className="space-y-1">
                    {recentArticles.map((rel) => (
                      <RelatedCard key={rel._id} article={rel} />
                    ))}
                  </div>
                  <Link
                    href="/actualites"
                    className="mt-4 inline-flex items-center gap-1.5 text-isam-blue text-sm font-semibold hover:gap-2.5 transition-all duration-200 group"
                  >
                    Toutes les actualités
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
