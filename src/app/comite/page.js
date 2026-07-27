import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/data/siteData";

export const metadata = {
  title: "Comité de Gestion | ISAM Kinshasa",
  description: "Découvrez les membres du comité de gestion de l'ISAM Kinshasa.",
};

export default function ComitePage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen">
        
        {/* ── Page Hero : Split Screen Intelligent Layout ── */}
        <div className="relative w-full min-h-[500px] lg:h-[75vh] lg:min-h-[650px] flex flex-col lg:flex-row overflow-hidden bg-slate-950">
          
          {/* Colonne Gauche : Texte et Titres */}
          <div className="relative z-10 w-full lg:w-[55%] flex items-center bg-gradient-to-br from-slate-950 via-isam-blue-dark to-slate-900 p-8 sm:p-12 lg:p-16 xl:p-24 border-r border-white/5">
            <div className="absolute inset-0 section-dots opacity-15" />
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-isam-blue/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest text-isam-yellow mb-6 backdrop-blur-md shadow-inner">
                <span className="w-2 h-2 rounded-full bg-isam-yellow animate-pulse" />
                Gouvernance & Haute Direction
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-display mb-6">
                Le Comité de Gestion
              </h1>
              <p className="text-blue-100/90 text-lg md:text-xl leading-relaxed font-light mb-8">
                Découvrez les autorités académiques qui dirigent, inspirent et façonnent l'excellence de l'Institut Supérieur des Arts et Métiers de Kinshasa.
              </p>
            </div>
          </div>

          {/* Colonne Droite : Photo Intégrée Intelligemment */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-full lg:w-[45%]">
            <img
              src="/comite-hero.jpg"
              alt="Photo Officielle du Comité de Gestion"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center 15%" }}
            />
            {/* Dégradé de transition subtil pour fusionner l'image avec la section gauche (visible uniquement sur desktop) */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900 to-transparent hidden lg:block pointer-events-none" />
            
            {/* Légère ombre en bas pour mobile/tablette afin d'adoucir la coupe si besoin */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-50 to-transparent lg:hidden pointer-events-none" />
            
            {/* Petit badge descriptif flottant sur la photo */}
            <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 bg-gray-950/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15 shadow-xl pointer-events-none hidden sm:block">
              <p className="text-sm font-semibold text-white">Comité de Gestion de l'ISAM</p>
              <p className="text-[10px] text-isam-yellow/90 uppercase tracking-widest mt-0.5">Photo officielle</p>
            </div>
          </div>
        </div>

        {/* ── Individual Committee Members Section ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border bg-isam-blue/8 border-isam-blue/20 text-isam-blue mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-isam-blue animate-pulse" />
              Membres du Comité
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-6 leading-tight">
              Membres de l'Équipe Dirigeante
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Présentation détaillée des autorités académiques et administratives garantes de la mission d'enseignement et de recherche de l'ISAM Kinshasa.
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
