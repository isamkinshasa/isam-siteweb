import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import EnrollButton from "@/components/ui/EnrollButton";
import { ArrowRight, Scissors, Palette, Sparkles, BookOpen, Microscope, Briefcase, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Nos Filières | ISAM Kinshasa",
  description: "Découvrez les formations offertes à l'ISAM Kinshasa : Technique d'habillement, Modélisme, Coiffure et Esthétique.",
};

const formationsOrga = [
  {
    icon: BookOpen,
    title: "Durée des études",
    desc: "La formation se déroule généralement sur 3 ans pour obtenir un diplôme de premier cycle (licence professionnelle) et deux ans pour le diplôme en master."
  },
  {
    icon: GraduationCap,
    title: "Système pédagogique",
    desc: "L’ISAM adopte le système Licence-Master-Doctorat (LMD) qui facilite la mobilité académique et l’harmonisation avec les standards internationaux."
  },
  {
    icon: Microscope,
    title: "Modules de formation",
    desc: "Techniques professionnelles : coupe et couture, modélisme, stylisme. Et Techniques de gestion : marketing, entrepreneuriat."
  },
  {
    icon: Briefcase,
    title: "Stages et projets",
    desc: "Les étudiants doivent effectuer des stages pratiques. Réalisation de projets tutorés permettant d’appliquer les connaissances sur des cas réels."
  }
];

export default function FilierePage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        
        {/* ── Page Hero ── */}
        <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1920&auto=format&fit=crop"
            alt="Atelier ISAM Kinshasa"
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
                Formations
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight font-display max-w-3xl mb-6">
                Nos Mentions & Filières
              </h1>
              <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                Découvrez les formations d'excellence offertes à l'ISAM Kinshasa pour façonner les créateurs et entrepreneurs de demain.
              </p>
            </div>
          </div>
        </div>

        {/* ── Organisation Section ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border bg-isam-blue/8 border-isam-blue/20 text-isam-blue mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-isam-blue animate-pulse" />
              Pédagogie
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-6 leading-tight">
              Organisation de la Formation
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formationsOrga.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-isam-light border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-isam-blue mb-6 group-hover:bg-isam-blue group-hover:text-white transition-colors duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-display text-slate-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Formations détaillées */}
        <div className="bg-isam-light py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              title="Mentions & Filières Détaillées" 
              subtitle="Nos Programmes" 
            />
            
            <div className="space-y-16 mt-16">
              {/* Technique d'habillement */}
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-40 h-40 rounded-full bg-isam-blue/10 flex items-center justify-center text-isam-blue">
                    <Scissors className="w-20 h-20" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Technique d'habillement</h2>
                  <p className="text-gray-600 mb-6 text-lg">Apprenez les fondamentaux et les techniques avancées de la coupe et de la couture. Nos ateliers sont équipés de machines modernes pour simuler un environnement professionnel industriel et artisanal.</p>
                  <ul className="space-y-3 mb-8 text-gray-700">
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-isam-blue" /> Confection artisanale</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-isam-blue" /> Didactique de mode</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-isam-blue" /> Gestion des ateliers de production</li>
                  </ul>
                  <EnrollButton className="inline-flex items-center justify-center gap-2 bg-isam-blue text-white px-6 py-3 rounded-full font-medium hover:bg-isam-blue-dark transition-colors">S'inscrire à cette filière <ArrowRight className="w-4 h-4" /></EnrollButton>
                </div>
              </div>

              {/* Modélisme */}
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row-reverse gap-12 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-40 h-40 rounded-full bg-isam-yellow/20 flex items-center justify-center text-yellow-600">
                    <Palette className="w-20 h-20" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Modélisme & Stylisme</h2>
                  <p className="text-gray-600 mb-6 text-lg">Développez votre vision créative. De l'esquisse à la réalisation du patron, cette filière vous prépare à devenir le cerveau créatif derrière les collections de demain.</p>
                  <ul className="space-y-3 mb-8 text-gray-700">
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-isam-yellow" /> Design et Création</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-isam-yellow" /> Management de la Mode</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-isam-yellow" /> Stylisme professionnel</li>
                  </ul>
                  <EnrollButton className="inline-flex items-center justify-center gap-2 bg-isam-blue text-white px-6 py-3 rounded-full font-medium hover:bg-isam-blue-dark transition-colors">S'inscrire à cette filière <ArrowRight className="w-4 h-4" /></EnrollButton>
                </div>
              </div>

              {/* Coiffure et Esthétique */}
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-40 h-40 rounded-full bg-isam-green/10 flex items-center justify-center text-isam-green">
                    <Sparkles className="w-20 h-20" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Coiffure et Esthétique</h2>
                  <p className="text-gray-600 mb-6 text-lg">Une nouvelle filière répondant à la demande croissante du marché de la beauté. Formez-vous aux techniques modernes de soins, de maquillage et de coiffure professionnelle.</p>
                  <ul className="space-y-3 mb-8 text-gray-700">
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-isam-green" /> Soins du corps et du visage</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-isam-green" /> Coiffure professionnelle</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-isam-green" /> Gestion de salon de beauté</li>
                  </ul>
                  <EnrollButton className="inline-flex items-center justify-center gap-2 bg-isam-blue text-white px-6 py-3 rounded-full font-medium hover:bg-isam-blue-dark transition-colors">S'inscrire à cette filière <ArrowRight className="w-4 h-4" /></EnrollButton>
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
