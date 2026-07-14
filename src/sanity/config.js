export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "lpesrytz",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "isamkin",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: true,
};
