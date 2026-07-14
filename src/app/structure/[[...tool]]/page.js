"use client";

/**
 * Page du Studio Sanity intégré dans Next.js.
 * Accessible sur /structure en développement.
 * IMPORTANT : Cette route doit être protégée en production.
 */

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity/studio.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
