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
      <main className="pt-32 pb-24 flex-grow bg-isam-light min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Le Comité de Gestion" 
            subtitle="Gouvernance" 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {siteData.committee.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                <div className="h-80 overflow-hidden bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.role}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  />
                </div>
                <div className="p-8 text-center relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-isam-blue text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md whitespace-nowrap">
                    {member.role}
                  </div>
                  <h3 className="text-xl font-bold font-serif text-foreground mt-2 mb-2">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.description}</p>
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
