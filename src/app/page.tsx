"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { SelectedProjectsSection } from "@/components/home/SelectedProjectsSection";
import { ExploreWorkSection } from "@/components/home/ExploreWorkSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { StyleOfWorkSection } from "@/components/home/StyleOfWorkSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { ContactSection } from "@/components/home/ContactSection";
import { SectionNavigator } from "@/components/motion/SectionNavigator";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-paper relative selection:bg-sunflower selection:text-brown">
      <Header />

      <SectionNavigator>
        {({ selectedProjectIndex, onSelectProject }) => (
          <>
            <HeroSection />
            <SelectedProjectsSection
              activeIndex={selectedProjectIndex}
              onSelectProject={onSelectProject}
            />
            <ExploreWorkSection />
            <ProcessSection />
            <StyleOfWorkSection />
            <ExperienceSection />
            <ContactSection />
          </>
        )}
      </SectionNavigator>
    </main>
  );
}
