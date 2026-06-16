"use client";

import Image from "next/image";
import Link from "next/link";

interface MembershipCTAProps {
  accent?: string;
}

export default function MembershipCTA({ accent = "#E11B22" }: MembershipCTAProps) {
  return (
    <section className="relative px-6 md:px-12 py-24 bg-[#353A43] border-t border-[#515866]/50 overflow-hidden">
      {/* Light Grid texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "54px 54px",
        }}
      />
      {/* Radial soft ambient glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(70% 90% at 50% 0%, rgba(225,27,34,0.14), rgba(225,27,34,0) 60%)`
        }}
      />
      
      <div className="relative max-w-3xl mx-auto text-center z-10">
        <div className="w-[120px] h-[120px] relative mx-auto mb-6 border border-[#515866] shadow-sm">
          <Image 
            src="/logo.png" 
            alt="Battle Grid Paintball" 
            fill 
            className="object-contain"
          />
        </div>
        
        <h2 className="font-saira font-black text-4xl md:text-7xl leading-none text-white uppercase mb-5">
          Become Part Of<br />The Community
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-8">
          Priority booking, exclusive events, coaching discounts and tournament access — join the squad that plays here every week.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 font-chakra text-[10px] md:text-xs tracking-widest uppercase font-semibold text-slate-300 mb-10">
          <span>Priority Booking</span>
          <span style={{ color: accent }}>/</span>
          <span>Exclusive Events</span>
          <span style={{ color: accent }}>/</span>
          <span>Coaching Discounts</span>
          <span style={{ color: accent }}>/</span>
          <span>Tournament Access</span>
        </div>

        <Link 
          href="#pricing"
          style={{
            backgroundColor: accent,
            clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
          }}
          className="inline-flex items-center gap-2 text-white font-saira font-bold text-lg tracking-widest uppercase px-10 py-4 transition-all hover:brightness-110 shadow-lg shadow-red-600/10"
        >
          Join Today →
        </Link>
      </div>
    </section>
  );
}
