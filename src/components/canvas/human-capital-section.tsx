import React, { useEffect, useState, useRef } from 'react';
import { motion, animate, useInView, useMotionValue } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export default function HumanCapitalSection() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const [isMounted, setIsMounted] = useState(false);
    const [activeTab, setActiveTab] = useState<'score' | 'radar'>('score');
    
    // Sci-Fi AI Digital Twin Core progress states
    const [phase, setPhase] = useState<'reset' | 'scanning' | 'syncing' | 'stabilized'>('reset');
    const [rippleActive, setRippleActive] = useState(false);

    // High-Precision Instrumentation scroll-trigger
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.3 });
    const motionProgress = useMotionValue(0);
    const [displayProgress, setDisplayProgress] = useState(0);

    useEffect(() => {
        setIsMounted(true);
        if (isInView) {
            setPhase('scanning');
            
            // Step 1: Ingesting/scanning phase (800ms scan)
            const t1 = setTimeout(() => {
                setPhase('syncing');
                
                // Step 2: Smooth animated progress from 0% to 85% with cinema deceleration curve
                const controls = animate(motionProgress, 85, {
                    duration: 2.2,
                    ease: [0.16, 1, 0.3, 1],
                    onUpdate: (latest) => {
                        setDisplayProgress(Math.round(latest));
                    },
                    onComplete: () => {
                        setPhase('stabilized');
                        setRippleActive(true);
                        setTimeout(() => {
                            setRippleActive(false);
                        }, 1200);
                    }
                });
                
                return () => controls.stop();
            }, 800);

            return () => clearTimeout(t1);
        } else {
            // Reset state when scrolled out of view to re-trigger the refresh sequence on next scroll
            setPhase('reset');
            motionProgress.set(0);
            setDisplayProgress(0);
        }
    }, [isInView]);

    // Spark pointer dot coordinates calculation for SVG progress arc
    const radius = 80;
    const center = 100;
    const angle = (displayProgress / 100) * 2 * Math.PI;
    const sparkX = center + radius * Math.cos(angle);
    const sparkY = center + radius * Math.sin(angle);

    return (
        <section id="human-capital" className="relative w-full py-36 px-6 md:px-12 max-w-7xl mx-auto z-10 bg-transparent overflow-hidden">
            
            {/* Custom Embedded Keyframes for sci-fi HUD elements */}
            <style>{`
                @keyframes sciFiFloat {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-8px) rotate(0.5deg); }
                }
                @keyframes sciFiScan {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes sciFiRipple {
                    0% { transform: scale(0.85); opacity: 0.9; }
                    100% { transform: scale(1.35); opacity: 0; }
                }
                @keyframes sciFiPulse {
                    0%, 100% { opacity: 0.12; filter: blur(50px) drop-shadow(0 0 10px rgba(6, 182, 212, 0.15)); }
                    50% { opacity: 0.38; filter: blur(60px) drop-shadow(0 0 25px rgba(6, 182, 212, 0.4)); }
                }
                @keyframes scoreBar1 {
                    0%, 100% { width: 92%; }
                    50% { width: 88%; }
                }
                @keyframes scoreBar2 {
                    0%, 100% { width: 78%; }
                    50% { width: 82%; }
                }
                @keyframes scoreBar3 {
                    0%, 100% { width: 85%; }
                    50% { width: 80%; }
                }
                @keyframes activeBreathing {
                    0%, 100% { opacity: 0.85; filter: drop-shadow(0 0 2px rgba(6, 182, 212, 0.45)); }
                    50% { opacity: 1; filter: drop-shadow(0 0 5px rgba(6, 182, 212, 0.75)); }
                }
            `}</style>

            {/* Main Premium Widescreen Layout Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch relative z-10">

                {/* LEFT COMPONENT: The Holographic Radar Core (5 Cols) */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.42 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-5 relative"
                >
                  <div className={cn(
                    "w-full h-full relative rounded-3xl p-8 flex flex-col justify-between overflow-hidden min-h-[500px] group transition-all duration-700 will-change-transform",
                    isDark
                      ? "border-2 border-cyan-500/60 bg-gradient-to-br from-[#0B1528]/85 to-[#030816]/95 backdrop-blur-2xl hover:border-cyan-400/80 shadow-[0_0_28px_rgba(6,182,212,0.22),inset_0_0_20px_rgba(6,182,212,0.05)] hover:shadow-[0_0_55px_rgba(6,182,212,0.32)]"
                      : "bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md"
                  )}>
                    {/* Futuristic Background Sci-Fi Grid Dot Pattern */}
                    <div className={cn("absolute inset-0 tech-grid-dots pointer-events-none", isDark ? "opacity-10" : "opacity-[0.04]")} />

                    {/* Animated Breathing Neon Backdrop Glow */}
                    {isDark && (
                      <div 
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-cyan-500/5 pointer-events-none"
                          style={{
                              animation: 'sciFiPulse 6s ease-in-out infinite'
                          }}
                      />
                    )}

                    {/* Top Telemetry Header */}
                    <div className={cn(
                      "flex justify-between items-center font-mono text-[10px] tracking-[0.2em] select-none",
                      isDark ? "text-neutral-400" : "text-[#475569]"
                    )}>
                        <span>SYS.LOC // DIGITAL_TWIN_CORE</span>
                        <span className="flex items-center gap-2">
                            <span className={cn(
                              "w-1.5 h-1.5 rounded-full animate-pulse",
                              phase === 'reset' ? 'bg-amber-400' : 'bg-cyan-400',
                              isDark && (phase === 'reset' ? "shadow-[0_0_8px_#fbbf24]" : "shadow-[0_0_8px_#22d3ee]")
                            )} />
                            MATRIX_ACTIVE
                        </span>
                    </div>

                    {/* Premium Animated Holographic Sonar Core */}
                    <div className="my-auto flex items-center justify-center relative py-6 select-none" ref={containerRef}>
                        <motion.div 
                            initial={{ scale: 0.85 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true, amount: 0.42 }}
                            transition={{ type: "spring", stiffness: 22, damping: 18, mass: 1.8, delay: 0.15 }}
                            className="relative flex items-center justify-center"
                        >
                            {/* Concentric Rotating Dash HUD Ring */}
                            <div 
                                className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-cyan-500/10 pointer-events-none"
                                style={{
                                    animation: phase === 'scanning' 
                                        ? 'sciFiScan 12s linear infinite' 
                                        : phase === 'syncing'
                                        ? 'sciFiScan 16s linear infinite'
                                        : 'sciFiScan 30s linear infinite'
                                }}
                            />

                            {/* Outer Cyan Circle Frame */}
                            <div className={cn(
                              "w-[240px] h-[240px] rounded-full relative flex items-center justify-center border",
                              isDark
                                ? "border-cyan-500/15 shadow-[inset_0_0_30px_rgba(6,182,212,0.06)] bg-gradient-to-b from-[#0B1528]/35 to-[#020512]/65 backdrop-blur-xl"
                                : "border-slate-100 shadow-sm bg-slate-50"
                            )}>

                                {/* Concentric Inner Guides */}
                                <div className="absolute w-[172px] h-[172px] rounded-full border border-dashed border-cyan-500/8 pointer-events-none" />
                                <div className={cn(
                                  "absolute w-[120px] h-[120px] rounded-full border pointer-events-none",
                                  isDark
                                    ? "border-cyan-500/15 bg-gradient-to-b from-neutral-950/98 to-[#020512]/100 shadow-[0_8px_32px_rgba(0,0,0,0.85),inset_0_0_12px_rgba(6,182,212,0.04)] pointer-events-none"
                                    : "border-slate-100 bg-white shadow-sm"
                                )} />

                                {/* Active Progress Arc SVG */}
                                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 200 200">
                                    <defs>
                                        <radialGradient id="innerGlassGradient" cx="50%" cy="50%" r="50%">
                                            {isDark ? (
                                                <>
                                                    <stop offset="0%" stopColor="#0B1528" stopOpacity="0.8" />
                                                    <stop offset="80%" stopColor="#030816" stopOpacity="0.95" />
                                                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.06" />
                                                </>
                                            ) : (
                                                <>
                                                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                                                    <stop offset="80%" stopColor="#F8FAFC" stopOpacity="0.98" />
                                                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.02" />
                                                </>
                                            )}
                                        </radialGradient>
                                    </defs>

                                    {/* 1. INSTRUMENTATION LAYER (Thin 1px tick marks every 10 degrees, leaving gap for top and bottom annotations) */}
                                    {Array.from({ length: 36 }).map((_, i) => {
                                        if (i === 0 || i === 18) return null;
                                        const angleDeg = i * 10;
                                        const angleRad = (angleDeg * Math.PI) / 180;
                                        const rOuter = 93;
                                        const rInner = 90.5; // Shorter length (2.5px) for a highly polished gauge look
                                        const x1 = (100 + rInner * Math.cos(angleRad)).toFixed(3);
                                        const y1 = (100 + rInner * Math.sin(angleRad)).toFixed(3);
                                        const x2 = (100 + rOuter * Math.cos(angleRad)).toFixed(3);
                                        const y2 = (100 + rOuter * Math.sin(angleRad)).toFixed(3);
                                        return (
                                            <line
                                                key={i}
                                                x1={x1}
                                                y1={y1}
                                                x2={x2}
                                                y2={y2}
                                                className="stroke-cyan-500/15"
                                                strokeWidth="0.75"
                                            />
                                        );
                                    })}

                                    {/* Static thin outer track limit line */}
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="93"
                                        stroke="rgba(6, 182, 212, 0.1)"
                                        strokeWidth="0.5"
                                        fill="transparent"
                                    />

                                    {/* 2. SEGMENTED RADIAL PROGRESS RING (60 thin, rectangular, evenly spaced segments) */}
                                    {Array.from({ length: 60 }).map((_, i) => {
                                        const angleDeg = i * 6; // 360 / 60 = 6 degrees per segment
                                        const angleRad = (angleDeg * Math.PI) / 180;
                                        
                                        // Perfectly circular alignment at R=76 to R=82
                                        const rInner = 76;
                                        const rOuter = 82;
                                        
                                        const x1 = (100 + rInner * Math.cos(angleRad)).toFixed(3);
                                        const y1 = (100 + rInner * Math.sin(angleRad)).toFixed(3);
                                        const x2 = (100 + rOuter * Math.cos(angleRad)).toFixed(3);
                                        const y2 = (100 + rOuter * Math.sin(angleRad)).toFixed(3);
                                        
                                        // Threshold for clockwise progressive lighting
                                        const threshold = (i / 60) * 100;
                                        const isActive = displayProgress >= threshold;
                                        const isStabilized = phase === 'stabilized';
                                        
                                        return (
                                            <g key={i} className="transition-all duration-300">
                                                {/* Inactive segment (muted gray-white, low opacity) */}
                                                {!isActive && (
                                                    <line
                                                        x1={x1}
                                                        y1={y1}
                                                        x2={x2}
                                                        y2={y2}
                                                        stroke="rgba(255, 255, 255, 0.08)"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    />
                                                )}

                                                {/* Active segment layered bloom glow underneath */}
                                                {isActive && (
                                                    <line
                                                        x1={x1}
                                                        y1={y1}
                                                        x2={x2}
                                                        y2={y2}
                                                        stroke="rgba(6, 182, 212, 0.35)"
                                                        strokeWidth="3.5"
                                                        strokeLinecap="round"
                                                        style={{
                                                            filter: "blur(1.5px)",
                                                            animation: isStabilized ? "activeBreathing 3s ease-in-out infinite" : "none"
                                                        }}
                                                    />
                                                )}

                                                {/* Active segment main glowing line */}
                                                {isActive && (
                                                    <line
                                                        x1={x1}
                                                        y1={y1}
                                                        x2={x2}
                                                        y2={y2}
                                                        stroke="#06b6d4"
                                                        strokeWidth="1.8"
                                                        strokeLinecap="round"
                                                        style={{
                                                            filter: "drop-shadow(0 0 3px rgba(6, 182, 212, 0.55))",
                                                            animation: isStabilized ? "activeBreathing 3s ease-in-out infinite" : "none"
                                                        }}
                                                    />
                                                )}
                                            </g>
                                        );
                                    })}

                                    {/* Inner Ring: Static dashed guide */}
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="66"
                                        stroke="rgba(6, 182, 212, 0.1)"
                                        strokeWidth="0.5"
                                        fill="transparent"
                                        strokeDasharray="2 3"
                                    />

                                    {/* Premium Volumetric Central Glass Disc */}
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="60"
                                        fill="url(#innerGlassGradient)"
                                        stroke="rgba(6, 182, 212, 0.12)"
                                        strokeWidth="0.5"
                                    />
                                </svg>

                                {/* 4. CENTER TEXT: Large, Bold and Confident */}
                                <div className="absolute text-center space-y-0.5 z-20 select-none">
                                    <div className={cn(
                                      "flex items-baseline justify-center select-none",
                                      isDark ? "text-white drop-shadow-[0_0_10px_rgba(6,182,212,0.25)]" : "text-[#0F172A]"
                                    )}>
                                        <span className="text-[38px] sm:text-[42px] font-bold tracking-tight font-sans leading-none">
                                            {displayProgress}
                                        </span>
                                        <span className={cn("text-base font-light ml-0.5 select-none leading-none font-sans", isDark ? "text-cyan-400" : "text-cyan-600")}>
                                            %
                                        </span>
                                    </div>
                                    <div className={cn("font-mono text-[8px] tracking-[0.2em] uppercase font-semibold pt-1", isDark ? "text-cyan-400/70" : "text-cyan-600")}>
                                        READINESS_IDX
                                    </div>
                                    {/* Embedded Syncing Node Status Tag */}
                                    <div className="font-mono text-[5.5px] tracking-widest text-neutral-500 uppercase mt-0.5 animate-pulse">
                                        {phase === 'reset' && "[ CALIBRATING ]"}
                                        {phase === 'scanning' && "[ CORE_SCAN ]"}
                                        {phase === 'syncing' && "[ NODE_INGEST ]"}
                                        {phase === 'stabilized' && "[ LINK_ACTIVE ]"}
                                    </div>
                                </div>
                            </div>

                            {/* Expanding calibration ripples */}
                            {rippleActive && (
                                <div 
                                    className="absolute w-[250px] h-[250px] rounded-full border border-cyan-400/30 pointer-events-none"
                                    style={{
                                        animation: 'sciFiRipple 1.2s cubic-bezier(0.1, 0.8, 0.3, 1) forwards'
                                    }}
                                />
                            )}
                        </motion.div>
                    </div>

                    {/* Bottom Telemetry Bar */}
                    <div className={cn(
                      "pt-4 flex justify-between items-center font-mono text-[9px] tracking-wider select-none",
                      isDark 
                        ? "border-t border-white/[0.08] text-neutral-500" 
                        : "border-t border-slate-100 text-[#475569]"
                    )}>
                        <div>DATA_STREAM : SECURE_MESH</div>
                        <div className="flex items-center gap-1.5 transition-colors duration-300">
                            <span className={cn(
                              "w-1 h-1 rounded-full",
                              phase === 'reset' ? 'bg-amber-400' : phase === 'scanning' ? 'bg-cyan-400 animate-ping' : phase === 'syncing' ? 'bg-cyan-400 animate-pulse' : 'bg-emerald-400'
                            )} />
                            <span className={cn(
                              phase === 'reset' 
                                ? "text-neutral-500" 
                                : phase === 'scanning' || phase === 'syncing' 
                                  ? isDark ? "text-cyan-400" : "text-cyan-600" 
                                  : isDark ? "text-neutral-400" : "text-[#475569]"
                            )}>
                                {phase === 'reset' && "REBOOTING..."}
                                {phase === 'scanning' && "SCANNING..."}
                                {phase === 'syncing' && "INGESTING..."}
                                {phase === 'stabilized' && "SECURE_STABLE"}
                            </span>
                        </div>
                    </div>
                  </div>
                </motion.div>

                {/* RIGHT COMPONENT: The Luxury Editorial Console (7 Cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between gap-6">

                    {/* Primary Info Box Card */}
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.42 }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                      className={cn(
                        "rounded-3xl p-8 md:p-10 space-y-8 flex-grow flex flex-col justify-center relative overflow-hidden group transition-all duration-700 w-full will-change-transform",
                        isDark
                          ? "border-2 border-blue-500/55 bg-gradient-to-br from-[#0B1528]/80 to-[#030816]/95 backdrop-blur-2xl hover:border-blue-400/75 shadow-[0_0_24px_rgba(59,130,246,0.20),inset_0_0_16px_rgba(59,130,246,0.04)] hover:shadow-[0_0_45px_rgba(59,130,246,0.30)]"
                          : "bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md"
                      )}
                    >
                        <div className="absolute -bottom-24 -right-24 w-[250px] h-[250px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

                        <div className="space-y-4 relative z-10">
                            <span className={cn(
                              "font-mono text-[10px] tracking-[0.3em] uppercase w-max block font-medium px-3 py-1 rounded border",
                              isDark
                                ? "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.05)]"
                                : "text-[#64748B] bg-slate-100 border-[#E2E8F0]"
                            )}>
                                HUMAN CAPITAL INFRASTRUCTURE
                            </span>
                            <h2 className={cn(
                              "text-4xl md:text-5xl font-bold tracking-tight font-heading leading-none",
                              isDark ? "text-white" : "text-[#0F172A]"
                            )}>
                                The Sovereign Digital Twin
                            </h2>
                        </div>

                        <p className={cn(
                          "text-sm md:text-base font-body font-light leading-relaxed max-w-2xl antialiased relative z-10",
                          isDark ? "text-neutral-300" : "text-[#64748B]"
                        )}>
                            A hyper-personalized AI-powered career co-pilot designed to navigate students across Bharat from all backgrounds through their professional development journey.
                        </p>

                        <div className="w-full h-[1px] bg-gradient-to-r from-white/5 via-transparent to-transparent" />

                        {/* Interactive Futuristic Code Link Switches */}
                        <div className="flex flex-wrap gap-4 font-mono text-[11px] tracking-widest relative z-10">
                            <button
                                onClick={() => setActiveTab('score')}
                                className={cn(
                                  "px-5 py-2.5 rounded-lg border transition-all duration-500 ease-out cursor-pointer",
                                  isDark
                                    ? activeTab === 'score'
                                      ? "border-cyan-400/40 bg-cyan-500/5 text-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                                      : "border-white/10 text-neutral-400 hover:text-neutral-200 hover:border-white/20 hover:bg-white/[0.03]"
                                    : activeTab === 'score'
                                      ? "border-[#2563EB]/40 bg-[#2563EB]/5 text-[#2563EB] shadow-[0_0_15px_rgba(37,99,235,0.08)]"
                                      : "border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:bg-slate-50"
                                )}
                            >
                                // REVERSIBLE_READINESS
                            </button>
                            <button
                                onClick={() => setActiveTab('radar')}
                                className={cn(
                                  "px-5 py-2.5 rounded-lg border transition-all duration-500 ease-out cursor-pointer",
                                  isDark
                                    ? activeTab === 'radar'
                                      ? "border-cyan-400/40 bg-cyan-500/5 text-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                                      : "border-white/10 text-neutral-400 hover:text-neutral-200 hover:border-white/20 hover:bg-white/[0.03]"
                                    : activeTab === 'radar'
                                      ? "border-[#2563EB]/40 bg-[#2563EB]/5 text-[#2563EB] shadow-[0_0_15px_rgba(37,99,235,0.08)]"
                                      : "border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:bg-slate-50"
                                )}
                            >
                                // OPPORTUNITY_RADAR
                            </button>
                        </div>
                    </motion.div>

                    {/* Dynamic Descriptive Panel with Neon Underglow */}
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.42 }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                      className={cn(
                        "rounded-2xl p-8 md:p-10 relative overflow-hidden transition-all duration-500 w-full will-change-transform",
                        isDark
                          ? "border-2 border-cyan-500/60 bg-gradient-to-br from-[#0B1528]/85 to-[#030816]/95 backdrop-blur-2xl hover:border-cyan-400/80 shadow-[0_0_24px_rgba(6,182,212,0.18),inset_0_0_16px_rgba(6,182,212,0.04)] hover:shadow-[0_0_45px_rgba(6,182,212,0.28)]"
                          : "bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md"
                      )}
                    >
                        {/* Subtle inner grid lines & blur elements to match radar core */}
                        <div className={cn("absolute inset-0 tech-grid-dots pointer-events-none", isDark ? "opacity-10" : "opacity-[0.04]")} />
                        {isDark && (
                          <div className="absolute -bottom-10 -left-10 w-[200px] h-[200px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
                            {/* LEFT SIDE: Description Text */}
                            <div className="md:col-span-8 space-y-6 flex flex-col justify-between h-full">
                                {activeTab === 'score' ? (
                                    <div className="space-y-3 animate-fadeIn">
                                        <div className={cn("flex items-center gap-2", isDark ? "text-cyan-400" : "text-[#2563EB]")}>
                                            <svg className={cn("w-4 h-4", isDark && "filter drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                            <h3 className={cn("font-mono text-xs tracking-wider uppercase font-semibold", isDark ? "text-white" : "text-[#0F172A]")}>Readiness Score</h3>
                                        </div>
                                        <p className={cn("text-xs md:text-sm font-body font-light leading-relaxed max-w-xl", isDark ? "text-neutral-300" : "text-[#64748B]")}>
                                            A proprietary algorithm quantifying preparation for specific roles, pinpointing exact skill gaps in real-time.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="space-y-3 animate-fadeIn">
                                        <div className={cn("flex items-center gap-2", isDark ? "text-cyan-400" : "text-[#2563EB]")}>
                                            <svg className={cn("w-4 h-4", isDark && "filter drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 114 0 2 2 0 01-4 0zM5 11a2 2 0 11-4 0 2 2 0 014 0zM12 11a2 2 0 110-4 2 2 0 010 4zm0 0v10m0 0a2 2 0 100 4 2 2 0 000-4z" /></svg>
                                            <h3 className={cn("font-mono text-xs tracking-wider uppercase font-semibold", isDark ? "text-white" : "text-[#0F172A]")}>Opportunity Radar</h3>
                                        </div>
                                        <p className={cn("text-xs md:text-sm font-body font-light leading-relaxed max-w-xl", isDark ? "text-neutral-300" : "text-[#64748B]")}>
                                            A specialized agent scouting for hyper-relevant jobs, internships, and government exams based on the twin's profile.
                                        </p>
                                    </div>
                                )}

                                {isMounted && (
                                    <div className={cn(
                                      "pt-4 font-mono text-[8px] tracking-widest uppercase",
                                      isDark 
                                        ? "border-t border-white/[0.08] text-neutral-600" 
                                        : "border-t border-slate-100 text-[#64748B]"
                                    )}>
                                        ALGORITHM_FEED // TARGET_CORE_READOUT // INFRASTRUCTURE_OK
                                    </div>
                                )}
                            </div>

                            {/* RIGHT SIDE: Dynamic Cinematic Telemetry Panel */}
                            <div className="md:col-span-4 w-full h-full min-h-[130px] flex flex-col justify-center">
                                {activeTab === 'score' ? (
                                    /* Dynamic Real-Time Skill Progress bars */
                                    <div className={cn(
                                      "flex flex-col gap-2 font-mono text-[8px] p-4 relative overflow-hidden rounded-xl animate-fadeIn",
                                      isDark 
                                        ? "text-cyan-400/80 bg-[#030816]/95 border border-cyan-500/25 shadow-[inset_0_0_15px_rgba(6,182,212,0.05)]" 
                                        : "text-[#64748B] bg-[#F1F5F9] border border-[#E2E8F0]"
                                    )}>
                                        <div className={cn(
                                          "flex justify-between text-[7px] pb-1.5 mb-1 select-none",
                                          isDark ? "text-neutral-500 border-b border-white/[0.08]" : "text-[#64748B]/70 border-b border-slate-200"
                                        )}>
                                            <span>VECTOR_SCORE_METRICS</span>
                                            <span className={cn(isDark ? "text-cyan-400 animate-pulse" : "text-[#2563EB] animate-pulse")}>ANALYZING...</span>
                                        </div>
                                        <div className="space-y-2">
                                            {/* Metric 1 */}
                                            <div className="space-y-1">
                                                <div className={cn("flex justify-between", isDark ? "text-neutral-400" : "text-[#64748B]")}>
                                                    <span>1. COGNITIVE_LOGIC</span>
                                                    <span className={cn("font-bold", isDark ? "text-white" : "text-[#0F172A]")}>92%</span>
                                                </div>
                                                <div className={cn("h-1 w-full rounded-full overflow-hidden", isDark ? "bg-white/5" : "bg-slate-200")}>
                                                    <motion.div 
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: "92%" }}
                                                        viewport={{ once: true, amount: 0.42 }}
                                                        transition={{ type: "spring", stiffness: 30, damping: 15, delay: 0.3 }}
                                                        className={cn("h-full rounded-full", isDark ? "bg-cyan-400" : "bg-[#2563EB]")} 
                                                    />
                                                </div>
                                            </div>
                                            {/* Metric 2 */}
                                            <div className="space-y-1">
                                                <div className={cn("flex justify-between", isDark ? "text-neutral-400" : "text-[#64748B]")}>
                                                    <span>2. DOMAIN_APTITUDE</span>
                                                    <span className={cn("font-bold", isDark ? "text-white" : "text-[#0F172A]")}>78%</span>
                                                </div>
                                                <div className={cn("h-1 w-full rounded-full overflow-hidden", isDark ? "bg-white/5" : "bg-slate-200")}>
                                                    <motion.div 
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: "78%" }}
                                                        viewport={{ once: true, amount: 0.42 }}
                                                        transition={{ type: "spring", stiffness: 30, damping: 15, delay: 0.45 }}
                                                        className={cn("h-full rounded-full", isDark ? "bg-blue-400" : "bg-[#2563EB]")} 
                                                    />
                                                </div>
                                            </div>
                                            {/* Metric 3 */}
                                            <div className="space-y-1">
                                                <div className={cn("flex justify-between", isDark ? "text-neutral-400" : "text-[#64748B]")}>
                                                    <span>3. VERNACULAR_COMM</span>
                                                    <span className={cn("font-bold", isDark ? "text-white" : "text-[#0F172A]")}>85%</span>
                                                </div>
                                                <div className={cn("h-1 w-full rounded-full overflow-hidden", isDark ? "bg-white/5" : "bg-slate-200")}>
                                                    <motion.div 
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: "85%" }}
                                                        viewport={{ once: true, amount: 0.42 }}
                                                        transition={{ type: "spring", stiffness: 30, damping: 15, delay: 0.6 }}
                                                        className={cn("h-full rounded-full", isDark ? "bg-purple-400" : "bg-[#2563EB]")} 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    /* Dynamic Mini Radar Tactical Sweeper */
                                    <div className={cn(
                                      "relative w-full h-full min-h-[120px] flex items-center justify-center rounded-xl overflow-hidden p-2 animate-fadeIn select-none",
                                      isDark 
                                        ? "bg-[#030816]/95 border border-cyan-500/25 shadow-[inset_0_0_15px_rgba(6,182,212,0.05)]" 
                                        : "bg-[#F1F5F9] border border-[#E2E8F0]"
                                    )}>
                                        {/* Grid crosshairs overlay */}
                                        <div className={cn("absolute inset-0 tech-grid-dots", isDark ? "opacity-20" : "opacity-35")} />
                                        
                                        {/* Radar circles */}
                                        <div className={cn("absolute w-[80px] h-[80px] rounded-full flex items-center justify-center border", isDark ? "border-cyan-500/10" : "border-[#2563EB]/10")}>
                                            <div className={cn("absolute w-[50px] h-[50px] rounded-full border border-dashed flex items-center justify-center", isDark ? "border-cyan-500/10" : "border-[#2563EB]/10")}>
                                                <div className={cn("w-1.5 h-1.5 rounded-full animate-ping", isDark ? "bg-cyan-400 shadow-[0_0_8px_#22d3ee]" : "bg-[#2563EB]")} />
                                            </div>
                                        </div>
                                        
                                        {/* Sweeper arm */}
                                        <div className={cn(
                                          "absolute inset-0 pointer-events-none rounded-xl",
                                          isDark
                                            ? "bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-400/[0.08]"
                                            : "bg-gradient-to-tr from-[#2563EB]/0 via-[#2563EB]/0 to-[#2563EB]/[0.08]"
                                        )}
                                             style={{
                                                 animation: 'sciFiScan 3.5s linear infinite'
                                             }}
                                        />

                                        {/* Target opportunities blips */}
                                        <div className={cn("absolute top-[28%] left-[25%] w-1 h-1 rounded-full animate-pulse", isDark ? "bg-emerald-400 shadow-[0_0_6px_#10b981]" : "bg-emerald-500")} />
                                        <div className={cn("absolute bottom-[26%] right-[28%] w-1.5 h-1.5 rounded-full animate-ping", isDark ? "bg-cyan-400 shadow-[0_0_8px_#22d3ee]" : "bg-[#2563EB]")}
                                             style={{ animationDelay: '1.2s', animationDuration: '3s' }} />
                                        <div className={cn("absolute top-[35%] right-[22%] w-1 h-1 rounded-full animate-pulse", isDark ? "bg-indigo-400 shadow-[0_0_6px_#818cf8]" : "bg-indigo-500")} 
                                             style={{ animationDelay: '0.6s' }} />

                                        {/* Tactical node tag */}
                                        <div className="absolute bottom-1 right-2 font-mono text-[5px] text-neutral-500 uppercase tracking-widest">
                                            RADAR_CAL_NODE_4
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}