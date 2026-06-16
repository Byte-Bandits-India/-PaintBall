"use client";

import { useState } from "react";

interface BookingWidgetProps {
  accent?: string;
}

export default function BookingWidget({ accent = "#E11B22" }: BookingWidgetProps) {
  const dateOpts = ["Today", "Tomorrow", "This Weekend", "Pick a date"];
  const playerOpts = ["2 players", "4 players", "6 players", "8 players", "10+ players"];
  const durOpts = ["1 hour", "2 hours", "3 hours", "Half day"];

  const [bDate, setBDate] = useState("Today");
  const [bPlayers, setBPlayers] = useState("2 players");
  const [bDur, setBDur] = useState("1 hour");
  const [booked, setBooked] = useState(false);

  const handleBook = () => {
    setBooked(true);
  };

  const handleReset = () => {
    setBooked(false);
  };

  return (
    <div 
      className="relative bg-[#414752] p-[1px] shadow-2xl transition-all w-full max-w-[640px]"
      style={{
        clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
      }}
    >
      <div 
        className="relative bg-[#3C424E] p-8 w-full"
        style={{
          clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
        }}
      >
        <div className="absolute top-[18px] right-[22px] font-chakra text-[10px] tracking-widest text-slate-300 uppercase">
          GRID // BOOK
        </div>
        <div className="flex items-center gap-2 mb-1.5">
          <span 
            style={{ backgroundColor: accent }}
            className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#E11B22] animate-pulse-slow"
          />
          <span className="font-chakra text-[10px] tracking-widest text-slate-300 font-bold uppercase">
            LIVE BOOKING
          </span>
        </div>

        <h3 className="font-saira font-black text-3xl tracking-wide uppercase text-white mb-6">
          Reserve Your Field
        </h3>

        {booked ? (
          <div className="py-4 px-1 animate-hero-up">
            <div className="font-saira font-black text-2xl text-green-500 tracking-wide uppercase mb-2 flex items-center gap-2">
              ✓ Squad Locked In
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              <strong className="text-white font-semibold">{bPlayers}</strong> · <strong className="text-white font-semibold">{bDur}</strong> · <strong className="text-white font-semibold">{bDate}</strong>. We'll hold your field and send a confirmation. Show up 20 minutes early to gear up.
            </p>
            <button 
              onClick={handleReset}
              className="w-full bg-[#2D3139] hover:bg-[#343A45] text-slate-200 border border-[#515866] py-3.5 font-chakra text-xs tracking-widest uppercase font-bold transition-colors cursor-pointer"
            >
              Book another
            </button>
          </div>
        ) : (
          <div className="grid gap-5">
            <label className="block">
              <span className="block font-chakra text-[10px] tracking-widest text-slate-300 uppercase mb-2 font-bold">
                Date
              </span>
              <div className="relative">
                <select 
                  value={bDate} 
                  onChange={(e) => setBDate(e.target.value)}
                  className="w-full appearance-none bg-[#2D3139] text-white border border-[#515866] px-4 py-3.5 font-sans text-sm font-semibold focus:outline-none focus:border-slate-300 cursor-pointer"
                >
                  {dateOpts.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </label>

            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="block font-chakra text-[10px] tracking-widest text-slate-300 uppercase mb-2 font-bold">
                  Squad
                </span>
                <div className="relative">
                  <select 
                    value={bPlayers} 
                    onChange={(e) => setBPlayers(e.target.value)}
                    className="w-full appearance-none bg-[#2D3139] text-white border border-[#515866] px-4 py-3.5 font-sans text-sm font-semibold focus:outline-none focus:border-slate-300 cursor-pointer"
                  >
                    {playerOpts.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </label>

              <label className="block">
                <span className="block font-chakra text-[10px] tracking-widest text-slate-300 uppercase mb-2 font-bold">
                  Duration
                </span>
                <div className="relative">
                  <select 
                    value={bDur} 
                    onChange={(e) => setBDur(e.target.value)}
                    className="w-full appearance-none bg-[#2D3139] text-white border border-[#515866] px-4 py-3.5 font-sans text-sm font-semibold focus:outline-none focus:border-slate-300 cursor-pointer"
                  >
                    {durOpts.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </label>
            </div>

            <button 
              onClick={handleBook}
              style={{
                backgroundColor: accent,
                clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
              }}
              className="w-full text-white border-none py-4 font-saira font-black text-lg tracking-widest uppercase cursor-pointer hover:brightness-110 active:scale-98 transition-all shadow-lg shadow-red-600/10 mt-2"
            >
              Book Now →
            </button>
            <p className="text-center font-chakra text-[10px] tracking-widest text-slate-400 mt-1 uppercase">
              No deposit · free cancellation up to 24h
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
