"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Maximize2, X, CheckCircle2, Layers } from "lucide-react";
import { STYLE_OUTPUTS } from "@/data/fixtures/styles";
import { PaperNote } from "@/components/ui/PaperNote";
import { WavyDivider } from "@/components/ui/WavyDivider";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ArchitecturalFloorPlanWatermark } from "@/components/ui/ArchitecturalFloorPlanWatermark";
import { StyleOutput } from "@/types/project";
import { cn } from "@/lib/cn";

export function StyleOfWorkSection() {
  const [activeItem, setActiveItem] = useState<StyleOutput | null>(null);
  const [selectedSwatchIndex, setSelectedSwatchIndex] = useState<number>(0);

  return (
    <section
      id="style"
      data-section="4"
      className="relative min-h-[100svh] lg:h-[100svh] lg:max-h-[100svh] w-full bg-paper flex flex-col justify-between py-8 md:py-10 lg:py-12 overflow-hidden content-visibility-auto"
    >
      {/* Subtle CAD Background Watermark */}
      <ArchitecturalFloorPlanWatermark
        opacity="opacity-[0.06]"
        variant="minimal"
      />

      <div className="max-w-master mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-center relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 pb-3 border-b border-stone/40">
          <div>
            <AnimatedHeading
              as="h2"
              className="font-display text-3xl sm:text-4xl lg:text-5xl text-brown font-normal tracking-tight"
              eyebrow="MULTIPLE WAYS TO BRING IDEAS TO LIFE"
              subtitle="From plans to perspectives, furniture to moodboards — a complete design approach for spaces that feel just right."
            >
              My Style of Work
            </AnimatedHeading>
          </div>

          <div className="mt-3 md:mt-0 flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-sand/60 border border-stone/30 text-xs font-mono text-charcoal/70">
              <Compass className="w-3.5 h-3.5 text-terracotta animate-spin-slow" />
              <span>4 DESIGN PILLARS</span>
            </div>
            <PaperNote rotate="right" hasTape={false} className="text-lg md:text-xl">
              Ideas Visualised Beautifully ♡
            </PaperNote>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 items-stretch">
          {STYLE_OUTPUTS.map((item, idx) => {
            const isMoodboard = item.id === "style-moodboard";

            return (
              <div
                key={item.id}
                className="group relative bg-paper-card/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-stone/50 hover:border-terracotta/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 p-3"
              >
                {/* Top Discipline Badge & Tag */}
                <div className="flex items-center justify-between gap-2 mb-2 px-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                    <span className="font-mono text-[10px] tracking-wider uppercase text-charcoal/70 font-semibold">
                      0{idx + 1} · {item.tag || "DESIGN OUTPUT"}
                    </span>
                  </div>
                  {item.badge && (
                    <span className="text-[9px] font-sans font-medium px-2 py-0.5 rounded-full bg-sand/70 text-charcoal/80 border border-stone/30 truncate max-w-[130px]">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Main Media Container */}
                <div className="relative w-full aspect-[4/3.4] rounded-xl overflow-hidden bg-stone/20 border border-stone/30">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Blueprint Crosshair Overlay for 2D & Furniture */}
                  {(item.id === "style-2d" || item.id === "style-furniture") && (
                    <div className="absolute inset-0 bg-navy/10 pointer-events-none mix-blend-multiply flex items-center justify-center">
                      <div className="w-full h-full border border-dashed border-white/20 m-2 rounded-lg" />
                    </div>
                  )}

                  {/* Quick Inspect Button on Hover */}
                  <button
                    onClick={() => setActiveItem(item)}
                    className="absolute bottom-2 right-2 bg-charcoal/85 hover:bg-charcoal text-white text-[11px] font-sans font-medium px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md backdrop-blur-sm"
                    aria-label={`Inspect ${item.title}`}
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span>Inspect</span>
                  </button>
                </div>

                {/* Tactile Moodboard Swatches Strip */}
                {isMoodboard && item.swatches && (
                  <div className="mt-2.5 pt-2 border-t border-stone/30">
                    <div className="flex items-center justify-between mb-1.5 px-0.5">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/60">
                        Tactile Palette Swatches
                      </span>
                      <span className="text-[9px] font-medium text-terracotta">
                        {item.swatches.length} Materials
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 no-scrollbar">
                      {item.swatches.map((swatch, sIdx) => (
                        <button
                          key={swatch.name}
                          type="button"
                          onClick={() => setSelectedSwatchIndex(sIdx)}
                          className={cn(
                            "w-6 h-6 rounded-md border transition-all shrink-0 relative group/swatch",
                            selectedSwatchIndex === sIdx
                              ? "ring-2 ring-terracotta border-white scale-110"
                              : "border-stone/40 hover:scale-105"
                          )}
                          style={{ backgroundColor: swatch.hex }}
                          title={swatch.name}
                          aria-label={`Material: ${swatch.name}`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Evidence Points preview */}
                <div className="my-2 px-1 flex-1">
                  <h3 className="font-display text-base font-medium text-brown mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-brown-soft leading-relaxed line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom CTA Row */}
                <div className="pt-2 border-t border-stone/30 flex items-center justify-between gap-2 px-1">
                  <Link
                    href={item.href}
                    className="font-sans text-xs font-semibold text-charcoal hover:text-terracotta transition-colors flex items-center gap-1.5 group/link"
                  >
                    <span>{item.linkText}</span>
                  </Link>

                  <Link
                    href={item.href}
                    className="w-7 h-7 rounded-full bg-charcoal text-white flex items-center justify-center shrink-0 group-hover:bg-sunflower group-hover:text-charcoal transition-all group-hover:scale-110 shadow-sm"
                    aria-label={`Go to ${item.title}`}
                  >
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Detail Inspection Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative bg-paper-card border border-stone/40 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-stone/30">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-terracotta uppercase font-semibold">
                    {activeItem.tag || "ARCHITECTURAL DETAIL"}
                  </span>
                  <span className="text-stone/60">·</span>
                  <span className="font-sans text-xs text-charcoal/70">{activeItem.badge}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-brown">
                  {activeItem.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveItem(null)}
                className="w-9 h-9 rounded-full bg-sand hover:bg-sand-dark text-charcoal flex items-center justify-center transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Media Preview */}
            <div className="relative w-full aspect-[16/10] my-5 rounded-2xl overflow-hidden bg-stone/20 border border-stone/30 shadow-inner">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-contain"
              />
            </div>

            {/* Modal Technical Breakdown */}
            <div className="space-y-3">
              <p className="font-sans text-sm text-brown-soft leading-relaxed">
                {activeItem.subtitle}
              </p>

              {activeItem.evidence && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-stone/30">
                  {activeItem.evidence.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs font-sans text-charcoal/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Swatches details if moodboard */}
              {activeItem.swatches && (
                <div className="pt-3 border-t border-stone/30 flex flex-wrap items-center gap-3">
                  {activeItem.swatches.map((swatch) => (
                    <div key={swatch.name} className="flex items-center gap-2 text-xs font-mono bg-sand/60 px-2.5 py-1 rounded-lg border border-stone/30">
                      <span className="w-3 h-3 rounded-full border border-black/10" style={{ backgroundColor: swatch.hex }} />
                      <span className="font-sans text-charcoal">{swatch.name}</span>
                      <span className="text-charcoal/50 text-[10px]">{swatch.hex}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-4 flex justify-end gap-3">
                <Link
                  href={activeItem.href}
                  className="bg-charcoal hover:bg-terracotta text-white font-sans text-xs font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 transition-colors shadow-md"
                >
                  <span>{activeItem.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <WavyDivider fill="#F7F2E8" position="bottom" className="mt-1" />
    </section>
  );
}
