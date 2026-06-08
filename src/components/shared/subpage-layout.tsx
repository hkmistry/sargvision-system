"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import NeuralParticles from "@/components/canvas/neural-particles";

interface SubpageLayoutProps {
  title: string;
  subtitle: string;
  tagline?: string;
  accentColor?: "cyan" | "purple" | "blue";
  children: React.ReactNode;
}

export default function SubpageLayout({
  title,
  subtitle,
  tagline = "SARGVISION ARCHITECTURE",
  accentColor = "cyan",
  children,
}: SubpageLayoutProps) {
  const accentText = {
    cyan: "text-accent-cyan",
    purple: "text-accent-purple",
    blue: "text-accent-blue",
  };

  const accentBorder = {
    cyan: "border-accent-cyan/20",
    purple: "border-accent-purple/20",
    blue: "border-accent-blue/20",
  };

  return (
    <main className="relative min-h-screen bg-dark-base overflow-hidden pt-28 pb-20 px-4 md:px-8 z-10 flex flex-col justify-between">
      {/* Global Background Matrix */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NeuralParticles />
      </div>

      {/* Absolute futuristic decorative structures */}
      <div className="absolute inset-0 tech-grid-dots opacity-30 pointer-events-none" />
      <div className="absolute inset-0 tech-grid-lines opacity-20 pointer-events-none" />
      
      {/* Soft dynamic floating meshes */}
      <div className={`absolute top-20 -left-40 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-40 bg-accent-${accentColor}/5`} />
      <div className={`absolute bottom-20 -right-40 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-40 bg-accent-${accentColor}/5`} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex-grow">
        {/* Navigation Breadcrumb */}
        <div className="mb-10 animate-fade-in">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white uppercase tracking-widest transition-colors duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 duration-200" />
            Return to Core Orbit
          </Link>
        </div>

        {/* Cinematic Header Block */}
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 border ${accentBorder[accentColor]} ${accentText[accentColor]}`}>
              {tagline}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">
              Sovereign Node v1.0.5
            </span>
          </div>
          
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white max-w-3xl leading-tight">
            {title}
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Dynamic Inner Content */}
        <div className="w-full">
          {children}
        </div>
      </div>
    </main>
  );
}
