/**
 * Page du Studio Sanity intégré dans Next.js.
 * Accessible sur /structure en développement.
 * IMPORTANT : Cette route doit être protégée en production.
 */

import { Studio } from "./Studio";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ tool: [] }];
}

export default function StudioPage() {
  return <Studio />;
}
