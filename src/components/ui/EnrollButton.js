"use client";

import { ArrowRight } from "lucide-react";

export default function EnrollButton({
  className = "",
  children,
  onClick,
  href = "https://isam.optsolution.net",
  target = "_blank",
  rel = "noopener noreferrer",
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
