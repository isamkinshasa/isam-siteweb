import { createClient } from "next-sanity";
import { sanityConfig } from "./config";

export const client = createClient({
  ...sanityConfig,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
});

/**
 * Effectue une requête GROQ sur le dataset Sanity.
 * @param {string} query - Requête GROQ
 * @param {object} params - Paramètres optionnels
 */
export async function sanityFetch({ query, params = {}, tags = [] }) {
  try {
    const data = await client.fetch(query, params, {
      next: {
        tags,
      },
    });
    return data;
  } catch (error) {
    console.error("Erreur de récupération Sanity :", error);
    return null;
  }
}

