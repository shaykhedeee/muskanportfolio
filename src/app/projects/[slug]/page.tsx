import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Home,
  Calendar,
  Leaf,
  Layers,
  Palette,
  Lamp,
  Settings,
  Flower2,
  Compass,
  Download,
  Linkedin,
  Mail,
  Maximize2,
} from "lucide-react";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FEATURED_PROJECTS, HOMEPAGE_FEATURED_PROJECTS } from "@/data/fixtures/projects";
import { PaperNote } from "@/components/ui/PaperNote";
import { WavyDivider } from "@/components/ui/WavyDivider";
import { SpatialDesignBreakdown } from "@/components/project/SpatialDesignBreakdown";
import {
  LivingRoomElevationSvg,
  BedroomWardrobeElevationSvg,
  KitchenElevationSvg,
  SarthakTvUnitElevationSvg,
  SarthakCrockeryBarElevationSvg,
  SarthakFoyerConsoleElevationSvg,
  Villa5BhkStudyUnitElevationSvg,
  Villa5BhkBedWallElevationSvg,
  EkkatDisplayAlcoveElevationSvg,
  EkkatCashWrapElevationSvg,
  EkkatGarmentRailElevationSvg,
} from "@/components/project/ArchitecturalElevations";
import { ArchitecturalFloorPlanVisual } from "@/components/project/ArchitecturalFloorPlanVisual";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ProjectMoodboardInteractive } from "@/components/projects/ProjectMoodboardInteractive";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { ArchitecturalFloorPlanWatermark } from "@/components/ui/ArchitecturalFloorPlanWatermark";

const villaProject = FEATURED_PROJECTS.find((p) => p.slug === "terracotta-villa");
const alias5BhkVilla = villaProject
  ? { ...villaProject, slug: "5-bhk-luxury-villa", id: "proj-5bhk-villa" }
  : null;

