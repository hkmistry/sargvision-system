"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Footer() {
  const handleScrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  /* ── Shared token shortcuts ── */
  const columnHeading = "font-editorial font-semibold text-sm tracking-wide select-none text-[#0F172A]";

  const navLink = "text-xs font-normal py-0.5 inline-block transition-colors duration-300 text-[#64748B] hover:text-[#2563EB]";

  return (
    <footer className="relative overflow-hidden z-10 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-8 relative z-10">

        {/* ── 2-COLUMN MOBILE / 4-COLUMN DESKTOP GRID ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-10">

          {/* Column 1: SARGVISION BRAND */}
          <div className="space-y-4">
            <Link href="/" className="group w-max select-none block">
              <span className="font-editorial font-semibold text-xl tracking-wide block text-[#0F172A]">
                SARG<span className="text-[#2563EB]">VISION</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed font-normal antialiased max-w-[240px] text-[#64748B]">
              Building sovereign intelligence infrastructure for Bharat.
            </p>
          </div>

          {/* Column 2: INFRASTRUCTURE */}
          <div className="space-y-4">
            <h4 className={columnHeading}>Infrastructure</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#sahayak" onClick={handleScrollTo("sahayak")} className={navLink}>
                  SahayakAI
                </Link>
              </li>
              <li>
                <Link href="/#human-capital" onClick={handleScrollTo("human-capital")} className={navLink}>
                  Human Capital Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/#physical-lab" onClick={handleScrollTo("physical-lab")} className={navLink}>
                  Physical Intelligence Lab
                </Link>
              </li>
              <li>
                <Link href="/#strategic-verticals" onClick={handleScrollTo("strategic-verticals")} className={navLink}>
                  Strategic Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: ORGANIZATION */}
          <div className="space-y-4">
            <h4 className={columnHeading}>Organization</h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className={navLink}>Home</Link></li>
              <li>
                <Link href="/#manifesto" onClick={handleScrollTo("manifesto")} className={navLink}>
                  Founding Doctrine
                </Link>
              </li>
              <li>
                <Link href="/#strategic-verticals" onClick={handleScrollTo("strategic-verticals")} className={navLink}>
                  Mission Briefing
                </Link>
              </li>
              <li>
                <Link href="/#contact-gate" onClick={handleScrollTo("contact-gate")} className={navLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: GOVERNANCE */}
          <div className="space-y-4">
            <h4 className={columnHeading}>Governance</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#contact-gate" onClick={handleScrollTo("contact-gate")} className={navLink}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/#contact-gate" onClick={handleScrollTo("contact-gate")} className={navLink}>
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/#contact-gate" onClick={handleScrollTo("contact-gate")} className={navLink}>
                  Security & Compliance
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ── COMPLIANCE SIGNATURE FOOTNOTE ── */}
        <div className="w-full text-center pb-6 text-[8px] sm:text-[9px] font-mono tracking-[0.25em] uppercase select-none opacity-40 text-slate-500">
          Sovereign Data Principles • Privacy by Design • Infrastructure First
        </div>

        {/* ═══════════════════════════════════════════
            BOTTOM DATA STRIP
        ═══════════════════════════════════════════ */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[10px] font-mono tracking-wider select-none border-t border-[#E2E8F0] text-[#94A3B8]">
          <div>© 2026 SARGVISION</div>

          <div className="text-[#94A3B8]">
            Bengaluru, Bharat
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-wider text-[#2563EB]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span>NATIONAL GRID ONLINE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
