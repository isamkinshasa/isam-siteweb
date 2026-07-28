"use client";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

export default function ZoomableImage({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="w-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm mb-10 border border-gray-100 cursor-zoom-in relative group"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className="w-full max-h-[400px] md:max-h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-slate-800 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md transition-opacity flex items-center gap-2 shadow-lg">
            <ZoomIn className="w-4 h-4" />
            Agrandir
          </span>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 cursor-zoom-out backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all"
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
