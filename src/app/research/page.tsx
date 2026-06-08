"use client";

import React from "react";
import SubpageLayout from "@/components/shared/subpage-layout";
import { GlowingCard } from "@/components/ui/glowing-card";
import { Cpu, Network, AudioWaveform, FileText, Download } from "lucide-react";

export default function ResearchPage() {
  const papers = [
    {
      title: "Sarg-Audio-1: Native Multilingual Speech-to-Intent Architecture",
      desc: "Introducing a single-stage neural model that interprets spoken dialect intent directly, circumventing high-latency intermediate translation steps.",
      author: "SARGVISION Labs, 2026",
      tag: "Speech Synthesis",
    },
    {
      title: "Low-Power Edge Cognitive Inference for Sovereign Classrooms",
      desc: "Compiling 3B parameter models to run at &lt;50ms response loops on low-cost single-board computers.",
      author: "SARGVISION Systems Research, 2025",
      tag: "Edge Computing",
    },
    {
      title: "Agentic Reasoning in High-Reliability Public Infrastructures",
      desc: "Defining verification and compliance criteria for autonomous systems operating across public record archives.",
      author: "Autonomous Safety Board, 2026",
      tag: "Agentic Autonomy",
    },
  ];

  return (
    <SubpageLayout
      title="Foundational Deep-Tech Research"
      subtitle="Engineering proprietary speech systems, edge compiling paradigms, and high-reliability agentic frameworks to power independent cognitive infrastructure."
      tagline="Research Publications"
      accentColor="cyan"
    >
      <div className="space-y-16">
        {/* Core Research Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <GlowingCard className="p-6 space-y-4 bg-dark-panel/40" glowColor="rgba(6, 182, 212, 0.1)">
            <AudioWaveform className="w-8 h-8 text-accent-cyan" />
            <h3 className="font-heading font-semibold text-lg text-white">Direct Speech-to-Intent</h3>
            <p className="text-gray-400 text-xs leading-relaxed font-light">
              Designing single-layer audio networks that interpret regional dialects natively, bypassing standard Speech-to-Text latency bottlenecks.
            </p>
          </GlowingCard>

          <GlowingCard className="p-6 space-y-4 bg-dark-panel/40" glowColor="rgba(6, 182, 212, 0.1)">
            <Cpu className="w-8 h-8 text-accent-purple" />
            <h3 className="font-heading font-semibold text-lg text-white">Hardware-Aware Compilation</h3>
            <p className="text-gray-400 text-xs leading-relaxed font-light">
              Compiling deep-tech weights directly into bare-metal instructions for optimized execution on consumer-grade processing chips.
            </p>
          </GlowingCard>

          <GlowingCard className="p-6 space-y-4 bg-dark-panel/40" glowColor="rgba(6, 182, 212, 0.1)">
            <Network className="w-8 h-8 text-accent-blue" />
            <h3 className="font-heading font-semibold text-lg text-white">Agentic Verification</h3>
            <p className="text-gray-400 text-xs leading-relaxed font-light">
              Creating formal validation protocols to keep autonomous systems operating predictably and safely in complex public networks.
            </p>
          </GlowingCard>
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          <h2 className="font-heading font-bold text-2xl text-white tracking-tight">
            Scientific Publications & Technical Briefings
          </h2>
          <div className="space-y-4">
            {papers.map((paper, i) => (
              <GlowingCard
                key={i}
                className="p-6 bg-[#0B1020]/20 hover:border-white/10"
                glowColor="rgba(6, 182, 212, 0.08)"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-accent-cyan tracking-wider uppercase bg-accent-cyan/10 px-2 py-0.5 rounded-full border border-accent-cyan/20">
                      {paper.tag}
                    </span>
                    <h3 className="font-heading font-semibold text-lg text-white">
                      {paper.title}
                    </h3>
                    <p className="text-gray-400 text-xs font-light max-w-3xl">
                      {paper.desc}
                    </p>
                    <div className="text-[11px] text-gray-500 font-medium">
                      {paper.author}
                    </div>
                  </div>
                  
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-xs text-white tracking-wider font-semibold self-start md:self-center transition-colors duration-300">
                    <Download className="w-3.5 h-3.5" /> PDF
                  </button>
                </div>
              </GlowingCard>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
