"use client";

import Link from "next/link";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function EventsSection({ events = [] }) {
  if (!events || events.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold font-serif text-slate-800">Événements à venir</h2>
          <Link href="/actualites" className="text-isam-blue text-sm font-semibold hover:underline">
            Tous les événements
          </Link>
        </div>

        {/* Events grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {events.slice(0, 3).map((event, index) => {
            // Sanity date is often YYYY-MM-DD
            // Let's format it if it exists.
            let day = event.day || "";
            let month = event.month || "";
            if (event.date) {
              const dateObj = new Date(event.date);
              day = dateObj.getDate().toString().padStart(2, "0");
              month = dateObj.toLocaleDateString("fr-FR", { month: "short", year: "numeric" }).replace(".", "");
            }

            return (
              <motion.div
                key={event._id || index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-isam-blue/20 transition-all group"
              >
                {/* Date block */}
                <div className="flex items-start gap-5 mb-4">
                  <div className="flex-shrink-0 text-center">
                    <div className="text-4xl font-bold text-isam-blue leading-none">{day}</div>
                    <div className="text-sm text-gray-500 font-medium mt-1 capitalize">{month}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-800 text-base leading-snug group-hover:text-isam-blue transition-colors">
                      {event.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>{event.time}</span>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {event.description}
                </p>

                <a href="#" className="inline-block mt-4 text-isam-blue text-sm font-semibold hover:underline">
                  En savoir plus →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
