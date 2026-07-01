"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Accueil", href: "/" },
  {
    name: "Institut",
    href: "#",
    subLinks: [
      { name: "À propos", href: "/apropos" },
      { name: "Comité de gestion", href: "/comite" },
    ],
  },
  {
    name: "Mention & Filière",
    href: "#",
    subLinks: [
      { name: "Technique d'habillement", href: "/filiere" },
      { name: "Modélisme", href: "/filiere" },
      { name: "Coiffure et Esthétique", href: "/filiere" },
    ],
  },
  { name: "Admission", href: "/admissions" },
  {
    name: "Inscrivez-vous ici",
    href: "https://isam.optsolution.net/demande-d-inscription-en-ligne-2025-2026",
    highlight: true,
  },
  { name: "Etudiant", href: "#" },
  { name: "International", href: "#" },
  { name: "Actualités", href: "/actualites" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}>
      {/* ── Rangée 1 : Logo + Recherche + Portail ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img src="/logo.png" alt="ISAM Kinshasa" className="h-14 w-auto" />
          </Link>

          {/* Barre de recherche centré */}
          <div className="hidden md:flex flex-1 max-w-lg mx-auto">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-isam-blue focus:ring-2 focus:ring-isam-blue/10 bg-gray-50"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Search className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Droite : Portail + Bouton mobile */}
          <div className="ml-auto flex items-center gap-3">
            <button
              className="md:hidden text-gray-500 hover:text-isam-blue"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="w-5 h-5" />
            </button>
            <a
              href="https://isam.optsolution.net/demande-d-inscription-en-ligne-2025-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-isam-blue hover:bg-isam-blue-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap shadow-sm"
            >
              Portail étudiant
            </a>
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Barre de recherche mobile */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden px-4 pb-3 overflow-hidden"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-isam-blue bg-gray-50"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Rangée 2 : Navigation principale ── */}
      <nav className="hidden md:block bg-white border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap items-center">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href && !link.highlight;

              return (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-3 py-3.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    link.highlight
                      ? "text-isam-blue border-transparent font-semibold hover:border-isam-blue"
                      : isActive
                      ? "text-isam-blue border-isam-blue font-semibold"
                      : "text-slate-700 border-transparent hover:text-isam-blue hover:border-isam-blue"
                  }`}
                >
                  {link.name}
                  {link.subLinks && (
                    <ChevronDown
                      className="w-3.5 h-3.5 transition-transform"
                      style={{
                        transform: activeDropdown === index ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  )}
                </Link>

                {/* Menu déroulant */}
                {link.subLinks && (
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full w-56 bg-white rounded-b-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                      >
                        {link.subLinks.map((sub, si) => (
                          <Link
                            key={si}
                            href={sub.href}
                            className="block px-4 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-isam-blue border-b border-gray-50 last:border-0 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* ── Menu mobile ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href && !link.highlight;
                return (
                <div key={index}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                      link.highlight
                        ? "text-isam-blue font-semibold bg-blue-50"
                        : isActive
                        ? "text-isam-blue font-semibold bg-gray-50"
                        : "text-gray-800 hover:bg-gray-50 hover:text-isam-blue"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="pl-6 space-y-1 pb-2">
                      {link.subLinks.map((sub, si) => (
                        <Link
                          key={si}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-sm text-gray-500 hover:text-isam-blue rounded-lg hover:bg-gray-50"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                );
              })}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="https://isam.optsolution.net/demande-d-inscription-en-ligne-2025-2026"
                  className="block text-center bg-isam-blue text-white px-4 py-3 rounded-lg text-sm font-semibold"
                >
                  Portail étudiant
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
