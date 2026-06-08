"use client";

import React from "react";
import SubpageLayout from "@/components/shared/subpage-layout";
import { GlowingCard } from "@/components/ui/glowing-card";
import { Sparkles, Eye, Shield, Users, Landmark } from "lucide-react";

export default function AboutPage() {
  const pillars = [
    {
      icon: <Shield className="w-6 h-6 text-accent-cyan" />,
      title: "Sovereign Independence",
      desc: "Architecting foundational frameworks and models entirely customized for Bharat, eliminating foreign critical dependency.",
    },
    {
      icon: <Eye className="w-6 h-6 text-accent-purple" />,
      title: "Pincode Democratization",
      desc: "Delivering world-class cognitive capabilities and education systems directly to edge environments, independent of geographic limits.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-accent-blue" />,
      title: "Agentic Autonomy",
      desc: "Transitioning AI from simple prompt-response chats to self-directing, high-reliability autonomous systems.",
    },
    {
      icon: <Landmark className="w-6 h-6 text-emerald-400" />,
      title: "Institutional Trust",
      desc: "Forging partnerships with national institutions, educational boards, and secure federal bureaus.",
    },
  ];

  return (
    <SubpageLayout
      title="The Future of Sovereign Intelligence"
      subtitle="SARGVISION is a deep-tech AI enterprise building the foundational architectures, models, and edge infrastructure that power a cognitively independent Bharat."
      tagline="Founding Pillars"
      accentColor="purple"
    >
      <div className="space-y-16">
        {/* Core Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-gray-300 leading-relaxed font-light text-base md:text-lg">
            <p>
              Founded at the intersection of cinematic vision and hard computational physics, SARGVISION was established to answer a critical sovereign imperative:{" "}
              <strong className="text-white font-medium">Bharat must own its cognitive infrastructure.</strong>
            </p>
            <p>
              As the world enters the era of agentic computing, SARGVISION is engineering state-of-the-art autonomous models, ultra-low latency voice speech architectures, and distributed edge hardware modules.
            </p>
            <p>
              We believe artificial intelligence is not a generic service to be imported—it is a sovereign national capability that must reflect the linguistic richness, cultural context, and systemic needs of 1.4 billion people.
            </p>
          </div>
          
          <GlowingCard className="p-8 space-y-6 bg-[#0B1020]/30" glowColor="rgba(139, 92, 246, 0.2)">
            <h3 className="font-heading font-semibold text-xl text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-accent-purple" />
              The Sovereign Manifesto
            </h3>
            <blockquote className="border-l-2 border-accent-purple pl-4 text-sm text-gray-400 italic leading-relaxed">
              "We do not build software to capture attention or trade speculative coins. We forge deep-tech systems that build secondary school lesson plans, analyze complex logistics in local dialects, and secure institutional databases at the edge. SARGVISION is intelligence for nation-building."
            </blockquote>
            <div className="text-xs text-gray-500 font-semibold tracking-wider uppercase">
              &mdash; SARGVISION Systems Board
            </div>
          </GlowingCard>
        </div>

        {/* Pillars Grid */}
        <div className="space-y-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white tracking-tight">
            Our Architectural Foundations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <GlowingCard
                key={i}
                className="p-6 md:p-8 space-y-4 bg-dark-panel/40 hover:-translate-y-1.5"
                glowColor="rgba(139, 92, 246, 0.1)"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                    {pillar.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-white">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </GlowingCard>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
