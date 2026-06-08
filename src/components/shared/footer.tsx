"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const element = document.getElementById("contact-gate");
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  /* ── Shared token shortcuts ── */
  const columnHeading = cn(
    "text-xs font-bold tracking-[0.15em] uppercase select-none",
    isDark ? "text-white" : "text-[#0F172A]"
  );

  const navLink = cn(
    "text-xs font-light py-0.5 inline-block transition-colors duration-300",
    isDark
      ? "text-white/40 hover:text-cyan-400"
      : "text-[#64748B] hover:text-[#2563EB]"
  );

  return (
    <footer
      className={cn(
        "relative overflow-hidden z-10",
        isDark
          ? "bg-dark-base border-t border-white/5"
          : "bg-[#F8FAFC] border-t border-[#E2E8F0]"
      )}
    >
      {/* Subtle ambient glow — dark only */}
      {isDark && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[80px] bg-cyan-500/[0.003] blur-3xl pointer-events-none" />
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-8 relative z-10">

        {/* ── 4-COLUMN GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-10">

          {/* Column 1: SARGVISION BRAND */}
          <div className="space-y-4">
            <Link href="/" className="group w-max select-none block">
              <span
                className={cn(
                  "font-heading font-extrabold text-xl tracking-[0.1em] block",
                  isDark ? "text-white" : "text-[#0F172A]"
                )}
              >
                SARG<span className={isDark ? "text-cyan-400" : "text-[#2563EB]"}>VISION</span>
              </span>
            </Link>
            <p
              className={cn(
                "text-xs leading-relaxed font-light antialiased max-w-[240px]",
                isDark ? "text-white/40" : "text-[#64748B]"
              )}
            >
              Building sovereign intelligence infrastructure for Bharat and beyond.
            </p>
          </div>

          {/* Column 2: PLATFORM */}
          <div className="space-y-4">
            <h4 className={columnHeading}>Platform</h4>
            <ul className="space-y-2.5">
              <li><Link href="/sahayakai" className={navLink}>SahayakAI</Link></li>
              <li><Link href="/labs"      className={navLink}>Autonomous Agents</Link></li>
              <li><Link href="/research"  className={navLink}>Edge Compute</Link></li>
              <li><Link href="/solutions" className={navLink}>Strategic Verticals</Link></li>
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div className="space-y-4">
            <h4 className={columnHeading}>Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="/"        className={navLink}>Home</Link></li>
              <li><Link href="/vision"  className={navLink}>Vision</Link></li>
              <li><Link href="/careers" className={navLink}>Careers</Link></li>
              <li>
                <Link
                  href="/contact"
                  onClick={handleContactClick}
                  className={navLink}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: RESOURCES */}
          <div className="space-y-4">
            <h4 className={columnHeading}>Resources</h4>
            <ul className="space-y-2.5">
              <li><Link href="/contact" className={navLink}>Privacy Policy</Link></li>
              <li><Link href="/contact" className={navLink}>Terms of Use</Link></li>
              <li><Link href="/contact" className={navLink}>Security</Link></li>
            </ul>
          </div>

        </div>

        {/* ═══════════════════════════════════════════
            BOTTOM DATA STRIP
        ═══════════════════════════════════════════ */}
        <div
          className={cn(
            "flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[10px] font-mono tracking-wider select-none",
            isDark
              ? "border-t border-white/[0.03] text-white/20"
              : "border-t border-[#E2E8F0] text-[#94A3B8]"
          )}
        >
          <div>© 2026 SARGVISION</div>

          <div className={isDark ? "text-white/20" : "text-[#94A3B8]"}>
            Bengaluru, Bharat
          </div>

          <div
            className={cn(
              "flex items-center gap-1.5 font-mono text-[9px] tracking-wider",
              isDark ? "text-cyan-400/80" : "text-[#2563EB]"
            )}
          >
            <span
              className={cn(
                "w-1.5 h-1.5 rounded-full animate-pulse",
                isDark
                  ? "bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.5)]"
                  : "bg-[#2563EB] shadow-[0_0_6px_rgba(37,99,235,0.4)]"
              )}
            />
            <span>NATIONAL GRID ONLINE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
