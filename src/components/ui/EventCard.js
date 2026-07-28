"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Tag, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function EventCard({ event, index }) {
  const href = `/actualites/evenement/${event.id}`;
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover flex flex-col h-full"
    >
      <Link href={href} className="relative h-52 overflow-hidden block flex-shrink-0">
        <img
          src={event.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800"} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm bg-white/90 text-yellow-700">
            <Tag className="w-3 h-3" />
            Événement
          </span>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{event.day} {event.month}</span>
          </div>
          {event.time && (
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{event.time}</span>
            </div>
          )}
        </div>

        <Link href={href} className="flex-grow">
          <h3 className="font-bold text-slate-800 text-base mb-3 leading-snug line-clamp-3 group-hover:text-isam-blue transition-colors duration-200 font-display">
            {event.title}
          </h3>
        </Link>
        
        {event.location && (
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{event.location}</span>
          </div>
        )}

        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
          {event.description}
        </p>

        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-isam-blue text-sm font-semibold hover:gap-2.5 transition-all duration-200 mt-auto group/link"
        >
          Détails de l'événement
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}
