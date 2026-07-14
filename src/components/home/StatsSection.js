"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { siteData } from "@/data/siteData";
import { Users, UserCheck, FlaskConical, Globe } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    // Extract numeric part and suffix
    const numeric = parseInt(value.replace(/\D/g, ""), 10);
    const suffix = value.replace(/[\d\s]/g, "");
    const duration = 1800;
    const steps = 60;
    const increment = numeric / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numeric) {
        setDisplay(numeric.toLocaleString("fr-FR") + suffix);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(current).toLocaleString("fr-FR") + suffix);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

const stats = [
  {
    icon: Users,
    value: siteData.stats.students,
    label: "Étudiants inscrits",
    sub: "chaque année académique",
  },
  {
    icon: UserCheck,
    value: siteData.stats.teachers,
    label: "Enseignants-chercheurs",
    sub: "experts dans leur domaine",
  },
  {
    icon: FlaskConical,
    value: siteData.stats.laboratories,
    label: "Laboratoires",
    sub: "dédiés à la pratique",
  },
  {
    icon: Globe,
    value: siteData.stats.partners,
    label: "Partenaires",
    sub: "nationaux et internationaux",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-isam-blue">
      {/* Background blobs */}
      <div className="blob w-[600px] h-[600px] bg-white top-[-100px] left-[-200px] opacity-5" />
      <div className="blob w-[400px] h-[400px] bg-isam-yellow top-[60%] right-[-100px] opacity-10" />
      <div className="absolute inset-0 section-dots opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          title="L'ISAM Kinshasa en chiffres"
          subtitle="Notre impact"
          light={true}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="group relative bg-white/8 hover:bg-white/15 border border-white/15 hover:border-white/30 rounded-2xl p-8 text-center transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-isam-yellow/0 to-isam-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="w-14 h-14 bg-white/10 group-hover:bg-isam-yellow/20 rounded-2xl flex items-center justify-center text-white group-hover:text-isam-yellow mx-auto mb-5 transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="text-4xl md:text-5xl font-bold text-isam-yellow mb-2 font-display leading-none">
                    <AnimatedNumber value={stat.value} />
                  </div>

                  <p className="text-white font-semibold text-sm mb-1">{stat.label}</p>
                  <p className="text-blue-200 text-xs">{stat.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
