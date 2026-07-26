"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity/studio.config";

export function Studio() {
  return <NextStudio config={config} />;
}
