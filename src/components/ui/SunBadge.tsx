import React from "react";
import { cn } from "@/lib/cn";

interface SunBadgeProps {
  className?: string;
  size?: number;
}

export function SunBadge({ className, size = 48 }: SunBadgeProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center animate-sun-rotate",
        className
      )}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-sunflower"
      >
        <circle cx="50" cy="50" r="14" fill="#FFC928" />
        {/* Radiating floral sunflower petals */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          return (
            <ellipse
              key={i}
              cx="50"
              cy="20"
              rx="4.5"
              ry="11"
              fill="#FFC928"
              transform={`rotate(${angle} 50 50)`}
              opacity="0.9"
            />
          );
        })}
        <circle cx="50" cy="50" r="8" fill="#4B342B" opacity="0.15" />
      </svg>
    </div>
  );
}
