"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Play } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image: "/hero/hero-1.jpg",
    badge: "Inscriptions 2026-2027",
    title: "Façonnez votre Avenir à l'ISAM/ KIN",
    subtitle: "Rejoignez nos programmes spécialisés en habillement, modélisme et esthétique. L'excellence académique au service de votre talent.",
    cta: "S'inscrire maintenant",
    ctaHref: "/portail-etudiant",
    secondary: "Découvrir nos filières",
    secondaryHref: "/filiere",
  },
  {
    image: "/hero/hero-2.jpg",
    badge: "Excellence & Innovation",
    title: "Des formations de haut niveau",
    subtitle: "L'ISAM Kinshasa allie tradition artisanale et techniques modernes pour former les créateurs de demain.",
    cta: "Voir les programmes",
    ctaHref: "/filiere",
    secondary: "À propos de l'ISAM",
    secondaryHref: "/apropos",
  },
  {
    image: "/hero/hero-3.jpg",
    badge: "Scientia Splendet",
    title: "La référence nationale en Arts & Métiers",
    subtitle: "Institution publique d'enseignement supérieur reconnue à Kinshasa. Formez-vous à l'excellence depuis plus de 50 ans.",
    cta: "Nous rejoindre",
    ctaHref: "/admissions",
    secondary: "En savoir plus",
    secondaryHref: "/apropos",
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
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, scale: 1.04, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, scale: 0.96, x: dir > 0 ? -60 : 60 }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  const slide = slides[current];

  return (
    <section className="relative w-full h-[88vh] min-h-[560px] overflow-hidden bg-gray-950">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Multi-layer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-900/50 to-gray-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-isam-blue/20 rounded-full blur-3xl pointer-events-none animate-pulse-soft" />
      <div className="absolute bottom-20 right-40 w-48 h-48 bg-isam-yellow/15 rounded-full blur-3xl pointer-events-none animate-float-slow" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${current}`}
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-isam-yellow/20 border border-isam-yellow/40 rounded-full text-isam-yellow text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-isam-yellow animate-pulse" />
                  {slide.badge}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${current}`}
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 font-display"
              >
                {slide.title}
              </motion.h1>
            </AnimatePresence>

            {/* Subtitle */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${current}`}
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-white/75 text-base md:text-lg max-w-xl mb-10 leading-relaxed"
              >
                {slide.subtitle}
              </motion.p>
            </AnimatePresence>

            {/* CTAs */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`cta-${current}`}
                custom={3}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-4"
              >
                <a
                  href={slide.ctaHref}
                  onClick={(e) => {
                    if (slide.cta && slide.cta.toLowerCase().includes("inscrire")) {
                      e.preventDefault();
                      alert("Bientôt disponible !");
                    }
                  }}
                  target={slide.ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel={slide.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 bg-isam-blue hover:bg-isam-blue-dark text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-isam-blue/40 hover:shadow-isam-blue/60 hover:-translate-y-0.5 cursor-pointer"
                >
                  {slide.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href={slide.secondaryHref}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 backdrop-blur-sm"
                >
                  {slide.secondary}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => go(idx)}
            className={`transition-all duration-400 rounded-full ${idx === current
              ? "w-8 h-2.5 bg-white"
              : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 glass rounded-full flex items-center justify-center text-white transition-all hover:scale-110 hover:bg-white/30"
        aria-label="Précédent"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 glass rounded-full flex items-center justify-center text-white transition-all hover:scale-110 hover:bg-white/30"
        aria-label="Suivant"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide number indicator */}
      <div className="absolute bottom-8 right-8 text-white/50 text-xs font-mono font-bold">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}
