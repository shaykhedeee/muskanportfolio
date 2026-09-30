"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ArrowUpRight,
  Armchair,
  Sparkles,
  LayoutGrid,
  Table,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";
import { Project, FurnitureItem } from "@/types/project";
import { FURNITURE_DESIGNS } from "@/data/fixtures/projects";
import { cn } from "@/lib/cn";
import { playTap } from "@/lib/sound";

interface ProjectsDirectoryProps {
  initialProjects: Project[];
  initialFurniture?: FurnitureItem[];
}

export function ProjectsDirectory({
  initialProjects,
  initialFurniture = FURNITURE_DESIGNS,
}: ProjectsDirectoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "matrix">("grid");

  const categories = [
    {
      id: "all",
      label: "All Projects",
      count: initialProjects.length + initialFurniture.length,
    },
    {
      id: "Residential",
      label: "Residential",
      count: initialProjects.filter((p) => p.category === "Residential" || p.category === "Villa").length,
    },
    {
      id: "Commercial",
      label: "Commercial",
      count: initialProjects.filter(
        (p) => p.category === "Commercial" || p.category === "Hospitality" || p.category === "Café Interior"
      ).length,
    },
    {
      id: "Furniture",
      label: "Furniture",
      count: initialFurniture.length,
    },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "Furniture") return [];

    return initialProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" ||
        (selectedCategory === "Commercial"
          ? project.category === "Commercial" || project.category === "Hospitality" || project.category === "Café Interior"
          : selectedCategory === "Residential"
          ? project.category === "Residential" || project.category === "Villa"
          : project.category === selectedCategory);

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.location.toLowerCase().includes(q) ||
        project.headline.toLowerCase().includes(q) ||
        project.details?.scope?.toLowerCase().includes(q) ||
        project.details?.deliverables?.some((d) => d.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [initialProjects, selectedCategory, searchQuery]);

  const filteredFurniture = useMemo(() => {
    if (selectedCategory !== "all" && selectedCategory !== "Furniture") return [];

    return initialFurniture.filter((item) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.materials.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.dimensions.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);

      return matchesQuery;
    });
  }, [initialFurniture, selectedCategory, searchQuery]);

  const totalResultsCount = filteredProjects.length + filteredFurniture.length;

  return (
    <div className="space-y-10">
      {/* Controls Bar: Category Filter Pills + View Switcher + Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone/30 pb-6">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playTap();
                  setSelectedCategory(cat.id);
                }}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer",
                  isActive
                    ? "bg-brown text-paper shadow-xs"
                    : "bg-paper-light border border-stone/40 text-brown-soft hover:text-charcoal hover:border-brown/40"
                )}
              >
                <span>{cat.label}</span>
                <span
                  className={cn(
                    "text-[10px] px-1.5 py-0.2 rounded-full font-mono font-medium",
                    isActive
                      ? "bg-paper/20 text-paper"
                      : "bg-stone/20 text-brown-soft"
                  )}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Bar & View Mode Toggle */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Dual-View Switcher */}
          <div className="flex items-center bg-paper-card border border-stone/40 p-1 rounded-full shadow-xs">
            <button
              onClick={() => {
                playTap();
                setViewMode("grid");
              }}
              title="Curated Editorial Grid"
              aria-label="Editorial Grid View"
              className={cn(
                "p-1.5 rounded-full transition-all cursor-pointer",
                viewMode === "grid"
                  ? "bg-brown text-paper shadow-xs"
                  : "text-brown-soft hover:text-brown"
              )}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                playTap();
                setViewMode("matrix");
              }}
              title="Technical CAD Matrix Ledger"
              aria-label="CAD Matrix View"
              className={cn(
                "p-1.5 rounded-full transition-all cursor-pointer",
                viewMode === "matrix"
                  ? "bg-brown text-paper shadow-xs"
                  : "text-brown-soft hover:text-brown"
              )}
            >
              <Table className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative flex-1 md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search city, scope, materials..."
              className="w-full bg-paper-light border border-stone/40 rounded-full px-4 py-2 text-xs text-brown placeholder:text-brown-soft/60 focus:outline-none focus:border-sunflower-deep transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  playTap();
                  setSearchQuery("");
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-brown-soft hover:text-charcoal cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Projects & Furniture Display: Either Empty, Grid, or CAD Matrix */}
      {totalResultsCount === 0 ? (
        <div className="py-20 text-center space-y-4 bg-paper-light rounded-3xl border border-dashed border-stone/40">
          <p className="font-display text-2xl text-brown">No works found matching &ldquo;{searchQuery}&rdquo;</p>
          <p className="text-xs text-brown-soft font-sans">
            Try adjusting your search terms or view our all projects catalog.
          </p>
          <button
            onClick={() => {
              playTap();
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="px-5 py-2.5 rounded-full bg-sunflower text-brown font-semibold text-xs hover:bg-sunflower-deep transition-all cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === "grid" ? (
        /* Curated Editorial Grid */
        <div className="space-y-12">
          {/* Architectural Projects Grid */}
          {filteredProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => {
                const hasSpatialStudy = Boolean(project.spatialStudy?.enabled);

                return (
                  <Link
                    key={project.id}
                    href={`/projects/${project.slug}`}
                    className="group flex flex-col bg-paper-light rounded-3xl p-3 pb-6 border border-stone/30 hover:border-sunflower hover:shadow-xl transition-all duration-300"
                  >
                    {/* Roman Arch Visual Thumbnail */}
                    <div className="relative w-full aspect-[4/4.5] rounded-t-[140px] md:rounded-t-[180px] rounded-b-2xl overflow-hidden bg-stone/20 mb-4 shadow-sm border border-stone/20">
                      <Image
                        src={project.thumbnailImage || project.heroImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Badges Overlay at flat bottom of arch thumbnail so text is never clipped */}
                      <div className="absolute bottom-3 left-3 right-14 flex flex-wrap items-center gap-1.5 z-10 pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full bg-paper/95 backdrop-blur-xs font-mono text-[10px] font-bold text-brown shadow-xs border border-stone/30">
                          {project.number || "01"}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-paper/95 backdrop-blur-xs font-sans text-[10px] font-semibold tracking-wider uppercase text-olive shadow-xs border border-stone/30">
                          {project.category}
                        </span>
                        {hasSpatialStudy && (
                          <span className="px-2.5 py-1 rounded-full bg-sunflower text-charcoal font-sans text-[9px] font-bold tracking-wider uppercase flex items-center gap-1 shadow-sm">
                            <Sparkles className="w-3 h-3" />
                            <span>2D/3D Breakdown</span>
                          </span>
                        )}
                      </div>

                      {/* Hover Arrow Icon */}
                      <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-sunflower text-charcoal flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="px-3 flex flex-col justify-between flex-1 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-brown-soft">
                          <span className="flex items-center gap-1 font-medium">
                            <MapPin className="w-3 h-3 text-olive" />
                            {project.location}
                          </span>
                          {project.details?.area && (
                            <span className="font-mono text-[11px]">
                              {project.details.area}
                            </span>
                          )}
                        </div>

                        <h2 className="font-display text-2xl text-brown font-normal group-hover:text-charcoal transition-colors">
                          {project.title}
                        </h2>

                        <p className="text-xs font-sans text-brown-soft leading-relaxed line-clamp-2">
                          {project.headline || project.shortDescription}
                        </p>
                      </div>

                      {/* Deliverables / Tags */}
                      {project.details?.deliverables && project.details.deliverables.length > 0 && (
                        <div className="pt-3 border-t border-stone/20 flex flex-wrap gap-1.5">
                          {project.details.deliverables.slice(0, 3).map((item) => (
                            <span
                              key={item}
                              className="text-[9px] font-mono px-2 py-0.5 rounded bg-stone/20 text-brown-soft"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="pt-2 flex items-center justify-between text-xs font-semibold text-brown group-hover:text-olive transition-colors">
                        <span>View Project Case Study</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Bespoke Furniture Designs Grid */}
          {filteredFurniture.length > 0 && (
            <div className="space-y-6">
              {selectedCategory === "Furniture" && (
                <div className="bg-paper-card border border-stone/40 rounded-3xl p-6 md:p-8 space-y-4 shadow-xs">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone/30 pb-5">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-olive mb-1">
                        <Armchair className="w-4 h-4" />
                        <span>System 32 Modular Engineering · 9 Bespoke Works</span>
                      </div>
                      <h2 className="font-display text-3xl sm:text-4xl text-brown font-normal">
                        Bespoke Furniture &amp; Millwork Collection
                      </h2>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-paper border border-stone/40 text-xs font-mono text-brown">
                        32mm Grid System
                      </span>
                      <span className="px-3 py-1 rounded-full bg-paper border border-stone/40 text-xs font-mono text-brown">
                        30mm Scribing Fillers
                      </span>
                      <span className="px-3 py-1 rounded-full bg-sunflower text-xs font-mono font-bold text-charcoal shadow-2xs">
                        Blum Hardware Verified
                      </span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm font-sans text-brown-soft leading-relaxed max-w-3xl">
                    Every piece is engineered with millwork accuracy, Blum runner clearances, and System 32 hole spacing. Designed from real site survey measurements with custom finishes in American walnut, fluted oak, natural travertine, and brushed brass.
                  </p>
                </div>
              )}

              {selectedCategory === "all" && (
                <div className="border-t border-stone/30 pt-10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-olive mb-1">
                      <Armchair className="w-4 h-4" />
                      <span>BESPOKE FURNITURE COLLECTION</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl text-brown">
                      Custom Millwork &amp; System 32 Furniture
                    </h3>
                  </div>
                  <Link
                    href="/work/furniture"
                    className="text-xs font-semibold text-olive hover:text-charcoal flex items-center gap-1"
                  >
                    <span>View Full Furniture Catalog</span>
                    <span>→</span>
                  </Link>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredFurniture.map((furniture) => (
                  <Link
                    key={furniture.id}
                    href={`/work/furniture/${furniture.slug}`}
                    className="group flex flex-col bg-paper-light rounded-3xl p-3 pb-6 border border-stone/30 hover:border-sunflower hover:shadow-xl transition-all duration-300"
                  >
                    {/* Furniture Visual Arch */}
                    <div className="relative w-full aspect-[4/4.5] rounded-t-[140px] md:rounded-t-[180px] rounded-b-2xl overflow-hidden bg-stone/20 mb-4 shadow-sm border border-stone/20">
                      <Image
                        src={furniture.image}
                        alt={furniture.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Badges Overlay at flat bottom of arch thumbnail */}
                      <div className="absolute bottom-3 left-3 right-14 flex flex-wrap items-center gap-1.5 z-10 pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full bg-paper/95 backdrop-blur-xs font-mono text-[10px] font-bold text-olive shadow-xs border border-stone/30">
                          {furniture.number}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-paper/95 backdrop-blur-xs font-sans text-[10px] font-semibold tracking-wider uppercase text-brown shadow-xs border border-stone/30">
                          {furniture.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-sunflower text-charcoal font-sans text-[9px] font-bold tracking-wider uppercase flex items-center gap-1 shadow-sm">
                          <Sparkles className="w-3 h-3" />
                          <span>System 32 CAD</span>
                        </span>
                      </div>

                      <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-sunflower text-charcoal flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-3 flex flex-col justify-between flex-1 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-brown-soft">
                          <span className="font-mono text-[11px] text-olive font-semibold">
                            {furniture.dimensions}
                          </span>
                          <span className="text-[10px] uppercase font-mono tracking-wider">
                            Custom Joinery
                          </span>
                        </div>

                        <h2 className="font-display text-2xl text-brown font-normal group-hover:text-charcoal transition-colors">
                          {furniture.title}
                        </h2>

                        <p className="text-xs font-sans text-brown-soft leading-relaxed line-clamp-2">
                          {furniture.description}
                        </p>
                      </div>

                      {/* Material Tags */}
                      <div className="pt-3 border-t border-stone/20 flex flex-wrap gap-1.5">
                        {furniture.materials.split(", ").slice(0, 3).map((mat) => (
                          <span
                            key={mat}
                            className="text-[9px] font-mono px-2 py-0.5 rounded bg-stone/20 text-brown-soft"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2 flex items-center justify-between text-xs font-semibold text-olive group-hover:text-charcoal transition-colors">
                        <span>Inspect Technical Specs</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Technical CAD Matrix Ledger Table */
        <div className="rounded-3xl border border-stone/30 bg-paper-card overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-paper border-b border-stone/30 text-[10px] font-mono uppercase tracking-widest text-brown-soft">
                  <th className="py-3.5 px-4 font-semibold">Ref</th>
                  <th className="py-3.5 px-4 font-semibold">Work &amp; Typology</th>
                  <th className="py-3.5 px-4 font-semibold">Location / Discipline</th>
                  <th className="py-3.5 px-4 font-semibold">Area / Dimensions</th>
                  <th className="py-3.5 px-4 font-semibold">Core Deliverables / Materials</th>
                  <th className="py-3.5 px-4 font-semibold">CAD Status</th>
                  <th className="py-3.5 px-4 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone/20 text-xs font-sans">
                {/* Projects in Table */}
                {filteredProjects.map((project) => {
                  const hasSpatialStudy = Boolean(project.spatialStudy?.enabled);

                  return (
                    <tr
                      key={project.id}
                      className="hover:bg-paper/70 transition-colors group"
                    >
                      <td className="py-4 px-4 font-mono font-bold text-olive">
                        {project.number || "01"}
                      </td>

                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-stone/30">
                            <Image
                              src={project.thumbnailImage || project.heroImage}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <Link
                              href={`/projects/${project.slug}`}
                              className="font-display text-base text-brown font-normal group-hover:text-charcoal transition-colors hover:underline block"
                            >
                              {project.title}
                            </Link>
                            <span className="text-[10px] font-mono text-brown-soft uppercase">
                              {project.category} · {project.details?.scope || "Interior Architecture"}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-4 font-medium text-brown">
                        {project.location}
                      </td>

                      <td className="py-4 px-4 font-mono text-brown-soft">
                        {project.details?.area || "—"}
                      </td>

                      <td className="py-4 px-4">
                        <div className="flex flex-wrap gap-1 max-w-[240px]">
                          {(project.details?.deliverables || ["Space Planning", "3D Renders"]).slice(0, 2).map((item) => (
                            <span
                              key={item}
                              className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-stone/20 text-brown-soft"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </td>

                      <td className="py-4 px-4">
                        {hasSpatialStudy ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>2D/3D Verified</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center text-[10px] font-mono text-brown-soft/80 bg-stone/20 px-2 py-0.5 rounded-full">
                            Published
                          </span>
                        )}
                      </td>

                      <td className="py-4 px-4 text-right">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-mono font-bold text-brown hover:text-olive transition-colors group-hover:translate-x-0.5"
                        >
                          <span>Open</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}

                {/* Furniture in Table */}
                {filteredFurniture.map((furniture) => (
                  <tr
                    key={furniture.id}
                    className="hover:bg-paper/70 transition-colors group bg-sunflower/5"
                  >
                    <td className="py-4 px-4 font-mono font-bold text-olive">
                      {furniture.number}
                    </td>

                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-stone/30">
                          <Image
                            src={furniture.image}
                            alt={furniture.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <Link
                            href={`/work/furniture/${furniture.slug}`}
                            className="font-display text-base text-brown font-normal group-hover:text-charcoal transition-colors hover:underline block"
                          >
                            {furniture.title}
                          </Link>
                          <span className="text-[10px] font-mono text-olive uppercase">
                            Bespoke Millwork · {furniture.category}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-4 font-medium text-brown">
                      Custom Joinery
                    </td>

                    <td className="py-4 px-4 font-mono text-brown-soft">
                      {furniture.dimensions}
                    </td>

                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-1 max-w-[240px]">
                        {furniture.materials.split(", ").slice(0, 2).map((item) => (
                          <span
                            key={item}
                            className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-stone/20 text-brown-soft"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>System 32 CAD</span>
                      </span>
                    </td>

                    <td className="py-4 px-4 text-right">
                      <Link
                        href={`/work/furniture/${furniture.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold text-olive hover:text-charcoal transition-colors group-hover:translate-x-0.5"
                      >
                        <span>Inspect</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Cross-Link Portal: Custom Furniture & Millwork Collection */}
      <div className="mt-16 p-8 md:p-12 rounded-3xl bg-paper-light border border-stone/30 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-olive">
              <Armchair className="w-4 h-4" />
              <span>CUSTOM JOINERY &amp; MILLWORK</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-brown font-normal">
              Looking for bespoke furniture pieces?
            </h3>
            <p className="font-sans text-xs md:text-sm text-brown-soft leading-relaxed">
              Explore 9 precision-detailed furniture items including System 32 modular wardrobes, travertine dining tables, fluted TV consoles, and minimalist pooja mandirs.
            </p>
          </div>

          <Link
            href="/work/furniture"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sunflower text-charcoal font-semibold text-xs hover:bg-sunflower-deep transition-all shadow-xs self-start md:self-auto shrink-0 cursor-pointer"
          >
            <span>Explore 9 Furniture Designs</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
