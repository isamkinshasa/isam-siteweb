import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteData } from "@/data/siteData";

export const metadata = {
  title: "Comité de Gestion | ISAM Kinshasa",
  description: "Découvrez les membres du comité de gestion de l'ISAM Kinshasa.",
};

export default function ComitePage() {
  return (
    <>
      <Header />
      <main className="bg-isam-light min-h-screen">
        
        {/* ── Page Hero ── */}
        <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop"
            alt="Direction ISAM Kinshasa"
            className="absolute inset-0 w-full h-full object-cover scale-105"
            style={{ transformOrigin: "center" }}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/50 to-gray-900/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-isam-blue/60 to-transparent mix-blend-multiply" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left mt-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 border border-white/25 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-6 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-isam-yellow animate-pulse" />
                Gouvernance
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight font-display max-w-3xl mb-6">
                Le Comité de Gestion
              </h1>
              <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                Découvrez les personnalités qui dirigent et façonnent l'avenir de l'Institut Supérieur des Arts et Métiers de Kinshasa.
              </p>
            </div>
          </div>
        </div>

        {/* ── Content Section ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border bg-isam-blue/8 border-isam-blue/20 text-isam-blue mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-isam-blue animate-pulse" />
              Équipe Dirigeante
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-6 leading-tight">
              L'excellence à la tête de notre institution
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Composé de membres éminents du monde académique, notre comité de gestion s'assure du bon fonctionnement et du développement continu de l'ISAM.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.committee.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100 group flex flex-col">
                <div className="h-80 overflow-hidden bg-gray-200 relative">
                  <div className="absolute inset-0 bg-isam-blue/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                  <img 
                    src={member.image} 
                    alt={member.role}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                  />
                  {/* Decorative gradient at bottom of image */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
                </div>
                
                <div className="px-8 pb-8 pt-2 text-center relative flex-grow flex flex-col items-center">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-isam-blue to-isam-blue-dark text-white px-5 py-2 rounded-full text-xs font-bold shadow-lg shadow-isam-blue/30 whitespace-nowrap z-20 border border-white/10">
                    {member.role}
                  </div>
                  
                  <h3 className="text-xl font-bold font-display text-slate-800 mt-6 mb-3 group-hover:text-isam-blue transition-colors">{member.name}</h3>
                  <div className="w-10 h-1 bg-isam-yellow rounded-full mb-4 mx-auto" />
                  
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
