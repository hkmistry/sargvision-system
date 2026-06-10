import React, { useEffect, useState, useRef } from 'react';
import { motion, animate, useInView, useMotionValue } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export default function HumanCapitalSection() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const [isMounted, setIsMounted] = useState(false);
    const [activeTab, setActiveTab] = useState<'score' | 'radar'>('score');
    
    // Ingestion states
    const [phase, setPhase] = useState<'reset' | 'scanning' | 'syncing' | 'stabilized'>('reset');

    // High-Precision Gauges scroll-trigger
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.3 });
    const motionProgress = useMotionValue(0);
    const [displayProgress, setDisplayProgress] = useState(0);

    useEffect(() => {
        setIsMounted(true);
        if (isInView) {
            setPhase('scanning');
            
            // Ingesting/scanning phase (800ms scan)
            const t1 = setTimeout(() => {
                setPhase('syncing');
                
                // Smooth animated progress from 0% to 85% with cinema deceleration curve
                const controls = animate(motionProgress, 85, {
                    duration: 2.2,
                    ease: [0.16, 1, 0.3, 1],
                    onUpdate: (latest) => {
                        setDisplayProgress(Math.round(latest));
                    },
                    onComplete: () => {
                        setPhase('stabilized');
                    }
                });
                
                return () => controls.stop();
            }, 800);

            return () => clearTimeout(t1);
        } else {
            // Reset state when scrolled out of view to re-trigger on next scroll
            setPhase('reset');
            motionProgress.set(0);
            setDisplayProgress(0);
        }
    }, [isInView]);

    return (
        <section id="human-capital" className="relative w-full py-36 px-6 md:px-12 max-w-7xl mx-auto z-10 bg-transparent overflow-hidden">
            
            {/* Custom Styles */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.4s ease-out forwards;
                }
            `}</style>

            {/* Main Premium Widescreen Layout Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch relative z-10">

                {/* LEFT COMPONENT: The Holographic Sonar Core (5 Cols) */}
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
                      ? "border border-slate-800/80 bg-gradient-to-br from-[#0B1528]/85 to-[#030816]/95 backdrop-blur-2xl hover:border-slate-700/80 shadow-lg"
                      : "bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md"
                  )}>
                    {/* Background Grid Dot Pattern */}
                    <div className={cn("absolute inset-0 tech-grid-dots pointer-events-none", isDark ? "opacity-10" : "opacity-[0.04]")} />

                    {/* Top Telemetry Header */}
                    <div className={cn(
                      "flex justify-between items-center font-mono text-[10px] tracking-[0.2em] select-none",
                      isDark ? "text-slate-400" : "text-slate-600"
                    )}>
                        <span>REGISTRY_STATUS // CONNECTED</span>
                        <span className="flex items-center gap-2">
                            <span className={cn(
                              "w-1.5 h-1.5 rounded-full",
                              phase === 'reset' ? 'bg-amber-400' : 'bg-emerald-400'
                            )} />
                            NODE_ACTIVE
                        </span>
                    </div>

                    {/* Gauge Core */}
                    <div className="my-auto flex items-center justify-center relative py-6 select-none" ref={containerRef}>
                        <motion.div 
                            initial={{ scale: 0.85 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true, amount: 0.42 }}
                            transition={{ type: "spring", stiffness: 22, damping: 18, mass: 1.8, delay: 0.15 }}
                            className="relative flex items-center justify-center"
                        >
                            {/* Concentric Dash Ring */}
                            <div 
                                className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-slate-800/20 dark:border-slate-800/40 pointer-events-none"
                            />

                            {/* Outer Circle Frame */}
                            <div className={cn(
                              "w-[240px] h-[240px] rounded-full relative flex items-center justify-center border",
                              isDark
                                ? "border-slate-800/60 shadow-[inset_0_0_30px_rgba(255,255,255,0.02)] bg-gradient-to-b from-[#0B1528]/35 to-[#020512]/65 backdrop-blur-xl"
                                : "border-slate-100 shadow-sm bg-slate-50"
                            )}>

                                {/* Concentric Inner Guides */}
                                <div className="absolute w-[172px] h-[172px] rounded-full border border-dashed border-slate-800/10 dark:border-slate-800/20 pointer-events-none" />
                                <div className={cn(
                                  "absolute w-[120px] h-[120px] rounded-full border pointer-events-none",
                                    isDark
                                      ? "border-slate-800 bg-gradient-to-b from-neutral-950/98 to-[#020512]/100 shadow-md"
                                      : "border-slate-100 bg-white shadow-sm"
                                )}></div>

                                {/* Active Progress Arc SVG */}
                                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 200 200">
                                    <defs>
                                        <radialGradient id="innerGlassGradient" cx="50%" cy="50%" r="50%">
                                            {isDark ? (
                                                <>
                                                    <stop offset="0%" stopColor="#0B1528" stopOpacity="0.8" />
                                                    <stop offset="80%" stopColor="#030816" stopOpacity="0.95" />
                                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
                                                </>
                                            ) : (
                                                <>
                                                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                                                    <stop offset="80%" stopColor="#F8FAFC" stopOpacity="0.98" />
                                                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.02" />
                                                </>
                                            )}
                                        </radialGradient>
                                    </defs>

                                    {/* Gauges tick marks */}
                                    {Array.from({ length: 36 }).map((_, i) => {
                                        if (i === 0 || i === 18) return null;
                                        const angleDeg = i * 10;
                                        const angleRad = (angleDeg * Math.PI) / 180;
                                        const rOuter = 93;
                                        const rInner = 90.5;
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
                                                className={isDark ? "stroke-slate-700" : "stroke-slate-200"}
                                                strokeWidth="0.75"
                                            />
                                        );
                                    })}

                                    {/* Static thin outer track limit line */}
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="93"
                                        stroke={isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(15, 23, 42, 0.05)"}
                                        strokeWidth="0.5"
                                        fill="transparent"
                                    />

                                    {/* Segmented Radial Progress Ring */}
                                    {Array.from({ length: 60 }).map((_, i) => {
                                        const angleDeg = i * 6;
                                        const angleRad = (angleDeg * Math.PI) / 180;
                                        const rInner = 76;
                                        const rOuter = 82;
                                        const x1 = (100 + rInner * Math.cos(angleRad)).toFixed(3);
                                        const y1 = (100 + rInner * Math.sin(angleRad)).toFixed(3);
                                        const x2 = (100 + rOuter * Math.cos(angleRad)).toFixed(3);
                                        const y2 = (100 + rOuter * Math.sin(angleRad)).toFixed(3);
                                        
                                        const threshold = (i / 60) * 100;
                                        const isActive = displayProgress >= threshold;
                                        
                                        return (
                                            <g key={i} className="transition-all duration-300">
                                                {!isActive && (
                                                    <line
                                                        x1={x1}
                                                        y1={y1}
                                                        x2={x2}
                                                        y2={y2}
                                                        stroke={isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(15, 23, 42, 0.04)"}
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    />
                                                )}

                                                {isActive && (
                                                    <line
                                                        x1={x1}
                                                        y1={y1}
                                                        x2={x2}
                                                        y2={y2}
                                                        stroke={isDark ? "#3b82f6" : "#2563EB"}
                                                        strokeWidth="1.8"
                                                        strokeLinecap="round"
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
                                        stroke={isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(15, 23, 42, 0.05)"}
                                        strokeWidth="0.5"
                                        fill="transparent"
                                        strokeDasharray="2 3"
                                    />

                                    {/* Central Glass Disc */}
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="60"
                                        fill="url(#innerGlassGradient)"
                                        stroke={isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(15, 23, 42, 0.08)"}
                                        strokeWidth="0.5"
                                    />
                                </svg>

                                {/* CENTER TEXT */}
                                <div className="absolute text-center space-y-0.5 z-20 select-none">
                                    <div className={cn(
                                      "flex items-baseline justify-center select-none",
                                      isDark ? "text-white" : "text-[#0F172A]"
                                    )}>
                                        <span className="text-[38px] sm:text-[42px] font-bold tracking-tight font-inter leading-none">
                                            {displayProgress}
                                        </span>
                                        <span className={cn("text-base font-semibold ml-0.5 select-none leading-none font-inter", isDark ? "text-blue-400" : "text-blue-600")}>
                                            %
                                        </span>
                                    </div>
                                    <div className={cn("font-mono text-[8px] tracking-[0.2em] uppercase font-bold pt-1", isDark ? "text-slate-400" : "text-slate-500")}>
                                        CAPABILITY INDEX
                                    </div>
                                    <div className="font-mono text-[5.5px] tracking-widest text-neutral-500 uppercase mt-0.5">
                                        [ VERIFIED PROFILE ]
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Status Bar */}
                    <div className={cn(
                      "pt-4 flex justify-between items-center font-mono text-[9px] tracking-wider select-none",
                      isDark 
                        ? "border-t border-white/[0.08] text-neutral-500" 
                        : "border-t border-slate-100 text-[#475569]"
                    )}>
                        <div>REGISTRY_NODE : ACTIVE</div>
                        <div className="flex items-center gap-1.5 transition-colors duration-300">
                            <span className={cn(
                              "w-1 h-1 rounded-full",
                              phase === 'reset' ? 'bg-amber-400' : 'bg-emerald-400'
                            )} />
                            <span className={cn(
                              phase === 'reset' 
                                ? "text-neutral-500" 
                                : phase === 'scanning' || phase === 'syncing' 
                                  ? isDark ? "text-blue-400" : "text-blue-600" 
                                  : isDark ? "text-neutral-400" : "text-[#475569]"
                            )}>
                                {phase === 'reset' && "SYNCHRONIZING..."}
                                {phase === 'scanning' && "SCANNING..."}
                                {phase === 'syncing' && "INGESTING..."}
                                {phase === 'stabilized' && "VERIFIED_SECURE"}
                            </span>
                        </div>
                    </div>
                  </div>
                </motion.div>

                {/* RIGHT COMPONENT: Editorial Info Console (7 Cols) */}
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
                          ? "border border-slate-800/80 bg-gradient-to-br from-[#0B1528]/80 to-[#030816]/95 backdrop-blur-2xl hover:border-slate-700/80 shadow-lg"
                          : "bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md"
                      )}
                    >
                        {isDark && (
                          <div className="absolute -bottom-24 -right-24 w-[250px] h-[250px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
                        )}

                        <div className="space-y-4 relative z-10">
                            <span className={cn(
                              "font-mono text-[10px] tracking-[0.3em] uppercase w-max block font-medium px-3 py-1 rounded border",
                              isDark
                                ? "text-slate-400 bg-white/[0.02] border-slate-800"
                                : "text-slate-600 bg-slate-50 border-[#E2E8F0]"
                            )}>
                                HUMAN CAPITAL INFRASTRUCTURE
                            </span>
                            <h2 className={cn(
                              "text-4xl md:text-5xl font-editorial font-semibold tracking-tight leading-none",
                              isDark ? "text-white" : "text-[#0F172A]"
                            )}>
                                National Talent Registry
                            </h2>
                        </div>

                        <p className={cn(
                          "text-sm md:text-base font-normal leading-relaxed max-w-2xl antialiased relative z-10",
                          isDark ? "text-slate-300" : "text-slate-600"
                        )}>
                            National talent verification registry mapping graduate capabilities against standardized institutional benchmarks to accelerate verified regional hiring across Bharat.
                        </p>

                        <div className="w-full h-[1px] bg-gradient-to-r from-white/5 via-transparent to-transparent" />

                        {/* Interactive switches */}
                        <div className="flex flex-wrap gap-4 font-mono text-[11px] tracking-widest relative z-10">
                            <motion.button
                                onClick={() => setActiveTab('score')}
                                whileHover={{ y: -1.5, scale: 1.015 }}
                                whileTap={{ scale: 0.98 }}
                                className={cn(
                                  "px-5 py-2.5 rounded-lg border transition-all duration-500 ease-out cursor-pointer",
                                  isDark
                                    ? activeTab === 'score'
                                      ? "border-slate-700 bg-white/[0.04] text-white"
                                      : "border-white/5 text-neutral-400 hover:text-neutral-200 hover:border-white/10 hover:bg-white/[0.02]"
                                    : activeTab === 'score'
                                      ? "border-slate-300 bg-slate-50 text-[#0F172A]"
                                      : "border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:bg-slate-50"
                                )}
                            >
                                // SKILL_ALIGNMENT
                            </motion.button>
                            <motion.button
                                onClick={() => setActiveTab('radar')}
                                whileHover={{ y: -1.5, scale: 1.015 }}
                                whileTap={{ scale: 0.98 }}
                                className={cn(
                                  "px-5 py-2.5 rounded-lg border transition-all duration-500 ease-out cursor-pointer",
                                  isDark
                                    ? activeTab === 'radar'
                                      ? "border-slate-700 bg-white/[0.04] text-white"
                                      : "border-white/5 text-neutral-400 hover:text-neutral-200 hover:border-white/10 hover:bg-white/[0.02]"
                                    : activeTab === 'radar'
                                      ? "border-slate-300 bg-slate-50 text-[#0F172A]"
                                      : "border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:bg-slate-50"
                                )}
                            >
                                // PLACEMENT_PIPELINE
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Dynamic Descriptive Panel */}
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.42 }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                      className={cn(
                        "rounded-3xl p-8 md:p-10 relative overflow-hidden transition-all duration-500 w-full will-change-transform",
                        isDark
                          ? "border border-slate-800/80 bg-gradient-to-br from-[#0B1528]/85 to-[#030816]/95 backdrop-blur-2xl hover:border-slate-700/80 shadow-lg"
                          : "bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md"
                      )}
                    >
                        <div className={cn("absolute inset-0 tech-grid-dots pointer-events-none", isDark ? "opacity-10" : "opacity-[0.04]")} />

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
                            {/* LEFT SIDE: Description Text */}
                            <div className="md:col-span-7 space-y-6 flex flex-col justify-between h-full">
                                {activeTab === 'score' ? (
                                    <div className="space-y-3 animate-fadeIn">
                                        <div className={cn("flex items-center gap-2", isDark ? "text-blue-400" : "text-[#2563EB]")}>
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                            <h3 className={cn("font-editorial font-bold text-lg md:text-xl tracking-tight transition-colors duration-300", isDark ? "text-white" : "text-[#0F172A]")}>Skill Alignment Index</h3>
                                        </div>
                                        <p className={cn("text-xs md:text-sm font-normal leading-relaxed max-w-xl", isDark ? "text-slate-300" : "text-slate-600")}>
                                            A verified framework mapping career preparation for institutional standards, diagnosing exact skill levels against national benchmarks.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="space-y-3 animate-fadeIn">
                                        <div className={cn("flex items-center gap-2", isDark ? "text-blue-400" : "text-[#2563EB]")}>
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 114 0 2 2 0 01-4 0zM5 11a2 2 0 11-4 0 2 2 0 014 0zM12 11a2 2 0 110-4 2 2 0 010 4zm0 0v10m0 0a2 2 0 100 4 2 2 0 000-4z" /></svg>
                                            <h3 className={cn("font-editorial font-bold text-lg md:text-xl tracking-tight transition-colors duration-300", isDark ? "text-white" : "text-[#0F172A]")}>Placement & Integration Pipeline</h3>
                                        </div>
                                        <p className={cn("text-xs md:text-sm font-normal leading-relaxed max-w-xl", isDark ? "text-slate-300" : "text-slate-600")}>
                                            An active coordination system aligning qualified talent with public service examinations, industrial internships, and national employment vacancies.
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
                                        METRIC ALIGNMENT // NATIONAL NODE CONNECTED
                                    </div>
                                )}
                            </div>

                            {/* RIGHT SIDE: Dynamic Telemetry Panel */}
                            <div className="md:col-span-5 w-full h-full min-h-[130px] flex flex-col justify-center">
                                {activeTab === 'score' ? (
                                    /* Dynamic Real-Time Skill Progress bars */
                                    <div className={cn(
                                      "flex flex-col gap-2 font-mono text-[8px] p-4 relative overflow-hidden rounded-xl animate-fadeIn",
                                      isDark 
                                        ? "text-slate-300 bg-[#030816]/95 border border-slate-800/80 shadow-[inset_0_0_15px_rgba(255,255,255,0.01)]" 
                                        : "text-[#64748B] bg-[#F1F5F9] border border-[#E2E8F0]"
                                    )}>
                                        <div className={cn(
                                          "flex justify-between text-[7px] pb-1.5 mb-1 select-none",
                                          isDark ? "text-neutral-500 border-b border-white/[0.08]" : "text-[#64748B]/70 border-b border-slate-200"
                                        )}>
                                            <span>CAPABILITY METRICS</span>
                                            <span className={cn(isDark ? "text-emerald-400" : "text-emerald-600")}>READY</span>
                                        </div>
                                        <div className="space-y-2">
                                            {/* Metric 1 */}
                                            <div className="space-y-1">
                                                <div className={cn("flex justify-between", isDark ? "text-slate-400" : "text-[#64748B]")}>
                                                    <span>1. COGNITIVE_LOGIC</span>
                                                    <span className={cn("font-bold", isDark ? "text-white" : "text-[#0F172A]")}>92%</span>
                                                </div>
                                                <div className={cn("h-1 w-full rounded-full overflow-hidden", isDark ? "bg-white/5" : "bg-slate-200")}>
                                                    <motion.div 
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: "92%" }}
                                                        viewport={{ once: true, amount: 0.42 }}
                                                        transition={{ type: "spring", stiffness: 30, damping: 15, delay: 0.3 }}
                                                        className={cn("h-full rounded-full", isDark ? "bg-blue-500" : "bg-[#2563EB]")} 
                                                    />
                                                </div>
                                            </div>
                                            {/* Metric 2 */}
                                            <div className="space-y-1">
                                                <div className={cn("flex justify-between", isDark ? "text-slate-400" : "text-[#64748B]")}>
                                                    <span>2. DOMAIN_APTITUDE</span>
                                                    <span className={cn("font-bold", isDark ? "text-white" : "text-[#0F172A]")}>78%</span>
                                                </div>
                                                <div className={cn("h-1 w-full rounded-full overflow-hidden", isDark ? "bg-white/5" : "bg-slate-200")}>
                                                    <motion.div 
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: "78%" }}
                                                        viewport={{ once: true, amount: 0.42 }}
                                                        transition={{ type: "spring", stiffness: 30, damping: 15, delay: 0.45 }}
                                                        className={cn("h-full rounded-full", isDark ? "bg-blue-500" : "bg-[#2563EB]")} 
                                                    />
                                                </div>
                                            </div>
                                            {/* Metric 3 */}
                                            <div className="space-y-1">
                                                <div className={cn("flex justify-between", isDark ? "text-slate-400" : "text-[#64748B]")}>
                                                    <span>3. VERNACULAR_COMM</span>
                                                    <span className={cn("font-bold", isDark ? "text-white" : "text-[#0F172A]")}>85%</span>
                                                </div>
                                                <div className={cn("h-1 w-full rounded-full overflow-hidden", isDark ? "bg-white/5" : "bg-slate-200")}>
                                                    <motion.div 
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: "85%" }}
                                                        viewport={{ once: true, amount: 0.42 }}
                                                        transition={{ type: "spring", stiffness: 30, damping: 15, delay: 0.6 }}
                                                        className={cn("h-full rounded-full", isDark ? "bg-blue-500" : "bg-[#2563EB]")} 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    /* Placement Sectors & Alignment Densities */
                                    <div className={cn(
                                      "w-full h-full min-h-[120px] flex flex-col justify-center rounded-xl p-4 select-none font-mono text-[9px] gap-2.5 animate-fadeIn",
                                      isDark 
                                        ? "bg-[#030816]/95 border border-slate-800/80 shadow-[inset_0_0_15px_rgba(255,255,255,0.01)]" 
                                        : "bg-[#F1F5F9] border border-[#E2E8F0]"
                                    )}>
                                        {/* Grid background for technical feel */}
                                        <div className={cn("absolute inset-0 tech-grid-dots pointer-events-none", isDark ? "opacity-10" : "opacity-[0.04]")} />
                                        
                                        <div className={cn(
                                          "flex justify-between text-[7px] pb-1.5 border-b uppercase relative z-10",
                                          isDark ? "text-neutral-500 border-white/[0.08]" : "text-[#64748B]/70 border-slate-200"
                                        )}>
                                            <span>PLACEMENT SECTOR</span>
                                            <span>ALIGNMENT</span>
                                        </div>
                                        <div className="space-y-2 relative z-10">
                                            <div className="flex justify-between items-center">
                                                <span className={isDark ? "text-slate-400" : "text-[#475569]"}>PUBLIC SECTOR / SERVICE</span>
                                                <span className={cn("font-bold", isDark ? "text-white" : "text-[#0F172A]")}>84%</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className={isDark ? "text-slate-400" : "text-[#475569]"}>TECHNICAL SYSTEMS & AI</span>
                                                <span className={cn("font-bold", isDark ? "text-white" : "text-[#0F172A]")}>76%</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className={isDark ? "text-slate-400" : "text-[#475569]"}>ADMIN & OPERATIONS</span>
                                                <span className={cn("font-bold", isDark ? "text-white" : "text-[#0F172A]")}>89%</span>
                                            </div>
                                        </div>

                                        {/* Telemetry node tag */}
                                        <div className="absolute bottom-1 right-2 font-mono text-[5px] text-neutral-500 uppercase tracking-widest">
                                            REGIONAL PLACEMENT TELEMETRY
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