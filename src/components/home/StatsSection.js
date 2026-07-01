"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function StatsSection() {
  return (
    <section className="bg-isam-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">L'ISAM Kinshasa en chiffres</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center px-4"
          >
            <div className="text-4xl md:text-5xl font-bold mb-2 text-isam-yellow">{siteData.stats.students}</div>
            <p className="text-blue-100 text-sm md:text-lg">Étudiants</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center px-4"
          >
            <div className="text-4xl md:text-5xl font-bold mb-2 text-isam-yellow">{siteData.stats.teachers}</div>
            <p className="text-blue-100 text-sm md:text-lg">Enseignants-chercheurs</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center px-4"
          >
            <div className="text-4xl md:text-5xl font-bold mb-2 text-isam-yellow">{siteData.stats.laboratories}</div>
            <p className="text-blue-100 text-sm md:text-lg">Laboratoires de recherche</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center px-4"
          >
            <div className="text-4xl md:text-5xl font-bold mb-2 text-isam-yellow">{siteData.stats.partners}</div>
            <p className="text-blue-100 text-sm md:text-lg">Partenaires internationaux</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
