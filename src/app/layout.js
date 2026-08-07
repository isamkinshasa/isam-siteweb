import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import InteractiveGuide from "@/components/ui/InteractiveGuide";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://www.isamkinshasa.com"),
  title: {
    default: "ISAM Kinshasa | Institut Supérieur des Arts et Métiers",
    template: "%s | ISAM Kinshasa",
  },
  description: "Bienvenue à l'ISAM Kinshasa, la référence en technique d'habillement, modélisme et esthétique en République Démocratique du Congo.",
  keywords: ["ISAM", "Kinshasa", "Arts", "Métiers", "Mode", "Habillement", "Design", "Esthétique", "RDC", "Université", "Institut Supérieur"],
  authors: [{ name: "ISAM Kinshasa" }],
  creator: "ISAM Kinshasa",
  publisher: "ISAM Kinshasa",
  openGraph: {
    type: "website",
    locale: "fr_CD",
    url: "https://www.isamkinshasa.com",
    siteName: "ISAM Kinshasa",
    title: "ISAM Kinshasa | Institut Supérieur des Arts et Métiers",
    description: "La référence en technique d'habillement, modélisme et esthétique en RDC.",
    images: [
      {
        url: "/apropos-campus.jpg",
        width: 1200,
        height: 630,
        alt: "Campus ISAM Kinshasa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISAM Kinshasa | Institut Supérieur des Arts et Métiers",
    description: "La référence en technique d'habillement, modélisme et esthétique en RDC.",
    images: ["/apropos-campus.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <InteractiveGuide />
      </body>
    </html>
  );
}
