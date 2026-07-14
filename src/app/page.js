import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import EventsSection from "@/components/home/EventsSection";
import ResearchSection from "@/components/home/ResearchSection";
import GallerySection from "@/components/home/GallerySection";
import ContactSection from "@/components/home/ContactSection";
import NewsCard from "@/components/ui/NewsCard";
import OrganizationSection from "@/components/home/OrganizationSection";
import StatsSection from "@/components/home/StatsSection";
import { siteData } from "@/data/siteData";
import Link from "next/link";
import { sanityFetch } from "@/sanity/client";
import { allEventsQuery, latestArticlesQuery } from "@/sanity/queries";

export default async function Home() {
  const events = await sanityFetch({ query: allEventsQuery });
  const articles = await sanityFetch({ query: latestArticlesQuery });

  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        {/* ── Actualités section ── */}
        <section className="py-14 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold font-serif text-slate-800">Actualités</h2>
              <Link href="/actualites" className="text-isam-blue text-sm font-semibold hover:underline">
                Toutes les actualités
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {articles.map((article, index) => {
                const formattedArticle = {
                  ...article,
                  id: article._id,
                  slug: article.slug?.current || article.slug,
                  date: article.publishedAt 
                    ? new Date(article.publishedAt).toLocaleDateString("fr-FR", { day: '2-digit', month: 'long', year: 'numeric' })
                    : "Récemment",
                };
                return <NewsCard key={article._id} article={formattedArticle} index={index} />;
              })}
            </div>
          </div>
        </section>

        <OrganizationSection />
        <StatsSection />

        <GallerySection />
        <EventsSection events={events} />
        <ResearchSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
