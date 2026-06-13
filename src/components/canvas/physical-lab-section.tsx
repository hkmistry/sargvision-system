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

  useEffect(() => {
    const handle = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  const steps = [
    {
      index: "01",
      tag: "INNOVATION_HUB",
      title: "Localized Innovation Hub",
      desc: "Deploying dedicated nodes in regions like North Bengal to support AgTech, tea plantation logistics, and cross-border trade infrastructure.",
      telemetry: "LOCATION: NORTH BENGAL // STATUS: ACTIVE"
    },
    {
      index: "02",
      tag: "LOCALIZED_DATA",
      title: "Hyper-Localized Data",
      desc: "Harnessing unique datasets designed specifically for India's environmental, agricultural, and cultural nuances to train custom models.",
      telemetry: "DATA_SET: EMBEDDED // SYNC_STATUS: OPTIMIZED"
    },
    {
      index: "03",
      tag: "HARDWARE_INTEGRATION",
      title: "Hardware Integration",
      desc: "Developing and deploying AI models that run directly on the Edge (drones, robotics, sensors) for secure, real-time autonomous decision-making.",
      telemetry: "EDGE_NODES: ACTIVE // LINK_INTEGRITY: 100%"
    }
  ];

  return (
    <section id="physical-lab" className={cn(
      "relative w-full py-16 md:py-32 z-10 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden animate-fade-in",
      isDark ? "bg-transparent" : "bg-transparent"
    )}>
      <div className="space-y-16">
        
        {/* Cinematic Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4"
        >
          <div className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md border",
            isDark
              ? "bg-white/5 border-white/10"
              : "bg-[#0F172A]/5 border-[#E2E8F0]"
          )}>
            <span className={cn(
              "text-[10px] font-bold uppercase tracking-widest font-mono",
              isDark ? "text-slate-400" : "text-slate-600"
            )}>
              Physical Intelligence Systems
            </span>
          </div>
          
          <h2 className={cn(
            "font-editorial font-semibold text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight max-w-none mx-auto whitespace-normal lg:whitespace-nowrap text-center",
            isDark ? "text-white" : "text-[#0F172A]"
          )}>
            Physical AI Lab
          </h2>
          
          <p className={cn(
            "font-normal text-sm md:text-base max-w-xl mx-auto leading-relaxed",
            isDark ? "text-slate-300" : "text-slate-600"
          )}>
            Orchestrating localized innovation hubs, custom datasets, and edge systems to deploy physical AI directly into agriculture, industries, and regional nodes.
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
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ 
                    duration: 0.85, 
                    ease: [0.16, 1, 0.3, 1], 
                    delay: idx * 0.12 
                  }}
                  className={cn(
                    "w-full rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between gap-4 relative overflow-hidden select-none group/step",
                    isDark
                      ? "bg-gradient-to-br from-[#0B1528]/45 to-[#030816]/75 border border-slate-800 hover:border-slate-700/80 hover:bg-[#0C1425]/70 hover:shadow-md"
                      : "bg-white border border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1] hover:bg-slate-50/50 hover:shadow-md"
                  )}
                >
                  <div className="flex flex-col justify-between flex-grow">
                    {/* Header Row: Index, Tag, & Arrow */}
                    <div className="flex justify-between items-start w-full">
                      <div className="flex items-center gap-3">
                        {/* Code Index */}
                        <div className={cn(
                          "font-mono text-xs font-bold px-2 py-0.5 rounded border transition-all duration-300",
                          isDark
                            ? "bg-slate-900 border-slate-800 text-slate-400 group-hover/step:text-blue-400 group-hover/step:border-blue-500/20 group-hover/step:bg-blue-950/10"
                            : "bg-slate-50 border-[#E2E8F0] text-[#64748B] group-hover/step:bg-slate-100 group-hover/step:text-[#0F172A]"
                        )}>
                          {step.index}
                        </div>
                        {/* Telemetry Tag */}
                        <div className={cn(
                          "font-mono text-[9px] tracking-widest font-bold uppercase transition-all duration-300",
                          isDark
                            ? "text-slate-400 group-hover/step:text-blue-400"
                            : "text-[#64748B]/70 group-hover/step:text-[#2563EB]"
                        )}>
                          {step.tag}
                        </div>
                      </div>

                      <ArrowRight className="w-3.5 h-3.5 text-neutral-500 transition-all duration-300 opacity-0 -translate-x-1 group-hover/step:opacity-80 group-hover/step:translate-x-0" />
                    </div>

                    {/* Title and Description Content */}
                    <div className="space-y-1.5 mt-2 z-10">
                      <div className={cn(
                        "text-lg md:text-xl font-editorial font-bold tracking-tight leading-tight transition-all duration-300",
                        isDark 
                          ? "text-neutral-200/90 group-hover/step:text-white"
                          : "text-[#0F172A]"
                      )}>
                        {step.title}
                      </div>
                      <div className={cn(
                        "text-xs md:text-sm font-normal leading-relaxed max-w-2xl transition-all duration-300",
                        isDark
                          ? "text-slate-400 group-hover/step:text-slate-300"
                          : "text-slate-600 group-hover/step:text-slate-900"
                      )}>
                        {step.desc}
                      </div>
                    </div>

                    {/* Bottom Inline Telemetry bar */}
                    <div className={cn(
                      "mt-3 pt-3 font-mono text-[8px] tracking-widest flex items-center justify-between transition-all duration-300 z-10 border-t",
                      isDark
                        ? "border-white/[0.08] text-slate-500 group-hover/step:text-slate-400"
                        : "border-slate-100 text-slate-500 group-hover/step:text-slate-700"
                    )}>
                      <div>{step.telemetry}</div>
                      <div className="flex items-center gap-1.5">
                        <div className={cn(
                          "w-1 h-1 rounded-full transition-all duration-300",
                          isDark ? "bg-blue-500/30 group-hover/step:bg-blue-400" : "bg-[#2563EB]/30 group-hover/step:bg-[#2563EB]"
                        )} />
                        <div className={cn(!isDark && "font-semibold")}>SYSTEM READY</div>
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
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="lg:col-span-5 relative w-full h-full min-h-[480px]"
          >
            {/* Viewport container wrapping image with anchored tactical corner labels */}
            <div className={cn(
              "relative w-full h-full rounded-3xl overflow-hidden transition-all duration-700 flex flex-col group min-h-[480px] h-full will-change-transform",
              isDark
                ? "border border-slate-800 bg-neutral-950/20 hover:border-slate-700"
                : "border border-[#E2E8F0] shadow-sm hover:shadow-md"
            )}>
              {isDark ? (
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B1228] to-[#040814] rounded-3xl border border-white/5 shadow-md z-0" />
              ) : (
                <div className="absolute inset-0 bg-slate-100 rounded-3xl z-0" />
              )}
              
              {/* Outer decorative scanning HUD border overlays */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl border border-white/5 z-20" />
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

              <div className="absolute top-4 right-4 bg-[#0a0f24]/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 font-mono text-[9px] tracking-widest text-neutral-400 uppercase shadow-lg">
                <span>FIELD NODE // NORTH BENGAL</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
