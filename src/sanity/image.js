import imageUrlBuilder from "@sanity/image-url";
import { sanityConfig } from "./config";

const builder = imageUrlBuilder(sanityConfig);

/**
 * Retourne un builder d'URL pour une image Sanity.
 * Usage : urlFor(source).width(800).url()
 */
export function urlFor(source) {
  return builder.image(source);
}
