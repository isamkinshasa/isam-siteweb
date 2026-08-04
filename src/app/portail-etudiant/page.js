"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, LogIn, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function PortailEtudiantPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login for UX
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-x-hidden font-sans">
      {/* Background Image with Blur and Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700 pointer-events-none"
        style={{ backgroundImage: 'url("/hero/hero-3.jpg")' }}
      />
      <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[6px] pointer-events-none" />

      {/* Spacer to push card to center */}
      <div className="flex-grow flex items-center justify-center p-4 z-10 w-full max-w-md">
        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full border border-white/20"
        >
          {/* Card Header (Blue Gradient Banner) */}
          <div className="bg-gradient-to-b from-blue-500 to-blue-600 px-6 py-8 text-center text-white relative">
            {/* Logo */}
            <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center p-2 mb-4 shadow-md">
              <img
                src="/logo.png"
                alt="Logo ISAM"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title */}
            <h1 className="text-lg font-bold leading-snug px-2 font-display">
              Bienvenue à l'espace étudiant de l'Institut Supérieur des Arts et Métiers de Kinshasa
            </h1>

            {/* Subtitle */}
            <p className="text-xs text-blue-100/90 mt-2 font-medium">
              Connectez-vous pour accéder à votre espace
            </p>
          </div>

          {/* Form Area */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 bg-white">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Adresse email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="exemple@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                Mot de passe
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  required
                  placeholder="Entrez votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-11 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3.5 px-4 rounded-2xl transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <LogIn className="h-4 w-4" />
                  Se connecter
                </>
              )}
            </button>

            {/* Inscription Link */}
            <div className="text-center pt-2">
              <p className="text-xs text-gray-500">
                Vous n'êtes pas encore inscrit ?{" "}
                <a
                  href="https://isam.optsolution.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:text-blue-700 underline"
                >
                  S'inscrire en ligne
                </a>
              </p>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Footer Link (Retour à l'accueil) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full text-center pb-8 z-10"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à l'accueil
        </Link>
      </motion.div>
    </div>
  );
}
