import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Admissions | ISAM Kinshasa",
  description: "Rejoignez l'ISAM Kinshasa. Découvrez les procédures d'admission et inscrivez-vous en ligne.",
};

export default function AdmissionsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 flex-grow bg-isam-light min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Procédures d'Admission" 
            subtitle="Rejoignez-nous" 
          />
          
          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">Conditions d'admission</h2>
              <p className="text-gray-600 mb-8">Pour être admis à l'Institut Supérieur des Arts et Métiers, le candidat doit remplir les conditions suivantes :</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-isam-blue shrink-0" />
                  <span className="text-gray-700">Être détenteur d'un Diplôme d'État ou d'un titre équivalent reconnu par le Ministère de l'ESU.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-isam-blue shrink-0" />
                  <span className="text-gray-700">Passer avec succès le concours d'admission (pour les options spécifiques).</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-isam-blue shrink-0" />
                  <span className="text-gray-700">Soumettre un dossier de candidature complet dans les délais impartis.</span>
                </li>
              </ul>
              
              <div className="bg-isam-blue/5 p-6 rounded-2xl border border-isam-blue/10">
                <h3 className="font-bold mb-2">Dossier à fournir</h3>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>Formulaire d'inscription dûment rempli</li>
                  <li>Copie légalisée du Diplôme d'État</li>
                  <li>Attestation de naissance récente</li>
                  <li>Certificat d'aptitude physique</li>
                  <li>4 photos passeports récentes</li>
                  <li>Preuve de paiement des frais d'inscription</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-isam-blue text-white rounded-3xl p-8 lg:p-12 shadow-xl">
                <h2 className="text-3xl font-serif font-bold mb-4">Inscriptions 2025-2026</h2>
                <p className="text-blue-100 mb-8 text-lg">Les inscriptions pour la nouvelle année académique sont ouvertes. Sécurisez votre place dans la meilleure école de mode d'Afrique centrale.</p>
                
                <a 
                  href="https://isam.optsolution.net/demande-d-inscription-en-ligne-2025-2026" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-isam-yellow text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
                >
                  S'inscrire en ligne
                </a>
                
                <p className="mt-6 text-sm text-blue-200 text-center">Vous serez redirigé vers notre plateforme sécurisée (OptSolution).</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
