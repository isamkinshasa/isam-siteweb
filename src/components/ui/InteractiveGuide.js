"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MousePointer, Sparkles, CheckCircle2, X, Play, ArrowRight } from "lucide-react";

export default function InteractiveGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0); // 0: start, 1: cursor moving to button, 2: simulated click, 3: completed info

  useEffect(() => {
    // Show automatically on initial landing after a slight delay
    const hasSeen = sessionStorage.getItem("isam_guided_tour_seen");
    const timer = setTimeout(() => {
      setIsOpen(true);
      startSequence();
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const startSequence = () => {
    setStep(1);
    // Step 1 -> Step 2: Cursor reaches button & simulates click after 1.8s
    setTimeout(() => {
      setStep(2);
    }, 2000);

    // Step 2 -> Step 3: Success preview card appears after 3.2s
    setTimeout(() => {
      setStep(3);
    }, 3600);

    // Auto-close after 8.5s total if not interacted with
    setTimeout(() => {
      sessionStorage.setItem("isam_guided_tour_seen", "true");
    }, 8500);
  };

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("isam_guided_tour_seen", "true");
  };

  const handleReplay = () => {
    setIsOpen(true);
    setStep(0);
    setTimeout(() => {
      startSequence();
    }, 200);
  };

  return (
    <>
      {/* ── Discreet Replay trigger in floating corner ── */}
      {!isOpen && (
        <div className="fixed bottom-6 left-6 z-40">
          <button
            onClick={handleReplay}
            className="flex items-center gap-2 bg-white/95 hover:bg-white text-slate-800 text-xs font-semibold px-3.5 py-2 rounded-full shadow-lg shadow-gray-300/60 border border-gray-200 hover:border-isam-blue/40 transition-all hover:scale-105 group backdrop-blur-md"
            title="Revoir comment s'inscrire en ligne"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-isam-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-isam-blue"></span>
            </span>
            <Play className="w-3.5 h-3.5 text-isam-blue fill-isam-blue" />
            <span className="hidden sm:inline">Guide : Comment s'inscrire ?</span>
            <span className="sm:hidden">Guide inscription</span>
          </button>
        </div>
      )}

      {/* ── Action Simulation Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] pointer-events-none">
            {/* Subtle soft backdrop that doesn't obstruct the site */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-slate-950/30 backdrop-blur-[2px] pointer-events-auto transition-opacity"
            />

            {/* Top right close button */}
            <div className="absolute top-4 right-4 z-10 pointer-events-auto">
              <button
                onClick={handleClose}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 hover:bg-white text-slate-700 hover:text-slate-950 text-xs font-bold rounded-full shadow-md backdrop-blur-md transition-all"
              >
                <span>Fermer la démo</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* ── Virtual Mouse Pointer Simulation ── */}
            {step < 3 && (
              <motion.div
                initial={{
                  x: "50vw",
                  y: "55vh",
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={
                  step === 1
                    ? {
                        x: "calc(100vw - 180px)",
                        y: "68px",
                        opacity: 1,
                        scale: 1,
                      }
                    : step === 2
                    ? {
                        x: "calc(100vw - 180px)",
                        y: "68px",
                        opacity: 1,
                        scale: [1, 0.85, 1],
                      }
                    : {}
                }
                transition={{
                  duration: step === 1 ? 1.8 : 0.3,
                  ease: "easeInOut",
                }}
                className="absolute z-[110] flex flex-col items-start pointer-events-none"
              >
                {/* Mouse Cursor Graphic */}
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-isam-blue/20 border-2 border-isam-blue flex items-center justify-center animate-ping absolute -top-1 -left-1" />
                  <div className="w-7 h-7 rounded-full bg-isam-yellow flex items-center justify-center shadow-lg shadow-slate-900/30 border-2 border-white">
                    <MousePointer className="w-4 h-4 text-slate-950 fill-slate-950" />
                  </div>
                </div>

                {/* Animated action speech bubble attached to cursor */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 bg-slate-900/95 text-white text-xs px-3.5 py-2 rounded-xl shadow-2xl border border-white/20 backdrop-blur-md whitespace-nowrap max-w-xs"
                >
                  {step === 1 && (
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-isam-yellow animate-pulse" />
                      <span>Étape 1 : Se diriger vers <strong>« S'inscrire »</strong>...</span>
                    </div>
                  )}
                  {step === 2 && (
                    <div className="flex items-center gap-2 text-isam-yellow font-bold">
                      <Sparkles className="w-3.5 h-3.5 animate-spin" />
                      <span>Clic sur le bouton d'inscription !</span>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}

            {/* ── Step 3: Interactive Video-like Modal Card (Simulated Output) ── */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[115] w-full max-w-md px-4 pointer-events-auto"
              >
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-7 relative overflow-hidden text-center">
                  
                  {/* Decorative background glow */}
                  <div className="absolute -top-16 -right-16 w-36 h-36 bg-isam-blue/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-isam-yellow/20 rounded-full blur-2xl pointer-events-none" />

                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold rounded-full mb-4">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Inscriptions en Ligne 2026-2027</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-display mb-2">
                    Prêt à rejoindre l'ISAM Kinshasa ?
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Le formulaire d'admission en ligne est accessible à tout moment via le bouton <strong className="text-isam-blue font-semibold">« S'inscrire »</strong> dans la barre de navigation.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://isam.optsolution.net/demande-d-inscription-en-ligne-2026-2027"
                      onClick={handleClose}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-isam-blue to-blue-700 hover:from-isam-blue-dark hover:to-isam-blue text-white px-5 py-3 rounded-xl font-bold text-sm shadow-lg shadow-isam-blue/30 transition-all hover:scale-[1.02]"
                    >
                      <span>Remplir ma demande</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <button
                      onClick={handleClose}
                      className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-slate-700 font-semibold text-sm rounded-xl transition-colors"
                    >
                      Continuer la visite
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
