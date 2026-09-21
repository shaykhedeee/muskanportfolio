"use client";

import React from "react";

export function LivingRoomElevationSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full select-none ${className}`}
      aria-label="Living Room TV Unit Architectural Elevation"
    >
      {/* Background paper tone */}
      <rect width="500" height="320" fill="#F7F3EB" />
      
      {/* Floor and Ceiling baseline */}
      <line x1="20" y1="280" x2="480" y2="280" stroke="#49352C" strokeWidth="2" />
      <line x1="20" y1="35" x2="480" y2="35" stroke="#49352C" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
      
      {/* Wall outline */}
      <rect x="40" y="40" width="420" height="240" fill="#FCFAF6" stroke="#D8CDBB" strokeWidth="1.5" />
      
      {/* Vertical Oak Slat Accent Panel behind TV */}
      <rect x="70" y="40" width="360" height="240" fill="#F2ECE0" />
      {Array.from({ length: 35 }).map((_, i) => (
        <line
          key={i}
          x1={75 + i * 10}
          y1="40"
          x2={75 + i * 10}
          y2="280"
          stroke="#D8CDBB"
          strokeWidth="1"
          opacity="0.8"
        />
      ))}
      
      {/* Backlit TV Feature Panel in honed stone */}
      <rect x="120" y="70" width="260" height="150" fill="#EAE3D2" stroke="#49352C" strokeWidth="1.5" rx="4" />
      <rect x="124" y="74" width="252" height="142" fill="#E4DBC8" opacity="0.5" />
      
      {/* Wall-mounted Flat Screen TV */}
      <rect x="150" y="90" width="200" height="110" fill="#2E2824" rx="2" stroke="#1A1614" strokeWidth="2" />
      <rect x="154" y="94" width="192" height="102" fill="#3D3631" rx="1" />
      
      {/* Floating Display Shelves (Left & Right) */}
      <rect x="45" y="80" width="65" height="8" fill="#C9A982" stroke="#49352C" strokeWidth="1.2" />
      <rect x="45" y="130" width="65" height="8" fill="#C9A982" stroke="#49352C" strokeWidth="1.2" />
      <rect x="45" y="180" width="65" height="8" fill="#C9A982" stroke="#49352C" strokeWidth="1.2" />
      
      {/* Display Vases / Books on Left Shelves */}
      <ellipse cx="65" cy="74" rx="6" ry="6" fill="#66713E" opacity="0.8" />
      <rect x="80" y="66" width="4" height="14" fill="#49352C" opacity="0.7" />
      <rect x="86" y="64" width="4" height="16" fill="#C9A982" opacity="0.9" />
      <ellipse cx="75" cy="123" rx="9" ry="7" fill="#EAE3D2" stroke="#49352C" strokeWidth="1" />
      <circle cx="75" cy="172" r="7" fill="#5E6941" opacity="0.6" />

      {/* Floating Display Shelves (Right) */}
      <rect x="390" y="80" width="65" height="8" fill="#C9A982" stroke="#49352C" strokeWidth="1.2" />
      <rect x="390" y="140" width="65" height="8" fill="#C9A982" stroke="#49352C" strokeWidth="1.2" />
      
      {/* Display foliage / books on Right Shelves */}
      <path d="M420 78 C415 65 425 55 428 50 C432 60 435 68 424 78Z" fill="#66713E" opacity="0.85" />
      <circle cx="410" cy="133" r="6" fill="#D8CDBB" stroke="#49352C" strokeWidth="1" />

      {/* Floating Lower Media Credenza (Natural Wood Finish) */}
      <rect x="60" y="235" width="380" height="40" fill="#D8CDBB" stroke="#49352C" strokeWidth="1.8" rx="2" />
      
      {/* Credenza Drawer Sections */}
      <line x1="155" y1="235" x2="155" y2="275" stroke="#49352C" strokeWidth="1.2" />
      <line x1="250" y1="235" x2="250" y2="275" stroke="#49352C" strokeWidth="1.2" />
      <line x1="345" y1="235" x2="345" y2="275" stroke="#49352C" strokeWidth="1.2" />
      
      {/* Subtle Shadow Reveal underneath credenza */}
      <rect x="70" y="275" width="360" height="5" fill="#49352C" opacity="0.25" />
      
      {/* Decorative Potted Plant on Floor (Right) */}
      <path d="M445 280 L448 245 L465 245 L468 280 Z" fill="#EAE3D2" stroke="#49352C" strokeWidth="1.2" />
      <path d="M456 245 C450 220 440 210 435 200 C445 212 455 225 456 245 Z" fill="#66713E" />
      <path d="M456 245 C460 215 470 205 478 195 C472 210 464 228 456 245 Z" fill="#5E6941" />
      <path d="M456 245 C456 210 458 195 460 185 C458 205 457 225 456 245 Z" fill="#66713E" />
      
      {/* Architectural Dimension Lines */}
      <line x1="60" y1="298" x2="440" y2="298" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="60" y1="293" x2="60" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="440" y1="293" x2="440" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <text x="250" y="310" textAnchor="middle" fill="#8C7A6B" fontSize="9" fontFamily="monospace">
        W: 3800 mm
      </text>

      {/* Elevation Title Tag */}
      <text x="50" y="30" fill="#49352C" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">
        ELEVATION · TV MEDIA WALL (1:25)
      </text>
    </svg>
  );
}

export function BedroomWardrobeElevationSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full select-none ${className}`}
      aria-label="Bedroom Wardrobe Architectural Elevation"
    >
      {/* Background paper tone */}
      <rect width="500" height="320" fill="#F7F3EB" />
      
      {/* Floor and Ceiling baseline */}
      <line x1="20" y1="280" x2="480" y2="280" stroke="#49352C" strokeWidth="2" />
      <line x1="20" y1="35" x2="480" y2="35" stroke="#49352C" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
      
      {/* Wardrobe Outer Carcass with 30mm Scribing Fillers */}
      <rect x="70" y="45" width="360" height="235" fill="#FCFAF6" stroke="#49352C" strokeWidth="1.8" />
      
      {/* 30mm Left and Right Scribing Fillers */}
      <rect x="70" y="45" width="12" height="235" fill="#E8DEC8" stroke="#49352C" strokeWidth="1" />
      <rect x="418" y="45" width="12" height="235" fill="#E8DEC8" stroke="#49352C" strokeWidth="1" />
      
      {/* Overhead Loft Cabinets (4 Doors) */}
      <rect x="82" y="45" width="336" height="48" fill="#F4EFE6" stroke="#49352C" strokeWidth="1.4" />
      <line x1="166" y1="45" x2="166" y2="93" stroke="#49352C" strokeWidth="1.2" />
      <line x1="250" y1="45" x2="250" y2="93" stroke="#49352C" strokeWidth="1.2" />
      <line x1="334" y1="45" x2="334" y2="93" stroke="#49352C" strokeWidth="1.2" />
      
      {/* Main Wardrobe Shutters (4 Doors: Door 1, Door 2, Door 3, Door 4) */}
      <rect x="82" y="93" width="336" height="187" fill="#FAF6EE" stroke="#49352C" strokeWidth="1.4" />
      <line x1="166" y1="93" x2="166" y2="280" stroke="#49352C" strokeWidth="1.4" />
      <line x1="250" y1="93" x2="250" y2="280" stroke="#49352C" strokeWidth="1.8" />
      <line x1="334" y1="93" x2="334" y2="280" stroke="#49352C" strokeWidth="1.4" />
      
      {/* Rattan Mesh Infill Panels on Door 2 and Door 3 */}
      <rect x="176" y="110" width="64" height="135" fill="#EADCC9" stroke="#C9A982" strokeWidth="1" rx="2" />
      <rect x="260" y="110" width="64" height="135" fill="#EADCC9" stroke="#C9A982" strokeWidth="1" rx="2" />
      
      {/* Rattan Cross Weave Texture */}
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={`h1-${i}`}
          x1="176"
          y1={115 + i * 11}
          x2="240"
          y2={115 + i * 11}
          stroke="#C9A982"
          strokeWidth="0.8"
          strokeDasharray="2 2"
        />
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={`h2-${i}`}
          x1="260"
          y1={115 + i * 11}
          x2="324"
          y2={115 + i * 11}
          stroke="#C9A982"
          strokeWidth="0.8"
          strokeDasharray="2 2"
        />
      ))}

      {/* Fluted Oak Detail Panels on Door 1 and Door 4 */}
      <rect x="92" y="110" width="64" height="150" fill="#F2ECE0" stroke="#D8CDBB" strokeWidth="1" rx="2" />
      <rect x="344" y="110" width="64" height="150" fill="#F2ECE0" stroke="#D8CDBB" strokeWidth="1" rx="2" />
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={`f1-${i}`} x1={98 + i * 9} y1="110" x2={98 + i * 9} y2="260" stroke="#D8CDBB" strokeWidth="1" />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={`f2-${i}`} x1={350 + i * 9} y1="110" x2={350 + i * 9} y2="260" stroke="#D8CDBB" strokeWidth="1" />
      ))}

      {/* Long Architectural Brass Edge Pull Handles */}
      <line x1="160" y1="150" x2="160" y2="195" stroke="#C9A982" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="172" y1="150" x2="172" y2="195" stroke="#C9A982" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="328" y1="150" x2="328" y2="195" stroke="#C9A982" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="340" y1="150" x2="340" y2="195" stroke="#C9A982" strokeWidth="2.5" strokeLinecap="round" />

      {/* Plinth Base (75mm Skirting) */}
      <rect x="70" y="270" width="360" height="10" fill="#49352C" opacity="0.8" />

      {/* Architectural Dimension Lines */}
      <line x1="70" y1="298" x2="430" y2="298" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="70" y1="293" x2="70" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="430" y1="293" x2="430" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <text x="250" y="310" textAnchor="middle" fill="#8C7A6B" fontSize="9" fontFamily="monospace">
        W: 2400 mm · H: 2700 mm
      </text>

      {/* Elevation Title Tag */}
      <text x="50" y="30" fill="#49352C" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">
        ELEVATION · MASTER WARDROBE (1:20)
      </text>
    </svg>
  );
}

