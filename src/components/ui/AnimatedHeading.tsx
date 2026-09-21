"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface AnimatedHeadingProps {
  as?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  className?: string;
  eyebrow?: string;
  subtitle?: string;
  decoration?: "underline" | "none";
  delay?: number;
}

export function AnimatedHeading({
  as: Component = "h2",
  children,
  className = "",
  eyebrow,
  subtitle,
  decoration = "none",
  delay = 0,
}: AnimatedHeadingProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check reduced motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    // Use IntersectionObserver with low threshold to trigger when entering screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(element);

    // Also trigger if ancestor section has data-active-section or is already active
    const checkSectionActive = () => {
      const parentSection = element.closest("[data-section]");
      if (parentSection) {
        const activeSectionAttr = document.documentElement.getAttribute("data-active-section");
        const sectionIndex = parentSection.getAttribute("data-section");
        if (activeSectionAttr === sectionIndex) {
          setIsVisible(true);
        }
      }
    };

    checkSectionActive();

    const mutationObserver = new MutationObserver(checkSectionActive);
    mutationObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-active-section"],
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="space-y-1">
      {eyebrow && (
        <div
          className={cn(
            "text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-brown-soft transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
          style={{ transitionDelay: `${delay}ms` }}
        >
          {eyebrow}
        </div>
      )}

      <div className="relative inline-block">
        <Component
          className={cn(
            className,
            "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
            isVisible ? "translate-y-0 opacity-100 filter-none" : "translate-y-3 opacity-0 blur-[2px]"
          )}
          style={{ transitionDelay: `${delay + 50}ms` }}
        >
          {children}
        </Component>

        {decoration === "underline" && (
          <svg
            className={cn(
              "w-full h-2.5 sm:h-3 text-sunflower -mt-1 pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isVisible ? "stroke-dashoffset-0 opacity-100 scale-x-100" : "opacity-0 scale-x-0 origin-left"
            )}
            viewBox="0 0 240 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transitionDelay: `${delay + 320}ms` }}
          >
            <path
              d="M3 8.5C48 3.5 118 2.5 237 7.5"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="240"
              strokeDashoffset={isVisible ? 0 : 240}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
        )}
      </div>

      {subtitle && (
        <p
          className={cn(
            "font-sans text-brown-soft text-sm md:text-base transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
          style={{ transitionDelay: `${delay + 180}ms` }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
