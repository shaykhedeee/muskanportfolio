import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Compass,
  Layers,
  Ruler,
  Sparkles,
  Home,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Wrench,
  Armchair,
  Palette,
  Eye,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PaperNote } from "@/components/ui/PaperNote";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ArchitecturalFloorPlanWatermark } from "@/components/ui/ArchitecturalFloorPlanWatermark";

export const metadata: Metadata = {
  title: "Interior Design Services — Muskan Pareek | Residential, Joinery & 3D Visualization",
  description:
    "Comprehensive interior design services by Muskan Pareek. Full residential interiors, 2D AutoCAD drawings, System 32 modular joinery, photorealistic 3D renders, and site execution in Bengaluru.",
};

const SERVICES = [
  {
    number: "01",
    title: "Full Residential Interiors",
    tagline: "Turnkey Design from Concept to Handover",
    icon: Home,
    description:
      "End-to-end interior design for 2 BHK, 3 BHK apartments, penthouses, and luxury villas. We coordinate spatial zoning, false ceiling lighting layouts, bespoke furniture, and site execution so your home flows effortlessly.",
    deliverables: [
      "Spatial Concept & Moodboards",
      "Demolition & Masonry Plans",
      "False Ceiling & Lighting Schemes (2700K/4000K)",
      "Flooring & Wall Finish Schedules",
      "Vendor Coordination & Site Quality Audits",
    ],
  },
  {
    number: "02",
    title: "Space Planning & 2D Working Drawings",
    tagline: "Ergonomic Layouts with Millimeter Precision",
    icon: Ruler,
    description:
      "Detailed AutoCAD drawing packages calibrated for site execution. We balance daylight orientation, minimum 900mm circulation paths, and seamless architectural flow.",
    deliverables: [
      "Dimensioned Furniture Layout Plans",
      "Electrical & Plumbing Conduit Drawings",
      "Wall Elevations & Section Profiles (1:25 / 1:50)",
      "Door Swing & Window Schedules",
      "AutoCAD .dwg & PDF Execution Bundles",
    ],
  },
  {
    number: "03",
    title: "3D Photorealistic Visualization",
    tagline: "Experience Your Home Before Breaking Ground",
    icon: Eye,
    description:
      "High-fidelity 3D modeling and rendering using SketchUp, V-Ray, and Enscape. Realistic material textures, organic daylight diffusion, and night cove lighting simulations give total certainty before execution.",
    deliverables: [
      "High-Res 4K Still Perspectives",
      "3-Way CCT Lighting Simulation (Golden/Daylight/Evening)",
      "Material Texture & Finish Approvals",
      "Interactive 360° Panoramic Panoramas",
      "Photorealistic Walkthrough Flythroughs",
    ],
  },
  {
    number: "04",
    title: "Custom System 32 Joinery & Millwork",
    tagline: "Precision Joinery Calibrated to European Standards",
    icon: Armchair,
    description:
      "Precision cabinetry utilizing the European System 32 standard (32mm line boring, 37mm setback). Designed with Blum soft-close runners, Hafele hinges, Gola handleless profiles, and 30mm dummy fillers.",
    deliverables: [
      "Modular Kitchen Carcass & Shutter Drawings",
      "Floor-to-Ceiling Wardrobes with Fluted Glass",
      "30mm Scribing Filler Tolerances (±0.5mm)",
      "Hardware Schedules (Blum, Hafele, Hettich)",
      "Cutter Lists & Material Optimization",
    ],
  },
  {
    number: "05",
    title: "Tactile Material & Finish Curation",
    tagline: "Natural Textures That Age Gracefully",
    icon: Palette,
    description:
      "Sensory material selection tailored to your daily rituals. We pair natural cane rattan, quarter-cut walnut veneers, fluted laminates (VF 1002), honed Italian Botticino marble, and anti-tarnish brass.",
    deliverables: [
      "Physical Material Flat-Lay Boards",
      "Laminate, Veneer & Stone Swatch Codes",
      "Paint Schedules (Asian Paints Royale / PU)",
      "Soft Furnishings & Upholstery Guidance",
      "Maintenance & Durability Specifications",
    ],
  },
  {
    number: "06",
    title: "Site Survey & Execution Audit",
    tagline: "Traceable Dimensions & Flawless Fitment",
    icon: Compass,
    description:
      "Comprehensive on-site survey auditing beam drops, electrical drop conduits, plumbness of plaster walls, and corner squareness before factory joinery fabrication.",
    deliverables: [
      "As-Built 3D Laser Measurement Scans",
      "Plumb Line & Diagonal Deviation Reports",
      "Service Conduit Markings & Snag Lists",
      "Factory Shop Drawing Approvals",
      "Final Installation Quality Certification",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-paper text-brown selection:bg-sunflower selection:text-brown relative overflow-hidden">
      {/* Subtle CAD Floor Plan Watermark Detailing */}
      <ArchitecturalFloorPlanWatermark
        variant="detailed"
        opacity="opacity-[0.035]"
        className="pointer-events-none"
      />
      <Header />

      {/* Top Breadcrumb */}
      <div className="pt-28 pb-4 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="flex items-center justify-between border-b border-stone/30 pb-4">
          <Link
            href="/#home"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brown-soft hover:text-charcoal transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Homepage</span>
          </Link>
          <div className="flex items-center gap-4 text-xs font-mono uppercase text-olive font-semibold tracking-wider">
            <span>Disciplines</span>
            <span className="text-stone-dark">/</span>
            <span className="text-charcoal">Design Services</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-12 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="mb-14 border-b border-stone/40 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-brown-soft block">
              COMPREHENSIVE DESIGN DISCIPLINES
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-brown font-normal leading-[1.08]">
              Design Services Built on Precision &amp; Soul.
            </h1>
            <p className="font-sans text-brown-soft text-base md:text-lg leading-relaxed pt-1">
              From full turnkey residential transformations to high-detail System 32 modular joinery and photorealistic 3D visualization, explore how we translate your lifestyle into spaces that endure.
            </p>
          </div>

          <PaperNote rotate="right" hasTape={false} className="text-xl">
            Enduring Quality ♡
          </PaperNote>
        </div>

        {/* 6 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.number}
                className="bg-paper-card rounded-3xl p-7 border border-stone/30 hover:border-sunflower/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-olive px-2.5 py-1 rounded-full bg-stone/20">
                      SERVICE {srv.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-paper border border-stone/40 flex items-center justify-center text-brown group-hover:bg-sunflower group-hover:text-charcoal transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h2 className="font-display text-2xl text-brown font-normal group-hover:text-charcoal transition-colors mb-1">
                    {srv.title}
                  </h2>
                  <div className="text-xs font-mono text-olive font-semibold mb-3">
                    {srv.tagline}
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-brown-soft leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-stone/25 space-y-2">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-brown-soft font-semibold mb-2">
                    Key Deliverables:
                  </div>
                  {srv.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-brown font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-olive shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner matching "Let's Create" */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-paper-card border border-stone/30 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-widest font-mono text-olive font-bold">
              START YOUR PROJECT
            </span>
            <h3 className="font-display text-3xl md:text-4xl text-brown font-normal">
              Have a space in mind? Let&apos;s build it together.
            </h3>
            <p className="font-sans text-xs md:text-sm text-brown-soft leading-relaxed">
              Whether you are planning a complete 3 BHK apartment interior in Bengaluru, need precision AutoCAD shop drawings, or want photorealistic 3D renders, we are ready to collaborate.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-charcoal text-white hover:bg-brown transition-all duration-300 font-semibold text-xs shadow-md self-start md:self-auto shrink-0 group"
          >
            <span>Let&apos;s Create</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
