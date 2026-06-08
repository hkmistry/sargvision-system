"use client";

import React, { useState, useEffect } from "react";
import { Cpu, Layers, Activity, Database, Sparkles, Terminal, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export default function PhysicalLabSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isMounted, setIsMounted] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [systemLoad, setSystemLoad] = useState(68);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setIsMounted(true));
    
    // Simulate real-time hardware system load fluctuation
    const interval = setInterval(() => {
      setSystemLoad(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const next = prev + delta;
        return Math.max(60, Math.min(76, next));
      });
    }, 3000);

    return () => {
      cancelAnimationFrame(handle);
      clearInterval(interval);
    };
  }, []);

  const steps = [
    {
      index: "01",
      tag: "SENSOR_GRID_MESH",
      title: "Indic Edge Sensor Clusters",
      desc: "Direct ingestion from real-time spatial arrays, LiDAR modules, and acoustic wave filters distributed across dense, high-noise classrooms.",
      telemetry: "LATENCY: 0.24ms // LOAD: 64% // STATUS: OPTIMIZED"
    },
    {
      index: "02",
      tag: "INDIC_SILICON_FABRIC",
      title: "Sovereign Indic Silicon Core",
      desc: "Highly quantized 4nm FinFET chip architectures compiled natively to process Hindi, Tamil, Telugu, and Kannada models strictly at the edge.",
      telemetry: "THROUGHPUT: 180 TFLOPS // THERMAL: 38°C // STABLE"
    },
    {
      index: "03",
      tag: "SOVEREIGN_COMPUTE_CORRIDOR",
      title: "Air-Gapped Compute Deployment",
      desc: "Localized edge servers acting as completely offline, secure computational nodes delivering zero-latency last-mile cognitive tutoring.",
      telemetry: "LINK: SECURE // FAULT_INDEX: 0.00% // ONLINE"
    }
  ];

  return (
    <section id="physical-lab" className={cn(
      "relative w-full py-32 z-10 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden animate-fade-in",
      isDark ? "bg-transparent" : "bg-transparent"
    )}>
      <div className="space-y-16">
        
        {/* Cinematic Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4"
        >
          <div className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md border",
            isDark
              ? "bg-white/5 border-white/10"
              : "bg-[#0F172A]/5 border-[#E2E8F0]"
          )}>
            <Sparkles className={cn("w-3.5 h-3.5 animate-pulse", isDark ? "text-accent-cyan" : "text-[#2563EB]")} />
            <span className={cn(
              "text-[10px] font-bold uppercase tracking-widest font-mono",
              isDark ? "text-gray-300" : "text-[#0F172A]"
            )}>
              Sovereign Edge Deployment
            </span>
          </div>
          
          <h2 className={cn(
            "font-heading font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight max-w-none mx-auto whitespace-normal lg:whitespace-nowrap text-center",
            isDark ? "text-white" : "text-[#0F172A]"
          )}>
            Physical AI Lab
          </h2>
          
          <p className={cn(
            "font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed",
            isDark ? "text-gray-400" : "text-[#64748B]"
          )}>
            Direct orchestration of native hardware arrays, sensor networks, and customized Indic silicon kits built for the national compute grid.
          </p>
        </motion.div>

        {/* Dynamic Balanced Split Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT COLUMN: Horizontal Architecture Layer Stack (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            

            {/* Stacked Panels Mapping */}
            <div className="flex-grow flex flex-col gap-4">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.index}
                  initial={{ 
                    opacity: 0, 
                    y: 15
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ 
                    duration: 0.85, 
                    ease: [0.16, 1, 0.3, 1], 
                    delay: idx * 0.12 
                  }}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={cn(
                    "w-full rounded-2xl p-6 transition-all duration-500 cursor-pointer flex flex-col justify-between gap-4 relative overflow-hidden select-none group/step",
                    isDark
                      ? activeStep === idx
                        ? "border-2 border-cyan-400/75 bg-cyan-500/[0.06] shadow-[0_0_40px_rgba(6,182,212,0.24)] translate-x-1.5 backdrop-blur-2xl"
                        : "bg-gradient-to-br from-[#0B1528]/45 to-[#030816]/75 border-cyan-500/55 hover:border-cyan-400/75 shadow-[0_0_18px_rgba(6,182,212,0.14)] hover:shadow-[0_0_30px_rgba(6,182,212,0.22)] backdrop-blur-2xl"
                      : activeStep === idx
                        ? "bg-white border border-[#2563EB]/40 shadow-md translate-x-1.5"
                        : "bg-white border border-[#E2E8F0] shadow-sm hover:border-[#2563EB]/30 hover:shadow-md"
                  )}
                >
                  {/* Glowing background bloom on active item */}
                  {isDark && (
                    <div 
                      className={`absolute -right-10 -bottom-10 w-28 h-28 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none transition-opacity duration-500 ${
                        activeStep === idx ? "opacity-100" : "opacity-0"
                      }`} 
                    />
                  )}

                  <div className="flex flex-col justify-between flex-grow">
                    {/* Header Row: Index, Tag, & Arrow */}
                    <div className="flex justify-between items-start w-full">
                      <div className="flex items-center gap-3">
                        {/* Code Index */}
                        <div className={cn(
                          "font-mono text-xs font-bold px-2 py-0.5 rounded border transition-all duration-500",
                          isDark
                            ? activeStep === idx 
                              ? "bg-accent-cyan/20 border-accent-cyan/50 text-white shadow-[0_0_12px_rgba(6,182,212,0.2)]" 
                              : "bg-cyan-500/5 border-cyan-500/10 text-cyan-400/40 group-hover/step:text-cyan-400 group-hover/step:border-cyan-400/30 group-hover/step:bg-cyan-500/10"
                            : activeStep === idx
                              ? "bg-[#2563EB]/10 border-[#2563EB]/30 text-[#2563EB]"
                              : "bg-slate-50 border-[#E2E8F0] text-[#64748B] group-hover/step:bg-slate-100 group-hover/step:text-[#0F172A]"
                        )}>
                          {step.index}
                        </div>
                        {/* Telemetry Tag */}
                        <div className={cn(
                          "font-mono text-[9px] tracking-widest font-bold uppercase transition-all duration-500",
                          isDark
                            ? activeStep === idx ? "text-accent-cyan text-glow-cyan" : "text-neutral-400/70 group-hover/step:text-accent-cyan"
                            : activeStep === idx
                              ? "text-[#2563EB]"
                              : "text-[#64748B]/70 group-hover/step:text-[#2563EB]"
                        )}>
                          {step.tag}
                        </div>
                      </div>

                      <ArrowRight className={`w-3.5 h-3.5 text-neutral-500 transition-all duration-500 ${
                        activeStep === idx 
                          ? "text-accent-cyan translate-x-0.5" 
                          : "opacity-0 -translate-x-1 group-hover/step:opacity-50 group-hover/step:translate-x-0"
                      }`} />
                    </div>

                    {/* Title and Description Content */}
                    <div className="space-y-1.5 mt-2">
                      <div className={cn(
                        "text-base md:text-lg font-bold tracking-tight transition-all duration-500",
                        isDark 
                          ? activeStep === idx ? "text-white" : "text-neutral-200/90 group-hover/step:text-white"
                          : "text-[#0F172A]"
                      )}>
                        {step.title}
                      </div>
                      <div className={cn(
                        "text-xs md:text-sm font-light leading-relaxed max-w-2xl transition-all duration-500",
                        isDark
                          ? activeStep === idx ? "text-neutral-300" : "text-neutral-400/80 group-hover/step:text-neutral-300"
                          : "text-[#64748B]"
                      )}>
                        {step.desc}
                      </div>
                    </div>

                    {/* Bottom Inline Telemetry bar */}
                    <div className={cn(
                      "mt-3 pt-3 font-mono text-[8px] tracking-widest flex items-center justify-between transition-all duration-500",
                      isDark
                        ? "border-t border-white/[0.08]"
                        : "border-t border-slate-100",
                      isDark
                        ? activeStep === idx ? "text-cyan-400/80" : "text-neutral-500/70 group-hover/step:text-cyan-400/60"
                        : "text-[#06B6D4]"
                    )}>
                      <div>{step.telemetry}</div>
                      <div className="flex items-center gap-1.5">
                        <div className={cn(
                          "w-1 h-1 rounded-full transition-all duration-500",
                          activeStep === idx 
                            ? isDark ? "bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" : "bg-[#06B6D4] animate-pulse"
                            : isDark ? "bg-cyan-500/30 group-hover/step:bg-cyan-400" : "bg-[#06B6D4]/30 group-hover/step:bg-[#06B6D4]"
                        )} />
                        <div className={cn(!isDark && "font-semibold")}>{activeStep === idx ? "SELECTED" : "CALIBRATED"}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Premium Asset Image Frame (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="lg:col-span-5 relative w-full h-full min-h-[480px]"
          >
            {/* Viewport container wrapping image with anchored tactical corner labels */}
            <div className={cn(
              "relative w-full h-full rounded-2xl overflow-hidden transition-all duration-700 flex flex-col group min-h-[480px] h-full will-change-transform",
              isDark
                ? "border-2 border-cyan-500/65 bg-neutral-950/20 hover:border-cyan-400/85 shadow-[0_0_32px_rgba(6,182,212,0.20),inset_0_0_20px_rgba(6,182,212,0.04)] hover:shadow-[0_0_80px_rgba(6,182,212,0.28)]"
                : "border border-white/20 shadow-md"
            )}>
              
              {/* Outer decorative scanning HUD border overlays */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl border border-white/5 z-20" />
              <div className={cn("absolute inset-0 tech-grid-dots pointer-events-none", isDark ? "opacity-10" : "opacity-[0.04]")} />

              {/* Lab Asset Image background */}
              <div 
                className={cn(
                  "absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-[1.03] transition-transform duration-[2000ms] ease-out z-0 filter contrast-[1.05]",
                  isDark ? "brightness-[0.7]" : "brightness-[0.95]"
                )}
                style={{
                  backgroundImage: "url('/ai_lab_5.png')"
                }}
              />

              {/* Shadow gradient overlays for cinematic look */}
              <div className={cn(
                "absolute inset-0 z-10 pointer-events-none",
                isDark 
                  ? "bg-gradient-to-tr from-neutral-950 via-neutral-950/20 to-neutral-950/30" 
                  : "bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"
              )} />

              {/* Anchored Technical Corner Text Labels */}
              <div className="absolute top-4 left-4 z-20 select-none">
                <div className={cn(
                  "font-mono text-[8px] tracking-widest rounded px-2.5 py-1 backdrop-blur-md uppercase font-semibold",
                  isDark
                    ? "text-cyan-400 bg-neutral-950/80 border border-cyan-500/25 shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                    : "text-[#06B6D4] bg-white/90 border border-slate-100 shadow-sm"
                )}>
                  SYS.INFRA // SILICON_GRID_MATRIX
                </div>
              </div>

              <div className="absolute top-4 right-4 z-20 select-none">
                <div className={cn(
                  "font-mono text-[8px] tracking-widest rounded px-2.5 py-1 backdrop-blur-md uppercase font-semibold",
                  isDark
                    ? "text-cyan-400 bg-neutral-950/80 border border-cyan-500/25 shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                    : "text-[#06B6D4] bg-white/90 border border-slate-100 shadow-sm"
                )}>
                  LATENCY_LOOP: &lt;0.5ms
                </div>
              </div>

              <div className="absolute bottom-4 left-4 z-20 select-none">
                <div className={cn(
                  "font-mono text-[8px] tracking-widest rounded px-2.5 py-1 backdrop-blur-md uppercase font-semibold",
                  isDark
                    ? "text-cyan-400 bg-neutral-950/80 border border-cyan-500/25 shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                    : "text-[#06B6D4] bg-white/90 border border-slate-100 shadow-sm"
                )}>
                  MODULE_TYPE: EDGE_HARDWARE_NODE
                </div>
              </div>

              <div className="absolute bottom-4 right-4 z-20 select-none">
                <div className={cn(
                  "font-mono text-[8px] tracking-widest rounded px-2.5 py-1 backdrop-blur-md uppercase font-semibold flex items-center gap-1.5",
                  isDark
                    ? "text-emerald-400 bg-neutral-950/80 border border-emerald-500/25 shadow-[0_0_10px_rgba(52,211,153,0.15)]"
                    : "text-emerald-600 bg-white/90 border border-emerald-100 shadow-sm"
                )}>
                  <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  CALIBRATION: STABLE
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
