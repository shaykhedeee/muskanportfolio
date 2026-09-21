import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Home, Building2, Armchair } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PaperNote } from "@/components/ui/PaperNote";

export const metadata: Metadata = {
  title: "Work | Muskan Pareek — Interior Design Portfolio Directory",
  description:
    "Explore interior design projects by Muskan Pareek across residential interiors, commercial spaces, and custom modular furniture design.",
};

export default function WorkDirectoryPage() {
  const categories = [
    {
      title: "Residential Interiors",
      subtitle: "Comfort, personality & everyday function",
      description:
        "Full-home transformations, living environments, tranquil bedrooms, and modular storage shaped around real family routines and natural light.",
      href: "/work/residential",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      stats: "6 Featured Projects · Full Case Studies",
      icon: Home,
    },
    {
      title: "Commercial & Lifestyle",
      subtitle: "Identity, circulation & spatial character",
      description:
        "Boutique retail, hospitality, and office spaces developed around seamless visitor flow, brand character, and efficient spatial layouts.",
      href: "/work/commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      stats: "3 Featured Projects · Workspace & Retail",
      icon: Building2,
    },
    {
      title: "Custom & Modular Furniture",
      subtitle: "Ergonomics, System 32 & precision millwork",
      description:
        "Bespoke modular kitchens, walk-in wardrobes, TV units, crockery consoles, and pooja units engineered with accurate dimensions and buildability.",
      href: "/work/furniture",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
      stats: "9 Bespoke Designs · System 32 Joinery",
      icon: Armchair,
    },
  ];

  return (
    <main className="min-h-screen bg-paper text-brown selection:bg-sunflower selection:text-brown">
      <Header />

      {/* Top Breadcrumb */}
      <div className="pt-28 pb-6 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="flex items-center justify-between border-b border-stone/30 pb-6">
          <Link
            href="/#home"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brown-soft hover:text-charcoal transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Homepage</span>
          </Link>
          <span className="text-xs font-mono uppercase text-olive font-semibold tracking-wider">
            PORTFOLIO DIRECTORY
          </span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="pb-16 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone/40">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-brown-soft block">
              EXPLORE BY DISCIPLINE
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-brown font-normal leading-tight">
              Design Disciplines
            </h1>
            <p className="font-sans text-brown-soft text-base md:text-lg leading-relaxed pt-1">
              Explore projects by the type of design challenge — from complete residential transformations and commercial spaces to tailored modular joinery systems.
            </p>
          </div>

          <PaperNote rotate="right" hasTape={false} className="text-xl">
            Considered spaces ♡
          </PaperNote>
        </div>

        {/* 3 Discipline Portals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;

            return (
              <Link
                key={cat.title}
                href={cat.href}
                className="group flex flex-col bg-paper-light rounded-3xl p-3 pb-8 border border-stone/30 hover:border-sunflower hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container with Roman Arch Shape */}
                <div className="relative w-full aspect-[4/4.6] rounded-t-[140px] md:rounded-t-[180px] rounded-b-2xl overflow-hidden bg-stone/20 mb-4 shadow-sm border border-stone/20">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 p-2.5 rounded-full bg-paper/90 backdrop-blur-xs text-brown shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-sunflower text-brown flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 flex flex-col justify-between flex-1 gap-4">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-olive font-semibold block">
                      0{idx + 1} · {cat.stats}
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl text-brown font-normal group-hover:text-charcoal transition-colors">
                      {cat.title}
                    </h2>
                    <p className="text-xs font-sans text-brown-soft leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone/20 flex items-center justify-between text-xs font-semibold text-brown group-hover:text-olive transition-colors">
                    <span>Explore {cat.title.split(" ")[0]} Portfolio</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Technical Standards & Methodology Strip */}
        <div className="mt-20 p-8 md:p-12 bg-paper-light rounded-3xl border border-stone/30 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone/30 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-olive font-bold block mb-1">
                EXECUTION &amp; WORKING STANDARDS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-brown font-normal">
                Precision from Concept to Site
              </h2>
            </div>
            <p className="text-xs font-sans text-brown-soft max-w-md leading-relaxed">
              Every project is backed by accurate AutoCAD working drawings, SketchUp 3D coordination, and System 32 joinery details that contractors can build without ambiguity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-paper rounded-2xl border border-stone/30 space-y-2">
              <div className="font-display text-xl text-brown">AutoCAD 2D Working Sets</div>
              <p className="text-xs font-sans text-brown-soft leading-relaxed">
                Dimensioned furniture layouts, partition plans, reflected ceiling &amp; lighting coordinates, and comprehensive wall elevations.
              </p>
            </div>
            <div className="p-6 bg-paper rounded-2xl border border-stone/30 space-y-2">
              <div className="font-display text-xl text-brown">System 32 Modular Millwork</div>
              <p className="text-xs font-sans text-brown-soft leading-relaxed">
                Cabinetry engineered to the 32mm grid system with 30mm scribing fillers, Blum hardware schedules, and optimized cut-lists.
              </p>
            </div>
            <div className="p-6 bg-paper rounded-2xl border border-stone/30 space-y-2">
              <div className="font-display text-xl text-brown">Photorealistic 3D Modeling</div>
              <p className="text-xs font-sans text-brown-soft leading-relaxed">
                SketchUp and Enscape visual models capturing accurate daylight orientation, material textures, and layered 2700K lighting.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