export function KitchenElevationSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full select-none ${className}`}
      aria-label="Modular Kitchen Architectural Elevation"
    >
      {/* Background paper tone */}
      <rect width="500" height="320" fill="#F7F3EB" />
      
      {/* Floor and Ceiling baseline */}
      <line x1="20" y1="280" x2="480" y2="280" stroke="#49352C" strokeWidth="2" />
      <line x1="20" y1="35" x2="480" y2="35" stroke="#49352C" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
      
      {/* Backsplash Tiled Wall */}
      <rect x="50" y="115" width="400" height="75" fill="#EFE8DC" stroke="#D8CDBB" strokeWidth="1" />
      {Array.from({ length: 15 }).map((_, i) => (
        <line key={`tile-v-${i}`} x1={50 + i * 27} y1="115" x2={50 + i * 27} y2="190" stroke="#D8CDBB" strokeWidth="0.8" />
      ))}
      <line x1="50" y1="140" x2="450" y2="140" stroke="#D8CDBB" strokeWidth="0.8" />
      <line x1="50" y1="165" x2="450" y2="165" stroke="#D8CDBB" strokeWidth="0.8" />

      {/* Tall Pantry Unit (Left) */}
      <rect x="50" y="45" width="80" height="235" fill="#EAE3D2" stroke="#49352C" strokeWidth="1.8" />
      <line x1="50" y1="120" x2="130" y2="120" stroke="#49352C" strokeWidth="1.2" />
      <line x1="50" y1="190" x2="130" y2="190" stroke="#49352C" strokeWidth="1.2" />
      <line x1="122" y1="70" x2="122" y2="95" stroke="#49352C" strokeWidth="2" strokeLinecap="round" />
      <line x1="122" y1="140" x2="122" y2="165" stroke="#49352C" strokeWidth="2" strokeLinecap="round" />
      <line x1="122" y1="215" x2="122" y2="240" stroke="#49352C" strokeWidth="2" strokeLinecap="round" />

      {/* Overhead Wall Cabinets */}
      <rect x="130" y="45" width="320" height="70" fill="#F4EFE6" stroke="#49352C" strokeWidth="1.5" />
      <line x1="210" y1="45" x2="210" y2="115" stroke="#49352C" strokeWidth="1.2" />
      <line x1="290" y1="45" x2="290" y2="115" stroke="#49352C" strokeWidth="1.2" />
      <line x1="370" y1="45" x2="370" y2="115" stroke="#49352C" strokeWidth="1.2" />

      {/* Concealed Range Hood / Chimney Box */}
      <rect x="275" y="65" width="60" height="50" fill="#E0D7C6" stroke="#49352C" strokeWidth="1.2" />
      <path d="M290 115 L295 95 L315 95 L320 115 Z" fill="#49352C" opacity="0.6" />

      {/* Quartz Countertop Slab (20mm Thick with Waterfall Edge) */}
      <rect x="130" y="190" width="320" height="12" fill="#FCFAF6" stroke="#49352C" strokeWidth="1.6" />

      {/* Built-in Ceramic Hob & Pan */}
      <rect x="280" y="187" width="50" height="4" fill="#2E2824" rx="1" />
      <circle cx="295" cy="189" r="2" fill="#C9A982" />
      <circle cx="315" cy="189" r="2" fill="#C9A982" />

      {/* Undermount Sink with Gooseneck Mixer Tap */}
      <path d="M175 190 C175 170 190 165 192 178" stroke="#49352C" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Base Kitchen Cabinet Units & Deep Tandem Drawers */}
      <rect x="130" y="202" width="320" height="78" fill="#D8CDBB" stroke="#49352C" strokeWidth="1.8" />
      <line x1="210" y1="202" x2="210" y2="280" stroke="#49352C" strokeWidth="1.2" />
      <line x1="290" y1="202" x2="290" y2="280" stroke="#49352C" strokeWidth="1.2" />
      <line x1="370" y1="202" x2="370" y2="280" stroke="#49352C" strokeWidth="1.2" />
      
      {/* Horizontal Drawer Reveal Lines */}
      <line x1="130" y1="228" x2="210" y2="228" stroke="#49352C" strokeWidth="1" />
      <line x1="130" y1="254" x2="210" y2="254" stroke="#49352C" strokeWidth="1" />
      <line x1="210" y1="240" x2="290" y2="240" stroke="#49352C" strokeWidth="1" />
      <line x1="290" y1="240" x2="370" y2="240" stroke="#49352C" strokeWidth="1" />
      <line x1="370" y1="240" x2="450" y2="240" stroke="#49352C" strokeWidth="1" />

      {/* Recessed Gola Profile Handles */}
      <line x1="140" y1="205" x2="200" y2="205" stroke="#49352C" strokeWidth="1.5" />
      <line x1="220" y1="205" x2="280" y2="205" stroke="#49352C" strokeWidth="1.5" />
      <line x1="300" y1="205" x2="360" y2="205" stroke="#49352C" strokeWidth="1.5" />
      <line x1="380" y1="205" x2="440" y2="205" stroke="#49352C" strokeWidth="1.5" />

      {/* Plinth Base (100mm Waterproof Skirting) */}
      <rect x="50" y="275" width="400" height="5" fill="#49352C" opacity="0.8" />

      {/* Architectural Dimension Lines */}
      <line x1="50" y1="298" x2="450" y2="298" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="50" y1="293" x2="50" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="450" y1="293" x2="450" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <text x="250" y="310" textAnchor="middle" fill="#8C7A6B" fontSize="9" fontFamily="monospace">
        W: 3400 mm · COUNTER HT: 860 mm
      </text>

      {/* Elevation Title Tag */}
      <text x="50" y="30" fill="#49352C" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">
        ELEVATION · MODULAR KITCHEN (1:25)
      </text>
    </svg>
  );
}

export function SarthakTvUnitElevationSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full select-none ${className}`}
      aria-label="Sarthak Residence Living TV Unit Elevation"
    >
      <rect width="500" height="320" fill="#F7F3EB" />
      {/* Ceiling & Floor lines */}
      <line x1="20" y1="280" x2="480" y2="280" stroke="#49352C" strokeWidth="2" />
      <line x1="20" y1="35" x2="480" y2="35" stroke="#49352C" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />

      {/* Wall masonry background */}
      <rect x="35" y="40" width="430" height="240" fill="#FCFAF6" stroke="#D8CDBB" strokeWidth="1.5" />

      {/* Acoustic Walnut Battens (Left 120px) */}
      <rect x="35" y="40" width="100" height="240" fill="#784A30" opacity="0.15" />
      {Array.from({ length: 10 }).map((_, i) => (
        <rect key={`batten-${i}`} x={40 + i * 9} y="40" width="5" height="240" fill="#784A30" opacity="0.8" />
      ))}

      {/* Bas-Relief Plaster Feature Wall Panel with Halo LED Glow */}
      <rect x="145" y="55" width="295" height="175" fill="#EAE3D2" stroke="#D4AF37" strokeWidth="1.5" rx="3" />
      {/* Textured relief wave lines */}
      {Array.from({ length: 7 }).map((_, i) => (
        <path
          key={`relief-${i}`}
          d={`M155 ${75 + i * 22} Q220 ${65 + i * 22}, 290 ${75 + i * 22} T430 ${75 + i * 22}`}
          stroke="#D8CDBB"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
        />
      ))}

      {/* Mounted 65" TV */}
      <rect x="185" y="75" width="190" height="105" fill="#2E2824" rx="2" stroke="#1A1614" strokeWidth="2" />
      <rect x="189" y="79" width="182" height="97" fill="#3D3631" rx="1" />
      <circle cx="280" cy="127" r="14" fill="#FFC928" opacity="0.2" />

      {/* Floating Walnut TV Credenza with 3 Fluted Drawers */}
      <rect x="110" y="235" width="345" height="38" fill="#784A30" stroke="#49352C" strokeWidth="1.8" rx="2" />
      <line x1="225" y1="235" x2="225" y2="273" stroke="#49352C" strokeWidth="1.2" />
      <line x1="340" y1="235" x2="340" y2="273" stroke="#49352C" strokeWidth="1.2" />
      
      {/* Fluted drawer texture */}
      {Array.from({ length: 30 }).map((_, i) => (
        <line key={`flute-${i}`} x1={118 + i * 11} y1="238" x2={118 + i * 11} y2="270" stroke="#5E3821" strokeWidth="1" />
      ))}

      {/* Sculptural Brass Ball Feet */}
      <circle cx="130" cy="277" r="4.5" fill="#D4AF37" stroke="#49352C" strokeWidth="1" />
      <circle cx="280" cy="277" r="4.5" fill="#D4AF37" stroke="#49352C" strokeWidth="1" />
      <circle cx="435" cy="277" r="4.5" fill="#D4AF37" stroke="#49352C" strokeWidth="1" />

      {/* Architectural Dimension Line */}
      <line x1="35" y1="298" x2="465" y2="298" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="35" y1="293" x2="35" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="465" y1="293" x2="465" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <text x="250" y="310" textAnchor="middle" fill="#8C7A6B" fontSize="9" fontFamily="monospace">
        W: 4200 mm · H: 2850 mm · BAS-RELIEF SLATE
      </text>

      {/* Elevation Title */}
      <text x="45" y="28" fill="#49352C" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">
        ELEVATION 01 · BAS-RELIEF TV MEDIA WALL (1:20)
      </text>
    </svg>
  );
}

export function SarthakCrockeryBarElevationSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full select-none ${className}`}
      aria-label="Sarthak Residence Dining Crockery Bar Elevation"
    >
      <rect width="500" height="320" fill="#F7F3EB" />
      <line x1="20" y1="280" x2="480" y2="280" stroke="#49352C" strokeWidth="2" />
      <line x1="20" y1="35" x2="480" y2="35" stroke="#49352C" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />

      {/* Grand Roman Arched Niche */}
      <path
        d="M140 280 L140 120 C140 50 360 50 360 120 L360 280 Z"
        fill="#2B3330"
        stroke="#49352C"
        strokeWidth="2"
      />

      {/* Upper Fluted Glass Vitrine Shelves */}
      <line x1="145" y1="125" x2="355" y2="125" stroke="#D4AF37" strokeWidth="1.5" />
      <line x1="145" y1="165" x2="355" y2="165" stroke="#D4AF37" strokeWidth="1.5" />
      <line x1="145" y1="205" x2="355" y2="205" stroke="#D4AF37" strokeWidth="1.5" />

      {/* Stemware Rack Detail (Wine Glasses hanging) */}
      {Array.from({ length: 6 }).map((_, i) => (
        <g key={`glass-${i}`} transform={`translate(${170 + i * 28}, 128)`}>
          <line x1="0" y1="0" x2="0" y2="10" stroke="#D4AF37" strokeWidth="1.2" />
          <path d="M-6 10 L6 10 L3 20 L-3 20 Z" fill="#FAF6EE" opacity="0.6" stroke="#D4AF37" strokeWidth="0.8" />
        </g>
      ))}

      {/* Bar Console Lower Cabinet (Charcoal & Brass Pulls) */}
      <rect x="140" y="215" width="220" height="65" fill="#1C2422" stroke="#49352C" strokeWidth="1.8" />
      <line x1="250" y1="215" x2="250" y2="280" stroke="#49352C" strokeWidth="1.4" />
      <circle cx="240" cy="245" r="3" fill="#D4AF37" />
      <circle cx="260" cy="245" r="3" fill="#D4AF37" />

      {/* Fluted Side Wings */}
      <rect x="70" y="80" width="60" height="200" fill="#FAF6EE" stroke="#D8CDBB" strokeWidth="1" />
      <rect x="370" y="80" width="60" height="200" fill="#FAF6EE" stroke="#D8CDBB" strokeWidth="1" />

      {/* Dimension Lines */}
      <line x1="140" y1="298" x2="360" y2="298" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="140" y1="293" x2="140" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="360" y1="293" x2="360" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <text x="250" y="310" textAnchor="middle" fill="#8C7A6B" fontSize="9" fontFamily="monospace">
        W: 1800 mm · ARCH RADIUS: 550 mm
      </text>

      <text x="45" y="28" fill="#49352C" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">
        ELEVATION 02 · ARCHED CROCKERY & BAR CABINET (1:20)
      </text>
    </svg>
  );
}

export function SarthakFoyerConsoleElevationSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full select-none ${className}`}
      aria-label="Sarthak Residence Foyer Console Elevation"
    >
      <rect width="500" height="320" fill="#F7F3EB" />
      <line x1="20" y1="280" x2="480" y2="280" stroke="#49352C" strokeWidth="2" />
      <line x1="20" y1="35" x2="480" y2="35" stroke="#49352C" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />

      {/* Wall Panel with Pill Arch Backlit Niche */}
      <rect x="90" y="45" width="320" height="235" fill="#FAF7F2" stroke="#D8CDBB" strokeWidth="1.5" />
      
      {/* Pill-shaped Backlit Feature Niche */}
      <rect x="150" y="60" width="200" height="150" rx="40" fill="#EAE2D0" stroke="#D4AF37" strokeWidth="1.5" />
      <circle cx="250" cy="115" r="30" fill="#FFC928" opacity="0.15" />

      {/* Minimalist Round Artwork / Backlit Mirror inside Niche */}
      <circle cx="250" cy="120" r="36" fill="#F4EFE6" stroke="#49352C" strokeWidth="1.5" />
      <circle cx="250" cy="120" r="32" fill="#E8DEC8" opacity="0.4" />

      {/* Floating Pill Console with Fluted Arched Tambour Doors */}
      <rect x="130" y="210" width="240" height="50" rx="14" fill="#784A30" stroke="#49352C" strokeWidth="1.8" />
      <rect x="130" y="210" width="240" height="6" rx="2" fill="#FAF6EE" stroke="#49352C" strokeWidth="1" />
      
      {/* Fluted door texture */}
      {Array.from({ length: 22 }).map((_, i) => (
        <line key={`foyer-flute-${i}`} x1={140 + i * 10} y1="216" x2={140 + i * 10} y2="258" stroke="#5E3821" strokeWidth="1" />
      ))}

      {/* Brass Edge Pulls */}
      <circle cx="245" cy="237" r="2.5" fill="#D4AF37" />
      <circle cx="255" cy="237" r="2.5" fill="#D4AF37" />

      {/* Decorative Marble Vessel & Key Tray */}
      <ellipse cx="170" cy="207" rx="8" ry="3" fill="#E8DEC8" stroke="#49352C" strokeWidth="1" />
      <path d="M162 207 C162 195 178 195 178 207 Z" fill="#EAE3D2" stroke="#49352C" strokeWidth="1" />
      <rect x="310" y="206" width="18" height="4" rx="2" fill="#D4AF37" />

      {/* Dimensions */}
      <line x1="130" y1="298" x2="370" y2="298" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="130" y1="293" x2="130" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="370" y1="293" x2="370" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <text x="250" y="310" textAnchor="middle" fill="#8C7A6B" fontSize="9" fontFamily="monospace">
        W: 2100 mm · CONSOLE: 1800 mm × 350 mm
      </text>

      <text x="45" y="28" fill="#49352C" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">
        ELEVATION 03 · ENTRANCE FOYER CONSOLE & NICHE (1:20)
      </text>
    </svg>
  );
}

export function Villa5BhkStudyUnitElevationSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full select-none ${className}`}
      aria-label="5 BHK Villa Bespoke Study Unit Architectural Elevation"
    >
      <rect width="500" height="320" fill="#F7F3EB" />
      <line x1="20" y1="280" x2="480" y2="280" stroke="#49352C" strokeWidth="2" />
      <line x1="20" y1="35" x2="480" y2="35" stroke="#49352C" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
      
      {/* Wall Panel boundary */}
      <rect x="50" y="40" width="400" height="240" fill="#FCFAF6" stroke="#D8CDBB" strokeWidth="1.5" />
      
      {/* Fluted acoustic backdrop behind shelves */}
      <rect x="60" y="45" width="380" height="155" fill="#F3EDE2" />
      {Array.from({ length: 37 }).map((_, i) => (
        <line key={`study-flute-${i}`} x1={65 + i * 10} y1="45" x2={65 + i * 10} y2="200" stroke="#DCD0BD" strokeWidth="1" />
      ))}

      {/* Upper Fluted Glass Cabinets */}
      <rect x="70" y="50" width="170" height="70" rx="3" fill="#FAF7F0" stroke="#49352C" strokeWidth="1.5" />
      <rect x="74" y="54" width="78" height="62" fill="#E8DEC8" opacity="0.6" stroke="#49352C" strokeWidth="1" />
      <rect x="158" y="54" width="78" height="62" fill="#E8DEC8" opacity="0.6" stroke="#49352C" strokeWidth="1" />
      
      {/* Fluted lines in cabinet glass */}
      {Array.from({ length: 6 }).map((_, i) => (
        <React.Fragment key={`shutter-glass-${i}`}>
          <line x1={82 + i * 12} y1="56" x2={82 + i * 12} y2="114" stroke="#FAF7F0" strokeWidth="1.2" />
          <line x1={166 + i * 12} y1="56" x2={166 + i * 12} y2="114" stroke="#FAF7F0" strokeWidth="1.2" />
        </React.Fragment>
      ))}

      {/* Arched Open Display Tower (Right Side) */}
      <path d="M 260 195 L 260 90 A 30 30 0 0 1 320 90 L 320 195 Z" fill="#EAE2D0" stroke="#49352C" strokeWidth="1.5" />
      <line x1="260" y1="125" x2="320" y2="125" stroke="#49352C" strokeWidth="1.2" />
      <line x1="260" y1="160" x2="320" y2="160" stroke="#49352C" strokeWidth="1.2" />
      
      {/* Ambient warm LED wash glow */}
      <circle cx="290" cy="90" r="14" fill="#FFC928" opacity="0.25" />
      
      {/* Floating Cantilevered Study Desk */}
      <rect x="60" y="200" width="380" height="24" rx="3" fill="#7A4D33" stroke="#49352C" strokeWidth="1.8" />
      <rect x="60" y="200" width="380" height="5" fill="#935F42" />
      
      {/* 3 Drawer Units under desk */}
      <rect x="70" y="224" width="100" height="56" fill="#FAF6EE" stroke="#49352C" strokeWidth="1.5" />
      <line x1="70" y1="242" x2="170" y2="242" stroke="#D8CDBB" strokeWidth="1" />
      <line x1="70" y1="260" x2="170" y2="260" stroke="#D8CDBB" strokeWidth="1" />
      {/* Drawer pulls in champagne brass */}
      <rect x="110" y="232" width="20" height="3" rx="1" fill="#D4AF37" />
      <rect x="110" y="250" width="20" height="3" rx="1" fill="#D4AF37" />
      <rect x="110" y="268" width="20" height="3" rx="1" fill="#D4AF37" />

      {/* Kneehole Clearance & Wire Routing */}
      <rect x="340" y="224" width="90" height="56" fill="#FAF6EE" stroke="#49352C" strokeWidth="1.5" />
      <circle cx="255" cy="204" r="3" fill="#2E2824" />

      {/* Dimension Line & Tag */}
      <line x1="50" y1="298" x2="450" y2="298" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="50" y1="293" x2="50" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="450" y1="293" x2="450" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <text x="250" y="310" textAnchor="middle" fill="#8C7A6B" fontSize="9" fontFamily="monospace">
        W: 2400 mm · DESK: 750 mm FFL · FULL UNIT H: 2650 mm
      </text>

      <text x="45" y="28" fill="#49352C" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">
        ELEVATION 04 · 5 BHK VILLA BESPOKE STUDY UNIT (1:20)
      </text>
    </svg>
  );
}

export function Villa5BhkBedWallElevationSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full select-none ${className}`}
      aria-label="5 BHK Villa Master Bed Wall Elevation"
    >
      <rect width="500" height="320" fill="#F7F3EB" />
      <line x1="20" y1="280" x2="480" y2="280" stroke="#49352C" strokeWidth="2" />
      <line x1="20" y1="35" x2="480" y2="35" stroke="#49352C" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
      
      {/* Wall Boundary */}
      <rect x="40" y="40" width="420" height="240" fill="#FCFAF6" stroke="#D8CDBB" strokeWidth="1.5" />
      
      {/* Wainscoting classic moulding panels */}
      <rect x="50" y="50" width="90" height="150" fill="#F4EFE6" stroke="#DCD0BD" strokeWidth="1.2" />
      <rect x="56" y="56" width="78" height="138" fill="#FAF7F0" stroke="#DCD0BD" strokeWidth="0.8" />
      
      <rect x="360" y="50" width="90" height="150" fill="#F4EFE6" stroke="#DCD0BD" strokeWidth="1.2" />
      <rect x="366" y="56" width="78" height="138" fill="#FAF7F0" stroke="#DCD0BD" strokeWidth="0.8" />

      {/* Sconces on left and right mouldings */}
      <line x1="95" y1="100" x2="95" y2="120" stroke="#D4AF37" strokeWidth="2" />
      <circle cx="95" cy="98" r="6" fill="#D4AF37" />
      <circle cx="95" cy="98" r="12" fill="#FFC928" opacity="0.25" />

      <line x1="405" y1="100" x2="405" y2="120" stroke="#D4AF37" strokeWidth="2" />
      <circle cx="405" cy="98" r="6" fill="#D4AF37" />
      <circle cx="405" cy="98" r="12" fill="#FFC928" opacity="0.25" />

      {/* Center Backlit Quartzite Stone Slab with Fluted Walnut Frame */}
      <rect x="150" y="50" width="200" height="170" rx="6" fill="#E8DEC8" stroke="#49352C" strokeWidth="1.8" />
      <rect x="154" y="54" width="192" height="162" rx="4" fill="#E5D9C2" />
      {/* Quartzite veining */}
      <path d="M 160 70 Q 200 90 250 80 T 330 110" stroke="#D4C4A8" strokeWidth="1.5" fill="none" opacity="0.7" />
      <path d="M 180 140 Q 240 130 280 160 T 340 150" stroke="#D4C4A8" strokeWidth="1.2" fill="none" opacity="0.7" />

      {/* Backlit perimeter halo glow */}
      <rect x="146" y="46" width="208" height="178" rx="10" stroke="#FFC928" strokeWidth="1" opacity="0.4" />

      {/* Upholstered Fluted Platform Bed & Headboard */}
      <rect x="130" y="160" width="240" height="100" rx="8" fill="#7A4D33" stroke="#49352C" strokeWidth="2" />
      <rect x="140" y="170" width="220" height="50" rx="4" fill="#F4ECE1" stroke="#49352C" strokeWidth="1.2" />
      {/* Bedding pillows & throw */}
      <rect x="155" y="195" width="90" height="24" rx="4" fill="#FFFFFF" stroke="#D8CDBB" strokeWidth="1" />
      <rect x="255" y="195" width="90" height="24" rx="4" fill="#FFFFFF" stroke="#D8CDBB" strokeWidth="1" />
      <rect x="140" y="220" width="220" height="60" fill="#EAE3D2" stroke="#49352C" strokeWidth="1.2" />

      {/* Nightstands with Champagne Brass Handles */}
      <rect x="55" y="210" width="65" height="45" rx="3" fill="#FAF6EE" stroke="#49352C" strokeWidth="1.5" />
      <rect x="80" y="228" width="15" height="3" rx="1" fill="#D4AF37" />
      <rect x="380" y="210" width="65" height="45" rx="3" fill="#FAF6EE" stroke="#49352C" strokeWidth="1.5" />
      <rect x="405" y="228" width="15" height="3" rx="1" fill="#D4AF37" />

      {/* Dimensions */}
      <line x1="40" y1="298" x2="460" y2="298" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="40" y1="293" x2="40" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="460" y1="293" x2="460" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <text x="250" y="310" textAnchor="middle" fill="#8C7A6B" fontSize="9" fontFamily="monospace">
        W: 3800 mm · QUARTZITE SLAB: 2000 mm × 1700 mm · FFL ±0.00
      </text>

      <text x="45" y="28" fill="#49352C" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">
        ELEVATION 05 · 5 BHK VILLA MASTER SUITE BED WALL (1:20)
      </text>
    </svg>
  );
}

export function EkkatDisplayAlcoveElevationSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full select-none ${className}`}
      aria-label="Ekkat Boutique Arched Display Alcove Elevation"
    >
      <rect width="500" height="320" fill="#F7F3EB" />
      <line x1="20" y1="280" x2="480" y2="280" stroke="#49352C" strokeWidth="2" />
      <line x1="20" y1="35" x2="480" y2="35" stroke="#49352C" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />

      {/* Main Wall Plaster */}
      <rect x="40" y="40" width="420" height="240" fill="#FCFAF6" stroke="#D8CDBB" strokeWidth="1.5" />

      {/* Roman Arch Display Alcoves (Left & Right) */}
      {/* Left Arch */}
      <path d="M 80 230 L 80 120 A 45 45 0 0 1 170 120 L 170 230 Z" fill="#F4ECE1" stroke="#49352C" strokeWidth="1.6" />
      <path d="M 84 230 L 84 122 A 41 41 0 0 1 166 122 L 166 230 Z" fill="#EFE5D6" />
      {/* Backlit halo wash */}
      <path d="M 82 230 L 82 120 A 43 43 0 0 1 168 120 L 168 230" stroke="#D4AF37" strokeWidth="2" opacity="0.4" fill="none" />

      {/* Right Arch */}
      <path d="M 330 230 L 330 120 A 45 45 0 0 1 420 120 L 420 230 Z" fill="#F4ECE1" stroke="#49352C" strokeWidth="1.6" />
      <path d="M 334 230 L 334 122 A 41 41 0 0 1 416 122 L 416 230 Z" fill="#EFE5D6" />
      <path d="M 332 230 L 332 120 A 43 43 0 0 1 418 120 L 418 230" stroke="#D4AF37" strokeWidth="2" opacity="0.4" fill="none" />

      {/* Center Monumental Arch Alcove */}
      <path d="M 195 240 L 195 95 A 55 55 0 0 1 305 95 L 305 240 Z" fill="#F0E6D5" stroke="#49352C" strokeWidth="2" />
      <path d="M 200 240 L 200 98 A 50 50 0 0 1 300 98 L 300 240 Z" fill="#EADECB" />

      {/* Brass Hanging Rail inside Center Arch */}
      <line x1="215" y1="130" x2="285" y2="130" stroke="#D4AF37" strokeWidth="2.5" />
      <line x1="215" y1="95" x2="215" y2="130" stroke="#D4AF37" strokeWidth="1.5" />
      <line x1="285" y1="95" x2="285" y2="130" stroke="#D4AF37" strokeWidth="1.5" />

      {/* Draped Textile Saree Mannequin / Swatches */}
      <path d="M 230 130 Q 235 180 225 220 L 275 220 Q 265 180 270 130 Z" fill="#B86645" opacity="0.85" stroke="#49352C" strokeWidth="1" />

      {/* Monolithic Travertine Display Plinths */}
      <rect x="75" y="230" width="100" height="50" fill="#DFD5C4" stroke="#49352C" strokeWidth="1.5" />
      <rect x="190" y="240" width="120" height="40" fill="#D5C9B4" stroke="#49352C" strokeWidth="1.8" />
      <rect x="325" y="230" width="100" height="50" fill="#DFD5C4" stroke="#49352C" strokeWidth="1.5" />

      {/* Folded Silk Stacks on Left & Right Plinths */}
      <rect x="90" y="218" width="70" height="12" rx="2" fill="#EAE3D2" stroke="#49352C" strokeWidth="1" />
      <rect x="95" y="208" width="60" height="10" rx="2" fill="#C29B6B" stroke="#49352C" strokeWidth="1" />
      <rect x="340" y="218" width="70" height="12" rx="2" fill="#CBB394" stroke="#49352C" strokeWidth="1" />
      <rect x="345" y="208" width="60" height="10" rx="2" fill="#66713E" stroke="#49352C" strokeWidth="1" />

      {/* Museum Track Spots overhead */}
      <line x1="60" y1="55" x2="440" y2="55" stroke="#2E2824" strokeWidth="2" />
      <rect x="120" y="55" width="10" height="12" fill="#49352C" rx="1" />
      <rect x="245" y="55" width="10" height="12" fill="#49352C" rx="1" />
      <rect x="370" y="55" width="10" height="12" fill="#49352C" rx="1" />

      {/* Dimension Line */}
      <line x1="75" y1="298" x2="425" y2="298" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="75" y1="293" x2="75" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="425" y1="293" x2="425" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <text x="250" y="310" textAnchor="middle" fill="#8C7A6B" fontSize="9" fontFamily="monospace">
        W: 3500 mm · ARCH RADIUS: 550 mm · TRAVERTINE PLINTHS: +450 mm
      </text>

      <text x="45" y="28" fill="#49352C" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">
        ELEVATION 01 · EKKAT BOUTIQUE ARCHED DISPLAY ALCOVE (1:20)
      </text>
    </svg>
  );
}

export function EkkatCashWrapElevationSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full select-none ${className}`}
      aria-label="Ekkat Boutique Cash-Wrap Counter Elevation"
    >
      <rect width="500" height="320" fill="#F7F3EB" />
      <line x1="20" y1="280" x2="480" y2="280" stroke="#49352C" strokeWidth="2" />
      <line x1="20" y1="35" x2="480" y2="35" stroke="#49352C" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />

      {/* Feature Wall: Textured Lime Plaster with Fluted Walnut Pilasters */}
      <rect x="40" y="40" width="420" height="240" fill="#FCFAF6" stroke="#D8CDBB" strokeWidth="1.5" />
      <rect x="60" y="40" width="380" height="240" fill="#F5EFE6" />

      {/* Arched Wall Backing behind Cash Wrap */}
      <path d="M 150 240 L 150 110 A 100 100 0 0 1 350 110 L 350 240 Z" fill="#EDE4D5" stroke="#49352C" strokeWidth="1.5" />
      <text x="250" y="105" textAnchor="middle" fill="#49352C" fontSize="16" fontFamily="serif" letterSpacing="4">
        EKKAT
      </text>
      <text x="250" y="125" textAnchor="middle" fill="#8C7A6B" fontSize="8" fontFamily="sans-serif" letterSpacing="2">
        JAIPUR · EST. 2024
      </text>

      {/* Fluted Oak Reception / Cash Wrap Counter */}
      <rect x="110" y="180" width="280" height="100" rx="12" fill="#7A4D33" stroke="#49352C" strokeWidth="2" />
      {/* Fluted Oak Slats */}
      {Array.from({ length: 26 }).map((_, i) => (
        <line
          key={i}
          x1={120 + i * 10}
          y1="192"
          x2={120 + i * 10}
          y2="275"
          stroke="#5C3822"
          strokeWidth="2"
        />
      ))}

      {/* Honed Roman Travertine Countertop with 30mm Overhang & Brass Trim */}
      <rect x="100" y="170" width="300" height="16" rx="4" fill="#DFD5C4" stroke="#49352C" strokeWidth="1.8" />
      <line x1="100" y1="184" x2="400" y2="184" stroke="#D4AF37" strokeWidth="2" />

      {/* Recessed Kickplate Plinth */}
      <rect x="125" y="275" width="250" height="5" fill="#3D281C" />

      {/* Minimalist POS Terminal & Brass Bell */}
      <rect x="230" y="150" width="40" height="20" rx="2" fill="#2E2824" stroke="#1A1614" strokeWidth="1" />
      <circle cx="200" cy="166" r="4" fill="#D4AF37" />

      {/* Dimension Lines */}
      <line x1="100" y1="298" x2="400" y2="298" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="100" y1="293" x2="100" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="400" y1="293" x2="400" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <text x="250" y="310" textAnchor="middle" fill="#8C7A6B" fontSize="9" fontFamily="monospace">
        W: 2800 mm · COUNTERTOP: 1050 mm FFL · TRAVERTINE TOP: 30 mm
      </text>

      <text x="45" y="28" fill="#49352C" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">
        ELEVATION 02 · EKKAT BOUTIQUE CASH-WRAP COUNTER (1:20)
      </text>
    </svg>
  );
}

export function EkkatGarmentRailElevationSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full select-none ${className}`}
      aria-label="Ekkat Boutique Freestanding Garment Rail Elevation"
    >
      <rect width="500" height="320" fill="#F7F3EB" />
      <line x1="20" y1="280" x2="480" y2="280" stroke="#49352C" strokeWidth="2" />
      <line x1="20" y1="35" x2="480" y2="35" stroke="#49352C" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />

      {/* Lime Plaster Backdrop */}
      <rect x="40" y="40" width="420" height="240" fill="#FCFAF6" stroke="#D8CDBB" strokeWidth="1.5" />

      {/* Ceiling Drop Brass Suspension Pipes */}
      <line x1="120" y1="35" x2="120" y2="90" stroke="#D4AF37" strokeWidth="3" />
      <line x1="380" y1="35" x2="380" y2="90" stroke="#D4AF37" strokeWidth="3" />

      {/* Continuous Curved Brushed Brass Apparel Hanging Rail */}
      <path d="M 120 90 Q 120 100 130 100 L 370 100 Q 380 100 380 90" stroke="#D4AF37" strokeWidth="3.5" fill="none" />
      <line x1="120" y1="90" x2="120" y2="250" stroke="#D4AF37" strokeWidth="3" />
      <line x1="380" y1="90" x2="380" y2="250" stroke="#D4AF37" strokeWidth="3" />
      <line x1="110" y1="250" x2="130" y2="250" stroke="#D4AF37" strokeWidth="4" />
      <line x1="370" y1="250" x2="390" y2="250" stroke="#D4AF37" strokeWidth="4" />

      {/* Suspended Clothes Hangers with Designer Garments */}
      {Array.from({ length: 6 }).map((_, i) => {
        const x = 150 + i * 40;
        const colors = ["#C29B6B", "#B86645", "#5E6941", "#7A4D33", "#DFD5C4", "#B89758"];
        return (
          <g key={i}>
            <path d={`M ${x} 100 L ${x} 115 L ${x - 12} 125 L ${x + 12} 125 Z`} stroke="#D4AF37" strokeWidth="1.2" fill="none" />
            <rect x={x - 10} y={125} width={20} height={75} rx={3} fill={colors[i]} stroke="#49352C" strokeWidth="1" opacity="0.9" />
          </g>
        );
      })}

      {/* Travertine Shoe / Bag Pedestal Cube */}
      <rect x="200" y="240" width="100" height="40" fill="#DFD5C4" stroke="#49352C" strokeWidth="1.5" />
      <ellipse cx="250" cy="235" rx="16" ry="6" fill="#7A4D33" stroke="#49352C" strokeWidth="1" />

      {/* Dimension Line */}
      <line x1="120" y1="298" x2="380" y2="298" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="120" y1="293" x2="120" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <line x1="380" y1="293" x2="380" y2="303" stroke="#8C7A6B" strokeWidth="0.8" />
      <text x="250" y="310" textAnchor="middle" fill="#8C7A6B" fontSize="9" fontFamily="monospace">
        W: 2400 mm · HANGING RAIL: 1600 mm AFF · TRAVERTINE CUBE: 400 mm
      </text>

      <text x="45" y="28" fill="#49352C" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">
        ELEVATION 03 · EKKAT BOUTIQUE BESPOKE APPAREL RAIL (1:20)
      </text>
    </svg>
  );
}


