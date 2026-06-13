"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "@/components/theme-provider";

interface LockTarget {
  x: number;
  y: number;
  width: number;
  height: number;
  borderRadius: string;
}

type CursorState = "default" | "card" | "button" | "button-large" | "link" | "robot" | "robot-tight";

export default function CustomCursor() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [isTouchOrMobile, setIsTouchOrMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkDevice = () => {
        setIsTouchOrMobile(
          window.matchMedia("(pointer: coarse)").matches ||
          window.matchMedia("(hover: none)").matches ||
          window.innerWidth < 768
        );
      };
      checkDevice();
      window.addEventListener("resize", checkDevice);
      return () => {
        window.removeEventListener("resize", checkDevice);
      };
    }
  }, []);

  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [lockTarget, setLockTarget] = useState<LockTarget | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Refs for tracking active state inside listeners without re-binding
  const cursorStateRef = useRef<CursorState>("default");
  const lockTargetRef = useRef<LockTarget | null>(null);
  const activeElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    cursorStateRef.current = cursorState;
  }, [cursorState]);

  useEffect(() => {
    lockTargetRef.current = lockTarget;
  }, [lockTarget]);

  // Motion Values for pointer and tracking ring (GPU hardware-accelerated transforms)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringTargetX = useMotionValue(-100);
  const ringTargetY = useMotionValue(-100);

  // Precision spring tuning: low latency, zero floatiness/elastic bouncing
  const springOptions = { stiffness: 850, damping: 48, mass: 0.45 };
  const ringX = useSpring(ringTargetX, springOptions);
  const ringY = useSpring(ringTargetY, springOptions);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!lockTargetRef.current) {
        ringTargetX.set(e.clientX);
        ringTargetY.set(e.clientY);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const button = target.closest("button, [role='button'], .cursor-button") as HTMLElement;
      const link = target.closest("a, .cursor-link") as HTMLElement;
      const card = target.closest(".glowing-card, [data-cursor='card']") as HTMLElement;
      const robotHotspot = target.closest(".robot-hotspot") as HTMLElement;
      const robotZone = target.closest(".robot-interaction-zone") as HTMLElement;

      activeElementRef.current = button || link || card || robotHotspot || robotZone || null;

      if (robotHotspot) {
        setCursorState("robot-tight");
        setLockTarget(null);
      } else if (robotZone) {
        setCursorState("robot");
        setLockTarget(null);
      } else if (button) {
        const rect = button.getBoundingClientRect();
        const isLarge = rect.width > 120 || rect.height > 60 || button.getAttribute("data-cursor-lock") === "false";

        if (isLarge) {
          setCursorState("button-large");
          setLockTarget(null);
        } else {
          setCursorState("button");
          const newLock = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
            width: rect.width,
            height: rect.height,
            borderRadius: window.getComputedStyle(button).borderRadius || "8px",
          };
          setLockTarget(newLock);
          ringTargetX.set(newLock.x);
          ringTargetY.set(newLock.y);
        }
      } else if (link) {
        setCursorState("link");
        setLockTarget(null);
      } else if (card) {
        setCursorState("card");
        setLockTarget(null);
      } else {
        setCursorState("default");
        setLockTarget(null);
      }
    };

    const handleScroll = () => {
      if (activeElementRef.current && cursorStateRef.current === "button") {
        const rect = activeElementRef.current.getBoundingClientRect();
        const newLock = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width,
          height: rect.height,
          borderRadius: window.getComputedStyle(activeElementRef.current).borderRadius || "8px",
        };
        setLockTarget(newLock);
        ringTargetX.set(newLock.x);
        ringTargetY.set(newLock.y);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isTouchOrMobile) return null;
  if (!isVisible) return null;

  // ─── Neutral, institutional color palette ─────────────────────────────────
  // No cyan. No neon. No glow. Pure precision.
  const ring = {
    // Light mode: dark slate rings at varying opacity
    light: {
      default:     "rgba(15, 23, 42, 0.30)",
      card:        "rgba(15, 23, 42, 0.40)",
      link:        "rgba(15, 23, 42, 0.55)",
      button:      "rgba(15, 23, 42, 0.45)",
      buttonLarge: "rgba(15, 23, 42, 0.45)",
    },
    // Dark mode: white rings at varying opacity
    dark: {
      default:     "rgba(255, 255, 255, 0.35)",
      card:        "rgba(255, 255, 255, 0.45)",
      link:        "rgba(255, 255, 255, 0.60)",
      button:      "rgba(255, 255, 255, 0.50)",
      buttonLarge: "rgba(255, 255, 255, 0.50)",
    },
  };

  const palette = isDark ? ring.dark : ring.light;

  // ─── Ring geometry per cursor state ──────────────────────────────────────
  const getRingStyle = (): React.CSSProperties => {
    switch (cursorState) {
      case "card":
        return {
          width: 26,
          height: 26,
          borderRadius: "50%",
          borderColor: palette.card,
          borderWidth: "1px",
          borderStyle: "solid",
        };
      case "link":
        return {
          width: 14,
          height: 14,
          borderRadius: "50%",
          borderColor: palette.link,
          borderWidth: "1px",
          borderStyle: "solid",
        };
      case "button":
        if (lockTarget) {
          return {
            width: lockTarget.width + 12,
            height: lockTarget.height + 12,
            borderRadius: lockTarget.borderRadius,
            borderColor: palette.button,
            borderWidth: "1px",
            borderStyle: "solid",
          };
        }
        return {};
      case "button-large":
        return {
          width: 28,
          height: 28,
          borderRadius: "50%",
          borderColor: palette.buttonLarge,
          borderWidth: "1px",
          borderStyle: "solid",
        };
      case "robot":
      case "robot-tight":
        return {
          width: cursorState === "robot-tight" ? 16 : 24,
          height: cursorState === "robot-tight" ? 16 : 24,
          borderRadius: "0%",
          borderColor: "transparent",
          borderWidth: "0px",
        };
      default:
        return {
          width: 18,
          height: 18,
          borderRadius: "50%",
          borderColor: palette.default,
          borderWidth: "1px",
          borderStyle: "solid",
        };
    }
  };

  const isRobotMode = cursorState === "robot" || cursorState === "robot-tight";

  // Robot zone (observation chamber) is always dark regardless of page theme —
  // brackets must always be white to be visible on that dark surface.
  const bracketColor = "rgba(255,255,255,0.50)";

  return (
    <>
      {/* Hide native system cursors */}
      <style>{`
        html, body {
          cursor: none !important;
        }
        a, button, [role="button"], input, select, textarea, .glowing-card, iframe, spline-viewer {
          cursor: none !important;
        }
      `}</style>

      {/* A. Core Central Node */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{ x: mouseX, y: mouseY }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      >
        <div className="relative flex items-center justify-center">
          {/*
            White dot universally — visible on dark backgrounds.
            On light backgrounds: a subtle dark outline (box-shadow) creates contrast
            without using a dark fill that looks harsh.
          */}
          <div
            className="w-1.5 h-1.5 rounded-full transition-colors duration-300 relative z-10"
            style={{
              backgroundColor: isDark ? "#ffffff" : "#0F172A",
              boxShadow: isDark
                ? "0 0 0 1px rgba(255,255,255,0.15)"
                : "0 0 0 1px rgba(15,23,42,0.25)",
            }}
          />
        </div>
      </motion.div>

      {/* B. Outer Tracking Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{ x: ringX, y: ringY }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      >
        <div
          className="relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center"
          style={{ ...getRingStyle() }}
        >
          {/* Precision Inspection Brackets in Robot Mode — desaturated */}
          {isRobotMode && (
            <div className="absolute inset-0">
              <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l transition-transform duration-500" style={{ borderColor: bracketColor }} />
              <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r transition-transform duration-500" style={{ borderColor: bracketColor }} />
              <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l transition-transform duration-500" style={{ borderColor: bracketColor }} />
              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r transition-transform duration-500" style={{ borderColor: bracketColor }} />
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
