"use client";

import { ArrowRight } from "lucide-react";

export default function EnrollButton({
  className = "",
  children,
  onClick,
  href = "https://isam.optsolution.net/demande-d-inscription-en-ligne-2026-2027",
  target,
  rel,
}) {
  if (onClick) {
    return (
      <button onClick={onClick} className={`${className} cursor-pointer`}>
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${className} cursor-pointer`}
    >
      {children}
    </a>
  );
}
