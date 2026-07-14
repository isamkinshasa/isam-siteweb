/**
 * Layout spécial pour le Studio Sanity.
 * Désactive le layout global (Header/Footer) pour que le Studio
 * puisse s'afficher en plein écran.
 */
export default function StudioLayout({ children }) {
  return <>{children}</>;
}
