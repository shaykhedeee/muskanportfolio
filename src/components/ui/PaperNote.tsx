import React from "react";
import { cn } from "@/lib/cn";

interface PaperNoteProps {
  children: React.ReactNode;
  rotate?: "left" | "right" | "none";
  className?: string;
  hasTape?: boolean;
}

export function PaperNote({
  children,
  rotate = "left",
  className,
  hasTape = true,
}: PaperNoteProps) {
  const rotationClasses = {
    left: "-rotate-2 hover:-rotate-1",
    right: "rotate-2 hover:rotate-1",
    none: "rotate-0",
  };

  return (
    <div
      className={cn(
        "relative inline-block font-handwriting text-brown-soft transition-transform duration-300 animate-note-settle",
        hasTape && "paper-tape-note px-4 py-2 rounded-sm",
        rotationClasses[rotate],
        className
      )}
    >
      {children}
    </div>
  );
}
