import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PaperNote } from "@/components/ui/PaperNote";
import { getProjects } from "@/sanity/services";
import { ProjectsDirectory } from "@/components/projects/ProjectsDirectory";

export const metadata: Metadata = {
  title: "All Projects | Muskan Pareek — Interior Architecture & Design",
  description:
    "Curated portfolio of residential interiors, commercial spaces, and custom joinery by Muskan Pareek. Explore detailed case studies with 2D drawings, 3D visualizations, and material specifications.",
};

export default async function ProjectsIndexPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-paper text-brown selection:bg-sunflower selection:text-brown">
      <Header />

      {/* Top Breadcrumb Navigation */}
      <div className="pt-28 pb-4 px-4 sm:px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="flex items-center justify-between border-b border-stone/30 pb-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brown-soft hover:text-charcoal transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Homepage</span>
          </Link>
          <div className="flex items-center gap-4 text-xs font-mono uppercase text-olive font-semibold tracking-wider">
            <Link href="/work" className="hover:text-charcoal transition-colors">
              Disciplines
            </Link>
            <span className="text-stone-dark">/</span>
            <span className="text-charcoal">All Projects</span>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-16 max-w-master mx-auto">
        <div className="mb-12 border-b border-stone/40 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-brown-soft">
                COMPLETE PORTFOLIO INDEX
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-olive/15 text-olive font-semibold">
                22 Curated Works (10 Residential & Villa · 3 Commercial · 9 Furniture)
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl text-brown font-normal leading-tight">
              Selected Projects
            </h1>
            <p className="font-sans text-brown-soft text-base md:text-lg leading-relaxed pt-1">
              Every project is an exploration in functional layout, natural materials, and precision joinery. Browse our residential homes and commercial environments below.
            </p>
          </div>

          <PaperNote rotate="right" hasTape={false} className="text-xl">
            Thoughtful spaces ♡
          </PaperNote>
        </div>

        {/* Interactive Filterable Projects Directory */}
        <ProjectsDirectory initialProjects={projects} />
      </section>

      <Footer />
    </main>
  );
}
