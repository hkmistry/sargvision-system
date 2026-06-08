"use client";

import React, { useState, useEffect } from "react";
import {
  Shield,
  Target,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export default function StrategicVerticals() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeTab, setActiveTab] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState("");
  const [isClient, setIsClient] = useState(false);

  // Set hydration safety
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Update time for tactical telemetry headers
  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString());
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const verticals = [
    {
      id: 0,
      uid: "U01",
      label: "U01 Army",
      name: "Army",
      domain: "ARMY",
      title: "Tactical Intelligence & Object Detection",
      mission: "Total Situational Awareness.",
      coords: "LAT: 34.0837° N // LON: 74.7973° E",
      description: "Edge compilation engines optimized for remote border deployments. Running multi-spectral computer vision networks at under 15ms latency, SARGVISION classifies object signatures, drone threat envelopes, and unauthorized coordinates directly on the hardware edge without requiring internet connection.",
      color: "cyan",
      textGlow: "text-glow-cyan",
      borderColor: "border-cyan-500/25",
      activeBorderColor: "border-cyan-400/40",
      activeBg: "bg-cyan-500/10",
      activeTextColor: "text-cyan-400",
      videoSrc: "/videos/v1.mp4",
      capabilities: [
        { name: "Real-time Target Tracking", value: "99.4% ACCURACY" },
        { name: "Multi-Spectral Object Vision", value: "<15ms LATENCY" },
        { name: "Thermal Grid Signature Synthesis", value: "ACTIVE" },
        { name: "Sovereign Perimeter Shield Sync", value: "SECURE" }
      ],
      bgAsset: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="18" stroke="currentColor" strokeWidth="0.5" />
          <line x1="100" y1="5" x2="100" y2="195" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
          <line x1="5" y1="100" x2="195" y2="100" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
          <line x1="30" y1="30" x2="170" y2="170" stroke="currentColor" strokeWidth="0.3" opacity="0.2" />
          <line x1="170" y1="30" x2="30" y2="170" stroke="currentColor" strokeWidth="0.3" opacity="0.2" />
          <rect x="85" y="85" width="30" height="30" stroke="currentColor" strokeWidth="0.6" fill="none" />
          <circle cx="100" cy="100" r="4" fill="currentColor" opacity="0.7" />
          <path d="M100 82 L104 96 L100 100 L96 96 Z" fill="currentColor" opacity="0.3" />
        </svg>
      )
    },
    {
      id: 1,
      uid: "U02",
      label: "U02 Space",
      name: "Space",
      domain: "SPACE",
      title: "AstraAI & Orbital Edge",
      mission: "Autonomy in Orbit.",
      coords: "ALT: 540KM // ECC: 0.00014 // INC: 97.4°",
      description: "Low-power payload execution matrices custom-compiled for LEO satellites. Processes LEO telemetry on-orbit, optimizing downlink routing, weather anomaly synthesis, and enabling standalone aerospace navigation.",
      color: "purple",
      textGlow: "text-glow-purple",
      borderColor: "border-purple-500/25",
      activeBorderColor: "border-purple-400/40",
      activeBg: "bg-purple-500/10",
      activeTextColor: "text-purple-400",
      videoSrc: "/videos/v2.mp4",
      capabilities: [
        { name: "On-Orbit Weight Compiling", value: "OPTIMIZED" },
        { name: "LEO Satellite Routing Nets", value: "1.2GB/S TELEM" },
        { name: "Inter-Constellation Sync Matrix", value: "STABLE" },
        { name: "SoC Space Grade Radiation Shield", value: "ONLINE" }
      ],
      bgAsset: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-400">
          <ellipse cx="100" cy="100" rx="90" ry="26" stroke="currentColor" strokeWidth="0.5" transform="rotate(-25 100 100)" />
          <ellipse cx="100" cy="100" rx="90" ry="26" stroke="currentColor" strokeWidth="0.5" transform="rotate(35 100 100)" />
          <ellipse cx="100" cy="100" rx="90" ry="26" stroke="currentColor" strokeWidth="0.5" transform="rotate(90 100 100)" />
          <circle cx="100" cy="100" r="18" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="5" fill="currentColor" opacity="0.7" />
          <circle cx="153" cy="68" r="6" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="48" cy="138" r="4" fill="currentColor" opacity="0.35" />
          <circle cx="170" cy="115" r="3" fill="currentColor" opacity="0.25" />
          <path d="M100 10 L100 40 M100 160 L100 190 M10 100 L40 100 M160 100 L190 100" stroke="currentColor" strokeWidth="0.3" opacity="0.25" />
        </svg>
      )
    },
    {
      id: 2,
      uid: "U03",
      label: "U03 Navy",
      name: "Navy",
      domain: "NAVY",
      title: "Maritime Domain Awareness",
      mission: "Oceanic Sovereignty.",
      coords: "DEPTH: -450M // SECTOR: BAY_OF_BENGAL",
      description: "Acoustics engines on subsea hydrophone clusters and littoral grids, compiling subsea audio waveforms directly to classify vessel signatures and subsurface telemetry for absolute maritime dominance.",
      color: "blue",
      textGlow: "text-glow-blue",
      borderColor: "border-blue-500/25",
      activeBorderColor: "border-blue-400/40",
      activeBg: "bg-blue-500/10",
      activeTextColor: "text-blue-400",
      videoSrc: "/videos/v3.mp4",
      capabilities: [
        { name: "Hydrophone Waveform Synthesizer", value: "ACTIVE" },
        { name: "Littoral Acoustic Signature Filter", value: "STABLE" },
        { name: "Automated Coastal Radar Fusion", value: "98.9% SYNC" },
        { name: "Offline Depth Topography Engine", value: "STANDALONE" }
      ],
      bgAsset: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
          <path d="M0 145 Q50 110 100 145 Q150 180 200 145" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0 125 Q50 90 100 125 Q150 160 200 125" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0 105 Q50 70 100 105 Q150 140 200 105" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0 85 Q50 50 100 85 Q150 120 200 85" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0 65 Q50 30 100 65 Q150 100 200 65" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
          <circle cx="100" cy="190" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="100" cy="190" r="80" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 6" opacity="0.5" />
          <circle cx="100" cy="100" r="3" fill="currentColor" opacity="0.5" />
          <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="0.3" opacity="0.15" />
        </svg>
      )
    }
  ];

  const current = verticals[activeTab];

  return (
    <section id="strategic-verticals" className={cn(
      "relative py-36 z-10 px-4 md:px-8 overflow-hidden",
      isDark ? "bg-transparent" : "bg-[#F8FAFD]"
    )}>

      {/* Immersive Scanline & Glowing Text Styles */}
      <style>{`
        .scanlines-overlay {
          background: linear-gradient(
            rgba(18, 16, 16, 0) 50%, 
            rgba(0, 0, 0, 0.25) 50%
          ), linear-gradient(
            90deg, 
            rgba(255, 0, 0, 0.06), 
            rgba(0, 255, 0, 0.02), 
            rgba(0, 0, 255, 0.06)
          );
          background-size: 100% 3px, 6px 100%;
        }
        @keyframes scanlineSweep {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scanline {
          animation: scanlineSweep 8s linear infinite;
        }

        .text-glow-cyan {
          text-shadow: 0 0 12px rgba(6, 182, 212, 0.6);
        }
        .text-glow-purple {
          text-shadow: 0 0 12px rgba(168, 85, 247, 0.6);
        }
        .text-glow-blue {
          text-shadow: 0 0 12px rgba(59, 130, 246, 0.6);
        }
      `}</style>

      {/* Atmospheric technical background grid */}
      <div className={cn(
        "absolute inset-0 tech-grid-dots pointer-events-none",
        isDark ? "opacity-15" : "opacity-[0.08]"
      )} />

      <div className="max-w-7xl mx-auto space-y-16 relative">

        {/* Section Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.50 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-10"
        >
          <div className="space-y-4">
            <div className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md border",
              isDark
                ? "bg-white/5 border-white/10"
                : "bg-[#0F172A]/5 border-[#E2E8F0]"
            )}>
              <Shield className={cn("w-3.5 h-3.5 animate-pulse", isDark ? "text-accent-cyan" : "text-[#2563EB]")} />
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-widest font-mono",
                isDark ? "text-gray-300" : "text-[#0F172A]"
              )}>
                Sovereign Defense Systems
              </span>
            </div>

            <h2 className={cn(
              "font-heading font-bold text-4xl md:text-6xl tracking-tight",
              isDark ? "text-white" : "text-[#0F172A]"
            )}>
              Strategic Verticals
            </h2>

            <div className={cn(
              "flex items-center gap-3 font-mono text-xs tracking-[0.25em] uppercase select-none",
              isDark ? "text-neutral-400" : "text-[#64748B]"
            )}>
              <span>Observe</span>
              <span className={isDark ? "text-neutral-600" : "text-slate-200"}>//</span>
              <span>Assess</span>
              <span className={isDark ? "text-neutral-600" : "text-slate-200"}>//</span>
              <span>Act</span>
            </div>
          </div>

          {/* Telemetry data header */}
          <div className={cn(
            "w-full md:w-max flex flex-col items-end gap-1 font-mono text-[9px]",
            isDark ? "text-neutral-500" : "text-[#64748B]"
          )}>
            <div className="flex items-center gap-2">
              <span className={cn("w-1.5 h-1.5 rounded-full animate-ping", isDark ? "bg-cyan-500/80" : "bg-[#2563EB]")} />
              <span className={isDark ? "text-neutral-400" : "text-[#0F172A] font-medium"}>CLASSIFIED DATA PIPELINE ACTIVE</span>
            </div>
            <div>SYS_TIME: {currentTime} // REGION: BHARAT</div>
            <div>TELEM_REF: #SARG-INTEL-99X</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between space-y-4 h-full">
            {verticals.map((item) => {
              const isActive = activeTab === item.id;
              const themeColorClass = isDark
                ? item.color === 'cyan'
                  ? isActive
                    ? 'border-cyan-500/70 bg-cyan-500/[0.05] shadow-[0_0_32px_rgba(6,182,212,0.22),inset_0_0_12px_rgba(6,182,212,0.05)] text-white'
                    : 'border-cyan-500/55 bg-neutral-950/20 text-cyan-400/80 hover:border-cyan-500/75 hover:bg-cyan-500/[0.03] hover:shadow-[0_0_20px_rgba(6,182,212,0.16)] shadow-[0_0_14px_rgba(6,182,212,0.10)]'
                  : item.color === 'purple'
                    ? isActive
                      ? 'border-purple-500/70 bg-purple-500/[0.05] shadow-[0_0_32px_rgba(168,85,247,0.22),inset_0_0_12px_rgba(168,85,247,0.05)] text-white'
                      : 'border-purple-500/55 bg-neutral-950/20 text-purple-400/80 hover:border-purple-500/75 hover:bg-purple-500/[0.03] hover:shadow-[0_0_20px_rgba(168,85,247,0.16)] shadow-[0_0_14px_rgba(168,85,247,0.10)]'
                    : isActive
                      ? 'border-blue-500/70 bg-blue-500/[0.05] shadow-[0_0_32px_rgba(59,130,246,0.22),inset_0_0_12px_rgba(59,130,246,0.05)] text-white'
                      : 'border-blue-500/55 bg-neutral-950/20 text-blue-400/80 hover:border-blue-500/75 hover:bg-blue-500/[0.03] hover:shadow-[0_0_20px_rgba(59,130,246,0.16)] shadow-[0_0_14px_rgba(59,130,246,0.10)]'
                : isActive
                  ? 'bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] border-2 border-[#94A3B8] shadow-[0_15px_40px_rgba(15,23,42,0.12)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.18)] text-[#0F172A] -translate-y-1'
                  : 'bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] border-2 border-[#E2E8F0] shadow-[0_15px_40px_rgba(15,23,42,0.12)] hover:border-[#CBD5E1] hover:shadow-[0_25px_50px_rgba(15,23,42,0.18)] hover:-translate-y-1 text-[#64748B]';

              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  initial={{
                    opacity: 0,
                    y: 15
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.50 }}
                  transition={{
                    duration: 0.85,
                    ease: [0.16, 1, 0.3, 1],
                    delay: item.id * 0.12
                  }}
                  className={cn(
                    "flex-1 min-h-[170px] flex flex-col justify-between p-6 rounded-2xl transition-all duration-500 relative overflow-hidden group text-left will-change-transform cursor-pointer",
                    isDark ? "border-2 backdrop-blur-md" : "",
                    themeColorClass
                  )}
                >
                  <div className="absolute inset-0 scanlines-overlay opacity-[0.01] pointer-events-none" />

                  <div className="absolute right-4 top-2 bottom-2 w-1/3 opacity-[0.03] pointer-events-none select-none font-mono text-[5px] text-right leading-tight overflow-hidden break-all">
                    {item.color === 'cyan' ? 'COORD_LOCK_U01_LAT_LON_SECTOR_ARM_INFERENCE_UNDER_15MS_CALIBRATED' : item.color === 'purple' ? 'ORBIT_LOCK_U02_ALT_LEO_PAYLOAD_WEIGHTS_ROUTING_NOME_ACTIVE_TELEM' : 'HYDRO_LOCK_U03_DEPTH_AC_WAVES_SECTOR_SYNC_STANDALONE_COASTAL_FUS'}
                  </div>

                  <div className="flex flex-col justify-between flex-1 relative z-20 pointer-events-none w-full h-full">
                    <div className="flex justify-between items-center w-full z-20 relative">
                      <div className="flex items-center gap-2">
                        <div className={cn(
                          "text-[9px] font-bold px-1.5 py-0.5 rounded border transition-all duration-500",
                          isDark
                            ? isActive
                              ? item.color === 'cyan' ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : item.color === 'purple' ? 'bg-purple-500/10 border-purple-500/30 text-purple-400' : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                              : "bg-white/5 border-white/5 text-neutral-500"
                            : isActive
                              ? "bg-blue-50 border-[#2563EB]/30 text-[#2563EB]"
                              : "bg-slate-50 border-slate-100 text-[#64748B]"
                        )}>
                          {item.uid}
                        </div>
                      </div>

                      <div className={cn(
                        "transition-all duration-500",
                        isDark
                          ? isActive
                            ? item.color === 'cyan' ? 'text-cyan-400 text-glow-cyan' : item.color === 'purple' ? 'text-purple-400 text-glow-purple' : 'text-blue-400 text-glow-blue'
                            : "text-neutral-500 group-hover:text-neutral-400"
                          : isActive
                            ? "text-[#2563EB]"
                            : "text-[#64748B]/70 group-hover:text-[#2563EB]"
                      )}>
                        {item.id === 0 ? (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.446l-6.002-3.001a1.125 1.125 0 00-1.002 0l-6.002 3.001a1.125 1.125 0 01-1.502-1.002V5.75c0-.621.504-1.125 1.125-1.125L9 7.625m6-3.875L21 6.75v12.25c0 .621-.504 1.125-1.125 1.125l-4.875-2.438z" />
                          </svg>
                        ) : item.id === 1 ? (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
                            <circle cx="12" cy="12" r="5" />
                            <circle cx="12" cy="12" r="2" />
                            <path d="M12 3v18M3 12h18" opacity="0.3" />
                            <circle cx="16" cy="8" r="1.5" fill="currentColor" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10M12 2a15.3 15.3 0 00-4 10 15.3 15.3 0 004 10" />
                          </svg>
                        )}
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center z-20 relative py-4">
                      <div className={cn(
                        "text-4xl font-black uppercase font-heading tracking-tighter leading-none transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isDark
                          ? isActive
                            ? item.color === 'cyan' ? 'text-white text-glow-cyan' : item.color === 'purple' ? 'text-white text-glow-purple' : 'text-white text-glow-blue'
                            : 'text-neutral-400 group-hover:text-white transition-colors duration-1000'
                          : "text-[#0F172A]"
                      )}>
                        {item.name}
                      </div>
                      <div className={cn(
                        "mt-2 text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isDark
                          ? isActive
                            ? item.color === 'cyan' ? 'text-cyan-400/70' : item.color === 'purple' ? 'text-purple-400/70' : 'text-blue-400/70'
                            : 'text-neutral-600 group-hover:text-neutral-400 transition-colors duration-1000'
                          : "text-[#64748B]"
                      )}>
                        {item.mission}
                      </div>

                      <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-12 group-hover:opacity-100 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none mt-0 group-hover:mt-2.5">
                        <div className={cn(
                          "font-mono text-[7px] tracking-[0.3em] uppercase transition-colors duration-1000",
                          isDark
                            ? isActive
                              ? item.color === 'cyan' ? 'text-cyan-400/50' : item.color === 'purple' ? 'text-purple-400/50' : 'text-blue-400/50'
                              : 'text-neutral-500/60'
                            : "text-[#64748B]"
                        )}>
                          SYS_STATUS: ONLINE // LOAD_INDX: 0.14 // AUTH_CORRIDOR_{item.uid}
                        </div>
                      </div>
                    </div>

                    <div className={cn(
                      "border-t pt-3 w-full font-mono text-[8px] flex justify-between items-center tracking-wider z-20 relative",
                      isDark ? "border-white/10 text-neutral-500" : "border-[#E2E8F0] text-[#64748B]"
                    )}>
                      <span>{item.coords}</span>
                      <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isActive
                        ? item.color === 'cyan' ? 'bg-cyan-500 animate-ping shadow-[0_0_8px_#22d3ee]' : item.color === 'purple' ? 'bg-purple-500 animate-ping shadow-[0_0_8px_#c084fc]' : 'bg-blue-500 animate-ping shadow-[0_0_8px_#60a5fa]'
                        : 'bg-neutral-600'
                        }`} />
                    </div>

                  </div>

                  <div className="absolute bottom-16 right-2 w-36 h-36 opacity-30 pointer-events-none select-none mix-blend-screen">
                    {item.bgAsset}
                  </div>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.50 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className={cn(
              "col-span-12 lg:col-span-7 flex flex-col justify-between rounded-3xl overflow-hidden min-h-[600px] transition-all duration-700 relative will-change-transform",
              isDark
                ? cn(
                    "border border-2 backdrop-blur-2xl",
                    current.color === 'cyan'
                      ? 'bg-gradient-to-br from-[#0B1528]/80 to-[#030816]/98 border-cyan-400/60 shadow-[0_0_32px_rgba(6,182,212,0.18),inset_0_0_20px_rgba(6,182,212,0.04)]'
                      : current.color === 'purple'
                        ? 'border-purple-400/60 shadow-[0_0_32px_rgba(168,85,247,0.18),inset_0_0_20px_rgba(168,85,247,0.04)]'
                        : 'border-blue-400/60 shadow-[0_0_32px_rgba(59,130,246,0.18),inset_0_0_20px_rgba(59,130,246,0.04)]'
                  )
                : "bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            )}
          >
            <div className="absolute inset-0 scanlines-overlay opacity-[0.02] pointer-events-none z-10" />

            <div className="p-8 md:p-10 flex flex-col justify-between h-full z-20 relative">
              <div className="space-y-8">
                <div className={cn(
                  "flex justify-between items-center font-mono text-[9px] tracking-wider",
                  isDark ? "text-neutral-500" : "text-[#64748B]"
                )}>
                  <div className="flex items-center gap-2">
                    <div className={cn("font-bold px-2 py-0.5 rounded border transition-colors duration-500",
                      isDark
                        ? current.color === 'cyan'
                          ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.15)]'
                          : current.color === 'purple'
                            ? 'bg-purple-500/10 border-purple-500/30 text-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.15)]'
                            : 'bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.15)]'
                        : current.color === 'cyan'
                          ? 'bg-cyan-50 border-cyan-200 text-cyan-600'
                          : current.color === 'purple'
                            ? 'bg-purple-50 border-purple-200 text-purple-600'
                            : 'bg-blue-50 border-blue-200 text-blue-600'
                    )}>
                      {current.uid}
                    </div>
                    <div className={cn(
                      "font-bold transition-colors duration-500",
                      isDark ? current.activeTextColor : (current.color === 'cyan' ? 'text-cyan-600' : current.color === 'purple' ? 'text-purple-600' : 'text-blue-600')
                    )}>
                      {current.domain} // SOVEREIGN_INTELLIGENCE // SECURE
                    </div>
                  </div>
                  <div className="opacity-60">{current.coords}</div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className={cn(
                      "font-mono text-[10px] tracking-widest uppercase",
                      isDark ? "text-neutral-500" : "text-[#64748B]"
                    )}>
                      Sovereign Domain
                    </div>
                    <h3 className={cn(
                      "text-3xl md:text-4xl font-bold tracking-tight font-heading leading-tight transition-colors duration-500",
                      isDark ? cn("text-white", current.textGlow) : "text-[#0F172A]"
                    )}>
                      {current.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className={cn(
                      "flex items-center gap-2 text-[10px] font-mono",
                      isDark ? "text-neutral-400" : "text-[#64748B]"
                    )}>
                      <Target className={cn(
                        "w-3.5 h-3.5 transition-colors duration-500",
                        isDark 
                          ? (current.color === 'cyan' ? 'text-cyan-400' : current.color === 'purple' ? 'text-purple-400' : 'text-blue-400')
                          : (current.color === 'cyan' ? 'text-cyan-600' : current.color === 'purple' ? 'text-purple-600' : 'text-blue-600')
                      )} />
                      <div className={cn(
                        "uppercase font-bold tracking-widest",
                        isDark ? "text-white/95" : "text-[#0F172A]"
                      )}>
                        Mission: "{current.mission}"
                      </div>
                    </div>

                    <p className={cn(
                      "text-xs md:text-sm leading-relaxed font-light font-body",
                      isDark ? "text-neutral-400" : "text-[#475569]"
                    )}>
                      {current.description}
                    </p>
                  </div>
                </div>

                <div className={cn(
                  "border-t pt-6 space-y-4",
                  isDark ? "border-white/[0.04]" : "border-[rgba(15,23,42,0.08)]"
                )}>
                  <div className={cn(
                    "flex justify-between items-center text-[10px] font-mono font-bold",
                    isDark ? "text-neutral-400" : "text-[#64748B]"
                  )}>
                    <div>EXPANDABLE INTELLIGENCE BRIEFING</div>
                    <div className="flex items-center gap-1 opacity-60">
                      DECRYPTION ACTIVE
                      <ChevronRight className={cn(
                        "w-3 h-3 transition-transform duration-500 rotate-90",
                        isDark
                          ? (current.color === 'cyan' ? 'text-cyan-400' : current.color === 'purple' ? 'text-purple-400' : 'text-blue-400')
                          : (current.color === 'cyan' ? 'text-cyan-600' : current.color === 'purple' ? 'text-purple-600' : 'text-blue-600')
                      )} />
                    </div>
                  </div>

                  <div className={cn(
                    "grid grid-cols-2 gap-px border overflow-hidden rounded-xl relative transition-all duration-500",
                    isDark
                      ? cn("bg-white/[0.04]", current.color === 'cyan' ? 'border-cyan-500/30' : current.color === 'purple' ? 'border-purple-500/30' : 'border-blue-500/30')
                      : cn("bg-[#F8FAFD]", current.color === 'cyan' ? 'border-cyan-200' : current.color === 'purple' ? 'border-purple-200' : 'border-blue-200')
                  )}>
                    {current.capabilities.map((cap, index) => (
                      <div
                        key={index}
                        className={cn(
                          "font-mono p-3 text-[9px] flex flex-col justify-between gap-1.5",
                          isDark ? "bg-[#030816]/95" : "bg-white"
                        )}
                      >
                        <div className={cn(
                          "select-none uppercase tracking-wider",
                          isDark ? "text-neutral-500/80" : "text-[#64748B]"
                        )}>{cap.name}</div>
                        <div className={cn(
                          "font-bold transition-colors duration-500",
                          isDark 
                            ? (current.color === 'cyan' ? 'text-cyan-400 text-glow-cyan' : current.color === 'purple' ? 'text-purple-400 text-glow-purple' : 'text-blue-400 text-glow-blue')
                            : (current.color === 'cyan' ? 'text-cyan-600' : current.color === 'purple' ? 'text-purple-600' : 'text-blue-600')
                        )}>
                          {cap.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={cn(
                "mt-8 relative h-[250px] md:h-[300px] overflow-hidden w-full transition-all duration-500",
                isDark
                  ? cn(
                      "bg-neutral-950 rounded-2xl border shadow-[0_0_30px_rgba(0,0,0,0.5)]",
                      current.color === 'cyan' 
                        ? 'border-cyan-500/35 shadow-[0_0_15px_rgba(6,182,212,0.04)]' 
                        : current.color === 'purple' 
                          ? 'border-purple-500/35 shadow-[0_0_15px_rgba(168,85,247,0.04)]' 
                          : 'border-blue-500/35 shadow-[0_0_15px_rgba(59,130,246,0.04)]'
                    )
                  : "bg-neutral-950 rounded-xl border border-[rgba(15,23,42,0.08)] shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
              )}>
                <video
                  key={current.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={current.videoSrc} type="video/mp4" />
                </video>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
