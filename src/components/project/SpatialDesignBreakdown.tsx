"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Leaf,
  Maximize2,
  Palette,
  Lamp,
  Layers,
  Sparkles,
  Eye,
  Info,
  ChevronRight,
  Maximize,
} from "lucide-react";
import { SpatialStudy, SpatialHotspot, SpatialHighlight } from "@/types/project";
import { SpatialFloorPlan } from "./SpatialFloorPlan";
import { SpatialLightbox } from "./SpatialLightbox";

interface SpatialDesignBreakdownProps {
  study: SpatialStudy;
  projectTitle: string;
}

export const SpatialDesignBreakdown: React.FC<SpatialDesignBreakdownProps> = ({
  study,
  projectTitle,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<SpatialHotspot | null>(
    study.hotspots[0] || null
  );
  const [hoveredHighlight, setHoveredHighlight] = useState<SpatialHighlight | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Icon mapper helper
  const renderHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case "Leaf":
        return <Leaf className="w-4 h-4" />;
      case "Maximize2":
        return <Maximize2 className="w-4 h-4" />;
      case "Palette":
        return <Palette className="w-4 h-4" />;
      case "Lamp":
        return <Lamp className="w-4 h-4" />;
      case "Cabinet":
      case "Layers":
        return <Layers className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="spatial-breakdown"
      aria-label="Spatial Design Breakdown"
      className="relative w-full bg-paper py-16 lg:py-20 border-y border-stone/30 overflow-hidden"
    >
      <div className="max-w-master mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-between">
        
        {/* =========================================================
            1. SECTION HEADER: Inside the Space · From plan to experience
           ========================================================= */}
        <div className="border-b border-stone/40 pb-6 mb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-[11px] uppercase tracking-[0.25em] font-sans font-bold text-brown px-2.5 py-1 rounded bg-sunflower/20 border border-sunflower/40">
                SPATIAL DESIGN BREAKDOWN
              </span>
              <span className="text-xs font-mono text-brown-soft">
                {study.roomName} Study
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brown font-normal leading-[1.05]">
                Inside the Space
              </h2>
              <span className="font-display italic text-xl sm:text-2xl text-brown-soft">
                {study.subtitle || "From plan to experience."}
              </span>
            </div>

            {/* Design Intention Quote */}
            <p className="font-sans text-brown-soft text-sm md:text-base max-w-2xl leading-relaxed pt-1">
              &ldquo;{study.designIntention}&rdquo;
            </p>
          </div>

          {/* Editorial Process Navigation Pills */}
          <div className="flex items-center gap-2 text-[11px] font-sans font-semibold tracking-wider text-brown-soft/80 bg-paper-card px-4 py-2.5 rounded-full border border-stone/30 shrink-0 select-none shadow-xs">
            <span className="text-brown">PLAN</span>
            <span className="text-sunflower font-bold">→</span>
            <span className="text-brown">DESIGN LOGIC</span>
            <span className="text-sunflower font-bold">→</span>
            <span className="text-brown">MATERIALS</span>
            <span className="text-sunflower font-bold">→</span>
            <span className="text-brown">FINAL SPACE</span>
          </div>
        </div>

        {/* =========================================================
            2. MAIN COMPOSITION: Floor Plan (22%) | Axonometric (54%) | Highlights (20%)
           ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto">
          
          {/* LEFT: 2D Floor Plan with room highlight & synched pins */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center order-2 lg:order-1">
            <SpatialFloorPlan
              activeHotspot={activeHotspot}
              onSelectHotspot={(hs) => setActiveHotspot(hs)}
              hotspots={study.hotspots}
              title={study.floorPlanTitle || "Furniture Layout"}
              floorPlanImage={study.floorPlanImage}
            />
          </div>

          {/* CENTER: Architectural Axonometric Visual Hero (54%) */}
          <div className="lg:col-span-6 flex flex-col items-center order-1 lg:order-2">
            <div className="relative w-full aspect-[4/4.4] max-w-[620px] rounded-3xl bg-paper-light border-2 border-stone/30 shadow-xl overflow-hidden group">
              
              {/* Axonometric Architectural Cutaway Model */}
              <div className="relative w-full h-full">
                <Image
                  src={study.axonometricImage}
                  alt={`${study.roomName} Architectural Axonometric Model`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  priority
                />
              </div>

              {/* Soft Gradient Overlay at edges */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-charcoal/20 via-transparent to-paper/20" />

              {/* Interactive Hotspots 01-05 */}
              {study.hotspots.map((hs) => {
                const isActive = activeHotspot?.id === hs.id;

                return (
                  <div
                    key={`axon-hs-${hs.id}`}
                    style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    {/* Pulsing Ripple if active */}
                    {isActive && (
                      <span className="absolute -inset-2 rounded-full bg-sunflower/40 animate-ping pointer-events-none" />
                    )}

                    {/* Hotspot Button */}
                    <button
                      type="button"
                      aria-label={`Hotspot ${hs.id}: ${hs.title}`}
                      aria-expanded={isActive}
                      onClick={() => setActiveHotspot(hs)}
                      onMouseEnter={() => setActiveHotspot(hs)}
                      className={`relative w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 shadow-md ${
                        isActive
                          ? "bg-sunflower text-brown scale-125 ring-4 ring-sunflower/40 shadow-lg"
                          : "bg-paper text-brown border border-stone/50 hover:bg-sunflower hover:scale-110"
                      }`}
                    >
                      {hs.id}
                    </button>
                  </div>
                );
              })}

              {/* FLOATING ANNOTATION CARD (Desktop Overlaid inside model) */}
              {activeHotspot && (
                <div className="hidden sm:flex absolute bottom-4 left-4 right-4 z-30 bg-paper/95 backdrop-blur-md p-4 rounded-2xl border border-stone/40 shadow-lg flex-col gap-1 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-sunflower text-brown font-mono font-bold text-[10px] flex items-center justify-center">
                        {activeHotspot.id}
                      </span>
                      <h4 className="font-display text-lg text-brown font-normal">
                        {activeHotspot.title}
                      </h4>
                    </div>
                    {activeHotspot.category && (
                      <span className="text-[9px] uppercase font-mono tracking-widest text-olive bg-olive/10 px-2 py-0.5 rounded">
                        {activeHotspot.category}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-sans text-brown-soft leading-relaxed">
                    {activeHotspot.description}
                  </p>
                </div>
              )}
            </div>

            {/* Mobile / Small Screen Active Hotspot Card (Below model) */}
            {activeHotspot && (
              <div className="sm:hidden w-full mt-3 bg-paper-card p-4 rounded-2xl border border-stone/30 shadow-xs flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-sunflower text-brown font-mono font-bold text-[10px] flex items-center justify-center">
                      {activeHotspot.id}
                    </span>
                    <h4 className="font-display text-base text-brown font-normal">
                      {activeHotspot.title}
                    </h4>
                  </div>
                  {activeHotspot.category && (
                    <span className="text-[9px] uppercase font-mono tracking-widest text-olive bg-olive/10 px-2 py-0.5 rounded">
                      {activeHotspot.category}
                    </span>
                  )}
                </div>
                <p className="text-xs font-sans text-brown-soft leading-relaxed">
                  {activeHotspot.description}
                </p>
              </div>
            )}
          </div>

          {/* RIGHT: Design Highlights Rail (20%) */}
          <div className="lg:col-span-3 flex flex-col gap-2.5 order-3">
            <div className="text-[10px] uppercase font-mono tracking-widest text-brown-soft/80 mb-1 px-1">
              DESIGN HIGHLIGHTS
            </div>

            {study.highlights.map((hl) => {
              const isHovered = hoveredHighlight?.id === hl.id;

              return (
                <div
                  key={hl.id}
                  onMouseEnter={() => setHoveredHighlight(hl)}
                  onMouseLeave={() => setHoveredHighlight(null)}
                  className={`p-3 rounded-xl border transition-all duration-300 flex items-start gap-3 cursor-default ${
                    isHovered
                      ? "bg-paper-card border-sunflower shadow-sm translate-x-1"
                      : "bg-paper border-stone/25 hover:border-stone/40"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      isHovered
                        ? "bg-sunflower text-brown"
                        : "bg-paper-card text-brown border border-stone/30"
                    }`}
                  >
                    {renderHighlightIcon(hl.iconName)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-sans font-bold text-brown">
                      {hl.label}
                    </span>
                    <span className="text-[11px] font-sans text-brown-soft leading-tight mt-0.5">
                      {hl.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            3. LOWER STRIP: Material Palette & Mini Final Render Strip
           ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-8 mt-8 border-t border-stone/30">
          
          {/* Material Swatches (5-6 physical tactile chips) */}
          <div className="lg:col-span-6 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono tracking-widest text-brown-soft">
                MATERIAL PALETTE (5 TEXTURES)
              </span>
              <span className="text-[10px] font-sans text-brown-soft/70">
                Hover for specification
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {study.materials.map((mat) => (
                <div
                  key={mat.name}
                  className="group/mat relative flex items-center gap-2 p-1.5 pr-3 rounded-full bg-paper-card border border-stone/30 hover:border-sunflower transition-all duration-200 cursor-default shadow-xs"
                >
                  {/* Swatch circular preview */}
                  <div
                    style={{ backgroundColor: mat.colorHex || "#EEE6D8" }}
                    className="relative w-7 h-7 rounded-full overflow-hidden border border-stone/40 shadow-inner shrink-0"
                  >
                    {mat.textureUrl && (
                      <Image
                        src={mat.textureUrl}
                        alt={mat.name}
                        fill
                        className="object-cover opacity-90"
                      />
                    )}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs font-sans font-semibold text-brown group-hover/mat:text-brown-deep leading-none">
                      {mat.name}
                    </span>
                    {mat.finish && (
                      <span className="text-[9px] font-mono text-brown-soft/75 leading-none mt-0.5">
                        {mat.finish}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mini Final-Render Preview Strip (3-4 clickable thumbnails) */}
          <div className="lg:col-span-6 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono tracking-widest text-brown-soft">
                FINAL SPACE PREVIEW ({study.gallery.length} RENDERS)
              </span>
              <span className="text-[10px] font-sans text-olive font-medium flex items-center gap-1">
                <Eye className="w-3 h-3" />
                Click to expand
              </span>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {study.gallery.map((item, idx) => (
                <button
                  key={`thumb-${idx}`}
                  type="button"
                  onClick={() => openLightbox(idx)}
                  className="group/thumb relative aspect-[4/3] rounded-xl overflow-hidden border border-stone/30 hover:border-sunflower hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sunflower"
                >
                  <Image
                    src={item.url}
                    alt={item.caption || item.viewLabel}
                    fill
                    sizes="(max-width: 768px) 25vw, 150px"
                    className="object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize className="w-4 h-4 text-paper" />
                  </div>
                  <div className="absolute bottom-1 left-1.5 right-1.5 text-[8px] font-mono uppercase tracking-wider text-paper font-semibold drop-shadow-md truncate">
                    {item.viewLabel}
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Render Lightbox Modal */}
      <SpatialLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={study.gallery}
        currentIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
        projectTitle={`${projectTitle} — ${study.roomName}`}
      />
    </section>
  );
};
