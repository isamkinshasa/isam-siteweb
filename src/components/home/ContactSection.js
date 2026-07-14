"use client";

import { siteData } from "@/data/siteData";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
  },
  {
    label: "Instagram",
    href: "#",
    icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
  },
  {
    label: "YouTube",
    href: "#",
    icon: <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />,
  },
];

const contactItems = [
  {
    icon: MapPin,
    label: "Adresse",
    value: siteData.contact.address,
    color: "bg-isam-blue/10 text-isam-blue",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: siteData.contact.phone,
    color: "bg-isam-green/10 text-isam-green",
  },
  {
    icon: Mail,
    label: "Email",
    value: siteData.contact.email.join(" • "),
    color: "bg-isam-yellow/15 text-yellow-700",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: siteData.contact.hours.replace(" | ", "\n"),
    color: "bg-purple-50 text-purple-600",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-isam-blue/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-isam-yellow/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          title="Contactez-nous"
          subtitle="Parlons ensemble"
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-4">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Vous avez des questions sur nos programmes ou souhaitez nous rendre visite ? N'hésitez pas à nous contacter — nous sommes là pour vous.
            </p>

            <div className="space-y-4 mb-10">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-isam-light border border-transparent hover:border-gray-100 transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700 text-sm mb-0.5">{item.label}</p>
                      <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Socials */}
            <div>
              <p className="font-semibold text-slate-700 text-sm mb-4">Suivez-nous sur les réseaux</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-isam-blue hover:bg-isam-blue-dark text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md shadow-isam-blue/20"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-isam-light rounded-3xl p-8 border border-gray-100"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-6 font-display">Envoyez-nous un message</h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Nom complet</label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-isam-blue/20 focus:border-isam-blue transition-all bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-isam-blue/20 focus:border-isam-blue transition-all bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Sujet</label>
                <input
                  type="text"
                  placeholder="Sujet de votre message"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-isam-blue/20 focus:border-isam-blue transition-all bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                <textarea
                  rows="5"
                  placeholder="Votre message..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-isam-blue/20 focus:border-isam-blue transition-all bg-white resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="gdpr" className="mt-0.5 accent-isam-blue" />
                <label htmlFor="gdpr" className="text-xs text-gray-500 leading-relaxed">
                  J'accepte que mes données soient traitées conformément à la politique de confidentialité de l'ISAM-Kinshasa.
                </label>
              </div>

              <button
                type="button"
                className="w-full bg-isam-blue hover:bg-isam-blue-dark text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-isam-blue/25 hover:shadow-isam-blue/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
