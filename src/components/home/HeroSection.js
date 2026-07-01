"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop",
    title: "Nos filières professionnelles",
    subtitle: "Rejoignez nos programmes spécialisés en habillement, modélisme et esthétique",
    cta: "Inscrivez-vous ici",
    href: "https://isam.optsolution.net/demande-d-inscription-en-ligne-2025-2026",
  },
  {
    image: "https://images.unsplash.com/photo-1558769132-cb1fac0840f2?q=80&w=1600&auto=format&fit=crop",
    title: "Excellence et Innovation",
    subtitle: "Des formations de haut niveau qui allient tradition artisanale et techniques modernes",
    cta: "Découvrir",
    href: "/filiere",
  },
  {
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop",
    title: "Façonnez votre Avenir",
    subtitle: "ISAM Kinshasa — Scientia Splendet et Conscientia",
    cta: "À propos",
    href: "/apropos",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  return (
    <section className="relative w-full h-[75vh] min-h-[480px] overflow-hidden bg-gray-900">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background image */}
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />

          {/* Text */}
          <div className="relative h-full flex items-center">
            <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-xl">
                  {slides[current].title}
                </h1>
                <p className="text-white/80 text-base md:text-lg max-w-lg mb-8">
                  {slides[current].subtitle}
                </p>
                <Link
                  href={slides[current].href}
                  className="inline-block bg-isam-blue hover:bg-isam-blue-dark text-white px-7 py-3 rounded-lg font-semibold text-sm transition-colors shadow-lg"
                >
                  {slides[current].cta}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all border border-white/30"
        aria-label="Précédent"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all border border-white/30"
        aria-label="Suivant"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => go(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === current ? "w-7 h-3 bg-white" : "w-3 h-3 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
