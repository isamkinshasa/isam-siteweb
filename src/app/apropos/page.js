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
      <main className="pt-32 pb-24 flex-grow bg-white">
        {/* Hero About */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <SectionHeader 
            title="Notre Institut" 
            subtitle="Histoire & Vision" 
          />
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <h3 className="text-3xl font-serif font-bold text-isam-blue mb-6">Scientia Splendet et Conscientia</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                L'Institut Supérieur des Arts et Métiers de Kinshasa (ISAM Kinshasa) est une institution publique d'enseignement supérieur et universitaire de la République Démocratique du Congo. Depuis sa création, l'ISAM s'est imposé comme la référence nationale et régionale dans la formation des élites créatives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                Notre mission est de promouvoir l'excellence académique à travers des programmes innovants en technique d'habillement, modélisme et, plus récemment, en coiffure et esthétique. Nous préparons nos étudiants à devenir non seulement des techniciens hors pair, mais de véritables entrepreneurs capables de redéfinir l'industrie de la mode et de la beauté en Afrique.
              </p>
            </div>
            <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542304910-1c19b0284d72?q=80&w=800&auto=format&fit=crop" 
                alt="Campus ISAM" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-isam-blue/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-2xl">Campus Principal</p>
                  <p className="text-blue-100">Gombe, Kinshasa</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-isam-blue text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
              <div className="text-center px-4">
                <div className="text-5xl font-bold mb-2 text-isam-yellow">{siteData.stats.students}</div>
                <p className="text-blue-100 text-lg">Étudiants</p>
              </div>
              <div className="text-center px-4">
                <div className="text-5xl font-bold mb-2 text-isam-yellow">{siteData.stats.teachers}</div>
                <p className="text-blue-100 text-lg">Enseignants</p>
              </div>
              <div className="text-center px-4">
                <div className="text-5xl font-bold mb-2 text-isam-yellow">{siteData.stats.laboratories}</div>
                <p className="text-blue-100 text-lg">Laboratoires</p>
              </div>
              <div className="text-center px-4">
                <div className="text-5xl font-bold mb-2 text-isam-yellow">{siteData.stats.partners}</div>
                <p className="text-blue-100 text-lg">Partenaires</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
