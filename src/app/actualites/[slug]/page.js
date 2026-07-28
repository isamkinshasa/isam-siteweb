import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { sanityFetch } from "@/sanity/client";
import { articleBySlugQuery, allArticlesQuery, relatedArticlesQuery, allEventsQuery } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import {
  ArrowLeft,
  Calendar,
  Tag,
  Share2,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import EnrollButton from "@/components/ui/EnrollButton";
import ZoomableImage from "@/components/ui/ZoomableImage";
import ShareBlock from "@/components/ui/ShareBlock";

export const dynamicParams = false;

/** Génère les slugs statiques pour les routes dynamiques */
export async function generateStaticParams() {
  try {
    const articles = await sanityFetch({ query: allArticlesQuery, tags: ["article"] }) || [];
    
    // a.slug est déjà une chaîne de caractères grâce à la requête "slug": slug.current
    const slugs = articles
      .filter((a) => !!a.slug)
      .map((a) => ({ slug: a.slug }));
      
    // Next.js plante si generateStaticParams retourne un tableau vide avec output: export
    if (slugs.length === 0) {
      return [{ slug: "no-articles" }];
    }
    
    return slugs;
  } catch {
    return [];
  }
}

/** Génère les métadonnées SEO */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const article = await sanityFetch({
      query: articleBySlugQuery,
      params: { slug },
      tags: ["article"],
    });
    if (!article) return { title: "Article non trouvé | ISAM Kinshasa" };
    return {
      title: article.title,
      description: article.excerpt,
      alternates: {
        canonical: `/actualites/${article.slug}`,
      },
      openGraph: {
        title: article.title,
        description: article.excerpt,
        images: article.image ? [{ url: article.image }] : [],
        type: "article",
        publishedTime: article.publishedAt || article._createdAt,
        authors: ["ISAM Kinshasa"],
        url: `/actualites/${article.slug}`,
      },
      twitter: {
        card: "summary_large_image",
        title: article.title,
        description: article.excerpt,
        images: article.image ? [article.image] : [],
      },
    };
  } catch {
    return { title: "Article | ISAM Kinshasa" };
  }
}

