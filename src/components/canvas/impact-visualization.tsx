"use client";

import React from "react";
import { GraduationCap, Users, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ImpactVisualization() {
  const outcomes = [
    {
      id: "ARC_01",
      icon: GraduationCap,
      role: "The Learner",
      title: "Vernacular Cognitive Ingestion",
      desc: "Natively processing regional dialects at the silicon edge allows children in remote grid zones to explore complex physics and math concepts directly in their mother tongue, bypassing latency and English-translation friction entirely.",
      telemetry: "VERNACULAR_SYNC // SYS.LATENCY: <14.3ms // SECURE"
    },
    {
      id: "ARC_02",
      icon: Users,
      role: "The Educator",
      title: "Pedagogical Leverage Matrix",
      desc: "Sovereign LLM engines synthesize lesson graphs, formulate assessments, and map curriculum boards instantly. By automating administrative overhead, educators shift 100% of their focus to direct student mentorship.",
      telemetry: "PEDAGOGICAL_CAL // COMPILE: OK // SYNC: ACTIVE"
    },
    {
      id: "ARC_03",
      icon: Shield,
      role: "The Community",
      title: "Computational Last-Mile Equity",
      desc: "By executing air-gapped model lattices strictly on secure edge hardware, classrooms in the most remote districts receive identical computational capability to tier-1 cities—entirely offline, secure, and sovereign.",
      telemetry: "SOVEREIGN_NODE // DISPATCH: ONLINE // SEC: LOCKED"
    }
  ];

  return (
    <section id="impact-visualization" className="relative py-28 z-10 px-4 md:px-8 max-w-7xl mx-auto bg-transparent overflow-hidden select-none">
      {/* Subtle background coordinate telemetry grid */}
      <div className="absolute inset-0 tech-grid-dots opacity-10 pointer-events-none" />

      <div className="space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0.95, y: 15, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 22, damping: 18, mass: 1.8 }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-accent-purple animate-pulse-slow" />
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest font-mono">
              Ecosystem In Action
            </span>
          </div>

          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white tracking-tight leading-tight">
            Visualizing the Transformation
          </h2>

          <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
            SARGVISION systems do not just execute algorithms; they reshape spatial equity, providing computational power down to individual human scales.
          </p>
        </motion.div>

        {/* 3-Column Luxury Typographic Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items-stretch">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0.95, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  type: "spring",
                  stiffness: 22,
                  damping: 18,
                  mass: 1.8,
                  delay: idx * 0.12
                }}
                className="flex flex-col justify-between p-8 rounded-3xl border border-white/10 bg-neutral-950/45 backdrop-blur-2xl hover:border-accent-purple/30 group transition-all duration-700 w-full h-full will-change-transform shadow-[inset_0_0_20px_rgba(255,255,255,0.01)] hover:shadow-[0_0_30px_rgba(139,92,246,0.05)]"
              >
                <div className="space-y-6">
                  {/* Archetype Icon & ID tag */}
                  <div className="flex justify-between items-center border-b border-white/[0.06] pb-4">
                    <div className="p-2 rounded-lg bg-accent-purple/10 border border-accent-purple/20 text-accent-purple group-hover:scale-105 transition-transform duration-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[9px] text-neutral-500 tracking-widest">{item.id}</span>
                  </div>

                  {/* Archetype identity block */}
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] tracking-[0.25em] text-accent-purple uppercase font-semibold">
                      // {item.role}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-accent-purple transition-colors duration-500">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Telemetry bottom line */}
                <div className="mt-8 pt-4 border-t border-white/[0.04] font-mono text-[8px] text-neutral-500 tracking-wider flex justify-between items-center">
                  <span>{item.telemetry}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    <span>VERIFIED</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
