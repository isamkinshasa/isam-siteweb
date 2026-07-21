"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { motion } from "framer-motion";

const categoryColors = {
  "Formation": "bg-isam-blue/10 text-isam-blue",
  "Événement": "bg-isam-yellow/20 text-yellow-700",
  "Partenariat": "bg-isam-green/10 text-isam-green",
  "Actualité": "bg-purple-50 text-purple-600",
};

export default function NewsCard({ article, index }) {
  const slugStr = typeof article.slug === "object" ? article.slug?.current : article.slug;
  const href = slugStr ? `/actualites/${slugStr}` : "#";
  const categoryStyle = categoryColors[article.category] || "bg-isam-blue/10 text-isam-blue";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover flex flex-col h-full"
    >
      {/* Image */}
      <Link href={href} className="relative h-52 overflow-hidden block flex-shrink-0">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category badge */}
        {article.category && (
          <div className="absolute top-3 left-3">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm bg-white/90 text-isam-blue`}>
              <Tag className="w-3 h-3" />
              {article.category}
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Date */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>{article.date || "Récemment"}</span>
        </div>

        {/* Title */}
        <Link href={href} className="flex-grow">
          <h3 className="font-bold text-slate-800 text-base mb-3 leading-snug line-clamp-3 group-hover:text-isam-blue transition-colors duration-200 font-display">
            {article.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
          {article.excerpt}
        </p>

        {/* CTA */}
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-isam-blue text-sm font-semibold hover:gap-2.5 transition-all duration-200 mt-auto group/link"
        >
          Lire la suite
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}
