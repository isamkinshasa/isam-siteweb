"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { X, Calendar, Clock, MapPin, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function FeaturedEventContent({ events }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const containerRef = useRef(null);

  const eventId = searchParams.get("eventId");

  useEffect(() => {
    if (eventId && events) {
      const found = events.find((e) => String(e.id) === eventId || String(e._id) === eventId);
      setSelectedEvent(found || null);
    } else {
      setSelectedEvent(null);
    }
  }, [eventId, events]);

  useEffect(() => {
    if (selectedEvent && containerRef.current) {
      setTimeout(() => {
        containerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 150);
    }
  }, [selectedEvent]);

  const closeEvent = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("eventId");
    const newPath = newParams.toString() ? `?${newParams.toString()}` : window.location.pathname;
    router.push(newPath, { scroll: false });
  };

  const getShareUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return "";
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(getShareUrl());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {selectedEvent && (
        <motion.div
          key={selectedEvent.id || "featured-event"}
          ref={containerRef}
          initial={{ opacity: 0, y: -20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -20, height: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4 overflow-hidden"
        >
          <div className="bg-white rounded-[2rem] border border-isam-blue/20 shadow-xl overflow-hidden relative flex flex-col md:flex-row">
            
            <button
              onClick={closeEvent}
              title="Fermer cet événement"
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-md hover:bg-white rounded-full flex items-center justify-center transition-colors text-slate-700 shadow-sm border border-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            {selectedEvent.image && (
              <div className="w-full md:w-2/5 h-72 md:h-auto relative bg-black flex items-center justify-center overflow-hidden shrink-0">
                {/* Blurred Background */}
                <img
                  src={selectedEvent.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-60"
                  aria-hidden="true"
                />
                {/* Foreground Image */}
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-contain relative z-10"
                />
              </div>
            )}

            <div className={`p-8 md:p-12 flex-1 flex flex-col ${!selectedEvent.image ? "w-full" : "w-full md:w-3/5"}`}>
              <div className="flex flex-wrap gap-3 mb-6 text-sm">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-isam-yellow/20 text-yellow-800 font-bold uppercase tracking-widest text-[10px] rounded-full border border-isam-yellow/30">
                  Événement à la une
                </span>
                {(selectedEvent.day || selectedEvent.month) && (
                  <div className="inline-flex items-center gap-1.5 text-isam-blue bg-isam-blue/10 px-3 py-1 rounded-full font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {selectedEvent.day} {selectedEvent.month}
                  </div>
                )}
                {selectedEvent.time && (
                  <div className="inline-flex items-center gap-1.5 text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {selectedEvent.time}
                  </div>
                )}
                {selectedEvent.location && (
                  <div className="inline-flex items-center gap-1.5 text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    {selectedEvent.location}
                  </div>
                )}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-800 mb-6 leading-tight">
                {selectedEvent.title}
              </h2>
              
              <div className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 whitespace-pre-line flex-1">
                {selectedEvent.description}
              </div>

              {/* Share Section */}
              <div className="border-t border-gray-100 pt-6 mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                  <Share2 className="w-4 h-4" /> Partager
                </h3>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white rounded-xl transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(selectedEvent.title + " - " + getShareUrl())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white rounded-xl transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(selectedEvent.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 text-slate-700 hover:bg-slate-800 hover:text-white rounded-xl transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-2 bg-isam-blue text-white hover:bg-isam-blue-dark px-4 py-2 rounded-xl font-semibold transition-colors text-sm ml-2"
                  >
                    {isCopied ? "Copié !" : "Copier le lien"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function FeaturedEvent({ events }) {
  return (
    <Suspense fallback={null}>
      <FeaturedEventContent events={events} />
    </Suspense>
  );
}
