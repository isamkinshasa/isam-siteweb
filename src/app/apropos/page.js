import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteData } from "@/data/siteData";

export const metadata = {
  title: "À Propos | ISAM Kinshasa",
  description: "Découvrez l'histoire, la mission et la vision de l'Institut Supérieur des Arts et Métiers de Kinshasa.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        
        {/* ── Page Hero ── */}
        <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1920&auto=format&fit=crop"
            alt="Campus ISAM Kinshasa"
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
                Notre Institution
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight font-display max-w-3xl mb-6">
                L'excellence au service de la créativité
              </h1>
              <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                Découvrez l'histoire, la mission et la vision de l'Institut Supérieur des Arts et Métiers de Kinshasa.
              </p>
            </div>
          </div>
        </div>

        {/* ── Content Section ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border bg-isam-blue/8 border-isam-blue/20 text-isam-blue mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-isam-blue animate-pulse" />
                Histoire & Vision
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-8 leading-tight">
                Scientia Splendet et Conscientia
              </h2>
              
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="leading-relaxed mb-6 text-justify">
                  L'Institut Supérieur des Arts et Métiers de Kinshasa (ISAM Kinshasa) est une institution publique d'enseignement supérieur et universitaire de la République Démocratique du Congo. Depuis sa création, l'ISAM s'est imposé comme la référence nationale et régionale dans la formation des élites créatives.
                </p>
                <div className="border-l-4 border-isam-yellow pl-6 my-8 py-2 bg-isam-yellow/5 rounded-r-2xl">
                  <p className="text-slate-700 italic font-medium leading-relaxed">
                    "Notre mission est de promouvoir l'excellence académique à travers des programmes innovants en technique d'habillement, modélisme et coiffure esthétique."
                  </p>
                </div>
                <p className="leading-relaxed text-justify">
                  Nous préparons nos étudiants à devenir non seulement des techniciens hors pair, mais de véritables entrepreneurs capables de redéfinir l'industrie de la mode et de la beauté en Afrique et dans le monde. Nos partenariats internationaux nous permettent d'offrir une formation alignée sur les standards globaux tout en valorisant notre patrimoine culturel riche.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-isam-blue/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-isam-yellow/15 rounded-full blur-3xl pointer-events-none translate-y-1/4 -translate-x-1/4" />
              
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1542304910-1c19b0284d72?q=80&w=800&auto=format&fit=crop" 
                  alt="Campus ISAM" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                    <p className="font-display font-bold text-2xl text-white mb-2">Campus Principal</p>
                    <p className="text-blue-200 flex items-center gap-2">
                      <svg className="w-4 h-4 text-isam-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Gombe, Kinshasa, RDC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="bg-isam-blue text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 section-dots opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 divide-x divide-white/10">
              <div className="text-center px-4 group">
                <div className="text-5xl md:text-6xl font-display font-bold mb-3 text-isam-yellow group-hover:scale-110 transition-transform duration-300">{siteData.stats.students}</div>
                <p className="text-blue-100 text-sm md:text-base font-medium uppercase tracking-wider">Étudiants</p>
              </div>
              <div className="text-center px-4 group">
                <div className="text-5xl md:text-6xl font-display font-bold mb-3 text-isam-yellow group-hover:scale-110 transition-transform duration-300">{siteData.stats.teachers}</div>
                <p className="text-blue-100 text-sm md:text-base font-medium uppercase tracking-wider">Enseignants</p>
              </div>
              <div className="text-center px-4 group">
                <div className="text-5xl md:text-6xl font-display font-bold mb-3 text-isam-yellow group-hover:scale-110 transition-transform duration-300">{siteData.stats.laboratories}</div>
                <p className="text-blue-100 text-sm md:text-base font-medium uppercase tracking-wider">Ateliers</p>
              </div>
              <div className="text-center px-4 group">
                <div className="text-5xl md:text-6xl font-display font-bold mb-3 text-isam-yellow group-hover:scale-110 transition-transform duration-300">{siteData.stats.partners}</div>
                <p className="text-blue-100 text-sm md:text-base font-medium uppercase tracking-wider">Partenaires</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
