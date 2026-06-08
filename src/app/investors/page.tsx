"use client";

import React from "react";
import SubpageLayout from "@/components/shared/subpage-layout";
import { GlowingCard } from "@/components/ui/glowing-card";
import { LineChart, BarChart3, TrendingUp, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function InvestorsPage() {
  const stats = [
    { label: "Sovereign TAM Envisioned", val: "$15B+", trend: "+24% CAGR" },
    { label: "Institutional Pilots Run", val: "100+", trend: "Across 4 States" },
    { label: "Vernacular Dialect Speed", val: "<45ms", trend: "Edge Optimized" },
    { label: "Data Telemetry Kept", val: "100%", trend: "Sovereign Secure" },
  ];

  return (
    <SubpageLayout
      title="Capital Partnerships for Sovereign Scale"
      subtitle="Join SARGVISION as we capitalize the development of national cognitive infrastructures, highly advanced speech models, and secure enterprise agent pipelines."
      tagline="Investor Relations"
      accentColor="blue"
    >
      <div className="space-y-16">
        {/* Core Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <GlowingCard
              key={i}
              className="p-6 bg-dark-panel/40 flex flex-col justify-between"
              glowColor="rgba(59, 130, 246, 0.12)"
            >
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{stat.label}</div>
              <div className="my-3 text-3xl font-heading font-extrabold text-white">{stat.val}</div>
              <div className="text-[10px] font-semibold text-accent-cyan flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> {stat.trend}
              </div>
            </GlowingCard>
          ))}
        </div>

        {/* Narrative & Pitch Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-gray-300 leading-relaxed font-light">
            <h3 className="font-heading font-bold text-2xl text-white">The Sovereign Compute Thesis</h3>
            <p>
              As geopolitical boundaries define the flow of computational resources, critical cognitive infrastructure cannot be dependent on foreign platforms. The country that commands its own deep-tech AI stack holds structural advantages in educational equity, public efficiency, and economic autonomy.
            </p>
            <p>
              SARGVISION partners with institutional capital entities who understand this long-term sovereign imperative. By focusing on highly robust edge deployments, CBSE and state-level curriculum mapping, and vernacular audio interfaces, we deliver defensible cognitive infrastructure with immense defensive value.
            </p>
          </div>

          <div className="lg:col-span-5">
            <GlowingCard className="p-8 bg-[#0B1020]/20 space-y-6" glowColor="rgba(59, 130, 246, 0.15)">
              <h4 className="font-heading font-semibold text-lg text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent-cyan" /> Secure Investor Portal
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed font-light">
                Registered institutional partners can access SARGVISION's detailed financial briefs, pilot outcome records, and sovereign ecosystem blueprints inside our encrypted data vault.
              </p>
              
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue hover:scale-105 duration-200 text-xs font-semibold text-white tracking-wider uppercase"
              >
                Access Investor Deck <ChevronRight className="w-4 h-4" />
              </Link>
            </GlowingCard>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
}
