"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ZoomIn, Sparkles, ChevronLeft, ChevronRight, Layers, Fingerprint } from "lucide-react";
import { cn } from "@/lib/cn";
import { PaperNote } from "@/components/ui/PaperNote";
import { MaterialSpecModal, MaterialSpecItem } from "@/components/projects/MaterialSpecModal";
import {
  THE_CALM_HOUSE_MATERIALS,
  MR_VIVEK_RESIDENCE_MATERIALS,
  KORAMANGALA_VILLA_MATERIALS,
  THE_MODERNIST_3BHK_MATERIALS,
  URBAN_SCANDI_3BHK_MATERIALS,
  HITESH_RIA_RESIDENCE_MATERIALS,
  AKANCHHA_HARSH_RESIDENCE_MATERIALS,
  TERRACOTTA_VILLA_MATERIALS,
  OLIVE_AND_OAK_MATERIALS,
  EKKAT_BOUTIQUE_MATERIALS,
} from "@/data/fixtures/project-materials";
import { playTap } from "@/lib/sound";

interface ProjectMoodboardInteractiveProps {
  slug: string;
  projectMaterials?: MaterialSpecItem[];
}

export function ProjectMoodboardInteractive({
  slug,
  projectMaterials,
}: ProjectMoodboardInteractiveProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  const scrollerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasMoved = useRef(false);

  const materials: MaterialSpecItem[] =
    projectMaterials && projectMaterials.length > 0
      ? projectMaterials
      : slug === "mr-vivek-residence"
      ? MR_VIVEK_RESIDENCE_MATERIALS
      : slug === "the-calm-house"
      ? THE_CALM_HOUSE_MATERIALS
      : slug === "koramangala-luxury-villa"
      ? KORAMANGALA_VILLA_MATERIALS
      : slug === "the-modernist-3bhk"
      ? THE_MODERNIST_3BHK_MATERIALS
      : slug === "urban-scandi-3bhk"
      ? URBAN_SCANDI_3BHK_MATERIALS
      : slug === "the-hitesh-ria-residence"
      ? HITESH_RIA_RESIDENCE_MATERIALS
      : slug === "akanchha-harsh-residence"
      ? AKANCHHA_HARSH_RESIDENCE_MATERIALS
      : slug === "terracotta-villa" || slug === "5-bhk-luxury-villa"
      ? TERRACOTTA_VILLA_MATERIALS
      : slug === "olive-and-oak"
      ? OLIVE_AND_OAK_MATERIALS
      : slug === "ekkat-boutique"
      ? EKKAT_BOUTIQUE_MATERIALS
      : THE_CALM_HOUSE_MATERIALS;

  const openInspector = (index: number) => {
    playTap();
    setSelectedIdx(index);
    setModalOpen(true);
  };

  // Mobile scroll tracking for center-snapped card index
  const handleMobileScroll = () => {
    if (!scrollerRef.current) return;
    const container = scrollerRef.current;
    const center = container.scrollLeft + container.clientWidth / 2;
    const cards = container.children;

    let closestIdx = 0;
    let minDistance = Infinity;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(center - cardCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = i;
      }
    }

    if (closestIdx !== activeMobileIdx && closestIdx < materials.length) {
      setActiveMobileIdx(closestIdx);
    }
  };

  const scrollToIndex = (idx: number) => {
    if (!scrollerRef.current) return;
    const container = scrollerRef.current;
    const card = container.children[idx] as HTMLElement;
    if (card) {
      playTap();
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const targetScroll = cardCenter - container.clientWidth / 2;
      container.scrollTo({ left: targetScroll, behavior: "smooth" });
      setActiveMobileIdx(idx);
    }
  };

  const handlePrev = () => {
    if (activeMobileIdx > 0) scrollToIndex(activeMobileIdx - 1);
  };

  const handleNext = () => {
    if (activeMobileIdx < materials.length - 1) scrollToIndex(activeMobileIdx + 1);
  };

  // Mouse Drag-to-Scroll handlers for desktop track testing
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollerRef.current) return;
    isDragging.current = true;
    hasMoved.current = false;
    startX.current = e.pageX - scrollerRef.current.offsetLeft;
    scrollLeft.current = scrollerRef.current.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 5) hasMoved.current = true;
    scrollerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  // Primary Hero Swatch (First item in materials)
  const heroMaterial = materials[0];

  return (
    <>
      {/* Interactive Helper Banner */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-mono text-olive font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-sunflower" />
          <span>Interactive Material Palette · {materials.length} Tactile Architectural Finishes</span>
        </div>
        <button
          onClick={() => openInspector(0)}
          className="self-start sm:self-auto text-xs font-mono px-3.5 py-1.5 rounded-full bg-paper-card border border-stone/40 hover:bg-sunflower hover:text-charcoal hover:border-sunflower text-brown transition-all duration-300 flex items-center gap-1.5 shadow-2xs cursor-pointer active:scale-95"
        >
          <ZoomIn className="w-3.5 h-3.5 text-sunflower-deep" />
          <span>Open Full Spec Sheet</span>
        </button>
      </div>

      {/* =========================================================================
          MOBILE VIEW: CENTERED SWIPABLE MATERIAL FLATLAY CAROUSEL (md:hidden)
          ========================================================================= */}
      <div className="md:hidden relative w-full overflow-hidden">
        {/* Subtle Swipe Guidance Banner */}
        <div className="flex items-center justify-between px-2 mb-2 text-[11px] font-mono text-brown-soft">
          <div className="flex items-center gap-1.5">
            <Fingerprint className="w-3.5 h-3.5 text-sunflower" />
            <span>Slide with finger to inspect</span>
          </div>
          <span className="font-bold text-brown">
            0{activeMobileIdx + 1} / 0{materials.length}
          </span>
        </div>

        {/* Horizontal Center-Snapped Scroll Track */}
        <div
          ref={scrollerRef}
          onScroll={handleMobileScroll}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUpOrLeave}
          onMouseLeave={onMouseUpOrLeave}
          className="w-full flex items-center overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 no-scrollbar touch-pan-y carousel-center-padding"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {materials.map((mat, idx) => {
            const isActive = idx === activeMobileIdx;
            return (
              <div
                key={mat.id || idx}
                onClick={() => {
                  if (!hasMoved.current) {
                    openInspector(idx);
                  }
                }}
                className={cn(
                  "snap-center shrink-0 mx-2.5 transition-all duration-500 ease-out cursor-pointer",
                  "w-[84vw] max-w-[320px]",
                  isActive
                    ? "scale-100 opacity-100 z-10"
                    : "scale-[0.92] opacity-70 hover:opacity-90"
                )}
              >
                <div
                  className={cn(
                    "relative bg-paper-card rounded-2xl overflow-hidden border transition-all duration-500 shadow-md",
                    isActive
                      ? "ring-2 ring-sunflower border-transparent shadow-xl card-sexy-glow"
                      : "border-stone/30"
                  )}
                >
                  {/* Texture Visual */}
                  <div className="relative aspect-[4/3] w-full bg-stone/20 overflow-hidden">
                    <Image
                      src={mat.imageSrc}
                      alt={mat.name}
                      fill
                      sizes="84vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Top Spec Code Pill */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-charcoal/80 backdrop-blur-md text-white border border-white/20 text-[10px] font-mono font-bold tracking-wider">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: mat.colorHex }} />
                      <span>{mat.code}</span>
                    </div>

                    {/* Macro Tap Hint */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-paper/90 backdrop-blur-md text-brown text-[10px] font-mono font-semibold shadow-xs">
                      <ZoomIn className="w-3 h-3 text-sunflower-deep" />
                      <span>Tap Spec</span>
                    </div>
                  </div>

                  {/* Card Description Block */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-display text-base text-brown font-medium line-clamp-1">
                        {mat.name}
                      </h4>
                    </div>

                    <p className="text-xs text-brown-soft line-clamp-2 leading-relaxed">
                      {mat.description}
                    </p>

                    <div className="pt-2 border-t border-stone/20 flex items-center justify-between text-[10px] font-mono text-olive">
                      <span className="truncate max-w-[170px]">{mat.substrate}</span>
                      <span className="text-sunflower font-bold">INSPECT →</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Indicator Dots & Arrows */}
        <div className="flex items-center justify-between px-4 mt-2">
          <button
            onClick={handlePrev}
            disabled={activeMobileIdx === 0}
            aria-label="Previous material"
            className="w-8 h-8 rounded-full bg-paper border border-stone/40 flex items-center justify-center text-brown disabled:opacity-30 disabled:cursor-not-allowed shadow-2xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {materials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to material ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === activeMobileIdx ? "w-6 bg-sunflower" : "w-1.5 bg-stone-dark/30"
                )}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={activeMobileIdx === materials.length - 1}
            aria-label="Next material"
            className="w-8 h-8 rounded-full bg-charcoal text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed shadow-2xs"
          >
            <ChevronRight className="w-4 h-4 text-sunflower" />
          </button>
        </div>
      </div>

      {/* =========================================================================
          DESKTOP VIEW: ARCHITECTURAL FLATLAY STUDIO (hidden md:block)
          ========================================================================= */}
      <div className="hidden md:block space-y-6">
        <div className="grid grid-cols-12 gap-5 items-stretch">
          {/* Left Column: Macro Swatch 1 & 2 */}
          <div className="col-span-3 flex flex-col justify-between gap-5">
            {materials.slice(0, 2).map((mat, idx) => (
              <button
                key={mat.id || idx}
                onClick={() => openInspector(idx)}
                className="w-full text-left relative rounded-2xl overflow-hidden border border-stone/30 group bg-paper-card cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex-1 flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone/20">
                  <Image
                    src={mat.imageSrc}
                    alt={mat.name}
                    fill
                    sizes="25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded bg-charcoal/80 text-white text-[9px] font-mono font-bold">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: mat.colorHex }} />
                    <span>{mat.code}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[10px] font-mono font-bold text-white bg-charcoal/80 px-2.5 py-1 rounded-md flex items-center gap-1">
                      <ZoomIn className="w-3 h-3 text-sunflower" /> Inspect Spec
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-paper-card flex-1 flex flex-col justify-center">
                  <span className="text-xs font-display text-brown font-medium line-clamp-1 block">
                    {mat.name}
                  </span>
                  <span className="text-[10px] font-mono text-brown-soft line-clamp-1">
                    {mat.application}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Center Column: Hero Architectural Material Showcase */}
          <div className="col-span-6 relative rounded-3xl overflow-hidden border-2 border-stone/30 shadow-md group bg-paper-card min-h-[380px] flex flex-col">
            <button
              onClick={() => openInspector(0)}
              className="w-full h-full relative cursor-pointer text-left block"
            >
              <Image
                src={heroMaterial.imageSrc}
                alt={heroMaterial.name}
                fill
                sizes="50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Top Inspection Badge */}
              <div className="absolute top-4 right-4 bg-charcoal/80 backdrop-blur-md text-white text-xs font-mono px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-md">
                <ZoomIn className="w-3.5 h-3.5 text-sunflower" />
                <span>Macro Texture Inspection</span>
              </div>

              {/* Decorative Authentic PaperNote */}
              <div className="absolute top-5 left-5 pointer-events-none">
                <PaperNote rotate="left" className="text-xs sm:text-sm font-handwriting shadow-md">
                  Tactile Harmony &amp; Architectural Balance ♡
                </PaperNote>
              </div>

              {/* Bottom Feature Metadata Box */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-2 pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-sunflower text-charcoal text-[10px] font-mono font-bold uppercase tracking-wider">
                    Hero Substrate · {heroMaterial.code}
                  </span>
                  <span className="text-stone-light/60 text-xs">✦</span>
                  <span className="text-xs font-mono text-stone-light">{heroMaterial.substrate}</span>
                </div>
                <h3 className="font-display text-2xl text-white font-normal leading-snug">
                  {heroMaterial.name}
                </h3>
                <p className="text-xs text-stone-light/90 max-w-lg line-clamp-2 font-sans">
                  {heroMaterial.description}
                </p>
              </div>
            </button>
          </div>

          {/* Right Column: Palette Tones & Swatches 3 & 4 */}
          <div className="col-span-3 flex flex-col justify-between gap-5">
            {/* Color Swatch Tone Strip */}
            <div className="p-4 bg-paper-card rounded-2xl border border-stone/30 shadow-sm flex flex-col items-center justify-center gap-2.5">
              <span className="text-[10px] uppercase font-mono tracking-widest text-brown-soft font-semibold text-center">
                Material Color Tones
              </span>
              <div className="flex items-center gap-2 flex-wrap justify-center">
                {materials.map((mat, idx) => (
                  <button
                    key={idx}
                    onClick={() => openInspector(idx)}
                    className="w-8 h-8 rounded-full border border-stone/40 shadow-inner hover:scale-125 transition-transform cursor-pointer relative group/dot"
                    style={{ backgroundColor: mat.colorHex }}
                    title={mat.name}
                  >
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-mono bg-charcoal text-white px-2 py-0.5 rounded opacity-0 group-hover/dot:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-md">
                      {mat.code}: {mat.name}
                    </span>
                  </button>
                ))}
              </div>
              <span className="text-[9px] font-mono text-olive text-center">
                Click dot to inspect finish
              </span>
            </div>

            {/* Remaining Substrate Samples */}
            {materials.length > 2 && (
              <button
                onClick={() => openInspector(2)}
                className="w-full text-left relative rounded-2xl overflow-hidden border border-stone/30 group bg-paper-card cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex-1 flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone/20">
                  <Image
                    src={materials[2].imageSrc}
                    alt={materials[2].name}
                    fill
                    sizes="25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded bg-charcoal/80 text-white text-[9px] font-mono font-bold">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: materials[2].colorHex }} />
                    <span>{materials[2].code}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[10px] font-mono font-bold text-white bg-charcoal/80 px-2.5 py-1 rounded-md flex items-center gap-1">
                      <ZoomIn className="w-3 h-3 text-sunflower" /> Inspect Spec
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-paper-card flex-1 flex flex-col justify-center">
                  <span className="text-xs font-display text-brown font-medium line-clamp-1 block">
                    {materials[2].name}
                  </span>
                  <span className="text-[10px] font-mono text-brown-soft line-clamp-1">
                    {materials[2].application}
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Bottom Technical Specification Footer */}
        <div className="p-4 rounded-2xl bg-paper-card border border-stone/30 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-brown-soft">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-bold text-brown">
              <Layers className="w-3.5 h-3.5 text-sunflower" />
              <span>Architectural Substrates:</span>
            </span>
            <span>HDHMR Moisture-Resistant Core</span>
            <span className="text-stone/40">✦</span>
            <span>Natural Hand-Rubbed PU (5% Sheen)</span>
            <span className="text-stone/40">✦</span>
            <span>Toughened Architectural Glass</span>
          </div>
          <div className="text-[11px] text-olive font-semibold">
            System 32 Modular Standard · Verified Buildability
          </div>
        </div>
      </div>

      {/* Modal Inspector Component */}
      <MaterialSpecModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        materials={materials}
        initialIndex={selectedIdx}
      />
    </>
  );
}
