"use client";

import React, { useState } from "react";
import { Maximize2, Layers, Ruler, Compass, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";
import { playTap } from "@/lib/sound";

interface FloorPlanProps {
  className?: string;
}

export function SarthakArchitecturalFloorPlanSvg({ className = "" }: FloorPlanProps) {
  const [activeLayer, setActiveLayer] = useState<"all" | "furniture" | "dimensions">("all");
  const [highlightZone, setHighlightZone] = useState<string | null>(null);

  const zones = [
    { id: "living", name: "Living & Dining", area: "320 sq.ft", note: "Central social spine with 7.2m clear span" },
    { id: "master", name: "Master Suite", area: "245 sq.ft", note: "Bay window daybed & Roman arch headboard" },
    { id: "mandir", name: "Mandir Sanctum", area: "45 sq.ft", note: "Backlit alabaster stone & brass bells" },
    { id: "kitchen", name: "Modular Kitchen", area: "135 sq.ft", note: "Parallel counter with quartz breakfast bar" },
    { id: "foyer", name: "Entrance Foyer", area: "50 sq.ft", note: "Walnut shoe credenza & warm cove arch" },
  ];

  return (
    <div className={cn("bg-[#121316] rounded-3xl border border-stone/30 overflow-hidden shadow-2xl p-4 sm:p-6 text-paper flex flex-col justify-between", className)}>
      {/* CAD Toolbar Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 font-bold uppercase tracking-wider">
            Vector CAD Plan Engine
          </span>
          <span className="text-white/30">|</span>
          <span className="text-white/70">MP/SAR/FP-01</span>
          <span className="text-white/40 hidden sm:inline">(Scale 1:50 @ A3)</span>
        </div>

        {/* Layer Filters */}
        <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/10">
          <button
            onClick={() => {
              playTap();
              setActiveLayer("all");
            }}
            className={cn(
              "px-2.5 py-1 rounded-lg transition-colors cursor-pointer text-[10px]",
              activeLayer === "all" ? "bg-emerald-500 text-charcoal font-bold" : "text-white/60 hover:text-white"
            )}
          >
            All Layers
          </button>
          <button
            onClick={() => {
              playTap();
              setActiveLayer("furniture");
            }}
            className={cn(
              "px-2.5 py-1 rounded-lg transition-colors cursor-pointer text-[10px]",
              activeLayer === "furniture" ? "bg-emerald-500 text-charcoal font-bold" : "text-white/60 hover:text-white"
            )}
          >
            Furniture
          </button>
          <button
            onClick={() => {
              playTap();
              setActiveLayer("dimensions");
            }}
            className={cn(
              "px-2.5 py-1 rounded-lg transition-colors cursor-pointer text-[10px]",
              activeLayer === "dimensions" ? "bg-emerald-500 text-charcoal font-bold" : "text-white/60 hover:text-white"
            )}
          >
            Dimensions
          </button>
        </div>
      </div>

      {/* SVG Vector Drawing Canvas */}
      <div className="relative w-full aspect-[16/10] bg-[#0E1013] rounded-2xl overflow-hidden border border-white/5 shadow-inner">
        {/* Subtle CAD Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <svg
          viewBox="0 0 1000 625"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full select-none"
        >
          {/* North Arrow Symbol */}
          <g transform="translate(930, 45)">
            <circle cx="0" cy="0" r="18" stroke="#52525B" strokeWidth="1.2" fill="#18181B" />
            <polygon points="0,-14 5,10 0,6" fill="#F0B83A" />
            <polygon points="0,-14 -5,10 0,6" fill="#D4D4D8" />
            <text x="0" y="-18" textAnchor="middle" fill="#F0B83A" fontSize="9" fontWeight="bold" fontFamily="monospace">N</text>
          </g>

          {/* Exterior Concrete Walls (Double line with 200mm hatch) */}
          <path
            d="M 60 50 L 940 50 L 940 570 L 60 570 Z"
            stroke="#71717A"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M 68 58 L 932 58 L 932 562 L 68 562 Z"
            stroke="#A1A1AA"
            strokeWidth="1"
            fill="none"
          />

          {/* =========================================================
              ZONE 1: ENTRANCE FOYER (Top Left)
             ========================================================= */}
          <rect
            x="70"
            y="60"
            width="170"
            height="150"
            fill={highlightZone === "foyer" ? "#F0B83A20" : "#18181B"}
            stroke="#52525B"
            strokeWidth="1.5"
            className="transition-colors duration-300"
          />
          <text x="155" y="115" textAnchor="middle" fill="#F4F4F5" fontSize="12" fontWeight="bold" fontFamily="monospace">
            FOYER
          </text>
          <text x="155" y="132" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="monospace">
            1800 × 2400 mm
          </text>
          {/* Foyer Door Swing */}
          <path d="M 70 85 A 45 45 0 0 1 115 130" stroke="#F0B83A" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          <line x1="70" y1="85" x2="70" y2="130" stroke="#F0B83A" strokeWidth="2" />
          {/* Shoe Credenza */}
          <rect x="75" y="170" width="100" height="30" fill="#27272A" stroke="#E4D4B8" strokeWidth="1" rx="2" />
          <text x="125" y="188" textAnchor="middle" fill="#E4D4B8" fontSize="7" fontFamily="monospace">SHOE CONSOLE</text>

          {/* =========================================================
              ZONE 2: SACRED MANDIR SANCTUM (Adjacent to Foyer)
             ========================================================= */}
          <rect
            x="240"
            y="60"
            width="140"
            height="150"
            fill={highlightZone === "mandir" ? "#F0B83A30" : "#221D17"}
            stroke="#EAB308"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            className="transition-colors duration-300"
          />
          <text x="310" y="115" textAnchor="middle" fill="#FDE047" fontSize="11" fontWeight="bold" fontFamily="monospace">
            POOJA MANDIR
          </text>
          <text x="310" y="132" textAnchor="middle" fill="#CA8A04" fontSize="9" fontFamily="monospace">
            1800 × 2100 mm
          </text>
          {/* Alabaster Backdrop line */}
          <line x1="250" y1="70" x2="370" y2="70" stroke="#FDE047" strokeWidth="3" />
          {/* Mandir Pedestal */}
          <rect x="265" y="75" width="90" height="40" fill="#3F2E18" stroke="#EAB308" strokeWidth="1" rx="4" />
          <circle cx="310" cy="95" r="8" stroke="#EAB308" strokeWidth="1" fill="#FEF08A" />

          {/* =========================================================
              ZONE 3: LIVING & DINING CENTRAL SPINE
             ========================================================= */}
          <rect
            x="380"
            y="60"
            width="550"
            height="290"
            fill={highlightZone === "living" ? "#F0B83A20" : "#141619"}
            stroke="#52525B"
            strokeWidth="1.5"
            className="transition-colors duration-300"
          />
          <text x="650" y="110" textAnchor="middle" fill="#FAFAFA" fontSize="14" fontWeight="bold" fontFamily="monospace">
            LIVING &amp; DINING HALL
          </text>
          <text x="650" y="128" textAnchor="middle" fill="#A1A1AA" fontSize="10" fontFamily="monospace">
            7200 × 4200 mm · 320 SQ.FT
          </text>

          {/* Dining Table (6 Seater) */}
          <rect x="420" y="160" width="130" height="75" fill="#27272A" stroke="#E5D8C5" strokeWidth="1.2" rx="6" />
          <text x="485" y="202" textAnchor="middle" fill="#E5D8C5" fontSize="8" fontFamily="monospace">TRAVERTINE DINING</text>
          {/* Dining Chairs */}
          <rect x="440" y="145" width="22" height="12" fill="#3F3F46" rx="2" />
          <rect x="475" y="145" width="22" height="12" fill="#3F3F46" rx="2" />
          <rect x="510" y="145" width="22" height="12" fill="#3F3F46" rx="2" />
          <rect x="440" y="238" width="22" height="12" fill="#3F3F46" rx="2" />
          <rect x="475" y="238" width="22" height="12" fill="#3F3F46" rx="2" />
          <rect x="510" y="238" width="22" height="12" fill="#3F3F46" rx="2" />

          {/* Arched TV Media Wall & Floating Credenza */}
          <rect x="680" y="65" width="200" height="24" fill="#3F3F46" stroke="#F0B83A" strokeWidth="1.5" rx="3" />
          <text x="780" y="80" textAnchor="middle" fill="#F0B83A" fontSize="8" fontWeight="bold" fontFamily="monospace">
            ARCHED TV FEATURE WALL
          </text>
          {/* L-Shape Sectional Sofa */}
          <path
            d="M 680 180 L 860 180 L 860 270 L 800 270 L 800 230 L 680 230 Z"
            fill="#27272A"
            stroke="#D4D4D8"
            strokeWidth="1.2"
          />
          <text x="750" y="210" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="monospace">SECTIONAL LOUNGE</text>
          {/* Coffee Table */}
          <ellipse cx="740" cy="255" rx="35" ry="18" fill="#18181B" stroke="#F0B83A" strokeWidth="1" />

          {/* Balcony Slider Door (Right Wall) */}
          <line x1="930" y1="170" x2="930" y2="280" stroke="#38BDF8" strokeWidth="3" />
          <text x="920" y="230" textAnchor="middle" fill="#38BDF8" fontSize="8" fontFamily="monospace" transform="rotate(-90 920 230)">
            GLAZED BALCONY SLIDER
          </text>

          {/* =========================================================
              ZONE 4: MASTER BEDROOM SUITE (Bottom Right)
             ========================================================= */}
          <rect
            x="540"
            y="350"
            width="390"
            height="210"
            fill={highlightZone === "master" ? "#F0B83A20" : "#181A1D"}
            stroke="#52525B"
            strokeWidth="1.5"
            className="transition-colors duration-300"
          />
          <text x="735" y="380" textAnchor="middle" fill="#FAFAFA" fontSize="13" fontWeight="bold" fontFamily="monospace">
            MASTER BEDROOM SUITE
          </text>
          <text x="735" y="398" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="monospace">
            4500 × 4200 mm · BAY WINDOW SEATING
          </text>

          {/* King Size Bed with Roman Arch Niche */}
          <rect x="630" y="420" width="130" height="130" fill="#27272A" stroke="#E4D4B8" strokeWidth="1.5" rx="4" />
          {/* Pillows */}
          <rect x="645" y="428" width="40" height="24" fill="#52525B" rx="3" />
          <rect x="705" y="428" width="40" height="24" fill="#52525B" rx="3" />
          <text x="695" y="490" textAnchor="middle" fill="#E4D4B8" fontSize="9" fontFamily="monospace">KING BED</text>

          {/* Full Height Wardrobe Wall */}
          <rect x="548" y="420" width="45" height="130" fill="#3F2E18" stroke="#CA8A04" strokeWidth="1.2" rx="2" />
          <text x="570" y="485" textAnchor="middle" fill="#FDE047" fontSize="8" fontFamily="monospace" transform="rotate(-90 570 485)">
            SYSTEM 32 WARDROBE
          </text>

          {/* Bay Window Daybed Seat */}
          <rect x="870" y="420" width="55" height="130" fill="#27272A" stroke="#38BDF8" strokeWidth="1.2" rx="2" />
          <text x="898" y="485" textAnchor="middle" fill="#38BDF8" fontSize="8" fontFamily="monospace" transform="rotate(90 898 485)">
            BAY WINDOW DAYBED
          </text>

          {/* =========================================================
              ZONE 5: KITCHEN & UTILITY (Bottom Left)
             ========================================================= */}
          <rect
            x="70"
            y="210"
            width="310"
            height="210"
            fill={highlightZone === "kitchen" ? "#F0B83A20" : "#17181C"}
            stroke="#52525B"
            strokeWidth="1.5"
            className="transition-colors duration-300"
          />
          <text x="225" y="240" textAnchor="middle" fill="#FAFAFA" fontSize="12" fontWeight="bold" fontFamily="monospace">
            MODULAR KITCHEN &amp; UTILITY
          </text>
          <text x="225" y="256" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="monospace">
            3600 × 3000 mm
          </text>
          {/* L-Shaped Kitchen Counter */}
          <path
            d="M 80 270 L 360 270 L 360 320 L 140 320 L 140 410 L 80 410 Z"
            fill="#27272A"
            stroke="#A1A1AA"
            strokeWidth="1.2"
          />
          <text x="250" y="295" textAnchor="middle" fill="#D4D4D8" fontSize="8" fontFamily="monospace">
            QUARTZ ISLAND &amp; COOKTOP
          </text>

          {/* =========================================================
              ZONE 6: GUEST BEDROOM / STUDY (Bottom Middle-Left)
             ========================================================= */}
          <rect
            x="70"
            y="420"
            width="310"
            height="140"
            fill="#15171A"
            stroke="#52525B"
            strokeWidth="1.5"
          />
          <text x="225" y="480" textAnchor="middle" fill="#FAFAFA" fontSize="12" fontWeight="bold" fontFamily="monospace">
            GUEST BEDROOM / STUDY
          </text>
          <text x="225" y="498" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="monospace">
            3300 × 3600 mm
          </text>

          {/* =========================================================
              DIMENSION STRINGS (Cyan Layer)
             ========================================================= */}
          {(activeLayer === "all" || activeLayer === "dimensions") && (
            <g opacity="0.85">
              {/* Top Overall Dimension */}
              <line x1="60" y1="30" x2="940" y2="30" stroke="#06B6D4" strokeWidth="0.8" />
              <line x1="60" y1="24" x2="60" y2="36" stroke="#06B6D4" strokeWidth="1.2" />
              <line x1="940" y1="24" x2="940" y2="36" stroke="#06B6D4" strokeWidth="1.2" />
              <text x="500" y="24" textAnchor="middle" fill="#06B6D4" fontSize="10" fontWeight="bold" fontFamily="monospace">
                OVERALL WIDTH: 14,800 mm
              </text>

              {/* Left Overall Dimension */}
              <line x1="30" y1="50" x2="30" y2="570" stroke="#06B6D4" strokeWidth="0.8" />
              <line x1="24" y1="50" x2="36" y2="50" stroke="#06B6D4" strokeWidth="1.2" />
              <line x1="24" y1="570" x2="36" y2="570" stroke="#06B6D4" strokeWidth="1.2" />
              <text x="20" y="315" textAnchor="middle" fill="#06B6D4" fontSize="10" fontWeight="bold" fontFamily="monospace" transform="rotate(-90 20 315)">
                OVERALL DEPTH: 9,200 mm
              </text>
            </g>
          )}

          {/* Title Block Box (Bottom Right) */}
          <rect x="70" y="580" width="860" height="35" fill="#18181B" stroke="#3F3F46" strokeWidth="1" />
          <text x="85" y="602" fill="#F0B83A" fontSize="10" fontWeight="bold" fontFamily="monospace">
            PROJECT: THE SARTHAK RESIDENCE (3 BHK)
          </text>
          <text x="500" y="602" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="monospace">
            DWG: MP-SR-FP01 · REVISION 02 · 1,850 SQ.FT
          </text>
          <text x="915" y="602" textAnchor="end" fill="#10B981" fontSize="9" fontWeight="bold" fontFamily="monospace">
            STATUS: APPROVED FOR EXECUTION
          </text>
        </svg>
      </div>

      {/* Interactive Room Inspection Pills */}
      <div className="flex flex-wrap items-center gap-2 pt-4 mt-2 border-t border-white/10">
        <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 mr-1 flex items-center gap-1">
          <Compass className="w-3 h-3 text-emerald-400" />
          Quick Inspect Zone:
        </span>
        {zones.map((z) => (
          <button
            key={z.id}
            onMouseEnter={() => setHighlightZone(z.id)}
            onMouseLeave={() => setHighlightZone(null)}
            onClick={() => {
              playTap();
              setHighlightZone(highlightZone === z.id ? null : z.id);
            }}
            className={cn(
              "px-2.5 py-1 rounded-full text-[11px] font-mono transition-all cursor-pointer",
              highlightZone === z.id
                ? "bg-sunflower text-charcoal font-bold shadow-xs scale-105"
                : "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/30"
            )}
          >
            {z.name} ({z.area})
          </button>
        ))}
      </div>
    </div>
  );
}
