"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORY_PORTALS } from "@/data/fixtures/projects";
import { cn } from "@/lib/cn";
import { PaperNote } from "@/components/ui/PaperNote";
import { WavyDivider } from "@/components/ui/WavyDivider";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

export function ExploreWorkSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="work"
      data-section="2"
      className="relative min-h-[100svh] lg:h-[100svh] lg:max-h-[100svh] w-full bg-paper flex flex-col justify-between py-10 md:py-12 lg:py-14 overflow-hidden content-visibility-auto"
    >
      <div className="max-w-master mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-center">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-6 pb-3 border-b border-stone/40">
          <div>
            <AnimatedHeading
              as="h2"
              className="font-display text-3xl sm:text-5xl lg:text-6xl text-brown font-normal tracking-tight"
              subtitle="Different spaces. A common purpose. Thoughtful design for a better everyday."
            >
              Explore All My Work
            </AnimatedHeading>
          </div>

          <div className="mt-3 md:mt-0">
            <PaperNote rotate="right" hasTape={false} className="text-xl">
              Homes · Businesses · Dreams ♡
            </PaperNote>
          </div>
        </div>

        {/* 3 Interactive Portals with Roman Arches matching mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch md:aspect-[16/7.5] md:max-h-[460px] lg:max-h-[500px]">
          {CATEGORY_PORTALS.map((cat) => {
            const isHovered = hoveredId === cat.id;

            return (
              <Link
                key={cat.id}
                href={cat.href}
                onMouseEnter={() => setHoveredId(cat.id)}
                onMouseLeave={() => setHoveredId(null)}
                data-cursor="view"
                className={cn(
                  "group relative rounded-[28px] overflow-hidden shadow-lg border-2 border-stone/30 flex flex-col justify-between transition-all duration-500 ease-out cursor-pointer p-6 sm:p-7 md:p-9 min-h-[220px] md:min-h-0",
                  isHovered
                    ? "ring-2 ring-sunflower shadow-2xl scale-[1.02]"
                    : "opacity-100 scale-100"
                )}
              >
                {/* Background Image */}
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={cn(
                    "object-cover transition-transform duration-700 ease-out",
                    isHovered ? "scale-105" : "scale-100"
                  )}
                />

                {/* Subtle Vignette Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/35" />

                {/* Top Text & Arrow Content matching reference board */}
                <div className="relative z-10 text-white">
                  <h3 className="font-display text-3xl lg:text-4xl text-white font-normal mb-1.5 tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-stone-light/95 text-xs md:text-sm leading-relaxed max-w-xs mb-3.5">
                    {cat.tagline}
                  </p>
                  <div>
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md",
                        isHovered
                          ? "bg-sunflower text-charcoal scale-110"
                          : "bg-white/95 text-charcoal group-hover:bg-sunflower"
                      )}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Bottom spacer / hover accent */}
                <div className="relative z-10 flex justify-end">
                  <span className="text-[11px] uppercase tracking-widest text-white/70 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>

      <WavyDivider fill="#F7F2E8" position="bottom" className="mt-2" />
    </section>
  );
}
