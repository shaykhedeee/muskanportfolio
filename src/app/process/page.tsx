import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowRight, Compass, Search, Box, Wrench, Sparkles, CheckCircle2, Layers, PenTool } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PaperNote } from "@/components/ui/PaperNote";
import { WavyDivider } from "@/components/ui/WavyDivider";
import { SunBadge } from "@/components/ui/SunBadge";

export const metadata: Metadata = {
  title: "Design Process & Methodology — Muskan Pareek | Interior Designer",
  description:
    "Explore Muskan Pareek's 5-stage interior design process: from lifestyle discovery and AutoCAD 2D drafting to SketchUp 3D visualization, System 32 modular joinery, and site coordination.",
};

export default function ProcessPage() {
  const processStages = [
    {
      step: "01",
      title: "Discover & Site Measurements",
      subtitle: "Lifestyle audit, spatial routine mapping & site documentation",
      description:
        "Every project begins by understanding how people actually live. I analyze daily routines, natural sun paths, existing structural constraints, and storage pain points. Comprehensive site measurements ensure that every subsequent millimeter drawn in CAD corresponds precisely to the physical space.",
      deliverables: [
        "Client lifestyle & requirement brief",
        "Comprehensive site measurement survey",
        "Daylight & orientation study",
        "Existing architectural constraints review",
      ],
      icon: Search,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    },
    {
      step: "02",
      title: "Space Planning & AutoCAD Drafting",
      subtitle: "Furniture layouts, circulation zoning & working drawings",
      description:
        "The backbone of good interior design is flawless space planning. I develop functional 2D floor plans with strict adherence to ergonomic clearances (>900mm primary walkways). Working sets include partition plans, reflected ceiling plans (RCP), electrical coordinates, and detailed wall elevations.",
      deliverables: [
        "Furniture layout plans (1:50 scale)",
        "Circulation & zoning diagrams",
        "Reflected ceiling & lighting layout",
        "AutoCAD 2D wall elevations & sections",
      ],
      icon: Compass,
      image: "/references/4f1a68a2-f9d9-4baf-b6d9-a65e45da5431.jpg",
    },
    {
      step: "03",
      title: "3D Visualization & Material Moodboards",
      subtitle: "SketchUp modeling, realistic rendering & AI-assisted exploration",
      description:
        "Translating 2D lines into immersive 3D spaces. Using advanced SketchUp workflows and photorealistic rendering, clients see their spaces come alive with accurate textures, lighting moods, and finishes. AI-assisted tools accelerate alternative color palettes and material combinations without compromising technical dimensions.",
      deliverables: [
        "Detailed SketchUp 3D architectural model",
        "Photorealistic daylight & atmospheric renders",
        "Tactile material, veneer & laminate palette",
        "AI-assisted design iteration studies",
      ],
      icon: Box,
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
    },
    {
      step: "04",
      title: "System 32 Modular Joinery & Detailing",
      subtitle: "Kitchens, wardrobes, TV units & technical cut-lists",
      description:
        "Millwork that is as functional inside as it is beautiful outside. I engineer bespoke modular systems utilizing the international System 32 standard: 32mm hole line spacing, Blum and Häfele hardware specifications, internal drawer organizers, and 30mm dummy fillers for seamless wall-to-wall fitment.",
      deliverables: [
        "Modular kitchen & wardrobe shop drawings",
        "System 32 hole pattern & hardware schedules",
        "Integrated cable management & shadow reveals",
        "Joinery cut-lists and material specs for factory",
      ],
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    },
    {
      step: "05",
      title: "Site Coordination & Final Styling",
      subtitle: "Execution oversight, contractor alignment & final reveal",
      description:
        "Design integrity must carry through to the final handover. I coordinate with carpenters, electrical contractors, and painters to ensure shop drawings are executed accurately. The project concludes with curated art, foliage, and tactile accessories that make a house feel like home.",
      deliverables: [
        "On-site verification against drawings",
        "Vendor & contractor coordination",
        "Color matching and finish inspection",
        "Foliage, styling & final handover",
      ],
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <main className="min-h-screen bg-paper text-brown selection:bg-sunflower selection:text-brown">
      <Header />

      {/* Top Breadcrumb */}
      <div className="pt-28 pb-4 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <Link
          href="/#home"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brown-soft hover:text-charcoal transition-colors font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Homepage</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="py-12 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-stone/40">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <SunBadge size={26} />
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brown-soft">
                DESIGN METHODOLOGY &amp; WORKFLOW
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-brown font-normal leading-[1.05] tracking-tight">
              From requirement to refined interior.
            </h1>
            <p className="font-sans text-brown-soft text-base md:text-lg leading-relaxed">
              A structured 5-stage design workflow that bridges creative vision with technical precision — ensuring every space is buildable, functional, and deeply personal.
            </p>
          </div>

          <PaperNote rotate="right" hasTape={false} className="text-xl">
            Structured · Creative · Buildable ♡
          </PaperNote>
        </div>
      </section>

      {/* 5 Stages Breakdown */}
      <section className="py-12 px-6 md:px-12 lg:px-16 max-w-master mx-auto space-y-16">
        {processStages.map((stage, idx) => {
          const Icon = stage.icon;
          const isEven = idx % 2 === 1;

          return (
            <div
              key={stage.step}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 md:p-12 rounded-3xl bg-paper-card border border-stone/40 shadow-xs ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content Column */}
              <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-sunflower/20 text-charcoal font-bold">
                    STAGE {stage.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-paper border border-stone/40 flex items-center justify-center text-brown">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl text-brown font-normal leading-tight">
                  {stage.title}
                </h2>

                <div className="text-xs uppercase tracking-wider font-mono text-olive font-semibold">
                  {stage.subtitle}
                </div>

                <p className="font-sans text-brown-soft text-sm md:text-base leading-relaxed">
                  {stage.description}
                </p>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-stone/20">
                  <div className="text-[11px] uppercase tracking-wider font-sans font-semibold text-brown mb-3">
                    KEY DELIVERABLES:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {stage.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-brown-soft">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sunflower-deep shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Preview Column */}
              <div className={`lg:col-span-5 relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative aspect-[4/3.8] rounded-t-[120px] rounded-b-2xl overflow-hidden border border-stone/40 shadow-md bg-stone/20">
                  <Image
                    src={stage.image}
                    alt={stage.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-editorial"
                  />
                  <div className="absolute bottom-3 right-3 bg-paper/90 backdrop-blur-xs px-3 py-1 rounded-full text-[10px] font-mono font-medium text-brown">
                    STAGE 0{idx + 1} SPEC
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Cross-Link Action */}
      <section className="py-16 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="p-8 md:p-12 rounded-3xl bg-olive-deep text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-sunflower font-semibold">
              SEE THE METHODOLOGY IN ACTION
            </span>
            <div className="font-display text-3xl sm:text-4xl leading-snug">
              Explore how this process shaped The Calm House.
            </div>
          </div>
          <Link
            href="/projects/the-calm-house"
            className="inline-flex items-center gap-2 bg-sunflower text-charcoal font-semibold px-6 py-3 rounded-full text-xs hover:bg-sunflower-deep transition-all shadow-xs shrink-0"
          >
            <span>View Full Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
