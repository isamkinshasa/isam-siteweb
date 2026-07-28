import { createClient } from "next-sanity";

const client = createClient({
  projectId: "a9cb5294",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const query = `*[_type == "article"] | order(coalesce(publishedAt, _createdAt) desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  _createdAt,
  category,
  excerpt,
  "image": image.asset->url,
}`;

async function test() {
  const result = await client.fetch(query);
  console.log("ARTICLES FOUND:", result.length);
  console.log(result);
}
test();
