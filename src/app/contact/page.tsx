import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Mail, MapPin, Download, Linkedin, ArrowLeft, ArrowUpRight, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PaperNote } from "@/components/ui/PaperNote";
import { SunBadge } from "@/components/ui/SunBadge";
import { ScopeProjectLauncher } from "@/components/contact/ScopeProjectLauncher";

export const metadata: Metadata = {
  title: "Contact & Collaboration — Muskan Pareek | Interior Designer",
  description:
    "Get in touch with Muskan Pareek for residential interior design, modular joinery detailing, 3D visualization, and professional career opportunities in Bengaluru or remote.",
};

export default function ContactPage() {
  const collaborationFaqs = [
    {
      q: "What design services does Muskan provide?",
      a: "Complete residential interior design, space planning and furniture layouts, AutoCAD 2D working drawings, SketchUp 3D modelling, photorealistic rendering, System 32 modular joinery detailing (kitchens & wardrobes), and vendor coordination.",
    },
    {
      q: "What is her work preference and location?",
      a: "Based in Bengaluru, Karnataka, India. Available for Hybrid, Remote, and on-site Bengaluru interior design engagements, studio roles, and project collaborations.",
    },
    {
      q: "How can studios and clients review her technical deliverables?",
      a: "Download the high-resolution vector Resume PDF (235 KB) or the complete Architectural Portfolio Lookbook PDF (2.8 MB) using the direct links below, or inspect project case studies on this site.",
    },
  ];

  return (
    <main className="min-h-screen bg-paper text-brown selection:bg-sunflower selection:text-brown flex flex-col justify-between">
      <Header />

      <div className="flex-1">
        {/* Top Breadcrumb */}
        <div className="pt-28 pb-4 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
          <Link
            href="/#home"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brown-soft hover:text-charcoal transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Homepage</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-12 px-6 md:px-12 lg:px-16 max-w-master mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Bio & Direct Contacts */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <SunBadge size={28} />
                <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brown-soft">
                  GET IN TOUCH · NO FORMS REQUIRED
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-brown font-normal tracking-tight leading-[1.08]">
                Let&apos;s build thoughtful spaces together.
              </h1>

              <p className="font-sans text-brown-soft text-base md:text-lg leading-relaxed max-w-xl">
                I am always open to discussing residential interior projects, 3D visualization collaborations, design studio engagements, and meaningful career opportunities.
              </p>

              {/* Verified Contact Details Card */}
              <div className="p-6 bg-paper-card rounded-3xl border border-stone/40 shadow-sm space-y-4 max-w-xl">
                <div className="text-xs uppercase tracking-widest font-mono text-olive font-bold">
                  DIRECT CONTACT INFORMATION
                </div>

                <div className="space-y-3 pt-1">
                  <a
                    href="mailto:pareekmuskan1999@gmail.com"
                    className="flex items-center gap-3 text-base md:text-lg font-medium text-brown hover:text-charcoal transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-paper border border-stone/40 flex items-center justify-center text-sunflower-deep group-hover:bg-sunflower group-hover:text-charcoal transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono text-brown-soft">Primary Email</div>
                      <span className="group-hover:underline">pareekmuskan1999@gmail.com</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-sm text-brown">
                    <div className="w-10 h-10 rounded-full bg-paper border border-stone/40 flex items-center justify-center text-olive">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono text-brown-soft">Current Location</div>
                      <span>Bengaluru, Karnataka, India</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-brown">
                    <div className="w-10 h-10 rounded-full bg-paper border border-stone/40 flex items-center justify-center text-brown-soft">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono text-brown-soft">Work Preference</div>
                      <span>Hybrid · Remote · Bengaluru Studio</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Three Primary Professional Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl">
                <a
                  href="/Muskan-Pareek-Interior-Designer-Resume.pdf"
                  download="Muskan-Pareek-Interior-Designer-Resume.pdf"
                  className="bg-sunflower text-charcoal hover:bg-sunflower-deep p-4 rounded-2xl flex flex-col justify-between transition-all shadow-xs group font-semibold"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal/70">PDF RESUME</span>
                    <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  </div>
                  <div className="text-xs font-sans">
                    Download Resume ↓
                  </div>
                </a>

                <a
                  href="/Muskan-Pareek-Interior-Design-Portfolio.pdf"
                  download="Muskan-Pareek-Interior-Design-Portfolio.pdf"
                  className="bg-paper-card hover:bg-white border border-stone/50 p-4 rounded-2xl flex flex-col justify-between transition-all shadow-xs group text-brown"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brown-soft">PDF LOOKBOOK</span>
                    <Download className="w-4 h-4 text-brown-soft group-hover:translate-y-0.5 transition-transform" />
                  </div>
                  <div className="text-xs font-sans font-semibold">
                    Offline Portfolio ↓
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/muskan-pareek-78b19a224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-charcoal hover:bg-brown text-white p-4 rounded-2xl flex flex-col justify-between transition-all shadow-xs group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sunflower">LINKEDIN</span>
                    <Linkedin className="w-4 h-4 text-sunflower group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="text-xs font-sans font-semibold">
                    Connect on LinkedIn ↗
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Portrait & Studio Note */}
            <div className="lg:col-span-5 relative flex flex-col items-center">
              <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-t-[220px] rounded-b-3xl shadow-2xl border-4 border-paper-card bg-paper-card overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
                  alt="Muskan Pareek"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>

              <div className="absolute -bottom-4 -left-2 z-20">
                <PaperNote rotate="left" className="text-lg">
                  Let&apos;s Build Something Considered ♡
                </PaperNote>
              </div>
            </div>

          </div>
        </section>

        {/* Interactive Scope Your Space Project Launcher */}
        <section className="py-6 px-6 md:px-12 lg:px-16 max-w-master mx-auto mb-12">
          <ScopeProjectLauncher />
        </section>

        {/* FAQs for Employers & Clients */}
        <section className="py-16 px-6 md:px-12 lg:px-16 bg-paper-card border-t border-stone/40">
          <div className="max-w-master mx-auto">
            <div className="mb-10 border-b border-stone/30 pb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brown-soft block mb-1">
                COLLABORATION DETAILS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-brown font-normal">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {collaborationFaqs.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-paper rounded-3xl border border-stone/40 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase font-mono text-olive font-bold block mb-2">
                      FAQ 0{idx + 1}
                    </span>
                    <h3 className="font-display text-xl text-brown font-normal mb-3">
                      {item.q}
                    </h3>
                    <p className="text-xs font-sans text-brown-soft leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-stone/20 mt-4 flex items-center gap-1.5 text-[11px] font-mono text-brown-soft">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sunflower-deep" />
                    <span>Verified Professional Scope</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
