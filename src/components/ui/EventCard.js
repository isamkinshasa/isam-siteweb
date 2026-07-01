"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EventCard({ event, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all flex flex-col sm:flex-row group"
    >
      <div className="bg-isam-blue/5 p-6 sm:w-32 flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-gray-100 group-hover:bg-isam-blue group-hover:text-white transition-colors">
        <div className="text-3xl font-bold text-isam-blue group-hover:text-white">{event.day}</div>
        <div className="text-sm font-medium text-gray-600 text-center group-hover:text-white/90">{event.month}</div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 font-serif group-hover:text-isam-blue transition-colors">{event.title}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-3 gap-2">
          <Clock className="w-4 h-4" />
          {event.time}
        </div>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2 flex-grow">
          {event.description}
        </p>
        <Link
          href={`/evenements/${event.id}`}
          className="inline-flex items-center text-sm font-semibold text-isam-blue hover:text-isam-blue-dark mt-auto"
        >
          Détails
          <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
