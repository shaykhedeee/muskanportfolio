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
      <div className="absolute inset-0 paper-grain pointer-events-none opacity-25" />
      <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] rounded-full bg-sunflower/10 blur-3xl pointer-events-none" />

      <div className="max-w-master mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-center my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* =========================================================
              LEFT COLUMN: Typography, Story, CTA & Proof (cols 1-5)
             ========================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-1 pt-2 lg:pt-0">
            {/* Top Eyebrow Tag: Minimalist Architectural Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paper/95 backdrop-blur-xs border border-stone/35 shadow-xs mb-4 sm:mb-5 w-fit">
              <span className="w-2 h-2 rounded-full bg-sunflower animate-pulse" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-mono font-semibold text-brown">
                Studio Muskan Pareek · Interior Architecture
              </span>
            </div>

            {/* Main Headline: Designing spaces that feel like home. */}
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[78px] leading-[1.06] text-brown font-normal tracking-tight mb-4 sm:mb-5">
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

            {/* Subtitle / Bio */}
            <p className="font-sans text-brown-soft text-sm sm:text-base leading-relaxed max-w-md mb-6 font-normal">
              Thoughtful interiors for a kinder, brighter everyday. I&apos;m Muskan Pareek, an interior architect creating soulful, functional, and timeless residential and commercial spaces that reflect who you are.
            </p>

            {/* Action Row: Primary CTA + Secondary Link + Handwritten Note */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-7 sm:mb-8">
              <Link
                href="#projects"
                onClick={() => playTap()}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-sunflower text-charcoal font-semibold text-xs sm:text-sm shadow-md hover:bg-sunflower-deep transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer shrink-0"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Stacked Handwritten Script: Good Spaces Brighter People ♡ ✦ */}
              <div className="hidden sm:flex items-center gap-3 pl-2 border-l border-stone/30 select-none">
                <div className="flex flex-col text-left">
                  <span className="font-hand text-lg sm:text-xl text-brown-soft leading-[1.1]">
                    Good Spaces<br />Brighter People ♡
                  </span>
                </div>
                <svg className="w-3.5 h-3.5 text-sunflower animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>
              </div>
            </div>

            {/* Bottom Proof Metrics Bar (divide-x) */}
            <div className="grid grid-cols-3 divide-x divide-stone/40 pt-4 sm:pt-5 border-t border-stone/35 max-w-md">
              <div className="pr-2 sm:pr-4">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl text-brown font-normal leading-none">50+</div>
                <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-brown-soft mt-1">Projects</div>
              </div>
              <div className="px-2 sm:px-4">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl text-brown font-normal leading-none">4+</div>
                <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-brown-soft mt-1">Years Practice</div>
              </div>
              <div className="pl-2 sm:pl-4">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl text-brown font-normal leading-none">100%</div>
                <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-brown-soft mt-1">Turnkey Delivery</div>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Signature Twin Roman Arches & Muskan
              (cols 6-12) - Architectural Composition
             ========================================================= */}
          <div className="lg:col-span-7 relative order-2 lg:order-2 flex justify-center items-center">
            
            {/* The Twin Roman Arches Composition Container */}
            <div className="relative w-full max-w-2xl lg:max-w-none aspect-[4/4.2] sm:aspect-[4/3.6] lg:aspect-[16/10.2] rounded-t-[140px] sm:rounded-t-[200px] lg:rounded-t-[260px] rounded-b-3xl overflow-hidden shadow-2xl border-4 border-stone/30 bg-[#F4EEE2] group ring-8 ring-stone/15 transition-all duration-500 hover:ring-sunflower/20">
              
              {/* Clean Muskan Hero Photo with Twin Roman Arches & Sunflowers */}
              <Image
                src="/images/muskan/muskan-hero-clean.jpg"
                alt="Muskan Pareek — Interior Architect in Sunlit Mediterranean Arch Space"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover object-[center_42%] group-hover:scale-102 transition-transform duration-700 ease-out"
              />

              {/* Soft warm sunbeam wash */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Floating Top-Left Studio Location Badge */}
              <div className="absolute top-4 left-4 z-20 bg-paper/95 backdrop-blur-md px-3 py-1.5 rounded-full text-[9px] sm:text-[10px] font-mono text-brown font-semibold border border-stone/30 shadow-xs flex items-center gap-1.5 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-sunflower animate-pulse" />
                <span>Jaipur &amp; Bengaluru</span>
              </div>

              {/* Floating Top-Right Note inside Arch: Interior for a Kinder World ♡ */}
              <div className="absolute top-6 sm:top-10 right-6 sm:right-12 z-20 text-right font-hand select-none pointer-events-none drop-shadow-xs hidden sm:block">
                <div className="text-2xl sm:text-3xl text-brown font-medium leading-tight">
                  Interior for a<br />Kinder World ♡
                </div>
                <div className="text-[8px] sm:text-[9px] uppercase font-mono tracking-[0.2em] text-brown-soft font-bold mt-2 leading-tight">
                  A QUIET SANCTUARY TO GROW
                </div>
              </div>

              {/* Yellow Circular Sun Badge */}
              <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-2 sm:left-4 md:left-6 z-20 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full bg-sunflower/95 backdrop-blur-xs shadow-lg border border-sunflower-deep/30 flex flex-col items-center justify-center text-charcoal select-none group-hover:rotate-6 transition-transform duration-500">
                <span className="text-[6.5px] sm:text-[7.5px] md:text-[9px] font-mono uppercase font-bold tracking-wider text-center leading-[1.1] px-1">
                  GOOD<br />SPACES<br />BRIGHTER<br />DAYS
                </span>
                {/* Radiating Sun Icon */}
                <svg className="w-3.5 sm:w-4 md:w-5 h-3.5 sm:h-4 md:h-5 text-charcoal mt-0.5 sm:mt-1 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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

              {/* Floating Bottom-Right Taped Quote Card */}
              <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 right-2 sm:right-4 md:right-6 z-20 bg-paper/95 backdrop-blur-md p-2.5 sm:p-3.5 md:p-5 rounded-2xl shadow-xl border border-stone/30 max-w-[160px] sm:max-w-[210px] md:max-w-[270px]">
                {/* Washi Tape strip */}
                <div className="w-8 sm:w-10 md:w-12 h-2.5 sm:h-3 md:h-3.5 bg-sunflower/50 mx-auto -mt-4 sm:-mt-5 md:-mt-7 mb-1 sm:mb-1.5 md:mb-2 rounded-xs rotate-[-1deg] shadow-2xs" />
                <p className="font-display italic text-[11px] sm:text-xs md:text-sm text-brown leading-snug">
                  &ldquo;A well-designed space can change the way you feel every day.&rdquo;
                </p>
                <div className="text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-brown-soft font-bold mt-1 sm:mt-1.5 md:mt-2">
                  — MUSKAN PAREEK
                </div>
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
