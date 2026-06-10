"use client";

import React, { useState } from "react";
import { SplineScene } from "@/components/ui/spline-scene";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

export default function ObservationChamber() {
  const { theme } = useTheme();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const isDark = theme === "dark";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className={cn(
        "relative w-full h-[550px] overflow-hidden rounded-3xl transition-all duration-700",
        isDark 
          ? "bg-[#020513]/40" 
          : "bg-[#0F172A] border border-[rgba(15,23,42,0.08)] shadow-[0_30px_80px_rgba(15,23,42,0.15)] ring-1 ring-white/10 ring-inset"
      )}
      style={{
        backdropFilter: isDark ? "blur(24px)" : undefined,
        WebkitBackdropFilter: isDark ? "blur(24px)" : undefined,
        boxShadow: isDark
          ? "0 20px 60px -10px rgba(0,0,0,0.5), inset 0 0 60px rgba(2,5,19,0.8)"
          : undefined
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        @keyframes scanAmbient {
          0% { transform: translateY(-100%) rotate(15deg); }
          100% { transform: translateY(250%) rotate(15deg); }
        }
        @keyframes chamberBreathe {
          0%, 100% { opacity: 0.06; transform: scale(0.98); }
          50% { opacity: 0.12; transform: scale(1.02); }
        }
        @keyframes particleFloat {
          0% { background-position: 0px 0px, 25px 25px; }
          100% { background-position: 0px -50px, 25px -25px; }
        }
        .digital-particles {
          background-image: 
            radial-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
            radial-gradient(rgba(99, 102, 241, 0.06) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: particleFloat 30s linear infinite;
        }
      `}</style>


      {/* Deep Navy/Black Background Gradients */}
      {isDark && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#020513]/95 via-[#03071A]/50 to-[#050A1F]/90 z-0 pointer-events-none" />
      )}



      {/* Faint Volumetric Energy Haze */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[80px]"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.01) 0%, rgba(59,130,246,0.005) 30%, transparent 70%)'
          }}
        />
      </div>

      {/* Slow Ambient Scan Shimmer Removed */}

      {/* Soft Corner Emitters (Very Subtle) */}
      <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-blue-500/5 to-transparent blur-[32px] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-blue-500/5 to-transparent blur-[32px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-indigo-500/5 to-transparent blur-[32px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-blue-500/5 to-transparent blur-[32px] pointer-events-none z-0" />

      {/* Edge border — dark mode only */}
      {isDark && (
        <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_1px_rgba(255,255,255,0.04)] pointer-events-none z-0" />
      )}

      {/* 3D Spline Containment Subject */}
      <div className="absolute inset-0 w-full h-full z-10 robot-interaction-zone">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
        {/* Central target core hotspot to trigger focus bracket tightening */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full z-20 pointer-events-auto robot-hotspot" />
      </div>



      {/* Interactive Cursor Light (Inner Volumetric Haze) */}
      <div
        className="absolute pointer-events-none transition-opacity duration-700 z-20"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, rgba(99,102,241,0.02) 40%, transparent 60%)",
          left: mousePos.x - 250,
          top: mousePos.y - 250,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Smart Energy Frame (Border) */}
      <div
        className="absolute inset-0 pointer-events-none rounded-3xl z-30"
        style={{
          padding: "1px", 
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      >
        {/* Static Low-Opacity Base Edge */}
        <div className="absolute inset-0 bg-white/[0.04]" />

        {/* Animated Energy Pulse Removed */}

        {/* Localized Glow Response on Border (Cursor Proximity) */}
        <div 
          className="absolute transition-opacity duration-300"
          style={{
            width: "350px",
            height: "350px",
            background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.04) 40%, transparent 70%)",
            left: mousePos.x - 175,
            top: mousePos.y - 175,
            opacity: isHovered ? 1 : 0,
          }}
        />
      </div>

    </div>
  );
}
