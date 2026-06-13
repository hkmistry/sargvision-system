"use client";

import React, { useState, useEffect } from "react";
import {
  Shield
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
      title: "TACTICAL INTELLIGENCE & OBJECT DETECTION",
      mission: "Total Situational Awareness.",
      coords: "LAT: 34.0837° N // LON: 74.7973° E",
      overview: "Deploying custom vision models and sovereign chat systems to deliver secure, real-time threat intelligence at the tactical frontier.",
      features: [
        {
          heading: "Military Object Detection",
          text: "Deploying state-of-the-art computer vision models for high-precision military object detection, engineered to perform in the rugged and unstructured environments of the Indian borders."
        },
        {
          heading: "Military Chatbot",
          text: "A secure, sovereign chatbot framework designed for tactical communication, providing soldiers and commanders with instant, profile-aware intelligence and operational support."
        }
      ],
      color: "blue",
      textGlow: "",
      borderColor: "border-blue-500/20",
      activeBorderColor: "border-blue-500/30",
      activeBg: "bg-blue-500/5",
      activeTextColor: "text-blue-400",
      videoSrc: "/videos/v1.mp4",
      capabilities: [
        { name: "Real-time Target Tracking", value: "99.4% ACCURACY" },
        { name: "Multi-Spectral Object Vision", value: "<15ms LATENCY" },
        { name: "Thermal Grid Signature Synthesis", value: "ACTIVE" },
        { name: "Perimeter Signal Synchronization", value: "SECURE" }
      ],
      bgAsset: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
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
      title: "ASTRAAI & ORBITAL EDGE",
      mission: "Autonomy in Orbit.",
      coords: "ALT: 540KM // ECC: 0.00014 // INC: 97.4°",
      overview: "Researching multi-agent AI frameworks and orbital edge computation payloads for sovereign space capabilities.",
      features: [
        {
          heading: "AstraAI",
          text: "A multi-agent AI framework designed for sovereign space capabilities, including constellation management and interplanetary mission agents."
        },
        {
          heading: "Space Edge Computing",
          text: "Researching and implementing AI processing directly on spacecraft, allowing for real-time data analysis and autonomous control without the latency of ground stations."
        }
      ],
      color: "indigo",
      textGlow: "",
      borderColor: "border-indigo-500/20",
      activeBorderColor: "border-indigo-500/30",
      activeBg: "bg-indigo-500/5",
      activeTextColor: "text-indigo-400",
      videoSrc: "/videos/v2.mp4",
      capabilities: [
        { name: "Telemetry Pipeline Ingestion", value: "OPTIMIZED" },
        { name: "Edge Inference Payload Execution", value: "1.2GB/S TELEM" },
        { name: "Constellation Link Synchronization", value: "STABLE" },
        { name: "Space-Grade Fault Tolerance", value: "ONLINE" }
      ],
      bgAsset: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-400">
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
      title: "MARITIME DOMAIN AWARENESS",
      mission: "Oceanic Sovereignty.",
      coords: "DEPTH: -450M // SECTOR: BAY_OF_BENGAL",
      overview: "Leveraging agentic intelligence platforms to coordinate maritime surveillance and domain awareness operations.",
      features: [
        {
          heading: "Autonomous Coordination",
          text: "Leveraging agentic AI to provide real-time situational awareness and coordination for maritime operations, ensuring constant monitoring and response capabilities across vast oceanic frontiers."
        }
      ],
      color: "blue",
      textGlow: "",
      borderColor: "border-blue-500/20",
      activeBorderColor: "border-blue-500/30",
      activeBg: "bg-blue-500/5",
      activeTextColor: "text-blue-400",
      videoSrc: "/videos/v3.mp4",
      capabilities: [
        { name: "Hydrophone Waveform Processing", value: "ACTIVE" },
        { name: "Littoral Acoustic Signature Filter", value: "STABLE" },
        { name: "Automated Coastal Radar Fusion", value: "98.9% SYNC" },
        { name: "Depth Topography Mapping", value: "STANDALONE" }
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
      "relative py-36 z-10 px-4 md:px-8 overflow-hidden bg-transparent"
    )}>



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
              <Shield className={cn("w-3.5 h-3.5", isDark ? "text-blue-500/80" : "text-[#2563EB]")} />
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-widest font-mono",
                isDark ? "text-gray-300" : "text-[#0F172A]"
              )}>
                Sovereign Defense Systems
              </span>
            </div>

            <h2 className={cn(
              "font-editorial font-semibold text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight",
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
              <span className={cn("w-1.5 h-1.5 rounded-full", isDark ? "bg-cyan-500/80" : "bg-[#2563EB]")} />
              <span className={isDark ? "text-neutral-400" : "text-[#0F172A] font-medium"}>SECURE NETWORK ACTIVE</span>
            </div>
            <div>SYS_TIME: {currentTime} // REGION: BHARAT</div>
            <div>TELEM_REF: #SARG-INTEL-99X</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Mobile Segmented Capsule Selectors (visible on mobile only) */}
          <div className="col-span-12 lg:hidden flex items-center justify-between p-1.5 rounded-2xl bg-slate-900/5 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 backdrop-blur-md select-none w-full mb-2">
            {verticals.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  suppressHydrationWarning
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "flex-grow py-3 px-3 rounded-xl text-center font-mono text-[10px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer outline-none focus:outline-none",
                    isActive
                      ? isDark
                        ? "bg-[#050816] text-white border border-slate-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
                        : "bg-white text-[#0F172A] border border-slate-200 shadow-sm"
                      : isDark
                        ? "text-neutral-500 hover:text-neutral-300"
                        : "text-[#64748B] hover:text-[#0F172A]"
                  )}
                >
                  // {item.domain}
                </button>
              );
            })}
          </div>

          {/* Desktop Left Sidebar Tabs (visible on desktop only) */}
          <div className="hidden lg:flex lg:flex-col lg:col-span-5 justify-between space-y-4 h-full">
            {verticals.map((item) => {
              const isActive = activeTab === item.id;
              const themeColorClass = isDark
                ? item.color === 'indigo'
                  ? isActive
                    ? 'border-indigo-500/30 bg-indigo-950/5 text-white shadow-sm'
                    : 'border-indigo-500/10 bg-[#0B1020]/40 text-neutral-400 hover:border-indigo-500/20 hover:bg-indigo-950/5'
                  : isActive
                    ? 'border-blue-500/30 bg-blue-950/5 text-white shadow-sm'
                    : 'border-blue-500/10 bg-[#0B1020]/40 text-neutral-400 hover:border-blue-500/20 hover:bg-blue-950/5'
                : isActive
                  ? 'bg-white border-2 border-slate-400 shadow-sm text-[#0F172A]'
                  : 'bg-white border border-[#E8ECF0] shadow-sm hover:border-[#C8D0DA] text-[#64748B]';

              return (
                <motion.button
                  suppressHydrationWarning
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  initial={{
                    opacity: 0,
                    y: 15
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2, scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  viewport={{ once: true, amount: 0.50 }}
                  transition={{
                    duration: 0.85,
                    ease: [0.16, 1, 0.3, 1],
                    delay: item.id * 0.12
                  }}
                  className={cn(
                    "flex-1 min-h-[170px] flex flex-col justify-between p-6 rounded-2xl transition-all duration-500 relative overflow-hidden group text-left will-change-transform cursor-pointer outline-none focus:outline-none focus-visible:outline-none",
                    isDark ? "border backdrop-blur-md" : "",
                    themeColorClass
                  )}
                >
                  <div className="absolute right-4 top-2 bottom-2 w-1/3 opacity-[0.03] pointer-events-none select-none font-mono text-[5px] text-right leading-tight overflow-hidden break-all">
                    {item.color === 'blue' && item.id === 0 ? 'SECURE_U01_LINK_ESTABLISHED' : item.color === 'indigo' ? 'ORBITAL_LINK_U02_SYNCED' : 'HYDRO_SENSOR_U03_ACTIVE'}
                  </div>

                  <div className="flex flex-col justify-between flex-1 relative z-20 pointer-events-none w-full h-full">
                    <div className="flex justify-between items-center w-full z-20 relative">
                      <div className="flex items-center gap-2">
                        <div className={cn(
                          "text-[9px] font-bold px-1.5 py-0.5 rounded border transition-all duration-500",
                          isDark
                            ? isActive
                              ? item.color === 'indigo' ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400' : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
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
                            ? item.color === 'indigo' ? 'text-indigo-400' : 'text-blue-400'
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
                        "text-3xl font-semibold uppercase tracking-tight leading-none transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isDark
                          ? isActive
                            ? 'text-white'
                            : 'text-neutral-400 group-hover:text-white transition-colors duration-1000'
                          : "text-[#0F172A]"
                      )}>
                        {item.name}
                      </div>
                      <div className={cn(
                        "mt-2 text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isDark
                          ? isActive
                            ? item.color === 'indigo' ? 'text-indigo-400/70' : 'text-blue-400/70'
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
                              ? item.color === 'indigo' ? 'text-indigo-400/50' : 'text-blue-400/50'
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
                        ? item.color === 'indigo' ? 'bg-indigo-500' : 'bg-blue-500'
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
                ? "border backdrop-blur-2xl bg-gradient-to-br from-[#080D18]/95 to-[#030609]/98 border-white/10 shadow-lg"
                : "bg-white border border-[#C8D0DA] shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            )}
          >
            <div className="p-8 md:p-10 flex flex-col justify-between h-full z-20 relative">
              <div className="space-y-6">
                {/* The Description Title & Mission */}
                <div className="space-y-4">
                  <h3 className={cn(
                    "text-3xl md:text-4xl font-bold tracking-tight font-editorial leading-tight transition-colors duration-300",
                    isDark ? "text-white" : "text-[#0F172A]"
                  )}>
                    {current.title}
                  </h3>
                  <div className="space-y-2">
                    <span className={cn(
                      "font-editorial italic text-xs md:text-sm block",
                      isDark ? "text-neutral-300" : "text-[#334155]"
                    )}>
                      The Mission: {current.mission}
                    </span>
                    {current.overview && (
                      <p className={cn(
                        "text-[13px] md:text-[14px] leading-relaxed tracking-wide font-body font-light mt-3 pt-3 border-t",
                        isDark ? "text-neutral-300 border-white/5" : "text-[#334155] border-slate-100"
                      )}>
                        {current.overview}
                      </p>
                    )}
                  </div>
                </div>

                {/* Features List with Theme Colored Borders */}
                <div className="space-y-8 pt-4">
                  {current.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className={cn(
                        "pl-4 border-l-2 transition-all duration-500 text-left",
                        current.color === 'indigo' 
                          ? "border-indigo-500/60 dark:border-indigo-400/40" 
                          : "border-blue-500/60 dark:border-blue-400/40"
                      )}
                    >
                      <h4 className={cn(
                        "font-sans font-bold text-[13px] md:text-[14px] uppercase tracking-tight leading-tight mb-1.5",
                        isDark ? "text-slate-200" : "text-[#1E293B]"
                      )}>
                        {feature.heading}
                      </h4>
                      <p className={cn(
                        "text-[12.5px] md:text-[14px] leading-relaxed font-light font-body",
                        isDark ? "text-neutral-400" : "text-[#475569]"
                      )}>
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 mt-8">
                <div className={cn(
                  "flex justify-between items-center font-mono text-[8px] px-1",
                  isDark ? "text-neutral-500" : "text-[#64748B]"
                )}>
                  <span>TELEMETRY VERIFICATION FEED // U0{current.id + 1}_PAYLOAD</span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    LIVE LINK
                  </span>
                </div>
                <div className={cn(
                  "relative h-[250px] md:h-[300px] overflow-hidden w-full transition-all duration-500",
                  isDark
                    ? cn(
                        "bg-neutral-950 rounded-2xl border",
                        current.color === 'indigo' 
                          ? 'border-indigo-500/20 shadow-sm' 
                          : 'border-blue-500/20 shadow-sm'
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
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
