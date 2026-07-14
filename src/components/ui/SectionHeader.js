"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-12 ${centered ? "text-center max-w-3xl mx-auto" : ""}`}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border ${
            light
              ? "bg-white/15 border-white/25 text-white"
              : "bg-isam-blue/8 border-isam-blue/20 text-isam-blue"
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${light ? "bg-isam-yellow" : "bg-isam-blue"} animate-pulse`} />
            {subtitle}
          </span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-display ${
          light ? "text-white" : "text-gradient-blue"
        }`}
      >
        {title}
      </motion.h2>
    </div>
  );
}
