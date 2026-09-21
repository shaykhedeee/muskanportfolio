"use client";

import React, { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    let animationFrameId: number;
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let hasMoved = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        ringX = mouseX;
        ringY = mouseY;
        setIsVisible(true);
      }

      // Direct zero-lag hardware GPU translation for the center dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      // Detect clickable/interactive elements
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest("a, button, input, textarea, select, [role='button'], [data-cursor], label, .cursor-pointer")
      );
      setIsHovered(isInteractive);
    };

    // Smooth spring trailing physics loop for the outer ring
    const render = () => {
      const damping = 0.22;
      ringX += (mouseX - ringX) * damping;
      ringY += (mouseY - ringY) * damping;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const onMouseDown = () => setIsPressed(true);
    const onMouseUp = () => setIsPressed(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* 1. Center Precision Dot - Zero Latency Hardware Accelerated */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full transition-transform duration-75 will-change-transform shadow-xs ${
          isHovered
            ? "bg-sunflower scale-125 shadow-[0_0_8px_rgba(240,184,58,0.7)]"
            : "bg-[#4A3B32]"
        }`}
        style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
      />

      {/* 2. Spring-Smoothed Architectural Trailing Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full transition-[width,height,background-color,border-color,transform] duration-200 ease-out will-change-transform flex items-center justify-center ${
          isHovered
            ? "w-10 h-10 border border-sunflower bg-sunflower/15 shadow-[0_0_12px_rgba(240,184,58,0.25)]"
            : "w-7 h-7 border border-[#4A3B32]/35 bg-transparent"
        } ${isPressed ? "scale-75 opacity-90" : "scale-100"}`}
        style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
      />
    </div>
  );
}
