"use client";

import React from "react";
import SubpageLayout from "@/components/shared/subpage-layout";
import { GlowingCard } from "@/components/ui/glowing-card";
import { Sparkles, Terminal, Code, Cpu, ShieldAlert, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const roles = [
    {
      title: "Senior ML Compiler Engineer",
      dept: "SargLabs Core Systems",
      loc: "Bengaluru, India (Hybrid)",
      icon: <Terminal className="w-5 h-5 text-accent-cyan" />,
      desc: "Optimize foundational audio and speech intent weights for execution on bare-metal ARM/x86 SoC edge platforms.",
    },
    {
      title: "Foundational Speech Scientist",
      dept: "Linguistic Research Group",
      loc: "Bengaluru, India (Onsite)",
      icon: <Code className="w-5 h-5 text-accent-purple" />,
      desc: "Train next-generation multi-modal LLMs natively supporting multi-dialect speech blend patterns (e.g. Hinglish, Tanglish).",
    },
    {
      title: "Agentic Systems Architect",
      dept: "Autonomy Safety Board",
      loc: "Bengaluru, India (Hybrid)",
      icon: <Cpu className="w-5 h-5 text-accent-blue" />,
      desc: "Design zero-trust agent coordination pipelines to automate complex public-sector registry audits securely.",
    },
  ];

  return (
    <SubpageLayout
      title="Build the Agentic Universe"
      subtitle="Help SARGVISION forge the autonomous systems and sovereign intelligence grids that are building a cognitively independent Bharat."
      tagline="Join SARGVISION"
      accentColor="purple"
    >
      <div className="space-y-16">
        {/* Culture & Manifesto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-gray-300 leading-relaxed font-light">
            <p>
              We are not building another generic chat interface or speculative fintech platform. SARGVISION is a specialized deep-tech team of physicists, systems programmers, and machine learning architects.
            </p>
            <p>
              Our engineers spend their days optimizing tensor graph layouts, tuning custom audio capture rings, and compiling 3B models to run smoothly on extremely low-cost local computing appliances.
            </p>
            <p>
              If you are energized by hard engineering challenges and want to use your talents to make a profound national impact, SARGVISION is where you belong.
            </p>
          </div>
          
          <GlowingCard className="p-8 bg-[#0B1020]/30 space-y-6" glowColor="rgba(139, 92, 246, 0.15)">
            <h3 className="font-heading font-semibold text-lg text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-accent-purple" />
              SARGVISION Mission Guidelines
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed font-light">
              We operate with high agency, meticulous care, and a singular commitment to national resilience. We favor clean, high-performance systems engineering over trends, and focus on delivering reliable real-world outcomes in classrooms and institutions across the nation.
            </p>
          </GlowingCard>
        </div>

        {/* Roles List */}
        <div className="space-y-8">
          <h2 className="font-heading font-bold text-2xl text-white tracking-tight">
            Open Architectural Missions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((role, i) => (
              <GlowingCard
                key={i}
                className="p-6 bg-dark-panel/40 flex flex-col justify-between"
                glowColor="rgba(139, 92, 246, 0.1)"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                      {role.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-sm text-white leading-tight">
                        {role.title}
                      </h3>
                      <div className="text-[10px] text-gray-500 font-medium mt-1">
                        {role.dept}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-xs leading-relaxed font-light">
                    {role.desc}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between text-xs font-semibold">
                  <span className="text-gray-500">{role.loc}</span>
                  <Link
                    href="/contact"
                    className="text-accent-cyan hover:text-white flex items-center gap-1 group transition-colors duration-300"
                  >
                    Apply <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </GlowingCard>
            ))}
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
