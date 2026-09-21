"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Layers } from "lucide-react";
import { Project } from "@/types/project";
import { cn } from "@/lib/cn";

interface CommercialGalleryProps {
  projects: Project[];
}

const CATEGORIES = [
  "All Spaces",
  "Café & Roastery",
  "Workspace & Studio",
  "Retail & Boutique",
] as const;

export function CommercialGallery({ projects }: CommercialGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All Spaces");

  const filterProject = (proj: Project, cat: string) => {
    if (cat === "All Spaces") return true;
    if (cat === "Café & Roastery") return proj.slug === "olive-and-oak";
    if (cat === "Workspace & Studio") return proj.slug === "the-studio-atelier";
    if (cat === "Retail & Boutique") return proj.slug === "clover-lifestyle-boutique";
    return true;
  };

  const filteredProjects = projects.filter((p) => filterProject(p, activeCategory));

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-stone/30">
        <span className="text-xs font-mono uppercase tracking-wider text-brown-soft mr-2 font-semibold">
          Filter by Sector:
        </span>
        {CATEGORIES.map((cat) => {
          const count = projects.filter((p) => filterProject(p, cat)).length;
          const isSelected = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
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
                  "text-[10px] px-1.5 py-0.5 rounded-full font-mono",
                  isSelected
                    ? "bg-sunflower text-brown font-bold"
                    : "bg-stone/20 text-brown-soft"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3-Column Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj) => (
          <Link
            key={proj.id}
            href={`/projects/${proj.slug}`}
            className="group bg-paper-card rounded-3xl p-3 pb-6 shadow-xs hover:shadow-xl border border-stone/40 hover:border-sunflower flex flex-col justify-between transition-all duration-300"
          >
            {/* Roman Arch Photo Container */}
            <div className="relative aspect-[4/4.5] w-full rounded-t-[140px] md:rounded-t-[180px] rounded-b-2xl overflow-hidden bg-stone/20 mb-4 shadow-sm border border-stone/20">
              <Image
                src={proj.heroImage}
                alt={proj.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-paper/90 backdrop-blur-xs font-mono text-xs text-charcoal font-bold shadow-xs">
                {proj.number}
              </div>
              {proj.details?.area && (
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-paper/90 backdrop-blur-xs font-mono text-[10px] text-charcoal font-semibold shadow-xs">
                  {proj.details.area}
                </span>
              )}
            </div>

            <div className="px-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-olive font-bold">
                    COMMERCIAL SPACE
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-brown-soft font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-olive" />
                    <span>{proj.location}</span>
                  </span>
                </div>
                <h3 className="font-display text-2xl text-brown font-normal mb-2 group-hover:text-charcoal transition-colors">
                  {proj.title}
                </h3>
                <p className="font-sans text-xs text-brown-soft line-clamp-2 leading-relaxed mb-4">
                  {proj.shortDescription}
                </p>

                {proj.details?.scope && (
                  <div className="flex items-start gap-1.5 text-[11px] font-sans text-brown-soft/80 mb-4">
                    <Layers className="w-3.5 h-3.5 text-olive shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{proj.details.scope}</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-stone/20 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-brown group-hover:text-sunflower-deep transition-colors">
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
