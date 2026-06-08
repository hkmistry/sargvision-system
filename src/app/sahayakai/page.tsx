"use client";

import React, { useState } from "react";
import SubpageLayout from "@/components/shared/subpage-layout";
import { GlowingCard } from "@/components/ui/glowing-card";
import { 
  Speech, 
  BookOpen, 
  UserCheck, 
  HardDrive, 
  Zap, 
  Cpu, 
  CheckCircle2, 
  TrendingUp, 
  Activity, 
  Server,
  Layers
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SahayakOrchestrationPage() {
  const [activeDialect, setActiveDialect] = useState("HINDI");
  
  const dialects = [
    { code: "HI", name: "HINDI", status: "OPTIMIZED", fidelity: "99.2%" },
    { code: "TA", name: "TAMIL", status: "OPTIMIZED", fidelity: "98.8%" },
    { code: "TE", name: "TELUGU", status: "OPTIMIZED", fidelity: "98.5%" },
    { code: "KN", name: "KANNADA", status: "OPTIMIZED", fidelity: "98.9%" },
    { code: "BN", name: "BENGALI", status: "STABLE", fidelity: "97.4%" },
    { code: "MR", name: "MARATHI", status: "STABLE", fidelity: "97.1%" },
    { code: "GU", name: "GUJARATI", status: "STABLE", fidelity: "96.8%" },
    { code: "PA", name: "PUNJABI", status: "STABLE", fidelity: "97.2%" },
    { code: "ML", name: "MALAYALAM", status: "STABLE", fidelity: "96.5%" },
    { code: "OR", name: "ODIA", status: "BETA", fidelity: "94.2%" },
    { code: "AS", name: "ASSAMESE", status: "BETA", fidelity: "93.8%" },
  ];

  return (
    <SubpageLayout
      title="SahayakAI Orchestration"
      subtitle="Architecting sovereign, high-density cognitive tutoring infrastructure natively for the primary and secondary classrooms of Bharat."
      tagline="Infrastructure Subpage"
      accentColor="cyan"
    >
      <div className="space-y-12">
        {/* Dynamic Summary Panel */}
        <GlowingCard 
          className="p-8 bg-[#050814]/40 backdrop-blur-xl border border-white/5 relative overflow-hidden"
          glowColor="rgba(6, 182, 212, 0.15)"
        >
          <div className="absolute inset-0 tech-grid-dots opacity-20 pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20">
                <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
                <span className="text-[10px] font-bold text-accent-cyan tracking-widest uppercase">COGNITIVE COMPLIANCE LAYER</span>
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white tracking-tight leading-tight">
                Decentralized Sovereign Intelligence
              </h2>
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                SahayakAI is not a wrapper on foreign APIs. It is a custom-compiled parameter lattice built natively to operate securely at the national compute corridor, maintaining all spoken metadata, telemetry, and curriculum profiles strictly within sovereign borders.
              </p>
            </div>
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-heading font-extrabold text-white">45ms</div>
                <div className="text-[9px] text-accent-cyan tracking-wider font-bold uppercase mt-1">VOICE LATENCY</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-heading font-extrabold text-white">100%</div>
                <div className="text-[9px] text-accent-cyan tracking-wider font-bold uppercase mt-1">AIR-GAPPED READY</div>
              </div>
            </div>
          </div>
        </GlowingCard>

        {/* Granular Multi-Grid Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: 11 Native Indian Languages Matrix (col-span-8) */}
          <GlowingCard 
            className="lg:col-span-8 p-8 bg-[#050814]/40 backdrop-blur-xl border border-white/5 flex flex-col justify-between min-h-[420px] relative overflow-hidden"
            glowColor="rgba(6, 182, 212, 0.2)"
          >
            <div className="absolute inset-0 tech-grid-dots opacity-20 pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full relative z-10">
              <div className="md:col-span-6 space-y-6">
                <div className="flex items-center gap-2">
                  <Speech className="w-5 h-5 text-accent-cyan animate-pulse" />
                  <span className="text-[10px] font-bold text-accent-cyan tracking-widest uppercase">SPEECH SYNTHESIS ENGINE</span>
                </div>
                
                <h3 className="font-heading font-bold text-2xl text-white tracking-tight leading-tight">
                  11 Native Indian Languages Speech Core
                </h3>
                
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  bypasses the standard latency-inducing English translation wrappers. Interprets vernacular audio frames and regional dialect patterns (such as Hinglish or Tanglish) natively inside the neural kernel.
                </p>

                {/* Dialect Matrix Grid */}
                <div className="grid grid-cols-3 gap-2">
                  {dialects.map((lang) => (
                    <button
                      key={lang.name}
                      onClick={() => setActiveDialect(lang.name)}
                      className={`text-[9px] font-mono font-bold border p-2 rounded-lg text-left transition-all duration-300 ${
                        activeDialect === lang.name
                          ? "bg-accent-cyan/10 border-accent-cyan/30 text-white shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                          : "bg-white/[0.02] border-white/5 text-gray-500 hover:border-white/10 hover:text-gray-300"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{lang.code}</span>
                        <span className={`w-1 h-1 rounded-full ${lang.status === "OPTIMIZED" ? "bg-emerald-500" : "bg-accent-blue"}`} />
                      </div>
                      <div className="text-white mt-1 select-none">{lang.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Audio Wave Loop Monitor */}
              <div className="md:col-span-6 flex justify-center items-center h-full">
                <div className="w-full bg-[#050814]/60 border border-white/5 rounded-2xl p-6 flex flex-col justify-between min-h-[260px] relative">
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="text-[9px] font-mono text-accent-cyan tracking-wider">DIALECT_SPECTROGRAM // ACTIVE</span>
                    <span className="text-[8px] font-mono text-gray-500">{activeDialect}_NODE</span>
                  </div>

                  <div className="flex-grow flex items-center justify-center gap-1.5 py-6">
                    {/* Animated Pulsing Audio Waveform SVG */}
                    {[0.5, 1.4, 0.7, 1.8, 1.1, 1.9, 0.6, 1.3, 0.8, 1.6].map((mult, i) => (
                      <span
                        key={i}
                        className="w-2 rounded-full bg-gradient-to-t from-accent-cyan via-accent-blue to-accent-purple shadow-[0_0_10px_rgba(6,182,212,0.3)] animate-pulse"
                        style={{
                          height: `${50 * mult}px`,
                          animationDuration: `${0.8 + i * 0.15}s`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="border-t border-white/5 pt-3 space-y-1">
                    <div className="flex justify-between font-mono text-[8px] text-gray-400">
                      <span>Synthesizer State:</span>
                      <span className="text-emerald-400 font-bold">READY</span>
                    </div>
                    <div className="flex justify-between font-mono text-[8px] text-gray-400">
                      <span>Dialect Accuracy:</span>
                      <span className="text-white font-bold">{dialects.find(d => d.name === activeDialect)?.fidelity || "98%"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlowingCard>

          {/* Card 2: Curriculum Support (col-span-4) */}
          <GlowingCard 
            className="lg:col-span-4 p-8 bg-[#050814]/40 backdrop-blur-xl border border-white/5 flex flex-col justify-between min-h-[420px] relative overflow-hidden"
            glowColor="rgba(139, 92, 246, 0.2)"
          >
            <div className="absolute inset-0 tech-grid-dots opacity-20 pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-accent-purple" />
                <span className="text-[10px] font-bold text-accent-purple tracking-widest uppercase">BOARD ALIGNMENT</span>
              </div>
              
              <h3 className="font-heading font-bold text-2xl text-white tracking-tight leading-tight">
                NCERT / CBSE / ICSE Semantic Support
              </h3>
              
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Direct academic integration ensures all conversational outputs map directly to official textbooks, preventing hallucinatory text and providing verifiable school-standard answers.
              </p>
            </div>

            {/* Pulsing Interactive Concept Map SVG */}
            <div className="w-full bg-[#050814]/50 border border-white/5 rounded-2xl p-4 relative overflow-hidden min-h-[160px] flex flex-col justify-between mt-6 z-10">
              <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2 font-mono text-[8px]">
                <span className="text-accent-purple tracking-wider font-bold">SEMANTIC_BRIDGING_LAYER</span>
                <span className="text-gray-500">450k NODES</span>
              </div>
              
              <div className="relative w-full h-24 flex items-center justify-center">
                <div className="absolute w-10 h-10 rounded-full border border-accent-purple/30 bg-accent-purple/5 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <span className="text-[9px] font-mono font-bold text-white">CORE</span>
                </div>
                {[0, 90, 180, 270].map((deg, i) => {
                  const radius = 32;
                  const labels = ["NCERT", "CBSE", "ICSE", "STATE"];
                  return (
                    <div
                      key={i}
                      className="absolute w-8 h-8 rounded-full border border-white/10 bg-[#050814]/90 flex items-center justify-center text-[7px] font-mono text-gray-400 hover:border-accent-purple/40 hover:text-white transition-all duration-300"
                      style={{
                        transform: `rotate(${deg}deg) translate(${radius}px) rotate(-${deg}deg)`,
                      }}
                    >
                      {labels[i]}
                    </div>
                  );
                })}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ mixBlendMode: "screen" }}>
                  {[0, 90, 180, 270].map((deg, i) => {
                    const rad = (deg * Math.PI) / 180;
                    const x2 = 50 + Math.cos(rad) * 23;
                    const y2 = 50 + Math.sin(rad) * 23;
                    return (
                      <line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2={`${x2}%`}
                        y2={`${y2}%`}
                        stroke="rgba(139, 92, 246, 0.4)"
                        strokeWidth="0.8"
                        strokeDasharray="2, 2"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
          </GlowingCard>

          {/* Card 3: Teacher's Intelligent Co-Pilot (col-span-4) */}
          <GlowingCard 
            className="lg:col-span-4 p-8 bg-[#050814]/40 backdrop-blur-xl border border-white/5 flex flex-col justify-between min-h-[420px] relative overflow-hidden"
            glowColor="rgba(59, 130, 246, 0.2)"
          >
            <div className="absolute inset-0 tech-grid-dots opacity-20 pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-accent-blue" />
                <span className="text-[10px] font-bold text-accent-blue tracking-widest uppercase">CLASSROOM CO-PILOT</span>
              </div>
              
              <h3 className="font-heading font-bold text-2xl text-white tracking-tight leading-tight">
                Teacher's Intelligent Co-Pilot AI
              </h3>
              
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Empowers classroom operators by auto-compiling highly personalized worksheets, mapping lesson strategies, and compiling deep competency reports automatically.
              </p>
            </div>

            {/* Compiler logs mockup */}
            <div className="w-full bg-[#050814]/50 border border-white/5 rounded-2xl p-4 relative overflow-hidden mt-6 min-h-[160px] flex flex-col justify-between font-mono text-[9px] z-10">
              <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
                <span className="text-accent-blue font-bold">CO_PILOT_COMPILER_V2</span>
                <span className="text-[7px] text-gray-500">ACTIVE</span>
              </div>

              <div className="space-y-1.5 flex-grow flex flex-col justify-center text-gray-400">
                <div className="flex items-center gap-1.5 text-gray-500">
                  <span className="text-accent-blue">&gt;</span>
                  <span>LOAD CBSE CHEMISTRY SYLLABUS...</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500">[DONE]</span>
                  <span>COMPILED LESSON: Periodic Trends</span>
                </div>
                <div className="flex items-center gap-1.5 text-accent-cyan">
                  <span className="animate-pulse">[RUN]</span>
                  <span>BENCHMARKING 30 STUDENT NODES</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-2 border-t border-white/5 pt-2 text-[7px] text-gray-500">
                <span>SPEED: +1200%</span>
                <span>OVERHEAD: -78%</span>
              </div>
            </div>
          </GlowingCard>

          {/* Card 4: Voice-First Low-Latency Engine (col-span-4) */}
          <GlowingCard 
            className="lg:col-span-4 p-8 bg-[#050814]/40 backdrop-blur-xl border border-white/5 flex flex-col justify-between min-h-[420px] relative overflow-hidden"
            glowColor="rgba(6, 182, 212, 0.2)"
          >
            <div className="absolute inset-0 tech-grid-dots opacity-20 pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent-cyan" />
                <span className="text-[10px] font-bold text-accent-cyan tracking-widest uppercase">NATIVE VOICE LOOP</span>
              </div>
              
              <h3 className="font-heading font-bold text-2xl text-white tracking-tight leading-tight">
                Voice-First &lt;45ms Latency Core
              </h3>
              
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Standard speech pipelines create major dialogue gaps. SahayakAI runs a single-stage neural network that maintains active voice dialogues under 45ms loop thresholds.
              </p>
            </div>

            {/* Speed Dial Visualizer */}
            <div className="w-full bg-[#050814]/50 border border-white/5 rounded-2xl p-4 relative overflow-hidden mt-6 min-h-[160px] flex flex-col justify-between z-10">
              <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2 font-mono text-[8px]">
                <span className="text-accent-cyan tracking-wider font-bold">LATENCY_KPI_GAUGE</span>
                <span className="text-gray-500">REALTIME</span>
              </div>

              <div className="flex-grow flex items-center justify-center relative py-2">
                <div className="w-16 h-16 rounded-full border-4 border-dashed border-accent-cyan/20 flex items-center justify-center relative animate-spin" style={{ animationDuration: '24s' }} />
                <div className="absolute flex flex-col items-center">
                  <span className="text-xl font-heading font-black text-white leading-none">45ms</span>
                  <span className="text-[6px] font-mono font-bold text-accent-cyan uppercase tracking-widest mt-1">LATENCY CORE</span>
                </div>
                <div className="absolute w-16 h-16 rounded-full border border-accent-cyan/40 animate-ping opacity-10" />
              </div>
            </div>
          </GlowingCard>

          {/* Card 5: Air-Gapped Offline Node Runtime (col-span-4) */}
          <GlowingCard 
            className="lg:col-span-4 p-8 bg-[#050814]/40 backdrop-blur-xl border border-white/5 flex flex-col justify-between min-h-[420px] relative overflow-hidden"
            glowColor="rgba(139, 92, 246, 0.2)"
          >
            <div className="absolute inset-0 tech-grid-dots opacity-20 pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-accent-purple" />
                <span className="text-[10px] font-bold text-accent-purple tracking-widest uppercase">SECURE EDGE DEPLOYMENT</span>
              </div>
              
              <h3 className="font-heading font-bold text-2xl text-white tracking-tight leading-tight">
                Air-Gapped Offline Nodes
              </h3>
              
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Engineered to operate continuously in remote areas with zero internet or cloud ties. Fully compiles onto local edge hardware with independent offline parameters.
              </p>
            </div>

            {/* Server Chassis LED Stack */}
            <div className="w-full bg-[#050814]/50 border border-white/5 rounded-2xl p-4 relative overflow-hidden mt-6 min-h-[160px] flex flex-col justify-between z-10">
              <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2 font-mono text-[8px]">
                <span className="text-accent-purple tracking-wider font-bold">MODULAR_EDGE_CHASSIS</span>
                <span className="text-emerald-500 font-bold">ONLINE</span>
              </div>

              <div className="space-y-2 py-1">
                {[1, 2].map((num) => (
                  <div key={num} className="w-full h-8 bg-white/5 border border-white/10 rounded-md p-1.5 flex items-center justify-between hover:border-accent-purple/35 transition-colors duration-300">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono text-[7px] text-gray-400">SARG_EDGE_NODE_0{num}</span>
                    </div>
                    <div className="flex gap-1">
                      <span className="w-4 h-1 bg-accent-purple/40 rounded-full" />
                      <span className="w-4 h-1 bg-accent-cyan/40 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlowingCard>

        </div>

        {/* Sovereign Security Banner */}
        <GlowingCard 
          className="p-8 bg-[#050814]/40 backdrop-blur-xl border border-white/5 relative overflow-hidden mt-12"
          glowColor="rgba(139, 92, 246, 0.15)"
        >
          <div className="absolute inset-0 tech-grid-dots opacity-20 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="space-y-2 max-w-2xl">
              <h3 className="font-heading font-bold text-xl text-white">Bharat Sovereign Intelligence Matrix</h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                By maintaining independent weights, air-gapped node runtimes, and local computational grids, SARGVISION secures national compute sovereignty for the future builders of Bharat.
              </p>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-accent-purple/10 border border-accent-purple/20 text-accent-purple shrink-0 text-xs font-bold uppercase tracking-widest font-mono">
              <CheckCircle2 className="w-4 h-4 text-accent-purple" />
              Sovereign Grid Secure
            </div>
          </div>
        </GlowingCard>
      </div>
    </SubpageLayout>
  );
}
