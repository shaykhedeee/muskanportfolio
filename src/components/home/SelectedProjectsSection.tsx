"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FEATURED_PROJECTS, HOMEPAGE_FEATURED_PROJECTS } from "@/data/fixtures/projects";
import { Project } from "@/types/project";
import { cn } from "@/lib/cn";
import { WavyDivider } from "@/components/ui/WavyDivider";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ArchitecturalFloorPlanWatermark } from "@/components/ui/ArchitecturalFloorPlanWatermark";
import { playTap } from "@/lib/sound";

interface SelectedProjectsSectionProps {
  activeIndex?: number;
  onSelectProject?: (index: number) => void;
  projects?: Project[];
}

export function SelectedProjectsSection({
  activeIndex: externalIndex,
  onSelectProject,
  projects: customProjects,
}: SelectedProjectsSectionProps) {
  const [internalIndex, setInternalIndex] = useState(1); // Default to Sunlit Abode (index 1 / "02")
  const activeIndex = externalIndex !== undefined ? externalIndex : internalIndex;

  // Exactly 5 featured projects on homepage matching the design mockup
  const featuredList = (customProjects || HOMEPAGE_FEATURED_PROJECTS).slice(0, 5);
  const maxStart = Math.max(0, featuredList.length - 2);
  const startIndex = Math.min(Math.max(0, activeIndex), maxStart);
  const visibleProjects = featuredList.slice(startIndex, startIndex + 2);

  const handleSelect = (idx: number) => {
    playTap();
    if (onSelectProject) {
      onSelectProject(idx);
    } else {
      setInternalIndex(idx);
    }
  };

  const handlePrev = () => {
    playTap();
    handleSelect(Math.max(0, activeIndex - 1));
  };

  const handleNext = () => {
    playTap();
    handleSelect(Math.min(maxStart, activeIndex + 1));
  };

  return (
    <section
      id="projects"
      data-section="1"
      className="relative min-h-[100svh] lg:h-[100svh] lg:max-h-[100svh] w-full bg-paper flex flex-col justify-between py-10 md:py-12 lg:py-14 overflow-hidden content-visibility-auto"
    >
      {/* Subtle CAD Elevation Background Watermark */}
      <ArchitecturalFloorPlanWatermark
        variant="elevation"
        opacity="opacity-[0.035]"
        className="pointer-events-none"
      />
      <div className="max-w-master mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-center">
        
        {/* Section Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 sm:mb-6 pb-3 border-b border-stone/40">
          <div className="flex flex-wrap items-baseline gap-4 md:gap-6">
            <AnimatedHeading
              as="h2"
              className="font-display text-3xl sm:text-5xl lg:text-6xl text-brown font-normal tracking-tight"
              eyebrow="REAL SPACES · REAL STORIES"
            >
              Featured Projects
            </AnimatedHeading>
          </div>

          <div className="flex items-center gap-4 mt-3 sm:mt-0">
            <Link
              href="/projects"
              className="text-xs uppercase tracking-wider text-brown-soft hover:text-charcoal flex items-center gap-1.5 transition-colors font-medium"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Prev / Next controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                aria-label="Previous project"
                className="w-9 h-9 rounded-full bg-paper-card border border-stone/50 text-brown flex items-center justify-center hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex >= maxStart}
                aria-label="Next project"
                className="w-9 h-9 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-brown disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Grid: Left List (4 cols) + Right Cards (8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center">
          
          {/* Mobile Project Selector Pill Bar (lg:hidden) */}
          <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 -mx-4 px-4 no-scrollbar snap-x">
            {featuredList.map((proj, idx) => {
              const isPrimary = idx === startIndex;
              return (
                <button
                  key={proj.id}
                  onClick={() => handleSelect(idx <= maxStart ? idx : maxStart)}
                  className={cn(
                    "shrink-0 snap-start px-3.5 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer text-left border",
                    isPrimary
                      ? "bg-paper-card shadow-sm border-sunflower text-brown font-medium"
                      : "bg-paper-card/60 border-stone/30 text-brown-soft hover:bg-paper-card"
                  )}
                >
                  <span className={cn("font-mono text-xs font-bold", isPrimary ? "text-sunflower" : "text-brown-soft")}>
                    {proj.number}
                  </span>
                  <span className="font-display text-sm whitespace-nowrap text-brown">
                    {proj.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Left Project Index Rail (cols 1-4) on Desktop */}
          <div className="hidden lg:flex lg:col-span-4 flex-col space-y-2 pr-2">
            {featuredList.map((proj, idx) => {
              const isPrimary = idx === startIndex;

              return (
                <button
                  key={proj.id}
                  onClick={() => handleSelect(idx <= maxStart ? idx : maxStart)}
                  className={cn(
                    "text-left p-3 rounded-xl transition-all duration-300 flex items-center gap-3.5 group cursor-pointer",
                    isPrimary
                      ? "bg-paper-card shadow-sm border-l-4 border-l-sunflower border-y border-r border-stone/30"
                      : "hover:bg-paper-card/50 opacity-75 hover:opacity-100"
                  )}
                >
                  <span
                    className={cn(
                      "font-display text-xl md:text-2xl transition-colors",
                      isPrimary ? "text-sunflower font-semibold" : "text-brown-soft"
                    )}
                  >
                    {proj.number}
                  </span>
                  <div className="flex-1">
                    <div className="font-display text-lg md:text-xl text-brown font-normal leading-snug group-hover:text-charcoal transition-colors">
                      {proj.title}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-brown-soft/75 mt-0.5">
                      {proj.category} · {proj.location}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Dual Project Cards (cols 5-12) with Signature Arched Tops */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {visibleProjects.map((proj, i) => (
              <div
                key={proj.id}
                data-cursor="view"
                className={cn(
                  "group relative rounded-t-[140px] md:rounded-t-[180px] rounded-b-3xl overflow-hidden shadow-xl border-2 border-stone/30 bg-paper-card flex flex-col justify-end transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl aspect-[3.5/4.6] max-h-[460px] lg:max-h-[500px]",
                  i === 0 ? "scale-[1.01] shadow-2xl z-10 ring-2 ring-sunflower/40 flex" : "hidden md:flex scale-100 opacity-95"
                )}
              >
                {/* Project Image */}
                <Image
                  src={proj.heroImage}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay for Crisp Typography Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                {/* Card Content */}
                <div className="relative z-10 p-6 md:p-7 text-white">
                  <div className="text-sunflower font-mono text-2xl md:text-3xl font-light mb-1">
                    {proj.number}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-white font-normal mb-1.5 tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="font-sans text-stone-light/90 text-xs md:text-sm leading-relaxed mb-4 max-w-sm line-clamp-2">
                    {proj.shortDescription}
                  </p>
                  <Link
                    href={`/projects/${proj.slug}`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white px-5 py-2 rounded-full border border-white/50 bg-black/40 backdrop-blur-xs hover:bg-sunflower hover:text-brown hover:border-sunflower transition-all duration-300 group-hover:shadow-md group/btn"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <WavyDivider fill="#F7F2E8" position="bottom" className="mt-2" />
    </section>
  );
}
