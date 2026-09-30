"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Compass, Box, Wrench, Sparkles, ArrowRight, Heart } from "lucide-react";
import { PROCESS_STEPS } from "@/data/fixtures/projects";
import { PaperNote } from "@/components/ui/PaperNote";
import { WavyDivider } from "@/components/ui/WavyDivider";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ArchitecturalFloorPlanWatermark } from "@/components/ui/ArchitecturalFloorPlanWatermark";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Understand your lifestyle, needs and inspiration.",
      icon: Search,
    },
    {
      num: "02",
      title: "Concept",
      desc: "Ideas, moodboards and spatial direction.",
      icon: Compass,
    },
    {
      num: "03",
      title: "Design",
      desc: "Detailed plans, materials and visualizations.",
      icon: Box,
    },
    {
      num: "04",
      title: "Execute",
      desc: "Seamless coordination and on-site support.",
      icon: Wrench,
    },
    {
      num: "05",
      title: "Reveal",
      desc: "A space you'll love, live and belong in.",
      icon: Heart,
    },
  ];

  return (
    <section
      id="process"
      data-section="3"
      aria-label="Design Process"
      className="relative min-h-[100svh] lg:h-[100svh] lg:max-h-[100svh] w-full bg-paper flex flex-col justify-between py-10 md:py-12 lg:py-14 overflow-hidden content-visibility-auto"
    >
      {/* Subtle Architectural Floor Plan Background Watermark */}
      <ArchitecturalFloorPlanWatermark
        variant="detailed"
        opacity="opacity-[0.035]"
        className="pointer-events-none"
      />
      <div className="max-w-master mx-auto w-full px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-center">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-3 border-b border-stone/40">
          <div className="flex flex-wrap items-baseline gap-4 md:gap-6">
            <AnimatedHeading
              as="h2"
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-brown font-normal tracking-tight"
              eyebrow="FROM IDEAS TO SPACES THAT MATTER"
            >
              My Design Process
            </AnimatedHeading>
          </div>

          <div className="mt-3 md:mt-0">
            <PaperNote rotate="left" hasTape={false} className="text-xl">
              Thoughtful · Intentional · Always Personal ♡
            </PaperNote>
          </div>
        </div>

        {/* Layout: Left Arch Vignette + Right 5-Step Horizontal Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-6">
          
          {/* Left Arch Container (cols 1-4) with Roman Arch */}
          <div className="lg:col-span-4 relative rounded-t-full rounded-b-3xl overflow-hidden shadow-xl border-4 border-paper-card aspect-[3/4.2] max-h-[440px] bg-paper-card group">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
              alt="Architectural space with arched doorway and daylight"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-black/25 to-transparent" />
            <div className="absolute bottom-8 left-6 right-6 text-paper space-y-2 text-center">
              <span className="text-[10px] uppercase font-mono tracking-widest text-sunflower font-bold px-3 py-1 rounded-full bg-charcoal/60 backdrop-blur-xs inline-block">
                STAGE 0{activeStep + 1} · {steps[activeStep].title}
              </span>
              <div className="font-display text-2xl sm:text-3xl font-normal leading-snug text-white">
                A clear process for beautiful results.
              </div>
              <p className="text-xs font-sans text-paper/85 leading-relaxed max-w-xs mx-auto">
                {steps[activeStep].desc}
              </p>
            </div>
          </div>

          {/* Right 5-Step Flow (cols 5-12) matching mockup */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-8">
            <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5 md:gap-3 items-start">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;
                const isActive = activeStep === idx;

                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    {/* Circle Icon Container */}
                    <div className="relative mb-2 sm:mb-3 flex items-center justify-center">
                      <div
                        className={`w-10 h-10 sm:w-13 sm:h-13 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                          isActive
                            ? "bg-sunflower border-brown shadow-lg scale-110"
                            : "bg-paper-card border-stone/50 group-hover:border-sunflower group-hover:scale-105"
                        }`}
                      >
                        <IconComponent
                          className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-colors ${
                            isActive ? "text-charcoal" : "text-brown"
                          }`}
                        />
                      </div>
                      
                      {/* Arrow to next item */}
                      {idx < 4 && (
                        <div className="hidden sm:block absolute left-[105%] top-1/2 -translate-y-1/2 text-stone/60 pointer-events-none">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>

                    {/* Step Number & Title */}
                    <div className="font-mono text-[10px] sm:text-xs font-bold text-sunflower-deep mb-0.5">
                      {step.num}
                    </div>
                    <div className="font-display text-xs sm:text-sm md:text-lg text-brown font-normal mb-1 truncate max-w-full">
                      {step.title}
                    </div>
                    <p className="font-sans text-[11px] text-brown-soft leading-tight max-w-[120px] hidden md:block">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Quote matching mockup */}
            <div className="text-center pt-4 border-t border-stone/30">
              <p className="font-display italic text-lg md:text-xl text-brown leading-relaxed max-w-xl mx-auto">
                &ldquo;Great design isn&apos;t just what you see, it&apos;s how it makes you feel.&rdquo;
              </p>
              <div className="text-xs uppercase tracking-widest font-mono text-olive font-semibold mt-1">
                — MUSKAN PAREEK
              </div>
            </div>
          </div>

        </div>

      </div>

      <WavyDivider fill="#F7F2E8" position="bottom" className="mt-2" />
    </section>
  );
}
