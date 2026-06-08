"use client";

import React, { useState } from "react";
import { Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

export default function ContactSection({ isSubpage = false }: { isSubpage?: boolean }) {
  const { theme } = useTheme();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isTransmitting, setIsTransmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTransmitting(true);
    setTimeout(() => {
      setIsTransmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setSubmitted(false);
    setIsTransmitting(false);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact-gate"
      className={`relative w-full z-10 px-4 md:px-8 max-w-6xl mx-auto overflow-visible ${isSubpage ? "py-4" : "pt-32 pb-16"}`}
    >
      {/* Autofill override */}
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus {
          -webkit-text-fill-color: var(--foreground) !important;
          -webkit-box-shadow: 0 0 0px 1000px var(--background) inset !important;
          transition: background-color 5000s ease-in-out 0s !important;
        }
      `}</style>

      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-cyan-500/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 -translate-x-1/2 w-[400px] h-[400px] bg-purple-500/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.06 }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
        className="w-full relative"
      >
        {/* ── HERO (only on embedded mode) ── */}
        {!isSubpage && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-4 mb-16 relative z-10 animate-fade-in"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-cyan-500/20 backdrop-blur-md text-[#2563EB] dark:text-cyan-400/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] dark:bg-cyan-400/80 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest font-mono">
                SARGVISION Engagement Gateway
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-[#0F172A] dark:text-white tracking-tight leading-tight text-center antialiased">
              Connect with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-blue-500 to-[#4F46E5] dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 font-extrabold drop-shadow-[0_0_15px_rgba(6,182,212,0.35)]">
                SARGVISION
              </span>
            </h2>

            <p className="text-[#64748B] dark:text-gray-400 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Whether you're an institution, organization, business, government body, or potential partner, we'd love to hear from you and explore how we can work together.
            </p>
          </motion.div>
        )}

        {/* ── SOVEREIGN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-stretch overflow-visible">

          {/* ═══════════════════════════════════════════
              LEFT COLUMN — Clean Luxury SaaS Form Container
          ═══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            className={cn(
              "relative overflow-hidden rounded-[20px] p-8 md:p-10 transition-all duration-700 flex flex-col justify-between min-h-[480px] backdrop-blur-xl",
              theme === "dark"
                ? "border-2 border-cyan-500/60 hover:border-cyan-400/80 bg-[#030712]/60 shadow-[0_0_28px_rgba(6,182,212,0.22),inset_0_0_20px_rgba(6,182,212,0.05)] hover:shadow-[0_0_55px_rgba(6,182,212,0.32)]"
                : "bg-[rgba(255,255,255,0.85)] border-2 border-[#E2E8F0] shadow-[0_15px_40px_rgba(15,23,42,0.12)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.18)] hover:-translate-y-1 hover:border-[#CBD5E1]"
            )}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                /* ── Success State ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="py-16 flex flex-col justify-center items-center space-y-6 text-center select-none flex-grow"
                >
                  <div className="w-14 h-14 rounded-full bg-[#2563EB]/5 dark:bg-cyan-500/5 border border-[#2563EB]/25 dark:border-cyan-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.05)]">
                    <Check className="w-6 h-6 text-[#2563EB] dark:text-cyan-400/90" />
                  </div>

                  <div className="space-y-2 max-w-sm">
                    <h3 className="font-heading font-bold text-xl text-[#0F172A] dark:text-white tracking-tight">
                      Message Sent Successfully
                    </h3>
                    <p className="text-xs text-[#64748B] dark:text-neutral-400 font-light leading-relaxed">
                      Thank you for reaching out. A member of our strategic team will connect with you shortly to explore collaborative opportunities.
                    </p>
                  </div>

                  <button
                    onClick={resetForm}
                    className="mt-6 px-5 py-2.5 border border-slate-200 dark:border-white/10 hover:border-[#2563EB] dark:hover:border-white/20 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 rounded-full text-xs font-semibold text-[#64748B] dark:text-gray-300 hover:text-[#0F172A] dark:hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                /* ── Contact Form ── */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-7 flex-grow flex flex-col justify-between h-full relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="space-y-6">

                    {/* ENTER NAME */}
                    <div className="flex flex-col text-left space-y-3">
                      <label className="text-[10px] md:text-xs font-medium tracking-wider text-[#64748B] uppercase font-sans select-none">
                        Enter Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your full name..."
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className={cn(
                          "w-full text-sm transition-all duration-300 px-4 py-3.5 focus:outline-none",
                          theme === "dark"
                            ? cn(
                                "bg-[#050814]/90 border rounded-xl text-neutral-200 placeholder-neutral-500 focus:border-cyan-500/60 focus:shadow-[0_0_15px_rgba(6,182,212,0.15)]",
                                formState.name
                                  ? "border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.08)]"
                                  : "border-white/10 hover:border-white/20"
                              )
                            : cn(
                                "bg-transparent border-b border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:border-b-[#2563EB] focus:ring-0 rounded-none border-t-transparent border-l-transparent border-r-transparent",
                                formState.name ? "border-b-[#2563EB]" : "border-b-[#E2E8F0]"
                              )
                        )}
                      />
                    </div>

                    {/* PROVIDE EMAIL */}
                    <div className="flex flex-col text-left space-y-3">
                      <label className="text-[10px] md:text-xs font-medium tracking-wider text-[#64748B] uppercase font-sans select-none">
                        Provide Email
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="yourname@domain.com..."
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className={cn(
                          "w-full text-sm transition-all duration-300 px-4 py-3.5 focus:outline-none",
                          theme === "dark"
                            ? cn(
                                "bg-[#050814]/90 border rounded-xl text-neutral-200 placeholder-neutral-500 focus:border-cyan-500/60 focus:shadow-[0_0_15px_rgba(6,182,212,0.15)]",
                                formState.email
                                  ? "border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.08)]"
                                  : "border-white/10 hover:border-white/20"
                              )
                            : cn(
                                "bg-transparent border-b border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:border-b-[#2563EB] focus:ring-0 rounded-none border-t-transparent border-l-transparent border-r-transparent",
                                formState.email ? "border-b-[#2563EB]" : "border-b-[#E2E8F0]"
                              )
                        )}
                      />
                    </div>

                    {/* COMPOSE MESSAGE */}
                    <div className="flex flex-col text-left space-y-3">
                      <label className="text-[10px] md:text-xs font-medium tracking-wider text-[#64748B] uppercase font-sans select-none">
                        Compose Message
                      </label>
                      <textarea
                        required
                        placeholder="How can we help you? Describe your vision or inquiry..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className={cn(
                          "w-full text-sm transition-all duration-300 px-4 py-3.5 focus:outline-none resize-none h-36 md:h-44",
                          theme === "dark"
                            ? cn(
                                "bg-[#050814]/90 border rounded-xl text-neutral-200 placeholder-neutral-500 focus:border-cyan-500/60 focus:shadow-[0_0_15px_rgba(6,182,212,0.15)]",
                                formState.message
                                  ? "border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.08)]"
                                  : "border-white/10 hover:border-white/20"
                              )
                            : cn(
                                "bg-transparent border-b border-[#E2E8F0] text-[#0F172A] placeholder-slate-400 focus:border-b-[#2563EB] focus:ring-0 rounded-none border-t-transparent border-l-transparent border-r-transparent",
                                formState.message ? "border-b-[#2563EB]" : "border-b-[#E2E8F0]"
                              )
                        )}
                      />
                    </div>

                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isTransmitting}
                      className={cn(
                        "w-full py-3.5 rounded-xl border font-sans text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ease-in-out hover:-translate-y-[1px] flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]",
                        isTransmitting ? "pointer-events-none opacity-80" : "",
                        formState.name && formState.email && formState.message
                          ? theme === "dark"
                            ? "border-cyan-400 bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-neutral-950 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:from-cyan-400 hover:to-blue-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.45)]"
                            : "border-transparent bg-gradient-to-r from-[#2563EB] to-[#4F46E5] text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:opacity-95 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]"
                          : theme === "dark"
                          ? "border-cyan-500/45 bg-gradient-to-r from-cyan-950/40 via-[#051124]/90 to-cyan-950/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_22px_rgba(6,182,212,0.2),inset_0_0_12px_rgba(6,182,212,0.05)]"
                          : "border-slate-200 bg-slate-50 text-slate-400 hover:bg-slate-100 hover:border-slate-300"
                      )}
                    >
                      {isTransmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>

                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ═══════════════════════════════════════════
              RIGHT COLUMN — Cinematic Robot Screen
          ═══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 1, type: "spring", stiffness: 45, delay: 0.2 }}
            className={cn(
              "relative z-10 flex overflow-hidden rounded-[24px] transition-all duration-700 lg:translate-x-2 lg:scale-[1.02] min-h-[460px] lg:min-h-0 w-full backdrop-blur-xl",
              theme === "dark"
                ? "border-2 border-cyan-500/60 hover:border-cyan-400/80 bg-[#02040a]/80 shadow-[0_0_28px_rgba(6,182,212,0.22),inset_0_0_20px_rgba(6,182,212,0.05)] hover:shadow-[0_0_55px_rgba(6,182,212,0.32)]"
                : "bg-white/50 border border-[#E2E8F0] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] p-2"
            )}
          >
            {/* Robot video — fully edge-to-edge */}
            <div className="relative w-full h-full bg-neutral-950 rounded-[22px] overflow-hidden">
              <video
                src="/videos/hiiiiiiii.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Cyan Pulse — Concierge Awake/Listening indicator */}
              <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 bg-neutral-950/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-cyan-500/20 select-none pointer-events-none">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500" />
                </span>
                <span className="text-[6px] font-mono text-cyan-400 uppercase tracking-widest">CONCIERGE_ENGAGED</span>
              </div>
            </div>
          </motion.div>

        </div>
        {/* END SOVEREIGN GRID */}

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 mb-6 w-full text-center space-y-8 relative select-none"
        >
          {/* Volumetric backdrop glow */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-gradient-to-r from-cyan-500/[0.03] via-purple-500/[0.015] to-blue-500/[0.03] rounded-full blur-[90px] pointer-events-none select-none" />

          <h3 className="font-heading font-light text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-premium-ice via-premium-grey to-premium-slate tracking-tight leading-relaxed max-w-3xl mx-auto antialiased">
            "We do not merely build technology. <br className="hidden sm:inline" />
            We architect the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-blue-500 to-[#4F46E5] dark:from-cyan-400 dark:via-cyan-300 dark:to-blue-400 font-medium tracking-wide drop-shadow-[0_0_12px_rgba(34,211,238,0.25)]">
              sovereign foundations
            </span>{" "}
            of tomorrow's intelligence."
          </h3>

          <div className="space-y-2.5 relative z-10 pt-4 flex flex-col items-center">
            <div className="font-heading font-bold text-sm text-[#2563EB] dark:text-cyan-400 tracking-[0.35em] uppercase drop-shadow-[0_0_8px_rgba(6,182,212,0.4)] select-none">
              SARGVISION
            </div>
            <div className="font-mono text-[8px] sm:text-[9px] text-neutral-400 tracking-[0.18em] uppercase flex items-center justify-center gap-2 select-none">
              <span className="text-neutral-700 font-mono text-[8px]">•</span>
              <span className="flex items-center gap-1.5 text-[#64748B] dark:text-neutral-400">
                <span className="inline-block w-1 h-1 rounded-full bg-[#2563EB] dark:bg-cyan-400 animate-pulse shadow-[0_0_4px_rgba(34,211,238,0.5)]" />
                Building intelligent infrastructure for the future
              </span>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
