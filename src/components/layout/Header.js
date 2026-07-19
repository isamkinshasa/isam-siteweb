"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
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
    name: "Formations",
    href: "#",
    subLinks: [
      { name: "Technique d'habillement", href: "/filiere" },
      { name: "Modélisme & Stylisme", href: "/filiere" },
      { name: "Coiffure et Esthétique", href: "/filiere" },
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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-lg shadow-isam-blue/5"
          : "bg-white/95 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 gap-8">
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

          {/* CTA */}
          <div className="ml-auto flex items-center gap-3">
            <Link
              href="/portail-etudiant"
              className="hidden md:flex items-center gap-2 bg-isam-blue hover:bg-isam-blue-dark text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md shadow-isam-blue/25 hover:shadow-isam-blue/40 hover:-translate-y-0.5"
            >
              <GraduationCap className="w-4 h-4" />
              Portail étudiant
            </Link>

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

      {/* Mobile Menu */}
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
              <div className="pt-3 pb-2">
                <Link
                  href="/portail-etudiant"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-isam-blue text-white px-4 py-3 rounded-xl text-sm font-semibold shadow-md shadow-isam-blue/25"
                >
                  <GraduationCap className="w-4 h-4" />
                  Portail étudiant
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
