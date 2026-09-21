"use client";

import React from "react";
import Image from "next/image";
import { SpatialHotspot } from "@/types/project";

interface SpatialFloorPlanProps {
  activeHotspot: SpatialHotspot | null;
  onSelectHotspot?: (hotspot: SpatialHotspot) => void;
  hotspots?: SpatialHotspot[];
  title?: string;
  floorPlanImage?: string;
  className?: string;
}

export const SpatialFloorPlan: React.FC<SpatialFloorPlanProps> = ({
  activeHotspot,
  onSelectHotspot,
  hotspots = [],
  title = "Furniture Layout",
  floorPlanImage,
  className = "",
}) => {
  const isHs01 = activeHotspot?.id === "01";
  const isHs02 = activeHotspot?.id === "02";
  const isHs03 = activeHotspot?.id === "03";
  const isHs04 = activeHotspot?.id === "04";
  const isHs05 = activeHotspot?.id === "05";

  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      {/* Floor Plan Card Container */}
      <div className="relative w-full aspect-[4/4.8] max-w-[360px] bg-[#FAF6EE] rounded-3xl p-4 sm:p-5 border border-stone/40 shadow-md overflow-hidden group">
        
        {/* Top Header: Scale, Drawing Reference, North Compass */}
        <div className="absolute top-3 left-4 right-4 flex items-center justify-between pointer-events-none z-10 border-b border-stone/25 pb-1.5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sunflower inline-block" />
            <span className="text-[9px] font-mono tracking-widest uppercase text-brown font-semibold">
              PLAN REF: MP-2026-A1
            </span>
          </div>
          <span className="text-[8px] font-mono uppercase px-2 py-0.5 rounded-full bg-paper border border-stone/30 text-olive font-bold tracking-wider">
            SCALE 1:50 · LEVEL 01
          </span>
        </div>

        {/* Floor Plan Display: Image or SVG */}
        {floorPlanImage ? (
          <div className="relative w-full h-full pt-8 pb-7 flex items-center justify-center">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/40 border border-stone/20 shadow-inner">
              <Image
                src={floorPlanImage}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-contain p-1"
                priority
              />
              {/* Interactive Synced Hotspot Markers */}
              {hotspots.map((hs) => {
                const isSelected = activeHotspot?.id === hs.id;
                return (
                  <button
                    key={`plan-hs-${hs.id}`}
                    type="button"
                    onClick={() => onSelectHotspot?.(hs)}
                    style={{ left: `${hs.planX}%`, top: `${hs.planY}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-300 z-20 ${
                      isSelected
                        ? "w-8 h-8 bg-sunflower border-2 border-brown shadow-lg scale-110"
                        : "w-6 h-6 bg-[#FAF6EE] border border-brown/70 hover:bg-sunflower hover:border-brown shadow-sm"
                    }`}
                    title={hs.title}
                  >
                    <span className={`text-[10px] font-mono font-bold ${isSelected ? "text-brown font-extrabold" : "text-brown"}`}>
                      {hs.id}
                    </span>
                    {isSelected && (
                      <span className="absolute inset-0 rounded-full bg-sunflower animate-ping opacity-60 pointer-events-none" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <svg
            viewBox="0 0 440 500"
            className="w-full h-full pt-4 select-none"
            aria-label="Architectural Furniture Floor Plan"
          >
          <defs>
            {/* Structural Concrete/Masonry Hatch Pattern */}
            <pattern
              id="wallHatch"
              width="6"
              height="6"
              patternTransform="rotate(45 0 0)"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="6"
                stroke="rgba(73,53,44,0.3)"
                strokeWidth="1.2"
              />
            </pattern>

            {/* Subtle Tile Grid Pattern */}
            <pattern id="tileGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <rect width="30" height="30" fill="none" stroke="rgba(73,53,44,0.06)" strokeWidth="0.75" />
            </pattern>

            {/* Subtle Timber Flooring Planks */}
            <pattern id="woodPlanks" width="60" height="12" patternUnits="userSpaceOnUse">
              <rect width="60" height="12" fill="none" stroke="rgba(73,53,44,0.05)" strokeWidth="0.6" />
              <line x1="30" y1="0" x2="30" y2="12" stroke="rgba(73,53,44,0.05)" strokeWidth="0.6" />
            </pattern>

            {/* Glowing yellow drop shadow for selected zones */}
            <filter id="yellowZoneGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#FFC928" floodOpacity="0.6" />
            </filter>

            {/* Pin Glow */}
            <filter id="pinGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. ARCHITECTURAL NORTH ARROW & COMPASS ROSE */}
          <g id="compass-rose" transform="translate(390, 48)">
            <circle cx="0" cy="0" r="14" fill="#FAF6EE" stroke="#49352C" strokeWidth="1" strokeDasharray="2 1" />
            <polygon points="0,-12 4,0 0,10 -4,0" fill="#49352C" />
            <polygon points="0,-12 4,0 0,-1" fill="#FFC928" />
            <text x="0" y="-15" textAnchor="middle" className="text-[8px] font-mono font-bold fill-brown">N</text>
          </g>

          {/* 2. EXTERIOR DIMENSION STRINGS WITH 45-DEG TICK MARKS */}
          {/* Top Dimension String: Width 7,000mm */}
          <g id="dim-top" className="opacity-70">
            <line x1="45" y1="36" x2="375" y2="36" stroke="#49352C" strokeWidth="0.8" />
            <line x1="40" y1="41" x2="50" y2="31" stroke="#49352C" strokeWidth="1.2" />
            <line x1="225" y1="41" x2="235" y2="31" stroke="#49352C" strokeWidth="1.2" />
            <line x1="370" y1="41" x2="380" y2="31" stroke="#49352C" strokeWidth="1.2" />
            <text x="135" y="32" textAnchor="middle" className="text-[7.5px] font-mono fill-brown-soft">3,400</text>
            <text x="300" y="32" textAnchor="middle" className="text-[7.5px] font-mono fill-brown-soft">3,600</text>
          </g>

          {/* Left Dimension String: Length 6,800mm */}
          <g id="dim-left" className="opacity-70">
            <line x1="28" y1="55" x2="28" y2="445" stroke="#49352C" strokeWidth="0.8" />
            <line x1="23" y1="60" x2="33" y2="50" stroke="#49352C" strokeWidth="1.2" />
            <line x1="23" y1="265" x2="33" y2="255" stroke="#49352C" strokeWidth="1.2" />
            <line x1="23" y1="450" x2="33" y2="440" stroke="#49352C" strokeWidth="1.2" />
            <text x="22" y="160" transform="rotate(-90 22 160)" textAnchor="middle" className="text-[7.5px] font-mono fill-brown-soft">4,200</text>
            <text x="22" y="355" transform="rotate(-90 22 355)" textAnchor="middle" className="text-[7.5px] font-mono fill-brown-soft">2,600</text>
          </g>

          {/* 3. FLOOR TEXTURES (Tile grid in dining, wood planks in living) */}
          <rect x="50" y="55" width="320" height="390" fill="url(#tileGrid)" />
          <rect x="150" y="210" width="130" height="180" fill="url(#woodPlanks)" />

          {/* 4. ACTIVE LIVING & DINING ROOM WASH */}
          <polygon
            points="55,60 365,60 365,400 200,400 200,440 55,440"
            fill={activeHotspot ? "rgba(255, 201, 40, 0.16)" : "rgba(255, 201, 40, 0.10)"}
            stroke="#FFC928"
            strokeWidth="1.6"
            strokeDasharray="4 3"
            className="transition-all duration-500"
          />

          {/* 5. LIVING ROOM DESIGNER AREA RUG */}
          <rect
            x="145"
            y="225"
            width="145"
            height="155"
            rx="16"
            fill="#EEE7DB"
            stroke="rgba(73,53,44,0.25)"
            strokeWidth="1"
            strokeDasharray="3 2"
          />
          <rect
            x="150"
            y="230"
            width="135"
            height="145"
            rx="12"
            fill="none"
            stroke="rgba(73,53,44,0.12)"
            strokeWidth="0.8"
          />

          {/* 6. STRUCTURAL EXTERNAL WALLS (Hatched Core) */}
          <polygon
            points="45,50 375,50 375,445 45,445"
            fill="url(#wallHatch)"
            stroke="#49352C"
            strokeWidth="5"
          />

          {/* INNER WALL PARTITIONS */}
          {/* Kitchen divider wall with door opening */}
          <line x1="230" y1="50" x2="230" y2="175" stroke="#49352C" strokeWidth="4" />
          {/* Foyer Partition Wall */}
          <line x1="45" y1="260" x2="140" y2="260" stroke="#49352C" strokeWidth="3.5" />
          <line x1="140" y1="260" x2="140" y2="445" stroke="#49352C" strokeWidth="3.5" />

          {/* 7. DOORS & ENTRANCE SWINGS */}
          {/* Main Entrance Foyer Door */}
          <path
            d="M 60,445 A 40,40 0 0,1 100,405"
            fill="none"
            stroke="rgba(73,53,44,0.45)"
            strokeWidth="1.2"
            strokeDasharray="2.5 2.5"
          />
          <line x1="60" y1="445" x2="60" y2="405" stroke="#49352C" strokeWidth="2" />

          {/* Terrace Full-Height Sliding Window / Glazing (Right Wall) */}
          <g id="terrace-window" filter={isHs05 ? "url(#yellowZoneGlow)" : undefined}>
            <line x1="375" y1="110" x2="375" y2="330" stroke={isHs05 ? "#FFC928" : "#49352C"} strokeWidth="4.5" />
            <line x1="370" y1="110" x2="370" y2="330" stroke="rgba(73,53,44,0.3)" strokeWidth="1" />
            {/* Organic Sheer Curtain Drapery Line */}
            <path
              d="M 364,115 Q 360,130 364,145 T 364,175 T 364,205 T 364,235 T 364,265 T 364,295 T 364,325"
              fill="none"
              stroke={isHs05 ? "#FFC928" : "#66713E"}
              strokeWidth={isHs05 ? "2.5" : "1.8"}
              strokeDasharray="3 1.5"
            />
          </g>

          {/* 8. INTERACTIVE CIRCULATION PATH (Hotspot 02 Flow) */}
          <path
            d="M 85,390 Q 110,320 180,310 T 260,260 T 300,180"
            fill="none"
            stroke={isHs02 ? "#FFC928" : "rgba(102,113,62,0.35)"}
            strokeWidth={isHs02 ? "2.5" : "1.2"}
            strokeDasharray="4 3"
            className="transition-all duration-300"
          />

          {/* 9. FURNITURE GROUPINGS */}

          {/* A. MEDIA WALL & ACCENT WOOD SLATS (Hotspot 01) */}
          <g id="plan-media-wall" filter={isHs01 ? "url(#yellowZoneGlow)" : undefined}>
            {/* Background fluted wood slats */}
            <rect
              x="75"
              y="53"
              width="145"
              height="18"
              fill="#EADFCF"
              stroke={isHs01 ? "#FFC928" : "#49352C"}
              strokeWidth={isHs01 ? "2" : "1.4"}
            />
            {/* Fine wood slat fluting lines */}
            {[...Array(18)].map((_, i) => (
              <line
                key={`slat-${i}`}
                x1={82 + i * 7.5}
                y1="53"
                x2={82 + i * 7.5}
                y2="71"
                stroke="rgba(73,53,44,0.25)"
                strokeWidth="0.8"
              />
            ))}
            {/* Lower floating credenza depth */}
            <rect
              x="85"
              y="58"
              width="125"
              height="11"
              rx="2"
              fill="#DDD2C1"
              stroke="#49352C"
              strokeWidth="1.2"
            />
            {/* TV Screen projection bar */}
            <line x1="105" y1="52" x2="190" y2="52" stroke="#49352C" strokeWidth="3" />
            <circle cx="147.5" cy="52" r="1.5" fill="#FFC928" />
          </g>

          {/* B. DINING SUITE: MONOLITHIC 8-SEATER TABLE & CHAIRS (Hotspot 03) */}
          <g id="plan-dining-suite" filter={isHs03 ? "url(#yellowZoneGlow)" : undefined}>
            {/* Dual Pedestal Footprint */}
            <ellipse cx="295" cy="120" rx="16" ry="8" fill="rgba(73,53,44,0.12)" />
            <ellipse cx="295" cy="200" rx="16" ry="8" fill="rgba(73,53,44,0.12)" />

            {/* Honed Stone Tabletop */}
            <rect
              x="250"
              y="90"
              width="90"
              height="140"
              rx="16"
              fill="#FAF6EE"
              stroke={isHs03 ? "#FFC928" : "#49352C"}
              strokeWidth={isHs03 ? "2.2" : "1.6"}
            />
            {/* Travertine tabletop subtle veining */}
            <path
              d="M 265,110 Q 295,130 325,115 M 260,195 Q 290,180 325,200"
              fill="none"
              stroke="rgba(73,53,44,0.12)"
              strokeWidth="0.75"
            />
            {/* Twin Ceiling Pendant Light Drop Crosshairs */}
            <circle cx="295" cy="125" r="4" fill="none" stroke="#66713E" strokeWidth="0.8" />
            <line x1="295" y1="118" x2="295" y2="132" stroke="#66713E" strokeWidth="0.6" />
            <line x1="288" y1="125" x2="302" y2="125" stroke="#66713E" strokeWidth="0.6" />

            <circle cx="295" cy="195" r="4" fill="none" stroke="#66713E" strokeWidth="0.8" />
            <line x1="295" y1="188" x2="295" y2="202" stroke="#66713E" strokeWidth="0.6" />
            <line x1="288" y1="195" x2="302" y2="195" stroke="#66713E" strokeWidth="0.6" />

            {/* 8 Ergonomic Sculpted Dining Armchairs */}
            {/* Top row */}
            <rect x="265" y="70" width="24" height="14" rx="4" fill="#EEE6D8" stroke="#49352C" strokeWidth="1" />
            <rect x="301" y="70" width="24" height="14" rx="4" fill="#EEE6D8" stroke="#49352C" strokeWidth="1" />
            {/* Bottom row */}
            <rect x="265" y="236" width="24" height="14" rx="4" fill="#EEE6D8" stroke="#49352C" strokeWidth="1" />
            <rect x="301" y="236" width="24" height="14" rx="4" fill="#EEE6D8" stroke="#49352C" strokeWidth="1" />
            {/* Left flank */}
            <rect x="232" y="110" width="14" height="24" rx="4" fill="#EEE6D8" stroke="#49352C" strokeWidth="1" />
            <rect x="232" y="180" width="14" height="24" rx="4" fill="#EEE6D8" stroke="#49352C" strokeWidth="1" />
            {/* Right flank */}
            <rect x="344" y="110" width="14" height="24" rx="4" fill="#EEE6D8" stroke="#49352C" strokeWidth="1" />
            <rect x="344" y="180" width="14" height="24" rx="4" fill="#EEE6D8" stroke="#49352C" strokeWidth="1" />
          </g>

          {/* C. MODULAR L-SHAPED SECTIONAL & NESTING COFFEE TABLE (Living Lounge) */}
          <g id="plan-living-lounge">
            {/* Sectional Sofa Body */}
            <path
              d="M 160,275 L 265,275 L 265,330 L 225,330 L 225,385 L 160,385 Z"
              fill="#FAF6EE"
              stroke="#49352C"
              strokeWidth="1.6"
            />
            {/* Cushion Division Seams */}
            <line x1="210" y1="275" x2="210" y2="330" stroke="rgba(73,53,44,0.3)" strokeWidth="0.8" />
            <line x1="160" y1="330" x2="225" y2="330" stroke="rgba(73,53,44,0.3)" strokeWidth="0.8" />
            {/* Backrest cushioning depth */}
            <path
              d="M 160,283 L 257,283 L 257,330"
              fill="none"
              stroke="rgba(73,53,44,0.25)"
              strokeWidth="0.75"
            />
            <line x1="168" y1="283" x2="168" y2="385" stroke="rgba(73,53,44,0.25)" strokeWidth="0.75" />

            {/* Decorative Pillows / Scatter Cushions */}
            <rect x="165" y="285" width="14" height="10" rx="3" fill="#D8CDBB" stroke="#49352C" strokeWidth="0.8" transform="rotate(12 165 285)" />
            <rect x="245" y="285" width="14" height="10" rx="3" fill="#D8CDBB" stroke="#49352C" strokeWidth="0.8" transform="rotate(-8 245 285)" />

            {/* Large Honed Travertine Round Cocktail Table */}
            <circle
              cx="210"
              cy="245"
              r="22"
              fill="#FAF6EE"
              stroke="#49352C"
              strokeWidth="1.4"
            />
            <circle
              cx="210"
              cy="245"
              r="17"
              fill="none"
              stroke="rgba(73,53,44,0.15)"
              strokeWidth="0.75"
            />
            {/* Nested Satellite Accent Table */}
            <circle
              cx="230"
              cy="230"
              r="10"
              fill="#DDD2C1"
              stroke="#49352C"
              strokeWidth="1.2"
            />

            {/* Swivel Lounge Accent Chair */}
            <g transform="translate(248, 218) rotate(-35)">
              <rect x="-12" y="-14" width="24" height="28" rx="8" fill="#EEE6D8" stroke="#49352C" strokeWidth="1.2" />
              <path d="M -10,-4 Q 0,-8 10,-4" fill="none" stroke="rgba(73,53,44,0.3)" strokeWidth="0.8" />
            </g>
          </g>

          {/* D. BUILT-IN CABINETRY & CROCKERY DISPLAY (Hotspot 04) */}
          <g id="plan-cabinetry" filter={isHs04 ? "url(#yellowZoneGlow)" : undefined}>
            <rect
              x="240"
              y="53"
              width="105"
              height="18"
              rx="1.5"
              fill="#EADFCF"
              stroke={isHs04 ? "#FFC928" : "#49352C"}
              strokeWidth={isHs04 ? "2" : "1.4"}
            />
            {/* Shelving module divisions */}
            <line x1="275" y1="53" x2="275" y2="71" stroke="rgba(73,53,44,0.3)" strokeWidth="0.9" />
            <line x1="310" y1="53" x2="310" y2="71" stroke="rgba(73,53,44,0.3)" strokeWidth="0.9" />
            {/* Warm LED Light cove line indicator */}
            <line x1="242" y1="70" x2="343" y2="70" stroke="#FFC928" strokeWidth="1.5" strokeDasharray="3 1" />
          </g>

          {/* 10. ARCHITECTURAL ROOM ZONE LABELS */}
          <text
            x="85"
            y="360"
            className="text-[9px] font-sans font-bold tracking-widest fill-brown-soft select-none"
          >
            ENTRY FOYER
          </text>
          <text
            x="170"
            y="212"
            className="text-[11px] font-sans font-extrabold tracking-widest fill-brown select-none"
          >
            LIVING AREA
          </text>
          <text
            x="268"
            y="160"
            className="text-[11px] font-sans font-extrabold tracking-widest fill-brown select-none"
          >
            DINING AREA
          </text>

          {/* 11. DYNAMIC SYNCHRONIZED HOTSPOT PINS 01-05 */}
          {hotspots.map((hs) => {
            const isSelected = activeHotspot?.id === hs.id;
            // Map percentage planX, planY (0-100) to SVG coordinates (0-440, 0-500)
            const cx = (hs.planX / 100) * 440;
            const cy = (hs.planY / 100) * 500;

            return (
              <g
                key={`plan-hs-${hs.id}`}
                className="cursor-pointer transition-transform duration-300 group/pin"
                onClick={() => onSelectHotspot?.(hs)}
              >
                {/* Ripple ring when active */}
                {isSelected && (
                  <circle
                    cx={cx}
                    cy={cy}
                    r="15"
                    fill="none"
                    stroke="#FFC928"
                    strokeWidth="2.5"
                    className="animate-ping opacity-75 origin-center"
                  />
                )}

                {/* Base circle pin */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isSelected ? "10" : "7"}
                  fill={isSelected ? "#FFC928" : "#FAF6EE"}
                  stroke="#49352C"
                  strokeWidth={isSelected ? "2.2" : "1.4"}
                  className="transition-all duration-300 shadow-sm"
                  filter={isSelected ? "url(#pinGlow)" : undefined}
                />

                {/* Number text inside pin */}
                <text
                  x={cx}
                  y={cy + 3.5}
                  textAnchor="middle"
                  className={`text-[8.5px] font-bold font-mono select-none pointer-events-none ${
                    isSelected ? "fill-brown font-extrabold" : "fill-brown font-semibold text-[7.5px]"
                  }`}
                >
                  {hs.id}
                </text>
              </g>
            );
          })}
        </svg>
        )}

        {/* Technical Title Block Footer */}
        <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[9px] text-brown-soft border-t border-stone/30 pt-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sunflower border border-brown/30 inline-block" />
            <span className="font-sans font-semibold text-brown">Active Zone Wash</span>
          </div>
          <span className="font-mono text-[8px] text-olive font-bold">
            {activeHotspot ? `HOTSPOT 0${activeHotspot.id.replace(/\D/g, "")} SELECTED` : "5 ZONES SYNCHRONIZED"}
          </span>
        </div>
      </div>

      {/* Plan Caption */}
      <div className="text-center mt-3 space-y-0.5">
        <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-brown block">
          {title}
        </span>
        <span className="text-[11px] text-brown-soft font-sans">
          AutoCAD Technical Layout · Zoned for Open Gathering &amp; Natural Light
        </span>
      </div>
    </div>
  );
};
