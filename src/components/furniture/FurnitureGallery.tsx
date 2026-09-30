"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Ruler, Layers, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import { FurnitureItem } from "@/types/project";
import { cn } from "@/lib/cn";

interface FurnitureGalleryProps {
  items: FurnitureItem[];
}

const CATEGORIES = [
  "All",
  "Living",
  "Dining",
  "Bedroom",
  "Storage",
  "Study",
  "Pooja",
] as const;

export function FurnitureGallery({ items }: FurnitureGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<FurnitureItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeItem]);

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-stone/30">
        <span className="text-xs font-mono uppercase tracking-wider text-brown-soft mr-2 font-semibold">
          Filter by Type:
        </span>
        {CATEGORIES.map((cat) => {
          const count =
            cat === "All"
              ? items.length
              : items.filter((i) => i.category === cat).length;
          const isSelected = selectedCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer flex items-center gap-1.5",
                isSelected
                  ? "bg-brown text-paper shadow-xs font-semibold"
                  : "bg-paper-card text-brown-soft hover:text-charcoal hover:bg-white border border-stone/40"
              )}
            >
              <span>{cat}</span>
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.5 rounded-full",
                  isSelected
                    ? "bg-sunflower text-brown font-mono font-bold"
                    : "bg-stone/20 text-brown-soft"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3-Column Furniture Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group bg-paper-card rounded-3xl p-3 pb-6 shadow-xs hover:shadow-xl border border-stone/40 hover:border-sunflower flex flex-col justify-between transition-all duration-300 cursor-pointer"
          >
            {/* Roman Arch Image Container with Badges */}
            <div className="relative aspect-[4/4.5] w-full rounded-t-[140px] md:rounded-t-[180px] rounded-b-2xl overflow-hidden bg-stone/20 mb-4 shadow-sm border border-stone/20">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-paper/95 backdrop-blur-xs font-mono text-xs text-charcoal font-bold shadow-xs border border-stone/30">
                  {item.number}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-brown/95 backdrop-blur-xs text-[11px] uppercase tracking-wider text-paper font-medium shadow-xs">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="px-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl text-brown font-normal mb-2 group-hover:text-charcoal transition-colors">
                  {item.title}
                </h3>
                
                <p className="font-sans text-xs text-brown-soft line-clamp-2 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Dimensions Badge */}
                <div className="flex items-center gap-2 text-[11px] font-mono text-charcoal bg-stone/20 px-3 py-1.5 rounded-lg mb-3">
                  <Ruler className="w-3.5 h-3.5 text-olive shrink-0" />
                  <span className="truncate">{item.dimensions}</span>
                </div>

                {/* Materials preview */}
                <div className="flex items-start gap-2 text-[11px] font-sans text-brown-soft/90 mb-4">
                  <Layers className="w-3.5 h-3.5 text-brown shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{item.materials}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-stone/20 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveItem(item);
                  }}
                  className="text-xs font-semibold uppercase tracking-wider text-brown hover:text-charcoal transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Inspect Technical Specs</span>
                </button>

                <Link
                  href={`/work/furniture/${item.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs font-semibold font-mono text-olive hover:text-brown flex items-center gap-1 transition-colors group/link"
                >
                  <span>CAD Page</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Lightbox / Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-paper text-brown rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone/40 p-6 md:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              aria-label="Close details"
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-paper-card border border-stone/40 flex items-center justify-center text-brown hover:bg-stone/30 transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              {/* Header Badges & Title */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-full bg-sunflower/30 font-mono text-xs text-charcoal font-bold">
                    {activeItem.number}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-brown text-paper text-[11px] uppercase tracking-wider font-semibold">
                    {activeItem.category} Collection
                  </span>
                </div>
                <h2
                  id="modal-title"
                  className="font-display text-3xl sm:text-4xl text-brown font-normal"
                >
                  {activeItem.title}
                </h2>
              </div>

              {/* Modal Image */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-stone/20 border border-stone/30">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Design Description */}
              <div className="bg-paper-card p-5 rounded-2xl border border-stone/30">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-brown-soft mb-1.5 font-mono">
                  Design &amp; Spatial Intent
                </h4>
                <p className="font-sans text-sm text-brown leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              {/* Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-paper-card rounded-2xl border border-stone/30">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-olive mb-1 font-mono">
                    <Ruler className="w-4 h-4" />
                    <span>Dimensions (Metric)</span>
                  </div>
                  <div className="text-sm font-mono font-medium text-charcoal">
                    {activeItem.dimensions}
                  </div>
                </div>

                <div className="p-4 bg-paper-card rounded-2xl border border-stone/30">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-brown mb-1 font-mono">
                    <Layers className="w-4 h-4" />
                    <span>Material Finishes</span>
                  </div>
                  <div className="text-xs font-sans text-charcoal leading-snug">
                    {activeItem.materials}
                  </div>
                </div>
              </div>

              {/* Technical Joinery & Hardware Specs */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-brown-soft mb-3 font-mono">
                  Engineering &amp; System 32 Joinery Specifications
                </h4>
                <div className="space-y-2.5">
                  {activeItem.technicalSpecs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-charcoal bg-stone/15 p-3 rounded-xl border border-stone/20"
                    >
                      <CheckCircle2 className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-stone/30 flex flex-wrap items-center justify-between gap-4">
                <span className="text-[11px] font-sans text-brown-soft">
                  Bespoke dimensions &amp; material customisation available upon consultation.
                </span>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/work/furniture/${activeItem.slug}`}
                    className="px-5 py-2 rounded-full bg-olive text-paper text-xs uppercase tracking-widest font-semibold hover:bg-brown transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Full Architectural CAD &amp; Renders</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => setActiveItem(null)}
                    className="px-5 py-2 rounded-full bg-stone/30 text-charcoal text-xs uppercase tracking-widest font-semibold hover:bg-stone/50 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
