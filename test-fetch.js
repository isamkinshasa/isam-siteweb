const { createClient } = require("next-sanity");

const sanityConfig = {
  projectId: "lpesrytz",
  dataset: "isamkin",
  apiVersion: "2024-01-01",
  useCdn: true,
};

const client = createClient({
  ...sanityConfig,
  useCdn: process.env.NODE_ENV === "production",
});

async function sanityFetch({ query, params = {}, tags = [] }) {
  try {
    const isDev = process.env.NODE_ENV === "development";
    const data = await client.fetch(query, params, {
      next: {
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

async function test() {
  const allArticlesQuery = `*[_type == "article"] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  _createdAt,
  category,
  excerpt,
  "image": image.asset->url,
}`;

  console.log("Fetching articles...");
  const articles = await sanityFetch({ query: allArticlesQuery, tags: ["article"] });
  console.log("Result:", articles);
}

test();
