"use client";

import React from "react";
import SubpageLayout from "@/components/shared/subpage-layout";
import { GlowingCard } from "@/components/ui/glowing-card";
import { Sparkles, FlaskConical, Binary, Radio, Cpu } from "lucide-react";

export default function LabsPage() {
  const projects = [
    {
      title: "Project Trishul: Edge Defense Autonomy",
      status: "Incubating",
      icon: <Radio className="w-5 h-5 text-accent-cyan" />,
      desc: "Distributed cognitive frameworks running on low-power radio edge nodes to monitor remote sovereign borders and ensure critical telemetry stays active without cloud connection.",
    },
    {
      title: "Project Charaka: Vernacular Healthcare RAG",
      status: "Active Alpha",
      icon: <Binary className="w-5 h-5 text-accent-purple" />,
      desc: "Interactive medical diagnostics and localized pharmaceutical guidance systems natively operating in rural dialects to support community health networks.",
    },
    {
      title: "Project Agni: Micro-Grid Load Balancer",
      status: "Concept Core",
      icon: <Cpu className="w-5 h-5 text-accent-blue" />,
      desc: "Agentic reinforcement learning nodes designed to autonomously balance decentralized solar storage systems in remote off-grid districts.",
    },
  ];

  return (
    <SubpageLayout
      title="SargLabs: Incubation Hub"
      subtitle="Exploring speculative deep-tech architectures and edge systems built to protect and empower sovereign communities throughout Bharat."
      tagline="Experimental Nodes"
      accentColor="purple"
    >
      <div className="space-y-16">
        {/* Intro */}
        <div className="relative p-8 rounded-3xl glass-morphic bg-dark-panel/20 space-y-6">
          <div className="flex items-center gap-3">
            <FlaskConical className="w-8 h-8 text-accent-purple animate-pulse" />
            <h2 className="font-heading font-bold text-2xl text-white">Speculative Deep-Tech Incubation</h2>
          </div>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-4xl">
            SargLabs represents SARGVISION's sandbox for advanced cognitive computing. Here, our research groups look beyond standard school materials and enterprise automation to develop critical software layers for edge telemetry, energy distribution, and rural healthcare systems.
          </p>
        </div>

        {/* Labs Projects */}
        <div className="space-y-8">
          <h3 className="font-heading font-bold text-xl text-white tracking-tight">Active Experimental Nodes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <GlowingCard
                key={i}
                className="p-6 bg-dark-panel/40 flex flex-col justify-between"
                glowColor="rgba(139, 92, 246, 0.12)"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                      {project.icon}
                    </div>
                    <span className="text-[9px] font-bold text-accent-purple tracking-widest uppercase bg-accent-purple/10 px-2 py-0.5 rounded-full border border-accent-purple/20">
                      {project.status}
                    </span>
                  </div>
                  <h4 className="font-heading font-semibold text-base text-white leading-snug">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">
                    {project.desc}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-white/5 mt-4 text-[10px] text-gray-500 font-semibold tracking-wider uppercase font-mono">
                  SARG-LABS-NODE // 00{i+1}
                </div>
              </GlowingCard>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
