import type { Metadata } from "next";
import { Instrument_Serif, Manrope, Caveat } from "next/font/google";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muskan Pareek — Interior Designer | AutoCAD, SketchUp & 3D Visualization",
  description:
    "Interior Designer based in Bengaluru with 3+ years of experience across residential interiors, space planning, modular furniture, AutoCAD drafting, SketchUp modelling, and photorealistic 3D visualization.",
  keywords: [
    "Muskan Pareek",
    "Interior Designer",
    "Bengaluru Interior Designer",
    "AutoCAD Drafting",
    "SketchUp 3D Modelling",
    "Photorealistic 3D Visualization",
    "Residential Interiors",
    "Modular Furniture",
  ],
  openGraph: {
    title: "Muskan Pareek — Interior Designer",
    description: "Designing spaces that feel like home. Thoughtful, functional, and visually refined interiors.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muskan Pareek",
    jobTitle: "Interior Designer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "India",
    },
    url: "https://muskanpareek.com",
    sameAs: ["https://www.linkedin.com/in/muskan-pareek-78b19a224"],
    knowsAbout: [
      "Residential Interior Design",
      "Space Planning",
      "AutoCAD Drafting",
      "SketchUp 3D Modelling",
      "Photorealistic 3D Visualization",
      "Modular Furniture Design",
      "AI-Assisted Interior Design Workflows",
    ],
  };

  return (
    <html
      lang="en"
      data-active-section="0"
      data-section-id="home"
      className={`${instrumentSerif.variable} ${manrope.variable} ${caveat.variable} selection:bg-sunflower selection:text-brown`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>

      <body className="bg-paper text-brown antialiased min-h-screen">
        {/* Accessible Skip-to-content link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sunflower focus:text-brown focus:font-bold focus:rounded-xl focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <CustomCursor />
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
