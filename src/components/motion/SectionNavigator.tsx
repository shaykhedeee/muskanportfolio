"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { SectionProgress } from "@/components/layout/SectionProgress";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Observer);
}

const SECTION_IDS = [
  "home",
  "projects",
  "work",
  "process",
  "style",
  "experience",
  "contact",
];

const SECTION_NAMES = [
  "Hero",
  "Selected Projects",
  "Explore All My Work",
  "Design Process",
  "Style of Work",
  "Experience & Capabilities",
  "Contact & Resume",
];

interface SectionNavigatorProps {
  children: (props: {
    activeSection: number;
    selectedProjectIndex: number;
    onSelectProject: (index: number) => void;
  }) => React.ReactNode;
}

export function SectionNavigator({ children }: SectionNavigatorProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const lenisRef = useRef<Lenis | null>(null);
  const activeSectionRef = useRef(0);
  const selectedProjectIndexRef = useRef(0);
  const isLockedRef = useRef(false);

  // Sync refs with state & document attributes for CSS and testing
  useEffect(() => {
    activeSectionRef.current = activeSection;
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-active-section", activeSection.toString());
      document.documentElement.setAttribute("data-section-id", SECTION_IDS[activeSection]);
    }
  }, [activeSection]);

  useEffect(() => {
    selectedProjectIndexRef.current = selectedProjectIndex;
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-project-index", selectedProjectIndex.toString());
    }
  }, [selectedProjectIndex]);

  useEffect(() => {
    isLockedRef.current = isLocked;
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-is-transitioning", isLocked.toString());
    }
  }, [isLocked]);

  // Navigate to section programmatic function with fluid easing
  const scrollToSection = useCallback((targetIndex: number, projectIndex?: number) => {
    if (targetIndex < 0 || targetIndex >= SECTION_IDS.length) return;

    setIsLocked(true);
    const targetId = SECTION_IDS[targetIndex];
    const targetEl = document.getElementById(targetId);

    if (projectIndex !== undefined) {
      setSelectedProjectIndex(projectIndex);
    }

    setActiveSection(targetIndex);

    // Update URL hash without jumping
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${targetId}`);
    }

    if (lenisRef.current && targetEl) {
      lenisRef.current.scrollTo(targetEl, {
        offset: 0,
        duration: 0.8,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      });
    } else if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }

    // Release lock after transition completion
    setTimeout(() => {
      setIsLocked(false);
    }, 800);
  }, []);

  // Section 02 Internal Rail Step Handler
  const stepProjectRail = useCallback((newIndex: number) => {
    setIsLocked(true);
    setSelectedProjectIndex(newIndex);
    setTimeout(() => {
      setIsLocked(false);
    }, 450);
  }, []);

  // Main Intent Dispatcher
  const handleIntent = useCallback(
    (direction: "down" | "up") => {
      if (isLockedRef.current) return;

      const currentSec = activeSectionRef.current;
      const currentProj = selectedProjectIndexRef.current;

      if (direction === "down") {
        // If on Selected Projects section (index 1) and not at end of internal rail (max 3 for 5 projects with 2 visible)
        if (currentSec === 1 && currentProj < 3) {
          stepProjectRail(currentProj + 1);
        } else if (currentSec < SECTION_IDS.length - 1) {
          // If going into Selected Projects, start from project 0
          const nextProj = currentSec + 1 === 1 ? 0 : undefined;
          scrollToSection(currentSec + 1, nextProj);
        }
      } else if (direction === "up") {
        // If on Selected Projects and can step back internally
        if (currentSec === 1 && currentProj > 0) {
          stepProjectRail(currentProj - 1);
        } else if (currentSec > 0) {
          // If going back up into Selected Projects from Section 2, start at project 3
          const prevProj = currentSec - 1 === 1 ? 3 : undefined;
          scrollToSection(currentSec - 1, prevProj);
        }
      }
    },
    [scrollToSection, stepProjectRail]
  );

  // Setup Lenis, GSAP Observer, Keyboard & Resize listeners
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check prefers-reduced-motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => {
      setIsReducedMotion(motionQuery.matches);
    };
    updateMotion();
    motionQuery.addEventListener("change", updateMotion);

    // If reduced motion is requested or narrow screen (< 768px), allow native scrolling
    const isMobile = window.innerWidth < 768;
    if (motionQuery.matches || isMobile) {
      return () => {
        motionQuery.removeEventListener("change", updateMotion);
      };
    }

    // Initialize Lenis for buttery smooth programmatic gliding
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    // Bulletproof wheel listener with debounce & velocity detection
    let accumulatedDelta = 0;
    let resetTimer: NodeJS.Timeout | null = null;

    const handleWheel = (e: WheelEvent) => {
      // Prevent native free scrolling
      e.preventDefault();

      if (isLockedRef.current) return;

      accumulatedDelta += e.deltaY;

      if (resetTimer) clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        accumulatedDelta = 0;
      }, 150);

      // Trigger if single gesture or accumulated intent exceeds threshold
      if (Math.abs(e.deltaY) >= 20 || Math.abs(accumulatedDelta) >= 35) {
        const dir = accumulatedDelta > 0 ? "down" : "up";
        accumulatedDelta = 0;
        handleIntent(dir);
      }
    };

    // Touch gesture support for touch screens and mobile trackpads
    let touchStartY = 0;
    let touchStartX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isLockedRef.current) return;
      if (e.touches.length === 0) return;

      const deltaY = touchStartY - e.touches[0].clientY;
      const deltaX = touchStartX - e.touches[0].clientX;

      // Only trigger if vertical motion is dominant and exceeds swipe threshold
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 30) {
        e.preventDefault();
        if (deltaY > 0) {
          handleIntent("down");
        } else {
          handleIntent("up");
        }
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
      }
    };

    // Non-passive wheel listener is essential for preventDefault to work in modern Chromium
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === "ArrowDown" || e.key === "PageDown" || (e.key === " " && !e.shiftKey)) {
        e.preventDefault();
        handleIntent("down");
      } else if (e.key === "ArrowUp" || e.key === "PageUp" || (e.key === " " && e.shiftKey)) {
        e.preventDefault();
        handleIntent("up");
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollToSection(0, 0);
      } else if (e.key === "End") {
        e.preventDefault();
        scrollToSection(SECTION_IDS.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Synchronize hash on initial mount (only for non-home deep links) and when hash changes
    const onHashChange = () => {
      if (typeof window === "undefined") return;
      const rawHash = window.location.hash.replace("#", "");
      if (!rawHash) return;
      const idx = SECTION_IDS.indexOf(rawHash);
      if (idx !== -1 && idx !== activeSectionRef.current) {
        const targetProj = idx === 1 ? 0 : undefined;
        scrollToSection(idx, targetProj);
      }
    };

    const syncInitialHash = () => {
      if (typeof window === "undefined") return;
      const rawHash = window.location.hash.replace("#", "");
      if (!rawHash || rawHash === "home") return;
      const idx = SECTION_IDS.indexOf(rawHash);
      if (idx > 0 && idx !== activeSectionRef.current) {
        const targetProj = idx === 1 ? 0 : undefined;
        scrollToSection(idx, targetProj);
      }
    };

    const hashTimer = setTimeout(syncInitialHash, 80);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      clearTimeout(hashTimer);
      if (resetTimer) clearTimeout(resetTimer);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
      motionQuery.removeEventListener("change", updateMotion);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [handleIntent, scrollToSection]);

  return (
    <>
      {/* 7-Step Navigation Progress Rail (desktop) */}
      <SectionProgress
        activeSection={activeSection}
        totalSections={SECTION_IDS.length}
        onNavigate={(idx) => {
          const targetProj = idx === 1 ? 0 : undefined;
          scrollToSection(idx, targetProj);
        }}
        sectionNames={SECTION_NAMES}
      />

      {/* Render children sections with active state passing */}
      {children({
        activeSection,
        selectedProjectIndex,
        onSelectProject: (idx) => stepProjectRail(idx),
      })}
    </>
  );
}
