"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Maximize, ChevronLeft, ChevronRight, LayoutGrid, SlidersHorizontal } from "lucide-react";
import { SpatialRenderPreview } from "@/types/project";
import { SpatialLightbox } from "@/components/project/SpatialLightbox";
import { playTap } from "@/lib/sound";
import { cn } from "@/lib/cn";

interface Project3DGalleryProps {
  gallery?: SpatialRenderPreview[];
  projectTitle: string;
}

export function Project3DGallery({
  gallery = [],
  projectTitle,
}: Project3DGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileActiveIdx, setMobileActiveIdx] = useState(0);
  const [mobileViewMode, setMobileViewMode] = useState<"slider" | "grid">("slider");

  const scrollerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasMoved = useRef(false);

  if (!gallery || gallery.length === 0) {
    return null;
  }

  const openLightbox = (index: number) => {
    playTap();
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  // Center-snapped tracking for mobile slider
  const handleScroll = () => {
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

    if (closestIdx !== mobileActiveIdx && closestIdx < gallery.length) {
      setMobileActiveIdx(closestIdx);
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
      setMobileActiveIdx(idx);
    }
  };

  const handlePrev = () => {
    if (mobileActiveIdx > 0) scrollToIndex(mobileActiveIdx - 1);
  };

  const handleNext = () => {
    if (mobileActiveIdx < gallery.length - 1) scrollToIndex(mobileActiveIdx + 1);
  };

  // Mouse Drag-to-Scroll handlers
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

  return (
    <>
      {/* Mobile Top Controls: Slider vs Grid Toggle & Counter */}
      <div className="flex md:hidden items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-1.5 text-xs font-mono text-brown">
          <span className="font-bold text-sunflower">0{mobileActiveIdx + 1}</span>
          <span className="text-stone-dark">/</span>
          <span>0{gallery.length} Views</span>
        </div>

        <button
          onClick={() => {
            playTap();
            setMobileViewMode(mobileViewMode === "slider" ? "grid" : "slider");
          }}
          className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-paper-card border border-stone/40 text-brown hover:bg-sunflower hover:text-charcoal transition-colors cursor-pointer"
        >
          {mobileViewMode === "slider" ? (
            <>
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </>
          ) : (
            <>
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Slide Reel</span>
            </>
          )}
        </button>
      </div>

      {/* =========================================================================
          MOBILE VIEW: SWIPABLE CENTER-SNAPPED REEL (or optional Grid)
          ========================================================================= */}
      <div className="md:hidden">
        {mobileViewMode === "slider" ? (
          <div className="relative w-full overflow-hidden">
            <div
              ref={scrollerRef}
              onScroll={handleScroll}
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
              {gallery.map((view, i) => {
                const isActive = i === mobileActiveIdx;
                return (
                  <div
                    key={i}
                    onClick={() => {
                      if (!hasMoved.current) {
                        openLightbox(i);
                      }
                    }}
                    className={cn(
                      "snap-center shrink-0 mx-2.5 transition-all duration-500 ease-out cursor-pointer",
                      "w-[82vw] max-w-[320px]",
                      isActive
                        ? "scale-100 opacity-100 z-10"
                        : "scale-[0.92] opacity-70 hover:opacity-90"
                    )}
                  >
                    <div
                      className={cn(
                        "relative aspect-[3.8/4.6] rounded-t-[100px] rounded-b-2xl overflow-hidden border transition-all duration-500 shadow-md",
                        isActive
                          ? "ring-2 ring-sunflower border-transparent shadow-xl card-sexy-glow"
                          : "border-stone/30"
                      )}
                    >
                      <Image
                        src={view.url}
                        alt={view.viewLabel}
                        fill
                        sizes="82vw"
                        className={
                          view.url.includes("cad") || view.url.includes("floor-plan")
                            ? "object-contain bg-white p-3"
                            : "object-cover"
                        }
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute bottom-3 inset-x-3 text-white">
                        <div className="font-display text-lg text-white font-medium line-clamp-1">
                          {view.viewLabel}
                        </div>
                        <div className="text-[11px] text-stone-light/90 line-clamp-1 mt-0.5">
                          {view.caption}
                        </div>
                      </div>

                      <div className="absolute top-4 right-4 p-2 rounded-full bg-paper/85 backdrop-blur-xs text-brown shadow-xs">
                        <Maximize className="w-3.5 h-3.5 text-sunflower-deep" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Controls: Prev/Next & Dots */}
            <div className="flex items-center justify-between px-4 mt-2">
              <button
                onClick={handlePrev}
                disabled={mobileActiveIdx === 0}
                aria-label="Previous view"
                className="w-8 h-8 rounded-full bg-paper border border-stone/40 flex items-center justify-center text-brown disabled:opacity-30 disabled:cursor-not-allowed shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToIndex(i)}
                    aria-label={`Go to view ${i + 1}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === mobileActiveIdx ? "w-6 bg-sunflower" : "w-1.5 bg-stone-dark/30"
                    )}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={mobileActiveIdx === gallery.length - 1}
                aria-label="Next view"
                className="w-8 h-8 rounded-full bg-charcoal text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed shadow-2xs"
              >
                <ChevronRight className="w-4 h-4 text-sunflower" />
              </button>
            </div>
          </div>
        ) : (
          /* Mobile Grid View Fallback */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gallery.map((view, i) => (
              <button
                key={i}
                type="button"
                onClick={() => openLightbox(i)}
                className="text-left space-y-2 group cursor-pointer focus:outline-none"
              >
                <div className="relative aspect-[3.8/4.6] rounded-t-[80px] rounded-b-2xl overflow-hidden shadow-sm border border-stone/30 group-hover:border-sunflower group-hover:shadow-md transition-all duration-300">
                  <Image
                    src={view.url}
                    alt={view.viewLabel}
                    fill
                    sizes="100vw"
                    className={
                      view.url.includes("cad") || view.url.includes("floor-plan")
                        ? "object-contain bg-white p-3"
                        : "object-cover"
                    }
                  />
                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-paper/85 text-brown shadow-xs">
                    <Maximize className="w-3.5 h-3.5 text-sunflower-deep" />
                  </div>
                </div>
                <div className="font-display text-lg text-brown">{view.viewLabel}</div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* =========================================================================
          DESKTOP VIEW: EXPANSIVE ARCHITECTURAL GRID (hidden md:grid)
          ========================================================================= */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {gallery.map((view, i) => (
          <button
            key={i}
            type="button"
            onClick={() => openLightbox(i)}
            className="text-left space-y-2.5 group cursor-pointer focus:outline-none"
          >
            <div className="relative aspect-[3.8/4.6] rounded-t-[90px] lg:rounded-t-[110px] rounded-b-2xl overflow-hidden shadow-sm border border-stone/30 group-hover:border-sunflower group-hover:shadow-md transition-all duration-300 bg-paper-card">
              <Image
                src={view.url}
                alt={view.viewLabel}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className={
                  view.url.includes("cad") || view.url.includes("floor-plan")
                    ? "object-contain bg-white p-3 group-hover:scale-105 transition-transform duration-500 ease-out"
                    : "object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                }
              />
              <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="p-2.5 rounded-full bg-paper/90 text-brown shadow-md flex items-center gap-1.5 text-xs font-mono font-semibold">
                  <Maximize className="w-3.5 h-3.5 text-sunflower-deep" />
                  <span>Inspect View</span>
                </span>
              </div>
            </div>
            <div className="font-display text-xl text-brown group-hover:text-brown-deep transition-colors">
              {view.viewLabel}
            </div>
            <div className="text-xs text-brown-soft line-clamp-2">
              {view.caption}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal with Touch Swipe */}
      <SpatialLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={gallery}
        currentIndex={currentIndex}
        onIndexChange={setCurrentIndex}
        projectTitle={projectTitle}
      />
    </>
  );
}
