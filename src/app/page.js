import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import EventsSection from "@/components/home/EventsSection";
import ResearchSection from "@/components/home/ResearchSection";
import GallerySection from "@/components/home/GallerySection";
import ContactSection from "@/components/home/ContactSection";
import NewsCard from "@/components/ui/NewsCard";
import { siteData } from "@/data/siteData";
import Link from "next/link";

export default function Home() {
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
              {siteData.news.slice(0, 3).map((article, index) => (
                <NewsCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </div>
        </section>

        <GallerySection />
        <EventsSection />
        <ResearchSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
