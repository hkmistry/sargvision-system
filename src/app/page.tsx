"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Sparkles, 
  ArrowRight, 
  Speech, 
  BookOpen, 
  UserCheck, 
  HardDrive, 
  Zap, 
  ChevronRight, 
  Quote, 
  Layers, 
  Lock, 
  Globe, 
  Cpu, 
  ArrowUpRight 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";
import { GlowingCard } from "@/components/ui/glowing-card";
import NeuralParticles from "@/components/canvas/neural-particles";
import { SplineScene } from "@/components/ui/spline-scene";
import SahayakSection from "@/components/canvas/sahayak-section";
import HumanCapitalSection from "@/components/canvas/human-capital-section";
import PhysicalLabSection from "@/components/canvas/physical-lab-section";
import StrategicVerticals from "@/components/canvas/strategic-verticals";
import ObservationChamber from "@/components/canvas/observation-chamber";
import SovereignStack from "@/components/canvas/sovereign-stack";
import ContactSection from "@/components/canvas/contact-section";
import SahayakModal from "@/components/canvas/sahayak-modal";

export default function HomePage() {
  const { theme } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  
  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("sahayak");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  // Animated counters tracking - Scroll triggered
  const metricsRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState([0, 0, 100, 0]);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = metricsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let step = 0;
    
    const targets = [10, 11, 45, 100];
    const timer = setInterval(() => {
      step++;
      setCounts(targets.map((target, idx) => {
        if (idx === 2) {
          const start = 100;
          const diff = start - target;
          return Math.max(target, Math.round(start - (diff / steps) * step));
        }
        return Math.min(target, Math.round((target / steps) * step));
      }));
      if (step >= steps) clearInterval(timer);
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [hasStarted]);

  return (
    <div className="relative min-h-screen bg-dark-base overflow-hidden w-full">
      {/* Global Background Matrix */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NeuralParticles />
      </div>

      {/* Decorative ambient background meshes and grid patterns */}
      <div className="absolute inset-0 tech-grid-dots opacity-[0.08] dark:opacity-25 pointer-events-none" />
      <div className="absolute inset-0 tech-grid-lines opacity-[0.06] dark:opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-purple/5 dark:bg-accent-purple/5 bg-blue-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-accent-cyan/5 dark:bg-accent-cyan/5 bg-cyan-500/[0.03] rounded-full blur-[160px] pointer-events-none" />
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden z-10 px-4 md:px-8 bg-transparent">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-base/15 to-transparent dark:via-dark-base/15 pointer-events-none" />
        
        <div className="w-full max-w-[95%] sm:max-w-[92%] lg:max-w-[90%] xl:max-w-[88%] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-center">
          {/* Hero Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md border",
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-white border-[rgba(15,23,42,0.08)] shadow-[0_8px_20px_rgba(15,23,42,0.04)]"
            )}>
              <Sparkles className={cn("w-3.5 h-3.5 animate-pulse", theme === "dark" ? "text-accent-cyan" : "text-[#2563EB]")} />
              <span className={cn("text-[10px] font-bold uppercase tracking-widest", theme === "dark" ? "text-gray-300" : "text-[#475569]")}>
                The Sovereign Intelligence Kernel
              </span>
            </div>
            
            <h1 className={cn(
              "font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] 2xl:text-8xl tracking-tight leading-[1.05]",
              theme === "dark" ? "text-premium-alabaster" : "text-[#0F172A] [text-shadow:0_1px_3px_rgba(15,23,42,0.08)]"
            )}>
              Building the <br className="hidden md:inline" />
              <span className={cn(
                "bg-clip-text text-transparent",
                theme === "dark" 
                  ? "bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple" 
                  : "bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED]"
              )}>
                Agentic Universe
              </span>
            </h1>
            
            <p className={cn(
              "text-sm sm:text-base md:text-lg lg:text-xl mx-auto lg:mx-0 leading-relaxed",
              theme === "dark" 
                ? "font-light text-premium-slate/85 max-w-xl" 
                : "font-normal text-[#475569] max-w-md"
            )}>
              Autonomous AI systems designed for Bharat, education, institutions, and sovereign national transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
              <motion.div
                whileHover={theme === "dark" ? { scale: 1.02, boxShadow: "0 0 40px rgba(6, 182, 212, 0.3)" } : { scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "relative group rounded-full w-full sm:w-auto cursor-pointer transition-all duration-300",
                  theme === "dark" 
                    ? "bg-gradient-to-r from-accent-cyan to-accent-blue p-[1px]" 
                    : "bg-gradient-to-r from-[#2563EB] to-[#4F46E5] shadow-[0_12px_30px_rgba(37,99,235,0.25)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.35)]"
                )}
              >
                {/* Light mode inner gel shine */}
                <div className={cn(
                  "absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none transition-opacity duration-300",
                  theme === "dark" ? "hidden" : "opacity-0 group-hover:opacity-100"
                )} />
                
                <button
                  onClick={() => setModalOpen(true)}
                  className={cn(
                    "relative px-6 py-2.5 sm:px-7 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 w-full cursor-pointer focus:outline-none",
                    theme === "dark"
                      ? "bg-dark-base text-white hover:bg-dark-base/90"
                      : "bg-transparent text-white border border-white/20"
                  )}
                >
                  Launch SahayakAI <ArrowRight className={cn("w-3.5 h-3.5 group-hover:translate-x-1 transition-transform", theme === "dark" ? "text-accent-cyan" : "text-white")} />
                </button>
              </motion.div>

              <button
                onClick={handleExploreClick}
                className={cn(
                  "px-6 py-3 sm:px-7 sm:py-3.5 rounded-full transition-all duration-300 w-full sm:w-auto text-center cursor-pointer font-semibold text-xs sm:text-sm",
                  theme === "dark"
                    ? "border border-white/10 hover:border-cyan-500/30 bg-white/5 hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] text-gray-300 hover:text-white hover:-translate-y-[1px]"
                    : "bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_10px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.10)] hover:border-[rgba(15,23,42,0.15)] text-[#475569] hover:text-[#0F172A] hover:-translate-y-1"
                )}
              >
                Explore Ecosystem
              </button>
            </div>
          </div>

          {/* Hero Visual Holographic Viewport with Interactive 3D Humanoid Robot */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <ObservationChamber />
          </div>
        </div>
      </section>

      {/* ================= SAHAYAK ORCHESTRATION SECTION ================= */}
      <SahayakSection onOpenModal={() => setModalOpen(true)} />

      {/* ================= MANIFESTO MOMENT — Surface Level 1 ================= */}
      <section id="manifesto" className={cn(
        "relative min-h-screen flex items-center justify-center py-24 md:py-0 overflow-hidden z-10 px-4 md:px-8 select-none",
        theme === "dark" ? "bg-transparent" : "bg-[#F8FAFD]"
      )}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-base/5 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto w-full flex flex-col justify-center space-y-20 md:space-y-28">
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.8 }}
              className={cn(
                "inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md",
                theme === "dark"
                  ? "bg-white/5 border border-white/10"
                  : "bg-[#0F172A]/5 border border-[#E2E8F0]"
              )}
            >
              <span className={cn(
                "w-1.5 h-1.5 rounded-full animate-pulse",
                theme === "dark" ? "bg-accent-purple" : "bg-[#DB2777]"
              )} />
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-widest",
                theme === "dark" ? "text-accent-purple" : "text-[#DB2777]"
              )}>SARGVISION Manifesto</span>
            </motion.div>
          </div>

          <div className="space-y-16 md:space-y-24">
            {/* Belief */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 text-center"
            >
              <span className={cn(
                "font-mono text-[9px] tracking-[0.25em] uppercase font-semibold block",
                theme === "dark" ? "text-accent-cyan" : "text-[#475569]"
              )}>// 01 // BELIEF</span>
              <h3 className={cn(
                "font-heading font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-snug max-w-3xl mx-auto",
                theme === "dark" ? "text-white" : "text-[#0F172A] [text-shadow:0_1px_3px_rgba(15,23,42,0.08)]"
              )}>
                Talent exists <span className={cn(
                  "font-bold",
                  theme === "dark" 
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-blue" 
                    : "text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#4F46E5]"
                )}>everywhere</span>.
              </h3>
            </motion.div>

            {/* Tension */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="space-y-4 text-center"
            >
              <span className={cn(
                "font-mono text-[9px] tracking-[0.25em] uppercase font-semibold block",
                theme === "dark" ? "text-accent-purple" : "text-[#475569]"
              )}>// 02 // TENSION</span>
              <h3 className={cn(
                "font-heading font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-snug max-w-3xl mx-auto",
                theme === "dark" ? "text-gray-300" : "text-[#0F172A] [text-shadow:0_1px_3px_rgba(15,23,42,0.08)]"
              )}>
                Opportunity <span className={cn(
                  "font-bold",
                  theme === "dark" 
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-pink-500" 
                    : "text-transparent bg-clip-text bg-gradient-to-r from-[#DB2777] to-[#E11D48]"
                )}>does not</span>.
              </h3>
            </motion.div>

            {/* Resolution */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="space-y-4 text-center"
            >
              <span className={cn(
                "font-mono text-[9px] tracking-[0.25em] uppercase font-semibold block",
                theme === "dark" ? "text-emerald-400" : "text-[#475569]"
              )}>// 03 // RESOLUTION</span>
              <h3 className={cn(
                "font-heading font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-snug max-w-3xl mx-auto",
                theme === "dark" ? "text-white" : "text-[#0F172A] [text-shadow:0_1px_3px_rgba(15,23,42,0.08)]"
              )}>
                We're building the <span className={cn(
                  "font-bold",
                  theme === "dark" 
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-accent-cyan" 
                    : "text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#0891B2]"
                )}>bridge between them</span>.
              </h3>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ================= HUMAN CAPITAL INFRA SECTION ================= */}
      <HumanCapitalSection />

      {/* ================= PHYSICAL AI LAB INFRASTRUCTURE ================= */}
      <PhysicalLabSection />

      {/* ================= STRATEGIC VERTICALS (CLASSIFIED OPS HUD) ================= */}
      <StrategicVerticals />

      {/* ================= METRICS SECTION ================= */}
      <section ref={metricsRef} className={cn(
        "relative py-24 max-w-7xl mx-auto px-4 md:px-8 z-10 grid grid-cols-2 md:grid-cols-4 gap-6",
        theme === "dark" ? "bg-transparent" : "bg-transparent"
      )}>
        <GlowingCard className={cn("p-6 flex flex-col justify-between", theme === "dark" ? "bg-dark-panel/20" : "bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)] hover:-translate-y-1 transition-all duration-300")} glowColor="rgba(6, 182, 212, 0.1)">
          <div className="text-[10px] font-bold text-[#64748B] dark:text-gray-500 uppercase tracking-widest">Students Envisioned</div>
          <div className="my-3 text-4xl md:text-5xl font-heading font-extrabold text-[#0F172A] dark:text-white">{counts[0]}M+</div>
          <div className="text-[10px] font-semibold text-accent-cyan">Cognitive Democracy</div>
        </GlowingCard>

        <GlowingCard className={cn("p-6 flex flex-col justify-between", theme === "dark" ? "bg-dark-panel/20" : "bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)] hover:-translate-y-1 transition-all duration-300")} glowColor="rgba(139, 92, 246, 0.1)">
          <div className="text-[10px] font-bold text-[#64748B] dark:text-gray-500 uppercase tracking-widest">Vernacular Dialects</div>
          <div className="my-3 text-4xl md:text-5xl font-heading font-extrabold text-[#0F172A] dark:text-white">{counts[1]}+</div>
          <div className="text-[10px] font-semibold text-accent-purple">Native Synthesis</div>
        </GlowingCard>

        <GlowingCard className={cn("p-6 flex flex-col justify-between", theme === "dark" ? "bg-dark-panel/20" : "bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)] hover:-translate-y-1 transition-all duration-300")} glowColor="rgba(59, 130, 246, 0.1)">
          <div className="text-[10px] font-bold text-[#64748B] dark:text-gray-500 uppercase tracking-widest">Latency Loop</div>
          <div className="my-3 text-4xl md:text-5xl font-heading font-extrabold text-[#0F172A] dark:text-white">&lt;{counts[2]}ms</div>
          <div className="text-[10px] font-semibold text-accent-blue">Ultra-Low Threshold</div>
        </GlowingCard>

        <GlowingCard className={cn("p-6 flex flex-col justify-between", theme === "dark" ? "bg-dark-panel/20" : "bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)] hover:-translate-y-1 transition-all duration-300")} glowColor="rgba(6, 182, 212, 0.1)">
          <div className="text-[10px] font-bold text-[#64748B] dark:text-gray-500 uppercase tracking-widest">Data Telemetry</div>
          <div className="my-3 text-4xl md:text-5xl font-heading font-extrabold text-[#0F172A] dark:text-white">{counts[3]}%</div>
          <div className="text-[10px] font-semibold text-emerald-400">Sovereign Protected</div>
        </GlowingCard>
      </section>

      {/* ================= SOVEREIGN STACK FINALE ================= */}
      <SovereignStack />

      {/* ================= INITIATE STRATEGIC ALIGNMENT ================= */}
      <ContactSection />

      {/* SahayakAI Deployment Protocol Modal */}
      <SahayakModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
