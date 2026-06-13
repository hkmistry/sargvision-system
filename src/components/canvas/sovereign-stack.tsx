"use client";

import React, { useEffect, useState } from "react";
import { Shield, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export default function SovereignStack() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [systemTime, setSystemTime] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setSystemTime(
        `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(
          d.getUTCDate()
        ).padStart(2, "0")}T${String(d.getUTCHours()).padStart(2, "0")}:${String(
          d.getUTCMinutes()
        ).padStart(2, "0")}:${String(d.getUTCSeconds()).padStart(2, "0")}Z`
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const layers = [
    {
      num: "05",
      name: "Strategic Systems",
      description: "Army • Space • Navy • Governance",
      tag: "STRATEGIC_NODES",
      telem: "SECURE OPERATIONS",
      colorClass: "hover:bg-[#0c0a24]/10",
      pulseColor: "bg-indigo-400",
      defaultBorder: "rgba(99, 102, 241, 0.12)",
      activeBorder: "rgba(99, 102, 241, 0.25)",
      hoverBg: "rgba(99, 102, 241, 0.02)",
      glowColor: "transparent",
      numBorder: "border-indigo-400/35",
      numDefaultBg: "bg-[#050816] text-indigo-300",
      numActiveBorder: "border border-indigo-400",
      numActiveBg: "bg-indigo-500/10 text-indigo-200",
    },
    {
      num: "04",
      name: "National Compute Fabric",
      description: "Edge Infrastructure • Sovereign Processing",
      tag: "COMPUTE_FABRIC",
      telem: "ACTIVE ENVELOPE",
      colorClass: "hover:bg-[#060e24]/10",
      pulseColor: "bg-blue-400",
      defaultBorder: "rgba(59, 130, 246, 0.12)",
      activeBorder: "rgba(59, 130, 246, 0.25)",
      hoverBg: "rgba(59, 130, 246, 0.02)",
      glowColor: "transparent",
      numBorder: "border-blue-400/35",
      numDefaultBg: "bg-[#050816] text-blue-300",
      numActiveBorder: "border border-blue-400",
      numActiveBg: "bg-blue-500/10 text-blue-200",
    },
    {
      num: "03",
      name: "Physical Intelligence Layer",
      description: "Sensors • Robotics • Hardware Systems",
      tag: "PHYSICAL_AI",
      telem: "AIR-GAPPED GRID",
      colorClass: "hover:bg-[#0c0a24]/10",
      pulseColor: "bg-indigo-400",
      defaultBorder: "rgba(99, 102, 241, 0.12)",
      activeBorder: "rgba(99, 102, 241, 0.25)",
      hoverBg: "rgba(99, 102, 241, 0.02)",
      glowColor: "transparent",
      numBorder: "border-indigo-400/35",
      numDefaultBg: "bg-[#050816] text-indigo-300",
      numActiveBorder: "border border-indigo-400",
      numActiveBg: "bg-indigo-500/10 text-indigo-200",
    },
    {
      num: "02",
      name: "Deployment Platforms",
      description: "Cognitive Systems • Workforce & Talent Infrastructure",
      tag: "USER_APPLICATIONS",
      telem: "VERIFIED NODES",
      colorClass: "hover:bg-[#060e24]/10",
      pulseColor: "bg-blue-400",
      defaultBorder: "rgba(59, 130, 246, 0.12)",
      activeBorder: "rgba(59, 130, 246, 0.25)",
      hoverBg: "rgba(59, 130, 246, 0.02)",
      glowColor: "transparent",
      numBorder: "border-blue-400/35",
      numDefaultBg: "bg-[#050816] text-blue-300",
      numActiveBorder: "border border-blue-400",
      numActiveBg: "bg-blue-500/10 text-blue-200",
    },
    {
      num: "01",
      name: "Foundational Intelligence Core",
      description: "Multilingual Models • Knowledge Systems",
      tag: "FOUNDATION_MODELS",
      telem: "LOCALIZED ENGINES",
      colorClass: "hover:bg-[#0c0a24]/10",
      pulseColor: "bg-indigo-400",
      defaultBorder: "rgba(99, 102, 241, 0.12)",
      activeBorder: "rgba(99, 102, 241, 0.25)",
      hoverBg: "rgba(99, 102, 241, 0.02)",
      glowColor: "transparent",
      numBorder: "border-indigo-400/35",
      numDefaultBg: "bg-[#050816] text-indigo-300",
      numActiveBorder: "border border-indigo-400",
      numActiveBg: "bg-indigo-500/10 text-indigo-200",
    },
  ];

  return (
    <section id="sovereign-stack" className="relative w-full py-16 md:py-28 z-10 px-4 md:px-8 bg-transparent select-none overflow-hidden animate-fade-in">
      
      {styleFragment}

      <div className="max-w-6xl mx-auto w-full relative">
        
        {/* UNIFIED INDUSTRIAL CHASSIS - Completely Transparent */}
        <div className={cn(
          "w-full rounded-3xl border bg-transparent backdrop-blur-3xl p-8 md:p-12 relative overflow-hidden",
          isDark
            ? "border-slate-800 shadow-lg"
            : "border-[#2563EB]/20 bg-white/40 shadow-sm"
        )}>
          
          {/* Faint blueprint grid backdrop */}
          <div className="absolute inset-0 blueprint-grid opacity-[0.04] pointer-events-none" />
          <div className="absolute inset-0 tech-grid-dots opacity-[0.08] pointer-events-none" />

          {/* Micro-illuminated Corner Brackets aligned to borders */}
          <div className={cn("absolute top-[-2px] left-[-2px] w-6 h-6 border-t-2 border-l-2 rounded-tl pointer-events-none", isDark ? "border-blue-500/20" : "border-slate-300")} />
          <div className={cn("absolute top-[-2px] right-[-2px] w-6 h-6 border-t-2 border-r-2 rounded-tr pointer-events-none", isDark ? "border-blue-500/20" : "border-slate-300")} />
          <div className={cn("absolute bottom-[-2px] left-[-2px] w-6 h-6 border-b-2 border-l-2 rounded-bl pointer-events-none", isDark ? "border-blue-500/20" : "border-slate-300")} />
          <div className={cn("absolute bottom-[-2px] right-[-2px] w-6 h-6 border-b-2 border-r-2 rounded-br pointer-events-none", isDark ? "border-blue-500/20" : "border-slate-300")} />

          {/* Blueprint Construction Guides */}
          <div className="absolute bottom-12 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-blue-500/[0.04] to-transparent pointer-events-none" />

          {/* Top Chassis Header Bar */}
          <div className={cn(
            "flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 mb-12 font-mono text-[9px] tracking-widest uppercase gap-3",
            isDark ? "border-b border-white/[0.06] text-neutral-500" : "border-b border-slate-200 text-[#64748B]"
          )}>
            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-blue-500/80" />
              <span className={cn("font-bold", isDark ? "text-neutral-300" : "text-[#0F172A]")}>SARGVISION CENTRAL OPERATIONS GRID</span>
              <span className={cn(
                "px-2 py-0.5 rounded border text-[8px] font-mono",
                isDark ? "border-slate-800 bg-white/5 text-slate-400" : "border-slate-300 bg-slate-50 text-slate-700"
              )}>
                STEADY
              </span>
            </div>
            <div className={cn("hidden sm:flex items-center gap-4", isDark ? "text-neutral-400" : "text-[#64748B]")}>
              <span>SYS_STAMP: <span className={cn("font-bold", isDark ? "text-white" : "text-[#0F172A]")}>{systemTime || "2026-05-30T13:16:00Z"}</span></span>
              <span className={isDark ? "text-neutral-600" : "text-slate-300"}>//</span>
              <span>LOC: <span className={cn("font-bold", isDark ? "text-white" : "text-[#0F172A]")}>BENGALURU_BHARAT</span></span>
            </div>
          </div>

          <div className="space-y-16 w-full flex flex-col items-center">
            
            {/* 1. FOUNDING DOCTRINE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full text-center space-y-6 max-w-4xl relative"
            >
              <span className={cn(
                "font-mono text-[9px] tracking-[0.3em] uppercase px-3 py-1 rounded border w-max mx-auto block font-medium relative z-10",
                isDark
                  ? "text-blue-400 bg-blue-500/5 border-blue-500/20"
                  : "text-[#0E7490] bg-cyan-50 border-cyan-200"
              )}>
                Founding Doctrine
              </span>

              <h3 className={cn(
                "font-editorial font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-snug max-w-3xl mx-auto text-center antialiased relative z-10",
                isDark ? "text-white" : "text-[#0F172A]"
              )}>
                "We are not just building software; we are architecting the{" "}
                <span className={cn(
                  "font-bold",
                  isDark ? "text-blue-400" : "text-[#2563EB]"
                )}>
                  sovereign nervous system
                </span>{" "}
                for a new era."
              </h3>

              <div className="flex flex-col items-center justify-center space-y-1 font-heading pt-4 relative z-10">
                <span className={cn("font-bold text-sm tracking-wider uppercase", isDark ? "text-white" : "text-[#334155]")}>Abhishek Gupta</span>
                <span className={cn("font-mono text-[9px] tracking-[0.25em] uppercase", isDark ? "text-neutral-500" : "text-[#334155]")}>CEO & Founder, SARGVISION</span>
              </div>
            </motion.div>

            {/* 2. SOVEREIGN ARCHITECTURE STACK */}
            <div className={cn(
              "w-full max-w-4xl space-y-6 pt-12 relative z-10 border-t",
              isDark ? "border-slate-800" : "border-slate-200"
            )}>
              
              {/* Technical connector blueprint label */}
              <div className={cn(
                "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 font-mono text-[7px] uppercase tracking-[0.3em] border rounded-full select-none pointer-events-none hidden sm:block",
                isDark
                  ? "bg-[#050816] border-slate-800 text-slate-500"
                  : "bg-[#F8FAFC] border-slate-200 text-[#0E7490]"
              )}>
                INFRASTRUCTURE ALIGNED
              </div>
              
              {/* Blueprint Guideline Construction lines behind stack */}
              <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent pointer-events-none" />
              <div className="absolute -right-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent pointer-events-none" />

              {/* Faint background static radial depth layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 rounded-3xl blur-[120px] opacity-[0.03] pointer-events-none z-0" />

              <div className="flex items-center justify-center gap-2.5 mb-8 relative z-10">
                <Layers className={cn("w-4 h-4", isDark ? "text-blue-400" : "text-[#0E7490]")} />
                <h4 className={cn(
                  "font-mono text-[10px] font-bold uppercase tracking-[0.25em]",
                  isDark ? "text-blue-400" : "text-[#0E7490]"
                )}>
                  Sovereign Architecture Stack
                </h4>
              </div>

              <div className="relative z-10 flex flex-col gap-6 w-full">

                {layers.map((layer, idx) => {
                  const isHovered = hoveredIndex === idx;
                  return (
                    <div key={idx} className="relative w-full">
                      <motion.div
                        initial={{ opacity: 0.95, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={cn(
                          "w-full rounded-2xl p-5 md:p-6 flex justify-between items-center relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                          isDark
                            ? layer.colorClass
                            : cn(
                                "bg-white border border-[#E2E8F0] shadow-sm",
                                isHovered ? "shadow-md hover:border-[#E2E8F0]/80" : ""
                              )
                        )}
                        style={isDark ? {
                          backdropFilter: "blur(6px)",
                          backgroundColor: isHovered ? layer.hoverBg : "rgba(255, 255, 255, 0.012)",
                          border: isHovered ? `1px solid ${layer.activeBorder}` : `1px solid ${layer.defaultBorder}`,
                          boxShadow: isHovered 
                            ? `inset 0 1px 2px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.2)` 
                            : "inset 0 1px 1px rgba(255,255,255,0.02), 0 2px 8px rgba(0,0,0,0.15)"
                        } : undefined}
                      >

                        {/* Faint internal Blueprint Guide Lines (Density) */}
                        <div className="absolute inset-x-6 top-3 h-[1px] bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none" />
                        <div className="absolute inset-y-4 right-20 w-[1px] bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none" />

                        {/* Left aligned info */}
                        <div className="flex items-center gap-5 relative z-10">
                          <div className={cn(
                            "font-mono text-[9px] font-bold px-2 py-1 border rounded shadow-sm transition-all duration-300 shrink-0 select-none",
                            isDark
                              ? isHovered
                                ? `${layer.numActiveBorder} ${layer.numActiveBg}`
                                : `${layer.numBorder} ${layer.numDefaultBg}`
                              : isHovered
                                ? "bg-blue-50 border-blue-200 text-[#0F172A]"
                                : "bg-slate-50 border-slate-200 text-[#0F172A]"
                          )}>
                            {layer.num}
                          </div>
                          
                          <div className="space-y-1">
                            <div className={cn(
                              "text-sm md:text-base font-semibold tracking-tight transition-colors duration-300",
                              isDark ? "text-white" : "text-[#0F172A]"
                            )}>
                              {layer.name}
                            </div>
                            <div className={cn(
                              "font-mono text-[8px] tracking-widest uppercase opacity-70 hidden sm:block",
                              isDark ? "text-neutral-400" : "text-[#475569]"
                            )}>
                              {layer.description}
                            </div>
                          </div>
                        </div>

                        {/* Right aligned status readout */}
                        <div className="text-right relative z-10 hidden sm:flex flex-col items-end justify-center">
                          <div className={cn(
                            "font-mono text-[8px] md:text-[9px] font-bold tracking-widest uppercase transition-all duration-300",
                            isDark ? "text-blue-400/80" : "text-[#0E7490]"
                          )}>
                            {layer.telem}
                          </div>
                          
                          <div className={cn(
                            "flex items-center gap-1.5 mt-1 font-mono text-[7px]",
                            isDark ? "text-neutral-500" : "text-[#64748B]"
                          )}>
                            <span className="w-1 h-1 rounded-full bg-emerald-500" />
                            <span className="tracking-widest uppercase">{layer.tag} // VERIFIED</span>
                          </div>
                        </div>

                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. FINAL OPERATIONAL STATE */}
            <div className={cn(
              "w-full max-w-4xl pt-8 mt-4 select-none z-10 relative border-t",
              isDark ? "border-slate-800/60" : "border-slate-200"
            )}>
              <div className={cn(
                "flex items-center justify-between font-mono text-[9px] md:text-[10px] tracking-[0.25em] font-bold uppercase w-full",
                isDark ? "text-neutral-400" : "text-[#64748B]"
              )}>
                <span>NATIONAL INTELLIGENCE FABRIC</span>
                <span className={cn(
                  "flex-grow border-b border-dashed mx-6 opacity-30",
                  isDark ? "border-white/10" : "border-slate-300"
                )} />
                <span className={cn("flex items-center gap-2", isDark ? "text-white" : "text-[#0F172A]")}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                  ACTIVE
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

// Tech dot overlay grid and custom blueprint patterns
const styleFragment = (
  <style>{`
    .tech-grid-dots {
      background-image: radial-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px);
      background-size: 20px 20px;
    }
    .dark .tech-grid-dots {
      background-image: radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    }
    .blueprint-grid {
      background-size: 40px 40px;
      background-image: linear-gradient(to right, rgba(37, 99, 235, 0.02) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(37, 99, 235, 0.02) 1px, transparent 1px);
    }
    .dark .blueprint-grid {
      background-image: linear-gradient(to right, rgba(59, 130, 246, 0.02) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(59, 130, 246, 0.02) 1px, transparent 1px);
    }
  `}</style>
);
