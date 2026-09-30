"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Layers, Compass, Eye, Sparkles, Maximize, X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/cn";
import { playTap } from "@/lib/sound";
import { SarthakArchitecturalFloorPlanSvg } from "./SarthakArchitecturalFloorPlanSvg";
import { VivekArchitecturalFloorPlanSvg } from "./VivekArchitecturalFloorPlanSvg";

export function ArchitecturalFloorPlanVisual({
  projectTitle = "The Calm House",
  floorPlanImage,
  slug,
  className = "",
}: {
  projectTitle?: string;
  floorPlanImage?: string;
  slug?: string;
  className?: string;
}) {
  const [viewMode, setViewMode] = useState<"cad" | "colored">("cad");
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <div className={cn("space-y-4", className)}>
      {/* View Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-paper p-2 rounded-2xl border border-stone/30">
        <div className="flex items-center gap-2 pl-2">
          <span className="w-2 h-2 rounded-full bg-sunflower animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brown">
            2D Drawing Mode:
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => {
              playTap();
              setViewMode("cad");
            }}
            className={cn(
              "px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all flex items-center gap-1.5",
              viewMode === "cad"
                ? "bg-charcoal text-paper shadow-sm"
                : "text-brown-soft hover:text-charcoal hover:bg-stone/20"
            )}
          >
            <Compass className="w-3.5 h-3.5 text-sunflower" />
            <span>Vector CAD Blueprint (SVG)</span>
          </button>

          <button
            onClick={() => {
              playTap();
              setViewMode("colored");
            }}
            className={cn(
              "px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all flex items-center gap-1.5",
              viewMode === "colored"
                ? "bg-charcoal text-paper shadow-sm"
                : "text-brown-soft hover:text-charcoal hover:bg-stone/20"
            )}
          >
            <Eye className="w-3.5 h-3.5 text-sunflower" />
            <span>Colored Layout Plan</span>
          </button>
        </div>
      </div>

      {/* Drawing Display */}
      {viewMode === "cad" ? (
        slug === "the-calm-house" ? (
          <SarthakArchitecturalFloorPlanSvg />
        ) : slug === "mr-vivek-residence" ? (
          <VivekArchitecturalFloorPlanSvg />
        ) : floorPlanImage ? (
          /* Render project's actual CAD blueprint SVG/image */
          <div className="relative w-full aspect-[16/11] bg-[#F4F1EA] rounded-3xl overflow-hidden border-2 border-stone/50 shadow-lg group">
            {/* Blueprint Grid Watermark */}
            <div
              className="absolute inset-0 opacity-[0.12] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#49352C 1px, transparent 1px), radial-gradient(#49352C 1px, #F4F1EA 1px)",
                backgroundSize: "24px 24px",
                backgroundPosition: "0 0, 12px 12px",
              }}
            />

            {/* Architectural Header Strip */}
            <div className="absolute top-4 left-6 right-6 flex items-center justify-between z-10 pointer-events-none border-b border-stone/30 pb-2 bg-paper/80 backdrop-blur-xs px-3 py-1 rounded-xl">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-sunflower inline-block" />
                <span className="text-[10px] font-mono tracking-widest uppercase text-brown font-bold">
                  AUTOCAD 2D VECTOR BLUEPRINT · {projectTitle.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-md bg-brown text-paper font-bold tracking-wider">
                  SCALE 1:50 · DWG-01
                </span>
              </div>
            </div>

            {/* Inspect / Zoom Button */}
            <button
              type="button"
              onClick={() => {
                playTap();
                setIsZoomOpen(true);
              }}
              title="Inspect Fullscreen"
              className="absolute top-4 right-6 z-20 p-2 rounded-full bg-paper/90 border border-stone/40 text-brown hover:bg-sunflower transition-all shadow-sm cursor-pointer"
            >
              <Maximize className="w-4 h-4" />
            </button>

            {/* Blueprint Image */}
            <div className="relative w-full h-full pt-12 pb-10 px-4 flex items-center justify-center">
              <Image
                src={floorPlanImage}
                alt={`${projectTitle} Vector Architectural Floor Plan`}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                priority
              />
            </div>

            {/* Architectural Footer Stamp */}
            <div className="absolute bottom-3 left-6 right-6 flex items-center justify-between text-[10px] font-mono text-brown-soft border-t border-stone/30 pt-2 z-10 pointer-events-none bg-paper/80 backdrop-blur-xs px-3 py-1 rounded-xl">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-brown">ORIGINAL DWG VECTOR</span>
                <span className="text-stone-dark">·</span>
                <span className="text-brown">COORDINATES &amp; ZONES SYNCHRONIZED</span>
              </div>
              <span className="text-olive font-bold uppercase tracking-wider">
                APPROVED FOR CONSTRUCTION
              </span>
            </div>
          </div>
        ) : (
          <DefaultColoredFloorPlan projectTitle={projectTitle} />
        )
      ) : floorPlanImage ? (
        <div className="relative w-full aspect-[16/11] bg-[#FAF7F0] rounded-3xl overflow-hidden border-2 border-stone/40 shadow-lg group">
          {/* Architectural Header Strip */}
          <div className="absolute top-4 left-6 right-6 flex items-center justify-between z-10 pointer-events-none border-b border-stone/25 pb-2">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-sunflower inline-block" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-brown font-bold">
                {slug === "terracotta-villa" || slug === "5-bhk-luxury-villa"
                  ? "5 BHK VILLA TECHNICAL DRAWING"
                  : "ARCHITECTURAL TECHNICAL DRAWING"}{" "}
                · {projectTitle.toUpperCase()}
              </span>
            </div>
            <span className="text-[9px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-paper border border-stone/30 text-olive font-bold tracking-wider">
              {slug === "terracotta-villa" || slug === "5-bhk-luxury-villa"
                ? "AUTOCAD 2D MASTERPLAN · PROPOSAL"
                : "AUTOCAD 2D/3D DWG · LEVEL 03"}
            </span>
          </div>

          {/* Inspect Button */}
          <button
            type="button"
            onClick={() => {
              playTap();
              setIsZoomOpen(true);
            }}
            title="Inspect Fullscreen"
            className="absolute top-4 right-6 z-20 p-2 rounded-full bg-paper/90 border border-stone/40 text-brown hover:bg-sunflower transition-all shadow-sm cursor-pointer"
          >
            <Maximize className="w-4 h-4" />
          </button>

          {/* Floor Plan Image */}
          <div className="relative w-full h-full pt-12 pb-10 px-4 flex items-center justify-center">
            <Image
              src={floorPlanImage}
              alt={`${projectTitle} Architectural Floor Plan`}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              priority
            />
          </div>

          {/* Architectural Footer Stamp */}
          <div className="absolute bottom-3 left-6 right-6 flex items-center justify-between text-[10px] font-mono text-brown-soft border-t border-stone/30 pt-2 z-10 pointer-events-none">
            <div className="flex items-center gap-2">
              {slug === "terracotta-villa" || slug === "5-bhk-luxury-villa" ? (
                <>
                  <span className="font-semibold text-brown">M.SUITE: 24&apos;0&quot; × 16&apos;0&quot;</span>
                  <span className="text-stone-dark">·</span>
                  <span className="font-semibold text-brown">LIVING: 28&apos;6&quot; × 18&apos;0&quot;</span>
                  <span className="text-stone-dark">·</span>
                  <span className="font-semibold text-brown">SHOW KITCHEN: 16&apos;0&quot; × 14&apos;0&quot;</span>
                </>
              ) : (
                <>
                  <span className="font-semibold text-brown">M.BEDROOM: 16&apos;0&quot; × 11&apos;6&quot;</span>
                  <span className="text-stone-dark">·</span>
                  <span className="font-semibold text-brown">LIVING: 21&apos;8&quot; × 11&apos;6&quot;</span>
                  <span className="text-stone-dark">·</span>
                  <span className="font-semibold text-brown">DINING: 9&apos;6&quot; × 11&apos;6&quot;</span>
                </>
              )}
            </div>
            <span className="text-olive font-bold uppercase tracking-wider">
              {slug === "terracotta-villa" || slug === "5-bhk-luxury-villa"
                ? "5 BHK VILLA SPATIAL MASTERPLAN"
                : "FURNITURE LAYOUT PLAN · APPROVED"}
            </span>
          </div>
        </div>
      ) : (
        <DefaultColoredFloorPlan projectTitle={projectTitle} />
      )}

      {/* Fullscreen CAD Inspector Modal */}
      {isZoomOpen && floorPlanImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-md p-4 md:p-8 animate-fadeIn"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-paper rounded-3xl overflow-hidden shadow-2xl border border-stone/40 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone/30 bg-paper-card">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-sunflower inline-block" />
                <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-brown">
                  {projectTitle} · AutoCAD Vector Blueprint
                </span>
                <span className="text-stone/60">/</span>
                <span className="text-xs font-mono text-olive bg-olive/10 px-2 py-0.5 rounded">
                  Scale 1:50 High-Res
                </span>
              </div>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="p-1.5 rounded-full hover:bg-stone/20 text-brown transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full h-[65vh] md:h-[75vh] bg-[#F7F4EC] p-6 flex items-center justify-center overflow-auto">
              <div className="relative w-full h-full min-w-[300px]">
                <Image
                  src={floorPlanImage}
                  alt={`${projectTitle} Fullscreen Blueprint`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="px-6 py-3 bg-paper border-t border-stone/20 flex items-center justify-between text-xs font-mono text-brown-soft">
              <span>AutoCAD 2026 Architectural Spatial Specification · Verified Dimensions</span>
              <span className="text-brown font-semibold">1:50 Vector Plot</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DefaultColoredFloorPlan({ projectTitle }: { projectTitle: string }) {
  return (
    <div className="relative w-full aspect-[16/10] bg-[#FAF7F0] rounded-3xl overflow-hidden border border-stone/40 shadow-md">
      <svg
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full select-none"
        aria-label={`${projectTitle} Furniture Layout Plan`}
      >
        <defs>
          <pattern
            id="fpWallHatch"
            width="8"
            height="8"
            patternTransform="rotate(45 0 0)"
            patternUnits="userSpaceOnUse"
          >
            <line x1="0" y1="0" x2="0" y2="8" stroke="#49352C" strokeWidth="1.5" />
          </pattern>
          <pattern id="fpTile" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#E2DAC9" strokeWidth="0.8" />
          </pattern>
          <pattern id="fpWoodFloor" width="60" height="12" patternUnits="userSpaceOnUse">
            <line x1="0" y1="12" x2="60" y2="12" stroke="#EFE9DC" strokeWidth="0.8" />
            <line x1="30" y1="0" x2="30" y2="12" stroke="#EFE9DC" strokeWidth="0.8" />
          </pattern>
        </defs>

        {/* Room Floor fills */}
        <rect x="250" y="50" width="310" height="390" fill="url(#fpWoodFloor)" />
        <rect x="50" y="50" width="200" height="210" fill="#F8F4EC" />
        <rect x="50" y="260" width="200" height="180" fill="url(#fpTile)" />
        <rect x="560" y="50" width="190" height="240" fill="#F8F4EC" />
        <rect x="560" y="290" width="190" height="150" fill="#F3ECE0" />

        {/* Thick Exterior Walls */}
        <rect x="45" y="45" width="710" height="400" fill="none" stroke="#49352C" strokeWidth="10" />
        
        {/* Partition Walls */}
        <line x1="250" y1="50" x2="250" y2="260" stroke="#49352C" strokeWidth="8" />
        <line x1="250" y1="260" x2="250" y2="350" stroke="#49352C" strokeWidth="8" />
        <line x1="50" y1="260" x2="250" y2="260" stroke="#49352C" strokeWidth="8" />
        <line x1="560" y1="50" x2="560" y2="290" stroke="#49352C" strokeWidth="8" />
        <line x1="560" y1="290" x2="750" y2="290" stroke="#49352C" strokeWidth="8" />

        {/* Doors */}
        <path d="M250 200 A 40 40 0 0 0 210 240" stroke="#8C7A6B" strokeWidth="1" strokeDasharray="3 2" fill="none" />
        <line x1="250" y1="240" x2="210" y2="240" stroke="#49352C" strokeWidth="2" />
        
        <path d="M560 210 A 40 40 0 0 1 600 250" stroke="#8C7A6B" strokeWidth="1" strokeDasharray="3 2" fill="none" />
        <line x1="560" y1="250" x2="600" y2="250" stroke="#49352C" strokeWidth="2" />

        <path d="M250 350 A 40 40 0 0 0 210 390" stroke="#8C7A6B" strokeWidth="1" strokeDasharray="3 2" fill="none" />
        <line x1="250" y1="390" x2="210" y2="390" stroke="#49352C" strokeWidth="2" />

        {/* Bedroom 1 */}
        <rect x="90" y="80" width="120" height="140" rx="4" fill="#EAE2D5" stroke="#49352C" strokeWidth="1.6" />
        <rect x="85" y="70" width="130" height="15" rx="3" fill="#C9A982" stroke="#49352C" strokeWidth="1.4" />
        <rect x="98" y="90" width="45" height="25" rx="3" fill="#FFFDF7" stroke="#8C7A6B" strokeWidth="1" />
        <rect x="155" y="90" width="45" height="25" rx="3" fill="#FFFDF7" stroke="#8C7A6B" strokeWidth="1" />
        <rect x="90" y="130" width="120" height="90" rx="2" fill="#E2DAC9" stroke="#8C7A6B" strokeWidth="1" />
        <rect x="58" y="75" width="22" height="28" rx="2" fill="#D8CDBB" stroke="#49352C" strokeWidth="1.2" />
        <rect x="218" y="75" width="22" height="28" rx="2" fill="#D8CDBB" stroke="#49352C" strokeWidth="1.2" />
        <rect x="55" y="160" width="25" height="90" fill="#FAF4EA" stroke="#49352C" strokeWidth="1.4" />
        <line x1="55" y1="205" x2="80" y2="205" stroke="#49352C" strokeWidth="1" />
        <text x="150" y="245" textAnchor="middle" fill="#49352C" fontSize="11" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1.5">
          BEDROOM 1
        </text>

        {/* Kitchen */}
        <path d="M55 265 L180 265 L180 320 L115 320 L115 435 L55 435 Z" fill="#EAE2D5" stroke="#49352C" strokeWidth="1.6" />
        <rect x="65" y="340" width="38" height="26" rx="2" fill="#FCFAF6" stroke="#49352C" strokeWidth="1.2" />
        <line x1="84" y1="340" x2="84" y2="366" stroke="#49352C" strokeWidth="1" />
        <rect x="100" y="275" width="50" height="35" rx="2" fill="#2E2824" stroke="#1A1614" strokeWidth="1.2" />
        <circle cx="112" cy="285" r="4" fill="#C9A982" />
        <circle cx="138" cy="285" r="4" fill="#C9A982" />
        <circle cx="112" cy="298" r="4" fill="#C9A982" />
        <circle cx="138" cy="298" r="4" fill="#C9A982" />
        <rect x="55" y="385" width="50" height="50" fill="#D8CDBB" stroke="#49352C" strokeWidth="1.4" />
        <line x1="55" y1="425" x2="105" y2="425" stroke="#49352C" strokeWidth="1.2" />
        <text x="125" y="380" textAnchor="middle" fill="#49352C" fontSize="11" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1.5">
          KITCHEN
        </text>

        {/* Dining */}
        <rect x="330" y="85" width="140" height="75" rx="8" fill="#D8CDBB" stroke="#49352C" strokeWidth="1.8" />
        <rect x="345" y="118" width="110" height="9" rx="2" fill="#EAE2D5" />
        <circle cx="400" cy="122" r="5" fill="#66713E" />
        <rect x="345" y="62" width="30" height="18" rx="4" fill="#EAE2D5" stroke="#49352C" strokeWidth="1.2" />
        <rect x="385" y="62" width="30" height="18" rx="4" fill="#EAE2D5" stroke="#49352C" strokeWidth="1.2" />
        <rect x="425" y="62" width="30" height="18" rx="4" fill="#EAE2D5" stroke="#49352C" strokeWidth="1.2" />
        <rect x="345" y="165" width="30" height="18" rx="4" fill="#EAE2D5" stroke="#49352C" strokeWidth="1.2" />
        <rect x="385" y="165" width="30" height="18" rx="4" fill="#EAE2D5" stroke="#49352C" strokeWidth="1.2" />
        <rect x="425" y="165" width="30" height="18" rx="4" fill="#EAE2D5" stroke="#49352C" strokeWidth="1.2" />
        <text x="400" y="55" textAnchor="middle" fill="#49352C" fontSize="11" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1.5">
          DINING
        </text>

        {/* Living */}
        <rect x="290" y="240" width="230" height="160" rx="12" fill="#F0E8DC" stroke="#D8CDBB" strokeWidth="1" strokeDasharray="4 3" />
        <path
          d="M310 260 L470 260 C480 260 488 268 488 278 L488 330 C488 340 480 348 470 348 L440 348 L440 300 L310 300 Z"
          fill="#FAF6EE"
          stroke="#49352C"
          strokeWidth="1.8"
        />
        <line x1="310" y1="275" x2="475" y2="275" stroke="#D8CDBB" strokeWidth="1.2" />
        <line x1="475" y1="275" x2="475" y2="348" stroke="#D8CDBB" strokeWidth="1.2" />
        <rect x="320" y="263" width="20" height="18" rx="3" fill="#66713E" opacity="0.8" />
        <rect x="465" y="280" width="18" height="20" rx="3" fill="#C9A982" opacity="0.8" />
        <circle cx="370" cy="340" r="24" fill="#EAE2D5" stroke="#49352C" strokeWidth="1.6" />
        <circle cx="410" cy="355" r="18" fill="#D8CDBB" stroke="#49352C" strokeWidth="1.6" />
        <rect x="320" y="380" width="45" height="35" rx="6" fill="#FAF6EE" stroke="#49352C" strokeWidth="1.4" />
        <line x1="320" y1="405" x2="365" y2="405" stroke="#D8CDBB" strokeWidth="1" />
        <rect x="320" y="435" width="160" height="10" fill="#49352C" rx="2" />
        <text x="400" y="425" textAnchor="middle" fill="#49352C" fontSize="11" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1.5">
          LIVING
        </text>

        {/* Bedroom 2 */}
        <rect x="590" y="90" width="115" height="135" rx="4" fill="#EAE2D5" stroke="#49352C" strokeWidth="1.6" />
        <rect x="585" y="80" width="125" height="15" rx="3" fill="#C9A982" stroke="#49352C" strokeWidth="1.4" />
        <rect x="598" y="100" width="40" height="22" rx="3" fill="#FFFDF7" stroke="#8C7A6B" strokeWidth="1" />
        <rect x="650" y="100" width="40" height="22" rx="3" fill="#FFFDF7" stroke="#8C7A6B" strokeWidth="1" />
        <rect x="715" y="85" width="30" height="110" fill="#FAF4EA" stroke="#49352C" strokeWidth="1.4" />
        <line x1="715" y1="140" x2="745" y2="140" stroke="#49352C" strokeWidth="1" />
        <text x="650" y="255" textAnchor="middle" fill="#49352C" fontSize="11" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1.5">
          BEDROOM 2
        </text>

        {/* Balcony */}
        <line x1="560" y1="440" x2="750" y2="440" stroke="#49352C" strokeWidth="3" strokeDasharray="6 3" />
        <circle cx="630" cy="360" r="16" fill="#D8CDBB" stroke="#49352C" strokeWidth="1.2" />
        <rect x="620" y="335" width="20" height="12" rx="3" fill="#FAF6EE" stroke="#49352C" strokeWidth="1" />
        <rect x="620" y="380" width="20" height="12" rx="3" fill="#FAF6EE" stroke="#49352C" strokeWidth="1" />
        <rect x="690" y="420" width="45" height="15" rx="3" fill="#66713E" opacity="0.8" />
        <circle cx="700" cy="415" r="5" fill="#5E6941" />
        <circle cx="715" cy="412" r="6" fill="#5E6941" />
        <circle cx="728" cy="415" r="5" fill="#5E6941" />

        {/* North Arrow */}
        <circle cx="720" cy="70" r="12" fill="#FAF6EE" stroke="#49352C" strokeWidth="1" />
        <path d="M720 62 L724 72 L720 70 L716 72 Z" fill="#49352C" />
        <text x="720" y="60" textAnchor="middle" fill="#49352C" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
          N
        </text>
      </svg>

      {/* Floating Blueprint Badge */}
      <div className="absolute bottom-4 right-4 bg-paper-card/95 backdrop-blur-md px-4 py-2 rounded-xl border border-stone/50 shadow-sm flex items-center gap-2 select-none">
        <span className="w-2 h-2 rounded-full bg-sunflower inline-block animate-pulse" />
        <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-brown">
          FURNITURE LAYOUT PLAN
        </span>
      </div>
    </div>
  );
}
