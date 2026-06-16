"use client";

import Link from "next/link";

interface LocationProps {
  accent?: string;
}

export default function Location({ accent = "#E11B22" }: LocationProps) {
  return (
    <section id="location" className="px-6 md:px-12 py-24 bg-[#2D3139] border-t border-[#414752]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        
        {/* Left card */}
        <div className="lg:col-span-6 p-8 md:p-12 border border-[#414752] bg-[#353A43] flex flex-col justify-between">
          <div>
            <span 
              style={{ color: accent }}
              className="font-chakra text-xs tracking-widest uppercase font-bold"
            >
              // FIND THE GRID
            </span>
            <h2 className="font-saira font-black text-4xl md:text-5xl text-white uppercase leading-none mt-3 mb-8">
              Come Play
            </h2>
            
            <div className="flex flex-col gap-6">
              <div>
                <div className="font-chakra text-[10px] tracking-widest text-slate-400 font-bold mb-1">
                  ADDRESS
                </div>
                <div className="text-base text-slate-200 leading-relaxed font-semibold">
                  2400 Battlefield Drive, Unit 7<br />Riverside, CA 92501
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-chakra text-[10px] tracking-widest text-slate-400 font-bold mb-1">
                    CALL
                  </div>
                  <div className="text-base text-slate-200 font-semibold">(951) 555-0142</div>
                </div>
                <div>
                  <div className="font-chakra text-[10px] tracking-widest text-slate-400 font-bold mb-1">
                    EMAIL
                  </div>
                  <div className="text-base text-slate-200 font-semibold">play@battlegrid.gg</div>
                </div>
              </div>

              <div>
                <div className="font-chakra text-[10px] tracking-widest text-slate-400 font-bold mb-2">
                  HOURS
                </div>
                <div className="flex flex-col gap-1.5 text-sm text-slate-300 font-semibold">
                  <div className="flex justify-between max-w-[280px]">
                    <span>Mon – Thu</span>
                    <span className="text-slate-300 font-normal">12:00 – 22:00</span>
                  </div>
                  <div className="flex justify-between max-w-[280px]">
                    <span>Fri – Sat</span>
                    <span className="text-slate-300 font-normal">10:00 – 00:00</span>
                  </div>
                  <div className="flex justify-between max-w-[280px]">
                    <span>Sunday</span>
                    <span className="text-slate-300 font-normal">10:00 – 20:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link 
            href="#book"
            style={{
              backgroundColor: accent,
              clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
            }}
            className="inline-flex self-start items-center gap-2 text-white font-saira font-bold text-sm tracking-widest uppercase px-8 py-3.5 mt-8 transition-all hover:brightness-110"
          >
            Get Directions →
          </Link>
        </div>

        {/* Right card (Map Visualization) */}
        <div 
          className="lg:col-span-6 relative min-h-[460px] border border-[#414752] overflow-hidden bg-[#353A43]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          {/* Radial spotlight effect */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 58% 46%, rgba(225, 27, 34, 0.12), transparent 55%)`
            }}
          />

          {/* Coordinate Indicator */}
          <div className="absolute top-[46%] left-[58%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
            <div 
              style={{
                backgroundColor: accent,
                boxShadow: `0 0 0 8px ${accent}22, 0 0 24px ${accent}60`
              }}
              className="w-4.5 h-4.5 rounded-full animate-pulse-slow"
            />
            <span className="font-chakra text-[10px] tracking-widest text-white bg-[#2D3139] border border-[#515866] px-3 py-1 font-bold">
              BATTLE GRID HQ
            </span>
          </div>

          <div className="absolute bottom-[18px] left-[18px] font-chakra text-[9px] tracking-widest text-slate-400 font-semibold">
            // EMBED INTERACTIVE MAP
          </div>
        </div>

      </div>
    </section>
  );
}
