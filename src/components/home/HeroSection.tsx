"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WavyDivider } from "@/components/ui/WavyDivider";
import { ArchitecturalFloorPlanWatermark } from "@/components/ui/ArchitecturalFloorPlanWatermark";
import { playTap } from "@/lib/sound";

export function HeroSection() {
  return (
    <section
      id="home"
      data-section="0"
      className="relative min-h-[100svh] w-full bg-[#FAF6F0] flex flex-col justify-between pt-24 md:pt-28 pb-0 overflow-hidden"
    >
      {/* Subtle CAD Floor Plan Background Architectural Detailing */}
      <ArchitecturalFloorPlanWatermark
        variant="detailed"
        opacity="opacity-[0.035]"
        className="transform -translate-y-12 scale-105"
      />

      {/* Background paper texture & warm ambient sun wash */}
      <div className="absolute inset-0 paper-grain pointer-events-none opacity-30" />
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-sunflower/10 blur-3xl pointer-events-none" />

      {/* Cinematic Foreground Out-of-Focus Botanical Leaves (Left & Right for depth of field) */}
      <div className="absolute -left-12 top-1/4 z-30 pointer-events-none hidden xl:block opacity-75 blur-[2px] transform -rotate-12 scale-125">
        <svg width="220" height="340" viewBox="0 0 220 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-40 80 C20 40 120 120 160 220 C180 270 140 320 80 340 C20 360 -20 280 -40 220 Z" fill="#4B5632" opacity="0.85" />
          <path d="M-60 140 C-10 110 80 160 110 240 C120 280 80 310 40 320 Z" fill="#66713E" opacity="0.9" />
          <path d="M-80 20 C-30 -10 60 50 90 140 C100 180 60 210 20 220 Z" fill="#3D4528" opacity="0.8" />
        </svg>
      </div>

      <div className="absolute -right-10 top-1/3 z-30 pointer-events-none hidden xl:block opacity-65 blur-[2.5px] transform rotate-12 scale-110">
        <svg width="200" height="300" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M240 60 C180 20 80 100 40 200 C20 250 60 300 120 310 C180 320 220 250 240 180 Z" fill="#4B5632" opacity="0.85" />
          <path d="M260 120 C210 90 120 140 90 220 C80 260 120 290 160 300 Z" fill="#66713E" opacity="0.9" />
        </svg>
      </div>

      <div className="max-w-master mx-auto w-full px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-center my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* =========================================================
              LEFT COLUMN: Typography, Story, CTA & Proof (cols 1-5)
             ========================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-4 lg:pt-0">
            {/* Top Eyebrow Tag matching reference */}
            <div className="flex items-start gap-2.5 mb-4">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-sans font-bold text-brown-soft leading-tight">
                SPACES FOR A<br />BRIGHTER TOMORROW
              </span>
            </div>

            {/* Main Headline: Designing spaces that feel like home. */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[80px] leading-[1.04] text-brown font-normal tracking-tight mb-5">
              Designing<br className="hidden sm:inline" />
              {" "}spaces that<br className="hidden sm:inline" />
              {" "}feel like{" "}
              <span className="relative inline-block font-serif italic font-normal text-sunflower-deep drop-shadow-xs">
                home.
                {/* Yellow Underline Draw Animation */}
                <svg
                  viewBox="0 0 160 16"
                  fill="none"
                  className="absolute -bottom-1.5 left-0 w-full h-3 text-sunflower overflow-visible pointer-events-none animate-draw-underline"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 2 10 Q 45 3, 90 9 T 158 7"
                    stroke="#F0B83A"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle / Bio matching reference */}
            <p className="font-sans text-brown-soft text-sm sm:text-base leading-relaxed max-w-md mb-6 font-normal">
              Thoughtful interiors for a kinder, brighter everyday. I&apos;m Muskan Pareek, an interior designer creating soulful, functional and timeless spaces that reflect you.
            </p>

            {/* Action Row: CTA Button + Handwritten Note beside it */}
            <div className="flex items-center gap-6 sm:gap-8 mb-6">
              <Link
                href="#projects"
                onClick={() => playTap()}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-sunflower text-charcoal font-semibold text-sm shadow-md hover:bg-sunflower-deep transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer shrink-0"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Stacked Handwritten Script: Good Spaces Brighter People ♡ ✦ */}
              <div className="flex flex-col items-center select-none text-left">
                <span className="font-hand text-xl sm:text-2xl text-brown-soft leading-[1.1] text-center">
                  Good<br />Spaces<br />Brighter<br />People<br />♡
                </span>
                {/* 4-point sparkle twinkle star */}
                <svg className="w-3.5 h-3.5 text-sunflower mt-1 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>
              </div>
            </div>

            {/* Bottom Proof Metrics Bar matching reference (divide-x) */}
            <div className="grid grid-cols-3 divide-x divide-stone/45 pt-5 border-t border-stone/35 max-w-md">
              <div className="pr-3 sm:pr-4">
                <div className="font-display text-3xl sm:text-4xl text-brown font-normal leading-none">50+</div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-brown-soft mt-1">Projects</div>
              </div>
              <div className="px-3 sm:px-4">
                <div className="font-display text-3xl sm:text-4xl text-brown font-normal leading-none">4+</div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-brown-soft mt-1">Years Experience</div>
              </div>
              <div className="pl-3 sm:pl-4">
                <div className="font-display text-3xl sm:text-4xl text-brown font-normal leading-none">100%</div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-brown-soft mt-1">On-Time Handover</div>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Signature Twin Roman Arches & Muskan
              (cols 6-12) - Exactly matching the uploaded design
             ========================================================= */}
          <div className="lg:col-span-7 relative order-1 lg:order-2 flex justify-center items-center">
            
            {/* The Twin Roman Arches Composition Container */}
            <div className="relative w-full max-w-2xl lg:max-w-none aspect-[4/4.2] sm:aspect-[4/3.6] lg:aspect-[16/10.2] rounded-t-[140px] sm:rounded-t-[200px] lg:rounded-t-[260px] rounded-b-3xl overflow-hidden shadow-2xl border-4 border-stone/30 bg-[#F4EEE2] group ring-8 ring-stone/15 transition-all duration-500 hover:ring-sunflower/20">
              
              {/* Clean Muskan Hero Photo with Twin Roman Arches & Sunflowers */}
              <Image
                src="/images/muskan/muskan-hero-clean.jpg"
                alt="Muskan Pareek — Interior Designer in Sunlit Twin-Arch Mediterranean Space"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover object-[center_42%] group-hover:scale-102 transition-transform duration-700 ease-out"
              />

              {/* Soft warm sunbeam wash */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Floating Top-Right Note inside Arch: Interior for a Kinder World ♡ */}
              <div className="absolute top-6 sm:top-10 right-6 sm:right-12 z-20 text-center font-hand select-none pointer-events-none drop-shadow-xs hidden sm:block">
                <div className="text-2xl sm:text-3xl text-brown font-medium leading-tight">
                  Interior<br />
                  for a Kinder<br />
                  World ♡
                </div>
                <div className="text-[8px] sm:text-[9px] uppercase font-mono tracking-[0.2em] text-brown-soft font-bold mt-2 leading-tight">
                  A QUIET<br />
                  SANCTUARY<br />
                  TO GROW
                </div>
              </div>

              {/* Yellow Circular Sun Badge (from Reference Image 1) */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-sunflower/95 backdrop-blur-xs shadow-lg border border-sunflower-deep/30 flex flex-col items-center justify-center text-charcoal select-none group-hover:rotate-6 transition-transform duration-500">
                <span className="text-[7.5px] sm:text-[9px] font-mono uppercase font-bold tracking-wider text-center leading-[1.1] px-1">
                  GOOD<br />SPACES<br />BRIGHTER<br />DAYS
                </span>
                {/* Radiating Sun Icon */}
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-charcoal mt-1 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="4" />
                  <line x1="12" y1="2" x2="12" y2="4" />
                  <line x1="12" y1="20" x2="12" y2="22" />
                  <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
                  <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
                  <line x1="2" y1="12" x2="4" y2="12" />
                  <line x1="20" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
                  <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
                </svg>
              </div>

              {/* Floating Bottom-Right Taped Quote Card matching reference */}
              <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 z-20 bg-paper/95 backdrop-blur-md p-3.5 sm:p-5 rounded-2xl shadow-xl border border-stone/30 max-w-[210px] sm:max-w-[270px]">
                {/* Washi Tape strip */}
                <div className="w-10 sm:w-12 h-3 sm:h-3.5 bg-sunflower/50 mx-auto -mt-5 sm:-mt-7 mb-1.5 sm:mb-2 rounded-xs rotate-[-1deg] shadow-2xs" />
                <p className="font-display italic text-xs sm:text-sm text-brown leading-snug">
                  &ldquo;A well-designed space can change the way you feel every day.&rdquo;
                </p>
                <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-olive font-bold mt-1.5 sm:mt-2">
                  — MUSKAN PAREEK
                </div>
              </div>

              {/* Ambient location pill */}
              <div className="absolute top-4 left-4 z-20 bg-paper/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[9px] font-mono text-olive font-semibold border border-stone/30 shadow-xs hidden sm:flex items-center gap-1.5 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse" />
                <span>Jaipur &amp; Bengaluru</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Gentle sweeping organic wave curve at the bottom into Section 01 */}
      <div className="relative w-full z-20 mt-8">
        <WavyDivider fill="#FFFDF7" position="bottom" />
      </div>
    </section>
  );
}
