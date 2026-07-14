import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";

export const metadata = {
  title: "Contact | ISAM Kinshasa",
  description: "Contactez l'Institut Supérieur des Arts et Métiers de Kinshasa.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        
        {/* ── Page Hero ── */}
        <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1920&auto=format&fit=crop"
            alt="Contact ISAM Kinshasa"
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
                Assistance & Informations
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight font-display max-w-3xl mb-6">
                Contactez-nous
              </h1>
              <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                Une question ? Un projet ? N'hésitez pas à nous écrire ou à venir nous rendre visite sur notre campus.
              </p>
            </div>
          </div>
        </div>

        {/* ── Contact Section ── */}
        <ContactSection />

        {/* ── Localisation (Map) ── */}
        <div className="w-full h-[600px] bg-gray-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.4583256093897!2d15.291780075024608!3d-4.324672595649343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a315ede910fb7%3A0xe9fb63817a3096f6!2sInstitut%20Sup%C3%A9rieur%20des%20Arts%20et%20M%C3%A9tiers!5e0!3m2!1sfr!2scd!4v1784050071508!5m2!1sfr!2scd"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation ISAM Kinshasa"
          ></iframe>
          
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent pointer-events-none" />
        </div>

      </main>
      <Footer />
    </>
  );
}
