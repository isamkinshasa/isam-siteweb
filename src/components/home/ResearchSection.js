"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function ResearchSection() {
  const domains = [
    "Coupe et couture",
    "Modélisme",
    "Technique d'habillement",
    "Patrimoine, cultures et sociétés numériques"
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-800 mb-6">Excellence en recherche</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Notre institut est reconnue pour ses contributions majeures dans de nombreux domaines
            de recherche, avec des équipes pluridisciplinaires travaillant sur les grands défis
            contemporains.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-sm border border-gray-100"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
              alt="Excellence en recherche ISAM" 
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          
          {/* Right: List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-serif text-slate-800 mb-8">Nos domaines d'excellence</h3>
            <ul className="space-y-5">
              {domains.map((domain, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-transparent flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-isam-blue" strokeWidth={2.5} />
                  </div>
                  <span className="text-slate-700 text-lg">{domain}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
