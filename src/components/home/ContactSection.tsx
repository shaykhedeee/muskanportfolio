import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Download, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PaperNote } from "@/components/ui/PaperNote";
import { SunBadge } from "@/components/ui/SunBadge";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

export function ContactSection() {
  return (
    <section
      id="contact"
      data-section="6"
      className="relative min-h-[100svh] lg:h-[100svh] lg:max-h-[100svh] w-full bg-paper flex flex-col justify-between pt-8 md:pt-10 pb-2 overflow-hidden content-visibility-auto"
    >
      <div className="max-w-master mx-auto w-full px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-center">
        
        {/* Main Grid: 3-column layout matching mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-3">
          
          {/* Left Feature Visual: Roman Arch with Sunflowers on Table (cols 1-4) */}
          <div className="lg:col-span-4 relative flex justify-center">
            <div
              data-cursor="view"
              className="relative w-full max-w-[290px] aspect-[3/3.8] rounded-t-full rounded-b-3xl overflow-hidden shadow-xl border-4 border-paper-card bg-paper-card group cursor-pointer"
            >
              <Image
                src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80"
                alt="Sunflowers on rustic wooden table with warm ambient sunlight"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Center Column: CTA Headline & Action Buttons (cols 5-8) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
            <div>
              <AnimatedHeading
                as="h2"
                className="font-display text-4xl sm:text-5xl lg:text-[44px] text-brown font-normal tracking-tight leading-[1.1] mb-2.5"
                subtitle="Have a project in mind? I'd love to hear about it and create a space that feels like you."
              >
                Let&apos;s Create Something Beautiful Together.
              </AnimatedHeading>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 pt-1">
              <Button
                href="mailto:pareekmuskan01@gmail.com"
                variant="primary"
                size="lg"
                icon="arrow"
                className="shadow-md justify-center"
              >
                Get in Touch
              </Button>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href="/Muskan-Pareek-Interior-Designer-Resume.pdf"
                  download="Muskan-Pareek-Interior-Designer-Resume.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-paper-card border border-stone/50 hover:border-brown text-brown text-[11px] font-mono font-medium transition-all shadow-2xs hover:shadow-xs"
                >
                  <span>Resume ↓</span>
                </a>
                <a
                  href="/Muskan-Pareek-Interior-Design-Portfolio.pdf"
                  download="Muskan-Pareek-Interior-Design-Portfolio.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-paper-card border border-stone/50 hover:border-brown text-brown text-[11px] font-mono font-medium transition-all shadow-2xs hover:shadow-xs"
                >
                  <span>Portfolio ↓</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Testimonial & Contact Links (cols 9-12) */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            
            {/* Riya Sharma Testimonial Card */}
            <div className="bg-paper-card p-4 rounded-2xl border border-stone/40 shadow-xs relative">
              <span className="text-sunflower font-serif text-2xl leading-none block mb-1">“</span>
              <p className="font-sans text-brown text-xs md:text-sm italic leading-relaxed mb-2.5">
                Muskan understood our lifestyle perfectly and transformed our house into a warm, functional and beautiful home. The attention to detail and the overall experience was exceptional.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-paper border border-stone/40 overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                    alt="Riya Sharma"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-display text-sm text-brown font-normal">
                    Riya Sharma
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-brown-soft">
                    Homeowner, Jaipur
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Information */}
            <div className="bg-paper-card/80 p-4 rounded-xl border border-stone/30 flex flex-col gap-2">
              <a
                href="mailto:pareekmuskan01@gmail.com"
                className="flex items-center gap-2 text-xs md:text-sm font-medium text-brown hover:text-charcoal transition-colors group"
              >
                <div className="group-hover:rotate-12 transition-transform duration-300">
                  <SunBadge size={16} />
                </div>
                <span>pareekmuskan01@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-brown-soft">
                <MapPin className="w-3.5 h-3.5 text-olive shrink-0" />
                <span>Bengaluru &amp; Jaipur, India</span>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-stone/20 text-brown-soft">
                <a
                  href="https://www.linkedin.com/in/muskan-pareek-78b19a224"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Muskan Pareek on LinkedIn"
                  className="hover:text-charcoal transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sunflower-deep" />
                </a>
              </div>
            </div>

            {/* Handwritten Note matching mockup */}
            <div className="text-right">
              <span className="font-handwriting text-2xl text-brown-soft">
                Good Spaces Brighter People ♡
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Integrated Minimal Brand Footer matching mockup */}
      <div className="border-t border-stone/30 py-3 px-6 md:px-12 lg:px-16 max-w-master mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-brown-soft">
        <div className="flex items-center gap-2">
          <span className="font-display text-sm text-brown font-normal">Muskan Pareek</span>
          <span className="text-[10px] uppercase font-mono tracking-widest text-brown-soft/80">INTERIOR DESIGNER</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] font-sans">
          <Link href="/#home" className="hover:text-charcoal">Home</Link>
          <Link href="/about" className="hover:text-charcoal">About</Link>
          <Link href="/projects" className="hover:text-charcoal">Projects</Link>
          <Link href="/services" className="hover:text-charcoal">Services</Link>
          <Link href="/resume" className="hover:text-charcoal">Resume</Link>
          <Link href="/process" className="hover:text-charcoal">Process</Link>
          <Link href="/contact" className="hover:text-charcoal">Contact</Link>
        </div>
        <div className="text-[11px] text-brown-soft/70">
          © 2026 Muskan Pareek. All rights reserved.
        </div>
      </div>
    </section>
  );
}
