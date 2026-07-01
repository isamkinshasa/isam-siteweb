"use client";

import { siteData } from "@/data/siteData";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558769132-cb1fac0840f2?q=80&w=600&auto=format&fit=crop",
    alt: "Atelier de Design",
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
    alt: "Défilé de mode",
  },
  {
    src: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=600&auto=format&fit=crop",
    alt: "Atelier de couture",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
    alt: "Remise des diplômes",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop",
    alt: "Masterclass Coiffure",
  },
  {
    src: "https://images.unsplash.com/photo-1516280440502-368535a26685?q=80&w=600&auto=format&fit=crop",
    alt: "Événement culturel",
  },
];

export default function GallerySection() {
  const [groupStart, setGroupStart] = useState(0);
  const visibleCount = 4;

  const canPrev = groupStart > 0;
  const canNext = groupStart + visibleCount < galleryImages.length;

  return (
    <section className="py-16 bg-isam-light">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold font-serif text-slate-800">Galerie</h2>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Prev button */}
          <button
            onClick={() => setGroupStart((p) => Math.max(0, p - 1))}
            disabled={!canPrev}
            className={`absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-isam-blue transition-all ${!canPrev ? "opacity-30 cursor-not-allowed" : ""}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Images grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 overflow-hidden">
            {galleryImages.slice(groupStart, groupStart + visibleCount).map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-sm cursor-pointer group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={() => setGroupStart((p) => Math.min(galleryImages.length - visibleCount, p + 1))}
            disabled={!canNext}
            className={`absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-isam-blue transition-all ${!canNext ? "opacity-30 cursor-not-allowed" : ""}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: galleryImages.length - visibleCount + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setGroupStart(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${groupStart === i ? "bg-isam-blue w-6" : "bg-gray-300 hover:bg-gray-400"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
