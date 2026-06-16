"use client";

import Link from "next/link";
import BookingWidget from "./BookingWidget";

interface HeroProps {
  heroHeadline?: string;
  accent?: string;
}

export default function Hero({ heroHeadline = "STEP ONTO THE GRID", accent = "#E11B22" }: HeroProps) {
  return (
    <section 
      id="top" 
      className="relative min-h-screen flex items-center px-6 md:px-12 pt-32 pb-16 overflow-hidden bg-[#2D3139]"
    >
      {/* Grid texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "54px 54px",
        }}
      />
      {/* Light dark diagonal pattern background */}
      <div 
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(135deg, #2D3139 0px, #2D3139 14px, #353A43 14px, #353A43 28px)",
        }}
      />
      {/* Radial soft ambient glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(120% 90% at 78% 18%, rgba(225,27,34,0.12) 0%, rgba(225,27,34,0) 50%),
            linear-gradient(180deg, rgba(45,49,57,0.2) 0%, rgba(45,49,57,0.3) 40%, rgba(45,49,57,0.95) 100%)
          `,
        }}
      />
      
      <div className="absolute top-[130px] right-[48px] font-chakra text-[10px] tracking-widest text-slate-500 pointer-events-none hidden lg:block">
        // ARENA ACTION FOOTAGE
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column */}
        <div className="lg:col-span-5 flex flex-col items-start animate-hero-up">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 border border-[#515866] bg-[#414752]/70 backdrop-blur-sm font-chakra text-[10px] tracking-widest text-slate-200 mb-6 font-semibold">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse-slow" />
            INDOOR & OUTDOOR · OPEN 7 DAYS
          </div>
          
          <h1 className="font-saira font-black text-6xl md:text-8xl lg:text-[110px] leading-[0.88] tracking-tight uppercase text-white mb-6">
            {heroHeadline}
          </h1>
          
          <p className="text-slate-350 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
            Professional fields, coaching, leagues, and tournaments under one roof. Gear included, marshals on every game — built for first-timers and pros alike.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto">
            <Link 
              href="#book" 
              style={{
                backgroundColor: accent,
                clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
              }}
              className="inline-flex items-center gap-2 text-white no-underline px-8 py-4 font-saira font-black text-lg tracking-widest uppercase transition-all hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 shadow-lg shadow-red-600/10"
            >
              Book a Game →
            </Link>
            <Link 
              href="#pricing" 
              className="inline-flex items-center gap-2 text-white border border-[#515866] bg-transparent no-underline px-8 py-4 font-saira font-black text-lg tracking-widest uppercase transition-all hover:border-white hover:bg-white/5"
            >
              Explore Memberships
            </Link>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-2.5 md:gap-5 font-chakra text-[10px] md:text-xs tracking-widest uppercase font-semibold text-slate-500">
            <span className="text-slate-200">PRO FIELDS</span>
            <span style={{ color: accent }}>/</span>
            <span className="text-slate-200">GEAR INCLUDED</span>
            <span style={{ color: accent }}>/</span>
            <span className="text-slate-200">WEEKLY LEAGUES</span>
            <span style={{ color: accent }}>/</span>
            <span className="text-slate-200">FREE PARKING</span>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
          <BookingWidget accent={accent} />
        </div>
      </div>
    </section>
  );
}
