"use client";

import React, { useState } from "react";
import { Maximize2, Layers, Ruler, Compass, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";
import { playTap } from "@/lib/sound";

interface FloorPlanProps {
  className?: string;
}

export function VivekArchitecturalFloorPlanSvg({ className = "" }: FloorPlanProps) {
  const [activeLayer, setActiveLayer] = useState<"all" | "furniture" | "dimensions">("all");
  const [highlightZone, setHighlightZone] = useState<string | null>(null);

  const zones = [
    { id: "living", name: "Living & Media Spine", area: "310 sq.ft", note: "Arched stone TV feature wall & acoustic oak battens" },
    { id: "kitchen", name: "Modular Kitchen & Island", area: "155 sq.ft", note: "Gola handleless cabinets & smoked glass vitrines" },
    { id: "master", name: "Master Suite", area: "230 sq.ft", note: "Curved headboard, System 32 rattan wardrobe & bay desk" },
    { id: "dining", name: "Dining & Buffet", area: "140 sq.ft", note: "6-seater oak table with fluted partition screen" },
    { id: "foyer", name: "Foyer & Gallery", area: "65 sq.ft", note: "Walnut arch console & 2700K perimeter cove" },
  ];

  return (
    <div className={cn("bg-[#111317] rounded-3xl border border-stone/30 overflow-hidden shadow-2xl p-4 sm:p-6 text-paper flex flex-col justify-between", className)}>
      {/* CAD Toolbar Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-400 font-bold uppercase tracking-wider">
            Vector CAD Plan Engine
          </span>
          <span className="text-white/30">|</span>
          <span className="text-white/70">MP/VVK/DWG-00</span>
          <span className="text-white/40 hidden sm:inline">(Scale 1:50 @ A3 · Mr. Vivek 3 BHK)</span>
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
              activeLayer === "all" ? "bg-amber-400 text-charcoal font-bold" : "text-white/60 hover:text-white"
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
              activeLayer === "furniture" ? "bg-amber-400 text-charcoal font-bold" : "text-white/60 hover:text-white"
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
              activeLayer === "dimensions" ? "bg-amber-400 text-charcoal font-bold" : "text-white/60 hover:text-white"
            )}
          >
            Dimensions
          </button>
        </div>
      </div>

      {/* SVG Vector Drawing Canvas */}
      <div className="relative w-full aspect-[16/10] bg-[#0A0C0F] rounded-2xl overflow-hidden border border-white/5 shadow-inner">
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
            <polygon points="0,-14 5,10 0,6" fill="#F59E0B" />
            <polygon points="0,-14 -5,10 0,6" fill="#D4D4D8" />
            <text x="0" y="-18" textAnchor="middle" fill="#F59E0B" fontSize="9" fontWeight="bold" fontFamily="monospace">N</text>
          </g>

          {/* Exterior Boundary Walls (200mm loadbearing) */}
          <path
            d="M 60 50 L 940 50 L 940 570 L 60 570 Z"
            stroke="#64748B"
            strokeWidth="10"
            strokeLinejoin="round"
          />

          {/* ================= ZONE BACKGROUND HIGHLIGHTS ================= */}
          {/* Foyer */}
          <rect
            x="65"
            y="55"
            width="155"
            height="175"
            fill={highlightZone === "foyer" ? "rgba(245,158,11,0.15)" : "transparent"}
            className="transition-colors duration-300"
          />

          {/* Central Living */}
          <rect
            x="225"
            y="55"
            width="415"
            height="315"
            fill={highlightZone === "living" ? "rgba(245,158,11,0.15)" : "transparent"}
            className="transition-colors duration-300"
          />

          {/* Dining Zone */}
          <rect
            x="225"
            y="375"
            width="415"
            height="190"
            fill={highlightZone === "dining" ? "rgba(245,158,11,0.15)" : "transparent"}
            className="transition-colors duration-300"
          />

          {/* Kitchen */}
          <rect
            x="65"
            y="235"
            width="155"
            height="330"
            fill={highlightZone === "kitchen" ? "rgba(245,158,11,0.15)" : "transparent"}
            className="transition-colors duration-300"
          />

          {/* Master Bedroom Suite */}
          <rect
            x="645"
            y="55"
            width="290"
            height="315"
            fill={highlightZone === "master" ? "rgba(245,158,11,0.15)" : "transparent"}
            className="transition-colors duration-300"
          />

          {/* Bedroom 2 */}
          <rect
            x="645"
            y="375"
            width="290"
            height="190"
            fill="transparent"
          />

          {/* ================= INTERNAL PARTITION WALLS ================= */}
          {/* Foyer / Living Boundary */}
          <line x1="220" y1="50" x2="220" y2="160" stroke="#64748B" strokeWidth="6" />
          <line x1="220" y1="210" x2="220" y2="570" stroke="#64748B" strokeWidth="6" />
          {/* Kitchen / Foyer Divider */}
          <line x1="60" y1="230" x2="220" y2="230" stroke="#64748B" strokeWidth="6" />
          {/* Living / Master Bedroom Divider */}
          <line x1="640" y1="50" x2="640" y2="290" stroke="#64748B" strokeWidth="6" />
          <line x1="640" y1="340" x2="640" y2="570" stroke="#64748B" strokeWidth="6" />
          {/* Master / Bed 2 Divider */}
          <line x1="640" y1="370" x2="940" y2="370" stroke="#64748B" strokeWidth="6" />

          {/* Doors & Swing Arcs */}
          {/* Main Entrance Door */}
          <path d="M 60 120 A 55 55 0 0 1 115 175" stroke="#F59E0B" strokeWidth="1.2" strokeDasharray="3 3" fill="none" />
          <line x1="60" y1="175" x2="115" y2="175" stroke="#F59E0B" strokeWidth="2" />
          <text x="75" y="105" fill="#F59E0B" fontSize="9" fontFamily="monospace" fontWeight="bold">MAIN ENTRY</text>

          {/* Master Door */}
          <path d="M 640 295 A 45 45 0 0 1 685 340" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3" fill="none" />
          <line x1="640" y1="340" x2="685" y2="340" stroke="#CBD5E1" strokeWidth="1.5" />

          {/* Kitchen Fluted Glass Slider Indicator */}
          <line x1="220" y1="290" x2="220" y2="370" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="6 3" />
          <text x="226" y="335" fill="#38BDF8" fontSize="8" fontFamily="monospace">FLUTED GLASS SLIDER</text>

          {/* ================= FURNITURE LAYER ================= */}
          {(activeLayer === "all" || activeLayer === "furniture") && (
            <g className="furniture-layer">
              {/* --- ENTRANCE FOYER --- */}
              {/* Shoe Credenza & Key Tray */}
              <rect x="75" y="65" width="40" height="95" rx="3" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.2" />
              <line x1="95" y1="65" x2="95" y2="160" stroke="#F59E0B" strokeWidth="0.8" />
              {/* Arched Wall Mirror & Cove Glow */}
              <path d="M 75 70 Q 95 62 115 70 L 115 155 Q 95 163 75 155 Z" fill="none" stroke="#F59E0B" strokeWidth="1.2" strokeDasharray="2 2" />
              <text x="95" y="118" textAnchor="middle" fill="#CBD5E1" fontSize="8" fontFamily="monospace">CONSOLE</text>

              {/* --- KITCHEN (DWG-02) --- */}
              {/* Parallel Counters */}
              <rect x="70" y="240" width="36" height="315" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.2" />
              <rect x="175" y="240" width="40" height="230" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.2" />
              {/* Induction Cooktop */}
              <rect x="74" y="320" width="28" height="42" rx="2" fill="#0F172A" stroke="#F59E0B" strokeWidth="1" />
              <circle cx="88" cy="333" r="5" stroke="#F59E0B" strokeWidth="0.8" fill="none" />
              <circle cx="88" cy="349" r="6" stroke="#F59E0B" strokeWidth="0.8" fill="none" />
              {/* Kitchen Sink */}
              <rect x="74" y="440" width="28" height="45" rx="3" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" />
              <circle cx="88" cy="462" r="3" fill="#38BDF8" />
              {/* Breakfast Island with Smoked Glass */}
              <rect x="150" y="480" width="65" height="40" rx="3" fill="#334155" stroke="#F59E0B" strokeWidth="1.2" />
              <circle cx="138" cy="492" r="6" fill="#1E293B" stroke="#CBD5E1" strokeWidth="1" />
              <circle cx="138" cy="510" r="6" fill="#1E293B" stroke="#CBD5E1" strokeWidth="1" />
              <text x="182" y="504" textAnchor="middle" fill="#FDE68A" fontSize="7" fontFamily="monospace">ISLAND</text>

              {/* --- LIVING ROOM (DWG-01) --- */}
              {/* Signature Arched TV Wall & Acoustic Timber Battens */}
              <g transform="translate(235, 60)">
                <rect x="0" y="0" width="180" height="22" rx="3" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                {/* Acoustic Wood Battens (vertical slatted pattern) */}
                {[...Array(16)].map((_, i) => (
                  <line key={i} x1={12 + i * 10} y1="3" x2={12 + i * 10} y2="19" stroke="#92400E" strokeWidth="1.5" />
                ))}
                {/* Arched Stone Backlit Feature Box */}
                <path d="M 45 4 Q 90 -4 135 4 L 135 18 Q 90 26 45 18 Z" fill="#292524" stroke="#F59E0B" strokeWidth="1" />
                {/* 65" 4K OLED TV Display */}
                <line x1="55" y1="11" x2="125" y2="11" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
                {/* Floating Console below */}
                <rect x="25" y="24" width="130" height="18" rx="2" fill="#1E293B" stroke="#CBD5E1" strokeWidth="1" />
                <text x="90" y="36" textAnchor="middle" fill="#FDE68A" fontSize="8" fontFamily="monospace">ARCHED TV WALL (DWG-01)</text>
              </g>

              {/* Linen Sofa & Seating Layout */}
              <rect x="280" y="160" width="160" height="75" rx="8" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.4" />
              {/* Sofa Cushions */}
              <rect x="290" y="170" width="65" height="55" rx="5" fill="#334155" stroke="#64748B" strokeWidth="1" />
              <rect x="365" y="170" width="65" height="55" rx="5" fill="#334155" stroke="#64748B" strokeWidth="1" />
              {/* Travertine Curved Coffee Table */}
              <ellipse cx="360" cy="115" rx="42" ry="24" fill="#334155" stroke="#F59E0B" strokeWidth="1.4" />
              <text x="360" y="118" textAnchor="middle" fill="#CBD5E1" fontSize="7" fontFamily="monospace">TRAVERTINE</text>
              {/* Lounge Armchairs */}
              <circle cx="255" cy="130" r="18" fill="#1E293B" stroke="#CBD5E1" strokeWidth="1" />
              <circle cx="465" cy="130" r="18" fill="#1E293B" stroke="#CBD5E1" strokeWidth="1" />

              {/* --- DINING ZONE --- */}
              <g transform="translate(300, 410)">
                {/* 6-Seater Oak Dining Table */}
                <rect x="0" y="0" width="140" height="75" rx="6" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.4" />
                {/* Dining Chairs */}
                <rect x="20" y="-16" width="24" height="12" rx="2" fill="#334155" stroke="#CBD5E1" strokeWidth="1" />
                <rect x="58" y="-16" width="24" height="12" rx="2" fill="#334155" stroke="#CBD5E1" strokeWidth="1" />
                <rect x="96" y="-16" width="24" height="12" rx="2" fill="#334155" stroke="#CBD5E1" strokeWidth="1" />
                <rect x="20" y="79" width="24" height="12" rx="2" fill="#334155" stroke="#CBD5E1" strokeWidth="1" />
                <rect x="58" y="79" width="24" height="12" rx="2" fill="#334155" stroke="#CBD5E1" strokeWidth="1" />
                <rect x="96" y="79" width="24" height="12" rx="2" fill="#334155" stroke="#CBD5E1" strokeWidth="1" />
                {/* Dining Credenza & Glass Vitrine */}
                <rect x="-55" y="10" width="35" height="75" rx="3" fill="#1E293B" stroke="#94A3B8" strokeWidth="1" />
                <text x="70" y="42" textAnchor="middle" fill="#CBD5E1" fontSize="9" fontFamily="monospace" fontWeight="bold">DINING TABLE</text>
              </g>

              {/* --- MASTER BEDROOM SUITE --- */}
              {/* Master King Bed with Curved Headboard */}
              <g transform="translate(680, 80)">
                {/* Curved Headboard */}
                <path d="M 0 0 Q 75 -12 150 0 L 150 18 Q 75 8 0 18 Z" fill="#78350F" stroke="#F59E0B" strokeWidth="1.5" />
                {/* Mattress & Linen Fold */}
                <rect x="10" y="18" width="130" height="150" rx="4" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.2" />
                <rect x="18" y="24" width="50" height="30" rx="4" fill="#334155" stroke="#64748B" strokeWidth="1" />
                <rect x="82" y="24" width="50" height="30" rx="4" fill="#334155" stroke="#64748B" strokeWidth="1" />
                <rect x="10" y="80" width="130" height="88" rx="2" fill="#334155" stroke="#64748B" strokeWidth="1" />
                {/* Nightstands */}
                <rect x="-24" y="8" width="22" height="28" rx="2" fill="#1E293B" stroke="#F59E0B" strokeWidth="1" />
                <rect x="152" y="8" width="22" height="28" rx="2" fill="#1E293B" stroke="#F59E0B" strokeWidth="1" />
                {/* Bed Title */}
                <text x="75" y="125" textAnchor="middle" fill="#FDE68A" fontSize="9" fontFamily="monospace" fontWeight="bold">MASTER SUITE</text>
              </g>

              {/* Master Wardrobe (System 32 Rattan & Smoked Glass) */}
              <rect x="850" y="100" width="80" height="180" rx="3" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.4" />
              <line x1="850" y1="160" x2="930" y2="160" stroke="#F59E0B" strokeWidth="1" />
              <line x1="850" y1="220" x2="930" y2="220" stroke="#F59E0B" strokeWidth="1" />
              <text x="890" y="195" textAnchor="middle" fill="#CBD5E1" fontSize="7" fontFamily="monospace">SYSTEM 32</text>

              {/* Bay Window Study Desk & Ergonomic Chair */}
              <g transform="translate(680, 275)">
                <rect x="0" y="0" width="110" height="35" rx="3" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.2" />
                {/* Laptop outline */}
                <rect x="42" y="10" width="26" height="16" rx="2" fill="#0F172A" stroke="#38BDF8" strokeWidth="0.8" />
                {/* Desk Chair */}
                <circle cx="55" cy="50" r="12" fill="#334155" stroke="#CBD5E1" strokeWidth="1" />
                <text x="55" y="-5" textAnchor="middle" fill="#38BDF8" fontSize="8" fontFamily="monospace">STUDY NOOK</text>
              </g>

              {/* --- BEDROOM 2 --- */}
              <g transform="translate(680, 400)">
                <rect x="20" y="15" width="120" height="135" rx="4" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.2" />
                <rect x="28" y="22" width="46" height="26" rx="3" fill="#334155" stroke="#64748B" strokeWidth="1" />
                <rect x="86" y="22" width="46" height="26" rx="3" fill="#334155" stroke="#64748B" strokeWidth="1" />
                <rect x="20" y="70" width="120" height="80" rx="2" fill="#334155" stroke="#64748B" strokeWidth="1" />
                {/* Wardrobe */}
                <rect x="170" y="10" width="80" height="140" rx="3" fill="#1E293B" stroke="#94A3B8" strokeWidth="1" />
                <text x="80" y="110" textAnchor="middle" fill="#CBD5E1" fontSize="8" fontFamily="monospace">BEDROOM 2</text>
              </g>
            </g>
          )}

          {/* ================= DIMENSIONS & ANNOTATIONS LAYER ================= */}
          {(activeLayer === "all" || activeLayer === "dimensions") && (
            <g className="dimensions-layer">
              {/* Overall Length Dimension (Top) */}
              <g transform="translate(0, 25)">
                <line x1="60" y1="0" x2="940" y2="0" stroke="#F59E0B" strokeWidth="1" />
                <line x1="60" y1="-5" x2="60" y2="5" stroke="#F59E0B" strokeWidth="1.5" />
                <line x1="940" y1="-5" x2="940" y2="5" stroke="#F59E0B" strokeWidth="1.5" />
                <rect x="440" y="-8" width="120" height="16" fill="#0A0C0F" />
                <text x="500" y="4" textAnchor="middle" fill="#F59E0B" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  TOTAL LENGTH 16,800 mm [55&apos;-1&quot;]
                </text>
              </g>

              {/* Living Room Width Dimension */}
              <g transform="translate(235, 345)">
                <line x1="0" y1="0" x2="400" y2="0" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="3 3" />
                <rect x="140" y="-8" width="120" height="16" fill="#0A0C0F" />
                <text x="200" y="4" textAnchor="middle" fill="#38BDF8" fontSize="9" fontFamily="monospace">
                  LIVING SPAN 6,600 mm [21&apos;-8&quot;]
                </text>
              </g>

              {/* Master Bedroom Dimension */}
              <g transform="translate(650, 355)">
                <line x1="0" y1="0" x2="280" y2="0" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="3 3" />
                <rect x="80" y="-8" width="120" height="16" fill="#0A0C0F" />
                <text x="140" y="4" textAnchor="middle" fill="#38BDF8" fontSize="9" fontFamily="monospace">
                  MASTER SUITE 4,800 mm [15&apos;-9&quot;]
                </text>
              </g>

              {/* Kitchen Dimension */}
              <g transform="translate(30, 240)">
                <line x1="0" y1="0" x2="0" y2="320" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="3 3" />
                <rect x="-10" y="145" width="20" height="50" fill="#0A0C0F" />
                <text x="0" y="175" textAnchor="middle" fill="#38BDF8" fontSize="9" fontFamily="monospace" transform="rotate(-90 0 175)">
                  KITCHEN 4,800 mm
                </text>
              </g>
            </g>
          )}

          {/* Title Block (Bottom Right CAD Standard) */}
          <g transform="translate(710, 520)">
            <rect x="0" y="0" width="220" height="42" fill="#18181B" stroke="#F59E0B" strokeWidth="1" rx="4" />
            <text x="10" y="15" fill="#F59E0B" fontSize="9" fontFamily="monospace" fontWeight="bold">PROJECT: MR. VIVEK RESIDENCE</text>
            <text x="10" y="27" fill="#E4E4E7" fontSize="8" fontFamily="monospace">SHEET: ARCHITECTURAL FURNITURE PLAN</text>
            <text x="10" y="37" fill="#A1A1AA" fontSize="7" fontFamily="monospace">DESIGNER: MUSKAN PAREEK · DWG-00</text>
          </g>
        </svg>
      </div>

      {/* Interactive Zone Inspector Cards */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 text-xs text-white/70">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold">Interactive Room Breakdown</span>
          </div>
          <span className="text-[10px] text-white/40 font-mono">Hover to highlight zone on CAD blueprint</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {zones.map((zone) => (
            <button
              key={zone.id}
              onMouseEnter={() => setHighlightZone(zone.id)}
              onMouseLeave={() => setHighlightZone(null)}
              className={cn(
                "p-2.5 rounded-xl border text-left transition-all cursor-pointer",
                highlightZone === zone.id
                  ? "bg-amber-400/20 border-amber-400 text-white scale-[1.02]"
                  : "bg-white/5 border-white/5 text-white/80 hover:bg-white/10"
              )}
            >
              <div className="flex items-center justify-between text-[11px] font-bold">
                <span className="truncate">{zone.name}</span>
              </div>
              <div className="text-[10px] font-mono text-amber-400 mt-0.5">{zone.area}</div>
              <div className="text-[9px] text-white/50 truncate mt-0.5">{zone.note}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
