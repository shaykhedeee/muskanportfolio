import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Download,
  Linkedin,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  Phone,
  FileText,
  Eye,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PaperNote } from "@/components/ui/PaperNote";

export const metadata: Metadata = {
  title: "Resume | Muskan Pareek — Interior Designer in Bengaluru",
  description:
    "Professional resume of Muskan Pareek, an Interior Designer with 4+ years of experience across residential space planning, AutoCAD drafting, SketchUp 3D modelling, modular design, and photorealistic visualization.",
};

export default function ResumePage() {
  const experiences = [
    {
      company: "Spacious Venture",
      role: "Interior Designer",
      period: "May 2026 – Present",
      location: "Bengaluru, Karnataka",
      summary:
        "Lead residential interior design packages from initial client briefs through space planning, detailed AutoCAD drafting, and SketchUp 3D models to vendor coordination and on-site execution.",
      highlights: [
        "Delivered full-scope space plans and furniture layouts for luxury apartments and villas.",
        "Engineered modular joinery details for kitchens, wardrobes, and TV units.",
        "Coordinated with turnkey contractors, lighting vendors, and site supervisors.",
      ],
    },
    {
      company: "Freelance Interior Design Practice",
      role: "Interior Designer & 3D Visualizer",
      period: "2025 – 2026",
      location: "Bengaluru / Remote",
      summary:
        "Delivered end-to-end bespoke residential projects, 2D architectural drawings, and photorealistic 3D visualization for private homeowners and independent design studios.",
      highlights: [
        "Produced comprehensive 2D CAD elevation sets and System 32 cabinetry drawings.",
        "Created high-fidelity interior renders using SketchUp, Enscape, and AI-assisted workflows.",
        "Managed client consultations, material selections, and moodboard curation.",
      ],
    },
    {
      company: "12 Square Interiors",
      role: "Senior Interior Designer",
      period: "June 2025 – September 2025",
      location: "Bengaluru, Karnataka",
      summary:
        "Directed residential design development, modular furniture systems, interior styling, and client presentations.",
      highlights: [
        "Supervised space planning and customized modular wardrobe and kitchen deliverables.",
        "Refined 3D design models and prepared presentation boards for client approvals.",
      ],
    },
    {
      company: "Giftyaari",
      role: "Founder & Creative Lead",
      period: "May 2025 – July 2025",
      location: "Bengaluru, Karnataka · Remote",
      summary:
        "Founded handmade craft and design venture, leading creative direction, product curation, packaging aesthetics, pricing, and client relationship management.",
      highlights: [
        "Directed bespoke gifting aesthetics, product packaging, and creative brand identity.",
        "Managed end-to-end client communications, vendor logistics, and design curation.",
      ],
    },
    {
      company: "CubeDecors",
      role: "Interior Designer",
      period: "November 2022 – August 2024",
      location: "Bengaluru, Karnataka",
      summary:
        "Managed residential projects focusing on modular kitchens, walk-in wardrobes, custom storage units, drafting, revisions, and site execution.",
      highlights: [
        "Drafted detailed shop drawings and cutting lists for modular factory production.",
        "Prepared material palettes and coordinated on-site installation benchmarks.",
      ],
    },
    {
      company: "The Design Palette",
      role: "Interior Design Intern",
      period: "May 2022 – July 2022",
      location: "Bengaluru, Karnataka",
      summary:
        "Assisted senior designers with spatial research, 2D drafting, 3D SketchUp modelling, and project documentation.",
      highlights: [
        "Documented on-site survey measurements and translated them into accurate CAD baselines.",
      ],
    },
  ];

  const capabilities = [
    { name: "Residential Interior Design", level: "Core Specialty" },
    { name: "Space Planning & Circulation", level: "Advanced" },
    { name: "AutoCAD 2D Drafting", level: "Expert" },
    { name: "SketchUp 3D Modelling", level: "Expert" },
    { name: "Photorealistic Visualization", level: "Advanced" },
    { name: "Modular Kitchens & Wardrobes", level: "Advanced" },
    { name: "Custom Joinery & Millwork", level: "Advanced" },
    { name: "Material & Finish Curation", level: "Expert" },
    { name: "Site & Vendor Coordination", level: "Proficient" },
    { name: "AI-Assisted Design Workflows", level: "Innovative" },
  ];

  const softwareStack = [
    "AutoCAD",
    "SketchUp",
    "Enscape",
    "V-Ray",
    "Adobe Photoshop",
    "MS Office Suite",
    "Canva",
    "Midjourney / AI Visualizers",
  ];

  return (
    <main className="min-h-screen bg-paper text-brown selection:bg-sunflower selection:text-brown">
      <Header />

      {/* Top Breadcrumb & Action Banner */}
      <div className="pt-28 pb-6 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone/30 pb-6">
          <Link
            href="/#home"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brown-soft hover:text-charcoal transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Homepage</span>
          </Link>

          {/* Quick PDF Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/Muskan-Pareek-Interior-Designer-Resume.pdf"
              download="Muskan-Pareek-Interior-Designer-Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sunflower text-brown font-semibold text-xs hover:bg-sunflower-deep transition-all shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume PDF ↓</span>
            </a>

            <a
              href="/Muskan-Pareek-Interior-Design-Portfolio.pdf"
              download="Muskan-Pareek-Interior-Design-Portfolio.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-paper-card border border-stone/40 text-brown font-semibold text-xs hover:border-sunflower transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Offline Portfolio PDF ↓</span>
            </a>

            <a
              href="https://www.linkedin.com/in/muskan-pareek-78b19a224"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-paper-card border border-stone/40 text-brown font-semibold text-xs hover:text-olive transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span className="sr-only sm:not-sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Resume Document Content */}
      <div className="pb-24 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="bg-paper-light rounded-3xl p-5 sm:p-8 md:p-14 border border-stone/30 shadow-md">
          
          {/* Header Block */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-10 border-b border-stone/40">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-olive block">
                CURRICULUM VITAE · RESIDENTIAL INTERIORS
              </span>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brown font-normal leading-tight">
                Muskan Pareek
              </h1>

              <div className="text-lg font-display text-brown-soft">
                Interior Designer &amp; 3D Visualizer · Bengaluru, India
              </div>

              <p className="font-sans text-brown-soft text-sm md:text-base leading-relaxed pt-1">
                Interior Designer with 4+ years of professional experience across residential interiors, space planning, modular furniture, technical AutoCAD drafting, SketchUp 3D modelling, photorealistic visualization, and client-vendor execution support. Leverages modern AI-assisted design workflows to accelerate design iteration and presentation excellence.
              </p>
            </div>

            {/* Quick Contact Info Card */}
            <div className="p-5 bg-paper rounded-2xl border border-stone/30 flex flex-col gap-3 shrink-0 text-xs">
              <div className="flex items-center gap-2.5 text-brown">
                <Mail className="w-4 h-4 text-olive shrink-0" />
                <a href="mailto:pareekmuskan1999@gmail.com" className="hover:underline font-medium">
                  pareekmuskan1999@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-brown">
                <MapPin className="w-4 h-4 text-sunflower-deep shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </div>

              <div className="flex items-center gap-2.5 text-brown">
                <Briefcase className="w-4 h-4 text-brown-soft shrink-0" />
                <span>Hybrid · Remote · Bengaluru</span>
              </div>

              <div className="flex items-center gap-2.5 text-brown">
                <Sparkles className="w-4 h-4 text-olive shrink-0" />
                <span className="font-semibold text-olive">Available for New Roles</span>
              </div>
            </div>
          </div>

          {/* Two Column Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10">
            
            {/* Left Column: Work Experience Timeline (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-olive" />
                <h2 className="font-display text-2xl md:text-3xl text-brown font-normal">
                  Professional Experience
                </h2>
              </div>

              <div className="relative pl-6 border-l-2 border-sunflower/40 space-y-10">
                {experiences.map((exp, idx) => (
                  <div key={exp.company} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-paper border-2 border-sunflower group-hover:bg-sunflower transition-colors" />

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="font-display text-xl text-brown font-normal">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono text-brown-soft/80">
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-xs uppercase tracking-wider font-sans font-semibold text-olive mt-0.5 mb-2">
                      {exp.company} · {exp.location}
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-brown-soft leading-relaxed mb-3">
                      {exp.summary}
                    </p>

                    <ul className="space-y-1.5 text-xs text-brown-soft">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-sunflower font-bold">―</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Creative Venture Callout */}
              <div className="p-6 bg-paper rounded-2xl border border-stone/30 mt-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-lg text-brown font-normal">
                    Giftyaari — Founder &amp; Owner
                  </h3>
                  <span className="text-xs font-mono text-brown-soft">
                    May 2025 – July 2025
                  </span>
                </div>
                <p className="text-xs font-sans text-brown-soft leading-relaxed">
                  Founded and operated a handmade craft venture, gaining practical experience in creative direction, product curation, packaging, client relations, and end-to-end operational ownership.
                </p>
              </div>
            </div>

            {/* Right Column: Capabilities, Software, Education (5 Cols) */}
            <div className="lg:col-span-5 space-y-10">
              
              {/* Official Resume Sheet Preview Card */}
              <div className="p-5 bg-paper rounded-2xl border border-stone/30 space-y-4 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-olive" />
                    <span className="text-xs font-mono uppercase tracking-wider text-olive font-bold">
                      OFFICIAL 2026 RESUME
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-sunflower/30 text-charcoal px-2 py-0.5 rounded font-semibold">
                    235 KB PDF
                  </span>
                </div>

                <div className="relative aspect-[1/1.35] w-full rounded-xl overflow-hidden border border-stone/40 shadow-sm bg-stone/20 group">
                  <Image
                    src="/resume/muskan-pareek-resume-preview.jpg"
                    alt="Muskan Pareek Official Resume Document"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                      href="/Muskan-Pareek-Interior-Designer-Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-paper text-charcoal font-semibold text-xs shadow-md flex items-center gap-2 hover:bg-sunflower transition-all"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Full PDF ↗</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-brown-soft font-sans">
                    Print-ready vector format
                  </span>
                  <a
                    href="/Muskan-Pareek-Interior-Designer-Resume.pdf"
                    download="Muskan-Pareek-Interior-Designer-Resume.pdf"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brown hover:text-sunflower-deep transition-colors"
                  >
                    <span>Download PDF</span>
                    <span>↓</span>
                  </a>
                </div>
              </div>

              {/* Capabilities */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-olive" />
                  <h2 className="font-display text-2xl text-brown font-normal">
                    Core Capabilities
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                  {capabilities.map((cap) => (
                    <div
                      key={cap.name}
                      className="p-3 bg-paper rounded-xl border border-stone/30 flex items-center justify-between text-xs"
                    >
                      <span className="font-sans font-medium text-brown">
                        {cap.name}
                      </span>
                      <span className="text-[10px] font-mono text-olive font-semibold px-2 py-0.5 rounded bg-olive/10">
                        {cap.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Software Proficiency */}
              <div className="space-y-4">
                <h3 className="font-display text-xl text-brown font-normal">
                  Software &amp; Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {softwareStack.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-sans font-semibold px-3 py-1.5 rounded-full bg-paper border border-stone/30 text-brown shadow-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-olive" />
                  <h2 className="font-display text-2xl text-brown font-normal">
                    Education
                  </h2>
                </div>

                <div className="p-5 bg-paper rounded-2xl border border-stone/30 space-y-1.5">
                  <h3 className="font-display text-lg text-brown font-normal">
                    Bachelor of Science in Interior Design
                  </h3>
                  <div className="text-xs font-sans font-semibold text-olive">
                    INIFD Institute · 2019 – 2022
                  </div>
                  <p className="text-xs font-sans text-brown-soft leading-relaxed pt-1">
                    Graduated with comprehensive training in space planning, residential and commercial interiors, technical architectural drafting, furniture design, and building materials.
                  </p>
                </div>
              </div>

              {/* Bottom Sticky Action Box */}
              <div className="p-6 bg-sunflower/15 rounded-3xl border border-sunflower/40 text-center space-y-3">
                <span className="font-display text-lg text-brown block">
                  Need an offline copy?
                </span>
                <p className="text-xs text-brown-soft">
                  Download the official 2026 PDF resume or contact Muskan directly for design opportunities.
                </p>
                <div className="flex flex-col gap-2 pt-1">
                  <a
                    href="/Muskan-Pareek-Interior-Designer-Resume.pdf"
                    download="Muskan-Pareek-Interior-Designer-Resume.pdf"
                    className="w-full py-2.5 rounded-full bg-sunflower text-brown font-semibold text-xs hover:bg-sunflower-deep transition-all shadow-xs"
                  >
                    Download Resume PDF ↓
                  </a>
                  <a
                    href="mailto:pareekmuskan1999@gmail.com"
                    className="w-full py-2 rounded-full bg-paper border border-stone/40 text-brown font-semibold text-xs hover:border-sunflower transition-all"
                  >
                    Email: pareekmuskan1999@gmail.com
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
