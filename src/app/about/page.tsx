import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Layers,
  Box,
  Armchair,
  Compass,
  Monitor,
  Sparkles,
  Palette,
  Users,
  Search,
  PenTool,
  Wrench,
  Heart,
  Download,
  Linkedin,
  MapPin,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PaperNote } from "@/components/ui/PaperNote";
import { WavyDivider } from "@/components/ui/WavyDivider";
import { Button } from "@/components/ui/Button";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ArchitecturalFloorPlanWatermark } from "@/components/ui/ArchitecturalFloorPlanWatermark";

export const metadata = {
  title: "About Muskan Pareek — Interior Designer in Bengaluru",
  description:
    "Muskan Pareek is an Interior Designer based in Bengaluru with 3+ years of experience across residential interiors, modular furniture design, space planning, AutoCAD drafting, SketchUp, and photorealistic 3D visualization.",
};

export default function AboutPage() {
  const journeyTimeline = [
    {
      period: "2022",
      company: "The Design Palette",
      role: "Interior Design Intern",
      desc: "Started my journey learning the fundamentals of interior design, space planning and drafting.",
    },
    {
      period: "2022 – 2024",
      company: "CubeDecors",
      role: "Interior Designer",
      desc: "Worked on residential projects, modular design development and client coordination.",
    },
    {
      period: "2025",
      company: "12 Square Interiors",
      role: "Senior Interior Designer",
      desc: "Led design development, 3D visualization and project execution.",
    },
    {
      period: "2025",
      company: "Giftyaari",
      role: "Founder & Owner",
      desc: "A personal venture exploring creativity beyond interiors, product styling and brand direction.",
    },
    {
      period: "2025 – 2026",
      company: "Freelance Practice",
      role: "Interior Designer & 3D Visualizer",
      desc: "Independent projects across residential spaces and photorealistic visualization.",
    },
    {
      period: "May 2026 – Present",
      company: "Spacious Venture",
      role: "Senior Interior Designer",
      desc: "Currently working on diverse residential projects, modular systems and execution solutions.",
      isCurrent: true,
    },
  ];

  const coreStrengths = [
    {
      title: "Residential Interior Design",
      subtitle: "Thoughtful homes for real living.",
      icon: <Home className="w-6 h-6 text-brown" />,
    },
    {
      title: "Space Planning",
      subtitle: "Efficient & practical layouts.",
      icon: <Compass className="w-6 h-6 text-brown" />,
    },
    {
      title: "Modular Design",
      subtitle: "Kitchens, wardrobes & custom storage.",
      icon: <Box className="w-6 h-6 text-brown" />,
    },
    {
      title: "Furniture Design",
      subtitle: "Functional & elegant pieces.",
      icon: <Armchair className="w-6 h-6 text-brown" />,
    },
    {
      title: "AutoCAD Drafting",
      subtitle: "Accurate technical drawings.",
      icon: <PenTool className="w-6 h-6 text-brown" />,
    },
    {
      title: "SketchUp Modelling",
      subtitle: "Detailed 3D models.",
      icon: <Box className="w-6 h-6 text-brown" />,
    },
    {
      title: "3D Visualization",
      subtitle: "Photorealistic spatial views.",
      icon: <Monitor className="w-6 h-6 text-brown" />,
    },
    {
      title: "Material Selection",
      subtitle: "Curated finishes & textures.",
      icon: <Palette className="w-6 h-6 text-brown" />,
    },
    {
      title: "AI-Assisted Rendering",
      subtitle: "Faster ideation, better presentation.",
      icon: <Sparkles className="w-6 h-6 text-sunflower-deep" />,
    },
    {
      title: "Client Coordination",
      subtitle: "Smooth communication from design to execution.",
      icon: <Users className="w-6 h-6 text-brown" />,
    },
  ];

  const toolsList = [
    { name: "AutoCAD", desc: "2D Drafting & Drawings" },
    { name: "SketchUp", desc: "3D Modelling" },
    { name: "3D Visualization", desc: "Photorealistic Renders" },
    { name: "AI-Assisted Design", desc: "Ideation & Presentation" },
    { name: "Mood Boards", desc: "Concept Development" },
    { name: "Design Presentations", desc: "Client-ready Visuals" },
  ];

  const deliverablesList = [
    "Kitchens",
    "Wardrobes",
    "TV Units",
    "Crockery Units",
    "Pooja Units",
    "Vanity Units",
    "Full Residential Interiors",
    "2D Working Drawings",
    "3D Renders",
  ];

  return (
    <main className="min-h-screen bg-paper text-brown selection:bg-sunflower selection:text-brown relative overflow-hidden">
      {/* Subtle CAD Floor Plan Watermark Detailing */}
      <ArchitecturalFloorPlanWatermark
        variant="detailed"
        opacity="opacity-[0.035]"
        className="pointer-events-none"
      />
      <Header />

      {/* 1. HERO SECTION (Matching media_1789843594562.png) */}
      <section className="pt-28 md:pt-36 pb-12 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brown-soft block mb-3">
              ABOUT ME
            </span>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-[76px] leading-[1.05] text-brown font-normal mb-6 tracking-tight">
              Designing spaces with{" "}
              <span className="italic text-sunflower font-normal">
                purpose, warmth
              </span>{" "}
              &amp; personality.
            </h1>

            <p className="font-sans text-brown-soft text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              I&apos;m Muskan Pareek, an Interior Designer based in Bengaluru, Karnataka, India, with over three years of experience creating functional, beautiful spaces that inspire a kinder, more intentional way of living.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="#journey" variant="primary" size="lg" icon="arrow">
                My Journey
              </Button>
              <Button href="#contact" variant="secondary" size="lg" icon="none">
                Let&apos;s Connect
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[3/4] mask-arch-tall shadow-2xl border-4 border-paper-card bg-paper-card overflow-hidden">
              <Image
                src="/images/muskan/muskan-portrait.jpg"
                alt="Muskan Pareek - Interior Designer"
                fill
                priority
                className="object-cover object-[center_18%]"
              />
            </div>
            <div className="absolute -bottom-4 -left-2 z-20">
              <PaperNote rotate="left">
                <span className="text-xl">Thoughtful Spaces · Better Living ♡</span>
              </PaperNote>
            </div>
          </div>

        </div>

        {/* 4 Proof Points Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-stone/40">
          <div className="p-4 bg-paper-card rounded-2xl border border-stone/30">
            <div className="font-display text-3xl text-brown font-normal">3+</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brown mt-1">
              Years Experience
            </div>
            <div className="text-[11px] text-brown-soft/80 mt-0.5">
              In interior design &amp; execution
            </div>
          </div>

          <div className="p-4 bg-paper-card rounded-2xl border border-stone/30">
            <div className="font-display text-3xl text-brown font-normal">100%</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brown mt-1">
              Residential Interiors
            </div>
            <div className="text-[11px] text-brown-soft/80 mt-0.5">
              Homes that feel like you
            </div>
          </div>

          <div className="p-4 bg-paper-card rounded-2xl border border-stone/30">
            <div className="font-display text-3xl text-brown font-normal">2D + 3D</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brown mt-1">
              AutoCAD + SketchUp
            </div>
            <div className="text-[11px] text-brown-soft/80 mt-0.5">
              From concept to detail
            </div>
          </div>

          <div className="p-4 bg-paper-card rounded-2xl border border-stone/30">
            <div className="font-display text-3xl text-sunflower font-normal">AI+</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brown mt-1">
              AI-Assisted Workflows
            </div>
            <div className="text-[11px] text-brown-soft/80 mt-0.5">
              Smarter design possibilities
            </div>
          </div>
        </div>
      </section>

      <WavyDivider fill="#FFFDF7" position="bottom" className="my-8" />

      {/* 2. PHOTO COLLAGE & PROFILE BIO */}
      <section className="py-16 px-6 md:px-12 lg:px-16 bg-paper-card border-b border-stone/30">
        <div className="max-w-master mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Photo Collage (cols 1-6) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-stone/30">
              <Image
                src="/images/muskan/muskan-outdoor.jpg"
                alt="Muskan Pareek"
                fill
                className="object-cover object-[center_20%]"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-stone/30">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
                alt="Architectural drafting and plans"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-stone/30">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
                alt="Serene bedroom"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-stone/30">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80"
                alt="Wood furniture craftsmanship"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <PaperNote rotate="right" className="text-sm shadow-md">
                Spaces · Stories · People ♡
              </PaperNote>
            </div>
          </div>

          {/* Profile Bio (cols 7-12) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex flex-wrap items-baseline gap-4">
              <AnimatedHeading
                as="h2"
                className="font-display text-4xl sm:text-5xl text-brown font-normal"
                eyebrow="INTERIOR DESIGNER · BENGALURU, INDIA"
              >
                About Muskan Pareek
              </AnimatedHeading>
            </div>

            <p className="font-sans text-brown text-sm md:text-base leading-relaxed">
              Muskan Pareek is an Interior Designer based in Bengaluru, Karnataka, India, with over three years of experience across residential interiors, modular furniture design, space planning, design development, 2D drafting, 3D modelling, visualization, client coordination, and project execution.
            </p>

            <p className="font-sans text-brown text-sm md:text-base leading-relaxed">
              She works with AutoCAD, SketchUp, photorealistic 3D visualization, and AI-assisted design workflows. Her strength lies in creating spaces that are functional, aesthetically refined, technically practical, and aligned with the client&apos;s lifestyle and project needs.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <span className="font-handwriting text-2xl text-brown-soft">
                Functional Spaces, Happier People ♡
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MY JOURNEY TIMELINE */}
      <section id="journey" className="py-20 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="mb-12 border-b border-stone/40 pb-4">
          <div className="flex flex-wrap items-baseline gap-4">
            <AnimatedHeading
              as="h2"
              className="font-display text-4xl sm:text-5xl text-brown font-normal"
              eyebrow="EXPERIENCE THAT SHAPED ME"
            >
              My Journey
            </AnimatedHeading>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {journeyTimeline.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl border transition-all duration-300 ${
                item.isCurrent
                  ? "bg-paper-card border-sunflower shadow-md"
                  : "bg-paper-card/70 border-stone/40 hover:bg-paper-card hover:shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-brown-soft">
                  {item.period}
                </span>
                {item.isCurrent && (
                  <span className="bg-sunflower text-charcoal text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                    Current
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl text-brown font-normal mb-1">
                {item.company}
              </h3>
              <div className="text-xs uppercase tracking-wider text-brown-soft font-semibold mb-3">
                {item.role}
              </div>
              <p className="font-sans text-xs text-brown-soft leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <WavyDivider fill="#FFFDF7" position="bottom" />

      {/* 4. CORE STRENGTHS & EXPERTISE */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-paper-card border-b border-stone/30">
        <div className="max-w-master mx-auto">
          <div className="mb-12 border-b border-stone/40 pb-4">
            <div className="flex flex-wrap items-baseline gap-4">
              <h2 className="font-display text-4xl sm:text-5xl text-brown font-normal">
                Core Strengths &amp; Expertise
              </h2>
              <div className="text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-brown-soft">
                SPACES PLANNED WITH PURPOSE
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 10 Core Strengths Grid (cols 1-8) */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {coreStrengths.map((strength, idx) => (
                <div
                  key={idx}
                  className="bg-paper p-4 rounded-2xl border border-stone/40 shadow-xs flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-full bg-paper-card border border-stone/50 flex items-center justify-center mb-2.5 shadow-inner">
                    {strength.icon}
                  </div>
                  <h4 className="font-display text-base text-brown font-normal mb-1 leading-snug">
                    {strength.title}
                  </h4>
                  <p className="font-sans text-[11px] text-brown-soft leading-tight">
                    {strength.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Signature Tall Arch Feature Image (cols 9-12) */}
            <div className="lg:col-span-4 relative flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-[3/4.6] rounded-t-full rounded-b-3xl overflow-hidden shadow-xl border-4 border-paper bg-paper-card">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
                  alt="Craftsmanship and interior joinery details"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-center text-white">
                  <span className="font-handwriting text-2xl text-sunflower block">
                    Good Design Lives in The Details ♡
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW I WORK SECTION (Matching media_1789847148871.png) */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-master mx-auto border-b border-stone/30">
        <div className="mb-12 border-b border-stone/40 pb-4">
          <div className="flex flex-wrap items-baseline gap-4">
            <h2 className="font-display text-4xl sm:text-5xl text-brown font-normal">
              How I Work
            </h2>
            <div className="text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-brown-soft">
              A BALANCE OF CREATIVITY AND PRACTICALITY
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Arched Image with Note */}
          <div className="lg:col-span-4 relative flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[3/4.5] rounded-t-full rounded-b-3xl overflow-hidden shadow-xl border-4 border-paper-card bg-paper-card">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                alt="Dining space with arched architectural alcove"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-4 right-4 text-center">
                <span className="font-handwriting text-2xl text-paper block drop-shadow-sm">
                  Ideas To Meaningful Spaces ♡
                </span>
              </div>
            </div>
          </div>

          {/* Right Text & 5 Methodology Steps */}
          <div className="lg:col-span-8 space-y-6">
            <p className="font-sans text-brown text-sm md:text-base leading-relaxed">
              I believe great design is a balance of creativity, practicality and attention to detail. I consider dimensions, storage, materials, aesthetics and the way a space will be actually lived in. My goal is to create spaces that are not only beautiful, but also functional, comfortable and aligned with the client&apos;s lifestyle.
            </p>
            <p className="font-sans text-brown-soft text-xs md:text-sm leading-relaxed">
              AI does not replace interior design knowledge. It enhances speed, ideation, visualization and presentation, while the core design thinking, technical accuracy and decision-making always come from experience and intent.
            </p>

            {/* 5 Process Steps Horizontal Row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4 border-t border-stone/30">
              {[
                { no: "01", title: "Understand", desc: "Your needs, lifestyle & space." },
                { no: "02", title: "Plan", desc: "Concepts, layouts & material direction." },
                { no: "03", title: "Design", desc: "3D development & refinements." },
                { no: "04", title: "Execute", desc: "Technical drawings & coordination." },
                { no: "05", title: "Deliver", desc: "Spaces you'll love to live in." },
              ].map((step, idx) => (
                <div key={idx} className="p-3 bg-paper-card rounded-xl border border-stone/40 text-center">
                  <span className="font-mono text-[10px] text-olive font-bold block">{step.no}</span>
                  <div className="font-display text-sm text-brown font-semibold mt-0.5">{step.title}</div>
                  <div className="text-[10px] text-brown-soft/80 mt-1 leading-tight">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. TOOLS, DELIVERABLES & SPECIALTIES */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="mb-12 border-b border-stone/40 pb-4">
          <div className="flex flex-wrap items-baseline gap-4">
            <h2 className="font-display text-4xl sm:text-5xl text-brown font-normal">
              Tools, Deliverables &amp; Specialties
            </h2>
            <div className="text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-brown-soft">
              FROM CONCEPT TO COMPLETION
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Tools Grid (cols 1-8) */}
          <div className="lg:col-span-8 bg-paper-card p-6 md:p-8 rounded-3xl border border-stone/40 shadow-sm space-y-6">
            <div>
              <h3 className="font-sans text-xs uppercase tracking-widest text-brown-soft font-semibold mb-4">
                Production Software &amp; Workflows
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {toolsList.map((tool, i) => (
                  <div key={i} className="p-3.5 bg-paper rounded-2xl border border-stone/30">
                    <div className="font-display text-base text-brown font-normal mb-0.5">
                      {tool.name}
                    </div>
                    <div className="text-[11px] text-brown-soft/80">
                      {tool.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-sans text-xs uppercase tracking-widest text-brown-soft font-semibold mb-3">
                Key Deliverables &amp; Millwork Specialties
              </h3>
              <div className="flex flex-wrap gap-2">
                {deliverablesList.map((item, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-paper border border-stone/40 text-brown"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Arched Atmosphere Image (cols 9-12) */}
          <div className="lg:col-span-4 relative flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[3/4.2] rounded-t-full rounded-b-3xl overflow-hidden shadow-xl border-4 border-paper bg-paper-card">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                alt="Refined warm living space"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-4 right-4 text-center">
                <span className="font-handwriting text-2xl text-paper block drop-shadow-sm">
                  Spaces That Feel Like Home ♡
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GIFTYAARI SPOTLIGHT */}
      <section className="py-16 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="bg-olive/10 border border-olive/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-olive-deep block mb-2">
              A CREATIVE SIDE OF MY JOURNEY
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-brown font-normal mb-4">
              Giftyaari — Handcrafted Brand Venture
            </h3>
            <p className="font-sans text-brown-soft text-sm md:text-base leading-relaxed mb-6">
              Giftyaari, my personal venture in 2025, was a meaningful experience that helped me explore creativity beyond interiors. It strengthened my skills in branding, packaging, product styling, customer communication and creative ownership — qualities that continue to influence my design approach today.
            </p>
            <PaperNote rotate="left" className="text-base bg-paper-card shadow-sm">
              Creativity Finds a Way ♡
            </PaperNote>
          </div>
        </div>
      </section>

      {/* Connected Action Banner */}
      <section className="py-12 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="p-8 md:p-12 bg-paper-light rounded-3xl border border-stone/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-olive font-bold">
              PROFESSIONAL COLLABORATION
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-brown font-normal">
              Ready to explore spaces designed with intent?
            </h3>
            <p className="text-xs font-sans text-brown-soft max-w-md">
              Explore completed residential &amp; commercial case studies or review verified credentials and download the official PDF resume.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-full bg-charcoal text-white font-semibold text-xs hover:bg-brown transition-all shadow-xs"
            >
              Explore All Projects →
            </Link>
            <Link
              href="/resume"
              className="px-6 py-3 rounded-full bg-sunflower text-brown font-semibold text-xs hover:bg-sunflower-deep transition-all shadow-xs"
            >
              View Full Resume &amp; CV ↓
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
