"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { BookOpen, GraduationCap, Microscope, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const formationsOrga = [
  {
    icon: BookOpen,
    title: "Durée des études",
    desc: "La formation se déroule généralement sur 3 ans pour obtenir un diplôme de premier cycle (licence) et deux ans pour le master."
  },
  {
    icon: GraduationCap,
    title: "Système LMD",
    desc: "L’ISAM adopte le système Licence-Master-Doctorat facilitant la mobilité académique et l’harmonisation internationale."
  },
  {
    icon: Microscope,
    title: "Modules pratiques",
    desc: "Techniques professionnelles : coupe, couture, modélisme. Techniques de gestion : marketing, entrepreneuriat."
  },
  {
    icon: Briefcase,
    title: "Stages & Projets",
    desc: "Les étudiants effectuent des stages pratiques et réalisent des projets tutorés sur des cas réels."
  }
];

export default function OrganizationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-isam-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Organisation générale de la formation à l'ISAM Kinshasa" 
          subtitle="Notre Pédagogie" 
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {formationsOrga.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-isam-blue/10 rounded-2xl flex items-center justify-center text-isam-blue mb-6 group-hover:scale-110 group-hover:bg-isam-blue group-hover:text-white transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif text-slate-800">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link 
            href="/filiere" 
            className="inline-flex items-center gap-2 text-isam-blue font-semibold hover:text-isam-blue-dark hover:underline"
          >
            Découvrir nos filières en détail
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
