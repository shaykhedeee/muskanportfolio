"use client";

import React, { useState } from "react";
import { Sparkles, Mail, Copy, Check, ArrowRight, Home, Building2, Armchair, Layers, Compass } from "lucide-react";
import { sound } from "@/lib/sound";

export function ScopeProjectLauncher() {
  const [spaceType, setSpaceType] = useState<string>("3 BHK Apartment");
  const [projectFocus, setProjectFocus] = useState<string>("Full Turnkey Interiors");
  const [location, setLocation] = useState<string>("Bengaluru");
  const [copied, setCopied] = useState<boolean>(false);

  const spaces = [
    "3 BHK Apartment",
    "2 BHK Flat",
    "Luxury Villa",
    "Bespoke Modular Joinery",
    "Commercial Boutique / Cafe",
  ];

  const focuses = [
    "Full Turnkey Interiors",
    "Space Planning & 3D Renders",
    "Modular Kitchen & Wardrobes",
    "AutoCAD Working Drawings",
  ];

  const locations = ["Bengaluru", "Jaipur", "Remote Collaboration"];

  const handleCopyEmail = () => {
    sound.playTap();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("pareekmuskan01@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const mailtoSubject = encodeURIComponent(
    `Interior Design Inquiry — ${spaceType} (${location})`
  );
  const mailtoBody = encodeURIComponent(
    `Hi Muskan,\n\nI would love to discuss an interior design project with you:\n\n• Space Type: ${spaceType}\n• Primary Focus: ${projectFocus}\n• Location: ${location}\n\nLooking forward to hearing from you!\n\nBest regards,`
  );
  const mailtoUrl = `mailto:pareekmuskan01@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <div className="bg-paper-card p-6 md:p-8 rounded-3xl border border-stone/40 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone/30 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sunflower animate-pulse" />
            <span className="text-[10px] uppercase font-mono tracking-widest text-brown-soft font-bold">
              ONE-CLICK EMAIL DRAFTER · ZERO FORMS
            </span>
          </div>
          <h3 className="font-display text-2xl text-brown font-normal mt-1">
            Scope Your Space in 30 Seconds
          </h3>
        </div>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-paper border border-stone/40 text-brown hover:text-charcoal hover:border-brown transition-all text-xs font-mono font-medium shadow-2xs cursor-pointer self-start sm:self-auto"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-olive" />
              <span className="text-olive font-bold">Email Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-brown-soft" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>

      {/* Step 1: Space Type */}
      <div>
        <div className="text-[11px] font-mono uppercase tracking-wider text-brown-soft mb-2.5">
          1. Select Space Type:
        </div>
        <div className="flex flex-wrap gap-2">
          {spaces.map((s) => {
            const isSelected = spaceType === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setSpaceType(s);
                  sound.playTap();
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-brown text-paper shadow-xs font-semibold"
                    : "bg-paper border border-stone/40 text-brown-soft hover:text-brown hover:border-brown/40"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Project Focus */}
      <div>
        <div className="text-[11px] font-mono uppercase tracking-wider text-brown-soft mb-2.5">
          2. Primary Scope Focus:
        </div>
        <div className="flex flex-wrap gap-2">
          {focuses.map((f) => {
            const isSelected = projectFocus === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => {
                  setProjectFocus(f);
                  sound.playTap();
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-sunflower text-charcoal shadow-xs font-semibold"
                    : "bg-paper border border-stone/40 text-brown-soft hover:text-brown hover:border-brown/40"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 3: Location */}
      <div>
        <div className="text-[11px] font-mono uppercase tracking-wider text-brown-soft mb-2.5">
          3. Project Location:
        </div>
        <div className="flex flex-wrap gap-2">
          {locations.map((loc) => {
            const isSelected = location === loc;
            return (
              <button
                key={loc}
                type="button"
                onClick={() => {
                  setLocation(loc);
                  sound.playTap();
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-olive text-paper shadow-xs font-semibold"
                    : "bg-paper border border-stone/40 text-brown-soft hover:text-brown hover:border-brown/40"
                }`}
              >
                {loc}
              </button>
            );
          })}
        </div>
      </div>

      {/* Generated One-Click Email Launcher */}
      <div className="pt-2 border-t border-stone/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs font-sans text-brown-soft">
          Opens your mail client with pre-composed specs for <strong className="text-brown">{spaceType}</strong> in <strong className="text-brown">{location}</strong>.
        </div>

        <a
          href={mailtoUrl}
          onClick={() => sound.playChime()}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sunflower text-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-sunflower-deep transition-all shadow-md hover:shadow-lg w-full sm:w-auto text-center"
        >
          <Mail className="w-4 h-4" />
          <span>Launch Pre-filled Email →</span>
        </a>
      </div>
    </div>
  );
}
