import { ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="relative overflow-hidden bg-isam-blue py-14">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-isam-yellow/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 border border-white/25 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-isam-yellow animate-pulse" />
          Newsletter
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-display">
          Restez informé des actualités
        </h3>
        <p className="text-blue-200 mb-8 max-w-md mx-auto text-sm">
          Abonnez-vous pour recevoir les dernières actualités, événements et informations de l'ISAM Kinshasa.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="flex-1 px-5 py-3.5 rounded-xl text-sm text-slate-800 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-isam-yellow shadow-sm"
          />
          <button className="bg-isam-yellow hover:bg-isam-yellow-dark text-gray-900 px-6 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 whitespace-nowrap shadow-md hover:-translate-y-0.5 flex items-center gap-2">
            S'abonner
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
