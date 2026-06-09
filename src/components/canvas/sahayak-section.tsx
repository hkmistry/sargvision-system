"use client";

import React, { useState } from "react";
import { 
  Cpu, 
  Database, 
  Layers, 
  Brain, 
  Shield, 
  Server, 
  Sparkles, 
  ArrowRight
} from "lucide-react";
import { GlowingCard } from "@/components/ui/glowing-card";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

interface SahayakSectionProps {
  onOpenModal?: () => void;
}

const flowSteps = [
  { 
    id: 1, icon: Database, tag: "01 / INPUTS", title: "BOARD CURRICULA", sub: "NCERT & STATE BOARDS",
    border: "border-emerald-500/50", shadow: "shadow-[0_0_20px_rgba(16,185,129,0.15)]", text: "text-emerald-400", dot: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]",
    lightText: "text-emerald-600", lightBg: "bg-emerald-50", lightBorder: "border-emerald-200", lightDot: "bg-emerald-500",
    lightCardBorder: "border-emerald-200/80", lightCardShadow: "shadow-[0_8px_24px_rgba(16,185,129,0.10)]", lightHoverShadow: "hover:shadow-[0_16px_40px_rgba(16,185,129,0.15)]",
    lightBounceBorder: "border-emerald-300", lightBounceShadow: "shadow-[0_12px_32px_rgba(16,185,129,0.18)]"
  },
  { 
    id: 2, icon: Layers, tag: "02 / GRAPH", title: "CURRICULUM GRAPH", sub: "50,000+ MAPPINGS",
    border: "border-blue-500/50", shadow: "shadow-[0_0_20px_rgba(59,130,246,0.15)]", text: "text-blue-400", dot: "bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]",
    lightText: "text-blue-600", lightBg: "bg-blue-50", lightBorder: "border-blue-200", lightDot: "bg-blue-500",
    lightCardBorder: "border-blue-200/80", lightCardShadow: "shadow-[0_8px_24px_rgba(59,130,246,0.10)]", lightHoverShadow: "hover:shadow-[0_16px_40px_rgba(59,130,246,0.15)]",
    lightBounceBorder: "border-blue-300", lightBounceShadow: "shadow-[0_12px_32px_rgba(59,130,246,0.18)]"
  },
  { 
    id: 3, icon: Brain, tag: "03 / ENGINE", title: "SAHAYAKAI CORE", sub: "11 NATIVE LANGUAGES",
    border: "border-cyan-400/80", shadow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]", text: "text-cyan-400", dot: "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]", isCore: true,
    lightText: "text-cyan-600", lightBg: "bg-cyan-50", lightBorder: "border-cyan-200", lightDot: "bg-cyan-500",
    lightCardBorder: "border-cyan-300/70", lightCardShadow: "shadow-[0_8px_28px_rgba(6,182,212,0.14)]", lightHoverShadow: "hover:shadow-[0_16px_44px_rgba(6,182,212,0.20)]",
    lightBounceBorder: "border-cyan-400", lightBounceShadow: "shadow-[0_12px_36px_rgba(6,182,212,0.22)]"
  },
  { 
    id: 4, icon: Sparkles, tag: "04 / WORKFLOWS", title: "PEDAGOGY CREATOR", sub: "PLANS & WORKSHEETS",
    border: "border-indigo-500/50", shadow: "shadow-[0_0_20px_rgba(99,102,241,0.15)]", text: "text-indigo-400", dot: "bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)]",
    lightText: "text-indigo-600", lightBg: "bg-indigo-50", lightBorder: "border-indigo-200", lightDot: "bg-indigo-500",
    lightCardBorder: "border-indigo-200/80", lightCardShadow: "shadow-[0_8px_24px_rgba(99,102,241,0.10)]", lightHoverShadow: "hover:shadow-[0_16px_40px_rgba(99,102,241,0.15)]",
    lightBounceBorder: "border-indigo-300", lightBounceShadow: "shadow-[0_12px_32px_rgba(99,102,241,0.18)]"
  },
  { 
    id: 5, icon: Server, tag: "05 / EDGE", title: "OFFLINE CACHING", sub: "PWA LOCAL SYNC",
    border: "border-fuchsia-500/50", shadow: "shadow-[0_0_20px_rgba(217,70,239,0.15)]", text: "text-fuchsia-400", dot: "bg-fuchsia-400 shadow-[0_0_10px_rgba(232,121,249,0.8)]",
    lightText: "text-violet-600", lightBg: "bg-violet-50", lightBorder: "border-violet-200", lightDot: "bg-violet-500",
    lightCardBorder: "border-violet-200/80", lightCardShadow: "shadow-[0_8px_24px_rgba(139,92,246,0.10)]", lightHoverShadow: "hover:shadow-[0_16px_40px_rgba(139,92,246,0.15)]",
    lightBounceBorder: "border-violet-300", lightBounceShadow: "shadow-[0_12px_32px_rgba(139,92,246,0.18)]"
  },
  { 
    id: 6, icon: Shield, tag: "06 / OUTPUT", title: "SCHOOL DEPLOYMENT", sub: "SECURE INSTITUTIONS",
    border: "border-teal-500/50", shadow: "shadow-[0_0_20px_rgba(20,184,166,0.15)]", text: "text-teal-400", dot: "bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]",
    lightText: "text-teal-600", lightBg: "bg-teal-50", lightBorder: "border-teal-200", lightDot: "bg-teal-500",
    lightCardBorder: "border-teal-200/80", lightCardShadow: "shadow-[0_8px_24px_rgba(20,184,166,0.10)]", lightHoverShadow: "hover:shadow-[0_16px_40px_rgba(20,184,166,0.15)]",
    lightBounceBorder: "border-teal-300", lightBounceShadow: "shadow-[0_12px_32px_rgba(20,184,166,0.18)]"
  }
];

