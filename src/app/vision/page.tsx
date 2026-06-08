"use client";

import React from "react";
import SubpageLayout from "@/components/shared/subpage-layout";
import { GlowingCard } from "@/components/ui/glowing-card";
import { Flag, Shield, Landmark, BookOpen, Quote } from "lucide-react";

export default function VisionPage() {
  return (
    <SubpageLayout
      title="The Sovereign Vision"
      subtitle="Fulfilling a national promise: making sure every child, family, and enterprise throughout Bharat has instant access to world-class learning and cognitive support, independent of their zip code."
      tagline="National Impact"
      accentColor="purple"
    >
      <div className="space-y-16">
        {/* Core Vision Statement */}
        <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden glass-morphic bg-[#0B1020]/20 border border-white/5 space-y-6">
          <Quote className="absolute top-6 right-8 w-20 h-20 text-accent-purple/10 pointer-events-none" />
          
          <h2 className="font-heading font-extrabold text-2xl md:text-4xl text-white tracking-tight leading-snug max-w-4xl">
            "A child’s future should not be decided by their pincode."
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-3xl">
            For generations, the quality of a student's education, the resources available to their teachers, and the career paths open to them have been restricted by their geographical location. SARGVISION is changing this dynamic. By bringing low-latency, highly customized cognitive voice assistants directly to the edge, we are ensuring world-class instruction is democratized.
          </p>
        </div>

        {/* Impact Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlowingCard className="p-6 space-y-4 bg-dark-panel/30" glowColor="rgba(139, 92, 246, 0.15)">
            <Flag className="w-6 h-6 text-accent-cyan" />
            <h3 className="font-heading font-semibold text-lg text-white">Geographic Inclusion</h3>
            <p className="text-gray-400 text-xs leading-relaxed font-light">
              Scaling advanced educational systems across Tier-2 and Tier-3 rural areas, helping deliver first-class educational instruction directly to remote classrooms.
            </p>
          </GlowingCard>

          <GlowingCard className="p-6 space-y-4 bg-dark-panel/30" glowColor="rgba(139, 92, 246, 0.15)">
            <Landmark className="w-6 h-6 text-accent-purple" />
            <h3 className="font-heading font-semibold text-lg text-white">Linguistic Autonomy</h3>
            <p className="text-gray-400 text-xs leading-relaxed font-light">
              Natively supporting 11 regional languages out-of-the-box, ensuring students learn complex subjects in their primary spoken languages.
            </p>
          </GlowingCard>

          <GlowingCard className="p-6 space-y-4 bg-dark-panel/30" glowColor="rgba(139, 92, 246, 0.15)">
            <Shield className="w-6 h-6 text-accent-blue" />
            <h3 className="font-heading font-semibold text-lg text-white">National Resilience</h3>
            <p className="text-gray-400 text-xs leading-relaxed font-light">
              Maintaining critical cognitive frameworks entirely within Bharat's legal and computational borders, securing sovereign infrastructure for generations to come.
            </p>
          </GlowingCard>
        </div>
      </div>
    </SubpageLayout>
  );
}