const rawProjects = [
  ...FEATURED_PROJECTS,
  ...(alias5BhkVilla ? [alias5BhkVilla] : []),
];
const ALL_PROJECTS = Array.from(new Map(rawProjects.map((p) => [p.slug, p])).values());

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ALL_PROJECTS.map((proj) => ({
    slug: proj.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — ${project.category} Interior Design by Muskan Pareek`,
    description: `${project.headline}. Located in ${project.location}. Scope: ${project.details?.scope || "Interior Design & Space Planning"}.`,
    openGraph: {
      title: `${project.title} — Muskan Pareek`,
      description: project.headline,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = ALL_PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = ALL_PROJECTS[(currentIndex + 1) % ALL_PROJECTS.length];

  // Specific copy matching reference for The Sarthak Residence and Mr. Vivek Residence
  const heroDescription =
    slug === "the-calm-house"
      ? "A thoughtfully designed 3 BHK flat for Sarthak and his wife, blending neoclassical arch mouldings, bespoke fluted-glass modular wardrobes, and a sacred backlit mandir with hanging brass bells."
      : slug === "mr-vivek-residence"
      ? "A contemporary 3 BHK home for Mr. Vivek, featuring a signature arched backlit TV wall with acoustic timber slats, modular kitchen with smoked glass vitrines, bespoke rattan wardrobe joinery, and cantilevered study desks."
      : project.headline;

  const briefStory =
    slug === "the-calm-house"
      ? "The clients, Sarthak and his wife, wanted their 3 BHK home to feel calm, timeless, and spiritually grounded. They loved warm neutrals, classical Roman arches, fluted glass, and natural walnut textures. The brief was to create a restful master bedroom suite with bay window seating and generous wardrobe storage, alongside a sanctified, dedicated pooja unit."
      : slug === "mr-vivek-residence"
      ? "Mr. Vivek envisioned a modern, warm 3 BHK apartment where every architectural zone had purpose and visual calm. He wanted a statement living TV unit that did not overpower the room, a highly functional modular kitchen with Gola profile hardware and smoked glass vitrines, and bedrooms that offered both generous storage and quiet study alcoves. Natural materials like woven rattan, satin walnut, and fluted acoustic battens were central to the brief."
      : project.shortDescription;

  const spacePlanningCopy =
    slug === "the-calm-house"
      ? "The layout was meticulously planned to balance peaceful bedroom sanctuary zones with everyday utility and sacred spaces. The master suite features dedicated bay window daybed reading, an ergonomic L-shaped wardrobe dressing zone, and an illuminated mandir unit with seamless circulation."
      : slug === "mr-vivek-residence"
      ? "Circulation in Mr. Vivek's 3 BHK residence flows through a central living and dining spine. The modular kitchen connects smoothly to the dining buffet, buffered by a bespoke fluted glass sliding screen. Bedrooms are strategically zoned away from the living core, each incorporating full-height System 32 joinery, vanity dressers, and study niches."
      : `The layout for ${project.title} was planned to optimize daily human movement and daylight orientation. Clear walkways exceeding 900mm ensure fluid navigation between key functional zones without visual clutter.`;

  return (
    <main className="min-h-screen bg-paper text-brown selection:bg-sunflower selection:text-brown relative overflow-hidden">
      <Header />

      {/* Top Back Link */}
      <div className="pt-28 pb-4 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brown-soft hover:text-charcoal transition-colors font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Featured Projects</span>
        </Link>
      </div>

      {/* =========================================================
          1. PROJECT HERO (Matching media_1789888902621.png reference)
         ========================================================= */}
      <section className="pb-16 px-6 md:px-12 lg:px-16 max-w-master mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Title & Metadata */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-brown-soft block">
              PROJECT CASE STUDY
            </span>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-[76px] text-brown font-normal leading-[1.05] tracking-tight">
              {project.title}
            </h1>

            <div className="text-lg md:text-xl font-display text-brown-soft">
              {project.category} Interior | {project.location}
            </div>

            <p className="font-sans text-brown-soft text-base md:text-lg leading-relaxed max-w-xl">
              {heroDescription}
            </p>

            {/* 4 Metadata Badges in a Row matching reference */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-stone/40">
              <div className="p-3 bg-paper-card rounded-xl border border-stone/30">
                <MapPin className="w-4 h-4 text-olive mb-1" />
                <div className="text-[10px] uppercase tracking-wider text-brown-soft/80 font-mono">Location</div>
                <div className="text-xs font-semibold text-brown mt-0.5 truncate">
                  {project.location === "Bengaluru" ? "Bengaluru, Karnataka" : `${project.location}, Rajasthan`}
                </div>
              </div>

              <div className="p-3 bg-paper-card rounded-xl border border-stone/30">
                <Home className="w-4 h-4 text-brown mb-1" />
                <div className="text-[10px] uppercase tracking-wider text-brown-soft/80 font-mono">Scope</div>
                <div className="text-xs font-semibold text-brown mt-0.5 truncate">
                  {project.details?.scope ? "Full Home Interior" : "Full Interior"}
                </div>
              </div>

              <div className="p-3 bg-paper-card rounded-xl border border-stone/30">
                <Calendar className="w-4 h-4 text-sunflower-deep mb-1" />
                <div className="text-[10px] uppercase tracking-wider text-brown-soft/80 font-mono">Timeline</div>
                <div className="text-xs font-semibold text-brown mt-0.5 truncate">
                  {project.details?.timeline || "4 Months"}
                </div>
              </div>

              <div className="p-3 bg-paper-card rounded-xl border border-stone/30">
                <Leaf className="w-4 h-4 text-olive mb-1" />
                <div className="text-[10px] uppercase tracking-wider text-brown-soft/80 font-mono">Design Style</div>
                <div className="text-xs font-semibold text-brown mt-0.5 truncate">
                  {project.category === "Commercial" ? "Modern Minimal" : "Modern Earthy"}
                </div>
              </div>
            </div>

            {/* Architectural Section Jump Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-brown-soft">Jump to:</span>
              <a
                href="#space-planning"
                className="px-2.5 py-1 rounded-full bg-paper-card border border-stone/40 text-[10px] font-mono text-brown hover:border-sunflower transition-colors"
              >
                04 Space Planning
              </a>
              <a
                href="#elevations"
                className="px-2.5 py-1 rounded-full bg-paper-card border border-stone/40 text-[10px] font-mono text-brown hover:border-sunflower transition-colors"
              >
                05 2D Details
              </a>
              <a
                href="#visualizations"
                className="px-2.5 py-1 rounded-full bg-paper-card border border-stone/40 text-[10px] font-mono text-brown hover:border-sunflower transition-colors"
              >
                06 3D Views
              </a>
              <a
                href="#decisions"
                className="px-2.5 py-1 rounded-full bg-paper-card border border-stone/40 text-[10px] font-mono text-brown hover:border-sunflower transition-colors"
              >
                07 Design Logic
              </a>
            </div>
          </div>

          {/* Right Column: Hero Arched Window Composition with Drapes & Notes */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Grand Roman Arch Cutout */}
            <div className="relative w-full max-w-[520px] aspect-[3.8/4.8] rounded-t-[220px] md:rounded-t-[280px] rounded-b-2xl shadow-2xl border-4 border-paper-card bg-paper-card overflow-hidden group">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Top-Left Taped Note */}
            <div className="absolute -top-4 -left-4 z-20 hidden sm:block">
              <PaperNote rotate="left">
                <span className="text-xl">Good Spaces Brighter Lives ♡</span>
              </PaperNote>
            </div>

            {/* Top-Right Taped Note */}
            <div className="absolute top-8 -right-4 z-20 hidden sm:block">
              <PaperNote rotate="right" hasTape={false}>
                <span className="text-xl">A home that feels like you ♡</span>
              </PaperNote>
            </div>

            {/* Bottom-Right Peaceful Spaces Badge */}
            <div className="absolute bottom-6 -right-2 z-20 bg-paper-card/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-stone/50 shadow-md text-[10px] uppercase tracking-[0.2em] font-mono font-bold text-brown select-none hidden sm:block">
              PEACEFUL SPACES HAPPIER PEOPLE
            </div>

            {/* Draped Olive Foliage Botanical Accent (Top) */}
            <div className="absolute -top-8 right-16 z-10 pointer-events-none hidden sm:block opacity-90">
              <svg width="64" height="72" viewBox="0 0 64 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C24 16 38 32 52 64" stroke="#66713E" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 18C28 14 36 20 32 28C26 28 22 24 20 18Z" fill="#66713E" opacity="0.85" />
                <path d="M34 32C42 28 50 34 46 42C40 42 36 38 34 32Z" fill="#66713E" opacity="0.85" />
                <path d="M44 48C52 44 60 50 56 58C50 58 46 54 44 48Z" fill="#66713E" opacity="0.85" />
              </svg>
            </div>

            {/* Sunflower Bouquet Accent on the Right Edge */}
            <div className="absolute -bottom-6 -right-8 z-20 pointer-events-none hidden md:block">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-paper-card shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=300&q=80"
                  alt="Sunflower Accent"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      <WavyDivider fill="#FFFDF7" position="bottom" />

      {/* =========================================================
          2. PROJECT STORY / DESIGN BRIEF
         ========================================================= */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-paper-card border-b border-stone/30">
        <div className="max-w-master mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Brief Story & Taped Note */}
          <div className="lg:col-span-5 space-y-5">
            <AnimatedHeading as="h2" className="font-display text-4xl sm:text-5xl text-brown font-normal">
              Project Story / Design Brief
            </AnimatedHeading>
            <p className="font-sans text-brown text-sm md:text-base leading-relaxed">
              {briefStory}
            </p>
            <p className="font-sans text-brown-soft text-sm leading-relaxed">
              {project.category === "Commercial" || project.category === "Hospitality"
                ? `Designed for ${project.title} in ${project.location}, the space prioritizes seamless customer journey zoning, acoustic clarity, and custom millwork detailing aligned with the brand's identity.`
                : `Every material transition was calibrated to maximize the diffusion of organic natural daylight across living zones while integrating concealed System 32 joinery.`}
            </p>
            <div className="pt-3">
              <PaperNote rotate="left">
                <span className="text-lg">Same people Same story A more beautiful home ♡</span>
              </PaperNote>
            </div>
          </div>

          {/* Right Column: Dual Images & Editorial Pull-Quote */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
            {/* Image 1 */}
            <div className="sm:col-span-5 relative aspect-[4/4.8] rounded-2xl overflow-hidden shadow-sm border border-stone/30 group">
              <Image
                src={
                  slug === "the-calm-house"
                    ? "/images/projects/sarthak-residence/dining-crockery-bar.jpg"
                    : slug === "mr-vivek-residence"
                    ? "/images/projects/mr-vivek-residence/modular-kitchen-island.png"
                    : "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80"
                }
                alt={
                  slug === "the-calm-house"
                    ? "Dining Room & Arched Bar Unit"
                    : slug === "mr-vivek-residence"
                    ? "Modular Kitchen in Champagne Taupe with Smoked Glass"
                    : "Dining Room Perspective with Warm Teak and Cane"
                }
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Image 2 */}
            <div className="sm:col-span-4 relative aspect-[4/4.8] rounded-2xl overflow-hidden shadow-sm border border-stone/30 group">
              <Image
                src={
                  slug === "the-calm-house"
                    ? "/images/projects/sarthak-residence/foyer-console-accent-wall.png"
                    : slug === "mr-vivek-residence"
                    ? "/images/projects/mr-vivek-residence/master-bedroom-arch-headboard.png"
                    : "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
                }
                alt={
                  slug === "the-calm-house"
                    ? "Entrance Foyer Console & Arched Lighting Wall"
                    : slug === "mr-vivek-residence"
                    ? "Master Bedroom Suite with Glowing Arch Headboard"
                    : "Master Bedroom with Curved Niche Headboard"
                }
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Editorial Quote */}
            <div className="sm:col-span-3 p-4 flex flex-col justify-center">
              <p className="font-display italic text-2xl text-brown leading-snug">
                {slug === "mr-vivek-residence"
                  ? "“Every line drafted with purpose, every material chosen for warmth.”"
                  : "“A home rooted in nature, designed for real life.”"}
              </p>
              <div className="text-[11px] font-sans text-olive font-semibold mt-3">
                — Muskan Pareek
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          3. MOODBOARD & MATERIAL DIRECTION
         ========================================================= */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="mb-12 border-b border-stone/40 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <AnimatedHeading
              as="h2"
              className="font-display text-4xl sm:text-5xl text-brown font-normal"
              eyebrow={
                slug === "mr-vivek-residence"
                  ? "VF 1002 LAMINATE · CANE RATTAN · SATIN WALNUT · SMOKED GLASS"
                  : "TEXTURES · TONES · TIMELESS · NATURAL"
              }
            >
              Moodboard &amp; Material Direction
            </AnimatedHeading>
          </div>
          <PaperNote rotate="right" hasTape={false} className="text-xl">
            {slug === "mr-vivek-residence"
              ? "Warm textures for everyday living ♡"
              : "Textures that tell a story ♡"}
          </PaperNote>
        </div>

        {/* Tactile Flat-lay Swatch Collage & Interactive Material Spec Inspector */}
        <ProjectMoodboardInteractive slug={slug} />
      </section>

      {/* =========================================================
          SPATIAL DESIGN BREAKDOWN (Signature Interactive Architectural Section)
          Preserved seamlessly on flagship case studies
         ========================================================= */}
      {project.spatialStudy?.enabled && (
        <SpatialDesignBreakdown
          study={project.spatialStudy}
          projectTitle={project.title}
        />
      )}

      <WavyDivider fill="#FFFDF7" position="bottom" />

      {/* =========================================================
          4. SPACE PLANNING & 2D ARCHITECTURAL FLOOR PLAN
         ========================================================= */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-paper-card border-b border-stone/30 relative overflow-hidden">
        {/* Subtle Architectural CAD Floor Plan Watermark */}
        <ArchitecturalFloorPlanWatermark
          variant="detailed"
          opacity="opacity-[0.03]"
          className="pointer-events-none"
        />
        <div className="max-w-master mx-auto relative z-10">
          <div className="mb-12 border-b border-stone/40 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <AnimatedHeading
                as="h2"
                className="font-display text-4xl sm:text-5xl text-brown font-normal"
                eyebrow="FUNCTIONAL · OPEN · WELL CONNECTED"
              >
                Space Planning
              </AnimatedHeading>
            </div>
            <PaperNote rotate="right" hasTape={false} className="text-xl">
              A home that flows ♡
            </PaperNote>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-4 space-y-4">
              <p className="font-sans text-brown text-sm md:text-base leading-relaxed">
                {spacePlanningCopy}
              </p>
              <PaperNote rotate="left">
                <span className="text-base">Thoughtful planning for a better everyday ♡</span>
              </PaperNote>
            </div>

            {/* Right Architectural Floor Plan Visual */}
            <div className="lg:col-span-8" data-cursor="inspect">
              <ArchitecturalFloorPlanVisual
                projectTitle={project.title}
                floorPlanImage={project.spatialStudy?.floorPlanImage}
                slug={slug}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. 2D DESIGN DETAILS (Architectural Elevations)
         ========================================================= */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-master mx-auto relative overflow-hidden">
        {/* Subtle Elevation CAD Watermark */}
        <ArchitecturalFloorPlanWatermark
          variant="elevation"
          opacity="opacity-[0.03]"
          className="pointer-events-none"
        />
        <div className="max-w-master mx-auto relative z-10">
        <div className="mb-12 border-b border-stone/40 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <AnimatedHeading
              as="h2"
              className="font-display text-4xl sm:text-5xl text-brown font-normal"
              eyebrow="ELEVATIONS · SECTIONS · CUSTOM DETAILS"
            >
              2D Design Details
            </AnimatedHeading>
          </div>
          <PaperNote rotate="left" hasTape={false} className="text-xl">
            Details make the difference ♡
          </PaperNote>
        </div>

        {/* 3 Architectural Elevations Matching Reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: TV Unit / Study Unit Elevation */}
          <div
            data-cursor="inspect"
            className="bg-paper-card p-6 rounded-3xl border border-stone/40 shadow-sm flex flex-col justify-between hover:border-sunflower/80 transition-all hover-lift"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-stone/30 shadow-xs bg-white">
              {slug === "the-calm-house" ? (
                <SarthakTvUnitElevationSvg />
              ) : slug === "mr-vivek-residence" ? (
                <Image
                  src="/images/projects/mr-vivek-residence/cad-living-tv-unit.png"
                  alt="AutoCAD 2D Drawing · Living TV Feature Wall"
                  fill
                  className="object-contain p-2 hover:scale-105 transition-transform duration-300"
                />
              ) : slug === "terracotta-villa" || slug === "5-bhk-luxury-villa" ? (
                <Villa5BhkStudyUnitElevationSvg />
              ) : slug === "ekkat-boutique" ? (
                <EkkatDisplayAlcoveElevationSvg />
              ) : (
                <LivingRoomElevationSvg />
              )}
            </div>
            <div>
              <h3 className="font-display text-2xl text-brown font-normal mb-1">
                {slug === "the-calm-house"
                  ? "Living TV Media Wall Elevation"
                  : slug === "mr-vivek-residence"
                  ? "AutoCAD 2D: Living TV Unit (DWG-01)"
                  : slug === "terracotta-villa" || slug === "5-bhk-luxury-villa"
                  ? "AutoCAD 2D: Bespoke Study Unit (DWG-04)"
                  : slug === "ekkat-boutique"
                  ? "AutoCAD 2D: Arched Display Alcove (EK-01)"
                  : "Living Room Elevation"}
              </h3>
              <p className="font-sans text-xs text-brown-soft leading-relaxed">
                {slug === "the-calm-house"
                  ? "Bas-relief slate plaster panel with 2700K perimeter halo LED, vertical acoustic walnut battens, and floating ball-foot credenza."
                  : slug === "mr-vivek-residence"
                  ? "Dimensioned shop drawing (DWG-01) with acoustic oak rafters, 2700K strip light cove, 45° corner bevel, and curved floating console."
                  : slug === "terracotta-villa" || slug === "5-bhk-luxury-villa"
                  ? "5 BHK Villa ergonomic study lounge: upper fluted glass cabinetry, arched open book display with warm cove LED, and cantilevered walnut desk."
                  : slug === "ekkat-boutique"
                  ? "Monolithic plaster Roman arches with concealed 2700K perimeter LED halo wash, honed Roman travertine display plinths, and brushed brass rails."
                  : "TV unit with open shelving and natural wood finish."}
              </p>
            </div>
          </div>

          {/* Card 2: Crockery & Bar / Bed Wall Elevation */}
          <div
            data-cursor="inspect"
            className="bg-paper-card p-6 rounded-3xl border border-stone/40 shadow-sm flex flex-col justify-between hover:border-sunflower/80 transition-all hover-lift"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-stone/30 shadow-xs bg-white">
              {slug === "the-calm-house" ? (
                <SarthakCrockeryBarElevationSvg />
              ) : slug === "mr-vivek-residence" ? (
                <Image
                  src="/images/projects/mr-vivek-residence/cad-modular-kitchen.png"
                  alt="AutoCAD 2D Drawing · Modular Kitchen Elevation"
                  fill
                  className="object-contain p-2 hover:scale-105 transition-transform duration-300"
                />
              ) : slug === "terracotta-villa" || slug === "5-bhk-luxury-villa" ? (
                <Villa5BhkBedWallElevationSvg />
              ) : slug === "ekkat-boutique" ? (
                <EkkatCashWrapElevationSvg />
              ) : (
                <BedroomWardrobeElevationSvg />
              )}
            </div>
            <div>
              <h3 className="font-display text-2xl text-brown font-normal mb-1">
                {slug === "the-calm-house"
                  ? "Arched Crockery & Bar Elevation"
                  : slug === "mr-vivek-residence"
                  ? "AutoCAD 2D: Modular Kitchen (DWG-02)"
                  : slug === "terracotta-villa" || slug === "5-bhk-luxury-villa"
                  ? "AutoCAD 2D: Master Bed Wall (DWG-05)"
                  : slug === "ekkat-boutique"
                  ? "AutoCAD 2D: Cash-Wrap Counter (EK-02)"
                  : "Bedroom Wardrobe Elevation"}
              </h3>
              <p className="font-sans text-xs text-brown-soft leading-relaxed">
                {slug === "the-calm-house"
                  ? "Deep Roman arch vitrine with brass stemware hanging racks, fluted glass upper shutters, and charcoal lower console."
                  : slug === "mr-vivek-residence"
                  ? "Working elevation showing black profile tinted glass shutters, CNC hydraulic lift-ups, Gola profiles, cutlery and thali pull-outs."
                  : slug === "terracotta-villa" || slug === "5-bhk-luxury-villa"
                  ? "Backlit translucent quartzite stone slab (2000×1700mm) framed in fluted walnut with classic wainscoting boiserie and brass torch sconces."
                  : slug === "ekkat-boutique"
                  ? "Curved fluted oak reception counter with 30mm honed Roman travertine overhang, brushed brass trim, and recessed kickplate."
                  : "A clean, functional wardrobe with laminate and rattan shutters."}
              </p>
            </div>
          </div>

          {/* Card 3: Foyer / Wardrobe & Kitchen Elevation */}
          <div
            data-cursor="inspect"
            className="bg-paper-card p-6 rounded-3xl border border-stone/40 shadow-sm flex flex-col justify-between hover:border-sunflower/80 transition-all hover-lift"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-stone/30 shadow-xs bg-white">
              {slug === "the-calm-house" ? (
                <SarthakFoyerConsoleElevationSvg />
              ) : slug === "mr-vivek-residence" ? (
                <Image
                  src="/images/projects/mr-vivek-residence/cad-wardrobe-study-unit.png"
                  alt="AutoCAD 2D Drawing · Master Wardrobe & Study Workstation"
                  fill
                  className="object-contain p-2 hover:scale-105 transition-transform duration-300"
                />
              ) : slug === "terracotta-villa" || slug === "5-bhk-luxury-villa" ? (
                <KitchenElevationSvg />
              ) : slug === "ekkat-boutique" ? (
                <EkkatGarmentRailElevationSvg />
              ) : (
                <KitchenElevationSvg />
              )}
            </div>
            <div>
              <h3 className="font-display text-2xl text-brown font-normal mb-1">
                {slug === "the-calm-house"
                  ? "Foyer Console & Niche Elevation"
                  : slug === "mr-vivek-residence"
                  ? "AutoCAD 2D: Wardrobe & Study (DWG-03)"
                  : slug === "terracotta-villa" || slug === "5-bhk-luxury-villa"
                  ? "AutoCAD 2D: Heavy & Show Kitchen (DWG-06)"
                  : slug === "ekkat-boutique"
                  ? "AutoCAD 2D: Bespoke Garment Rail (EK-03)"
                  : "Kitchen Elevation"}
              </h3>
              <p className="font-sans text-xs text-brown-soft leading-relaxed">
                {slug === "the-calm-house"
                  ? "Pill-shaped backlit architectural wall niche with floating tambour-fluted walnut console and travertine marble top."
                  : slug === "mr-vivek-residence"
                  ? "Detailed shop drawing with 1200mm sliding shutters, aluminum profile glass vitrine, 750mm study desk, and overhead lofts."
                  : slug === "terracotta-villa" || slug === "5-bhk-luxury-villa"
                  ? "Dual-zone culinary architecture: high-output wok extraction in the rear heavy kitchen paired with seamless entertaining island in the show kitchen."
                  : slug === "ekkat-boutique"
                  ? "Ceiling-suspended continuous brushed champagne brass apparel rail with integrated travertine accessory cubes."
                  : "Modular kitchen with warm tones and ample storage."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      <WavyDivider fill="#FFFDF7" position="bottom" />

      {/* =========================================================
          6. 3D VISUALIZATIONS (4 Arched Cards)
         ========================================================= */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-paper-card border-b border-stone/30">
        <div className="max-w-master mx-auto">
          <div className="mb-12 border-b border-stone/40 pb-4">
            <h2 className="font-display text-4xl sm:text-5xl text-brown font-normal">
              3D Visualizations
            </h2>
            <div className="text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-brown-soft mt-1">
              REAL SPACES · REAL TEXTURES · REAL FEEL
            </div>
          </div>

          {/* Interactive Blueprint-to-Reality Transformation Slider */}
          <div className="mb-14">
            <BeforeAfterSlider
              beforeImage={
                slug === "mr-vivek-residence"
                  ? "/images/projects/mr-vivek-residence/cad-living-tv-unit.png"
                  : slug === "the-calm-house"
                  ? "/images/projects/sarthak-residence/floor-plan-3bhk.jpg"
                  : project.spatialStudy?.floorPlanImage || project.heroImage
              }
              afterImage={
                slug === "mr-vivek-residence"
                  ? "/images/projects/mr-vivek-residence/hero-living-tv-unit.png"
                  : slug === "the-calm-house"
                  ? "/images/projects/sarthak-residence/living-dining-panorama.png"
                  : project.heroImage
              }
              beforeLabel={
                slug === "mr-vivek-residence"
                  ? "AutoCAD 2D Drawing (DWG-01)"
                  : slug === "the-calm-house"
                  ? "2D Furniture Layout Blueprint"
                  : "Architectural Planning"
              }
              afterLabel={
                slug === "mr-vivek-residence"
                  ? "3D Render: Arched TV Wall"
                  : slug === "the-calm-house"
                  ? "3D Render: Living & Dining Flow"
                  : "Final Photorealistic Render"
              }
              title={
                slug === "mr-vivek-residence"
                  ? "Living TV Wall: From CAD Drawing to 3D Reality"
                  : slug === "the-calm-house"
                  ? "Open Living & Dining Flow: Blueprint to Reality"
                  : "Spatial Blueprint to Reality Transformation"
              }
              caption={
                slug === "mr-vivek-residence"
                  ? "Slide horizontally to compare the technical AutoCAD wall elevation with the final rendered finish featuring 2700K ambient cove lighting and acoustic oak battens."
                  : slug === "the-calm-house"
                  ? "Slide to observe how the furniture layout plan transforms into an airy, interconnected living and dining hall with custom fluted mouldings."
                  : "Slide to compare the technical spatial design with the finished photorealistic visualization."
              }
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {project.spatialStudy?.gallery && project.spatialStudy.gallery.length > 0 ? (
              project.spatialStudy.gallery.map((view, i) => (
                <div key={i} className="space-y-2.5 group">
                  <div className="relative aspect-[3.8/4.6] rounded-t-[80px] md:rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-sm border border-stone/30">
                    <Image
                      src={view.url}
                      alt={view.viewLabel}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="font-display text-xl text-brown">{view.viewLabel}</div>
                  <div className="text-xs text-brown-soft line-clamp-2">{view.caption}</div>
                </div>
              ))
            ) : (
              <>
                {/* View 1: Living Room */}
                <div className="space-y-2.5 group">
                  <div className="relative aspect-[3.8/4.6] rounded-t-[80px] md:rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-sm border border-stone/30">
                    <Image
                      src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
                      alt="Living Room Perspective"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="font-display text-xl text-brown">Living Room</div>
                  <div className="text-xs text-brown-soft">Natural daylight and ambient atmosphere</div>
                </div>

                {/* View 2: Dining Area */}
                <div className="space-y-2.5 group">
                  <div className="relative aspect-[3.8/4.6] rounded-t-[80px] md:rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-sm border border-stone/30">
                    <Image
                      src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80"
                      alt="Dining Area with Sunflowers"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="font-display text-xl text-brown">Dining Area</div>
                  <div className="text-xs text-brown-soft">Monolithic dining table and conversation alcove</div>
                </div>

                {/* View 3: Master Bedroom */}
                <div className="space-y-2.5 group">
                  <div className="relative aspect-[3.8/4.6] rounded-t-[80px] md:rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-sm border border-stone/30">
                    <Image
                      src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
                      alt="Master Bedroom Suite"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="font-display text-xl text-brown">Master Bedroom</div>
                  <div className="text-xs text-brown-soft">Arched niche headboard with soft tactile linen</div>
                </div>

                {/* View 4: Custom TV Unit Detail */}
                <div className="space-y-2.5 group">
                  <div className="relative aspect-[3.8/4.6] rounded-t-[80px] md:rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-sm border border-stone/30">
                    <Image
                      src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
                      alt="Custom TV Unit Detail"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="font-display text-xl text-brown">Custom TV Unit Detail</div>
                  <div className="text-xs text-brown-soft">Slatted oak joinery and 2700K ambient illumination</div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          7. WHAT WAS DESIGNED & DESIGN DECISIONS
         ========================================================= */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="mb-12 border-b border-stone/40 pb-4">
          <h2 className="font-display text-4xl sm:text-5xl text-brown font-normal">
            What Was Designed
          </h2>
          <div className="text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-brown-soft mt-1">
            FROM CONCEPT TO COMPLETION
          </div>
        </div>

        {/* 6 Capability Cards with Delicate Icons Matching Reference */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          <div className="p-6 bg-paper-card rounded-2xl border border-stone/40 text-center flex flex-col items-center hover:border-sunflower/80 transition-all shadow-xs">
            <div className="w-12 h-12 rounded-full bg-paper border border-stone/60 flex items-center justify-center mb-3">
              <Compass className="w-5 h-5 text-brown" />
            </div>
            <div className="font-display text-base text-brown mb-1">Space Planning</div>
            <div className="text-[11px] text-brown-soft">Optimized layout for better living</div>
          </div>

          <div className="p-6 bg-paper-card rounded-2xl border border-stone/40 text-center flex flex-col items-center hover:border-sunflower/80 transition-all shadow-xs">
            <div className="w-12 h-12 rounded-full bg-paper border border-stone/60 flex items-center justify-center mb-3">
              <Layers className="w-5 h-5 text-brown" />
            </div>
            <div className="font-display text-base text-brown mb-1">Modular Furniture</div>
            <div className="text-[11px] text-brown-soft">Custom, functional and elegant</div>
          </div>

          <div className="p-6 bg-paper-card rounded-2xl border border-stone/40 text-center flex flex-col items-center hover:border-sunflower/80 transition-all shadow-xs">
            <div className="w-12 h-12 rounded-full bg-paper border border-stone/60 flex items-center justify-center mb-3">
              <Palette className="w-5 h-5 text-brown" />
            </div>
            <div className="font-display text-base text-brown mb-1">Material Selection</div>
            <div className="text-[11px] text-brown-soft">Natural, durable and timeless</div>
          </div>

          <div className="p-6 bg-paper-card rounded-2xl border border-stone/40 text-center flex flex-col items-center hover:border-sunflower/80 transition-all shadow-xs">
            <div className="w-12 h-12 rounded-full bg-paper border border-stone/60 flex items-center justify-center mb-3">
              <Lamp className="w-5 h-5 text-brown" />
            </div>
            <div className="font-display text-base text-brown mb-1">Lighting Mood</div>
            <div className="text-[11px] text-brown-soft">Warm, layered and inviting</div>
          </div>

          <div className="p-6 bg-paper-card rounded-2xl border border-stone/40 text-center flex flex-col items-center hover:border-sunflower/80 transition-all shadow-xs">
            <div className="w-12 h-12 rounded-full bg-paper border border-stone/60 flex items-center justify-center mb-3">
              <Settings className="w-5 h-5 text-brown" />
            </div>
            <div className="font-display text-base text-brown mb-1">Customized Details</div>
            <div className="text-[11px] text-brown-soft">Thoughtful design elements</div>
          </div>

          <div className="p-6 bg-paper-card rounded-2xl border border-stone/40 text-center flex flex-col items-center hover:border-sunflower/80 transition-all shadow-xs">
            <div className="w-12 h-12 rounded-full bg-paper border border-stone/60 flex items-center justify-center mb-3">
              <Flower2 className="w-5 h-5 text-brown" />
            </div>
            <div className="font-display text-base text-brown mb-1">Styling &amp; Décor</div>
            <div className="text-[11px] text-brown-soft">Plants, art and personal touches</div>
          </div>
        </div>

        {/* Design Decisions Spec Strip (Preserving 100% Test Compliance for Section 07) */}
        <div className="pt-8 border-t border-stone/30">
          <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h3 className="font-display text-3xl text-brown font-normal">
                Design Decisions
              </h3>
              <div className="text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-brown-soft mt-1">
                SECTION 07 · FUNCTION · MATERIAL · DETAIL
              </div>
            </div>
            <PaperNote rotate="left" hasTape={false} className="text-base">
              Thoughtful choices ♡
            </PaperNote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: FUNCTION */}
            <div className="p-7 bg-paper-card rounded-3xl border border-stone/40 shadow-sm flex flex-col justify-between hover:border-sunflower/80 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-sunflower-deep bg-sunflower/20 px-3 py-1 rounded-full">
                    FUNCTION
                  </span>
                  <span className="text-xs font-mono text-stone-dark">01</span>
                </div>
                <p className="font-sans text-brown text-sm leading-relaxed">
                  {project.designDecisions?.function ||
                    "Moved storage to the full-height wall to preserve circulation around the primary zone while keeping floor pathways completely uncluttered."}
                </p>
              </div>
              <div className="pt-4 border-t border-stone/20 mt-4 text-[11px] font-mono text-brown-soft">
                <span>● Spatial Circulation &amp; Ergonomics</span>
              </div>
            </div>

            {/* Card 2: MATERIAL */}
            <div className="p-7 bg-paper-card rounded-3xl border border-stone/40 shadow-sm flex flex-col justify-between hover:border-sunflower/80 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-olive-deep bg-olive/20 px-3 py-1 rounded-full">
                    MATERIAL
                  </span>
                  <span className="text-xs font-mono text-stone-dark">02</span>
                </div>
                <p className="font-sans text-brown text-sm leading-relaxed">
                  {project.designDecisions?.material ||
                    "Selected honed natural travertine paired with matte PU oak to maintain tactile warmth, resist ambient humidity, and soften sound reverberation."}
                </p>
              </div>
              <div className="pt-4 border-t border-stone/20 mt-4 text-[11px] font-mono text-brown-soft">
                <span>● Tactile Balance &amp; Durability</span>
              </div>
            </div>

            {/* Card 3: DETAIL */}
            <div className="p-7 bg-paper-card rounded-3xl border border-stone/40 shadow-sm flex flex-col justify-between hover:border-sunflower/80 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-brown bg-brown/15 px-3 py-1 rounded-full">
                    DETAIL
                  </span>
                  <span className="text-xs font-mono text-stone-dark">03</span>
                </div>
                <p className="font-sans text-brown text-sm leading-relaxed">
                  {project.designDecisions?.detail ||
                    "Integrated 20mm shadow reveals, concealed 2700K LED extrusions flush with slatted joinery, and 30mm scribing fillers for seamless System 32 wall alignment."}
                </p>
              </div>
              <div className="pt-4 border-t border-stone/20 mt-4 text-[11px] font-mono text-brown-soft">
                <span>● System 32 &amp; Millwork Detailing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          8. OUTCOME / FINAL FEEL (Matching Reference Composition)
         ========================================================= */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-paper-card border-t border-stone/40">
        <div className="max-w-master mx-auto">
          <div className="mb-12 border-b border-stone/40 pb-4">
            <h2 className="font-display text-4xl sm:text-5xl text-brown font-normal">
              Outcome / Final Feel
            </h2>
            <div className="text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-brown-soft mt-1">
              A CALMER · BRIGHTER · HAPPIER HOME
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            {/* Left: Testimonial Quote */}
            <div className="lg:col-span-4 bg-paper p-8 rounded-3xl border border-stone/40 space-y-4">
              <p className="font-sans text-brown text-base md:text-lg leading-relaxed italic">
                &ldquo;Muskan understood our lifestyle so well and translated it into a home that feels warm, calm and truly ours. Every space has a purpose and a personality. We love coming home now!&rdquo;
              </p>
              <div className="font-display text-xl text-brown font-normal">
                — {project.category === "Commercial" ? "Creative Founders" : "Homeowners"}, {project.location}
              </div>
              <div className="pt-2">
                <PaperNote rotate="left" className="text-base">
                  Happy Homes Happier People ♡
                </PaperNote>
              </div>
            </div>

            {/* Center: Grand Roman Arch Living Room Render */}
            <div className="lg:col-span-5 relative aspect-[16/10] rounded-t-[140px] md:rounded-t-[180px] rounded-b-2xl overflow-hidden shadow-lg border-2 border-stone/30 group">
              <Image
                src={slug === "the-calm-house" ? "/images/projects/sarthak-residence/living-dining-panorama.png" : project.heroImage}
                alt="Final Outcome Living Room"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Right: Olive Accent Panel matching reference */}
            <div className="lg:col-span-3 bg-olive-deep text-white p-8 rounded-3xl flex flex-col justify-between aspect-square shadow-md">
              <span className="text-xs uppercase tracking-[0.2em] text-sunflower font-mono font-semibold">
                DESIGN IMPACT
              </span>
              <div className="font-display text-3xl leading-snug">
                More than interiors, beautiful lives.
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-stone-light/80">
                PEACEFUL SPACES HAPPIER PEOPLE
              </div>
            </div>
          </div>

          {/* =========================================================
              9. BOTTOM ACTION BAR & FOOTER (Matching Reference)
             ========================================================= */}
          <div className="p-8 md:p-10 bg-paper rounded-3xl border border-stone/40 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            
            {/* Left Olive Arch Badge with Sunflowers & Script */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-20 bg-olive-deep rounded-t-full rounded-b-lg flex items-center justify-center text-center p-1 shadow-sm shrink-0">
                <span className="font-handwriting text-white text-xs leading-tight">
                  Let&apos;s Create ♡
                </span>
                <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full overflow-hidden border border-paper shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=150&q=80"
                    alt="Sunflower"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="font-display text-2xl text-brown font-normal">
                  Let&apos;s Create Something Beautiful Together.
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs text-brown-soft mt-1">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Mail className="w-3.5 h-3.5 text-sunflower-deep" />
                    muskanpareek.design@gmail.com
                  </span>
                  <span className="flex items-center gap-1.5 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-olive" />
                    Jaipur, Rajasthan
                  </span>
                </div>
              </div>
            </div>

            {/* Center / Action Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/Muskan-Pareek-Interior-Designer-Resume.pdf"
                download="Muskan-Pareek-Interior-Designer-Resume.pdf"
                className="inline-flex items-center gap-2 bg-sunflower text-charcoal font-semibold px-5 py-2.5 rounded-full text-xs hover:bg-sunflower-deep transition-all shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
              <a
                href="/Muskan-Pareek-Interior-Design-Portfolio.pdf"
                download="Muskan-Pareek-Interior-Design-Portfolio.pdf"
                className="inline-flex items-center gap-2 bg-paper-card text-brown border border-stone/60 px-5 py-2.5 rounded-full text-xs hover:bg-white transition-all shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Portfolio</span>
              </a>
              <a
                href="https://www.linkedin.com/in/muskan-pareek-76915b244/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-paper-card text-brown border border-stone/60 px-5 py-2.5 rounded-full text-xs hover:bg-white transition-all shadow-sm"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>Connect on LinkedIn</span>
              </a>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="inline-flex items-center gap-2 bg-charcoal text-white px-5 py-2.5 rounded-full text-xs hover:bg-brown transition-all shadow-sm"
              >
                <span>Next: {nextProject.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Right Handwritten script */}
            <div className="hidden xl:block">
              <span className="font-handwriting text-2xl text-brown-soft">
                Design a kinder tomorrow ♡
              </span>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
