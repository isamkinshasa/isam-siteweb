/**
 * Toutes les requêtes GROQ réutilisables pour le site ISAM Kinshasa.
 */

// ── Articles ──────────────────────────────────────────────────────────────────

/** Tous les articles triés du plus récent au plus ancien */
export const allArticlesQuery = `*[_type == "article"] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  _createdAt,
  category,
  excerpt,
  "image": image.asset->url,
}`;

/** Un article par slug (pour la page détail) */
export const articleBySlugQuery = `*[_type == "article" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  _createdAt,
  category,
  excerpt,
  "image": image.asset->url,
  body,
}`;

/** 3 articles connexes (même catégorie ou récents, excluant le courant) */
export const relatedArticlesQuery = `*[_type == "article" && slug.current != $slug] | order(coalesce(publishedAt, _createdAt) desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  _createdAt,
  category,
  excerpt,
  "image": image.asset->url,
}`;

/** Les 3 derniers articles (pour la section accueil) */
export const latestArticlesQuery = `*[_type == "article"] | order(coalesce(publishedAt, _createdAt) desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  _createdAt,
  category,
  excerpt,
  "image": image.asset->url,
}`;

// ── Événements ────────────────────────────────────────────────────────────────

/** Tous les événements triés par date */
export const allEventsQuery = `*[_type == "event"] | order(date asc) {
  _id,
  title,
  date,
  location,
  time,
  description,
  category,
  "image": image.asset->url,
}`;

/** Un événement par ID */
export const eventByIdQuery = `*[_type == "event" && _id == $id][0] {
  _id,
  title,
  date,
  location,
  time,
  description,
  category,
  "image": image.asset->url,
}`;

/** Les 3 prochains événements */
export const upcomingEventsQuery = `*[_type == "event" && date >= $today] | order(date asc)[0...3] {
  _id,
  title,
  date,
  location,
  time,
  description,
  category,
  "image": image.asset->url,
}`;
