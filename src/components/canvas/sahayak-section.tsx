"use client";

import React from "react";
import {
  Cpu,
  Database,
  Layers,
  Brain,
  Shield,
  Server,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

interface SahayakSectionProps {
  onOpenModal?: () => void;
}

const capabilityPillars = [
  {
    icon: Cpu,
    title: "Multilingual Voice Assistant",
    desc: "Natively processes voice commands and text in regional Indian languages to optimize classroom instruction and preparation."
  },
  {
    icon: Database,
    title: "Curriculum-Aligned Materials",
    desc: "Provides over 50,000+ resources mapped directly to NCERT and state board curricula."
  },
  {
    icon: Layers,
    title: "Lesson Plan Generator",
    desc: "Creates structured lesson plans, visual aids, and learning resources on demand to enhance teaching capacity."
  },
  {
    icon: Brain,
    title: "Worksheets & Assessments",
    desc: "Instantly generates localized classroom worksheets, practice quizzes, and grading keys."
  },
  {
    icon: Shield,
    title: "Offline Classroom Access",
    desc: "Caches all teaching materials so they work reliably without internet in rural classrooms."
  },
  {
    icon: Server,
    title: "School Administration Tools",
    desc: "Provides secure administrative profiles and network operations optimized for local school infrastructure."
  }
];

const flowSteps = [
  {
    id: 1,
    icon: Database,
    tag: "01 / INPUTS",
    title: "System Ingestion",
    sub: "NCERT & State Boards",
    colorTheme: {
      iconDark: "text-blue-400",
      iconLight: "text-blue-600",
      bgDark: "border-blue-500/20 bg-blue-500/5 group-hover/flow:border-blue-400/40 group-hover/flow:bg-blue-500/10",
      bgLight: "border-blue-100 bg-blue-50/30 group-hover/flow:border-blue-200 group-hover/flow:bg-blue-50/50",
      dotDark: "bg-blue-400",
      dotLight: "bg-blue-600"
    }
  },
  {
    id: 2,
    icon: Layers,
    tag: "02 / PROCESSING",
    title: "Systemic Processing",
    sub: "50,000+ Mappings",
    colorTheme: {
      iconDark: "text-indigo-400",
      iconLight: "text-indigo-600",
      bgDark: "border-indigo-500/20 bg-indigo-500/5 group-hover/flow:border-indigo-400/40 group-hover/flow:bg-indigo-500/10",
      bgLight: "border-indigo-100 bg-indigo-50/30 group-hover/flow:border-indigo-200 group-hover/flow:bg-indigo-50/50",
      dotDark: "bg-indigo-400",
      dotLight: "bg-indigo-600"
    }
  },
  {
    id: 3,
    icon: Brain,
    tag: "03 / ENGINE",
    title: "Cognitive Analysis",
    sub: "Multilingual Core",
    colorTheme: {
      iconDark: "text-cyan-400",
      iconLight: "text-cyan-600",
      bgDark: "border-cyan-500/20 bg-cyan-500/5 group-hover/flow:border-cyan-400/40 group-hover/flow:bg-cyan-500/10",
      bgLight: "border-cyan-100 bg-cyan-50/30 group-hover/flow:border-cyan-200 group-hover/flow:bg-cyan-50/50",
      dotDark: "bg-cyan-400",
      dotLight: "bg-cyan-600"
    }
  },
  {
    id: 4,
    icon: Sparkles,
    tag: "04 / CREATION",
    title: "Operational Compilation",
    sub: "Plans & Worksheets",
    colorTheme: {
      iconDark: "text-violet-400",
      iconLight: "text-violet-600",
      bgDark: "border-violet-500/20 bg-violet-500/5 group-hover/flow:border-violet-400/40 group-hover/flow:bg-violet-500/10",
      bgLight: "border-violet-100 bg-violet-50/30 group-hover/flow:border-violet-200 group-hover/flow:bg-violet-50/50",
      dotDark: "bg-violet-400",
      dotLight: "bg-violet-600"
    }
  },
  {
    id: 5,
    icon: Server,
    tag: "05 / DELIVERY",
    title: "Distributed Delivery",
    sub: "Offline Access Sync",
    colorTheme: {
      iconDark: "text-blue-400",
      iconLight: "text-blue-600",
      bgDark: "border-blue-500/20 bg-blue-500/5 group-hover/flow:border-blue-400/40 group-hover/flow:bg-blue-500/10",
      bgLight: "border-blue-100 bg-blue-50/30 group-hover/flow:border-blue-200 group-hover/flow:bg-blue-50/50",
      dotDark: "bg-blue-400",
      dotLight: "bg-blue-600"
    }
  },
  {
    id: 6,
    icon: Shield,
    tag: "06 / DEPLOYMENT",
    title: "Secure Node Deployment",
    sub: "Secure Institutions",
    colorTheme: {
      iconDark: "text-emerald-400",
      iconLight: "text-emerald-600",
      bgDark: "border-emerald-500/20 bg-emerald-500/5 group-hover/flow:border-emerald-400/40 group-hover/flow:bg-emerald-500/10",
      bgLight: "border-emerald-100 bg-emerald-50/30 group-hover/flow:border-emerald-200 group-hover/flow:bg-emerald-50/50",
      dotDark: "bg-emerald-400",
      dotLight: "bg-emerald-600"
    }
  }
];


export default function SahayakSection({ onOpenModal }: SahayakSectionProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="sahayak" className={cn(
      "relative w-full py-32 z-10 px-4 md:px-8 animate-fade-in select-none overflow-hidden",
      isDark ? "bg-transparent" : "bg-[#F8FAFD]"
    )}>

      {/* ═══════════════════════════════════════════
          SECTION HEADER
      ═══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0.9, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-5"
        >
          <div className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md",
            isDark
              ? "bg-white/[0.03] border-white/[0.08]"
              : "bg-[#0F172A]/5 border-[#E2E8F0]"
          )}>
            <span className={cn(
              "text-[10px] font-bold uppercase tracking-[0.2em] font-mono leading-none",
              isDark ? "text-slate-400" : "text-slate-600"
            )}>
              EDUCATION DEPLOYMENT PLATFORM
            </span>
          </div>

          <h2 className={cn(
            "font-editorial font-semibold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-4xl mx-auto text-center antialiased",
            isDark ? "text-white" : "text-[#0F172A]"
          )}>
            SahayakAI
          </h2>

          <p className={cn(
            "font-normal text-sm md:text-base max-w-3xl mx-auto leading-relaxed antialiased",
            isDark ? "text-slate-300" : "text-slate-600"
          )}>
            An AI-powered assistant built for India's K-12 educators. Operating offline with multilingual voice commands, SahayakAI simplifies lesson prep and teaching, while securely linking school capabilities to the national registry.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════
            6 CAPABILITY PILLARS GRID WITH NEURAL ROUTES
        ═══════════════════════════════════════════ */}
        <div className="relative w-full mt-8">
          {/* Subtle Neural Connection Pathways (Backdrop Connections) */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.02] select-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#4F46E5" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <path d="M 100 200 Q 300 150 500 250 T 900 100" fill="none" stroke="url(#pathGradient)" strokeWidth="1" strokeDasharray="4, 4" />
              <path d="M 50 450 Q 400 350 750 480 T 1100 380" fill="none" stroke="url(#pathGradient)" strokeWidth="1" strokeDasharray="3, 3" />
              <path d="M 200 650 Q 550 550 900 700" fill="none" stroke="url(#pathGradient)" strokeWidth="1" strokeDasharray="4, 4" />
            </svg>
          </div>

          {/* 6 Capability Cards Layout */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {capabilityPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "relative p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between min-h-[175px] group overflow-hidden",
                    isDark
                      ? "bg-[#090D1A]/60 border border-slate-800/80 hover:border-blue-500/25 hover:bg-[#0C1224]/80 shadow-md"
                      : "bg-white border border-[#E2E8F0] shadow-sm hover:border-blue-200/80 hover:bg-slate-50/50 hover:shadow-md"
                  )}
                >
                  {/* Nested Top-edge Highlight */}
                  {isDark && (
                    <div className="absolute inset-[1px] rounded-[15px] border-t border-white/[0.04] bg-gradient-to-b from-white/[0.02] to-transparent transition-all duration-500 pointer-events-none" />
                  )}

                  <div className="space-y-5 relative z-10">
                    <div className="flex items-center gap-4 text-left">
                      <div className={cn(
                        "p-3 rounded-xl transition-all duration-300 shrink-0",
                        isDark
                          ? "bg-white/[0.02] border border-white/[0.05] text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/30 group-hover:bg-blue-500/10"
                          : "bg-slate-50 border border-slate-200 text-slate-600 group-hover:text-blue-600 group-hover:border-blue-200 group-hover:bg-blue-50/40"
                      )}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className={cn(
                          "text-xl md:text-2xl font-editorial font-bold tracking-tight leading-tight transition-colors duration-300",
                          isDark 
                            ? "text-white group-hover:text-blue-400" 
                            : "text-[#0F172A] group-hover:text-blue-600"
                        )}>
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <p className={cn(
                      "text-[13px] md:text-sm font-normal leading-relaxed font-inter transition-colors duration-300 text-left",
                      isDark ? "text-slate-400 group-hover:text-slate-200" : "text-slate-600 group-hover:text-slate-900"
                    )}>
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            ARCHITECTURE VISUALIZATION SCHEMATIC (HORIZONTAL FLOW)
        ═══════════════════════════════════════════ */}
        <div className="space-y-6 pt-20 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-3 select-none"
          >
            <span className={cn(
              "font-mono text-xs tracking-[0.25em] uppercase font-bold",
              isDark ? "text-slate-400" : "text-slate-500"
            )}>
              // ORCHESTRATION PIPELINE
            </span>
            <h3 className={cn(
              "font-inter font-semibold text-2xl md:text-3xl tracking-tight",
              isDark ? "text-white" : "text-[#0F172A]"
            )}>
              Sovereign Data Pipeline & Orchestration Flow
            </h3>
          </motion.div>

          <div className="relative w-full overflow-x-auto pt-8 pb-12 px-2 lg:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="relative flex items-stretch justify-between z-10 mx-auto w-full min-w-[1000px] max-w-[1400px]">



              {flowSteps.map((step, index) => (
                <React.Fragment key={step.id}>
                  {/* Node Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      mass: 1,
                      delay: index * 0.15
                    }}
                    className={cn(
                      "p-4 lg:p-6 flex flex-col justify-between text-left min-h-[170px] lg:min-h-[190px] w-[150px] lg:w-[180px] shrink-0 relative overflow-hidden z-10 transition-all duration-350 group/flow rounded-2xl",
                      isDark
                        ? "bg-[#04060E]/90 border-2 border-slate-800/80 hover:border-slate-700/80 hover:bg-[#070B16]"
                        : "bg-white border-2 border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1] hover:bg-slate-50/30 hover:shadow-md"
                    )}
                  >
                    <div className="flex items-center justify-between relative z-10">
                      <span className={cn(
                        "font-mono uppercase font-bold text-[9px] tracking-wider",
                        isDark ? "text-slate-400" : "text-slate-500"
                      )}>
                        {step.tag}
                      </span>
                      <span className={cn(
                        "w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-all duration-300",
                        isDark
                          ? cn("bg-slate-700", step.colorTheme.dotDark)
                          : cn("bg-[#94A3B8]", step.colorTheme.dotLight)
                      )} />
                    </div>

                    <div className="relative z-10 mt-auto pt-6 flex flex-col items-center text-center">
                      <div className={cn(
                        "mb-4 p-3 rounded-full transition-all duration-300 group-hover/flow:scale-105",
                        isDark
                          ? cn("bg-white/[0.02] border border-white/[0.05]", step.colorTheme.bgDark)
                          : cn("bg-slate-50 border border-slate-200", step.colorTheme.bgLight)
                      )}>
                        <step.icon className={cn(
                          "w-7 h-7 lg:w-8 lg:h-8 transition-colors duration-300",
                          isDark
                            ? cn("text-slate-400", step.colorTheme.iconDark)
                            : cn("text-slate-600", step.colorTheme.iconLight)
                        )} />
                      </div>

                      <h4 className={cn(
                        "text-[11px] lg:text-[12px] uppercase font-mono font-bold tracking-wider transition-colors duration-300",
                        isDark ? "text-white" : "text-[#0F172A]"
                      )}>
                        {step.title}
                      </h4>

                      <p className={cn(
                        "text-[9px] lg:text-[10px] font-normal font-mono tracking-wider uppercase mt-1.5",
                        isDark ? "text-slate-400" : "text-slate-600"
                      )}>
                        {step.sub}
                      </p>
                    </div>
                  </motion.div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
