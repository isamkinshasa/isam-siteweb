"use client";

import { Check, Scissors, Palette, Sparkles, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const domains = [
  { label: "Coupe et couture", icon: Scissors, color: "text-isam-blue" },
  { label: "Modélisme & Stylisme", icon: Palette, color: "text-isam-yellow-dark" },
  { label: "Technique d'habillement", icon: BookOpen, color: "text-isam-green" },
  { label: "Coiffure et Esthétique", icon: Sparkles, color: "text-purple-500" },
];

export default function ResearchSection() {
  return (
    <section className="py-24 bg-isam-light relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-isam-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          title="Nos domaines d'excellence"
          subtitle="Formation professionnelle"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-4">
          {/* Left: Image with floating badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-isam-blue/10">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=900&auto=format&fit=crop"
                alt="Excellence en formation ISAM"
                className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-isam-blue/60 via-transparent to-transparent rounded-3xl" />
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl shadow-gray-200/80 border border-gray-100 max-w-[200px]"
            >
              <div className="text-3xl font-bold text-gradient-blue font-display">50+</div>
              <p className="text-sm text-gray-600 mt-1 leading-tight">Années d'excellence en formation</p>
            </motion.div>

            {/* Floating badge top-left */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -left-4 bg-isam-blue text-white rounded-2xl px-4 py-3 shadow-lg shadow-isam-blue/30"
            >
              <p className="text-xs font-bold uppercase tracking-wide">Système LMD</p>
              <p className="text-isam-yellow text-xs">ESURSI</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Notre institut est reconnu pour ses contributions majeures dans de nombreux domaines de formation, avec des équipes pluridisciplinaires travaillant sur les grands défis créatifs contemporains.
            </p>

            <ul className="space-y-4 mb-10">
              {domains.map((domain, index) => {
                const Icon = domain.icon;
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100 transition-all duration-300 cursor-default"
                  >
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-5 h-5 ${domain.color}`} />
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-isam-blue transition-colors">{domain.label}</span>
                    <Check className="w-4 h-4 text-isam-green ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.li>
                );
              })}
            </ul>

            <Link
              href="/filiere"
              className="inline-flex items-center gap-2 bg-isam-blue hover:bg-isam-blue-dark text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-isam-blue/25 hover:-translate-y-0.5 group"
            >
              Explorer nos filières
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
