import { sanityFetch } from "@/sanity/client";
import { allArticlesQuery, allEventsQuery } from "@/sanity/queries";

export const dynamic = "force-static";

export default async function sitemap() {
  const baseUrl = "https://www.isamkinshasa.com";

  // Récupération dynamique depuis Sanity
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
    console.error("Erreur lors de la génération du sitemap :", error);
  }

  // Construction des URLs dynamiques pour les articles
  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/actualites/${article.slug?.current || article.slug}`,
    lastModified: new Date(article.publishedAt || article._createdAt || new Date()),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Construction des URLs dynamiques pour les événements
  const eventUrls = events.map((event) => ({
    url: `${baseUrl}/actualites/evenement/${event._id}`,
    lastModified: new Date(event.date || event._createdAt || new Date()),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Routes statiques
  const staticRoutes = [
    "",
    "/apropos",
    "/admissions",
    "/filiere",
    "/comite",
    "/contact",
    "/actualites",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/actualites" ? "daily" : "monthly",
    priority: route === "" ? 1 : 0.9,
  }));

  return [...staticRoutes, ...articleUrls, ...eventUrls];
}
