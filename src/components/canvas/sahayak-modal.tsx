"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

interface SahayakModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SahayakModal({ isOpen, onClose }: SahayakModalProps) {
  const { theme } = useTheme();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    scale: "",
    requirements: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormState({
      name: "",
      email: "",
      organization: "",
      scale: "",
      requirements: ""
    });
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto px-4 py-8">
          {/* Backdrop with soft blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/75 backdrop-blur-md"
          />

          {/* Modal Container with 1.5px continuous gradient border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative w-full max-w-2xl p-[1.5px] rounded-2xl overflow-hidden z-10 select-none flex flex-col justify-between transition-all duration-500",
              theme === "dark"
                ? "bg-gradient-to-r from-blue-500/20 to-indigo-500/10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)]"
                : "bg-gradient-to-r from-[#2563EB]/25 to-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            )}
          >
            {/* Inner Container with solid background */}
            <div className={cn("w-full h-full rounded-[15px] overflow-hidden flex flex-col justify-between relative transition-colors duration-500", theme === "dark" ? "bg-[#030712]" : "bg-white")}>
              {/* Subtle inner border for layered depth */}
              <div className="absolute inset-[1px] border border-white/[0.02] rounded-[14px] pointer-events-none z-10" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-slate-400 dark:text-white/40 hover:text-[#0F172A] dark:hover:text-white transition-colors p-1.5 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg cursor-pointer z-30"
              >
                <X className="w-4 h-4" />
              </button>

              <AnimatePresence mode="wait">
                {submitted ? (
                  /* Success State */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-8 md:p-10 flex flex-col justify-center items-center text-center space-y-6 my-8 animate-fade-in"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#2563EB]/5 dark:bg-blue-500/5 border border-[#2563EB]/25 dark:border-blue-500/20 flex items-center justify-center">
                      <Check className="w-6 h-6 text-[#2563EB] dark:text-blue-400" />
                    </div>
                    
                    <div className="space-y-3 max-w-md">
                      <div className="font-mono text-[9px] text-[#2563EB] dark:text-blue-500 tracking-[0.2em] uppercase">
                        NODE INITIALIZATION INITIATED
                      </div>
                      <h3 className="font-heading font-extrabold text-2xl text-[#0F172A] dark:text-white tracking-tight">
                        Protocol Successfully Initiated
                      </h3>
                      <p className="text-xs text-[#64748B] dark:text-neutral-400 font-light leading-relaxed">
                        Thank you for submitting your node initialization parameters. Our engineering orchestration team will design your agentic architecture shortly.
                      </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-[#050814]/80 border border-slate-200 dark:border-white/5 rounded-xl p-4 w-full max-w-sm text-left font-mono text-[10px] text-slate-500 dark:text-white/30 space-y-1">
                      <div className="flex justify-between">
                        <span>DEPLOY_STATUS</span>
                        <span className="text-[#2563EB] dark:text-blue-400 font-medium">STAGING</span>
                      </div>
                      <div className="flex justify-between">
                        <span>QUEUE_POSITION</span>
                        <span className="text-slate-700 dark:text-white/60">#SV-842</span>
                      </div>
                      <div className="flex justify-between">
                        <span>TELEMETRY_LINK</span>
                        <span className="text-slate-700 dark:text-white/60">SECURE_ESTABLISHED</span>
                      </div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 border border-slate-200 dark:border-white/10 hover:border-[#2563EB] dark:hover:border-white/20 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full text-xs font-semibold text-[#64748B] dark:text-gray-300 hover:text-[#0F172A] dark:hover:text-white transition-all cursor-pointer"
                    >
                      Return to Platform
                    </button>
                  </motion.div>
                ) : (
                  /* Primary Modal Form */
                  <form key="form" onSubmit={handleSubmit} className="flex flex-col h-full">
                    
                    {/* Header Area */}
                    <div className="p-6 md:p-8 border-b border-slate-100 dark:border-white/[0.06] space-y-3.5 relative z-20">
                      <div className="flex items-center justify-between select-none">
                        <span className="font-mono text-[9px] font-bold text-[#2563EB] dark:text-blue-400/80 tracking-[0.25em] uppercase">
                          SAHAYAKAI DEPLOYMENT PROTOCOL
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-[#0F172A] dark:text-white tracking-tight leading-tight antialiased">
                          Initialize SahayakAI Node
                        </h2>
                        <p className="text-xs text-[#64748B] dark:text-neutral-400 font-light leading-relaxed max-w-xl">
                          Share your goals, requirements, and deployment scope. Our team will design the right SahayakAI architecture for your organization.
                        </p>
                      </div>
                    </div>

                    {/* Form Fields - Perfectly parallel grid layout. Hidden scrollbars completely on desktop */}
                    <div className="p-6 md:p-8 space-y-5 overflow-y-auto max-h-[520px] md:max-h-[600px] [&::-webkit-scrollbar]:hidden relative z-20">
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Full Name */}
                        <div className="flex flex-col text-left space-y-2">
                          <label className="text-[10px] font-bold tracking-[0.12em] text-[#64748B] dark:text-neutral-400 uppercase font-sans select-none">
                            Full Name
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="Your full name..."
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className={cn(
                              "w-full text-xs transition-all duration-200 px-4 py-2.5 focus:outline-none",
                              theme === "dark" 
                                ? cn(
                                    "bg-[#050814]/90 border rounded-xl text-neutral-200 placeholder-neutral-500 focus:border-blue-500/40",
                                    formState.name 
                                      ? 'border-blue-500/30' 
                                      : 'border-white/10 hover:border-white/20'
                                  )
                                : cn(
                                    "bg-transparent border-b border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:border-b-[#2563EB] focus:ring-0 rounded-none border-t-transparent border-l-transparent border-r-transparent",
                                    formState.name ? "border-b-[#2563EB]" : "border-b-[#E2E8F0]"
                                  )
                            )}
                          />
                        </div>

                        {/* Work Email */}
                        <div className="flex flex-col text-left space-y-2">
                          <label className="text-[10px] font-bold tracking-[0.12em] text-[#64748B] dark:text-neutral-400 uppercase font-sans select-none">
                            Work Email
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="yourname@domain.com..."
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className={cn(
                              "w-full text-xs transition-all duration-200 px-4 py-2.5 focus:outline-none",
                              theme === "dark" 
                                ? cn(
                                    "bg-[#050814]/90 border rounded-xl text-neutral-200 placeholder-neutral-500 focus:border-blue-500/40",
                                    formState.email 
                                      ? 'border-blue-500/30' 
                                      : 'border-white/10 hover:border-white/20'
                                  )
                                : cn(
                                    "bg-transparent border-b border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:border-b-[#2563EB] focus:ring-0 rounded-none border-t-transparent border-l-transparent border-r-transparent",
                                    formState.email ? "border-b-[#2563EB]" : "border-b-[#E2E8F0]"
                                  )
                            )}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Company / Organization Name */}
                        <div className="flex flex-col text-left space-y-2">
                          <label className="text-[10px] font-bold tracking-[0.12em] text-[#64748B] dark:text-neutral-400 uppercase font-sans select-none">
                            Company / Organization Name
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="Organization name..."
                            value={formState.organization}
                            onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                            className={cn(
                              "w-full text-xs transition-all duration-200 px-4 py-2.5 focus:outline-none",
                              theme === "dark" 
                                ? cn(
                                    "bg-[#050814]/90 border rounded-xl text-neutral-200 placeholder-neutral-500 focus:border-blue-500/40",
                                    formState.organization 
                                      ? 'border-blue-500/30' 
                                      : 'border-white/10 hover:border-white/20'
                                  )
                                : cn(
                                    "bg-transparent border-b border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:border-b-[#2563EB] focus:ring-0 rounded-none border-t-transparent border-l-transparent border-r-transparent",
                                    formState.organization ? "border-b-[#2563EB]" : "border-b-[#E2E8F0]"
                                  )
                            )}
                          />
                        </div>

                        {/* Estimated Scale Dropdown */}
                        <div className="flex flex-col text-left space-y-2 relative">
                          <label className="text-[10px] font-bold tracking-[0.12em] text-[#64748B] dark:text-neutral-400 uppercase font-sans select-none">
                            Estimated Scale
                          </label>
                          <div className="relative">
                            <select
                              required
                              value={formState.scale}
                              onChange={(e) => setFormState({ ...formState, scale: e.target.value })}
                              className={cn(
                                "w-full text-xs transition-all duration-200 px-4 py-2.5 appearance-none cursor-pointer pr-10 focus:outline-none",
                                theme === "dark" 
                                  ? cn(
                                      "bg-[#050814]/90 border rounded-xl text-neutral-200 focus:border-cyan-500/60 focus:shadow-[0_0_15px_rgba(6,182,212,0.15)]",
                                      formState.scale 
                                        ? 'border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.08)]' 
                                        : 'border-white/10 hover:border-white/20'
                                    )
                                  : cn(
                                      "bg-transparent border-b border-[#E2E8F0] text-[#0F172A] focus:border-b-[#2563EB] focus:ring-0 rounded-none border-t-transparent border-l-transparent border-r-transparent",
                                      formState.scale ? "border-b-[#2563EB]" : "border-b-[#E2E8F0]"
                                    )
                              )}
                            >
                              <option value="" disabled className="bg-white dark:bg-[#030712]">Select scale...</option>
                              <option value="Individual" className="bg-white dark:bg-[#030712]">Individual</option>
                              <option value="Institution" className="bg-white dark:bg-[#030712]">Institution</option>
                              <option value="Enterprise" className="bg-white dark:bg-[#030712]">Enterprise</option>
                              <option value="Government" className="bg-white dark:bg-[#030712]">Government</option>
                            </select>
                            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-white/30 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-5">
                        {/* Business Requirements Textarea */}
                        <div className="flex flex-col text-left space-y-2">
                          <label className="text-[10px] font-bold tracking-[0.12em] text-[#64748B] dark:text-neutral-400 uppercase font-sans select-none">
                            Business Requirements
                          </label>
                          <textarea
                            required
                            placeholder="Describe your vision, objectives, and any specific requirements for this node..."
                            value={formState.requirements}
                            onChange={(e) => setFormState({ ...formState, requirements: e.target.value })}
                            className={cn(
                              "w-full text-xs transition-all duration-200 px-4 py-2.5 focus:outline-none resize-none h-28",
                              theme === "dark" 
                                ? cn(
                                    "bg-[#050814]/90 border rounded-xl text-neutral-200 placeholder-neutral-500 focus:border-blue-500/40",
                                    formState.requirements 
                                      ? 'border-blue-500/30' 
                                      : 'border-white/10 hover:border-white/20'
                                  )
                                : cn(
                                    "bg-transparent border-b border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:border-b-[#2563EB] focus:ring-0 rounded-none border-t-transparent border-l-transparent border-r-transparent",
                                    formState.requirements ? "border-b-[#2563EB]" : "border-b-[#E2E8F0]"
                                  )
                            )}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Footer Area */}
                    <div className="p-6 md:p-8 border-t border-slate-100 dark:border-white/[0.06] bg-slate-50/50 dark:bg-[#02050c]/40 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-20">
                      {/* Footnote details - Subtle and secondary */}
                      <div className="flex flex-col text-left space-y-1 select-none">
                        <span className="text-[10px] text-slate-400 dark:text-white/30 font-mono tracking-wider">
                          Typical Response Time: 24–48 Hours
                        </span>
                        <span className="text-[9px] text-[#64748B] dark:text-neutral-600 font-mono uppercase tracking-widest">
                          Bengaluru, Bharat
                        </span>
                      </div>

                      {/* Primary CTA - Directional Motion on hover & Edge Illumination */}
                      <button
                        type="submit"
                        className={cn(
                          "group px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 hover:-translate-y-[1px] hover:translate-x-[1px] border flex items-center justify-center gap-2 cursor-pointer focus:outline-none active:scale-[0.98]",
                          theme === "dark"
                            ? "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white border-blue-500/30 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_4px_12px_rgba(0,0,0,0.5)]"
                            : "bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white border-transparent shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:opacity-95"
                        )}
                      >
                        <span>Initialize Deployment</span>
                        <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </button>
                    </div>

                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
