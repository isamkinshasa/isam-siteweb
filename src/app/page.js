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
import { ArrowRight } from "lucide-react";
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
        <section className="py-24 bg-isam-light relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-isam-yellow/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
              <div className="mb-0">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border bg-isam-blue/8 border-isam-blue/20 text-isam-blue mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-isam-blue animate-pulse" />
                  Dernières nouvelles
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-display text-gradient-blue">
                  Actualités
                </h2>
              </div>
              <Link
                href="/actualites"
                className="inline-flex items-center gap-1.5 text-isam-blue text-sm font-semibold hover:gap-3 transition-all duration-300 whitespace-nowrap group"
              >
                Toutes les actualités
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {articles.map((article, index) => {
                const formattedArticle = {
                  ...article,
                  id: article._id,
                  slug: article.slug?.current || article.slug,
                  date: article.publishedAt
                    ? new Date(article.publishedAt).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })
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
