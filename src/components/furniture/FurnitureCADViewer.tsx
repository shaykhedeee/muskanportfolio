"use client";

import React, { useState } from "react";
import { FurnitureCADData, FurnitureDimensionMm } from "@/types/project";
import { Maximize2, Layers, CheckCircle2, Sliders, Info, Ruler } from "lucide-react";
import { cn } from "@/lib/cn";

interface FurnitureCADViewerProps {
  itemTitle: string;
  itemNumber: string;
  dimensionsMm: FurnitureDimensionMm;
  cadData: FurnitureCADData;
}

export function FurnitureCADViewer({
  itemTitle,
  itemNumber,
  dimensionsMm,
  cadData,
}: FurnitureCADViewerProps) {
  const [activeView, setActiveView] = useState<"front" | "section" | "plan">("front");
  const [showDimensions, setShowDimensions] = useState(true);
  const [showSystem32Grid, setShowSystem32Grid] = useState(true);
  const [showDatums, setShowDatums] = useState(true);

  const { width, depth, height } = dimensionsMm;

  return (
    <div className="bg-charcoal text-paper rounded-3xl overflow-hidden border border-stone/30 shadow-2xl">
      {/* CAD Toolbar Header */}
      <div className="px-6 py-4 bg-[#141517] border-b border-stone/20 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
            Vector CAD Elevation Engine
          </span>
          <span className="text-xs text-paper-card/40 font-mono">|</span>
          <span className="font-mono text-xs text-paper/80 font-medium">
            {cadData.drawingNumber}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-stone/20 text-[10px] font-mono text-paper-card/70 border border-stone/30">
            Scale {cadData.scale}
          </span>
        </div>

        {/* Orthographic Projection View Selector */}
        <div className="flex items-center gap-1.5 bg-[#202226] p-1 rounded-xl border border-stone/20">
          <button
            onClick={() => setActiveView("front")}
            className={cn(
              "px-3 py-1 text-xs font-mono rounded-lg transition-colors cursor-pointer",
              activeView === "front"
                ? "bg-emerald-600 text-white font-bold shadow-xs"
                : "text-stone/80 hover:text-white"
            )}
          >
            Front Elevation
          </button>
          <button
            onClick={() => setActiveView("section")}
            className={cn(
              "px-3 py-1 text-xs font-mono rounded-lg transition-colors cursor-pointer",
              activeView === "section"
                ? "bg-emerald-600 text-white font-bold shadow-xs"
                : "text-stone/80 hover:text-white"
            )}
          >
            Side Section A-A
          </button>
          <button
            onClick={() => setActiveView("plan")}
            className={cn(
              "px-3 py-1 text-xs font-mono rounded-lg transition-colors cursor-pointer",
              activeView === "plan"
                ? "bg-emerald-600 text-white font-bold shadow-xs"
                : "text-stone/80 hover:text-white"
            )}
          >
            Plan View
          </button>
        </div>
      </div>

      {/* Layer Toggles & Verification Bar */}
      <div className="px-6 py-2.5 bg-[#1a1c20] border-b border-stone/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-4 text-stone/80">
          <span className="flex items-center gap-1.5 text-paper-card">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            Active Layers:
          </span>
          <label className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
            <input
              type="checkbox"
              checked={showDimensions}
              onChange={(e) => setShowDimensions(e.target.checked)}
              className="rounded accent-emerald-500 w-3.5 h-3.5 cursor-pointer"
            />
            <span className={showDimensions ? "text-emerald-400 font-medium" : "text-stone/60"}>
              Dimensions (mm)
            </span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
            <input
              type="checkbox"
              checked={showSystem32Grid}
              onChange={(e) => setShowSystem32Grid(e.target.checked)}
              className="rounded accent-cyan-500 w-3.5 h-3.5 cursor-pointer"
            />
            <span className={showSystem32Grid ? "text-cyan-400 font-medium" : "text-stone/60"}>
              System 32mm Grid
            </span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
            <input
              type="checkbox"
              checked={showDatums}
              onChange={(e) => setShowDatums(e.target.checked)}
              className="rounded accent-amber-500 w-3.5 h-3.5 cursor-pointer"
            />
            <span className={showDatums ? "text-amber-400 font-medium" : "text-stone/60"}>
              Datums (FFL ±0.00)
            </span>
          </label>
        </div>

        <div className="flex items-center gap-2 text-stone/60">
          <Info className="w-3.5 h-3.5 text-stone/40" />
          <span>All dimensions in millimeters (mm) • Tolerance: ±{dimensionsMm.toleranceMm || 1}mm</span>
        </div>
      </div>

      {/* Interactive Blueprint Canvas */}
      <div className="relative p-6 md:p-10 bg-[#0f1115] overflow-x-auto min-h-[440px] flex items-center justify-center">
        {/* Architectural Blueprint Grid Background */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #38bdf8 1px, transparent 1px),
              linear-gradient(to bottom, #38bdf8 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Dynamic Architectural SVG Drawing */}
        <div className="relative z-10 w-full max-w-4xl py-6 flex flex-col items-center">
          <svg
            viewBox="0 0 900 480"
            className="w-full h-auto drop-shadow-md select-none font-mono"
            style={{ maxHeight: "460px" }}
          >
            <defs>
              {/* Hatching patterns for materials */}
              <pattern id="oakGrainHatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#4a5568" strokeWidth="1" opacity="0.6" />
              </pattern>
              <pattern id="travertineHatch" width="12" height="6" patternUnits="userSpaceOnUse">
                <line x1="2" y1="2" x2="10" y2="2" stroke="#d69e2e" strokeWidth="0.8" opacity="0.4" />
                <line x1="6" y1="5" x2="11" y2="5" stroke="#d69e2e" strokeWidth="0.8" opacity="0.4" />
              </pattern>
              <pattern id="system32Dots" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="8" cy="8" r="1" fill="#38bdf8" opacity="0.5" />
              </pattern>
              {/* Arrow Markers for CAD Dimensions */}
              <marker id="cadArrowStart" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#10b981" />
              </marker>
              <marker id="cadArrowEnd" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#10b981" />
              </marker>
              <marker id="datumMarker" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6">
                <circle cx="5" cy="5" r="3" fill="#f59e0b" />
              </marker>
            </defs>

            {/* FFL Datum Baseline */}
            {showDatums && (
              <g className="transition-opacity duration-300">
                <line x1="50" y1="410" x2="850" y2="410" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6,4" />
                <text x="55" y="425" fill="#f59e0b" fontSize="10" fontWeight="bold">
                  FFL ±0.00 (FINISHED FLOOR LEVEL)
                </text>
              </g>
            )}

            {/* FRONT ELEVATION VIEW */}
            {activeView === "front" && (
              <g>
                {/* 30mm Scribing Filler Left & Right (if applicable) */}
                {cadData.fillerSpecification.includes("30mm") && (
                  <>
                    <rect x="140" y="70" width="20" height="340" fill="#2d3748" stroke="#4a5568" strokeWidth="1" strokeDasharray="3,2" />
                    <text x="142" y="240" fill="#a0aec0" fontSize="8" transform="rotate(-90 142,240)">
                      30mm SCRIBE FILLER
                    </text>
                    <rect x="740" y="70" width="20" height="340" fill="#2d3748" stroke="#4a5568" strokeWidth="1" strokeDasharray="3,2" />
                    <text x="752" y="240" fill="#a0aec0" fontSize="8" transform="rotate(-90 752,240)">
                      30mm SCRIBE FILLER
                    </text>
                  </>
                )}

                {/* Main Cabinet Elevation Body */}
                <rect
                  x="160"
                  y="120"
                  width="580"
                  height="260"
                  rx="4"
                  fill="#1a202c"
                  stroke="#e2e8f0"
                  strokeWidth="2"
                />

                {/* System 32 Grid Overlay */}
                {showSystem32Grid && (
                  <rect
                    x="170"
                    y="130"
                    width="560"
                    height="240"
                    fill="url(#system32Dots)"
                    className="pointer-events-none"
                  />
                )}

                {/* Plinth / Legs */}
                <rect x="190" y="380" width="520" height="30" fill="#2d3748" stroke="#cbd5e1" strokeWidth="1.5" />
                <text x="450" y="400" fill="#94a3b8" fontSize="9" textAnchor="middle">
                  RECESSED PLINTH BASE (+{dimensionsMm.clearanceMm || 100}mm)
                </text>

                {/* Internal Carcass Bay Divisions (Equal distribution) */}
                <line x1="305" y1="120" x2="305" y2="380" stroke="#718096" strokeWidth="1.5" strokeDasharray="4,2" />
                <line x1="450" y1="120" x2="450" y2="380" stroke="#718096" strokeWidth="1.5" strokeDasharray="4,2" />
                <line x1="595" y1="120" x2="595" y2="380" stroke="#718096" strokeWidth="1.5" strokeDasharray="4,2" />

                {/* Front Shutter Fluting / Design Detailing */}
                <path
                  d="M170 140 L295 140 M170 180 L295 180 M170 220 L295 220 M170 260 L295 260 M170 300 L295 300 M170 340 L295 340"
                  stroke="#4a5568"
                  strokeWidth="0.8"
                />
                <path
                  d="M315 140 L440 140 M315 180 L440 180 M315 220 L440 220 M315 260 L440 260 M315 300 L440 300 M315 340 L440 340"
                  stroke="#4a5568"
                  strokeWidth="0.8"
                />
                <path
                  d="M460 140 L585 140 M460 180 L585 180 M460 220 L585 220 M460 260 L585 260 M460 300 L585 300 M460 340 L585 340"
                  stroke="#4a5568"
                  strokeWidth="0.8"
                />
                <path
                  d="M605 140 L730 140 M605 180 L730 180 M605 220 L730 220 M605 260 L730 260 M605 300 L730 300 M605 340 L730 340"
                  stroke="#4a5568"
                  strokeWidth="0.8"
                />

                {/* Countertop / Top Cap */}
                <rect x="156" y="108" width="588" height="12" rx="2" fill="#2d3748" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="450" y="117" fill="#38bdf8" fontSize="8" textAnchor="middle">
                  {materialsPreviewLabel(itemTitle)}
                </text>

                {/* Front Dimension Chains */}
                {showDimensions && (
                  <g className="transition-opacity duration-300">
                    {/* Width Chain (Top) */}
                    <line x1="160" y1="75" x2="740" y2="75" stroke="#10b981" strokeWidth="1.2" markerStart="url(#cadArrowStart)" markerEnd="url(#cadArrowEnd)" />
                    <line x1="160" y1="70" x2="160" y2="108" stroke="#10b981" strokeWidth="0.8" strokeDasharray="2,2" />
                    <line x1="740" y1="70" x2="740" y2="108" stroke="#10b981" strokeWidth="0.8" strokeDasharray="2,2" />
                    <rect x="400" y="65" width="100" height="20" rx="4" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
                    <text x="450" y="79" fill="#a7f3d0" fontSize="11" fontWeight="bold" textAnchor="middle">
                      {width} mm
                    </text>

                    {/* Height Chain (Right) */}
                    <line x1="785" y1="108" x2="785" y2="410" stroke="#10b981" strokeWidth="1.2" markerStart="url(#cadArrowStart)" markerEnd="url(#cadArrowEnd)" />
                    <line x1="744" y1="108" x2="795" y2="108" stroke="#10b981" strokeWidth="0.8" strokeDasharray="2,2" />
                    <line x1="710" y1="410" x2="795" y2="410" stroke="#10b981" strokeWidth="0.8" strokeDasharray="2,2" />
                    <rect x="800" y="245" width="75" height="20" rx="4" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
                    <text x="837" y="259" fill="#a7f3d0" fontSize="11" fontWeight="bold" textAnchor="middle">
                      {height} mm
                    </text>
                  </g>
                )}
              </g>
            )}

            {/* SIDE SECTION A-A VIEW */}
            {activeView === "section" && (
              <g>
                {/* Back Wall Representation */}
                <rect x="220" y="60" width="20" height="350" fill="#334155" stroke="#64748b" strokeWidth="1" />
                <line x1="220" y1="60" x2="220" y2="410" stroke="#94a3b8" strokeWidth="1.5" />
                <text x="210" y="200" fill="#94a3b8" fontSize="9" transform="rotate(-90 210,200)" textAnchor="middle">
                  MASONRY WALL LINE
                </text>

                {/* Section Cut of Cabinet Carcass */}
                <rect x="260" y="120" width="280" height="260" fill="#1e293b" stroke="#e2e8f0" strokeWidth="2" />
                
                {/* 18mm Carcass Top & Bottom Panels */}
                <rect x="260" y="120" width="280" height="14" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
                <rect x="260" y="366" width="280" height="14" fill="#475569" stroke="#94a3b8" strokeWidth="1" />

                {/* 8mm Backing Panel with 18mm Air Cavity */}
                <rect x="280" y="134" width="8" height="232" fill="#64748b" />
                <text x="272" y="250" fill="#38bdf8" fontSize="7" transform="rotate(-90 272,250)">
                  20mm REAR AIR VOID
                </text>

                {/* System 32 Line Boring Hole Centers */}
                {showSystem32Grid && (
                  <g>
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => (
                      <g key={idx}>
                        <circle cx="317" cy={160 + idx * 26} r="2.5" fill="#38bdf8" />
                        <circle cx="503" cy={160 + idx * 26} r="2.5" fill="#38bdf8" />
                      </g>
                    ))}
                    <text x="317" y="148" fill="#38bdf8" fontSize="7" textAnchor="middle">
                      37mm
                    </text>
                  </g>
                )}

                {/* Internal Adjustable Shelf */}
                <rect x="288" y="238" width="232" height="14" fill="#475569" stroke="#94a3b8" strokeWidth="1" />

                {/* Front Shutter Build-up (18mm core + 2mm finish) */}
                <rect x="540" y="112" width="18" height="268" rx="2" fill="#c2a378" stroke="#f6ad55" strokeWidth="1.5" />
                <text x="575" y="250" fill="#f6ad55" fontSize="8" transform="rotate(-90 575,250)" textAnchor="middle">
                  18+2mm SHUTTER
                </text>

                {/* Section Depth Dimension Chain */}
                {showDimensions && (
                  <g className="transition-opacity duration-300">
                    <line x1="260" y1="85" x2="558" y2="85" stroke="#10b981" strokeWidth="1.2" markerStart="url(#cadArrowStart)" markerEnd="url(#cadArrowEnd)" />
                    <line x1="260" y1="80" x2="260" y2="120" stroke="#10b981" strokeWidth="0.8" strokeDasharray="2,2" />
                    <line x1="558" y1="80" x2="558" y2="112" stroke="#10b981" strokeWidth="0.8" strokeDasharray="2,2" />
                    <rect x="365" y="75" width="90" height="20" rx="4" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
                    <text x="410" y="89" fill="#a7f3d0" fontSize="11" fontWeight="bold" textAnchor="middle">
                      {depth} mm
                    </text>

                    {/* Front Setback Callout */}
                    <line x1="500" y1="425" x2="540" y2="425" stroke="#f59e0b" strokeWidth="1" markerEnd="url(#datumMarker)" />
                    <text x="520" y="445" fill="#f59e0b" fontSize="8" textAnchor="middle">
                      37mm SETBACK
                    </text>
                  </g>
                )}
              </g>
            )}

            {/* PLAN VIEW (TOP DOWN) */}
            {activeView === "plan" && (
              <g>
                {/* Wall Baseline */}
                <rect x="130" y="90" width="640" height="15" fill="#334155" stroke="#64748b" strokeWidth="1" />
                <text x="450" y="82" fill="#94a3b8" fontSize="9" textAnchor="middle">
                  REAR ARCHITECTURAL WALL
                </text>

                {/* Plan Footprint */}
                <rect x="160" y="130" width="580" height="220" rx="4" fill="#1e293b" stroke="#e2e8f0" strokeWidth="2" />
                
                {/* 4 Internal Cabinet Bays */}
                <line x1="305" y1="130" x2="305" y2="350" stroke="#718096" strokeWidth="1.5" strokeDasharray="4,2" />
                <line x1="450" y1="130" x2="450" y2="350" stroke="#718096" strokeWidth="1.5" strokeDasharray="4,2" />
                <line x1="595" y1="130" x2="595" y2="350" stroke="#718096" strokeWidth="1.5" strokeDasharray="4,2" />

                {/* Cable Port Grommets & Sockets */}
                <circle cx="230" cy="180" r="10" fill="#2d3748" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="230" y="210" fill="#38bdf8" fontSize="8" textAnchor="middle">
                  60mm Grommet
                </text>

                <circle cx="670" cy="180" r="10" fill="#2d3748" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="670" y="210" fill="#38bdf8" fontSize="8" textAnchor="middle">
                  60mm Grommet
                </text>

                {/* Door Opening Swing Arcs (Plan View) */}
                <path d="M 160,350 A 145,145 0 0,0 305,420" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 305,350 A 145,145 0 0,0 450,420" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 595,350 A 145,145 0 0,0 450,420" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 740,350 A 145,145 0 0,0 595,420" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />

                {/* Plan Dimensions */}
                {showDimensions && (
                  <g className="transition-opacity duration-300">
                    <line x1="770" y1="130" x2="770" y2="350" stroke="#10b981" strokeWidth="1.2" markerStart="url(#cadArrowStart)" markerEnd="url(#cadArrowEnd)" />
                    <line x1="740" y1="130" x2="780" y2="130" stroke="#10b981" strokeWidth="0.8" strokeDasharray="2,2" />
                    <line x1="740" y1="350" x2="780" y2="350" stroke="#10b981" strokeWidth="0.8" strokeDasharray="2,2" />
                    <rect x="785" y="230" width="85" height="20" rx="4" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
                    <text x="827" y="244" fill="#a7f3d0" fontSize="11" fontWeight="bold" textAnchor="middle">
                      {depth} mm
                    </text>
                  </g>
                )}
              </g>
            )}

            {/* Drawing Title Stamp Block */}
            <g transform="translate(50, 20)">
              <rect x="0" y="0" width="220" height="42" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
              <text x="12" y="16" fill="#f8fafc" fontSize="10" fontWeight="bold">
                {itemNumber} • {itemTitle}
              </text>
              <text x="12" y="32" fill="#94a3b8" fontSize="8">
                ORTHOGRAPHIC VIEW: {activeView.toUpperCase()} • mm
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Verified Dimension Chain Breakdown & Scribing Specs */}
      <div className="p-6 md:p-8 bg-[#16181c] border-t border-stone/20 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h4 className="text-xs uppercase tracking-wider font-semibold text-emerald-400 mb-3 font-mono flex items-center gap-2">
            <Ruler className="w-4 h-4 text-emerald-400" />
            Continuous Dimension Chain (Evidence-First Register)
          </h4>
          <div className="space-y-2.5">
            {cadData.dimensionChains.map((chain, idx) => (
              <div
                key={idx}
                className="p-3 bg-[#20232a] rounded-xl border border-stone/20 flex items-start justify-between gap-4 font-mono text-xs"
              >
                <div>
                  <div className="text-paper/90 font-medium">{chain.label}</div>
                  <div className="text-[11px] text-stone/70 mt-0.5">{chain.arithmetic}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-emerald-400 font-bold">{chain.dimension}</div>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-950/60 text-emerald-300 uppercase tracking-widest border border-emerald-800/40">
                    {chain.verifiedStatus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider font-semibold text-cyan-400 mb-3 font-mono flex items-center gap-2">
            <Sliders className="w-4 h-4 text-cyan-400" />
            System 32 & Wall Interface Specifications
          </h4>
          <div className="bg-[#20232a] p-4 rounded-2xl border border-stone/20 space-y-3 font-mono text-xs">
            <div>
              <span className="text-stone/60 uppercase text-[10px] block mb-1">
                System 32 Boring Pitch:
              </span>
              <span className="text-paper/90 leading-relaxed block">
                {cadData.system32Pitch}
              </span>
            </div>

            <div className="pt-2 border-t border-stone/20">
              <span className="text-stone/60 uppercase text-[10px] block mb-1">
                30mm Dummy Scribing Filler Specification:
              </span>
              <span className="text-paper/90 leading-relaxed block">
                {cadData.fillerSpecification}
              </span>
            </div>

            <div className="pt-2 border-t border-stone/20">
              <span className="text-stone/60 uppercase text-[10px] block mb-1">
                Datum Anchor:
              </span>
              <span className="text-amber-400 leading-relaxed block">
                {cadData.datumReference}
              </span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-stone/10 rounded-xl border border-stone/20 text-[11px] font-sans text-stone/80 leading-relaxed">
            <strong>Shop Drawing Fabrication Rule:</strong> Never invent dimensions from camera perspective. CNC cutting panels must adhere strictly to verified millwork tolerances.
          </div>
        </div>
      </div>
    </div>
  );
}

function materialsPreviewLabel(title: string): string {
  if (title.includes("Travertine")) return "HONED TRAVERTINE (20mm)";
  if (title.includes("Corian")) return "DUPONT CORIAN (12mm SEAMLESS)";
  if (title.includes("Marble")) return "NERO MARQUINA MARBLE (20mm)";
  if (title.includes("Walnut")) return "AMERICAN WALNUT VENEER (35mm)";
  if (title.includes("Teak")) return "SOLID PLANTATION TEAK (35mm)";
  return "ARCHITECTURAL TOP PROFILE";
}
