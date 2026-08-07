"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Accueil", href: "/" },
  {
    name: "Institut",
    href: "#",
    subLinks: [
      { name: "À propos", href: "/apropos" },
      { name: "Comité de gestion", href: "/comite" },
      { name: "Alumni", href: "#" },
    ],
  },
  {
    name: "Formations",
    href: "#",
    subLinks: [
      { name: "Technique d'habillement", href: "/filiere" },
      { name: "Modélisme & Stylisme", href: "/filiere" },
      { name: "Coiffure et Esthétique", href: "/filiere" },
      { name: "Coupe et couture", href: "/filiere" },
    ],
  },
  { name: "Admission", href: "/admissions" },
  { name: "Actualités", href: "/actualites" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      
      {/* ── Top Announcement Banner with Arrow to Inscriptions ── */}
      <div className="bg-gradient-to-r from-slate-950 via-isam-blue-dark to-slate-900 text-white text-xs py-2 px-4 border-b border-white/10 overflow-hidden relative">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 font-medium truncate">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-isam-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-isam-yellow"></span>
            </span>
            <span className="bg-isam-yellow text-slate-950 font-extrabold uppercase tracking-wider text-[10px] px-2 py-0.5 rounded-full shrink-0">
              Inscriptions 2026-2027
            </span>
            <span className="hidden sm:inline text-blue-200/60">•</span>
            <span className="truncate text-slate-200 text-[11px] sm:text-xs">
              Les admissions sont ouvertes à l'ISAM Kinshasa !
            </span>
          </div>

          <a
            href="https://isam.optsolution.net/demande-d-inscription-en-ligne-2026-2027"
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-isam-yellow hover:text-white transition-colors shrink-0 group ml-auto"
          >
            <span>Postuler directement</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-isam-yellow" />
          </a>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "glass shadow-lg shadow-isam-blue/10 bg-white/95"
            : "bg-white/95 backdrop-blur-sm border-b border-gray-100"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20 gap-4 lg:gap-8 relative">
            
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="ISAM Kinshasa"
                className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div className="hidden sm:block">
                <p className="font-bold text-isam-blue text-sm leading-tight font-display">ISAM Kinshasa</p>
                <p className="text-gray-400 text-[10px] leading-tight">Institut Supérieur des Arts et Métiers</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center flex-1 justify-center gap-1">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href && link.href !== "#";
                return (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        isActive
                          ? "text-isam-blue bg-isam-blue/8 font-semibold"
                          : "text-slate-700 hover:text-isam-blue hover:bg-isam-blue/5"
                      }`}
                    >
                      {link.name}
                      {link.subLinks && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>

                    {/* Dropdown */}
                    {link.subLinks && (
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="absolute left-0 top-full mt-1.5 w-60 bg-white rounded-2xl shadow-xl shadow-gray-200/80 border border-gray-100 overflow-hidden z-50"
                          >
                            <div className="p-2">
                              {link.subLinks.map((sub, si) => (
                                <Link
                                  key={si}
                                  href={sub.href}
                                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-700 hover:bg-isam-blue/5 hover:text-isam-blue rounded-xl transition-colors group"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-isam-blue/30 group-hover:bg-isam-blue transition-colors" />
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* CTA Container */}
            <div className="ml-auto flex items-center gap-3">
              {/* Bouton Desktop S'inscrire (Bleu ISAM raffiné) */}
              <a
                id="navbar-cta-register"
                href="https://isam.optsolution.net/demande-d-inscription-en-ligne-2026-2027"
                className="hidden md:flex items-center gap-2.5 bg-gradient-to-r from-isam-blue to-blue-700 hover:from-isam-blue-dark hover:to-isam-blue text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md shadow-isam-blue/25 hover:shadow-isam-blue/40 hover:-translate-y-0.5 cursor-pointer relative"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-isam-yellow opacity-85"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-isam-yellow"></span>
                </span>
                <span>S'inscrire</span>
                <ArrowRight className="w-4 h-4 text-white/90" />
              </a>

              {/* Bouton Mobile Direct S'inscrire */}
              <a
                href="https://isam.optsolution.net/demande-d-inscription-en-ligne-2026-2027"
                className="md:hidden flex items-center gap-1.5 bg-gradient-to-r from-isam-blue to-blue-700 text-white px-3.5 py-2 rounded-xl text-xs font-semibold shadow-md shadow-isam-blue/25"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-isam-yellow opacity-85"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-isam-yellow"></span>
                </span>
                S'inscrire
              </a>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href && link.href !== "#";
                return (
                  <div key={index}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "text-isam-blue font-semibold bg-isam-blue/8"
                          : "text-gray-800 hover:bg-gray-50 hover:text-isam-blue"
                      }`}
                    >
                      {link.name}
                      {link.subLinks && <ChevronDown className="w-4 h-4" />}
                    </Link>
                    {link.subLinks && (
                      <div className="pl-6 space-y-1 pb-1">
                        {link.subLinks.map((sub, si) => (
                          <Link
                            key={si}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-500 hover:text-isam-blue rounded-lg hover:bg-gray-50"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              
              {/* Grand CTA S'inscrire dans le menu mobile */}
              <div className="pt-3 pb-2">
                <a
                  href="https://isam.optsolution.net/demande-d-inscription-en-ligne-2026-2027"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-isam-blue to-blue-700 text-white px-4 py-3.5 rounded-xl text-sm font-semibold shadow-md shadow-isam-blue/25"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-isam-yellow opacity-85"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-isam-yellow"></span>
                  </span>
                  <span>S'inscrire en ligne (2026-2027)</span>
                  <ArrowRight className="w-4 h-4 text-white/90" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
