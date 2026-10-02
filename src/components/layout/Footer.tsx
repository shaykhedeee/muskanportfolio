import React from "react";
import Link from "next/link";
import { Download, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-paper border-t border-stone/40 pt-12 sm:pt-16 pb-8 sm:pb-10 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-master mx-auto">
        
        {/* Top Editorial Call to Action (Section 4 of Spec) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-stone/30">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-brown-soft">
              LET&apos;S CONNECT
            </span>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brown font-normal tracking-tight">
              Let&apos;s build thoughtful spaces together.
            </h3>
            <p className="font-sans text-brown-soft text-sm md:text-base leading-relaxed max-w-xl">
              Explore my work, download my professional portfolio, or connect with me on LinkedIn for interior-design opportunities and collaborations.
            </p>

            {/* Direct Contact Metadata */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-2 text-xs font-sans text-brown-soft">
              <a
                href="mailto:pareekmuskan1999@gmail.com"
                className="flex items-center gap-1.5 hover:text-charcoal transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-sunflower-deep" />
                <span>pareekmuskan1999@gmail.com</span>
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-olive" />
                <span>Bengaluru, Karnataka, India</span>
              </span>
              <span className="text-stone-dark">·</span>
              <span>Hybrid · Remote · Bengaluru</span>
            </div>
          </div>

          {/* Three Primary Action Buttons */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <a
              href="/Muskan-Pareek-Interior-Designer-Resume.pdf"
              download="Muskan-Pareek-Interior-Designer-Resume.pdf"
              className="inline-flex items-center justify-between bg-sunflower text-charcoal font-semibold px-5 py-3 rounded-full text-xs hover:bg-sunflower-deep transition-all shadow-xs group"
            >
              <span>Download Resume ↓</span>
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="/Muskan-Pareek-Interior-Design-Portfolio.pdf"
              download="Muskan-Pareek-Interior-Design-Portfolio.pdf"
              className="inline-flex items-center justify-between bg-paper-card text-brown border border-stone/50 px-5 py-3 rounded-full text-xs hover:bg-white hover:border-brown transition-all shadow-xs group"
            >
              <span>Download Offline Portfolio ↓</span>
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://www.linkedin.com/in/muskan-pareek-78b19a224"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between bg-charcoal text-white px-5 py-3 rounded-full text-xs hover:bg-brown transition-all shadow-xs group"
            >
              <span>Connect on LinkedIn for Work ↗</span>
              <Linkedin className="w-4 h-4 text-sunflower" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Brand Monogram, Nav & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-brown-soft">
          <div className="flex items-center gap-3">
            <span className="font-display text-lg text-brown font-normal">
              Muskan Pareek
            </span>
            <span className="text-stone-dark">|</span>
            <span className="uppercase tracking-widest text-[10px] font-sans">
              Interior Designer
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-6 font-medium" aria-label="Footer Navigation">
            <Link href="/#home" className="hover:text-charcoal transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-charcoal transition-colors">
              About
            </Link>
            <Link href="/projects" className="hover:text-charcoal transition-colors">
              Projects
            </Link>
            <Link href="/resume" className="hover:text-charcoal transition-colors">
              Resume
            </Link>
            <Link href="/offline-portfolio" className="hover:text-charcoal transition-colors">
              Offline Deck
            </Link>
            <Link href="/process" className="hover:text-charcoal transition-colors">
              Process
            </Link>
            <Link href="/contact" className="hover:text-charcoal transition-colors">
              Contact
            </Link>
          </nav>

          <div className="text-stone-dark font-sans text-[11px]">
            © 2026 Muskan Pareek. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}

