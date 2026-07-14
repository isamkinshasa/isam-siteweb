"use client";

import Link from "next/link";
import { Clock, MapPin, ArrowRight, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

export default function EventsSection({ events = [] }) {
  if (!events || events.length === 0) return null;

  return (
    <section className="py-24 bg-isam-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-isam-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-isam-yellow/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <SectionHeader
            title="Événements à venir"
            subtitle="Agenda"
            centered={false}
          />
          <Link
            href="/actualites"
            className="inline-flex items-center gap-1.5 text-isam-blue text-sm font-semibold hover:gap-3 transition-all duration-300 whitespace-nowrap group"
          >
            Voir tous les événements
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Events grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-3 gap-6"
        >
          {events.slice(0, 3).map((event, index) => {
            let day = event.day || "";
            let month = event.month || "";
            if (event.date) {
              const dateObj = new Date(event.date);
              day = dateObj.getDate().toString().padStart(2, "0");
              month = dateObj.toLocaleDateString("fr-FR", { month: "short", year: "numeric" });
            }

            return (
              <motion.div
                key={event._id || index}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group bg-white rounded-2xl p-6 border border-gray-100 card-hover relative overflow-hidden"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-6 bottom-6 w-1 bg-isam-blue rounded-r-full" />

                <div className="flex items-start gap-5 pl-4">
                  {/* Date badge */}
                  <div className="flex-shrink-0 text-center bg-isam-blue rounded-xl p-3 min-w-[56px] shadow-md shadow-isam-blue/20">
                    <div className="text-2xl font-bold text-white leading-none font-display">{day}</div>
                    <div className="text-[10px] text-blue-200 font-medium mt-1 capitalize leading-tight">{month}</div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-isam-blue transition-colors duration-200 mb-3 font-display line-clamp-2">
                      {event.title}
                    </h3>

                    {event.time && (
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span>{event.time}</span>
                      </div>
                    )}

                    {event.location && (
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {event.description && (
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mt-4 pl-4">
                    {event.description}
                  </p>
                )}

                <div className="mt-4 pl-4">
                  <a href="#" className="inline-flex items-center gap-1 text-isam-blue text-xs font-semibold hover:gap-2 transition-all duration-200 group/link">
                    En savoir plus
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
