import { createClient } from "next-sanity";
import { sanityConfig } from "./config";

export const client = createClient({
  ...sanityConfig,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_READ_TOKEN,
});

/**
 * Effectue une requête GROQ sur le dataset Sanity.
 * @param {string} query - Requête GROQ
 * @param {object} params - Paramètres optionnels
 */
export async function sanityFetch({ query, params = {}, tags = [] }) {
  try {
    const isDev = process.env.NODE_ENV === "development";
    const data = await client.fetch(query, params, {
      next: {
        // En développement, 0 sec pour voir les nouveaux articles immédiatement sans attendre le cache ISR
        revalidate: isDev ? 0 : 60,
        tags,
      },
    });
    return data;
  } catch (error) {
    console.error("Erreur de récupération Sanity :", error);
    return null;
  }
}

