import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: "arrow" | "up-right" | "none";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon = "arrow",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 group cursor-pointer select-none";

  const sizeClasses = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
  };

  const variantClasses = {
    primary:
      "bg-sunflower text-charcoal font-semibold shadow-[0_2px_10px_rgba(255,201,40,0.3)] hover:bg-sunflower-deep hover:shadow-[0_4px_16px_rgba(255,201,40,0.45)] hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-paper-card text-brown border border-stone hover:border-brown-soft hover:bg-white hover:-translate-y-0.5 active:translate-y-0 shadow-sm",
    outline:
      "bg-transparent text-brown border border-brown/30 hover:border-brown hover:bg-brown/5",
    ghost:
      "bg-transparent text-brown hover:text-charcoal hover:bg-black/5",
  };

  const content = (
    <>
      <span>{children}</span>
      {icon === "arrow" && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {icon === "up-right" && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}
