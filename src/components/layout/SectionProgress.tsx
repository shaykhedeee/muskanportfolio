"use client";

import React from "react";
import { cn } from "@/lib/cn";

interface SectionProgressProps {
  activeSection: number;
  totalSections?: number;
  onNavigate: (index: number) => void;
  sectionNames?: string[];
}

export function SectionProgress({
  activeSection,
  totalSections = 7,
  onNavigate,
  sectionNames = [
    "Hero",
    "Selected Projects",
    "Explore All My Work",
    "Design Process",
    "Style of Work",
    "Experience & Capabilities",
    "Contact & Resume",
  ],
}: SectionProgressProps) {
  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3 pointer-events-auto"
      aria-label="Homepage Section Navigation"
    >
      {Array.from({ length: totalSections }).map((_, index) => {
        const isActive = activeSection === index;
        const name = sectionNames[index] || `Section ${index + 1}`;

        return (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            aria-label={`Go to ${name}`}
            aria-current={isActive ? "step" : undefined}
            className="group flex items-center gap-3 py-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sunflower rounded-full px-1"
          >
            {/* Tooltip on hover */}
            <span
              className={cn(
                "text-xs font-sans font-medium px-2.5 py-0.5 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 pointer-events-none",
                isActive
                  ? "bg-charcoal text-sunflower opacity-100 translate-x-0 font-semibold"
                  : "bg-paper-card/90 text-brown shadow-sm border border-stone/30"
              )}
            >
              {name}
            </span>

            {/* Progress dot/pill indicator */}
            <span
              className={cn(
                "transition-all duration-300 rounded-full block",
                isActive
                  ? "w-3 h-8 bg-sunflower shadow-[0_0_10px_rgba(255,201,40,0.6)]"
                  : "w-2.5 h-2.5 bg-stone-dark/40 group-hover:bg-brown-soft group-hover:scale-125"
              )}
            />
          </button>
        );
      })}
    </nav>
  );
}
