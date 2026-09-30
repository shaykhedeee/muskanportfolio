"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, MapPin, Eye } from "lucide-react";
import { HOMEPAGE_FEATURED_PROJECTS } from "@/data/fixtures/projects";
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
  const featuredList = customProjects || HOMEPAGE_FEATURED_PROJECTS;
  const [internalIndex, setInternalIndex] = useState(0);
  const activeIndex = externalIndex !== undefined ? externalIndex : internalIndex;

  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Drag-to-scroll state for desktop trackpad/mouse
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasMoved = useRef(false);

  // Sync scroll position when activeIndex changes programmatically
  const scrollToCard = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const card = cardRefs.current[index];
    const scroller = scrollerRef.current;
    if (card && scroller) {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const scrollerCenter = scroller.offsetWidth / 2;
      scroller.scrollTo({
        left: cardCenter - scrollerCenter,
        behavior,
      });
    }
  }, []);

  const handleSelect = (idx: number) => {
    playTap();
    if (onSelectProject) {
      onSelectProject(idx);
    } else {
      setInternalIndex(idx);
    }
    scrollToCard(idx);
  };

  const handlePrev = () => {
    playTap();
    const nextIdx = Math.max(0, activeIndex - 1);
    handleSelect(nextIdx);
  };

  const handleNext = () => {
    playTap();
    const nextIdx = Math.min(featuredList.length - 1, activeIndex + 1);
    handleSelect(nextIdx);
  };

  // Detect which card is currently centered while scrolling
  const handleScroll = useCallback(() => {
    if (!scrollerRef.current) return;
    const scroller = scrollerRef.current;
    const centerPoint = scroller.scrollLeft + scroller.offsetWidth / 2;

    let closestIdx = activeIndex;
    let closestDist = Infinity;

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(centerPoint - cardCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = idx;
      }
    });

    if (closestIdx !== activeIndex && closestDist < 180) {
      if (onSelectProject) {
        onSelectProject(closestIdx);
      } else {
        setInternalIndex(closestIdx);
      }
    }
  }, [activeIndex, onSelectProject]);

  // Initial center alignment
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToCard(activeIndex, "auto");
    }, 100);
    return () => clearTimeout(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  // Mouse Drag Handlers
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollerRef.current) return;
    isDragging.current = true;
    hasMoved.current = false;
    startX.current = e.pageX - scrollerRef.current.offsetLeft;
    scrollLeft.current = scrollerRef.current.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollerRef.current) return;
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 5) {
      hasMoved.current = true;
    }
    scrollerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  return (
    <section
      id="projects"
      data-section="1"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Featured Projects Swiper"
      className="relative w-full bg-paper flex flex-col justify-between py-12 md:py-16 lg:py-20 overflow-hidden focus:outline-none select-none content-visibility-auto"
      style={{ containIntrinsicSize: "1px 750px" }}
    >
      {/* Subtle CAD Elevation Background Watermark */}
      <ArchitecturalFloorPlanWatermark
        variant="elevation"
        opacity="opacity-[0.035]"
        className="pointer-events-none"
      />

      <div className="max-w-master mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-16 mb-8 sm:mb-10">
        {/* Section Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-5 border-b border-stone/35 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sunflower animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.22em] font-mono text-olive font-bold">
                CURATED ARCHITECTURAL WORKS · SWIPE TO EXPLORE
              </span>
            </div>
            <AnimatedHeading
              as="h2"
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-brown font-normal tracking-tight"
            >
              Featured Projects
            </AnimatedHeading>
          </div>

          {/* Top Controls: Active Index Pill, Arrow Chevrons, View All Link */}
          <div className="flex items-center gap-4 sm:gap-6 self-start sm:self-end">
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-brown bg-paper-card px-3.5 py-1.5 rounded-full border border-stone/40 shadow-xs">
              <span className="text-sunflower font-bold">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-stone-dark">/</span>
              <span className="text-brown-soft">
                {String(featuredList.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label="Previous project slide"
                className="w-10 h-10 rounded-full bg-paper-card border border-stone/50 text-brown flex items-center justify-center hover:bg-white hover:border-sunflower hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 text-brown" />
              </button>
              <button
                onClick={handleNext}
                disabled={activeIndex === featuredList.length - 1}
                aria-label="Next project slide"
                className="w-10 h-10 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-brown hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 text-sunflower" />
              </button>
            </div>

            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-mono text-brown hover:text-charcoal font-semibold transition-colors"
            >
              <span>All 18 Works</span>
              <ArrowRight className="w-3.5 h-3.5 text-sunflower" />
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================================
          CENTER-ALIGNED SWIPABLE PROJECT CAROUSEL TRACK
          ========================================================================= */}
      <div className="relative w-full overflow-hidden">
        
        {/* Floating Side Ambient Arrows for Large Screens */}
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          aria-label="Previous slide"
          className="hidden xl:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-paper/85 backdrop-blur-md border border-stone/40 text-brown items-center justify-center shadow-lg hover:bg-sunflower hover:text-brown transition-all duration-300 disabled:opacity-0 pointer-events-auto cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          disabled={activeIndex === featuredList.length - 1}
          aria-label="Next slide"
          className="hidden xl:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-paper/85 backdrop-blur-md border border-stone/40 text-brown items-center justify-center shadow-lg hover:bg-sunflower hover:text-brown transition-all duration-300 disabled:opacity-0 pointer-events-auto cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Scroll Track with CSS Scroll-Snap & Touch Optimization */}
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUpOrLeave}
          onMouseLeave={onMouseUpOrLeave}
          className="w-full flex items-center overflow-x-auto scroll-smooth snap-x snap-mandatory py-6 cursor-grab active:cursor-grabbing no-scrollbar touch-pan-y carousel-center-padding"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {featuredList.map((proj, idx) => {
            const isActive = idx === activeIndex;

            return (
              <div
                key={proj.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                onClick={() => {
                  if (!hasMoved.current) {
                    handleSelect(idx);
                  }
                }}
                className={cn(
                  "snap-center shrink-0 mx-2.5 sm:mx-3.5 md:mx-4.5 transition-all duration-700 ease-out cursor-pointer",
                  "w-[82vw] max-w-[320px] sm:max-w-[390px] md:max-w-[450px] lg:max-w-[480px]",
                  isActive
                    ? "scale-100 opacity-100 z-20"
                    : "scale-[0.91] sm:scale-[0.93] opacity-60 hover:opacity-85 hover:scale-[0.95] z-10"
                )}
              >
                {/* Architectural Card Shell with Roman Arch Silhouette */}
                <div
                  className={cn(
                    "group relative aspect-[3.5/4.9] sm:aspect-[3.7/4.9] rounded-t-[140px] sm:rounded-t-[180px] md:rounded-t-[220px] rounded-b-3xl overflow-hidden shadow-2xl transition-all duration-700",
                    isActive
                      ? "ring-2 ring-sunflower/90 card-sexy-glow shadow-2xl"
                      : "border border-stone/30 shadow-lg"
                  )}
                >
                  {/* High Resolution Architectural Visual */}
                  <Image
                    src={proj.heroImage}
                    alt={proj.title}
                    fill
                    priority={idx < 2}
                    sizes="(max-width: 640px) 84vw, (max-width: 1024px) 50vw, 480px"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  {/* Deep Cinematic Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-transparent pointer-events-none" />

                  {/* Subtle Inner Glow on Active Card */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-t-[140px] sm:rounded-t-[180px] md:rounded-t-[220px] rounded-b-3xl border border-sunflower/40 pointer-events-none" />
                  )}

                  {/* Top Floating Glassmorphism Tag */}
                  <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-charcoal/70 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono tracking-widest uppercase shadow-sm">
                      <Sparkles className="w-3 h-3 text-sunflower" />
                      <span>{proj.number} · {proj.category}</span>
                    </span>

                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-paper/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-sans font-medium">
                      <MapPin className="w-3 h-3 text-sunflower" />
                      <span>{proj.location}</span>
                    </span>
                  </div>

                  {/* Bottom Luxury Content Block */}
                  <div className="absolute bottom-0 inset-x-0 z-10 p-6 sm:p-7 md:p-8 text-white flex flex-col justify-end space-y-3">
                    <div>
                      <div className="text-sunflower font-mono text-2xl sm:text-3xl font-light mb-1">
                        {proj.number}
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-white font-normal tracking-tight leading-snug">
                        {proj.title}
                      </h3>
                      <p className="font-sans text-stone-light/90 text-xs sm:text-sm leading-relaxed mt-1.5 line-clamp-2 max-w-md">
                        {proj.shortDescription || proj.headline}
                      </p>
                    </div>

                    {/* Spatial Scope Tag */}
                    {proj.details?.area && (
                      <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-wider text-sunflower uppercase">
                        <span>{proj.details.area}</span>
                        <span className="text-stone-light/40">✦</span>
                        <span>{proj.details.timeline || "Turnkey Joinery"}</span>
                      </div>
                    )}

                    {/* Action Button */}
                    <div className="pt-2">
                      <Link
                        href={`/projects/${proj.slug}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          playTap();
                        }}
                        className={cn(
                          "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-md group/btn",
                          isActive
                            ? "bg-sunflower text-charcoal hover:bg-white hover:text-brown hover:shadow-lg"
                            : "bg-white/20 text-white hover:bg-sunflower hover:text-charcoal backdrop-blur-xs border border-white/30"
                        )}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Explore Spatial Study</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          PAGINATION BAR & PROGRESS DOTS
          ========================================================================= */}
      <div className="max-w-master mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-16 mt-6 sm:mt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Subtle Swipe Guidance */}
          <div className="text-xs font-mono text-brown-soft/80 flex items-center gap-2">
            <span className="inline-block animate-pulse">←</span>
            <span>Swipe or click arrows to explore</span>
            <span className="inline-block animate-pulse">→</span>
          </div>

          {/* Centered Pagination Indicator Dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Project slide navigation">
            {featuredList.map((proj, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={proj.id}
                  role="tab"
                  aria-selected={isSelected}
                  aria-label={`Slide ${idx + 1}: ${proj.title}`}
                  onClick={() => handleSelect(idx)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-500 cursor-pointer focus:outline-none",
                    isSelected
                      ? "w-8 bg-sunflower shadow-xs"
                      : "w-2.5 bg-stone-dark/25 hover:bg-stone-dark/50"
                  )}
                />
              );
            })}
          </div>

          {/* Mobile All Projects Link */}
          <Link
            href="/projects"
            className="md:hidden text-xs uppercase tracking-widest font-mono text-brown hover:text-charcoal font-semibold flex items-center gap-1.5 transition-colors"
          >
            <span>View All 18 Projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-sunflower" />
          </Link>
        </div>
      </div>

      <WavyDivider fill="#F7F2E8" position="bottom" className="mt-8" />
    </section>
  );
}
