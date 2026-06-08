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
      name: "STRATEGIC SYSTEMS",
      tag: "SOVEREIGN_DEFENSE",
      telem: "LEO_TELEM // ONLINE",
      colorClass: "hover:bg-[#0c071d]/20",
      pulseColor: "bg-purple-400",
      defaultBorder: "rgba(168, 85, 247, 0.15)",
      activeBorder: "rgba(168, 85, 247, 0.40)",
      hoverBg: "rgba(168, 85, 247, 0.03)",
      glowColor: "rgba(168, 85, 247, 0.12)",
      numBorder: "border-purple-400/55",
      numDefaultBg: "bg-[#050816] text-purple-300 shadow-[0_0_8px_rgba(168,85,247,0.22)]",
      numActiveBorder: "border-[1.5px] border-purple-400",
      numActiveBg: "bg-purple-500/15 text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.45)] scale-[1.02]",
    },
    {
      num: "04",
      name: "COMPUTE FABRIC",
      tag: "NATIONAL_EDGE",
      telem: "180 TFLOPS // SECURE",
      colorClass: "hover:bg-[#060e1d]/20",
      pulseColor: "bg-cyan-400",
      defaultBorder: "rgba(6, 182, 212, 0.15)",
      activeBorder: "rgba(6, 182, 212, 0.40)",
      hoverBg: "rgba(6, 182, 212, 0.03)",
      glowColor: "rgba(6, 182, 212, 0.12)",
      numBorder: "border-cyan-400/55",
      numDefaultBg: "bg-[#050816] text-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.22)]",
      numActiveBorder: "border-[1.5px] border-cyan-400",
      numActiveBg: "bg-cyan-500/15 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.45)] scale-[1.02]",
    },
    {
      num: "03",
      name: "EDGE HARDWARE",
      tag: "OFFLINE_4nm_FABRIC",
      telem: "AIR-GAPPED // STABLE",
      colorClass: "hover:bg-[#0c071d]/20",
      pulseColor: "bg-purple-400",
      defaultBorder: "rgba(168, 85, 247, 0.15)",
      activeBorder: "rgba(168, 85, 247, 0.40)",
      hoverBg: "rgba(168, 85, 247, 0.03)",
      glowColor: "rgba(168, 85, 247, 0.12)",
      numBorder: "border-purple-400/55",
      numDefaultBg: "bg-[#050816] text-purple-300 shadow-[0_0_8px_rgba(168,85,247,0.22)]",
      numActiveBorder: "border-[1.5px] border-purple-400",
      numActiveBg: "bg-purple-500/15 text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.45)] scale-[1.02]",
    },
    {
      num: "02",
      name: "AGENTIC INTERFACE",
      tag: "PEDAGOGICAL_GRID",
      telem: "DIGITAL_TWIN // ONLINE",
      colorClass: "hover:bg-[#060e1d]/20",
      pulseColor: "bg-cyan-400",
      defaultBorder: "rgba(6, 182, 212, 0.15)",
      activeBorder: "rgba(6, 182, 212, 0.40)",
      hoverBg: "rgba(6, 182, 212, 0.03)",
      glowColor: "rgba(6, 182, 212, 0.12)",
      numBorder: "border-cyan-400/55",
      numDefaultBg: "bg-[#050816] text-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.22)]",
      numActiveBorder: "border-[1.5px] border-cyan-400",
      numActiveBg: "bg-cyan-500/15 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.45)] scale-[1.02]",
    },
    {
      num: "01",
      name: "LANGUAGE CORE",
      tag: "VERNACULAR_MESH",
      telem: "10 DIALECTS // ACTIVE",
      colorClass: "hover:bg-[#0c071d]/20",
      pulseColor: "bg-purple-400",
      defaultBorder: "rgba(168, 85, 247, 0.15)",
      activeBorder: "rgba(168, 85, 247, 0.40)",
      hoverBg: "rgba(168, 85, 247, 0.03)",
      glowColor: "rgba(168, 85, 247, 0.12)",
      numBorder: "border-purple-400/55",
      numDefaultBg: "bg-[#050816] text-purple-300 shadow-[0_0_8px_rgba(168,85,247,0.22)]",
      numActiveBorder: "border-[1.5px] border-purple-400",
      numActiveBg: "bg-purple-500/15 text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.45)] scale-[1.02]",
    },
  ];

  return (
    <section id="sovereign-stack" className="relative w-full py-28 z-10 px-4 md:px-8 bg-transparent select-none overflow-hidden animate-fade-in">
      
      {styleFragment}

      <div className="max-w-6xl mx-auto w-full relative">
        
        {/* UNIFIED INDUSTRIAL CHASSIS - Completely Transparent */}
        <div className={cn(
          "w-full rounded-3xl border-2 bg-transparent backdrop-blur-3xl p-8 md:p-12 relative overflow-hidden",
          isDark
            ? "border-cyan-500/35 shadow-[0_0_40px_rgba(6,182,212,0.12),inset_0_0_30px_rgba(6,182,212,0.02)]"
            : "border-[#2563EB]/20 bg-white/40 shadow-sm"
        )}>
          
          {/* Faint blueprint grid backdrop */}
          <div className="absolute inset-0 blueprint-grid opacity-[0.04] pointer-events-none" />
          <div className="absolute inset-0 tech-grid-dots opacity-[0.08] pointer-events-none" />

          {/* Micro-illuminated Corner Brackets aligned to borders */}
          <div className={cn("absolute top-[-2px] left-[-2px] w-6 h-6 border-t-2 border-l-2 rounded-tl pointer-events-none", isDark ? "border-cyan-400" : "border-[#2563EB]/40")} />
          <div className={cn("absolute top-[-2px] right-[-2px] w-6 h-6 border-t-2 border-r-2 rounded-tr pointer-events-none", isDark ? "border-cyan-400" : "border-[#2563EB]/40")} />
          <div className={cn("absolute bottom-[-2px] left-[-2px] w-6 h-6 border-b-2 border-l-2 rounded-bl pointer-events-none", isDark ? "border-cyan-400" : "border-[#2563EB]/40")} />
          <div className={cn("absolute bottom-[-2px] right-[-2px] w-6 h-6 border-b-2 border-r-2 rounded-br pointer-events-none", isDark ? "border-cyan-400" : "border-[#2563EB]/40")} />

          {/* Blueprint Construction Guides */}
          <div className="absolute bottom-12 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/[0.06] to-transparent pointer-events-none" />

          {/* Top Chassis Header Bar */}
          <div className={cn(
            "flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 mb-12 font-mono text-[9px] tracking-widest uppercase gap-3",
            isDark ? "border-b border-white/[0.06] text-neutral-500" : "border-b border-slate-200 text-[#64748B]"
          )}>
            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className={cn("font-bold", isDark ? "text-neutral-300" : "text-[#0F172A]")}>SARGVISION CENTRAL OPERATIONS GRID</span>
              <span className="px-2 py-0.5 rounded border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-[8px] animate-pulse">
                STEADY
              </span>
            </div>
            <div className={cn("flex items-center gap-4", isDark ? "text-neutral-400" : "text-[#64748B]")}>
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
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full text-center space-y-6 max-w-4xl relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/[0.02] rounded-full blur-[90px] pointer-events-none" />

              <span className={cn(
                "font-mono text-[9px] tracking-[0.3em] uppercase px-3 py-1 rounded border w-max mx-auto block font-medium relative z-10",
                isDark
                  ? "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.05)]"
                  : "text-[#06B6D4] bg-cyan-50 border-cyan-200"
              )}>
                Founding Doctrine
              </span>

              <h3 className={cn(
                "font-heading font-light text-2xl sm:text-3xl md:text-4xl lg:text-4xl tracking-tight leading-[1.3] max-w-3xl mx-auto text-center antialiased relative z-10",
                isDark ? "text-white" : "text-[#0F172A]"
              )}>
                "We are not just building software; we are architecting the{" "}
                <span className="relative inline-block font-bold">
                  {/* Subtle emphasis glow behind sovereign nervous system */}
                  <span className={cn("absolute -inset-1 blur-md rounded-md pointer-events-none z-0", isDark ? "bg-cyan-500/[0.08]" : "bg-cyan-500/10")} />
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 font-extrabold">
                    sovereign nervous system
                  </span>
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
              isDark ? "border-cyan-500/20" : "border-slate-200"
            )}>
              
              {/* Technical connector blueprint label */}
              <div className={cn(
                "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 font-mono text-[7px] uppercase tracking-[0.3em] border rounded-full select-none pointer-events-none",
                isDark
                  ? "bg-[#050816] border-cyan-500/20 text-cyan-400/50"
                  : "bg-[#F8FAFC] border-slate-200 text-[#06B6D4]"
              )}>
                SECURE_BUS_INTERFACE_CONNECT
              </div>
              
              {/* Blueprint Guideline Construction lines behind stack */}
              <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/[0.04] to-transparent pointer-events-none" />
              <div className="absolute -right-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/[0.04] to-transparent pointer-events-none" />

              {/* Faint background static radial depth layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-transparent to-purple-500 rounded-3xl blur-[120px] opacity-[0.04] pointer-events-none z-0" />

              <div className="flex items-center justify-center gap-2.5 mb-8 relative z-10">
                <Layers className={cn("w-4 h-4 animate-pulse", isDark ? "text-cyan-400" : "text-[#06B6D4]")} />
                <h4 className={cn(
                  "font-mono text-[10px] font-bold uppercase tracking-[0.25em]",
                  isDark ? "text-cyan-400" : "text-[#06B6D4]"
                )}>
                  Sovereign Architecture Stack
                </h4>
              </div>

              <div className="relative pl-12 md:pl-16 z-10 flex flex-col gap-6">
                
                {/* Precision Glowing Vertical Connector Trace Line (Bus) */}
                <div className={cn(
                  "absolute left-6 md:left-8 top-[32.5px] bottom-[42px] md:top-[38.5px] md:bottom-[49px] w-[2.5px] z-0",
                  isDark
                    ? "bg-gradient-to-b from-purple-500 via-cyan-400 to-cyan-500/50 opacity-80"
                    : "bg-[#CBD5E1]"
                )}>
                  {/* Subtle telemetry signal traveling upward from Language Core to Strategic Systems */}
                  <motion.div
                    className="absolute left-[-2px] w-[6.5px] h-[6.5px] rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,1)]"
                    animate={{
                      top: ["100%", "0%"],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                {layers.map((layer, idx) => {
                  const isHovered = hoveredIndex === idx;
                  return (
                    <div key={idx} className="relative w-full">
                      <motion.div
                        initial={{ opacity: 0.95, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.42 }}
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
                            ? `inset 0 1px 2px rgba(255,255,255,0.08), 0 0 15px ${layer.glowColor}, 0 8px 30px rgba(0,0,0,0.5)` 
                            : "inset 0 1px 1px rgba(255,255,255,0.03), 0 4px 20px rgba(0,0,0,0.4)"
                        } : undefined}
                      >
                        {/* Scanning Sweep Container with overflow-hidden */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-0">
                          {/* 14s Extremely subtle horizontal light sweep (Scan) */}
                          <motion.div
                            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-400/[0.025] to-transparent pointer-events-none"
                            animate={{
                              left: ["-100%", "200%"]
                            }}
                            transition={{
                              duration: 14,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        </div>

                        {/* Faint internal Blueprint Guide Lines (Density) */}
                        <div className="absolute inset-x-6 top-3 h-[1px] bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none" />
                        <div className="absolute inset-y-4 right-20 w-[1px] bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none" />

                        {/* Subsystem Micro telemetry tag (Density) */}
                        <div className="absolute right-24 top-2.5 text-[5px] font-mono text-white/[0.03] select-none tracking-[0.2em] uppercase pointer-events-none">
                          MODULE_ID: #SRG-{layer.num} // REG: SECURE_ZONE_{layer.num}
                        </div>

                        {/* Left aligned info */}
                        <div className="flex items-center gap-5 relative z-10">
                          <div className="flex flex-col items-center">
                            {/* Outstanding clean & thin border default with thicker glowing active hover state */}
                            <div className="relative">
                              {/* Horizontal bridge connecting the card's number box to the vertical bus - Centered exactly on y-axis of number box */}
                              <div className={cn(
                                "absolute left-[-44px] md:left-[-56px] top-1/2 -translate-y-1/2 right-auto w-[44px] md:w-[56px] h-[1.5px] transition-all duration-500 ease-out z-0 pointer-events-none",
                                isDark
                                  ? isHovered
                                    ? "bg-gradient-to-r from-cyan-400 to-cyan-400/20"
                                    : "bg-gradient-to-r from-cyan-500/30 to-white/[0.02]"
                                  : "bg-[#CBD5E1]"
                              )} />

                              {/* Staggered heartbeat pulsed junction dot centered exactly on the vertical bus and number box center y-axis */}
                              <motion.div 
                                className={`absolute left-[-50px] md:left-[-62px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-neutral-950 border-2 flex items-center justify-center z-10 pointer-events-none transition-all duration-300 ${
                                  isHovered 
                                    ? "border-cyan-300 scale-110 shadow-[0_0_8px_rgba(34,211,238,0.7)]" 
                                    : "border-cyan-400 scale-100 shadow-[0_0_6px_rgba(6,182,212,0.5)]"
                                }`}
                                animate={{
                                  scale: isHovered ? 1.10 : [1, 1.1, 1],
                                  opacity: isHovered ? 1 : [0.8, 1, 0.8]
                                }}
                                transition={{
                                  duration: 4,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: idx * 0.8
                                }}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                              </motion.div>

                              <div className={cn(
                                "font-mono text-[9px] font-bold px-2 py-1 border rounded shadow-sm transition-all duration-300",
                                isDark
                                  ? isHovered
                                    ? `${layer.numActiveBorder} ${layer.numActiveBg}`
                                    : `${layer.numBorder} ${layer.numDefaultBg}`
                                  : isHovered
                                    ? "bg-blue-50 border-blue-200 text-[#0F172A] scale-[1.02]"
                                    : "bg-slate-50 border-slate-200 text-[#0F172A]"
                              )}>
                                {layer.num}
                              </div>
                            </div>
                            <span className={cn(
                              "font-mono text-[5px] mt-1 tracking-widest select-none uppercase pointer-events-none",
                              isDark ? "text-neutral-600" : "text-[#64748B]"
                            )}>
                              L-{layer.num}_CAL
                            </span>
                          </div>
                          
                          <div className="space-y-0.5">
                            <div className={cn(
                              "text-sm md:text-base tracking-tight transition-colors duration-300",
                              isDark ? "font-bold text-white" : "font-semibold text-[#0F172A]"
                            )}>
                              {layer.name}
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={cn(
                                "font-mono text-[8px] tracking-widest uppercase font-semibold",
                                isDark ? "text-neutral-500" : "text-[#64748B]"
                              )}>
                                {layer.tag}
                              </span>
                              <span className={cn(
                                "font-mono text-[5px] select-none pointer-events-none",
                                isDark ? "text-neutral-600" : "text-[#64748B]/60"
                              )}>
                                // [SYS_BUS_NODE_1A]
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Right aligned status readout */}
                        <div className="text-right relative z-10 flex flex-col items-end justify-center">
                          {/* Slowly breathing opacity status text */}
                          <motion.div 
                            className={cn(
                              "font-mono text-[8px] md:text-[9px] font-bold tracking-widest uppercase transition-all duration-300",
                              isDark
                                ? isHovered 
                                  ? "text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" 
                                  : "text-cyan-400/80"
                                : "text-[#06B6D4]"
                            )}
                            animate={{
                              opacity: [0.65, 0.95, 0.65]
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            {layer.telem}
                          </motion.div>
                          
                          <div className={cn(
                            "flex items-center gap-1.5 mt-1 font-mono text-[7px]",
                            isDark ? "text-neutral-600" : "text-[#64748B]"
                          )}>
                            {/* Tiny micro pulse status LED dot */}
                            <motion.div 
                              className={cn(
                                "w-1 h-1 rounded-full shadow-[0_0_4px_currentColor]",
                                isDark ? layer.pulseColor : "bg-[#06B6D4]"
                              )}
                              animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.3, 0.8, 0.3]
                              }}
                              transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: idx * 0.5
                              }}
                            />
                            <span className="tracking-widest uppercase">L_STEADY_0{layer.num}</span>
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
              isDark ? "border-white/[0.06]" : "border-slate-200"
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
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
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
      background-image: linear-gradient(to right, rgba(6, 182, 212, 0.02) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(6, 182, 212, 0.02) 1px, transparent 1px);
    }
  `}</style>
);
