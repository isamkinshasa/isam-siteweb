"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteData } from "@/data/siteData";
import { ArrowRight } from "lucide-react";

export default function StudentLifeSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Vie Étudiante" 
          subtitle="Épanouissement" 
        />
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-16">
          Notre institut offre un cadre de vie exceptionnel et de nombreuses opportunités pour s'épanouir au-delà des études.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {siteData.studentLife.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-isam-light rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-lg transition-all"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-serif mb-4 text-foreground group-hover:text-isam-blue transition-colors">{item.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{item.excerpt}</p>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-isam-blue mt-auto">
                  Lire la suite
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
