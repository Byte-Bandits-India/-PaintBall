"use client";

import Link from "next/link";

interface ProgramItem {
  name: string;
  dur: string;
  level: string;
  desc: string;
  label: string;
}

interface ProgramsProps {
  accent?: string;
}

export default function Programs({ accent = "#E11B22" }: ProgramsProps) {
  const programs: ProgramItem[] = [
    { name: "Beginner Bootcamp", dur: "2 hours", level: "All levels", desc: "Safety, stance and your first firefight.", label: "COACH PORTRAIT" },
    { name: "Skills Clinic", dur: "90 min", level: "Intermediate", desc: "Snap-shooting, lanes and movement drills.", label: "COACH PORTRAIT" },
    { name: "Kids Squad", dur: "60 min", level: "Ages 10–15", desc: "Low-impact gear, big-time fun, real coaching.", label: "COACH PORTRAIT" },
    { name: "Private Coaching", dur: "60 min", level: "All levels", desc: "One-on-one tuning for the competitive player.", label: "COACH PORTRAIT" },
  ];

  return (
    <section id="programs" className="px-6 md:px-12 py-24 bg-[#353A43] border-t border-[#515866]/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span 
              style={{ color: accent }}
              className="font-chakra text-xs tracking-widest uppercase font-bold"
            >
              // TRAINING
            </span>
            <h2 className="font-saira font-black text-4xl md:text-6xl text-white uppercase leading-none mt-3">
              Level Up Your Game
            </h2>
          </div>
          <p className="text-slate-300 text-sm md:text-base max-w-sm">
            Structured programs for every skill bracket, led by certified coaches.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {programs.map((p, index) => (
            <div 
              key={index}
              className="border border-[#515866] bg-[#414752] flex flex-col justify-between transition-all hover:border-slate-400 hover:-translate-y-1 hover:shadow-sm"
            >
              <div 
                style={{
                  backgroundImage: "repeating-linear-gradient(135deg, #414752 0px, #414752 12px, #353A43 12px, #353A43 24px)",
                }}
                className="relative aspect-square flex items-end p-4 border-b border-[#515866]"
              >
                <div className="absolute inset-y-0 inset-x-0 bg-black/10 pointer-events-none" />
                <div className="absolute top-1/2 left-0 right-0 text-center -translate-y-1/2 font-chakra text-[10px] tracking-widest text-slate-400 font-bold">
                  // {p.label}
                </div>
                <span className="relative font-chakra text-[10px] tracking-wider text-slate-200 bg-[#2D3139] border border-[#515866] px-2.5 py-1 uppercase font-bold">
                  {p.level}
                </span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-saira font-extrabold text-xl text-white uppercase mb-1 leading-tight">
                    {p.name}
                  </h3>
                  <div 
                    style={{ color: accent }}
                    className="font-chakra text-[11px] tracking-wider font-bold mb-4"
                  >
                    {p.dur}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>
                
                <Link 
                  href="#book"
                  className="text-center font-chakra text-xs tracking-wider uppercase py-2.5 border border-[#515866] text-slate-250 font-bold transition-all hover:bg-white hover:text-slate-950 hover:border-white"
                >
                  Enroll →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
