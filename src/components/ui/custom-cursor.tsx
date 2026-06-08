"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface LockTarget {
  x: number;
  y: number;
  width: number;
  height: number;
  borderRadius: string;
}

type CursorState = "default" | "card" | "button" | "button-large" | "link" | "robot" | "robot-tight";

export default function CustomCursor() {
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
    // Reveal cursor only on client-side pointer movement
    const handlePointerMove = (e: PointerEvent) => {
      if (!isVisible) setIsVisible(true);

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Decouple tracking ring position if locked onto a button
      if (!lockTargetRef.current) {
        ringTargetX.set(e.clientX);
        ringTargetY.set(e.clientY);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // Global mouseover context listener
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Classify hovering targets
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
        // Skip magnetic center-locking for large buttons/cards to maintain smooth pointer tracking
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
      // Recalculate target boundaries dynamically on scroll to prevent cursor frame decoupling
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

  if (!isVisible) return null;

  // Determine Tracking Ring visual styling based on contextual states
  const getRingStyle = () => {
    switch (cursorState) {
      case "card":
        return {
          width: 26,
          height: 26,
          borderRadius: "50%",
          borderColor: "rgba(6, 182, 212, 0.5)",
          borderWidth: "1px",
          boxShadow: "0 0 10px rgba(6, 182, 212, 0.15)",
        };
      case "link":
        return {
          width: 14,
          height: 14,
          borderRadius: "50%",
          borderColor: "rgba(6, 182, 212, 0.8)",
          borderWidth: "1px",
          boxShadow: "0 0 8px rgba(6, 182, 212, 0.25)",
        };
      case "button":
        if (lockTarget) {
          return {
            width: lockTarget.width + 12,
            height: lockTarget.height + 12,
            borderRadius: lockTarget.borderRadius,
            borderColor: "rgba(6, 182, 212, 0.65)",
            borderWidth: "1px",
            boxShadow: "0 0 14px rgba(6, 182, 212, 0.2)",
          };
        }
        return {};
      case "button-large":
        return {
          width: 28,
          height: 28,
          borderRadius: "50%",
          borderColor: "rgba(6, 182, 212, 0.75)",
          borderWidth: "1px",
          boxShadow: "0 0 10px rgba(6, 182, 212, 0.2)",
        };
      case "robot":
      case "robot-tight":
        // tracking brackets, outer ring fades out (replaced by inner crosshair brackets)
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
          borderColor: "rgba(6, 182, 212, 0.35)",
          borderWidth: "1px",
        };
    }
  };

  const isRobotMode = cursorState === "robot" || cursorState === "robot-tight";

  return (
    <>
      {/* Self-contained CSS sheet to cleanly hide native system cursors on interactive targets */}
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
          {/* 4px-6px Crisp Core with Breathing Pulse */}
          <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#06b6d4] transition-all duration-300 relative z-10" />

          {/* Micro Telemetry Focus Indicator for Robot Mode */}
          {isRobotMode && (
            <div 
              className={`absolute w-3.5 h-3.5 rounded-full border border-dashed border-accent-cyan/60 pointer-events-none transition-all duration-700 ${
                cursorState === "robot-tight" ? "scale-105 opacity-100" : "scale-75 opacity-40"
              }`}
              style={{
                animation: "spin 12s linear infinite",
              }}
            />
          )}
        </div>
      </motion.div>

      {/* B. Outer Tracking Ring / Lock-on Brackets */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{ x: ringX, y: ringY }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      >
        <div
          className="relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center"
          style={{
            ...getRingStyle(),
          }}
        >
          {/* Precision Tracking Brackets in Robot Mode */}
          {isRobotMode && (
            <div className="absolute inset-0">
              {/* Corner 1: Top-Left */}
              <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-accent-cyan/85 transition-transform duration-500" />
              {/* Corner 2: Top-Right */}
              <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-accent-cyan/85 transition-transform duration-500" />
              {/* Corner 3: Bottom-Left */}
              <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-accent-cyan/85 transition-transform duration-500" />
              {/* Corner 4: Bottom-Right */}
              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-accent-cyan/85 transition-transform duration-500" />
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
