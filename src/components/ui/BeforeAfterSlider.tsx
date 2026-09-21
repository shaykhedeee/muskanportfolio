"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal, Sparkles, Compass } from "lucide-react";
import { cn } from "@/lib/cn";
import { playTap } from "@/lib/sound";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  caption?: string;
  className?: string;
  aspectRatio?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "2D Technical Blueprint",
  afterLabel = "3D Photorealistic Render",
  title,
  caption,
  className = "",
  aspectRatio = "aspect-[16/10]",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percent);
    },
    []
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleStopDragging = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleStopDragging);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleStopDragging);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleStopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleStopDragging);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleStopDragging]);

  const startDragging = () => {
    playTap();
    setIsDragging(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      playTap();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      playTap();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      {title && (
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-olive font-bold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>SPATIAL VISION TRANSFORMATION</span>
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-brown font-normal mt-0.5">
              {title}
            </h3>
          </div>
          {/* Quick preset buttons */}
          <div className="flex items-center gap-1.5 bg-paper-card border border-stone/30 p-1 rounded-full text-[10px] font-mono">
            <button
              onClick={() => {
                playTap();
                setSliderPosition(20);
              }}
              className="px-2.5 py-0.5 rounded-full hover:bg-stone/20 text-brown-soft transition-colors cursor-pointer"
            >
              20%
            </button>
            <button
              onClick={() => {
                playTap();
                setSliderPosition(50);
              }}
              className="px-2.5 py-0.5 rounded-full bg-brown text-paper font-semibold transition-colors cursor-pointer"
            >
              50%
            </button>
            <button
              onClick={() => {
                playTap();
                setSliderPosition(80);
              }}
              className="px-2.5 py-0.5 rounded-full hover:bg-stone/20 text-brown-soft transition-colors cursor-pointer"
            >
              80%
            </button>
          </div>
        </div>
      )}

      {/* Interactive Drag Canvas */}
      <div
        ref={containerRef}
        onMouseDown={startDragging}
        onTouchStart={startDragging}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-label="Before and After visual comparison slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn(
          "relative w-full rounded-3xl overflow-hidden shadow-xl border border-stone/30 select-none cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-sunflower",
          aspectRatio
        )}
      >
        {/* Layer 1: "After" Photorealistic Render (Base Background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            priority
          />
          {/* Top-Right Label */}
          <div className="absolute top-4 right-4 bg-charcoal/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[11px] font-mono font-medium flex items-center gap-1.5 shadow-md z-10 pointer-events-none">
            <Sparkles className="w-3 h-3 text-sunflower" />
            <span>{afterLabel}</span>
          </div>
        </div>

        {/* Layer 2: "Before" Technical Blueprint (Clipped by sliderPosition) */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            priority
          />
          {/* Subtle Blueprint grid texture overlay */}
          <div className="absolute inset-0 bg-blue-950/10 mix-blend-multiply pointer-events-none" />

          {/* Top-Left Label */}
          <div className="absolute top-4 left-4 bg-paper/90 backdrop-blur-md text-brown px-3 py-1 rounded-full text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-md z-10 pointer-events-none border border-stone/30">
            <Compass className="w-3 h-3 text-olive" />
            <span>{beforeLabel}</span>
          </div>
        </div>

        {/* Vertical Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Centered Circular Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-sunflower text-charcoal shadow-2xl border-2 border-white flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
            <MoveHorizontal className="w-5 h-5 text-charcoal" />
          </div>
        </div>
      </div>

      {/* Bottom Caption & Instruction */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-brown-soft pt-1 font-sans">
        <p>{caption || "Drag the center divider or use arrow keys to reveal the architectural transformation."}</p>
        <span className="font-mono text-[10px] text-olive font-semibold mt-1 sm:mt-0">
          Position: {Math.round(sliderPosition)}% · Drag to compare
        </span>
      </div>
    </div>
  );
}
