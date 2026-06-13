"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export default function StrategicDirectiveSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const steps = [
    { name: "SahayakAI", role: "Deployable AI" },
    { name: "Human Capital Infrastructure", role: "Workforce Development" },
    { name: "Physical AI Lab", role: "Embodied Systems" },
    { name: "Strategic Verticals", role: "Sector Solutions" }
  ];

  return (
    <section 
      id="strategic-directive" 
      className="relative w-full py-12 md:py-16 z-10 select-none bg-transparent border-none"
    >
      <div className="w-full max-w-[95%] sm:max-w-[92%] lg:max-w-[90%] xl:max-w-[88%] mx-auto relative z-10">
        
        {/* Split Grid: Narrative Left, System Flow Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Narrative Bridge */}
          <div className="lg:col-span-7 space-y-6 text-left animate-premium-micro-life">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "font-mono text-[10px] tracking-[0.25em] font-bold uppercase block",
                  isDark ? "text-slate-500" : "text-slate-400"
                )}
              >
                THE SARGVISION INFRASTRUCTURE
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={cn(
                  "font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight antialiased",
                  isDark ? "text-white" : "text-[#0F172A]"
                )}
              >
                Four Systems. One Intelligence Infrastructure.
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={cn(
                  "font-inter text-sm md:text-base leading-relaxed max-w-2xl font-normal antialiased",
                  isDark ? "text-slate-400" : "text-[#475569]"
                )}
              >
                SARGVISION develops the sovereign intelligence infrastructure required for national-scale execution. By connecting deployable AI, human capital, physical systems, and strategic sectors, we build autonomous systems that act as strategic partners for industries and national interests.
              </motion.p>
            </div>

            {/* Faint Horizontal Divider and Sub-Narrative from legacy site */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-6 border-t border-slate-200 dark:border-slate-800/80 max-w-2xl"
            >
              <p className={cn(
                "font-mono text-[11.5px] tracking-wide leading-relaxed font-normal antialiased",
                isDark ? "text-slate-400/80" : "text-slate-500"
              )}>
                Bridging the gap between advanced AI research and real-world industrial applications.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Minimalist Pipeline Visualization */}
          <div className="lg:col-span-5 lg:flex lg:justify-center">
            <motion.div 
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative py-2 space-y-8 md:space-y-11 w-fit"
            >
              {/* Technical vertical timeline connector path running directly through circle centers */}
              <div className="absolute top-[12px] bottom-[12px] left-[12px] w-[1px] bg-slate-200 dark:bg-slate-800/80" />

              {steps.map((step, idx) => (
                <div key={idx} className="relative flex items-center gap-4 md:gap-5 group">
                  {/* Pipeline node bullet - centered exactly on the timeline line */}
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center border font-mono text-[10px] md:text-[11px] font-bold z-10 transition-all duration-300 shrink-0",
                    isDark 
                      ? "bg-[#050816] border-slate-800 text-slate-500 group-hover:border-slate-400 group-hover:text-white" 
                      : "bg-white border-slate-200 text-slate-400 group-hover:border-slate-500 group-hover:text-[#0F172A]"
                  )}>
                    {idx + 1}
                  </div>
                  
                  {/* Node labels (Stacked vertically for robustness and premium detail) */}
                  <div className="space-y-1">
                    <h4 className={cn(
                      "font-sans font-bold text-[14px] md:text-[16px] tracking-tight uppercase transition-colors leading-tight",
                      isDark ? "text-slate-200 group-hover:text-white" : "text-[#1E293B] group-hover:text-[#0F172A]"
                    )}>
                      {step.name}
                    </h4>
                    <p className={cn(
                      "font-mono text-[10px] md:text-[10.5px] tracking-wider uppercase font-medium leading-none",
                      isDark ? "text-slate-500 group-hover:text-slate-400" : "text-slate-500 group-hover:text-slate-700"
                    )}>
                      {step.role}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