export default function SahayakSection({ onOpenModal }: SahayakSectionProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

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
          initial={{ opacity: 0.9, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-5"
        >
          <div className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md",
            isDark 
              ? "bg-white/[0.03] border-white/[0.08]" 
              : "bg-[#0F172A]/5 border-[#E2E8F0]"
          )}>
            <span className={cn(
              "w-1.5 h-1.5 rounded-full",
              isDark 
                ? "bg-cyan-500 shadow-[0_0_4px_rgba(6,182,212,0.5)]" 
                : "bg-[#2563EB]"
            )} />
            <span className={cn(
              "text-[10px] font-bold uppercase tracking-[0.2em] font-mono leading-none",
              isDark ? "text-white/50" : "text-[#0F172A]/70"
            )}>
              AI TEACHING OPERATING SYSTEM
            </span>
          </div>
          
          <h2 className={cn(
            "font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-wider leading-tight max-w-4xl mx-auto text-center antialiased uppercase",
            isDark ? "text-white" : "text-[#0F172A]"
          )}>
            SahayakAI
          </h2>
          
          <p className={cn(
            "font-light text-sm md:text-base max-w-3xl mx-auto leading-relaxed antialiased",
            isDark ? "text-white/40" : "text-[#64748B]"
          )}>
            The AI-powered teaching assistant built for India's 1.01 crore K-12 educators. Reducing lesson preparation time by 90% through voice-first multilingual engines and offline-first classroom delivery.
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
            
            {/* Card 1: Multilingual Voice Core */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ 
                opacity: { duration: 1.0 },
                y: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedCard(0)}
              className={cn(
                "relative p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between min-h-[175px] group overflow-hidden cursor-pointer",
                isDark
                  ? "bg-gradient-to-br from-[#0a0f24]/50 to-[#030612]/75 border-[3px] border-blue-500/40 hover:border-blue-400/90 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(59,130,246,0.3),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
                  : selectedCard === 0
                    ? "bg-white border border-[rgba(80,120,255,0.2)] shadow-[0_10px_30px_rgba(15,23,42,0.08),0_0_0_1px_rgba(80,120,255,0.12)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                    : "bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)] hover:-translate-y-1"
              )}
            >
              {/* Nested Chassis Double-Border & Top-edge Highlight */}
              {isDark && (
                <div className="absolute inset-[1px] rounded-[15px] border border-white/[0.02] bg-gradient-to-b from-white/[0.06] to-transparent group-hover:from-blue-400/[0.12] transition-all duration-500 pointer-events-none" />
              )}
              
              <div className="space-y-5 relative z-10">
                <div className="flex items-center gap-4 text-left">
                  <div className={cn(
                    "p-3 rounded-xl transition-all duration-500 shrink-0",
                    isDark 
                      ? "bg-white/[0.03] border border-white/[0.08] text-white/40 group-hover:text-blue-400 group-hover:border-blue-400/30 group-hover:bg-blue-950/20 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.15)]" 
                      : "bg-[#06B6D4]/5 border border-[#06B6D4]/10 text-[#06B6D4]"
                  )}>
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className={cn(
                      "text-base font-bold tracking-wide leading-none transition-colors duration-300",
                      isDark ? "text-white group-hover:text-blue-400" : "text-[#0F172A] group-hover:text-[#2563EB]"
                    )}>
                      Multilingual Voice Core
                    </h3>
                  </div>
                </div>
                
                <p className={cn(
                  "text-sm font-light leading-relaxed font-sans transition-colors duration-350 text-left",
                  isDark ? "text-white/50 group-hover:text-white/70" : "text-[#64748B] group-hover:text-[#0F172A]"
                )}>
                  Natively processes voice inputs and outputs in 11 regional Indian languages.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Curriculum Mapping */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ 
                opacity: { duration: 1.0, delay: 0.1 },
                y: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }
              }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedCard(1)}
              className={cn(
                "relative p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between min-h-[175px] group overflow-hidden cursor-pointer",
                isDark
                  ? "bg-gradient-to-br from-[#0a0f24]/50 to-[#030612]/75 border-[3px] border-indigo-500/40 hover:border-indigo-400/90 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(99,102,241,0.3),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
                  : selectedCard === 1
                    ? "bg-white border border-[rgba(80,120,255,0.2)] shadow-[0_10px_30px_rgba(15,23,42,0.08),0_0_0_1px_rgba(80,120,255,0.12)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                    : "bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)] hover:-translate-y-1"
              )}
            >
              {/* Nested Chassis Double-Border & Top-edge Highlight */}
              {isDark && (
                <div className="absolute inset-[1px] rounded-[15px] border border-white/[0.02] bg-gradient-to-b from-white/[0.06] to-transparent group-hover:from-indigo-400/[0.12] transition-all duration-500 pointer-events-none" />
              )}
              
              <div className="space-y-5 relative z-10">
                <div className="flex items-center gap-4 text-left">
                  <div className={cn(
                    "p-3 rounded-xl transition-all duration-500 shrink-0",
                    isDark 
                      ? "bg-white/[0.03] border border-white/[0.08] text-white/40 group-hover:text-indigo-400 group-hover:border-indigo-400/30 group-hover:bg-indigo-950/20 group-hover:shadow-[0_0_12px_rgba(99,102,241,0.15)]" 
                      : "bg-[#06B6D4]/5 border border-[#06B6D4]/10 text-[#06B6D4]"
                  )}>
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className={cn(
                      "text-base font-bold tracking-wide leading-none transition-colors duration-300",
                      isDark ? "text-white group-hover:text-indigo-400" : "text-[#0F172A] group-hover:text-[#2563EB]"
                    )}>
                      Curriculum Mapping
                    </h3>
                  </div>
                </div>
                
                <p className={cn(
                  "text-sm font-light leading-relaxed font-sans transition-colors duration-350 text-left",
                  isDark ? "text-white/50 group-hover:text-white/70" : "text-[#64748B] group-hover:text-[#0F172A]"
                )}>
                  Over 50,000+ mappings aligned natively with NCERT and state board curricula.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Pedagogical Lesson Planner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ 
                opacity: { duration: 1.0, delay: 0.2 },
                y: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
              }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedCard(2)}
              className={cn(
                "relative p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between min-h-[175px] group overflow-hidden cursor-pointer",
                isDark
                  ? "bg-gradient-to-br from-[#0a0f24]/50 to-[#030612]/75 border-[3px] border-sky-500/45 hover:border-sky-400/90 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(56,189,248,0.3),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
                  : selectedCard === 2
                    ? "bg-white border border-[rgba(80,120,255,0.2)] shadow-[0_10px_30px_rgba(15,23,42,0.08),0_0_0_1px_rgba(80,120,255,0.12)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                    : "bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)] hover:-translate-y-1"
              )}
            >
              {/* Nested Chassis Double-Border & Top-edge Highlight */}
              {isDark && (
                <div className="absolute inset-[1px] rounded-[15px] border border-white/[0.02] bg-gradient-to-b from-white/[0.06] to-transparent group-hover:from-sky-400/[0.12] transition-all duration-500 pointer-events-none" />
              )}
              
              <div className="space-y-5 relative z-10">
                <div className="flex items-center gap-4 text-left">
                  <div className={cn(
                    "p-3 rounded-xl transition-all duration-500 shrink-0",
                    isDark 
                      ? "bg-white/[0.03] border border-white/[0.08] text-white/40 group-hover:text-sky-400 group-hover:border-sky-400/30 group-hover:bg-sky-950/20 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.15)]" 
                      : "bg-[#06B6D4]/5 border border-[#06B6D4]/10 text-[#06B6D4]"
                  )}>
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className={cn(
                      "text-base font-bold tracking-wide leading-none transition-colors duration-300",
                      isDark ? "text-white group-hover:text-sky-400" : "text-[#0F172A] group-hover:text-[#2563EB]"
                    )}>
                      Pedagogical Lesson Planner
                    </h3>
                  </div>
                </div>
                
                <p className={cn(
                  "text-sm font-light leading-relaxed font-sans transition-colors duration-350 text-left",
                  isDark ? "text-white/50 group-hover:text-white/70" : "text-[#64748B] group-hover:text-[#0F172A]"
                )}>
                  Generates structured lesson plans and visual aids in under 5 minutes.
                </p>
              </div>
            </motion.div>

            {/* Card 4: Assessment & Worksheets */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ 
                opacity: { duration: 1.0 },
                y: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedCard(3)}
              className={cn(
                "relative p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between min-h-[175px] group overflow-hidden cursor-pointer",
                isDark
                  ? "bg-gradient-to-br from-[#0a0f24]/50 to-[#030612]/75 border-[3px] border-slate-400/40 hover:border-slate-300/90 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(203,213,225,0.3),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
                  : selectedCard === 3
                    ? "bg-white border border-[rgba(80,120,255,0.2)] shadow-[0_10px_30px_rgba(15,23,42,0.08),0_0_0_1px_rgba(80,120,255,0.12)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                    : "bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)] hover:-translate-y-1"
              )}
            >
              {/* Nested Chassis Double-Border & Top-edge Highlight */}
              {isDark && (
                <div className="absolute inset-[1px] rounded-[15px] border border-white/[0.02] bg-gradient-to-b from-white/[0.06] to-transparent group-hover:from-slate-300/[0.12] transition-all duration-500 pointer-events-none" />
              )}
              
              <div className="space-y-5 relative z-10">
                <div className="flex items-center gap-4 text-left">
                  <div className={cn(
                    "p-3 rounded-xl transition-all duration-500 shrink-0",
                    isDark 
                      ? "bg-white/[0.03] border border-white/[0.08] text-white/40 group-hover:text-slate-300 group-hover:border-slate-300/30 group-hover:bg-slate-950/20 group-hover:shadow-[0_0_12px_rgba(203,213,225,0.15)]" 
                      : "bg-[#06B6D4]/5 border border-[#06B6D4]/10 text-[#06B6D4]"
                  )}>
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className={cn(
                      "text-base font-bold tracking-wide leading-none transition-colors duration-300",
                      isDark ? "text-white group-hover:text-slate-300" : "text-[#0F172A] group-hover:text-[#2563EB]"
                    )}>
                      Assessment & Worksheets
                    </h3>
                  </div>
                </div>
                
                <p className={cn(
                  "text-sm font-light leading-relaxed font-sans transition-colors duration-350 text-left",
                  isDark ? "text-white/50 group-hover:text-white/70" : "text-[#64748B] group-hover:text-[#0F172A]"
                )}>
                  Instantly creates localized classroom worksheets, quizzes, and grading rubrics.
                </p>
              </div>
            </motion.div>

            {/* Card 5: Offline-First PWA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ 
                opacity: { duration: 1.0, delay: 0.1 },
                y: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }
              }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedCard(4)}
              className={cn(
                "relative p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between min-h-[175px] group overflow-hidden cursor-pointer",
                isDark
                  ? "bg-gradient-to-br from-[#0a0f24]/50 to-[#030612]/75 border-[3px] border-indigo-400/45 hover:border-indigo-300/90 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(129,140,248,0.3),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
                  : selectedCard === 4
                    ? "bg-white border border-[rgba(80,120,255,0.2)] shadow-[0_10px_30px_rgba(15,23,42,0.08),0_0_0_1px_rgba(80,120,255,0.12)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                    : "bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)] hover:-translate-y-1"
              )}
            >
              {/* Nested Chassis Double-Border & Top-edge Highlight */}
              {isDark && (
                <div className="absolute inset-[1px] rounded-[15px] border border-white/[0.02] bg-gradient-to-b from-white/[0.06] to-transparent group-hover:from-indigo-300/[0.12] transition-all duration-500 pointer-events-none" />
              )}
              
              <div className="space-y-5 relative z-10">
                <div className="flex items-center gap-4 text-left">
                  <div className={cn(
                    "p-3 rounded-xl transition-all duration-500 shrink-0",
                    isDark 
                      ? "bg-white/[0.03] border border-white/[0.08] text-white/40 group-hover:text-indigo-300 group-hover:border-indigo-300/40 group-hover:bg-indigo-900/40 group-hover:shadow-[0_0_12px_rgba(129,140,248,0.2)]" 
                      : "bg-[#06B6D4]/5 border border-[#06B6D4]/10 text-[#06B6D4]"
                  )}>
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className={cn(
                      "text-base font-bold tracking-wide leading-none transition-colors duration-300",
                      isDark ? "text-white group-hover:text-indigo-300" : "text-[#0F172A] group-hover:text-[#2563EB]"
                    )}>
                      Offline-First PWA
                    </h3>
                  </div>
                </div>
                
                <p className={cn(
                  "text-sm font-light leading-relaxed font-sans transition-colors duration-350 text-left",
                  isDark ? "text-white/50 group-hover:text-white/70" : "text-[#64748B] group-hover:text-[#0F172A]"
                )}>
                  Caches generated teaching materials natively for offline rural classrooms.
                </p>
              </div>
            </motion.div>

            {/* Card 6: Institutional Scale */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ 
                opacity: { duration: 1.0, delay: 0.2 },
                y: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
              }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedCard(5)}
              className={cn(
                "relative p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between min-h-[175px] group overflow-hidden cursor-pointer",
                isDark
                  ? "bg-gradient-to-br from-[#0a0f24]/50 to-[#030612]/75 border-[3px] border-blue-600/45 hover:border-blue-300/90 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(37,99,235,0.3),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
                  : selectedCard === 5
                    ? "bg-white border border-[rgba(80,120,255,0.2)] shadow-[0_10px_30px_rgba(15,23,42,0.08),0_0_0_1px_rgba(80,120,255,0.12)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                    : "bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)] hover:-translate-y-1"
              )}
            >
              {/* Nested Chassis Double-Border & Top-edge Highlight */}
              {isDark && (
                <div className="absolute inset-[1px] rounded-[15px] border border-white/[0.02] bg-gradient-to-b from-white/[0.06] to-transparent group-hover:from-blue-300/[0.12] transition-all duration-500 pointer-events-none" />
              )}
              
              <div className="space-y-5 relative z-10">
                <div className="flex items-center gap-4 text-left">
                  <div className={cn(
                    "p-3 rounded-xl transition-all duration-500 shrink-0",
                    isDark 
                      ? "bg-white/[0.03] border border-white/[0.08] text-white/40 group-hover:text-blue-300 group-hover:border-blue-300/40 group-hover:bg-blue-950/20 group-hover:shadow-[0_0_12px_rgba(37,99,235,0.15)]" 
                      : "bg-[#06B6D4]/5 border border-[#06B6D4]/10 text-[#06B6D4]"
                  )}>
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className={cn(
                      "text-base font-bold tracking-wide leading-none transition-colors duration-300",
                      isDark ? "text-white group-hover:text-blue-300" : "text-[#0F172A] group-hover:text-[#2563EB]"
                    )}>
                      Institutional Scale
                    </h3>
                  </div>
                </div>
                
                <p className={cn(
                  "text-sm font-light leading-relaxed font-sans transition-colors duration-350 text-left",
                  isDark ? "text-white/50 group-hover:text-white/70" : "text-[#64748B] group-hover:text-[#0F172A]"
                )}>
                  Built-in attendance registers and secure profiles for school networks.
                </p>
              </div>
            </motion.div>

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
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-3 select-none"
          >
            <span className={cn(
              "font-mono text-xs tracking-[0.25em] uppercase font-bold",
              isDark ? "text-cyan-400/80" : "text-[#64748B]"
            )}>
              // SYSTEM ARCHITECTURE DIAGRAM
            </span>
            <h3 className={cn(
              "font-heading font-bold text-2xl md:text-3xl tracking-tight",
              isDark ? "text-white" : "text-[#0F172A]"
            )}>
              Sovereign Data Pipeline & Orchestration Flow
            </h3>
          </motion.div>

          <div className="relative w-full overflow-x-auto pt-8 pb-12 px-2 lg:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="relative flex items-center justify-between z-10 mx-auto w-full min-w-[1000px] max-w-[1400px]">
              
              {/* Horizontal 1px thin dashed connection line behind stages */}
              <div 
                className={cn(
                  "absolute top-1/2 -translate-y-1/2 left-[75px] lg:left-[90px] right-[75px] lg:right-[90px] h-0 z-0 pointer-events-none border-t border-dashed",
                  isDark 
                    ? "border-cyan-500/20 stroke-cyan-500/20"
                    : "border-[#E2E8F0] stroke-[#E2E8F0]"
                )}
              />

              {/* Absolute Running Dot (synchronized with the card wave) */}
              <motion.div
                initial={{ opacity: 0, left: "2%" }}
                whileInView={{ 
                  opacity: [0, 1, 1, 0], 
                  left: ["2%", "98%"] 
                }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ 
                  delay: 0.5, 
                  left: { duration: 4.2, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 4.2, repeat: Infinity, ease: "linear" }
                }}
                className={cn(
                  "absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full z-0 pointer-events-none",
                  isDark
                    ? "bg-cyan-200 shadow-[0_0_15px_4px_rgba(6,182,212,0.9)]"
                    : "bg-[#2563EB] shadow-[0_0_10px_2px_rgba(37,99,235,0.4)]"
                )}
              />

              {flowSteps.map((step, index) => (
                <React.Fragment key={step.id}>
                  {/* Node Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -15, scale: 1, y: 0 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      scale: [1, 1.06, 1],
                      y: [0, -10, 0]
                    }}
                    whileHover={{ y: -6, scale: 1.03 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ 
                      opacity: { duration: 0.4, delay: index * 0.15 },
                      x: { duration: 0.4, delay: index * 0.15 },
                      scale: { duration: 0.7, repeat: Infinity, repeatDelay: 3.5, delay: index * 0.7 + 0.5, ease: "easeInOut" },
                      y: { duration: 0.7, repeat: Infinity, repeatDelay: 3.5, delay: index * 0.7 + 0.5, ease: "easeInOut" }
                    }}
                    className={cn(
                      "p-4 lg:p-6 flex flex-col justify-between text-left min-h-[170px] lg:min-h-[190px] w-[150px] lg:w-[180px] shrink-0 relative overflow-hidden z-10 transition-colors transition-shadow duration-300 cursor-pointer group/flow",
                      isDark 
                        ? cn("rounded-2xl bg-[#04060e] border-[2px]", step.border, step.shadow, step.isCore && 'bg-[#050917] border-[3px]') 
                        : cn(
                            "rounded-2xl bg-white",
                            "border-2 border-[#E2E8F0]",
                            "shadow-[0_15px_40px_rgba(15,23,42,0.12)]",
                            "hover:shadow-[0_25px_50px_rgba(15,23,42,0.18)]",
                            "hover:border-[#CBD5E1]",
                            step.isCore && "border-[#CBD5E1]"
                          )
                    )}
                  >
                    
                    <div className="flex items-center justify-between relative z-10">
                      <span className={cn(
                        "font-mono uppercase font-bold",
                        isDark ? cn("text-[10px] tracking-wider", step.text) : "text-[9px] tracking-widest text-[#64748B]"
                      )}>
                        {step.tag}
                      </span>
                      <span className={cn(
                        "w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full",
                        isDark ? step.dot : "bg-[#94A3B8]"
                      )} />
                    </div>
                    
                    <div className="relative z-10 mt-auto pt-6 flex flex-col items-center text-center">
                      <div className={cn(
                        "mb-4 p-3 rounded-full transition-all duration-300 group-hover/flow:scale-110",
                        isDark 
                          ? "bg-white/[0.02] border border-white/[0.05]" 
                          : cn("border", step.lightBg, step.lightBorder)
                      )}>
                        <step.icon className={cn(
                          "w-7 h-7 lg:w-8 lg:h-8 opacity-90",
                          isDark ? step.text : step.lightText
                        )} />
                      </div>
                      
                      <h4 className={cn(
                        "text-[11px] lg:text-[12px] uppercase font-mono leading-snug",
                        isDark ? "font-bold text-white tracking-wider" : "font-semibold text-[#0F172A] tracking-wider"
                      )}>
                        {step.title}
                      </h4>
                      
                      <p className={cn(
                        "text-[9px] lg:text-[10px] font-light font-mono tracking-wider uppercase mt-1.5",
                        isDark ? "text-white/40" : "text-[#64748B]"
                      )}>
                        {step.sub}
                      </p>
                    </div>
                  </motion.div>

                  {/* Connecting Horizontal Line segment */}
                  {index < flowSteps.length - 1 && (
                    <div className="flex-1 z-0 h-full flex items-center justify-center relative min-w-[20px] px-1 lg:px-2">
                      <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.4, delay: index * 0.15 + 0.2, ease: "easeInOut" }}
                        style={{ originX: 0 }}
                        className={cn(
                          "w-full h-[1.5px] rounded-full",
                          isDark
                            ? "bg-gradient-to-r from-cyan-500/20 via-cyan-500/60 to-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                            : "bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200"
                        )}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
