"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsCard({ article, index }) {
  const href = article.slug ? `/actualites/${article.slug}` : "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
    >
      {/* Image */}
      <Link href={href} className="h-52 overflow-hidden block">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-xs text-gray-400 mb-3 font-medium">Publié le : {article.date}</p>
        <Link href={href}>
          <h3 className="font-bold text-slate-800 text-base mb-3 leading-snug line-clamp-3 hover:text-isam-blue transition-colors cursor-pointer">
            {article.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
          {article.excerpt}
        </p>
        <Link
          href={href}
          className="text-isam-blue text-sm font-semibold hover:underline flex items-center gap-1 mt-auto"
        >
          Lire la suite
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
