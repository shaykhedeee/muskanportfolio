import React from "react";
import { cn } from "@/lib/cn";

interface WavyDividerProps {
  color?: string;
  fill?: string;
  position?: "bottom" | "top";
  className?: string;
  invert?: boolean;
}

export function WavyDivider({
  fill = "#F7F2E8",
  position = "bottom",
  className,
  invert = false,
}: WavyDividerProps) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden leading-none z-10 pointer-events-none",
        position === "bottom" ? "relative bottom-0" : "relative top-0",
        invert && "rotate-180",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-8 md:h-12 lg:h-14 block"
      >
        <path
          d="M0 30C240 65 480 -5 720 30C960 65 1200 -5 1440 30V60H0V30Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
