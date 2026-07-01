"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? "text-center max-w-3xl mx-auto" : ""}`}>
      {subtitle && (
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold uppercase tracking-wider text-isam-blue mb-3"
        >
          {subtitle}
        </motion.h3>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-serif font-bold text-foreground"
      >
        {title}
      </motion.h2>
    </div>
  );
}
