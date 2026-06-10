"use client";

import React, { useState } from "react";
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


  return (
    <div className="relative min-h-screen bg-dark-base overflow-hidden w-full">
      {/* Global Background Matrix */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NeuralParticles />
      </div>

      {/* Decorative ambient background meshes and grid patterns */}
      <div className="absolute inset-0 tech-grid-dots opacity-[0.08] dark:opacity-25 pointer-events-none" />
      <div className="absolute inset-0 tech-grid-lines opacity-[0.06] dark:opacity-10 pointer-events-none" />
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden z-10 px-4 md:px-8 bg-transparent">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-base/15 to-transparent dark:via-dark-base/15 pointer-events-none" />
        
        <div className="w-full max-w-[95%] sm:max-w-[92%] lg:max-w-[90%] xl:max-w-[88%] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-center">
          {/* Hero Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-sm border",
              theme === "dark"
                ? "bg-white/[0.01] border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                : "bg-white border-slate-200 shadow-sm"
            )}>
              <span className={cn("text-[10px] font-inter font-semibold uppercase tracking-[0.25em]", theme === "dark" ? "text-neutral-500" : "text-slate-500")}>
                SARGVISION INFRASTRUCTURE
              </span>
            </div>
            
            <h1 className={cn(
              "font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[90px] tracking-tight leading-[1.05] font-semibold",
              theme === "dark" ? "text-white" : "text-[#0F172A]"
            )}>
              Building India's <br className="hidden md:inline" />
              Intelligence Infrastructure
            </h1>
            
            <div className={cn(
              "text-base md:text-lg lg:text-xl mx-auto lg:mx-0 leading-relaxed font-inter font-normal space-y-2",
              theme === "dark" 
                ? "text-neutral-400 max-w-xl" 
                : "text-[#475569] max-w-xl"
            )}>
              <p className={cn("font-semibold flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1.5", theme === "dark" ? "text-gray-200" : "text-[#0F172A]")}>
                <span>Sovereign Intelligence</span>
                <span className="text-neutral-300 dark:text-neutral-700 font-normal">|</span>
                <span>Physical AI</span>
                <span className="text-neutral-300 dark:text-neutral-700 font-normal">|</span>
                <span className="inline-flex items-center px-2 py-0.5 text-xs font-mono font-bold tracking-wider rounded bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-gray-200 border border-slate-200 dark:border-white/10 ml-0.5">
                  #AGI4Bharat
                </span>
              </p>
              <p>Deploying the intelligent systems that power India's future.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
              <button
                onClick={() => setModalOpen(true)}
                className={cn(
                  "px-8 py-3.5 rounded-md text-[13px] font-inter font-semibold tracking-wide transition-all duration-300 ease-out flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer border shadow-sm group hover:shadow-md hover:-translate-y-[1px]",
                  theme === "dark"
                    ? "bg-white text-dark-base border-white hover:bg-neutral-100"
                    : "bg-slate-900 text-white border-slate-900 hover:bg-slate-800"
                )}
              >
                DEPLOY AGENT
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={handleExploreClick}
                className={cn(
                  "px-8 py-3.5 rounded-md transition-all duration-300 ease-out w-full sm:w-auto text-center cursor-pointer font-inter font-medium text-[13px] border hover:shadow-sm hover:-translate-y-[1px]",
                  theme === "dark"
                    ? "bg-transparent border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white hover:bg-white/5"
                    : "bg-transparent border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50"
                )}
              >
                View Architecture
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
                "w-1.5 h-1.5 rounded-full",
                theme === "dark" ? "bg-slate-700" : "bg-[#DB2777]"
              )} />
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-widest",
                theme === "dark" ? "text-slate-400" : "text-[#DB2777]"
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
                theme === "dark" ? "text-blue-400/80" : "text-[#475569]"
              )}>// 01 // BELIEF</span>
              <h3 className={cn(
                "font-editorial font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-snug max-w-3xl mx-auto",
                theme === "dark" ? "text-white" : "text-[#0F172A]"
              )}>
                Talent exists <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#4F46E5]">everywhere</span>.
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
                theme === "dark" ? "text-slate-400" : "text-[#475569]"
              )}>// 02 // TENSION</span>
              <h3 className={cn(
                "font-editorial font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-snug max-w-3xl mx-auto",
                theme === "dark" ? "text-gray-300" : "text-[#0F172A]"
              )}>
                Opportunity <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DB2777] to-[#E11D48]">does not</span>.
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
                theme === "dark" ? "text-slate-400" : "text-[#475569]"
              )}>// 03 // RESOLUTION</span>
              <h3 className={cn(
                "font-editorial font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-snug max-w-3xl mx-auto",
                theme === "dark" ? "text-white" : "text-[#0F172A]"
              )}>
                We're building the <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#0891B2]">bridge between them</span>.
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



      {/* ================= SOVEREIGN STACK FINALE ================= */}
      <SovereignStack />

      {/* ================= INITIATE STRATEGIC ALIGNMENT ================= */}
      <ContactSection />

      {/* SahayakAI Deployment Protocol Modal */}
      <SahayakModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
