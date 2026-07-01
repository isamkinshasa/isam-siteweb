import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/data/siteData";
import SectionHeader from "@/components/ui/SectionHeader";
import NewsCard from "@/components/ui/NewsCard";
import EventCard from "@/components/ui/EventCard";

export const metadata = {
  title: "Actualités | ISAM Kinshasa",
  description: "Toutes les actualités et événements de l'Institut Supérieur des Arts et Métiers de Kinshasa.",
};

export default function ActualitesPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 flex-grow bg-isam-light min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="À la Une de l'ISAM" 
            subtitle="Actualités & Événements" 
          />
          
          <div className="grid lg:grid-cols-3 gap-12 mt-12">
            {/* Main News Section */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-bold mb-8 border-b border-gray-200 pb-4">Toutes les Actualités</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {siteData.news.map((article, index) => (
                  <NewsCard key={article.id} article={article} index={index} />
                ))}
              </div>
            </div>

            {/* Events Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h2 className="text-2xl font-serif font-bold mb-8 border-b border-gray-200 pb-4">Agenda</h2>
                <div className="space-y-6">
                  {siteData.events.map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} />
                  ))}
                </div>
                
                <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-isam-yellow/20 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold font-serif mb-2">Newsletter</h3>
                  <p className="text-gray-600 mb-6 text-sm">Ne manquez aucun événement important. Abonnez-vous à notre newsletter.</p>
                  <form className="space-y-3">
                    <input type="email" placeholder="Votre adresse email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-isam-blue/20" />
                    <button className="w-full bg-isam-blue text-white px-4 py-3 rounded-xl font-medium hover:bg-isam-blue-dark transition-colors">S'abonner</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
