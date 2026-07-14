import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { sanityFetch } from "@/sanity/client";
import { articleBySlugQuery, allArticlesQuery } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
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
        images: article.image ? [{ url: article.image }] : [],
      },
    };
  } catch {
    return { title: "Article | ISAM Kinshasa" };
  }
}

const portableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold font-serif mt-10 mb-4 text-slate-800">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold font-serif mt-8 mb-3 text-slate-700">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-isam-blue pl-6 my-6 italic text-gray-600 text-lg">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-5">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-slate-800">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-isam-blue underline hover:text-isam-blue-dark transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure className="my-8">
        <img
          src={urlFor(value).width(900).url()}
          alt={value.alt || ""}
          className="w-full rounded-2xl object-cover shadow-md"
        />
        {value.alt && (
          <figcaption className="text-center text-sm text-gray-400 mt-2 italic">
            {value.alt}
          </figcaption>
        )}
      </figure>
    ),
  },
};

const categoryLabels = {
  actualites: "Actualités",
  evenements: "Événements",
  partenariats: "Partenariats",
  formations: "Formations",
  "vie-etudiante": "Vie étudiante",
};

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  let article = null;

  try {
    article = await sanityFetch({
      query: articleBySlugQuery,
      params: { slug },
      tags: ["article"],
    });
  } catch (error) {
    console.error("Erreur Sanity :", error);
  }

  if (!article) notFound();

  const publishedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <>
      <Header />
      <main className="pt-32 pb-24 bg-isam-light min-h-screen">
        {/* Hero image */}
        {article.image && (
          <div className="w-full h-[420px] overflow-hidden relative mb-12">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
        )}

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/actualites"
            className="inline-flex items-center gap-2 text-sm text-isam-blue font-medium hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux actualités
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {article.category && (
              <span className="inline-flex items-center gap-1.5 bg-isam-blue/10 text-isam-blue text-xs font-semibold px-3 py-1.5 rounded-full">
                <Tag className="w-3.5 h-3.5" />
                {categoryLabels[article.category] || article.category}
              </span>
            )}
            {publishedDate && (
              <span className="inline-flex items-center gap-1.5 text-gray-400 text-sm">
                <Calendar className="w-4 h-4" />
                {publishedDate}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 leading-tight mb-6">
            {article.title}
          </h1>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="text-lg text-gray-500 leading-relaxed border-l-4 border-isam-yellow pl-5 mb-10 italic">
              {article.excerpt}
            </p>
          )}

          {/* Divider */}
          <hr className="border-gray-200 mb-10" />

          {/* Body */}
          <article className="prose-custom">
            {article.body ? (
              <PortableText value={article.body} components={portableTextComponents} />
            ) : (
              <p className="text-gray-400 italic">Aucun contenu disponible.</p>
            )}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
