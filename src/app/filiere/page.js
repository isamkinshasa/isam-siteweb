import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
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
      <main className="pt-32 pb-24 flex-grow bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <SectionHeader 
            title="Organisation de la Formation" 
            subtitle="Pédagogie" 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {formationsOrga.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-isam-light border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-isam-blue/10 rounded-2xl flex items-center justify-center text-isam-blue mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-serif">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
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
                  <Link href="/admissions" className="inline-flex items-center justify-center gap-2 bg-isam-blue text-white px-6 py-3 rounded-full font-medium hover:bg-isam-blue-dark transition-colors">S'inscrire à cette filière <ArrowRight className="w-4 h-4" /></Link>
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
                  <Link href="/admissions" className="inline-flex items-center justify-center gap-2 bg-isam-blue text-white px-6 py-3 rounded-full font-medium hover:bg-isam-blue-dark transition-colors">S'inscrire à cette filière <ArrowRight className="w-4 h-4" /></Link>
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
                  <Link href="/admissions" className="inline-flex items-center justify-center gap-2 bg-isam-blue text-white px-6 py-3 rounded-full font-medium hover:bg-isam-blue-dark transition-colors">S'inscrire à cette filière <ArrowRight className="w-4 h-4" /></Link>
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
