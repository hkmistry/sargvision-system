"use client";

import React from "react";
import SubpageLayout from "@/components/shared/subpage-layout";
import { GlowingCard } from "@/components/ui/glowing-card";
import { GraduationCap, Briefcase, Landmark, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SolutionsPage() {
  const sectors = [
    {
      icon: <GraduationCap className="w-6 h-6 text-accent-cyan" />,
      title: "Education AI Systems",
      desc: "Deploying interactive multi-lingual cognitive assistants across rural school networks, helping bridge classroom shortages and bringing first-rate instruction to remote areas.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-accent-purple" />,
      title: "Autonomous Enterprise Agents",
      desc: "Delivering secure, localized virtual workers to handle complex back-office logistics, custom financial reporting, and vernacular customer service structures.",
    },
    {
      icon: <Landmark className="w-6 h-6 text-accent-blue" />,
      title: "Bharat Sovereign AI Cloud",
      desc: "Working in concert with national compute corridors and public ministries to keep telemetry, demographic insights, and operational data safe inside the country's boundaries.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Institutional Agentic Pipelines",
      desc: "Automating document audits, high-volume state registry requests, and large-scale public data analysis using secure, verifiable offline agents.",
    },
  ];

  return (
    <SubpageLayout
      title="Sovereign Solutions for a Growing Nation"
      subtitle="Engineering high-security, ultra-low latency AI architectures that empower government networks, educational spaces, and modern enterprise operations across Bharat."
      tagline="Enterprise Solutions"
      accentColor="blue"
    >
      <div className="space-y-16">
        {/* Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectors.map((sector, i) => (
            <GlowingCard
              key={i}
              className="p-6 md:p-8 space-y-4 bg-dark-panel/40 hover:-translate-y-1.5 flex flex-col justify-between"
              glowColor="rgba(59, 130, 246, 0.1)"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                    {sector.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-white">
                    {sector.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {sector.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 mt-4">
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-accent-cyan hover:text-white transition-colors duration-300 flex items-center gap-1 w-max group"
                >
                  Request Integration Briefing{" "}
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 duration-200" />
                </Link>
              </div>
            </GlowingCard>
          ))}
        </div>

        {/* Integration Architecture */}
        <div className="relative p-8 rounded-2xl glass-morphic bg-dark-panel/20 border border-white/5 space-y-6">
          <h3 className="font-heading font-bold text-2xl text-white">
            Architecture Blueprint: Distributed Sovereign Edge
          </h3>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            SARGVISION systems employ a hybrid edge-cloud layout. Large-scale models undergo training on protected national computing clusters, while specialized 3B/7B student models operate at the edge inside regional bureaus and school districts, maintaining seamless service even during local internet outages.
          </p>
          <div className="h-1 bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple rounded-full opacity-60" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center pt-2">
            <div>
              <div className="text-xl font-bold text-white font-heading">Llama-3-Sarg</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Base Model Stack</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white font-heading">Edge RTOS</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Compute Layer</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white font-heading">Zero-Trust</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Sovereign Security</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white font-heading">Direct Intent</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Audio Processing</div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
