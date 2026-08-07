import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/data/siteData";
import { 
  Crown, 
  BookOpen, 
  Users, 
  FlaskConical, 
  Calculator, 
  Award,
  Network
} from "lucide-react";

export const metadata = {
  title: "Comité de Gestion | Organigramme",
  description: "Découvrez l'organigramme et les membres du comité de gestion de l'ISAM Kinshasa.",
  alternates: {
    canonical: "/comite",
  },
  openGraph: {
    title: "Comité de Gestion | ISAM Kinshasa",
    description: "Découvrez l'organigramme et les membres du comité de gestion de l'ISAM Kinshasa.",
    url: "/comite",
  },
};

export default function ComitePage() {
  const dg = siteData.committee.find((m) => m.image.includes("dg") || m.role.toLowerCase().includes("directeur")) || siteData.committee[0];
  const members = siteData.committee.filter((m) => m !== dg);

  const getMemberIcon = (role) => {
    const r = role.toLowerCase();
    if (r.includes("académique")) return <BookOpen className="w-4 h-4 shrink-0" />;
    if (r.includes("administratif")) return <Users className="w-4 h-4 shrink-0" />;
    if (r.includes("recherche")) return <FlaskConical className="w-4 h-4 shrink-0" />;
    if (r.includes("budget")) return <Calculator className="w-4 h-4 shrink-0" />;
    return <Award className="w-4 h-4 shrink-0" />;
  };

  const getRoleColor = (role) => {
    const r = role.toLowerCase();
    if (r.includes("académique")) return "from-blue-600 to-isam-blue";
    if (r.includes("administratif")) return "from-slate-700 to-slate-900";
    if (r.includes("recherche")) return "from-indigo-600 to-isam-blue-dark";
    if (r.includes("budget")) return "from-amber-600 to-amber-700";
    return "from-isam-blue to-isam-blue-dark";
  };

  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen">
        
        {/* ── Page Hero : Split Screen Intelligent Layout ── */}
        <div className="relative w-full min-h-[480px] lg:h-[65vh] lg:min-h-[550px] flex flex-col lg:flex-row overflow-hidden bg-slate-950">
          
          {/* Colonne Gauche : Texte et Titres */}
          <div className="relative z-10 w-full lg:w-[55%] flex items-center bg-gradient-to-br from-slate-950 via-isam-blue-dark to-slate-900 p-8 sm:p-12 lg:p-16 xl:p-20 border-r border-white/5">
            <div className="absolute inset-0 section-dots opacity-15" />
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-isam-blue/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest text-isam-yellow mb-6 backdrop-blur-md shadow-inner">
                <span className="w-2 h-2 rounded-full bg-isam-yellow animate-pulse" />
                Gouvernance & Haute Direction
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight font-display mb-6">
                Organigramme du Comité de Gestion
              </h1>
              <p className="text-blue-100/90 text-lg md:text-xl leading-relaxed font-light">
                Découvrez la structure hiérarchique et les autorités académiques qui dirigent, inspirent et façonnent l'excellence de l'Institut Supérieur des Arts et Métiers de Kinshasa.
              </p>
            </div>
          </div>

          {/* Colonne Droite : Photo Intégrée Intelligemment */}
          <div className="relative w-full h-[360px] sm:h-[420px] lg:h-full lg:w-[45%]">
            <img
              src="/comite-hero.jpg"
              alt="Photo Officielle du Comité de Gestion"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center 15%" }}
            />
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900 to-transparent hidden lg:block pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-50 to-transparent lg:hidden pointer-events-none" />
            
            <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 bg-gray-950/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15 shadow-xl pointer-events-none hidden sm:block">
              <p className="text-sm font-semibold text-white">Comité de Gestion de l'ISAM</p>
              <p className="text-[10px] text-isam-yellow/90 uppercase tracking-widest mt-0.5">Photo officielle</p>
            </div>
          </div>
        </div>

        {/* ── Section Organigramme ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border bg-isam-blue/8 border-isam-blue/20 text-isam-blue mb-4">
              <Network className="w-3.5 h-3.5" />
              Structure Institutionnelle
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 leading-tight">
              Organigramme de l'Équipe Dirigeante
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              La Direction Générale assure la gouvernance stratégique, assistée par les secrétariats généraux et l'administration du budget.
            </p>
          </div>
          
          {/* ORGANIGRAMME CONTAINER */}
          <div className="relative">

            {/* ── NIVEAU 1 : DIRECTEUR GÉNÉRAL (SEUL EN HAUT) ── */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-md bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-isam-yellow/70 group relative hover:-translate-y-1">
                
                {/* Badge Prestige DG */}
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-amber-500 to-isam-yellow text-slate-950 font-bold text-xs uppercase px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 tracking-wider border border-white/40">
                  <Crown className="w-3.5 h-3.5" />
                  Haute Direction
                </div>

                <div className="h-80 sm:h-96 overflow-hidden bg-slate-900 relative">
                  <img 
                    src={dg.image} 
                    alt={dg.role}
                    className="w-full h-full object-cover object-top transition-transform duration-700 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
                </div>
                
                <div className="p-6 sm:p-8 text-center relative bg-white">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-isam-blue to-isam-blue-dark text-white px-5 py-2 rounded-full text-xs font-bold shadow-lg shadow-isam-blue/25 -mt-12 relative z-20 border border-white/20 mb-3 uppercase tracking-wider">
                    <Crown className="w-3.5 h-3.5 text-isam-yellow" />
                    {dg.role}
                  </div>
                  
                  <h3 className="text-2xl font-bold font-display text-slate-900 mt-2 mb-2 group-hover:text-isam-blue transition-colors">
                    {dg.name}
                  </h3>
                  <div className="w-12 h-1 bg-isam-yellow rounded-full mb-3 mx-auto" />
                  
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    {dg.description}
                  </p>
                </div>
              </div>

              {/* Ligne verticale de liaison sous la DG */}
              <div className="w-1 h-12 md:h-16 bg-gradient-to-b from-isam-blue via-blue-500 to-blue-400 relative flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-isam-blue ring-4 ring-blue-100 absolute -bottom-1" />
              </div>
            </div>

            {/* ── CONNECTEURS ARBORESCENCE (DESKTOP) ── */}
            <div className="hidden lg:block relative mb-8">
              {/* Barre horizontale reliant les 4 postes */}
              <div className="mx-auto w-[75%] h-0.5 bg-blue-300 relative">
                {/* Point central de connexion avec la DG */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-isam-blue" />
              </div>

              {/* 4 tiges verticales descendantes vers chaque membre */}
              <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto">
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-blue-300" />
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-blue-300" />
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-blue-300" />
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-blue-300" />
                </div>
              </div>
            </div>

            {/* Mobile / Tablet Connector label */}
            <div className="lg:hidden text-center my-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-isam-blue text-xs font-semibold rounded-full shadow-sm">
                Membres du Comité sous la Direction Générale
              </span>
            </div>

            {/* ── NIVEAU 2 : LES AUTRES MEMBRES EN BAS (GRID 4 COLONNES) ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 xl:gap-8">
              {members.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100 group flex flex-col relative"
                >
                  <div className="h-72 overflow-hidden bg-slate-900 relative">
                    <img 
                      src={member.image} 
                      alt={member.role}
                      className="w-full h-full object-cover object-top transition-all duration-700 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/60 to-transparent z-10" />
                  </div>
                  
                  <div className="px-6 pb-6 pt-3 text-center relative flex-grow flex flex-col items-center">
                    <div className={`-mt-7 bg-gradient-to-r ${getRoleColor(member.role)} text-white px-3.5 py-1.5 rounded-full text-[11px] font-bold shadow-md whitespace-nowrap z-20 border border-white/20 flex items-center gap-1.5 max-w-[90%] truncate`}>
                      {getMemberIcon(member.role)}
                      <span className="truncate">{member.role}</span>
                    </div>
                    
                    <h4 className="text-lg font-bold font-display text-slate-900 mt-4 mb-2 group-hover:text-isam-blue transition-colors leading-snug">
                      {member.name}
                    </h4>
                    <div className="w-8 h-1 bg-isam-yellow rounded-full mb-3 mx-auto" />
                    
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed flex-grow">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
