"use client";

import React, { useState } from "react";
import { Maximize, ZoomIn, ZoomOut, RotateCcw, X } from "lucide-react";
import { playTap } from "@/lib/sound";

interface CadZoomTriggerProps {
  children: React.ReactNode;
  title: string;
  description: string;
  sheetRef?: string;
  scale?: string;
  className?: string;
}

export function CadZoomTrigger({
  children,
  title,
  description,
  sheetRef = "DWG-01",
  scale = "SCALE 1:20",
  className = "",
}: CadZoomTriggerProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const openModal = () => {
    playTap();
    setZoomLevel(1);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const zoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    playTap();
    setZoomLevel((prev) => Math.min(prev + 0.3, 3));
  };

  const zoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    playTap();
    setZoomLevel((prev) => Math.max(prev - 0.3, 0.7));
  };

  const resetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    playTap();
    setZoomLevel(1);
  };

  return (
    <>
      <div
        onClick={openModal}
        className={`relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-stone/30 shadow-xs bg-white cursor-pointer group/zoom ${className}`}
      >
        {children}

        {/* Hover zoom overlay */}
        <div className="absolute inset-0 bg-charcoal/25 opacity-0 group-hover/zoom:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="p-2.5 rounded-full bg-paper/95 text-brown shadow-md flex items-center gap-1.5 text-xs font-mono font-semibold">
            <Maximize className="w-3.5 h-3.5 text-sunflower-deep" />
            <span>Inspect CAD Drawing</span>
          </span>
        </div>

        {/* Drawing Sheet Tag */}
        <div className="absolute top-2.5 left-2.5 bg-paper/90 backdrop-blur-xs px-2 py-0.5 rounded text-[8px] font-mono text-brown border border-stone/30 pointer-events-none">
          {sheetRef} · {scale}
        </div>
      </div>

      {/* CAD Inspection Lightbox Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-md p-4 md:p-8 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full bg-paper rounded-3xl overflow-hidden shadow-2xl border border-stone/40 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone/30 bg-paper-card">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-sunflower inline-block" />
                <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-brown">
                  {title}
                </span>
                <span className="text-stone/60">/</span>
                <span className="text-xs font-mono text-olive bg-olive/10 px-2 py-0.5 rounded">
                  {sheetRef} · {scale}
                </span>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-paper border border-stone/30 rounded-xl p-1">
                  <button
                    type="button"
                    onClick={zoomOut}
                    title="Zoom Out"
                    className="p-1 rounded hover:bg-stone/20 text-brown transition-colors cursor-pointer"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-[10px] font-mono px-1.5 text-brown font-bold min-w-[40px] text-center">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={zoomIn}
                    title="Zoom In"
                    className="p-1 rounded hover:bg-stone/20 text-brown transition-colors cursor-pointer"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={resetZoom}
                    title="Reset Zoom"
                    className="p-1 rounded hover:bg-stone/20 text-brown transition-colors cursor-pointer ml-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={closeModal}
                  className="p-1.5 rounded-full hover:bg-stone/20 text-brown transition-colors cursor-pointer ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Drawing Zoom Canvas */}
            <div className="relative w-full h-[60vh] md:h-[70vh] bg-[#F7F4EC] p-6 flex items-center justify-center overflow-auto">
              <div
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: "center center",
                  transition: "transform 0.2s ease-out",
                }}
                className="relative w-full h-full min-w-[320px] flex items-center justify-center"
              >
                {children}
              </div>
            </div>

            {/* Technical Footer */}
            <div className="px-6 py-3 bg-paper border-t border-stone/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-brown-soft">
              <p className="line-clamp-2 max-w-2xl text-[11px] leading-relaxed">
                {description}
              </p>
              <span className="text-brown font-semibold shrink-0 text-[10px] bg-stone/15 px-2.5 py-1 rounded-md">
                AutoCAD 2026 Millimeter Joinery Specs
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
