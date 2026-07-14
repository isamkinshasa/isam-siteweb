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
  return client.fetch(query, params, {
    next: {
      // Revalidation toutes les 60 secondes (ISR)
      revalidate: 60,
      tags,
    },
  });
}
