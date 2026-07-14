import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { sanityFetch } from "@/sanity/client";
import { articleBySlugQuery, allArticlesQuery, relatedArticlesQuery } from "@/sanity/queries";
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

export const revalidate = 60;

/** Génère les slugs statiques pour les routes dynamiques */
export async function generateStaticParams() {
  try {
    const articles = await sanityFetch({ query: allArticlesQuery, tags: ["article"] });
    return (articles || []).map((a) => ({ slug: a.slug?.current })).filter(Boolean);
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
      title: `${article.title} | ISAM Kinshasa`,
      description: article.excerpt,
      openGraph: {
        title: article.title,
        description: article.excerpt,
        images: article.image ? [{ url: article.image }] : [],
        type: "article",
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
      <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-[17px]">{children}</p>
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
  const href = `/actualites/${article.slug?.current || article.slug}`;
  const catStyle = categoryColors[article.category] || categoryColors.actualites;
  const date = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })
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
    [article, related] = await Promise.all([
      sanityFetch({ query: articleBySlugQuery, params: { slug }, tags: ["article"] }),
      sanityFetch({ query: relatedArticlesQuery, params: { slug }, tags: ["article"] }),
    ]);
  } catch (error) {
    console.error("Erreur Sanity :", error);
  }

  if (!article) notFound();

  const publishedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("fr-FR", {
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

        {/* ── Page Hero (Generic) ── */}
        <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1920&auto=format&fit=crop"
            alt="Actualités ISAM"
            className="absolute inset-0 w-full h-full object-cover scale-105"
            style={{ transformOrigin: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/60 to-gray-900/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-isam-blue/60 to-transparent mix-blend-multiply" />
          
          <div className="absolute inset-0 flex items-center mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <Link
                href="/actualites"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                Retour aux actualités
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-white font-display">
                Lecture de l'article
              </h1>
            </div>
          </div>
        </div>

        {/* ── Content area ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">

            {/* ── Article body ── */}
            <div>
              {/* Article Header (Title, Meta, Image) */}
              <div className="mb-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  {article.category && (
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border ${catStyle}`}>
                      <Tag className="w-3 h-3" />
                      {catLabel}
                    </span>
                  )}
                  {publishedDate && (
                    <span className="inline-flex items-center gap-1.5 text-gray-500 text-xs bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                      <Calendar className="w-3.5 h-3.5" />
                      {publishedDate}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-gray-500 text-xs bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                    <Clock className="w-3.5 h-3.5" />
                    {readTime} min de lecture
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 leading-tight font-display mb-8">
                  {article.title}
                </h1>

                {article.image && (
                  <div className="w-full rounded-[2rem] overflow-hidden shadow-sm mb-10 border border-gray-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full max-h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
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

              {/* Share card */}
              <div className="bg-isam-blue rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                <h3 className="font-bold text-lg font-display mb-2 relative">Partager cet article</h3>
                <p className="text-blue-200 text-sm mb-5 relative">Aidez à diffuser cette information !</p>
                <div className="flex gap-2 relative">
                  {[
                    { label: "Facebook", color: "hover:bg-blue-700", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                    { label: "WhatsApp", color: "hover:bg-green-600", path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" },
                    { label: "X", color: "hover:bg-gray-700", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      aria-label={s.label}
                      className={`w-10 h-10 bg-white/15 ${s.color} rounded-xl flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Related articles */}
              {related.length > 0 && (
                <div className="bg-isam-light rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-slate-800 font-display mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-isam-blue rounded-full" />
                    Articles connexes
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

              {/* CTA Admissions */}
              <div className="bg-isam-yellow/10 border border-isam-yellow/30 rounded-2xl p-6">
                <div className="w-10 h-10 bg-isam-yellow rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-800 font-display mb-2">Rejoindre l'ISAM</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Intéressé par nos formations ? Déposez votre candidature dès maintenant.
                </p>
                <a
                  href="https://isam.optsolution.net/demande-d-inscription-en-ligne-2025-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-isam-blue hover:bg-isam-blue-dark text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md shadow-isam-blue/25 hover:-translate-y-0.5 w-full justify-center"
                >
                  S'inscrire maintenant
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
