"use client";

import Link from "next/link";

interface TournamentItem {
  name: string;
  date: string;
  month: string;
  format: string;
  fee: string;
  slots: string;
  banner: string;
}

interface TournamentsProps {
  accent?: string;
}

export default function Tournaments({ accent = "#E11B22" }: TournamentsProps) {
  const tournaments: TournamentItem[] = [
    { name: "Grid Wars Open", date: "JUL 12", month: "Sat", format: "5-Man Speedball", fee: "₹19,999 / team", slots: "8 slots left", banner: "SPEEDBALL TOURNAMENT" },
    { name: "Woodland Siege", date: "JUL 26", month: "Sat", format: "Scenario Big Game", fee: "₹2,999 / player", slots: "60 slots left", banner: "WOODSBALL SCENARIO" },
    { name: "Friday Night Lights", date: "EVERY", month: "Fri", format: "Open Rec Night", fee: "₹1,999 walk-on", slots: "Open entry", banner: "REC NIGHT" },
  ];

  return (
    <section id="tournaments" className="px-6 md:px-12 py-24 bg-[#2D3139] border-t border-[#414752]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span 
            style={{ color: accent }}
            className="font-chakra text-xs tracking-widest uppercase font-bold"
          >
            // ON THE BOARD
          </span>
          <h2 className="font-saira font-black text-4xl md:text-6xl text-white uppercase leading-none mt-3">
            Upcoming Events
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tournaments.map((t, index) => (
            <div 
              key={index}
              className="border border-[#414752] bg-[#353A43] flex flex-col justify-between transition-all hover:border-red-500/50 hover:shadow-md overflow-hidden"
            >
              <div 
                style={{
                  backgroundImage: "repeating-linear-gradient(135deg, #353A43 0px, #353A43 14px, #2D3139 14px, #2D3139 28px)",
                }}
                className="relative aspect-[16/10] flex items-center justify-center border-b border-[#414752]"
              >
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                <div className="relative font-chakra text-[10px] tracking-widest text-slate-400 font-bold">
                  // {t.banner}
                </div>
                
                {/* Date Badge */}
                <div 
                  style={{
                    backgroundColor: accent,
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  }}
                  className="absolute top-4 left-4 text-white px-3 py-1.5 text-center min-w-[64px]"
                >
                  <div className="font-saira font-black text-lg leading-none">{t.date}</div>
                  <div className="font-chakra text-[9px] tracking-wider font-bold mt-0.5">{t.month}</div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-saira font-extrabold text-2xl text-white uppercase mb-4 leading-tight">
                    {t.name}
                  </h3>
                  
                  <div className="flex flex-col gap-2.5 mb-6 font-chakra text-xs tracking-wider font-semibold">
                    <div className="flex justify-between border-b border-[#414752] pb-1.5">
                      <span className="text-slate-400">FORMAT</span>
                      <span className="text-slate-200">{t.format}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#414752] pb-1.5">
                      <span className="text-slate-400">ENTRY</span>
                      <span className="text-slate-200">{t.fee}</span>
                    </div>
                    <div className="flex justify-between pb-1.5">
                      <span className="text-slate-400">SLOTS</span>
                      <span className="text-green-500 font-bold">{t.slots}</span>
                    </div>
                  </div>
                </div>

                <Link 
                  href="#book"
                  style={{
                    backgroundColor: accent,
                    clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                  }}
                  className="block text-center text-white font-saira font-bold text-sm tracking-widest uppercase py-3 transition-all hover:brightness-110"
                >
                  Register Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
