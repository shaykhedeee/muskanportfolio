"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Download, Award, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";
import { EXPERIENCES, CORE_SKILLS } from "@/data/fixtures/experience";
import { Button } from "@/components/ui/Button";
import { WavyDivider } from "@/components/ui/WavyDivider";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      data-section="5"
      className="relative min-h-[100svh] lg:h-[100svh] lg:max-h-[100svh] w-full bg-paper flex flex-col justify-between py-10 md:py-12 lg:py-14 overflow-hidden content-visibility-auto"
    >
      <div className="max-w-master mx-auto w-full px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-center">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-3 border-b border-stone/40">
          <div>
            <AnimatedHeading
              as="h2"
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-brown font-normal tracking-tight"
              subtitle="Design experience grounded in real projects, modular detailing, and technical execution."
            >
              Experience &amp; Capabilities
            </AnimatedHeading>
          </div>

          <div className="mt-3 md:mt-0 flex gap-3">
            <Button href="/resume" variant="secondary" size="sm" icon="arrow">
              View Full CV
            </Button>
          </div>
        </div>

        {/* Two-Column Grid: Timeline (Left) + Skills & Deliverables (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Left: Experience Timeline (cols 1-7) */}
          <div className="lg:col-span-7 bg-paper-card p-6 rounded-2xl border border-stone/40 shadow-sm">
            <div className="font-sans text-xs uppercase tracking-widest text-brown-soft font-semibold mb-4">
              Verified Career Timeline
            </div>

            <div className="space-y-4 relative before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-[2px] before:bg-stone/60">
              {EXPERIENCES.slice(0, 3).map((exp) => (
                <div key={exp.id} className="relative pl-8 group">
                  <span
                    className={`absolute left-0 top-1.5 w-[24px] h-[24px] rounded-full border-2 flex items-center justify-center bg-paper-card transition-colors ${
                      exp.isCurrent
                        ? "border-sunflower bg-sunflower/20"
                        : "border-stone group-hover:border-brown-soft"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        exp.isCurrent ? "bg-sunflower" : "bg-stone-dark"
                      }`}
                    />
                  </span>

                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-display text-lg text-brown font-medium">
                      {exp.role}
                    </span>
                    <span className="text-xs text-olive font-semibold">
                      @{exp.company}
                    </span>
                    <span className="text-[11px] font-mono text-brown-soft ml-auto">
                      {exp.period}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-brown-soft leading-relaxed mt-1 line-clamp-2">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Capabilities (cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="bg-paper-card p-6 rounded-2xl border border-stone/40 shadow-sm space-y-3">
              <div className="font-sans text-xs uppercase tracking-widest text-brown-soft font-semibold">
                Technical Execution
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {[
                  "AutoCAD 2D Working Sets",
                  "3D SketchUp & Enscape",
                  "System 32 Millwork",
                  "Site Supervision & MEP",
                ].map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 bg-paper rounded-xl border border-stone/30 flex items-center gap-2 text-xs text-brown font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-olive shrink-0" />
                    <span className="truncate">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 bg-olive text-white rounded-2xl flex items-center justify-between shadow-sm">
              <div>
                <div className="font-display text-lg text-white font-normal">
                  Download Official CV
                </div>
                <div className="text-[11px] text-stone-light/90">
                  235 KB PDF · Verified Portfolio
                </div>
              </div>
              <a
                href="/Muskan-Pareek-Interior-Designer-Resume.pdf"
                download="Muskan-Pareek-Interior-Designer-Resume.pdf"
                className="w-9 h-9 rounded-full bg-sunflower text-charcoal flex items-center justify-center hover:bg-sunflower-deep transition-colors shadow-sm shrink-0"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>

      <WavyDivider fill="#F7F2E8" position="bottom" className="mt-2" />
    </section>
  );
}