// ── PortableText Components ────────────────────────────────────────────────────
const portableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold font-display mt-12 mb-5 text-slate-800 relative pl-5 border-l-4 border-isam-blue">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold font-display mt-10 mb-4 text-slate-700">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="relative my-10 pl-8 pr-6 py-6 bg-isam-blue/4 rounded-2xl border-l-4 border-isam-blue">
        <span className="absolute top-3 left-4 text-isam-blue/20 text-6xl font-serif leading-none select-none">"</span>
        <p className="italic text-gray-700 text-lg leading-relaxed relative z-10">{children}</p>
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-[17px] text-justify">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-slate-800">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-gray-600">{children}</em>,
    underline: ({ children }) => <span className="underline decoration-isam-blue decoration-2">{children}</span>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-isam-blue underline underline-offset-2 hover:text-isam-blue-dark font-medium transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure className="my-10">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ""}
            className="w-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        {value.alt && (
          <figcaption className="text-center text-sm text-gray-400 mt-3 italic">
            {value.alt}
          </figcaption>
        )}
      </figure>
    ),
    table: ({ value }) => {
      if (!value || !value.rows || value.rows.length === 0) return null;

      return (
        <div className="overflow-x-auto my-10 rounded-2xl shadow-sm border border-gray-200">
          <table className="w-full text-left border-collapse min-w-[600px] bg-white">
            <tbody className="divide-y divide-gray-200">
              {value.rows.map((row, rowIndex) => {
                const isHeader = rowIndex === 0;
                return (
                  <tr
                    key={row._key || rowIndex}
                    className={
                      isHeader
                        ? "bg-isam-blue text-white"
                        : "hover:bg-isam-blue/5 transition-colors even:bg-slate-50"
                    }
                  >
                    {row.cells.map((cell, cellIndex) => {
                      const CellTag = isHeader ? "th" : "td";
                      return (
                        <CellTag
                          key={cellIndex}
                          className={`p-4 border-x align-top ${
                            isHeader
                              ? "font-bold font-display tracking-wide border-white/20 whitespace-nowrap text-sm"
                              : "text-gray-700 text-sm leading-relaxed border-gray-100"
                          }`}
                        >
                          {cell || ""}
                        </CellTag>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    },
  },
};

// ── Category helpers ───────────────────────────────────────────────────────────
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

// ── Estimate reading time ──────────────────────────────────────────────────────
function estimateReadingTime(body) {
  if (!body) return 1;
  const text = body
    .filter((b) => b._type === "block")
    .flatMap((b) => b.children || [])
    .map((c) => c.text || "")
    .join(" ");
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

// ── Related Article Card ───────────────────────────────────────────────────────
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

// ── Main Page ──────────────────────────────────────────────────────────────────
export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  let article = null;
  let related = [];

  try {
    const [fetchedArticle, fetchedRelated, fetchedEvents] = await Promise.all([
      sanityFetch({ query: articleBySlugQuery, params: { slug }, tags: ["article"] }),
      sanityFetch({ query: relatedArticlesQuery, params: { slug }, tags: ["article"] }),
      sanityFetch({ query: allEventsQuery, tags: ["event"] }),
    ]);

    article = fetchedArticle;
    
    const combined = [...(fetchedRelated || []), ...(fetchedEvents || [])]
      .filter((item) => item._id !== article?._id)
      .sort((a, b) => new Date(b.publishedAt || b.date || 0) - new Date(a.publishedAt || a.date || 0))
      .slice(0, 3);
      
    related = combined;
  } catch (error) {
    console.error("Erreur Sanity :", error);
  }

  if (!article) notFound();

  const publishedDate = article.publishedAt || article._createdAt
    ? new Date(article.publishedAt || article._createdAt).toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const readTime = estimateReadingTime(article.body);
  const catStyle = categoryColors[article.category] || categoryColors.actualites;
  const catLabel = categoryLabels[article.category] || article.category;

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">

        {/* ── Page Hero ── */}
        <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1920&auto=format&fit=crop"
            alt="Actualités ISAM"
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
                  Article {article.category ? `- ${catLabel}` : ""}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-display leading-tight max-w-4xl">
                {article.title}
              </h1>
            </div>
          </div>
        </div>

        {/* ── Content area ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">

            {/* ── Article body ── */}
            <div>
              {/* Article Meta */}
              <div className="mb-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  {publishedDate && (
                    <span className="inline-flex items-center gap-1.5 text-gray-500 text-sm bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                      <Calendar className="w-4 h-4" />
                      {publishedDate}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-gray-500 text-sm bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                    <Clock className="w-4 h-4" />
                    {readTime} min de lecture
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 leading-tight font-display mb-8">
                  {article.title}
                </h1>
                
                {article.image && (
                  <ZoomableImage src={article.image} alt={article.title} />
                )}
              </div>

              {/* Excerpt lead */}
              {article.excerpt && (
                <div className="relative mb-10 pl-6 py-5 pr-6 bg-isam-light rounded-2xl border-l-4 border-isam-blue overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-isam-blue/5 rounded-full blur-2xl" />
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed italic relative">
                    {article.excerpt}
                  </p>
                </div>
              )}

              {/* Divider with share */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-isam-blue" />
                  <span className="font-medium">Article ISAM Kinshasa</span>
                </div>
                <button
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-isam-blue border border-gray-200 hover:border-isam-blue/30 px-4 py-1.5 rounded-full transition-all"
                  onClick={undefined}
                  aria-label="Partager"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  Partager
                </button>
              </div>

              {/* Body content */}
              <article className="max-w-none">
                {article.body ? (
                  <PortableText value={article.body} components={portableTextComponents} />
                ) : (
                  <div className="text-center py-16">
                    <p className="text-gray-400 italic text-lg">Aucun contenu disponible pour cet article.</p>
                  </div>
                )}
              </article>

              {/* Tags / Footer */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm text-gray-400 font-medium">Catégorie :</span>
                  {article.category && (
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border ${catStyle}`}>
                      {catLabel}
                    </span>
                  )}
                </div>
              </div>

              {/* Navigation bottom */}
              <div className="mt-10">
                <Link
                  href="/actualites"
                  className="inline-flex items-center gap-2 text-isam-blue font-semibold hover:gap-3 transition-all duration-300 group text-sm"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Voir toutes les actualités
                </Link>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <aside className="space-y-6 lg:sticky lg:top-28">


              {/* Related articles */}
              {related.length > 0 && (
                <div className="bg-isam-light rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-slate-800 font-display mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-isam-blue rounded-full" />
                    Publications récentes
                  </h3>
                  <div className="space-y-1">
                    {related.map((rel) => (
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
