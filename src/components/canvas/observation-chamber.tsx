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
          ? "0 20px 60px -10px rgba(0,0,0,0.5), inset 0 0 60px rgba(2,5,19,0.8), inset 0 0 20px rgba(6,182,212,0.05)" 
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
            radial-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
            radial-gradient(rgba(139, 92, 246, 0.12) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: particleFloat 25s linear infinite;
        }
      `}</style>


      {/* Deep Navy/Black Background Gradients */}
      {isDark && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#020513]/95 via-[#03071A]/50 to-[#050A1F]/90 z-0 pointer-events-none" />
      )}

      {/* Floating Digital Particles Overlay (Extremely Low Opacity) */}
      <div className="absolute inset-0 digital-particles opacity-20 z-0 pointer-events-none mix-blend-screen" />

      {/* Faint Volumetric Energy Haze */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[80px]"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.03) 30%, transparent 70%)',
            animation: 'chamberBreathe 12s ease-in-out infinite'
          }}
        />
      </div>

      {/* Slow Ambient Scan Shimmer (14-18s) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute -top-[50%] left-0 w-[200%] h-[150px] bg-gradient-to-b from-transparent via-accent-cyan/5 to-transparent blur-[50px]"
          style={{ animation: 'scanAmbient 16s linear infinite' }}
        />
      </div>

      {/* Soft Corner Emitters (8-12s Breathing Pulse) */}
      <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-accent-cyan/10 to-transparent blur-[24px] animate-pulse pointer-events-none z-0" style={{ animationDuration: '8.5s' }} />
      <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-accent-blue/10 to-transparent blur-[24px] animate-pulse pointer-events-none z-0" style={{ animationDuration: '10.5s' }} />
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-accent-purple/8 to-transparent blur-[24px] animate-pulse pointer-events-none z-0" style={{ animationDuration: '11s' }} />
      <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-accent-cyan/10 to-transparent blur-[24px] animate-pulse pointer-events-none z-0" style={{ animationDuration: '9.5s' }} />

      {/* Edge Illumination (Inner Shadows) */}
      <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_20px_rgba(59,130,246,0.03)] pointer-events-none z-0" />

      {/* 3D Spline Containment Subject (Unchanged) */}
      <div className="absolute inset-0 w-full h-full z-10 filter contrast-125 saturate-110 robot-interaction-zone">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
        {/* Central target core hotspot to trigger focus bracket tightening */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full z-20 pointer-events-auto robot-hotspot" />
      </div>

      {/* Restrained Sovereign Intelligence Overlays */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-20 pointer-events-none select-none">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
            <span className="font-mono text-[9px] tracking-[0.25em] text-accent-cyan uppercase bg-[#020513]/80 backdrop-blur-md px-3 py-1.5 rounded border border-accent-cyan/20 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              Containment Array // Secured
            </span>
          </div>
          <div className="font-mono text-[8px] tracking-[0.3em] text-accent-blue/50 text-right">
            <div>NODE: ALPHA-7</div>
            <div>TEMP: 32.4°C</div>
          </div>
        </div>
        
        <div className="flex justify-between items-end font-mono text-[9px] tracking-widest text-neutral-500 uppercase">
          <div className="flex flex-col gap-1">
            <span className="text-accent-purple/70">INTELLIGENCE_KERNEL_ACTIVE</span>
            <span className="opacity-50">SARG_CORE_MATRIX_V2.0</span>
          </div>
          <span className="bg-[#020513]/60 px-2 py-1 rounded border border-white/5 backdrop-blur-md">
            Focus: Auto
          </span>
        </div>
      </div>

      {/* Interactive Cursor Light (Inner Volumetric Haze) */}
      <div
        className="absolute pointer-events-none transition-opacity duration-700 z-20"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, rgba(139,92,246,0.03) 40%, transparent 60%)",
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

        {/* The Elegant Animated Energy Pulse (9s Travel) */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square"
          style={{
            background: 'conic-gradient(from 0deg, transparent 65%, rgba(139,92,246,0.3) 80%, rgba(59,130,246,0.6) 90%, rgba(6,182,212,0.8) 98%, transparent 100%)',
            animation: 'spin 9s linear infinite'
          }}
        />

        {/* Localized Glow Response on Border (Cursor Proximity) */}
        <div 
          className="absolute transition-opacity duration-300"
          style={{
            width: "350px",
            height: "350px",
            background: "radial-gradient(circle, rgba(6,182,212,0.5) 0%, rgba(59,130,246,0.3) 40%, transparent 70%)",
            left: mousePos.x - 175,
            top: mousePos.y - 175,
            opacity: isHovered ? 1 : 0,
          }}
        />
      </div>

    </div>
  );
}
