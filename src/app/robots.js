export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio/"], // Prevent indexing Sanity Studio
    },
    sitemap: "https://www.isamkinshasa.com/sitemap.xml",
  };
}
