import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PaperNote } from "@/components/ui/PaperNote";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-paper text-brown flex flex-col justify-between selection:bg-sunflower selection:text-brown">
      <Header />

      <div className="flex-1 flex items-center justify-center px-6 py-28 max-w-master mx-auto w-full">
        <div className="max-w-xl text-center flex flex-col items-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-paper-card border border-stone flex items-center justify-center mb-2 shadow-xs">
            <Compass className="w-8 h-8 text-sunflower-deep" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-brown-soft">
            ERROR 404 · PAGE NOT FOUND
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brown font-normal tracking-tight">
            This space hasn&apos;t been designed yet.
          </h1>

          <p className="font-sans text-brown-soft text-base md:text-lg leading-relaxed max-w-md">
            The page or project you are looking for may have been moved or does not exist. Let&apos;s guide you back to familiar spaces.
          </p>

          <div className="pt-2">
            <PaperNote rotate="right" hasTape={false} className="text-lg">
              Lost paths lead to new spaces ♡
            </PaperNote>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-sunflower text-charcoal font-semibold px-6 py-3 rounded-full text-xs hover:bg-sunflower-deep transition-all shadow-xs"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-paper-card text-brown border border-stone/50 px-6 py-3 rounded-full text-xs hover:bg-white hover:border-brown transition-all shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Explore Portfolio</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
