"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";
import { PaperNote } from "@/components/ui/PaperNote";
import { MaterialSpecModal, MaterialSpecItem } from "@/components/projects/MaterialSpecModal";
import { THE_CALM_HOUSE_MATERIALS, MR_VIVEK_RESIDENCE_MATERIALS } from "@/data/fixtures/project-materials";
import { playTap } from "@/lib/sound";

interface ProjectMoodboardInteractiveProps {
  slug: string;
}

export function ProjectMoodboardInteractive({ slug }: ProjectMoodboardInteractiveProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const materials: MaterialSpecItem[] =
    slug === "mr-vivek-residence"
      ? MR_VIVEK_RESIDENCE_MATERIALS
      : THE_CALM_HOUSE_MATERIALS;

  const openInspector = (index: number) => {
    playTap();
    setSelectedIdx(index);
    setModalOpen(true);
  };

  return (
    <>
      {/* Interactive Helper Banner */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono text-olive font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Material Palette · Click any swatch or tile to inspect macro texture &amp; joinery specs</span>
        </div>
        <button
          onClick={() => openInspector(0)}
          className="text-xs font-mono px-3 py-1.5 rounded-full bg-stone/20 hover:bg-sunflower hover:text-charcoal text-brown-soft transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <ZoomIn className="w-3.5 h-3.5" />
          <span>Open Full Spec Sheet</span>
        </button>
      </div>

      {slug === "mr-vivek-residence" ? (
        /* Mr. Vivek Bespoke Authentic Moodboard */
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4 items-center">
          {/* Item 1: Real VF 1002 Sample Swatch */}
          <div className="col-span-1 space-y-3">
            <button
              onClick={() => openInspector(0)}
              className="w-full text-left relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-stone/30 group bg-paper-card cursor-pointer transition-transform hover:-translate-y-1"
            >
              <Image
                src="/images/projects/mr-vivek-residence/mr_vivek_img_18_1280x573.png"
                alt="VF 1002 Off White Fluted Laminate Sample Swatch"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-2 left-2 bg-charcoal/80 text-paper text-[8px] font-mono px-1.5 py-0.5 rounded">
                VF 1002
              </span>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold text-white bg-charcoal/80 px-2 py-1 rounded-md flex items-center gap-1">
                  <ZoomIn className="w-3 h-3 text-sunflower" /> Spec
                </span>
              </div>
            </button>

            {/* Item 2: Hexagonal Rattan Cane Mesh */}
            <button
              onClick={() => openInspector(1)}
              className="w-full text-left relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-stone/30 group cursor-pointer transition-transform hover:-translate-y-1"
            >
              <Image
                src="/images/projects/mr-vivek-residence/master-bedroom-rattan-wardrobe.png"
                alt="Natural Hexagonal Cane Rattan"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-2 left-2 bg-charcoal/80 text-paper text-[8px] font-mono px-1.5 py-0.5 rounded">
                CANE WEAVE
              </span>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold text-white bg-charcoal/80 px-2 py-1 rounded-md flex items-center gap-1">
                  <ZoomIn className="w-3 h-3 text-sunflower" /> Spec
                </span>
              </div>
            </button>
          </div>

          {/* Item 3: Arched TV Niche with Acoustic Wood Battens */}
          <div className="col-span-1 md:col-span-2 relative aspect-[3/4.2] rounded-2xl overflow-hidden shadow-sm border border-stone/30 group">
            <button
              onClick={() => openInspector(2)}
              className="w-full h-full text-left relative cursor-pointer"
            >
              <Image
                src="/images/projects/mr-vivek-residence/hero-living-tv-unit.png"
                alt="Living TV Niche with Acoustic Battens"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-charcoal/70 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                <ZoomIn className="w-3 h-3 text-sunflower" /> Inspect Battens
              </div>
            </button>
            <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
              <PaperNote rotate="left" className="text-sm">
                Acoustic Oak Battens &amp; Warm Ambient Cove ♡
              </PaperNote>
            </div>
          </div>

          {/* Item 4: 5 Circular Material Color Swatches */}
          <div className="col-span-1 p-4 bg-paper-card rounded-2xl border border-stone/30 flex flex-col items-center justify-center gap-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-brown-soft font-semibold text-center">
              Material Tones
            </span>
            <div className="flex flex-col gap-2.5 items-center">
              <button
                onClick={() => openInspector(0)}
                className="w-8 h-8 rounded-full bg-[#F2EDE4] border border-stone/40 shadow-inner hover:scale-115 transition-transform cursor-pointer relative group"
                title="Inspect VF 1002 Off-White"
              >
                <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-[9px] font-mono bg-charcoal text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  VF 1002
                </span>
              </button>
              <button
                onClick={() => openInspector(1)}
                className="w-8 h-8 rounded-full bg-[#C4A67B] shadow-inner hover:scale-115 transition-transform cursor-pointer relative group"
                title="Inspect Natural Cane"
              >
                <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-[9px] font-mono bg-charcoal text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Cane
                </span>
              </button>
              <button
                onClick={() => openInspector(2)}
                className="w-8 h-8 rounded-full bg-[#8B5A2B] shadow-inner hover:scale-115 transition-transform cursor-pointer relative group"
                title="Inspect Oak Battens"
              >
                <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-[9px] font-mono bg-charcoal text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Oak
                </span>
              </button>
              <button
                onClick={() => openInspector(3)}
                className="w-8 h-8 rounded-full bg-[#CBBDA8] shadow-inner hover:scale-115 transition-transform cursor-pointer relative group"
                title="Inspect Champagne Taupe"
              >
                <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-[9px] font-mono bg-charcoal text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Taupe PU
                </span>
              </button>
              <button
                onClick={() => openInspector(4)}
                className="w-8 h-8 rounded-full bg-[#2E3033] shadow-inner hover:scale-115 transition-transform cursor-pointer relative group"
                title="Inspect Smoked Glass"
              >
                <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-[9px] font-mono bg-charcoal text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Smoked Glass
                </span>
              </button>
            </div>
            <span className="text-[9px] font-mono text-olive mt-1 text-center">
              Click dot to view spec
            </span>
          </div>

          {/* Item 5 & 6: Smoked Glass Vitrine + Foyer Walnut Arch Inlay */}
          <div className="col-span-1 space-y-3">
            <button
              onClick={() => openInspector(4)}
              className="w-full text-left relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-stone/30 group cursor-pointer transition-transform hover:-translate-y-1"
            >
              <Image
                src="/images/projects/mr-vivek-residence/modular-kitchen-island.png"
                alt="Smoked Glass Kitchen Overhead Vitrines"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-2 left-2 bg-charcoal/80 text-paper text-[8px] font-mono px-1.5 py-0.5 rounded">
                SMOKED GLASS
              </span>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold text-white bg-charcoal/80 px-2 py-1 rounded-md flex items-center gap-1">
                  <ZoomIn className="w-3 h-3 text-sunflower" /> Spec
                </span>
              </div>
            </button>
            <button
              onClick={() => openInspector(5)}
              className="w-full text-left relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-stone/30 group cursor-pointer transition-transform hover:-translate-y-1"
            >
              <Image
                src="/images/projects/mr-vivek-residence/foyer-shoe-rack-console.jpg"
                alt="Walnut Arch Inlay Foyer Console"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-2 left-2 bg-charcoal/80 text-paper text-[8px] font-mono px-1.5 py-0.5 rounded">
                WALNUT INLAY
              </span>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold text-white bg-charcoal/80 px-2 py-1 rounded-md flex items-center gap-1">
                  <ZoomIn className="w-3 h-3 text-sunflower" /> Spec
                </span>
              </div>
            </button>
          </div>

          {/* Item 7: Dining Crockery Credenza & Fluted Wall */}
          <div className="col-span-2 relative aspect-[3/4.2] rounded-2xl overflow-hidden shadow-sm border border-stone/30 group">
            <button
              onClick={() => openInspector(0)}
              className="w-full h-full text-left relative cursor-pointer"
            >
              <Image
                src="/images/projects/mr-vivek-residence/dining-crockery-bar-console.png"
                alt="Dining Crockery Credenza with Fluted Wall"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-charcoal/70 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                <ZoomIn className="w-3 h-3 text-sunflower" /> Inspect Credenza
              </div>
            </button>
            <div className="absolute top-4 right-4 z-10 pointer-events-none">
              <PaperNote rotate="right" hasTape={false} className="text-sm">
                VF 1002, Cane &amp; Fluted Glass ♡
              </PaperNote>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-paper-card/90 backdrop-blur-sm p-3 rounded-xl border border-stone/30 text-center pointer-events-none">
              <span className="font-display text-lg text-brown block">Mr. Vivek Residence</span>
              <span className="text-[10px] uppercase font-mono text-olive font-semibold">
                SPEC: VF 1002 · SYSTEM 32 · GOLA PROFILE
              </span>
            </div>
          </div>
        </div>
      ) : slug === "the-calm-house" ? (
        /* The Sarthak Residence Bespoke Moodboard */
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4 items-center">
          {/* Item 1: Translucent Alabaster Mandir Door */}
          <div className="col-span-1 space-y-3">
            <button
              onClick={() => openInspector(0)}
              className="w-full text-left relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-stone/30 group cursor-pointer transition-transform hover:-translate-y-1"
            >
              <Image
                src="/images/projects/sarthak-residence/pooja-unit-glass-doors.png"
                alt="Translucent Alabaster Mandir Screen"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-2 left-2 bg-charcoal/80 text-paper text-[8px] font-mono px-1.5 py-0.5 rounded">
                ALABASTER
              </span>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold text-white bg-charcoal/80 px-2 py-1 rounded-md flex items-center gap-1">
                  <ZoomIn className="w-3 h-3 text-sunflower" /> Spec
                </span>
              </div>
            </button>

            {/* Item 2: Honey Walnut Veneer Wardrobe */}
            <button
              onClick={() => openInspector(1)}
              className="w-full text-left relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-stone/30 group cursor-pointer transition-transform hover:-translate-y-1"
            >
              <Image
                src="/images/projects/sarthak-residence/master-bedroom-wardrobe-corner.jpg"
                alt="Honey Walnut Wardrobe Millwork"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-2 left-2 bg-charcoal/80 text-paper text-[8px] font-mono px-1.5 py-0.5 rounded">
                HONEY WALNUT
              </span>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold text-white bg-charcoal/80 px-2 py-1 rounded-md flex items-center gap-1">
                  <ZoomIn className="w-3 h-3 text-sunflower" /> Spec
                </span>
              </div>
            </button>
          </div>

          {/* Item 3: Master Bed Roman Arch Cove */}
          <div className="col-span-1 md:col-span-2 relative aspect-[3/4.2] rounded-2xl overflow-hidden shadow-sm border border-stone/30 group">
            <button
              onClick={() => openInspector(4)}
              className="w-full h-full text-left relative cursor-pointer"
            >
              <Image
                src="/images/projects/sarthak-residence/master-bedroom-hero.png"
                alt="Master Suite Roman Arch Headboard Cove"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-charcoal/70 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                <ZoomIn className="w-3 h-3 text-sunflower" /> Inspect Cove
              </div>
            </button>
            <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
              <PaperNote rotate="left" className="text-sm">
                Neoclassical Arches &amp; Natural Daylight ♡
              </PaperNote>
            </div>
          </div>

          {/* Item 4: 5 Circular Material Color Swatches */}
          <div className="col-span-1 p-4 bg-paper-card rounded-2xl border border-stone/30 flex flex-col items-center justify-center gap-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-brown-soft font-semibold text-center">
              Material Tones
            </span>
            <div className="flex flex-col gap-2.5 items-center">
              <button
                onClick={() => openInspector(0)}
                className="w-8 h-8 rounded-full bg-[#F7F5F0] border border-stone/40 shadow-inner hover:scale-115 transition-transform cursor-pointer relative group"
                title="Inspect Alabaster"
              >
                <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-[9px] font-mono bg-charcoal text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Alabaster
                </span>
              </button>
              <button
                onClick={() => openInspector(4)}
                className="w-8 h-8 rounded-full bg-[#E7DFD3] shadow-inner hover:scale-115 transition-transform cursor-pointer relative group"
                title="Inspect Botticino Marble"
              >
                <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-[9px] font-mono bg-charcoal text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Botticino
                </span>
              </button>
              <button
                onClick={() => openInspector(1)}
                className="w-8 h-8 rounded-full bg-[#634228] shadow-inner hover:scale-115 transition-transform cursor-pointer relative group"
                title="Inspect Walnut Veneer"
              >
                <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-[9px] font-mono bg-charcoal text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Walnut
                </span>
              </button>
              <button
                onClick={() => openInspector(2)}
                className="w-8 h-8 rounded-full bg-[#3A3836] shadow-inner hover:scale-115 transition-transform cursor-pointer relative group"
                title="Inspect Smoked Fluted Glass"
              >
                <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-[9px] font-mono bg-charcoal text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Fluted Glass
                </span>
              </button>
              <button
                onClick={() => openInspector(3)}
                className="w-8 h-8 rounded-full bg-[#D4AF37] shadow-inner hover:scale-115 transition-transform cursor-pointer relative group"
                title="Inspect Brushed Brass"
              >
                <span className="absolute -left-16 top-1/2 -translate-y-1/2 text-[9px] font-mono bg-charcoal text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Brass
                </span>
              </button>
            </div>
            <span className="text-[9px] font-mono text-olive mt-1 text-center">
              Click dot to view spec
            </span>
          </div>

          {/* Item 5 & 6: Mandir Bell Detail + Bas-Relief Wall */}
          <div className="col-span-1 space-y-3">
            <button
              onClick={() => openInspector(0)}
              className="w-full text-left relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-stone/30 group cursor-pointer transition-transform hover:-translate-y-1"
            >
              <Image
                src="/images/projects/sarthak-residence/pooja-unit-open.jpg"
                alt="Backlit Mandir Bells & Alabaster Niche"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-2 left-2 bg-charcoal/80 text-paper text-[8px] font-mono px-1.5 py-0.5 rounded">
                BRASS BELLS
              </span>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold text-white bg-charcoal/80 px-2 py-1 rounded-md flex items-center gap-1">
                  <ZoomIn className="w-3 h-3 text-sunflower" /> Spec
                </span>
              </div>
            </button>
            <button
              onClick={() => openInspector(3)}
              className="w-full text-left relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-stone/30 group cursor-pointer transition-transform hover:-translate-y-1"
            >
              <Image
                src="/images/projects/sarthak-residence/foyer-console-accent-wall.png"
                alt="Entrance Foyer Brass Accents"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-2 left-2 bg-charcoal/80 text-paper text-[8px] font-mono px-1.5 py-0.5 rounded">
                BRASS INLAY
              </span>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold text-white bg-charcoal/80 px-2 py-1 rounded-md flex items-center gap-1">
                  <ZoomIn className="w-3 h-3 text-sunflower" /> Spec
                </span>
              </div>
            </button>
          </div>

          {/* Item 7: Master Bedroom Headboard & Arched Profile */}
          <div className="col-span-2 relative aspect-[3/4.2] rounded-2xl overflow-hidden shadow-sm border border-stone/30 group">
            <button
              onClick={() => openInspector(4)}
              className="w-full h-full text-left relative cursor-pointer"
            >
              <Image
                src="/images/projects/sarthak-residence/master-bedroom-arched-headboard.png"
                alt="Master Bedroom Arched Headboard & Marble Finish"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-charcoal/70 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                <ZoomIn className="w-3 h-3 text-sunflower" /> Inspect Headboard
              </div>
            </button>
            <div className="absolute top-4 right-4 z-10 pointer-events-none">
              <PaperNote rotate="right" hasTape={false} className="text-sm">
                Alabaster, Brass &amp; Walnut ♡
              </PaperNote>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-paper-card/90 backdrop-blur-sm p-3 rounded-xl border border-stone/30 text-center pointer-events-none">
              <span className="font-display text-lg text-brown block">The Sarthak Residence</span>
              <span className="text-[10px] uppercase font-mono text-olive font-semibold">
                SPEC: AL-701 · VN-304 · MB-201 · BRASS
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* Generic Project Palette */
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {materials.map((mat, idx) => (
            <button
              key={mat.id}
              onClick={() => openInspector(idx)}
              className="text-left p-4 rounded-2xl bg-paper-card border border-stone/30 hover:border-sunflower hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-stone/20">
                <Image
                  src={mat.imageSrc}
                  alt={mat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: mat.colorHex }} />
                <span className="text-xs font-mono font-bold text-brown">{mat.code}</span>
              </div>
              <div className="text-sm font-display text-brown font-medium truncate">{mat.name}</div>
              <div className="text-[10px] text-brown-soft font-sans truncate">{mat.application}</div>
            </button>
          ))}
        </div>
      )}

      {/* Modal Inspector Component */}
      <MaterialSpecModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        materials={materials}
        initialIndex={selectedIdx}
      />
    </>
  );
}
