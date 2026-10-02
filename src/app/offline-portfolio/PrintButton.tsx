"use client";

import React from "react";
import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-stone-300 bg-white hover:bg-stone-100 text-stone-700 text-xs font-medium tracking-wide shadow-sm transition-all cursor-pointer"
    >
      <Printer className="w-3.5 h-3.5 text-stone-500" />
      <span>Print / Save PDF</span>
    </button>
  );
}
