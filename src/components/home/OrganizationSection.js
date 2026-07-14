"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { BookOpen, GraduationCap, Microscope, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const formationsOrga = [
  {
    icon: BookOpen,
    title: "Durée des études",
    desc: "La formation se déroule sur 3 ans pour le diplôme de premier cycle (licence professionnelle) et 2 ans pour le master.",
    color: "blue",
  },
  {
    icon: GraduationCap,
    title: "Système LMD",
    desc: "L'ISAM adopte le système Licence-Master-Doctorat facilitant la mobilité académique et l'harmonisation internationale.",
    color: "yellow",
  },
  {
    icon: Microscope,
    title: "Modules pratiques",
    desc: "Techniques professionnelles : coupe, couture, modélisme. Techniques de gestion : marketing, entrepreneuriat.",
    color: "green",
  },
  {
    icon: Briefcase,
    title: "Stages & Projets",
    desc: "Les étudiants effectuent des stages pratiques et réalisent des projets tutorés sur des cas réels d'entreprise.",
    color: "blue",
  },
];

const colorMap = {
  blue: {
    bg: "bg-isam-blue/8",
    icon: "bg-isam-blue text-white",
    hover: "group-hover:bg-isam-blue",
    border: "group-hover:border-isam-blue/30",
    badge: "bg-isam-blue",
  },
  yellow: {
    bg: "bg-isam-yellow/10",
    icon: "bg-isam-yellow text-gray-900",
    hover: "group-hover:bg-isam-yellow",
    border: "group-hover:border-isam-yellow/40",
    badge: "bg-isam-yellow",
  },
  green: {
    bg: "bg-isam-green/8",
    icon: "bg-isam-green text-white",
    hover: "group-hover:bg-isam-green",
    border: "group-hover:border-isam-green/30",
    badge: "bg-isam-green",
  },
};

export default function OrganizationSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-isam-blue/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-isam-yellow/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none section-dots absolute inset-0 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          title="Organisation générale de la formation"
          subtitle="Notre pédagogie"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4"
        >
          {formationsOrga.map((item, index) => {
            const Icon = item.icon;
            const colors = colorMap[item.color];
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className={`group bg-white border border-gray-100 rounded-2xl p-8 card-hover cursor-default ${colors.border} transition-all duration-300 relative overflow-hidden`}
              >
                {/* Top colored line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${colors.badge} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${colors.hover} text-isam-blue group-hover:text-white group-hover:scale-110`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold mb-3 font-display text-slate-800 group-hover:text-isam-blue transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/filiere"
            className="inline-flex items-center gap-2 text-isam-blue font-semibold hover:gap-3 transition-all duration-300 group"
          >
            Découvrir nos filières en détail
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
