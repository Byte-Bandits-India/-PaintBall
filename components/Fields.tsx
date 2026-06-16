"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface FieldsProps {
  accent?: string;
}

export default function Fields({ accent = "#E11B22" }: FieldsProps) {
  const [sync, setSync] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setSync((prev) => (prev % 11) + 2);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const fields = [
    { name: "Speedball Arena", code: "GRID-01", status: "OPEN", color: "#22c55e", desc: "Inflatable bunkers · tournament turf", cap: "Up to 10" },
    { name: "Woodsball Forest", code: "GRID-02", status: "IN PLAY", color: accent, desc: "Natural terrain · 2 wooded acres", cap: "Up to 24" },
    { name: "Urban CQB", code: "GRID-03", status: "OPEN", color: "#22c55e", desc: "Close quarters · multi-level", cap: "Up to 16" },
    { name: "Hyperball", code: "GRID-04", status: "LIMITED", color: "#eab308", desc: "Fast format · pipe bunkers", cap: "Up to 10" },
  ];

  const openCount = fields.filter((f) => f.status === "OPEN").length;

  return (
    <section 
      id="fields" 
      className="relative px-6 md:px-12 py-24 bg-[#353A43] border-t border-[#414752]/60"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shadow-[0_0_12px_#22c55e] animate-pulse-slow" />
              <span className="font-chakra text-xs tracking-widest text-green-400 font-bold uppercase">
                LIVE STATUS · UPDATED {sync}s AGO
              </span>
            </div>
            <h2 className="font-saira font-black text-4xl md:text-6xl text-white uppercase leading-none">
              Field Availability
            </h2>
          </div>
          <Link 
            href="#book" 
            style={{
              backgroundColor: accent,
              clipPath: "polygon(0 0, calc(100% - 11px) 0, 100% 11px, 100% 100%, 11px 100%, 0 calc(100% - 11px))",
            }}
            className="inline-flex items-center gap-2.5 text-white no-underline px-6 py-3.5 font-saira font-bold text-sm tracking-widest uppercase transition-all hover:brightness-110 shadow-lg shadow-red-600/10"
          >
            Book Instantly →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {fields.map((f) => (
            <div 
              key={f.code}
              style={{
                clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)",
              }}
              className="relative bg-[#414752] border border-[#515866] p-6 flex flex-col justify-between transition-all hover:-translate-y-1 hover:border-[#676F80] hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-chakra text-[10px] tracking-widest text-slate-400 font-bold">
                    {f.code}
                  </span>
                  <span 
                    style={{ color: f.color }}
                    className="inline-flex items-center gap-1.5 font-chakra text-[11px] tracking-widest uppercase font-bold"
                  >
                    <span 
                      style={{ backgroundColor: f.color, boxShadow: `0 0 8px ${f.color}` }}
                      className="w-1.5 h-1.5 rounded-full"
                    />
                    {f.status}
                  </span>
                </div>
                <h3 className="font-saira font-extrabold text-2xl text-white uppercase mb-2 leading-none">
                  {f.name}
                </h3>
                <p className="text-slate-350 text-sm leading-relaxed mb-6">
                  {f.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#4D5463] font-chakra text-xs tracking-wider text-slate-200 font-semibold">
                <span>{f.cap}</span>
                <span className="text-slate-400">→</span>
              </div>
            </div>
          ))}
        </div>

        <p className="font-chakra text-xs tracking-widest text-slate-500 uppercase font-semibold mt-6">
          {openCount} FIELDS OPEN NOW · LIVE FEED REFRESHES AUTOMATICALLY
        </p>
      </div>
    </section>
  );
}
