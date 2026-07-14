"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, ArrowRight } from "lucide-react";

export default function EventCard({ event, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100 transition-all duration-300 cursor-default"
    >
      {/* Date badge */}
      <div className="flex-shrink-0 bg-isam-blue group-hover:scale-105 transition-transform duration-300 rounded-xl p-3 text-center min-w-[52px] shadow-md shadow-isam-blue/20">
        <div className="text-xl font-bold text-white leading-none font-display">{event.day}</div>
        <div className="text-[9px] text-blue-200 font-medium mt-0.5 capitalize leading-tight">{event.month}</div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-bold text-slate-700 group-hover:text-isam-blue transition-colors duration-200 line-clamp-2 leading-snug mb-2 font-display">
          {event.title}
        </h3>
        {event.time && (
          <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
            <Clock className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">{event.time}</span>
          </div>
        )}
        {event.description && (
          <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{event.description}</p>
        )}
      </div>
    </motion.div>
  );
}
