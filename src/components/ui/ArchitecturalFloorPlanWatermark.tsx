"use client";

import React from "react";
import { cn } from "@/lib/cn";

interface WatermarkProps {
  className?: string;
  variant?: "detailed" | "blueprint-grid" | "minimal" | "elevation";
  opacity?: string;
}

export function ArchitecturalFloorPlanWatermark({
  className = "",
  variant = "detailed",
  opacity = "opacity-[0.04]",
}: WatermarkProps) {
  if (variant === "blueprint-grid") {
    return (
      <div
        className={cn(
          "absolute inset-0 pointer-events-none select-none overflow-hidden",
          opacity,
          className
        )}
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="cadGridSmall" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#49352C" strokeWidth="0.5" strokeOpacity="0.4" />
            </pattern>
            <pattern id="cadGridLarge" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#cadGridSmall)" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#49352C" strokeWidth="1.2" strokeOpacity="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cadGridLarge)" />
        </svg>
      </div>
    );
  }

  if (variant === "elevation") {
    return (
      <div
        className={cn(
          "absolute inset-0 pointer-events-none select-none overflow-hidden",
          opacity,
          className
        )}
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 700"
          fill="none"
          stroke="#49352C"
          strokeLinecap="round"
          strokeLinejoin="round"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Wall datum line */}
          <line x1="100" y1="580" x2="1300" y2="580" strokeWidth="3" />
          <line x1="100" y1="120" x2="1300" y2="120" strokeWidth="2" strokeDasharray="6 4" />

          {/* Arched Millwork Unit Elevation */}
          <g transform="translate(250, 160)">
            <path d="M 0 420 L 0 180 Q 0 0 180 0 Q 360 0 360 180 L 360 420 Z" strokeWidth="2.5" fill="none" />
            <path d="M 15 420 L 15 180 Q 15 15 180 15 Q 345 15 345 180 L 345 420 Z" strokeWidth="1" strokeDasharray="3 3" fill="none" />
            
            {/* Shelves */}
            <line x1="15" y1="150" x2="345" y2="150" strokeWidth="1.5" />
            <line x1="15" y1="230" x2="345" y2="230" strokeWidth="1.5" />
            <line x1="15" y1="310" x2="345" y2="310" strokeWidth="1.5" />
            
            {/* Lower Cabinet Shutters with fluted vertical lines */}
            <rect x="15" y="310" width="330" height="110" strokeWidth="2" />
            {[...Array(20)].map((_, i) => (
              <line key={i} x1={25 + i * 16} y1="310" x2={25 + i * 16} y2="420" strokeWidth="0.8" />
            ))}

            {/* Dimension marks */}
            <line x1="-30" y1="0" x2="-30" y2="420" strokeWidth="1" strokeDasharray="4 2" />
            <line x1="-35" y1="0" x2="-25" y2="0" strokeWidth="1" />
            <line x1="-35" y1="420" x2="-25" y2="420" strokeWidth="1" />
            <text x="-40" y="210" textAnchor="middle" fill="#49352C" fontSize="11" fontFamily="monospace" transform="rotate(-90 -40 210)">
              HEIGHT 2850 mm
            </text>
          </g>

          {/* Sconce & Hanging Pendant Lights */}
          <circle cx="850" cy="280" r="45" strokeWidth="1.8" strokeDasharray="4 3" />
          <line x1="850" y1="120" x2="850" y2="235" strokeWidth="1.5" />

          {/* Level Markers */}
          <g transform="translate(1100, 580)">
            <polygon points="0,0 20,-12 40,0" fill="#49352C" />
            <text x="50" y="-3" fill="#49352C" fontSize="12" fontFamily="monospace" fontWeight="bold">FFL ±0.00</text>
          </g>
          <g transform="translate(1100, 120)">
            <polygon points="0,0 20,-12 40,0" fill="#49352C" />
            <text x="50" y="-3" fill="#49352C" fontSize="12" fontFamily="monospace" fontWeight="bold">CEILING +3200</text>
          </g>
        </svg>
      </div>
    );
  }

  // Default "detailed" architectural floor plan line art
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none select-none overflow-hidden",
        opacity,
        className
      )}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
        fill="none"
        stroke="#49352C"
        strokeLinecap="round"
        strokeLinejoin="round"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Wall 45-degree hatch */}
          <pattern id="fpHatchBg" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="10" stroke="#49352C" strokeWidth="1" strokeOpacity="0.5" />
          </pattern>
        </defs>

        {/* ================= STRUCTURAL GRID COLUMNS & BUBBLES ================= */}
        <g strokeDasharray="8 4" strokeWidth="0.8" strokeOpacity="0.6">
          <line x1="120" y1="60" x2="120" y2="840" />
          <line x1="520" y1="60" x2="520" y2="840" />
          <line x1="960" y1="60" x2="960" y2="840" />
          <line x1="1420" y1="60" x2="1420" y2="840" />

          <line x1="80" y1="120" x2="1520" y2="120" />
          <line x1="80" y1="460" x2="1520" y2="460" />
          <line x1="80" y1="800" x2="1520" y2="800" />
        </g>

        {/* Grid Axis Bubbles */}
        {[
          { x: 120, y: 50, label: "A" },
          { x: 520, y: 50, label: "B" },
          { x: 960, y: 50, label: "C" },
          { x: 1420, y: 50, label: "D" },
        ].map((col) => (
          <g key={col.label} transform={`translate(${col.x}, ${col.y})`}>
            <circle cx="0" cy="0" r="14" strokeWidth="1.2" fill="#FAF6F0" />
            <text x="0" y="4" textAnchor="middle" fill="#49352C" fontSize="10" fontFamily="monospace" fontWeight="bold">
              {col.label}
            </text>
          </g>
        ))}

        {[
          { x: 70, y: 120, label: "1" },
          { x: 70, y: 460, label: "2" },
          { x: 70, y: 800, label: "3" },
        ].map((row) => (
          <g key={row.label} transform={`translate(${row.x}, ${row.y})`}>
            <circle cx="0" cy="0" r="14" strokeWidth="1.2" fill="#FAF6F0" />
            <text x="0" y="4" textAnchor="middle" fill="#49352C" fontSize="10" fontFamily="monospace" fontWeight="bold">
              {row.label}
            </text>
          </g>
        ))}

        {/* ================= ARCHITECTURAL WALLS ================= */}
        {/* Exterior Wall Boundary with Hatched Core */}
        <rect x="120" y="120" width="1300" height="680" strokeWidth="8" fill="none" />
        <rect x="126" y="126" width="1288" height="668" strokeWidth="1" strokeDasharray="3 3" fill="none" />

        {/* Main Zone Partitions */}
        <line x1="520" y1="120" x2="520" y2="460" strokeWidth="6" />
        <line x1="520" y1="530" x2="520" y2="800" strokeWidth="6" />
        <line x1="960" y1="120" x2="960" y2="380" strokeWidth="6" />
        <line x1="960" y1="460" x2="960" y2="800" strokeWidth="6" />
        <line x1="520" y1="460" x2="840" y2="460" strokeWidth="6" />

        {/* ================= DOOR SWINGS WITH TRAJECTORIES ================= */}
        {/* Foyer Door */}
        <g transform="translate(120, 260)">
          <path d="M 0 0 A 70 70 0 0 1 70 70" strokeWidth="1.2" strokeDasharray="3 3" fill="none" />
          <line x1="0" y1="70" x2="70" y2="70" strokeWidth="2.5" />
        </g>

        {/* Master Suite Door */}
        <g transform="translate(960, 380)">
          <path d="M 0 0 A 65 65 0 0 1 65 65" strokeWidth="1.2" strokeDasharray="3 3" fill="none" />
          <line x1="0" y1="65" x2="65" y2="65" strokeWidth="2.5" />
        </g>

        {/* Living Sliding Balcony Door (Multi-track) */}
        <g transform="translate(120, 560)">
          <line x1="0" y1="0" x2="0" y2="180" strokeWidth="4" strokeDasharray="18 10" />
          <line x1="8" y1="0" x2="8" y2="180" strokeWidth="4" strokeDasharray="18 10" />
          <text x="24" y="95" fill="#49352C" fontSize="9" fontFamily="monospace" transform="rotate(-90 24 95)">
            TRIPLE TRACK SLIDER 2400W
          </text>
        </g>

        {/* ================= FURNITURE SCHEMATICS ================= */}
        {/* Living Room Seating (Center Zone) */}
        <g transform="translate(580, 200)">
          {/* Curved Sectional Sofa */}
          <path d="M 0 0 L 260 0 Q 300 0 300 40 L 300 200 Q 300 220 280 220 L 220 220 Q 200 220 200 200 L 200 60 L 0 60 Z" strokeWidth="2" fill="none" />
          <line x1="0" y1="20" x2="260" y2="20" strokeWidth="1" strokeDasharray="4 2" />
          <line x1="260" y1="20" x2="260" y2="200" strokeWidth="1" strokeDasharray="4 2" />
          {/* Coffee Table Organic Travertine Shape */}
          <ellipse cx="120" cy="130" rx="60" ry="35" strokeWidth="1.8" />
          {/* Armchair */}
          <rect x="-40" y="100" width="45" height="50" rx="10" strokeWidth="1.5" />
          <text x="120" y="133" textAnchor="middle" fill="#49352C" fontSize="9" fontFamily="monospace">
            LIVING SPAN · 6.6m
          </text>
        </g>

        {/* Dining Room Table & 8 Chairs (Lower Center) */}
        <g transform="translate(620, 560)">
          <rect x="0" y="0" width="220" height="110" rx="12" strokeWidth="2" />
          {/* 4 Chairs Top */}
          {[...Array(4)].map((_, i) => (
            <rect key={`dt-${i}`} x={25 + i * 48} y="-22" width="32" height="18" rx="4" strokeWidth="1.2" />
          ))}
          {/* 4 Chairs Bottom */}
          {[...Array(4)].map((_, i) => (
            <rect key={`db-${i}`} x={25 + i * 48} y="114" width="32" height="18" rx="4" strokeWidth="1.2" />
          ))}
          <text x="110" y="60" textAnchor="middle" fill="#49352C" fontSize="10" fontFamily="monospace">
            DINING · 2400 × 1050
          </text>
        </g>

        {/* Master Bedroom Bed & System 32 Wardrobe (Right Zone) */}
        <g transform="translate(1040, 180)">
          {/* Bed Frame & Floating Nightstands */}
          <rect x="50" y="20" width="220" height="240" rx="6" strokeWidth="2" />
          {/* Curved Bed Headboard */}
          <path d="M 30 20 Q 160 -10 290 20 L 290 35 Q 160 5 30 35 Z" strokeWidth="2" fill="none" />
          {/* Pillows */}
          <rect x="65" y="45" width="80" height="45" rx="5" strokeWidth="1.2" strokeDasharray="3 2" />
          <rect x="165" y="45" width="80" height="45" rx="5" strokeWidth="1.2" strokeDasharray="3 2" />
          {/* Nightstands */}
          <rect x="10" y="40" width="32" height="40" rx="3" strokeWidth="1.2" />
          <rect x="278" y="40" width="32" height="40" rx="3" strokeWidth="1.2" />
          {/* Wardrobe Run with System 32 markers */}
          <rect x="50" y="320" width="280" height="65" strokeWidth="2" />
          <line x1="143" y1="320" x2="143" y2="385" strokeWidth="1.2" />
          <line x1="236" y1="320" x2="236" y2="385" strokeWidth="1.2" />
          <text x="160" y="160" textAnchor="middle" fill="#49352C" fontSize="11" fontFamily="monospace">
            MASTER SANCTUARY · 16&apos;0&quot; × 14&apos;6&quot;
          </text>
        </g>

        {/* Kitchen Parallel Island & Counters (Left Zone) */}
        <g transform="translate(180, 480)">
          <rect x="0" y="0" width="280" height="65" strokeWidth="2" />
          <rect x="0" y="140" width="280" height="85" rx="6" strokeWidth="2" />
          {/* Island Stools */}
          <circle cx="60" cy="255" r="14" strokeWidth="1.2" />
          <circle cx="140" cy="255" r="14" strokeWidth="1.2" />
          <circle cx="220" cy="255" r="14" strokeWidth="1.2" />
          <text x="140" y="185" textAnchor="middle" fill="#49352C" fontSize="10" fontFamily="monospace">
            KITCHEN ISLAND WITH GOLA
          </text>
        </g>

        {/* ================= PRECISION CAD DIMENSIONS ================= */}
        {/* Exterior Dimension String (Top) */}
        <g transform="translate(0, 95)" strokeWidth="1" strokeOpacity="0.8">
          <line x1="120" y1="0" x2="1420" y2="0" />
          <line x1="120" y1="-8" x2="120" y2="8" strokeWidth="2" />
          <line x1="1420" y1="-8" x2="1420" y2="8" strokeWidth="2" />
          <line x1="520" y1="-5" x2="520" y2="5" />
          <line x1="960" y1="-5" x2="960" y2="5" />
          <rect x="710" y="-12" width="140" height="20" fill="#FAF6F0" />
          <text x="780" y="3" textAnchor="middle" fill="#49352C" fontSize="11" fontFamily="monospace" fontWeight="bold">
            DIM: 21,500 mm [70&apos;-6&quot;]
          </text>
        </g>

        {/* Exterior Dimension String (Right Side) */}
        <g transform="translate(1450, 0)" strokeWidth="1" strokeOpacity="0.8">
          <line x1="0" y1="120" x2="0" y2="800" />
          <line x1="-8" y1="120" x2="8" y2="120" strokeWidth="2" />
          <line x1="-8" y1="800" x2="8" y2="800" strokeWidth="2" />
          <text x="25" y="470" textAnchor="middle" fill="#49352C" fontSize="11" fontFamily="monospace" fontWeight="bold" transform="rotate(90 25 470)">
            WIDTH: 11,200 mm [36&apos;-9&quot;]
          </text>
        </g>

        {/* Section Line A-A' */}
        <g transform="translate(0, 460)">
          <line x1="40" y1="0" x2="1560" y2="0" strokeWidth="1.5" strokeDasharray="16 6 4 6" strokeOpacity="0.7" />
          <polygon points="50,-10 30,0 50,10" fill="#49352C" />
          <polygon points="1550,-10 1570,0 1550,10" fill="#49352C" />
          <text x="65" y="-12" fill="#49352C" fontSize="12" fontFamily="monospace" fontWeight="bold">SEC A</text>
          <text x="1515" y="-12" fill="#49352C" fontSize="12" fontFamily="monospace" fontWeight="bold">SEC A&apos;</text>
        </g>

        {/* North Arrow Symbol */}
        <g transform="translate(1380, 720)">
          <circle cx="0" cy="0" r="26" strokeWidth="1.5" fill="#FAF6F0" />
          <polygon points="0,-22 8,14 0,8" fill="#49352C" />
          <polygon points="0,-22 -8,14 0,8" strokeWidth="1" fill="#FAF6F0" />
          <text x="0" y="-28" textAnchor="middle" fill="#49352C" fontSize="12" fontFamily="monospace" fontWeight="bold">N</text>
          <text x="0" y="38" textAnchor="middle" fill="#49352C" fontSize="8" fontFamily="monospace">SCALE 1:50</text>
        </g>
      </svg>
    </div>
  );
}
