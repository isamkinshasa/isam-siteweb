import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import EnrollButton from "@/components/ui/EnrollButton";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Admissions",
  description: "Rejoignez l'ISAM Kinshasa. Découvrez les procédures d'admission et inscrivez-vous en ligne.",
  alternates: {
    canonical: "/admissions",
  },
  openGraph: {
    title: "Admissions | ISAM Kinshasa",
    description: "Rejoignez l'ISAM Kinshasa. Découvrez les procédures d'admission et inscrivez-vous en ligne.",
    url: "/admissions",
  },
};

export default function AdmissionsPage() {
  return (
    <>
      <Header />
      <main className="bg-isam-light min-h-screen">
        
        {/* ── Page Hero ── */}
        <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920&auto=format&fit=crop"
            alt="Admissions ISAM Kinshasa"
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
                Rejoignez-nous
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight font-display max-w-3xl mb-6">
                Procédures d'Admission
              </h1>
              <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                Prêt à façonner l'avenir de la mode et de la beauté ? Découvrez comment intégrer l'ISAM Kinshasa et commencez votre parcours d'excellence.
              </p>
            </div>
          </div>
        </div>

        {/* ── Content Section ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Conditions Box */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-isam-blue/5 rounded-full blur-2xl group-hover:bg-isam-blue/10 transition-colors duration-500 pointer-events-none" />
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border bg-isam-blue/8 border-isam-blue/20 text-isam-blue mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-isam-blue" />
                Critères
              </div>
              <h2 className="text-3xl font-display font-bold mb-6 text-slate-800">Conditions d'admission</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">Pour être admis à l'Institut Supérieur des Arts et Métiers, le candidat doit remplir les conditions suivantes :</p>
              
              <ul className="space-y-5 mb-10">
                <li className="flex gap-4 items-start group/item">
                  <div className="w-8 h-8 rounded-full bg-isam-blue/10 flex items-center justify-center shrink-0 group-hover/item:bg-isam-blue group-hover/item:text-white transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-isam-blue group-hover/item:text-white" />
                  </div>
                  <span className="text-gray-700 leading-relaxed pt-1">Être détenteur d'un Diplôme d'État ou d'un titre équivalent reconnu par le Ministère de l'ESU.</span>
                </li>
                <li className="flex gap-4 items-start group/item">
                  <div className="w-8 h-8 rounded-full bg-isam-blue/10 flex items-center justify-center shrink-0 group-hover/item:bg-isam-blue group-hover/item:text-white transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-isam-blue group-hover/item:text-white" />
                  </div>
                  <span className="text-gray-700 leading-relaxed pt-1">Passer avec succès le concours d'admission (pour les options spécifiques).</span>
                </li>
                <li className="flex gap-4 items-start group/item">
                  <div className="w-8 h-8 rounded-full bg-isam-blue/10 flex items-center justify-center shrink-0 group-hover/item:bg-isam-blue group-hover/item:text-white transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-isam-blue group-hover/item:text-white" />
                  </div>
                  <span className="text-gray-700 leading-relaxed pt-1">Soumettre un dossier de candidature complet dans les délais impartis.</span>
                </li>
              </ul>
              
              <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200/60">
                <h3 className="font-bold mb-4 font-display text-slate-800 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-isam-yellow rounded-full" />
                  Dossier à fournir
                </h3>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Formulaire d'inscription dûment rempli</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Copie légalisée du Diplôme d'État</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Attestation de naissance récente</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Certificat d'aptitude physique</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" /> 4 photos passeports récentes</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Preuve de paiement des frais d'inscription</li>
                </ul>
              </div>
            </div>
            
            {/* CTA Box */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-isam-blue text-white rounded-[2rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-isam-yellow/15 rounded-full blur-3xl pointer-events-none translate-y-1/4 -translate-x-1/4" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                    <svg className="w-8 h-8 text-isam-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Inscriptions 2026-2027</h2>
                  <p className="text-blue-100 mb-10 text-lg leading-relaxed">Les inscriptions pour la nouvelle année académique sont officiellement ouvertes. Sécurisez votre place dans la meilleure école de mode d'Afrique centrale.</p>
                  
                  <EnrollButton 
                    className="flex items-center justify-center gap-3 w-full bg-isam-yellow text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-isam-yellow/20"
                  >
                    S'inscrire en ligne
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </EnrollButton>
                  
                  <div className="mt-8 flex items-center justify-center gap-3 text-sm text-blue-200 bg-white/5 py-3 px-4 rounded-lg border border-white/10">
                    <svg className="w-5 h-5 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Paiement et plateforme sécurisés
                  </div>
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
