"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlowingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function GlowingCard({
  children,
  className,
  hoverable = true,
  ...props
}: GlowingCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden glass-morphic transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
        hoverable && "hover:-translate-y-1.5 hover:shadow-3xl",
        className
      )}
      {...props}
    >
      {/* High-Fidelity content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
