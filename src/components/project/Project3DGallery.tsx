"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize } from "lucide-react";
import { SpatialRenderPreview } from "@/types/project";
import { SpatialLightbox } from "@/components/project/SpatialLightbox";
import { playTap } from "@/lib/sound";

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

  const openLightbox = (index: number) => {
    playTap();
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  if (!gallery || gallery.length === 0) {
    return null;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {gallery.map((view, i) => (
          <button
            key={i}
            type="button"
            onClick={() => openLightbox(i)}
            className="text-left space-y-2.5 group cursor-pointer focus:outline-none"
          >
            <div className="relative aspect-[3.8/4.6] rounded-t-[80px] md:rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-sm border border-stone/30 group-hover:border-sunflower group-hover:shadow-md transition-all duration-300">
              <Image
                src={view.url}
                alt={view.viewLabel}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className={
                  view.url.includes("cad") || view.url.includes("floor-plan")
                    ? "object-contain bg-white p-3 group-hover:scale-105 transition-transform duration-500 ease-out"
                    : "object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                }
              />
              {/* Hover overlay with zoom hint */}
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

      {/* Lightbox Modal */}
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
