"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SpatialRenderPreview } from "@/types/project";

interface SpatialLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: SpatialRenderPreview[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  projectTitle?: string;
}

export const SpatialLightbox: React.FC<SpatialLightboxProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
  projectTitle = "Project Study",
}) => {
  const currentImage = images[currentIndex];

  const handlePrev = useCallback(() => {
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onIndexChange]);

  const handleNext = useCallback(() => {
    onIndexChange((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onIndexChange]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Final Space Render Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-md p-4 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Lightbox Container */}
      <div
        className="relative max-w-5xl w-full bg-paper rounded-3xl overflow-hidden shadow-2xl border border-stone/40 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone/30 bg-paper-card">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-brown">
              {projectTitle}
            </span>
            <span className="text-stone/60">/</span>
            <span className="text-xs font-mono font-medium text-olive uppercase px-2 py-0.5 rounded bg-olive/10">
              {currentImage.viewLabel}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-brown-soft">
              {currentIndex + 1} of {images.length}
            </span>
            <button
              onClick={onClose}
              aria-label="Close Lightbox"
              className="p-1.5 rounded-full hover:bg-stone/20 text-brown transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Render Image Area */}
        <div className="relative w-full h-[55vh] md:h-[65vh] bg-[#1E1815] flex items-center justify-center overflow-hidden">
          <Image
            src={currentImage.url}
            alt={currentImage.caption || currentImage.viewLabel}
            fill
            className="object-contain"
            priority
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-paper/80 text-brown hover:bg-sunflower hover:text-brown transition-all shadow-md backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-paper/80 text-brown hover:bg-sunflower hover:text-brown transition-all shadow-md backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Caption Footer */}
        <div className="px-6 py-4 bg-paper flex flex-col md:flex-row items-start md:items-center justify-between gap-2 border-t border-stone/20">
          <p className="text-sm font-sans text-brown leading-relaxed max-w-3xl">
            {currentImage.caption}
          </p>
          <span className="text-[11px] font-mono text-brown-soft/80 shrink-0">
            Render Perspective · SketchUp + Enscape
          </span>
        </div>
      </div>
    </div>
  );
};
