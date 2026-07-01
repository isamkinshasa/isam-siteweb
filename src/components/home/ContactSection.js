"use client";

import { siteData } from "@/data/siteData";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const hours = siteData.contact.hours.split(" | ");

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold font-serif text-slate-800 text-center mb-3">Contactez-nous</h2>
        <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
          Vous avez des questions sur nos programmes ou souhaitez nous rendre visite ? N'hésitez pas à nous contacter.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Contact info */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-7">Informations de Contact</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-isam-blue/10 flex items-center justify-center text-isam-blue shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-700 text-sm mb-1">Adresse</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{siteData.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-isam-blue/10 flex items-center justify-center text-isam-blue shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-700 text-sm mb-1">Téléphone</p>
                  <p className="text-gray-500 text-sm">{siteData.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-isam-blue/10 flex items-center justify-center text-isam-blue shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-700 text-sm mb-1">Email</p>
                  {siteData.contact.email.map((e, i) => (
                    <p key={i} className="text-gray-500 text-sm">{e}</p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-isam-blue/10 flex items-center justify-center text-isam-blue shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-700 text-sm mb-1">Horaires d'ouverture</p>
                  {hours.map((h, i) => (
                    <p key={i} className="text-gray-500 text-sm">{h}</p>
                  ))}
                  <p className="text-gray-500 text-sm">Fermé le dimanche</p>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-8">
              <p className="font-semibold text-slate-700 text-sm mb-4">Suivez-nous</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-isam-blue text-white flex items-center justify-center hover:bg-isam-blue-dark transition-colors shadow-sm"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-7">Envoyez-nous un message</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Nom complet</label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-isam-blue/20 focus:border-isam-blue transition-colors bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-isam-blue/20 focus:border-isam-blue transition-colors bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Sujet</label>
                <input
                  type="text"
                  placeholder="Sujet de votre message"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-isam-blue/20 focus:border-isam-blue transition-colors bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                <textarea
                  rows="5"
                  placeholder="Votre message..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-isam-blue/20 focus:border-isam-blue transition-colors bg-gray-50 resize-none"
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
                className="w-full bg-isam-blue hover:bg-isam-blue-dark text-white py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-sm"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
