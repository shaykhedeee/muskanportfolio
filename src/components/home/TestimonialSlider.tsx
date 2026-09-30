"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/cn";
import { playTap } from "@/lib/sound";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  project: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "riya",
    name: "Riya Sharma",
    role: "Homeowner",
    location: "Jaipur",
    project: "The Calm House",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    quote:
      "Muskan understood our lifestyle perfectly and transformed our house into a warm, functional and beautiful home. The attention to detail, lighting balance, and overall experience was exceptional.",
  },
  {
    id: "vivek",
    name: "Mr. Vivek",
    role: "Homeowner",
    location: "Bengaluru",
    project: "Mr. Vivek Residence",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote:
      "The custom fluted TV unit and System 32 joinery turned our living space into a work of art. The 2D drawings were so precise that execution went through without a single hiccup on site.",
  },
  {
    id: "sarthak",
    name: "Sarthak & Neha",
    role: "Homeowners",
    location: "Bengaluru",
    project: "The Sarthak Residence",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote:
      "From the initial 3D visualization to the final handover, Muskan's eye for natural light, warm oak finishes, and sacred mandir design exceeded all our expectations.",
  },
  {
    id: "ananya",
    name: "Ananya Sen",
    role: "Creative Director",
    location: "Jaipur",
    project: "Ekkat Boutique Store",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    quote:
      "Muskan captured our brand's artisanal textile soul with arched travertine plinths and warm minimal brass rails. Our clients constantly remark on how serene and refined the showroom feels.",
  },
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Auto-advance every 10 seconds (10000ms), pausing on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    playTap();
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    playTap();
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart === null) return;
        const diff = touchStart - e.changedTouches[0].clientX;
        if (diff > 50) handleNext();
        else if (diff < -50) handlePrev();
        setTouchStart(null);
      }}
      className="bg-paper-card p-4 sm:p-5 rounded-2xl border border-stone/40 shadow-xs relative overflow-hidden transition-all duration-300"
    >
      {/* 10-second progress bar indicator */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-stone/20">
        <div
          key={currentIndex}
          className={cn(
            "h-full bg-sunflower transition-all",
            !isPaused ? "animate-progress-10s" : "w-full opacity-60"
          )}
          style={{ animationDuration: "10s" }}
        />
      </div>

      {/* Top Header Row with Quote Icon and Navigation Buttons */}
      <div className="flex items-center justify-between mb-2 pt-1">
        <div className="flex items-center gap-1.5">
          <Quote className="w-4 h-4 text-sunflower fill-sunflower/20" />
          <span className="text-[10px] uppercase font-mono tracking-widest text-olive font-bold">
            CLIENT WORDS · 0{currentIndex + 1}/0{TESTIMONIALS.length}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-6 h-6 rounded-full bg-paper border border-stone/40 flex items-center justify-center text-brown hover:bg-white transition-all shadow-2xs hover:scale-105 cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-6 h-6 rounded-full bg-paper border border-stone/40 flex items-center justify-center text-brown hover:bg-white transition-all shadow-2xs hover:scale-105 cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Testimonial Quote with Smooth Fade */}
      <div className="min-h-[72px] sm:min-h-[64px] flex items-center mb-3">
        <p
          key={`quote-${current.id}`}
          className="font-sans text-brown text-xs sm:text-[13px] italic leading-relaxed animate-fade-in"
        >
          &ldquo;{current.quote}&rdquo;
        </p>
      </div>

      {/* Author Info & Project Badge */}
      <div className="flex items-center justify-between pt-2 border-t border-stone/20">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-paper border border-stone/40 overflow-hidden relative shrink-0">
            <Image
              src={current.avatar}
              alt={current.name}
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-display text-sm text-brown font-normal leading-tight">
              {current.name}
            </div>
            <div className="text-[9px] uppercase tracking-wider text-brown-soft">
              {current.role}, {current.location}
            </div>
          </div>
        </div>

        {/* Project Tag */}
        <span className="text-[9px] font-mono font-medium px-2 py-0.5 rounded-full bg-paper border border-stone/30 text-olive shrink-0">
          {current.project}
        </span>
      </div>

      {/* Interactive Dots Pagination */}
      <div className="flex items-center justify-center gap-1.5 pt-2.5">
        {TESTIMONIALS.map((t, idx) => (
          <button
            key={t.id}
            type="button"
            onClick={() => {
              playTap();
              setCurrentIndex(idx);
            }}
            aria-label={`Go to testimonial ${idx + 1}`}
            className={cn(
              "h-1 rounded-full transition-all duration-300 cursor-pointer",
              idx === currentIndex ? "w-5 bg-sunflower" : "w-1.5 bg-stone/40 hover:bg-stone"
            )}
          />
        ))}
      </div>
    </div>
  );
}
