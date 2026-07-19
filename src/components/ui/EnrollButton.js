"use client";

import { ArrowRight } from "lucide-react";

export default function EnrollButton({ className, children, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    } else {
      alert("Bientôt disponible !");
    }
  };

  return (
    <button onClick={handleClick} className={className + " cursor-pointer"}>
      {children}
    </button>
  );
}
