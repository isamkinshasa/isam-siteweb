"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Images, ZoomIn } from "lucide-react";
import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558769132-cb1fac0840f2?q=80&w=800&auto=format&fit=crop",
    alt: "Atelier de Design",
    category: "Ateliers",
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    alt: "Défilé de mode",
    category: "Événements",
  },
  {
    src: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop",
    alt: "Atelier de couture",
    category: "Formation",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    alt: "Remise des diplômes",
    category: "Cérémonie",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
    alt: "Masterclass Coiffure",
    category: "Coiffure",
  },
  {
    src: "https://images.unsplash.com/photo-1516280440502-368535a26685?q=80&w=800&auto=format&fit=crop",
    alt: "Événement culturel",
    category: "Culture",
  },
];

export default function GallerySection() {
  const [groupStart, setGroupStart] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);
  const visibleCount = 4;

  const canPrev = groupStart > 0;
  const canNext = groupStart + visibleCount < galleryImages.length;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-isam-blue/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <SectionHeader
            title="Notre Galerie"
            subtitle="Campus & Événements"
            centered={false}
          />
          <div className="flex items-center gap-2">
            <button
              onClick={() => setGroupStart((p) => Math.max(0, p - 1))}
              disabled={!canPrev}
              className={`w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:border-isam-blue hover:text-isam-blue hover:bg-isam-blue/5 transition-all ${!canPrev ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setGroupStart((p) => Math.min(galleryImages.length - visibleCount, p + 1))}
              disabled={!canNext}
              className={`w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:border-isam-blue hover:text-isam-blue hover:bg-isam-blue/5 transition-all ${!canNext ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Images grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <AnimatePresence mode="wait">
            {galleryImages.slice(groupStart, groupStart + visibleCount).map((img, i) => (
              <motion.div
                key={`${img.src}-${groupStart}`}
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                  i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"
                }`}
                onClick={() => setLightboxImg(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Info on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="inline-block px-2.5 py-1 bg-isam-blue/80 text-white text-xs font-bold rounded-full mb-1 w-fit backdrop-blur-sm">
                    {img.category}
                  </span>
                  <p className="text-white text-sm font-semibold line-clamp-1">{img.alt}</p>
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: galleryImages.length - visibleCount + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setGroupStart(i)}
              className={`transition-all duration-300 rounded-full ${
                groupStart === i ? "w-8 h-2.5 bg-isam-blue" : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setLightboxImg(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-3xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImg.src}
                alt={lightboxImg.alt}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
              >
                ✕
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-semibold">{lightboxImg.alt}</p>
                <p className="text-blue-200 text-sm">{lightboxImg.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
