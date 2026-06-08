"use client";

import React, { useRef, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export default function NeuralParticles() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false, radius: 220 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const maxParticles = 90; // Balanced for premium visuals + peak performance
    const connectionDistance = 140;

    // Responsive Canvas Resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Color selections for deep-tech atmosphere
    const colors = theme === "dark"
      ? [
          "rgba(6, 182, 212, 0.4)",  // Accent Cyan
          "rgba(139, 92, 246, 0.4)", // Accent Purple
          "rgba(59, 130, 246, 0.3)",  // Accent Blue
        ]
      : [
          "rgba(148, 163, 184, 0.15)", // stroke-[#94A3B8] opacity-15
        ];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.08, // Slowed down for sovereign quiet observatory drift
          vy: (Math.random() - 0.5) * 0.08,
          radius: Math.random() * 1.5 + 0.8, // Slightly smaller, refined constellation nodes
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Loop through all nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update positions
        p.x += p.vx;
        p.y += p.vy;

        // Bounce boundaries
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse influence: gentle pull or push
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouseRef.current.radius) {
            // Apply subtle orbital drift or attraction
            const force = (mouseRef.current.radius - dist) / mouseRef.current.radius;
            p.x += (dx / dist) * force * 0.6;
            p.y += (dy / dist) * force * 0.6;
          }
        }

        // Calculate dynamic breathing state
        const timeFactor = Date.now() * 0.0003;
        const breathingAlpha = 0.12 + Math.sin(timeFactor + i * 0.15) * 0.10;
        const dynamicColor = p.color.replace(/[\d.]+\)$/, breathingAlpha.toFixed(3) + ")");

        // Render nodes
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = dynamicColor;
        // Radial bloom glow
        ctx.shadowBlur = 5;
        ctx.shadowColor = dynamicColor;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset

        // Render spiderweb connecting lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Premium gradient line between connecting points
            const grad = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            grad.addColorStop(0, p.color.replace(/[\d.]+\)$/, alpha + ")"));
            grad.addColorStop(1, p2.color.replace(/[\d.]+\)$/, alpha + ")"));
            
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw connections to mouse
        if (mouseRef.current.active) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRef.current.radius) {
            const alpha = (1 - dist / mouseRef.current.radius) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = theme === "dark" ? `rgba(6, 182, 212, ${alpha})` : `rgba(148, 163, 184, ${alpha * 0.55})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    // Event Handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none block z-0"
      style={{ mixBlendMode: theme === "dark" ? "screen" : "multiply" }}
    />
  );
}
