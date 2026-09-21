import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Ruler,
  Layers,
  Wrench,
  CheckCircle2,
  Sliders,
  Sparkles,
  Download,
  Mail,
  Linkedin,
  ShieldCheck,
  PackageCheck,
  Cpu,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DETAILED_FURNITURE_DESIGNS } from "@/data/fixtures/furniture-cad";
import { FurnitureCADViewer } from "@/components/furniture/FurnitureCADViewer";
import { PaperNote } from "@/components/ui/PaperNote";
import { WavyDivider } from "@/components/ui/WavyDivider";

interface FurniturePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return DETAILED_FURNITURE_DESIGNS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: FurniturePageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = DETAILED_FURNITURE_DESIGNS.find((f) => f.slug === slug);
  if (!item) return { title: "Furniture Design Not Found" };

  return {
    title: `${item.title} (${item.number}) — Bespoke Furniture CAD & Joinery by Muskan Pareek`,
    description: `${item.description} Dimensions: ${item.dimensions}. Engineered with precision System 32 joinery and authentic architectural materials.`,
    openGraph: {
      title: `${item.title} — Muskan Pareek Furniture`,
      description: item.description,
      images: [{ url: item.image }],
    },
  };
}

export default async function FurnitureCaseStudyPage({ params }: FurniturePageProps) {
  const { slug } = await params;
  const item = DETAILED_FURNITURE_DESIGNS.find((f) => f.slug === slug);

  if (!item) {
    notFound();
  }

  const currentIndex = DETAILED_FURNITURE_DESIGNS.findIndex((f) => f.slug === slug);
  const nextItem =
    DETAILED_FURNITURE_DESIGNS[(currentIndex + 1) % DETAILED_FURNITURE_DESIGNS.length];
  const prevItem =
    DETAILED_FURNITURE_DESIGNS[(currentIndex - 1 + DETAILED_FURNITURE_DESIGNS.length) % DETAILED_FURNITURE_DESIGNS.length];

  return (
    <main className="min-h-screen bg-paper text-brown selection:bg-sunflower selection:text-brown">
      <Header />

      {/* Top Breadcrumb Navigation */}
      <div className="pt-28 pb-4 px-6 md:px-12 lg:px-16 max-w-master mx-auto flex items-center justify-between">
        <Link
          href="/work/furniture"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brown-soft hover:text-charcoal transition-colors font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Furniture Catalog</span>
        </Link>
        <span className="font-mono text-xs font-bold text-brown bg-sunflower/30 px-3 py-1 rounded-full">
          PIECE {item.number}
        </span>
      </div>

      {/* SECTION 1: HERO OVERVIEW */}
      <section className="pb-16 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Title & Metadata */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brown-soft">
                Bespoke Joinery &amp; Millwork
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-olive" />
              <span className="text-xs font-mono font-medium text-olive">
                {item.category} Collection
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brown font-normal leading-[1.08] tracking-tight">
              {item.title}
            </h1>

            <p className="font-sans text-brown text-base md:text-lg leading-relaxed max-w-xl">
              {item.description}
            </p>

            {/* 4 Metric Badges in a grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-stone/40">
              <div className="p-3 bg-paper-card rounded-xl border border-stone/30">
                <Ruler className="w-4 h-4 text-olive mb-1" />
                <div className="text-[10px] uppercase tracking-wider text-brown-soft/80 font-mono">Width</div>
                <div className="text-xs font-bold font-mono text-brown mt-0.5">{item.dimensionsMm.width} mm</div>
              </div>

              <div className="p-3 bg-paper-card rounded-xl border border-stone/30">
                <Ruler className="w-4 h-4 text-brown mb-1" />
                <div className="text-[10px] uppercase tracking-wider text-brown-soft/80 font-mono">Depth</div>
                <div className="text-xs font-bold font-mono text-brown mt-0.5">{item.dimensionsMm.depth} mm</div>
              </div>

              <div className="p-3 bg-paper-card rounded-xl border border-stone/30">
                <Ruler className="w-4 h-4 text-sunflower-deep mb-1" />
                <div className="text-[10px] uppercase tracking-wider text-brown-soft/80 font-mono">Height</div>
                <div className="text-xs font-bold font-mono text-brown mt-0.5">{item.dimensionsMm.height} mm</div>
              </div>

              <div className="p-3 bg-paper-card rounded-xl border border-stone/30">
                <ShieldCheck className="w-4 h-4 text-olive mb-1" />
                <div className="text-[10px] uppercase tracking-wider text-brown-soft/80 font-mono">Tolerance</div>
                <div className="text-xs font-bold font-mono text-brown mt-0.5">±{item.dimensionsMm.toleranceMm} mm</div>
              </div>
            </div>

            {/* Materials Preview Strip */}
            <div className="p-3.5 bg-paper-card/70 rounded-xl border border-stone/30 flex items-start gap-3">
              <Layers className="w-4 h-4 text-brown shrink-0 mt-0.5" />
              <div className="text-xs font-sans text-brown leading-snug">
                <span className="font-semibold font-mono uppercase text-[10px] text-brown-soft block mb-0.5">Primary Materials</span>
                {item.materials}
              </div>
            </div>
          </div>

          {/* Right Column: Roman Arch 3D Render Window */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[520px] aspect-[4/4.8] mask-arch-tall shadow-2xl border-4 border-paper-card bg-paper-card overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-paper flex items-center justify-between text-xs font-mono">
                <span className="bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/20">
                  Primary Perspective Render
                </span>
                <span className="bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/20">
                  {item.dimensions}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DESIGN INTENT & ERGONOMIC RATIONALE */}
      <section className="py-14 bg-paper-card/60 border-y border-stone/30">
        <div className="px-6 md:px-12 lg:px-16 max-w-master mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-mono text-olive font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Architectural Design Intent
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-brown font-normal">
                Purpose-Built Form &amp; Spatial Alignment
              </h2>
              <p className="font-sans text-brown text-sm sm:text-base leading-relaxed">
                {item.designIntent}
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-mono text-brown font-bold flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                Ergonomic &amp; Circulation Rationale
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-brown font-normal">
                Human-Centric Anthropometric Metrics
              </h2>
              <p className="font-sans text-brown text-sm sm:text-base leading-relaxed">
                {item.ergonomicRationale}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE 2D VECTOR CAD BLUEPRINT ELEVATION */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-900/10 text-emerald-700 text-xs font-mono font-bold border border-emerald-300/40">
                SHOP DRAWING LEVEL
              </span>
              <span className="text-xs uppercase tracking-widest font-mono text-brown-soft font-semibold">
                Section 03 • 2D Orthographic CAD
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-brown font-normal">
              Orthographic 2D Elevation &amp; Section
            </h2>
            <p className="text-sm font-sans text-brown-soft max-w-xl mt-1">
              Interactive vector drafting showing continuous running dimension chains in millimeters, System 32 vertical boring grid, and perimeter scribing filler tolerances.
            </p>
          </div>

          <div className="text-xs font-mono text-brown-soft bg-paper-card px-4 py-2 rounded-xl border border-stone/30">
            <strong>Standard:</strong> EN 1335 / System 32 / Indian Villa Joinery Standard
          </div>
        </div>

        {/* The Interactive CAD Viewer Component */}
        <FurnitureCADViewer
          itemTitle={item.title}
          itemNumber={item.number}
          dimensionsMm={item.dimensionsMm}
          cadData={item.cadData}
        />
      </section>

      {/* SECTION 4: EXPLODED JOINERY SPECIFICATIONS & CUTTING LIST */}
      <section className="py-16 bg-paper-card/40 border-y border-stone/30">
        <div className="px-6 md:px-12 lg:px-16 max-w-master mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Cut List Table */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <PackageCheck className="w-4 h-4 text-olive" />
                <span className="text-xs uppercase tracking-widest font-mono text-olive font-bold">
                  Fabrication Schedule
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-brown font-normal mb-4">
                Factory Cut-List &amp; Edge Banding Schedule
              </h3>
              <p className="text-xs font-sans text-brown-soft mb-6 leading-relaxed">
                Precise millwork cutting dimensions ready for factory CNC beam saw panel processing. All panel cores calibrated to 18mm BWP marine plywood with matched grain continuity.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-stone/40 bg-paper shadow-xs">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="bg-stone/20 text-brown border-b border-stone/30">
                    <tr>
                      <th className="py-3 px-4 font-bold">Component Part</th>
                      <th className="py-3 px-3 font-bold text-center">Qty</th>
                      <th className="py-3 px-3 font-bold text-center">Thick</th>
                      <th className="py-3 px-3 font-bold text-right">L × W (mm)</th>
                      <th className="py-3 px-4 font-bold">Material &amp; Edge</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone/20">
                    {item.cutList.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone/10 transition-colors">
                        <td className="py-3 px-4 font-sans font-medium text-brown">
                          {row.partName}
                        </td>
                        <td className="py-3 px-3 text-center text-brown-soft font-bold">
                          {row.qty}
                        </td>
                        <td className="py-3 px-3 text-center text-brown-soft">
                          {row.thicknessMm}mm
                        </td>
                        <td className="py-3 px-3 text-right font-bold text-charcoal">
                          {row.lengthMm} × {row.widthMm}
                        </td>
                        <td className="py-3 px-4 text-brown-soft text-[11px]">
                          <div>{row.material}</div>
                          <span className="text-[10px] text-olive font-mono">[{row.edgeBanding}]</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Hardware & Engineering Specs */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="w-4 h-4 text-brown" />
                  <span className="text-xs uppercase tracking-widest font-mono text-brown font-bold">
                    Hardware Engineering
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-brown font-normal mb-4">
                  Blum &amp; Häfele Hardware Schedule
                </h3>
                <div className="space-y-3">
                  {item.hardwareSchedule.map((hw, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-paper rounded-2xl border border-stone/30 shadow-xs flex items-start justify-between gap-3 text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-brown text-paper font-mono text-[10px] font-bold">
                            {hw.brand}
                          </span>
                          <span className="font-mono text-[11px] text-charcoal font-semibold">
                            {hw.partCode}
                          </span>
                        </div>
                        <div className="font-sans font-medium text-brown mt-1">
                          {hw.name}
                        </div>
                        <div className="text-[11px] text-brown-soft mt-0.5">
                          {hw.application}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-mono font-bold text-charcoal bg-stone/20 px-2 py-1 rounded-md text-[11px]">
                          Qty: {hw.qty}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Critical Joinery Rules */}
              <div className="p-4 bg-paper rounded-2xl border border-stone/30">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-brown mb-2 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-olive" />
                  Critical Joinery Notes
                </h4>
                <ul className="space-y-2 text-xs font-sans text-brown-soft">
                  {item.cadData.criticalJoineryNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-olive shrink-0 mt-0.5" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MATERIAL PALETTE & TACTILE SWATCHES */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-mono text-olive font-bold block mb-2">
            Section 05 • Tactile Palette
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-brown font-normal">
            Honest Material Authenticity
          </h2>
          <p className="text-sm font-sans text-brown-soft mt-2 leading-relaxed">
            Every material is selected for timeless patination, structural stability in tropical humidity, and sensory tactile warmth upon touch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {item.materialPalette.map((mat, idx) => (
            <div
              key={idx}
              className="bg-paper-card rounded-2xl p-5 border border-stone/40 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div
                  className="w-full h-24 rounded-xl mb-4 border border-stone/30 shadow-inner flex items-end p-2.5"
                  style={{ backgroundColor: mat.colorHex }}
                >
                  <span className="bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded">
                    {mat.colorHex}
                  </span>
                </div>

                <h4 className="font-display text-xl text-brown font-normal mb-1">
                  {mat.name}
                </h4>
                <div className="text-xs font-mono text-olive font-medium mb-2.5">
                  {mat.finish}
                </div>
              </div>

              <p className="text-xs font-sans text-brown-soft leading-relaxed border-t border-stone/20 pt-3">
                {mat.notes}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: 3D PHOTOREALISTIC RENDER PERSPECTIVES */}
      <section className="py-20 bg-stone/15 border-y border-stone/30">
        <div className="px-6 md:px-12 lg:px-16 max-w-master mx-auto">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest font-mono text-brown-soft font-semibold block mb-2">
              Section 06 • Photorealistic Spatial Perspectives
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-brown font-normal">
              Atmospheric Light &amp; Volumetric Studies
            </h2>
            <p className="text-sm font-sans text-brown-soft max-w-xl mt-1">
              Visualizing the interplay of daylight raking angles, shadow reveals, and material tactile depth across diverse living environments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {item.renderGallery.map((render, idx) => (
              <div
                key={idx}
                className="bg-paper rounded-3xl overflow-hidden border border-stone/30 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone/20">
                  <Image
                    src={render.image}
                    alt={render.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono px-2.5 py-1 rounded-full border border-white/20">
                    {render.mood}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display text-xl text-brown font-normal mb-1.5 group-hover:text-charcoal transition-colors">
                      {render.title}
                    </h4>
                    <p className="text-xs font-sans text-brown-soft leading-relaxed">
                      {render.caption}
                    </p>
                  </div>
                  <div className="pt-3 mt-4 border-t border-stone/20 text-[11px] font-mono text-olive font-semibold">
                    View 0{idx + 1} • High-Fidelity Raytracing
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: BESPOKE COMMISSIONING & NEXT PIECE NAVIGATION */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="p-8 md:p-12 rounded-3xl bg-brown text-paper shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-mono text-sunflower font-bold block">
              Architectural Joinery Customisation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-paper">
              Commission {item.title} for Your Project
            </h2>
            <p className="text-sm font-sans text-paper/80 leading-relaxed">
              Every furniture piece can be customized to exact millwork dimensions, wood species, and stone selections to fit your site survey measurements and System 32 carcass constraints.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="mailto:muskanpareek2003@gmail.com?subject=Custom%20Furniture%20Commission:%20${item.title}%20(${item.number})"
                className="px-6 py-3 rounded-full bg-sunflower text-brown font-semibold text-xs uppercase tracking-widest hover:bg-white transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Enquire About This Piece</span>
              </a>

              <Link
                href="/work/furniture"
                className="px-6 py-3 rounded-full bg-paper/10 text-paper font-semibold text-xs uppercase tracking-widest hover:bg-paper/20 transition-colors cursor-pointer border border-paper/20"
              >
                Explore Full 9-Piece Catalog
              </Link>
            </div>
          </div>
        </div>

        {/* Next / Previous Furniture Item Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-stone/30 flex items-center justify-between">
          <Link
            href={`/work/furniture/${prevItem.slug}`}
            className="group flex items-center gap-3 text-left hover:text-charcoal transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-paper-card border border-stone/30 flex items-center justify-center text-brown group-hover:bg-brown group-hover:text-paper transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-brown-soft block">
                Previous Piece ({prevItem.number})
              </span>
              <span className="text-sm font-display font-medium text-brown group-hover:text-charcoal">
                {prevItem.title}
              </span>
            </div>
          </Link>

          <Link
            href={`/work/furniture/${nextItem.slug}`}
            className="group flex items-center gap-3 text-right hover:text-charcoal transition-colors"
          >
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-brown-soft block">
                Next Piece ({nextItem.number})
              </span>
              <span className="text-sm font-display font-medium text-brown group-hover:text-charcoal">
                {nextItem.title}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-paper-card border border-stone/30 flex items-center justify-center text-brown group-hover:bg-brown group-hover:text-paper transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
