import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FEATURED_PROJECTS } from "@/data/fixtures/projects";
import { ResidentialGallery } from "@/components/residential/ResidentialGallery";

export const metadata = {
  title: "Residential Interior Design — Muskan Pareek",
  description: "Thoughtful residential interiors designed around everyday routines, warmth, and modular functional clarity.",
};

export default function ResidentialWorkPage() {
  const residentialProjects = FEATURED_PROJECTS.filter(
    (p) => p.category === "Residential" || p.category === "Villa"
  );

  return (
    <main className="min-h-screen bg-paper text-brown">
      <Header />

      <div className="pt-28 pb-4 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brown-soft hover:text-charcoal transition-colors font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Work</span>
        </Link>
      </div>

      <section className="py-12 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="mb-12 border-b border-stone/40 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brown-soft">
                PORTFOLIO CATEGORY
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-olive/15 text-olive font-semibold">
                {residentialProjects.length} Curated Homes &amp; Villas
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-brown font-normal leading-[1.08]">
              Residential Interiors
            </h1>
            <p className="font-sans text-brown-soft text-base md:text-lg mt-3 max-w-xl">
              Warm homes designed for real living, combining space planning, modular kitchen &amp; wardrobe systems, and bespoke styling.
            </p>
          </div>
        </div>

        <ResidentialGallery projects={residentialProjects} />
      </section>

      <Footer />
    </main>
  );
}
