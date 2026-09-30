import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FURNITURE_DESIGNS } from "@/data/fixtures/projects";
import { FurnitureGallery } from "@/components/furniture/FurnitureGallery";

export const metadata = {
  title: "Custom & Modular Furniture Design — Muskan Pareek",
  description: "Modular and custom furniture designed around ergonomics, storage utility, joinery, and buildability.",
};

export default function FurnitureWorkPage() {
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
        <div className="mb-10 border-b border-stone/40 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brown-soft">
                PORTFOLIO CATEGORY
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-olive/15 text-olive font-semibold">
                9 Bespoke Designs
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-brown font-normal leading-[1.08]">
              Custom Furniture &amp; Millwork
            </h1>
            <p className="font-sans text-brown-soft text-base md:text-lg mt-3 max-w-2xl">
              Curated collection of 9 bespoke furniture and millwork designs — from low-slung credenzas and monolithic travertine tables to System 32 modular wardrobes and Japandi platform beds.
            </p>
          </div>
        </div>

        {/* Interactive Gallery with Filters and Inspection Lightbox */}
        <FurnitureGallery items={FURNITURE_DESIGNS} />

        {/* System 32 Modular Joinery Standards Explainer */}
        <div className="mt-20 p-8 md:p-12 bg-paper-light rounded-3xl border border-stone/30 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone/30 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-olive font-bold block mb-1">
                JOINERY PRINCIPLES &amp; CUT-LISTS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-brown font-normal">
                Engineered to System 32 Precision
              </h2>
            </div>
            <p className="text-xs font-sans text-brown-soft max-w-md leading-relaxed">
              Every bespoke piece is designed around real factory manufacturing parameters, standard hardware centerlines, and site leveling tolerances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-paper rounded-2xl border border-stone/30 space-y-2">
              <div className="font-mono text-xs font-bold text-olive">32mm HOLE LINE PITCH</div>
              <div className="font-display text-xl text-brown">Standardized Hardware Bore</div>
              <p className="text-xs font-sans text-brown-soft leading-relaxed">
                Universal 32mm vertical and 37mm setback hole patterns ensuring zero-play alignment with Blum, Häfele, and Hettich hardware fittings.
              </p>
            </div>

            <div className="p-6 bg-paper rounded-2xl border border-stone/30 space-y-2">
              <div className="font-mono text-xs font-bold text-olive">30mm SCRIBING FILLERS</div>
              <div className="font-display text-xl text-brown">Wall-to-Wall Fitment</div>
              <p className="text-xs font-sans text-brown-soft leading-relaxed">
                30mm dummy fillers on perimeter carcasses absorb out-of-plumb masonry tolerances, allowing doors to open 90&deg;+ without scraping walls.
              </p>
            </div>

            <div className="p-6 bg-paper rounded-2xl border border-stone/30 space-y-2">
              <div className="font-mono text-xs font-bold text-olive">ARCHITECTURAL REVEALS</div>
              <div className="font-display text-xl text-brown">Concealed 20mm Shadow Gaps</div>
              <p className="text-xs font-sans text-brown-soft leading-relaxed">
                Deliberate negative reveals and recessed plinths that create floating mass effects and conceal maintenance cable management channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
