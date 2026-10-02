import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Download,
  Mail,
  Linkedin,
  MapPin,
  ArrowLeft,
  Ruler,
  Sparkles,
} from "lucide-react";
import { PrintButton } from "./PrintButton";
import { CASE_STUDIES } from "./data";

export const metadata: Metadata = {
  title: "Offline Portfolio & Curated Selected Works | Muskan Pareek",
  description:
    "Executive interior architecture and spatial design portfolio. Curated residential & commercial case studies, AutoCAD 2D working drawings, System 32 joinery details, and photorealistic 3D visualizations.",
};

export default function OfflinePortfolioPage() {
  return (
    <div className="min-h-screen bg-[#F6F4EE] text-stone-900 selection:bg-stone-200">
      {/* SCREEN ACTION BAR (HIDDEN DURING PRINT) */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur border-b border-stone-200 px-4 sm:px-8 py-3.5 shadow-sm print:hidden">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs tracking-wider uppercase font-medium text-stone-600 hover:text-stone-950 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Live Site</span>
            </Link>
            <span className="text-stone-300">|</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-xs font-serif italic text-stone-700">
                Offline Architectural Portfolio · Curated Works 2026
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <PrintButton />
            <a
              href="/Muskan-Pareek-Interior-Design-Portfolio.pdf"
              download="Muskan-Pareek-Interior-Design-Portfolio.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-800 text-xs font-medium tracking-wide shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF File</span>
            </a>
            <a
              href="mailto:pareekmuskan1999@gmail.com"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-100 text-xs font-medium tracking-wide transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-stone-500" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </header>

      {/* SPREADS CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 print:p-0 print:m-0 print:max-w-none">
        
        {/* ======================================================== */}
        {/* SPREAD 01: FRONT COVER                                  */}
        {/* ======================================================== */}
        <section className="relative w-full bg-[#FDFBF7] border border-stone-300/80 shadow-md print:shadow-none print:border-none p-8 sm:p-14 md:p-16 mb-12 print:mb-0 print:break-after-page print:min-h-screen flex flex-col justify-between">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-stone-200 pb-4 text-xs tracking-widest uppercase font-mono text-stone-500">
            <span>PORTFOLIO OF INTERIOR ARCHITECTURE</span>
            <span>VOL. 2024–2026</span>
          </div>

          {/* Main Title Hero */}
          <div className="my-10">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-stone-100 border border-stone-200 text-xs uppercase tracking-widest font-mono text-stone-600">
              Selected Works & Technical Documentation
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-stone-950 uppercase leading-none">
              Muskan <br className="hidden sm:inline" />
              <span className="italic font-light text-stone-800">Pareek</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-stone-600 max-w-2xl font-serif italic">
              Interior Architect & Spatial Designer based in Bengaluru. Specializing in high-end residential architecture, bespoke System 32 millwork, and AutoCAD GFC technical documentation.
            </p>
          </div>

          {/* Cover Hero Image */}
          <div className="relative w-full h-80 sm:h-96 rounded-sm overflow-hidden border border-stone-300/70 my-6 bg-stone-100">
            <Image
              src="/images/projects/sarthak-residence/master-bedroom-hero.png"
              alt="Muskan Pareek Interior Architecture Cover"
              fill
              unoptimized
              className="object-cover"
              priority
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#FDFBF7]/90 backdrop-blur px-4 py-2.5 rounded border border-stone-200 text-xs flex justify-between items-center text-stone-700">
              <span className="font-medium">Featured: The Sarthak Residence Master Suite</span>
              <span className="font-mono text-stone-500">Bengaluru, Karnataka</span>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="pt-6 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-stone-600">
            <div>
              <span className="block font-mono uppercase tracking-wider text-stone-400 mb-1">
                DISCIPLINES
              </span>
              <p className="font-serif">Space Planning · System 32 Joinery · 3D Photorealism · GFC Drawings</p>
            </div>
            <div>
              <span className="block font-mono uppercase tracking-wider text-stone-400 mb-1">
                LOCATION
              </span>
              <p className="font-serif">Bengaluru, Karnataka, India</p>
            </div>
            <div>
              <span className="block font-mono uppercase tracking-wider text-stone-400 mb-1">
                POINT OF CONTACT
              </span>
              <p className="font-mono text-stone-900 font-medium">pareekmuskan1999@gmail.com</p>
              <p className="text-stone-500 font-mono">linkedin.com/in/muskan-pareek-78b19a224</p>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SPREAD 02: PHILOSOPHY, STANDARDS & TABLE OF CONTENTS     */}
        {/* ======================================================== */}
        <section className="relative w-full bg-[#FDFBF7] border border-stone-300/80 shadow-md print:shadow-none print:border-none p-8 sm:p-14 md:p-16 mb-12 print:mb-0 print:break-after-page print:min-h-screen flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-stone-200 pb-4 text-xs tracking-widest uppercase font-mono text-stone-500">
            <span>02 / OVERVIEW & STANDARDS</span>
            <span>MUSKAN PAREEK ARCHITECTURE</span>
          </div>

          <div className="my-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 tracking-tight">
              Design Philosophy: <span className="italic font-normal">Spatial Intention & Millimeter Precision</span>
            </h2>
            <p className="mt-3 text-sm text-stone-600 max-w-3xl leading-relaxed">
              Every interior project begins with an unyielding commitment to spatial harmony: choreographing natural daylight, ensuring unobstructed &ge; 900mm circulation spines, and engineering millwork to strict European System 32 tolerances. My practice unifies conceptual warmth with rigorous technical documentation.
            </p>

            {/* 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="p-4 rounded border border-stone-200 bg-stone-50/50">
                <span className="font-mono text-xs text-amber-800 font-bold block mb-1">01 / ERGONOMICS</span>
                <h3 className="font-serif font-medium text-stone-900 text-sm mb-1.5">Space Planning & Vaastu</h3>
                <p className="text-xs text-stone-600 leading-normal">
                  Circulation pathways mapped to human scale, natural light axes, and functional utility zones.
                </p>
              </div>

              <div className="p-4 rounded border border-stone-200 bg-stone-50/50">
                <span className="font-mono text-xs text-amber-800 font-bold block mb-1">02 / MILLWORK</span>
                <h3 className="font-serif font-medium text-stone-900 text-sm mb-1.5">System 32 Engineering</h3>
                <p className="text-xs text-stone-600 leading-normal">
                  32mm drilling pitch, Blum/Hafele hardware, and 30mm scribing fillers for site masonry variances.
                </p>
              </div>

              <div className="p-4 rounded border border-stone-200 bg-stone-50/50">
                <span className="font-mono text-xs text-amber-800 font-bold block mb-1">03 / CAD DRAFTING</span>
                <h3 className="font-serif font-medium text-stone-900 text-sm mb-1.5">AutoCAD 2D GFC Sets</h3>
                <p className="text-xs text-stone-600 leading-normal">
                  1:10 & 1:20 joinery sections, electrical backbox layouts, and plumbing rough-in schematics.
                </p>
              </div>

              <div className="p-4 rounded border border-stone-200 bg-stone-50/50">
                <span className="font-mono text-xs text-amber-800 font-bold block mb-1">04 / VISUALIZATION</span>
                <h3 className="font-serif font-medium text-stone-900 text-sm mb-1.5">3D Photorealism</h3>
                <p className="text-xs text-stone-600 leading-normal">
                  Accurate IES photometric light distributions, 2700K Kelvin cove lighting, and 4K material fidelity.
                </p>
              </div>
            </div>

            {/* Table of Selected Works */}
            <div className="mt-10 pt-6 border-t border-stone-200">
              <span className="font-mono text-xs uppercase tracking-widest text-stone-400 block mb-4">
                INDEX OF SELECTED CASE STUDIES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-xs">
                {CASE_STUDIES.map((c) => (
                  <div key={c.num} className="flex items-center justify-between py-1.5 border-b border-stone-100">
                    <span className="font-mono text-stone-400 mr-2">{c.num}</span>
                    <span className="font-serif text-stone-800 font-medium flex-1">{c.title}</span>
                    <span className="text-stone-500 font-mono text-[11px]">{c.type.split("·")[0]}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between py-1.5 border-b border-stone-100">
                  <span className="font-mono text-stone-400 mr-2">09</span>
                  <span className="font-serif text-stone-800 font-medium flex-1">Ekkat Boutique & Cafe Aroma</span>
                  <span className="text-stone-500 font-mono text-[11px]">Commercial & Cafe</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-stone-100">
                  <span className="font-mono text-stone-400 mr-2">10</span>
                  <span className="font-serif text-stone-800 font-medium flex-1">System 32 Standards & Materials</span>
                  <span className="text-stone-500 font-mono text-[11px]">Technical Specification</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-200 flex justify-between items-center text-xs text-stone-500 font-mono">
            <span>MUSKAN PAREEK · INTERIOR ARCHITECTURE</span>
            <span>SPREAD 02 / 12</span>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SPREADS 03 TO 10: CASE STUDY SPREADS                    */}
        {/* ======================================================== */}
        {CASE_STUDIES.map((study, idx) => (
          <section
            key={study.num}
            className="relative w-full bg-[#FDFBF7] border border-stone-300/80 shadow-md print:shadow-none print:border-none p-8 sm:p-14 md:p-16 mb-12 print:mb-0 print:break-after-page print:min-h-screen flex flex-col justify-between"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between border-b border-stone-200 pb-3 text-xs tracking-widest uppercase font-mono text-stone-500">
              <span>{study.num} / {study.tag}</span>
              <span>{study.type}</span>
            </div>

            {/* Title & Metadata Header */}
            <div className="mt-4 mb-6">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal tracking-tight">
                  {study.title}
                </h2>
                <div className="flex items-center gap-4 text-xs font-mono text-stone-600">
                  <span>AREA: <strong className="text-stone-900">{study.area}</strong></span>
                  <span>·</span>
                  <span>TIMELINE: <strong className="text-stone-900">{study.timeline}</strong></span>
                </div>
              </div>
              <p className="mt-2 text-sm text-stone-600 max-w-3xl leading-relaxed">
                {study.brief}
              </p>
            </div>

            {/* DUAL COMPARISON: 2D BLUEPRINT VS 3D REALITY */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto">
              
              {/* LEFT: 2D WORKING DRAWINGS & CAD (5 COLS) */}
              <div className="lg:col-span-5 flex flex-col justify-between p-4 rounded-sm border border-stone-200 bg-stone-50/70">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-800 font-semibold flex items-center gap-1.5">
                      <Ruler className="w-3.5 h-3.5" />
                      AutoCAD 2D Blueprint
                    </span>
                    <span className="text-[10px] font-mono text-stone-400">1:20 GFC DETAIL</span>
                  </div>
                  <div className="relative w-full h-56 sm:h-64 rounded overflow-hidden border border-stone-200 bg-white">
                    <Image
                      src={study.cadImage}
                      alt={study.cadTitle}
                      fill
                      unoptimized
                      className="object-contain p-2"
                    />
                  </div>
                  <h4 className="font-serif text-sm font-medium text-stone-900 mt-3 mb-1">
                    {study.cadTitle}
                  </h4>
                </div>

                <div className="mt-3 pt-3 border-t border-stone-200">
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-1.5">
                    TECHNICAL JOINERY NOTES
                  </span>
                  <ul className="space-y-1.5 text-xs text-stone-600">
                    {study.cadNotes.map((note, nIdx) => (
                      <li key={nIdx} className="flex items-start gap-1.5">
                        <span className="text-amber-800 font-bold font-mono text-[10px] mt-0.5">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT: 3D PHOTOREALISTIC RENDERS (7 COLS) */}
              <div className="lg:col-span-7 flex flex-col justify-between p-4 rounded-sm border border-stone-200 bg-white">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-600 font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                      Photorealistic 3D Spatial Reality
                    </span>
                    <span className="text-[10px] font-mono text-stone-400">4K RENDER VERIFICATION</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative h-48 sm:h-56 rounded overflow-hidden border border-stone-200 bg-stone-100">
                      <Image
                        src={study.renderImage1}
                        alt={`${study.title} Primary 3D View`}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-48 sm:h-56 rounded overflow-hidden border border-stone-200 bg-stone-100">
                      <Image
                        src={study.renderImage2}
                        alt={`${study.title} Secondary 3D View`}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h4 className="font-serif text-sm font-medium text-stone-900 mt-3 mb-1">
                    {study.renderTitle}
                  </h4>
                </div>

                {/* Material Swatches Bar & Quote */}
                <div className="mt-3 pt-3 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-1">
                      MATERIAL SPECIFICATIONS
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {study.materials.map((mat, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-2 py-0.5 bg-stone-100 border border-stone-200 rounded text-[11px] font-serif text-stone-700"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right max-w-xs hidden sm:block">
                    <p className="text-xs font-serif italic text-stone-600">
                      "{study.quote}"
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer Spread Marker */}
            <div className="pt-4 border-t border-stone-200 flex justify-between items-center text-xs text-stone-500 font-mono mt-6">
              <span>CASE STUDY {study.num} · {study.title.toUpperCase()}</span>
              <span>SPREAD {String(idx + 3).padStart(2, "0")} / 12</span>
            </div>
          </section>
        ))}

        {/* ======================================================== */}
        {/* SPREAD 11: COMMERCIAL & HOSPITALITY ARCHITECTURE         */}
        {/* ======================================================== */}
        <section className="relative w-full bg-[#FDFBF7] border border-stone-300/80 shadow-md print:shadow-none print:border-none p-8 sm:p-14 md:p-16 mb-12 print:mb-0 print:break-after-page print:min-h-screen flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3 text-xs tracking-widest uppercase font-mono text-stone-500">
            <span>09 / COMMERCIAL & HOSPITALITY</span>
            <span>RETAIL & SPECIALTY CAFE DESIGN</span>
          </div>

          <div className="my-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal tracking-tight">
              Commercial Architecture: <span className="italic font-light">Retail & Cafe Environments</span>
            </h2>
            <p className="mt-2 text-sm text-stone-600 max-w-3xl leading-relaxed">
              Commercial environments demand a rigorous synthesis of high-traffic ergonomics, resilient material engineering, and immersive brand storytelling. Featuring bespoke service counters, integrated acoustic ceilings, and custom display joinery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto">
            {/* Commercial Case 1: Ekkat Boutique */}
            <div className="p-5 rounded-sm border border-stone-200 bg-stone-50/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs uppercase text-amber-800 font-bold">RETAIL FLAGSHIP</span>
                  <span className="font-mono text-xs text-stone-500">1,200 sq.ft. · Commercial</span>
                </div>
                <h3 className="font-serif text-2xl text-stone-900 mb-2">Ekkat Designer Boutique</h3>
                <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                  Bespoke reception counter (DWG RC-002, 1:10 A3) with sage green laminate, 300mm fluted timber feature panel, 750mm desk height, and terracotta micro-cement arched display alcoves.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="relative h-44 rounded overflow-hidden border border-stone-200 bg-white">
                    <Image
                      src="/images/projects/ekkat-boutique/cad-reception-counter.png"
                      alt="Ekkat Boutique CAD Shop Drawing"
                      fill
                      unoptimized
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="relative h-44 rounded overflow-hidden border border-stone-200 bg-stone-100">
                    <Image
                      src="/images/projects/ekkat-boutique/center-island-arched-niche.png"
                      alt="Ekkat Boutique 3D Render"
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200 text-xs font-mono text-stone-500 flex justify-between">
                <span>DWG RC-002 (1:10)</span>
                <span>Sage Green · Terracotta · Oak</span>
              </div>
            </div>

            {/* Commercial Case 2: Cafe Aroma Express */}
            <div className="p-5 rounded-sm border border-stone-200 bg-stone-50/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs uppercase text-amber-800 font-bold">HOSPITALITY CAFE</span>
                  <span className="font-mono text-xs text-stone-500">950 sq.ft. · Specialty Cafe</span>
                </div>
                <h3 className="font-serif text-2xl text-stone-900 mb-2">Cafe Aroma Express</h3>
                <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                  Bespoke fluted blonde oak espresso service bar paired with leathered Absolute Black granite counters, hand-woven cane pendant luminaires, and Scandinavian outdoor terrace banquettes.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="relative h-44 rounded overflow-hidden border border-stone-200 bg-stone-100">
                    <Image
                      src="/images/projects/cafe-aroma-express/service-bar.png"
                      alt="Cafe Aroma Express Service Bar"
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-44 rounded overflow-hidden border border-stone-200 bg-stone-100">
                    <Image
                      src="/images/projects/cafe-aroma-express/patio-terrace.png"
                      alt="Cafe Aroma Express Patio"
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200 text-xs font-mono text-stone-500 flex justify-between">
                <span>DWG CB-01 (1:20)</span>
                <span>Fluted Blonde Oak · Absolute Black Granite</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-200 flex justify-between items-center text-xs text-stone-500 font-mono mt-6">
            <span>COMMERCIAL WORKS · EKKAT BOUTIQUE & CAFE AROMA</span>
            <span>SPREAD 11 / 12</span>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SPREAD 12: SYSTEM 32 SPECIFICATION & COLOPHON            */}
        {/* ======================================================== */}
        <section className="relative w-full bg-[#FDFBF7] border border-stone-300/80 shadow-md print:shadow-none print:border-none p-8 sm:p-14 md:p-16 print:break-after-page print:min-h-screen flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3 text-xs tracking-widest uppercase font-mono text-stone-500">
            <span>12 / TECHNICAL STANDARDS & COLOPHON</span>
            <span>END OF SELECTED WORKS</span>
          </div>

          <div className="my-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal tracking-tight">
              System 32 Joinery Specification Matrix
            </h2>
            <p className="mt-2 text-sm text-stone-600 max-w-3xl leading-relaxed">
              All bespoke millwork designed in my studio is manufactured adhering to the international System 32 cabinetry standard, guaranteeing millimeter-level accuracy and enduring hardware performance.
            </p>

            {/* Specification Table */}
            <div className="mt-6 border border-stone-200 rounded overflow-hidden text-xs">
              <div className="grid grid-cols-4 bg-stone-100 font-mono text-stone-700 font-semibold p-2.5 border-b border-stone-200">
                <span>COMPONENT</span>
                <span>STANDARD SPECIFICATION</span>
                <span>HARDWARE / MECHANISM</span>
                <span>ALLOWANCE / TOLERANCE</span>
              </div>
              <div className="divide-y divide-stone-100 bg-white">
                <div className="grid grid-cols-4 p-2.5 text-stone-600">
                  <span className="font-medium text-stone-800">Cabinet Carcass</span>
                  <span>18mm BWP/IS-710 Marine Plywood</span>
                  <span>Concealed Cam & Dowel Fasteners</span>
                  <span>±0.5mm drilling pitch</span>
                </div>
                <div className="grid grid-cols-4 p-2.5 text-stone-600">
                  <span className="font-medium text-stone-800">Site Scribing Fillers</span>
                  <span>30mm Dummy Fillers on all masonry bounds</span>
                  <span>Matching face laminate / PU</span>
                  <span>Compensates site out-of-plumb</span>
                </div>
                <div className="grid grid-cols-4 p-2.5 text-stone-600">
                  <span className="font-medium text-stone-800">Hinge Systems</span>
                  <span>37mm setback, 32mm vertical pitch</span>
                  <span>Blum Clip Top Blumotion 110°</span>
                  <span>3-way micro cam adjustment</span>
                </div>
                <div className="grid grid-cols-4 p-2.5 text-stone-600">
                  <span className="font-medium text-stone-800">Drawer Runners</span>
                  <span>Full-extension soft-close synchronized</span>
                  <span>Hafele Tandembox Antaro / Blum Movento</span>
                  <span>40kg–70kg dynamic load rated</span>
                </div>
                <div className="grid grid-cols-4 p-2.5 text-stone-600">
                  <span className="font-medium text-stone-800">Architectural Lighting</span>
                  <span>2700K 90+ CRI LED strip in aluminum profile</span>
                  <span>Hafele Loox / Osram Linear</span>
                  <span>Frosted opal diffuser (no dotting)</span>
                </div>
              </div>
            </div>

            {/* Back Cover Contact Block */}
            <div className="mt-10 p-8 rounded border border-stone-300/80 bg-stone-100/60 text-center">
              <span className="font-mono text-xs uppercase tracking-widest text-stone-500 block mb-2">
                LET'S COLLABORATE ON YOUR NEXT RESIDENTIAL OR COMMERCIAL PROJECT
              </span>
              <h3 className="font-serif text-3xl text-stone-900 font-normal">
                Muskan Pareek
              </h3>
              <p className="font-serif italic text-stone-600 text-sm mt-1">
                Interior Architect & Spatial Designer · Bengaluru, India
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs font-mono text-stone-700">
                <a
                  href="mailto:pareekmuskan1999@gmail.com"
                  className="flex items-center gap-1.5 hover:text-stone-950 underline underline-offset-4"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-800" />
                  <span>pareekmuskan1999@gmail.com</span>
                </a>
                <span>·</span>
                <a
                  href="https://www.linkedin.com/in/muskan-pareek-78b19a224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-stone-950 underline underline-offset-4"
                >
                  <Linkedin className="w-3.5 h-3.5 text-amber-800" />
                  <span>linkedin.com/in/muskan-pareek-78b19a224</span>
                </a>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-800" />
                  <span>Bengaluru, Karnataka, India</span>
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-200 flex justify-between items-center text-xs text-stone-500 font-mono">
            <span>MUSKAN PAREEK · COMPLETE ARCHITECTURAL PORTFOLIO</span>
            <span>SPREAD 12 / 12</span>
          </div>
        </section>

      </main>
    </div>
  );
}
