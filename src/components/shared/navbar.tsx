"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, VolumeX, Volume2, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { motion } from "framer-motion";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [isAudioOn, setIsAudioOn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      // If at the very top of the Hero page (< 200px), NO links are marked as active
      if (window.scrollY < 200) {
        setActiveHash("");
        return;
      }

      const sections = ["sahayak", "human-capital", "physical-lab", "strategic-verticals"];
      let active = "";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Offset trigger: active if the section's top is in the upper viewport zone
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.25) {
            active = `#${sectionId}`;
          }
        }
      }
      setActiveHash(active);
    };

    window.addEventListener("scroll", handleScrollSpy);
    // Initial sync
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [pathname]);

  const isMountedRef = React.useRef(false);

  // Smooth scroll to target ID on click or path changes, resetting hash on initial refresh/mount
  useEffect(() => {
    if (isMountedRef.current) {
      if (window.location.hash) {
        const targetId = window.location.hash.replace("#", "");
        const timer = setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      isMountedRef.current = true;
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
        setActiveHash(`#${targetId}`);
      }
    }
  };

  // Futuristic, uppercase enterprise-grade navigation nodes
  const navLinks = [
    { name: "SAHAYAKAI ORCHESTRATION", href: "/#sahayak" },
    { name: "HUMAN CAPITAL INFRA", href: "/#human-capital" },
    { name: "PHYSICAL AI LAB", href: "/#physical-lab" },
    { name: "STRATEGIC VERTICALS", href: "/#strategic-verticals" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-6 md:px-12",
        isScrolled
          ? "bg-white/80 dark:bg-dark-base/95 backdrop-blur-[20px] dark:backdrop-blur-xl py-4 border-b border-[rgba(15,23,42,0.08)] dark:border-b-white/5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-[rgba(255,255,255,0.75)] dark:bg-transparent backdrop-blur-[20px] dark:backdrop-blur-none py-6 border-b border-[rgba(15,23,42,0.06)] dark:border-b-transparent"
      )}
    >
      <div className="w-full flex items-center justify-between relative z-50">
        {/* Brand Identity Logo - Left Column */}
        <div className="flex-1 flex justify-start items-center shrink-0">
          <Link href="/" className="select-none group block">
            <span className="font-brand font-bold text-2xl lg:text-3xl tracking-[0.15em] group-hover:tracking-[0.2em] transition-all duration-500 ease-out uppercase select-none">
              <span className="text-[#0F172A] dark:text-white">SARG</span>
              <span className="text-[#2563EB] dark:text-blue-400">VISION</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav Links - Center Column (Perfect Centering with gap-x-12 & Gradient Glow Underline) */}
        <nav className="hidden md:flex flex-initial items-center justify-center gap-x-6 flex-nowrap mx-auto shrink-0">
          {navLinks.map((link) => {
            const linkHash = link.href.split("#")[1];
            const isActive = pathname === "/" && activeHash === `#${linkHash}`;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  "relative py-1.5 px-3 text-xs lg:text-[13px] font-inter font-medium tracking-[0.15em] whitespace-nowrap transition-all duration-500 ease-out select-none group",
                  isActive 
                    ? "text-[#0F172A] dark:text-white font-semibold" 
                    : "text-[#475569] dark:text-gray-400 hover:text-[#0F172A] dark:hover:text-white"
                )}
              >
                <span className="relative z-10">{link.name}</span>

                {/* Underline — bg-current inherits text color in all states, both themes */}
                <span className={cn(
                  "absolute bottom-0 left-3 right-3 h-[1.5px] bg-current transition-all duration-300 ease-out origin-left",
                  isActive
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            );
          })}
        </nav>

        {/* Operating System Style Right Status Items - Right Column */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-x-4 flex-nowrap shrink-0">
          {/* Frosted Glass Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.08, y: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-[#0F172A] dark:text-gray-300 hover:text-[#0F172A] dark:hover:text-white hover:shadow-[0_4px_12px_rgba(37,99,235,0.15)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-200 cursor-pointer shadow-sm backdrop-blur-md"
            aria-label="Toggle Theme"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "backOut" }}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </motion.div>
          </motion.button>

          {/* Audio Status Element */}
          <div 
            onClick={() => setIsAudioOn(!isAudioOn)}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-[#E2E8F0] dark:border-white/5 text-[10px] lg:text-[11px] font-bold text-[#0F172A] dark:text-gray-300 select-none tracking-[0.12em] uppercase hover:text-[#0F172A] dark:hover:text-white hover:border-[#64748B]/20 dark:hover:border-white/10 transition-all duration-300 ease-out cursor-pointer shadow-[0_0_10px_rgba(255,255,255,0.01)] whitespace-nowrap"
          >
            {isAudioOn ? (
              <>
                <Volume2 className="w-4 h-4 text-[#0F172A] dark:text-accent-cyan" />
                <span className="text-[#0F172A] dark:text-accent-cyan">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-[#0F172A] dark:text-gray-400" />
                <span className="text-[#0F172A] dark:text-gray-400">AUDIO OFF</span>
              </>
            )}
          </div>

          {/* System Online Status Element */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#06B6D4]/5 border border-[#06B6D4]/15 text-[10px] lg:text-[11px] font-bold text-[#0F172A] dark:text-accent-cyan select-none tracking-[0.12em] uppercase dark:shadow-[0_0_15px_rgba(6,182,212,0.08)] shadow-sm whitespace-nowrap">
            <span className="relative flex h-1.5 w-1.5 lg:h-2 lg:w-2">
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 lg:h-2 lg:w-2 bg-[#06B6D4]"></span>
            </span>
            <span>SYS.ONLINE</span>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            "flex md:hidden focus:outline-none ml-auto transition-colors duration-300 cursor-pointer",
            isDark
              ? "text-gray-300 hover:text-white"
              : "text-slate-800 hover:text-[#0F172A]"
          )}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 w-full bg-[#F6F8FB]/95 dark:bg-[#050816]/95 backdrop-blur-2xl md:hidden flex flex-col justify-between p-8 pt-32 animate-fade-in border-t border-[#E2E8F0] dark:border-white/5">
          <nav className="flex flex-col gap-6 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleLinkClick(e, link.href);
                }}
                className="text-sm font-inter font-medium tracking-widest text-[#0F172A] dark:text-gray-300 hover:text-[#0F172A]/80 dark:hover:text-accent-cyan border-b border-[#E2E8F0] dark:border-white/5 pb-2 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4 pb-8">
            {/* Theme Toggle in Mobile Menu */}
            <div 
              onClick={toggleTheme}
              className="flex items-center justify-between border-t border-[#E2E8F0] dark:border-white/5 pt-4 cursor-pointer select-none"
            >
              <span className="text-[10px] font-bold text-slate-500 dark:text-gray-400 tracking-wider">THEME ENGINE</span>
              <div className="flex items-center gap-1.5 text-[9px] font-bold tracking-wider text-slate-500 dark:text-gray-400">
                {theme === "dark" ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-amber-400">DARK MODE</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-indigo-600" />
                    <span className="text-indigo-600">LIGHT MODE</span>
                  </>
                )}
              </div>
            </div>

            <div 
              onClick={() => setIsAudioOn(!isAudioOn)}
              className="flex items-center justify-between border-t border-[#E2E8F0] dark:border-white/5 pt-4 cursor-pointer select-none"
            >
              <span className="text-[10px] font-bold text-slate-500 dark:text-gray-400 tracking-wider">AUDIO MONITOR</span>
              <div className="flex items-center gap-1.5 text-[9px] font-bold tracking-wider text-slate-500 dark:text-gray-400">
                {isAudioOn ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-accent-cyan" />
                    <span className="text-accent-cyan">AUDIO ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-slate-500 dark:text-gray-500" />
                    <span>AUDIO OFF</span>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-[#E2E8F0] dark:border-white/5 pt-4">
              <span className="text-[10px] font-bold text-slate-500 dark:text-gray-400 tracking-wider">SYSTEM STATUS</span>
              <div className="flex items-center gap-1.5 text-[9px] text-accent-cyan font-bold tracking-wider">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-cyan"></span>
                </span>
                SYS.ONLINE
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
