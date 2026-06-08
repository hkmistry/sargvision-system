"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

interface GlowingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: string;
  hoverable?: boolean;
}

export function GlowingCard({
  children,
  className,
  glowColor = "rgba(6, 182, 212, 0.15)", // Default cyan glow
  hoverable = true,
  ...props
}: GlowingCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-2xl overflow-hidden glass-morphic transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
        hoverable && "hover:-translate-y-1.5 hover:shadow-3xl",
        className
      )}
      {...props}
    >
      {/* Micro-telemetry coordinates (Exploration / Discovery Layer) */}
      {isDark && (
        <div 
          className={cn(
            "absolute bottom-3 right-4 font-mono text-[7px] text-neutral-500 tracking-[0.25em] pointer-events-none transition-all duration-1000 ease-out select-none z-20",
            isHovered ? "opacity-35 translate-y-0" : "opacity-0 translate-y-1"
          )}
        >
          SYS.PRTCL // OPT.NODE_{Math.abs(Math.floor((coords.x + coords.y) / 10) % 99).toString().padStart(2, "0")}
        </div>
      )}

      {/* Cursor tracking blur spotlight backdrop */}
      {isDark && (
        <div
          className="absolute pointer-events-none transition-opacity duration-500 blur-3xl opacity-0"
          style={{
            width: "300px",
            height: "300px",
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
            left: `${coords.x - 150}px`,
            top: `${coords.y - 150}px`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}

      {/* Subtle hairline gradient border overlay */}
      {isDark && (
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-500 opacity-0"
          style={{
            border: "1px solid transparent",
            backgroundImage: `radial-gradient(circle 160px at ${coords.x}px ${coords.y}px, ${glowColor.replace("0.2", "0.45").replace("0.15", "0.35")}, rgba(255, 255, 255, 0.2) 30%, transparent 80%)`,
            backgroundClip: "border-box",
            WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}

      {/* Static color border outline frame - thick & always-visible coloured border */}
      {isDark && (
        <div 
          className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500" 
          style={{
            border: `2px solid ${glowColor.replace("0.2", "0.55").replace("0.15", "0.50").replace("0.12", "0.48").replace("0.1", "0.45")}`,
            boxShadow: `0 0 18px ${glowColor.replace("0.2", "0.20").replace("0.15", "0.16").replace("0.12", "0.14").replace("0.1", "0.12")}, inset 0 0 12px ${glowColor.replace("0.2", "0.06").replace("0.15", "0.04").replace("0.12", "0.04").replace("0.1", "0.03")}`,
            background: `linear-gradient(to bottom right, ${glowColor.replace("0.2", "0.06").replace("0.15", "0.04")}, transparent 55%)`,
          }}
        />
      )}

      {/* Specular sheen highlight overlay - adds expensive metallic reflection at the corner */}
      {isDark && (
        <div 
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500" 
          style={{
            border: "1px solid transparent",
            backgroundImage: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.12), transparent 45%)`,
            backgroundClip: "border-box",
            WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      )}

      {/* High-Fidelity content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
