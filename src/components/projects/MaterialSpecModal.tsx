"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { playTap, playChime } from "@/lib/sound";

export interface MaterialSpecItem {
  id: string;
  code: string;
  name: string;
  colorHex: string;
  imageSrc: string;
  application: string;
  substrate: string;
  finish: string;
  edgeBanding: string;
  hardware: string;
  lightPairing: string;
  description: string;
  dimensions?: string;
}

interface MaterialSpecModalProps {
  isOpen: boolean;
  onClose: () => void;
  materials: MaterialSpecItem[];
  initialIndex?: number;
}

export function MaterialSpecModal({
  isOpen,
  onClose,
  materials,
  initialIndex = 0,
}: MaterialSpecModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [loupeActive, setLoupeActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, relX: 50, relY: 50 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        playTap();
        onClose();
      } else if (e.key === "ArrowRight") {
        playTap();
        setCurrentIndex((prev) => (prev + 1) % materials.length);
      } else if (e.key === "ArrowLeft") {
        playTap();
        setCurrentIndex((prev) => (prev - 1 + materials.length) % materials.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, materials.length, onClose]);

  if (!isOpen || materials.length === 0) return null;

  const current = materials[currentIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const relX = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const relY = Math.max(0, Math.min(100, (y / rect.height) * 100));

    setMousePos({ x, y, relX, relY });
  };

  const handleSelect = (index: number) => {
    playTap();
    setCurrentIndex(index);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-charcoal/80 backdrop-blur-md animate-fade-in"
      onClick={() => {
        playTap();
        onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Material Specification Inspector"
    >
      <div
        className="relative w-full max-w-5xl bg-paper rounded-3xl border border-stone/30 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-paper-card border-b border-stone/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: current.colorHex }} />
            <span className="font-mono text-xs text-olive font-bold uppercase tracking-widest">
              Tactile Material Spec Sheet
            </span>
            <span className="text-stone-dark font-mono text-xs">/</span>
            <span className="font-mono text-xs text-brown-soft font-semibold">
              {current.code}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-brown-soft hidden sm:inline">
              ESC to close · ← → to navigate
            </span>
            <button
              onClick={() => {
                playTap();
                onClose();
              }}
              className="w-8 h-8 rounded-full bg-paper hover:bg-stone/20 text-brown flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          {/* Left: Interactive Loupe Image & Swatch Rail (cols 1-7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone/30 bg-paper/40">
            <div>
              {/* Macro Texture Viewer with Loupe */}
              <div
                ref={imageContainerRef}
                onMouseEnter={() => setLoupeActive(true)}
                onMouseLeave={() => setLoupeActive(false)}
                onMouseMove={handleMouseMove}
                className="relative aspect-[4/3.2] w-full rounded-2xl overflow-hidden bg-stone/20 border border-stone/40 shadow-inner group cursor-crosshair select-none"
              >
                <Image
                  src={current.imageSrc}
                  alt={current.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  priority
                />

                {/* Loupe Zoom Circle */}
                {loupeActive && (
                  <div
                    className="pointer-events-none absolute w-36 h-36 rounded-full border-2 border-sunflower shadow-2xl overflow-hidden z-20"
                    style={{
                      left: `${mousePos.x - 72}px`,
                      top: `${mousePos.y - 72}px`,
                      backgroundImage: `url(${current.imageSrc})`,
                      backgroundPosition: `${mousePos.relX}% ${mousePos.relY}%`,
                      backgroundSize: "280%",
                      boxShadow: "0 0 0 2px rgba(255,255,255,0.8), 0 20px 25px -5px rgba(0,0,0,0.5)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-charcoal/80 backdrop-blur-xs text-white text-[9px] font-mono px-1.5 py-0.5 rounded font-bold">
                      2.5x ZOOM
                    </div>
                  </div>
                )}

                {/* Watermark Tag */}
                <div className="absolute top-3 left-3 bg-charcoal/80 backdrop-blur-xs text-paper px-2.5 py-1 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 shadow-sm">
                  <ZoomIn className="w-3 h-3 text-sunflower" />
                  <span>Hover to Inspect Texture Grain</span>
                </div>

                {/* Material Code Badge */}
                <div className="absolute bottom-3 right-3 bg-paper/95 backdrop-blur-xs text-charcoal px-3 py-1 rounded-xl text-xs font-mono font-bold shadow-md border border-stone/30">
                  {current.code}
                </div>
              </div>
            </div>

            {/* Bottom Swatch Selector Rail */}
            <div className="mt-6 pt-4 border-t border-stone/30">
              <div className="text-[11px] font-mono uppercase tracking-wider text-brown-soft mb-2.5 flex items-center justify-between">
                <span>Select Material Palette Swatch ({currentIndex + 1}/{materials.length})</span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      playTap();
                      setCurrentIndex((prev) => (prev - 1 + materials.length) % materials.length);
                    }}
                    className="p-1 rounded bg-paper hover:bg-stone/20 text-brown transition-colors cursor-pointer"
                    aria-label="Previous swatch"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      playTap();
                      setCurrentIndex((prev) => (prev + 1) % materials.length);
                    }}
                    className="p-1 rounded bg-paper hover:bg-stone/20 text-brown transition-colors cursor-pointer"
                    aria-label="Next swatch"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                {materials.map((mat, idx) => {
                  const isSelected = idx === currentIndex;
                  return (
                    <button
                      key={mat.id}
                      onClick={() => handleSelect(idx)}
                      className={cn(
                        "relative flex items-center gap-2 px-3 py-2 rounded-xl text-left border transition-all cursor-pointer shrink-0",
                        isSelected
                          ? "bg-paper-card border-sunflower shadow-sm ring-2 ring-sunflower/30"
                          : "bg-paper/80 border-stone/40 hover:border-brown/40 opacity-75 hover:opacity-100"
                      )}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-black/10 shrink-0 shadow-inner"
                        style={{ backgroundColor: mat.colorHex }}
                      />
                      <div className="text-left">
                        <div className="text-[11px] font-mono font-bold text-brown truncate max-w-[100px]">
                          {mat.code}
                        </div>
                        <div className="text-[9px] font-sans text-brown-soft truncate max-w-[100px]">
                          {mat.name}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Technical Spec Sheet (cols 8-12) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-paper-card/40">
            <div className="space-y-5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-olive font-bold">
                  ARCHITECTURAL SPECIFICATION
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-brown font-normal mt-1 leading-snug">
                  {current.name}
                </h3>
                <p className="text-xs sm:text-sm text-brown-soft leading-relaxed mt-2 font-sans">
                  {current.description}
                </p>
              </div>

              {/* Technical Spec Matrix Table */}
              <div className="space-y-2.5 pt-2">
                <div className="p-2.5 bg-paper rounded-xl border border-stone/30 flex items-start justify-between gap-3 text-xs">
                  <span className="font-mono text-brown-soft/80 shrink-0">Application Zone:</span>
                  <span className="font-semibold text-brown text-right">{current.application}</span>
                </div>

                <div className="p-2.5 bg-paper rounded-xl border border-stone/30 flex items-start justify-between gap-3 text-xs">
                  <span className="font-mono text-brown-soft/80 shrink-0">Substrate / Core:</span>
                  <span className="font-semibold text-brown text-right">{current.substrate}</span>
                </div>

                <div className="p-2.5 bg-paper rounded-xl border border-stone/30 flex items-start justify-between gap-3 text-xs">
                  <span className="font-mono text-brown-soft/80 shrink-0">Surface Finish:</span>
                  <span className="font-semibold text-brown text-right">{current.finish}</span>
                </div>

                <div className="p-2.5 bg-paper rounded-xl border border-stone/30 flex items-start justify-between gap-3 text-xs">
                  <span className="font-mono text-brown-soft/80 shrink-0">Edge Banding:</span>
                  <span className="font-semibold text-brown text-right">{current.edgeBanding}</span>
                </div>

                <div className="p-2.5 bg-paper rounded-xl border border-stone/30 flex items-start justify-between gap-3 text-xs">
                  <span className="font-mono text-brown-soft/80 shrink-0">Hardware Fitment:</span>
                  <span className="font-semibold text-brown text-right">{current.hardware}</span>
                </div>

                <div className="p-2.5 bg-paper rounded-xl border border-stone/30 flex items-start justify-between gap-3 text-xs">
                  <span className="font-mono text-brown-soft/80 shrink-0">Lighting CCT Pairing:</span>
                  <span className="font-semibold text-olive text-right">{current.lightPairing}</span>
                </div>
              </div>
            </div>

            {/* Bottom Callout Note */}
            <div className="pt-4 border-t border-stone/30 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-brown-soft">
                <Check className="w-3.5 h-3.5 text-olive" />
                <span>Standardised for Site Execution</span>
              </div>
              <button
                onClick={() => {
                  playChime();
                  onClose();
                }}
                className="px-4 py-2 rounded-full bg-sunflower text-charcoal font-semibold text-xs hover:bg-sunflower-deep transition-all shadow-xs cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
