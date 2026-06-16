"use client";

import { useRef, useState } from "react";
import { sendBookingEmail } from "@/app/actions";

interface GameItem {
  id: string;
  host: {
    name: string;
    avatarGradient: string;
    superHost: boolean;
  };
  turfName: string;
  date: string;
  time: string;
  occupied: number;
  total: number;
}

interface GamesAvailableProps {
  accent?: string;
}

const gamesData: GameItem[] = [
  {
    id: "game-1",
    host: { name: "9choku", avatarGradient: "from-[#FF512F] to-[#DD2476]", superHost: true },
    turfName: "Sportsleap By Arenaz...",
    date: "Today",
    time: "11:00 pm - 12:00 am",
    occupied: 13,
    total: 14,
  },
  {
    id: "game-2",
    host: { name: "bolacr7", avatarGradient: "from-[#11998e] to-[#38ef7d]", superHost: true },
    turfName: "PRC Turf, Saligramam",
    date: "Today",
    time: "8:00 pm - 9:00 pm",
    occupied: 13,
    total: 15,
  },
  {
    id: "game-3",
    host: { name: "hussain", avatarGradient: "from-[#ff9966] to-[#ff5e62]", superHost: true },
    turfName: "Tiki Taka - Vaels, I...",
    date: "Today",
    time: "9:00 pm - 10:00 pm",
    occupied: 9,
    total: 15,
  },
  {
    id: "game-4",
    host: { name: "aravind", avatarGradient: "from-[#7F00FF] to-[#E100FF]", superHost: true },
    turfName: "Stadium 5, Nungambakkam",
    date: "Today",
    time: "9:00 pm - 10:00 pm",
    occupied: 10,
    total: 12,
  },
  {
    id: "game-5",
    host: { name: "vishal", avatarGradient: "from-[#00c6ff] to-[#0072ff]", superHost: true },
    turfName: "The Pitch, Adyar",
    date: "Today",
    time: "10:00 pm - 11:00 pm",
    occupied: 7,
    total: 10,
  }
];

export default function GamesAvailable({ accent = "#E11B22" }: GamesAvailableProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Modal state machine
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);
  const [modalStep, setModalStep] = useState<"summary" | "form" | "success">("summary");
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const cardWidth = 340 + 24; // Card width + gap
      const scrollAmount = direction === "left" 
        ? -cardWidth * 2 
        : cardWidth * 2;
      
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleCardClick = (game: GameItem) => {
    setSelectedGame(game);
    setModalStep("summary");
    setFormInput({ name: "", email: "", phone: "" });
    setErrorMsg("");
  };

  const closeModal = () => {
    setSelectedGame(null);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormInput(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedGame) return;
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const result = await sendBookingEmail(
        {
          hostName: selectedGame.host.name,
          turfName: selectedGame.turfName,
          date: selectedGame.date,
          time: selectedGame.time,
          occupied: selectedGame.occupied,
          total: selectedGame.total,
        },
        formInput
      );

      if (result.success) {
        setModalStep("success");
      } else {
        setErrorMsg(result.error || "Failed to submit booking inquiry.");
      }
    } catch (err: any) {
      setErrorMsg("Failed to connect to the email service.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderDots = (occupied: number, total: number) => {
    const ratio = occupied / total;
    const activeCount = Math.round(ratio * 4);
    return (
      <div className="flex gap-1.5 items-center mr-1">
        {[...Array(4)].map((_, i) => (
          <span 
            key={i} 
            style={{
              backgroundColor: i < activeCount ? accent : "#515866",
              boxShadow: i < activeCount ? `0 0 8px ${accent}` : "none",
            }}
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
          />
        ))}
      </div>
    );
  };

  return (
    <section 
      id="tournaments" 
      className="relative px-6 md:px-12 py-24 bg-[#2D3139] border-t border-[#414752]"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span 
              style={{ color: accent }}
              className="font-chakra text-xs tracking-widest uppercase font-bold"
            >
              // ACTIVE BATTLES
            </span>
            <h2 className="font-saira font-black text-4xl md:text-6xl text-white uppercase leading-none mt-3">
              Games Available
            </h2>
          </div>
          
          {/* Top level scroll buttons */}
          <div className="flex gap-2.5">
            <button 
              onClick={() => scroll("left")}
              className="bg-[#353A43]/60 hover:bg-[#353A43] text-white border border-[#414752] rounded-full w-11 h-11 flex items-center justify-center cursor-pointer shadow-md transition-all active:scale-95"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll("right")}
              className="bg-[#353A43]/60 hover:bg-[#353A43] text-white border border-[#414752] rounded-full w-11 h-11 flex items-center justify-center cursor-pointer shadow-md transition-all active:scale-95"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Slider */}
        <div className="relative group/carousel">
          <div 
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 scrollbar-none"
          >
            {gamesData.map((g) => {
              const initials = g.host.name.slice(0, 2).toUpperCase();
              return (
                <div 
                  key={g.id}
                  onClick={() => handleCardClick(g)}
                  className="flex-shrink-0 w-[300px] md:w-[340px] snap-start flex flex-col gap-3 group transition-transform duration-300 cursor-pointer"
                >
                  {/* Host Info Header */}
                  <div className="flex items-center gap-3 px-1">
                    {/* User profile avatar initials badge */}
                    <div 
                      className={`w-9 h-9 rounded-full bg-gradient-to-br ${g.host.avatarGradient} flex items-center justify-center text-white font-chakra text-xs font-black shadow-[0_4px_12px_rgba(0,0,0,0.3)] border border-white/10`}
                    >
                      {initials}
                    </div>
                    {/* Host name and status badge */}
                    <div className="flex flex-col">
                      <span className="font-saira font-bold text-white text-base leading-none mb-1 tracking-wide">
                        {g.host.name}
                      </span>
                      <span className="font-chakra text-[10px] tracking-wider font-semibold text-orange-500 flex items-center gap-0.5">
                        Super Host <span className="text-xs">🔥</span>
                      </span>
                    </div>
                  </div>

                  {/* Turf Design (Tactical SVG & Gradients representation) */}
                  <div 
                    className="relative w-full aspect-[16/10] rounded-[20px] overflow-hidden bg-gradient-to-b from-[#353A43] to-[#2D3139] border border-[#414752] shadow-2xl flex flex-col justify-between p-4 group-hover:border-red-500/50 transition-all duration-300"
                  >
                    {/* Pitch green glow overlay inside grey card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-green-950/15 to-[#2D3139]/80 pointer-events-none" />
                    
                    {/* Tactical sports field markings overlay */}
                    <svg 
                      className="absolute inset-0 w-full h-full opacity-10 stroke-white fill-none pointer-events-none" 
                      viewBox="0 0 300 180" 
                      preserveAspectRatio="none"
                    >
                      <rect x="15" y="15" width="270" height="150" strokeWidth="1.5" />
                      <line x1="150" y1="15" x2="150" y2="165" strokeWidth="1.5" />
                      <circle cx="150" cy="90" r="25" strokeWidth="1.5" />
                      <rect x="15" y="48" width="35" height="84" strokeWidth="1.5" />
                      <rect x="250" y="48" width="35" height="84" strokeWidth="1.5" />
                      <circle cx="38" cy="90" r="1.5" fill="white" />
                      <circle cx="262" cy="90" r="1.5" fill="white" />
                    </svg>

                    {/* Zebra grass patterns */}
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_50%,transparent_50%)] bg-[length:40px_100%] pointer-events-none" />

                    {/* Top status */}
                    <div className="z-10 flex justify-between items-start">
                      <span 
                        style={{ color: accent, borderColor: `${accent}33`, backgroundColor: `${accent}11` }}
                        className="font-chakra text-[9px] tracking-widest border px-2 py-0.5 rounded font-bold uppercase"
                      >
                        ACTIVE MATCH
                      </span>
                    </div>

                    {/* Bottom location pill */}
                    <div className="z-10 w-full flex justify-center">
                      <div className="bg-[#2D3139]/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] text-slate-100 border border-[#414752] font-sans tracking-wide max-w-[95%] truncate shadow-md text-center">
                        {g.turfName}
                      </div>
                    </div>
                  </div>

                  {/* Date, Time and Spots Row */}
                  <div className="flex items-center justify-between px-1.5 mt-1">
                    {/* Left: Date & Time */}
                    <div className="flex flex-col gap-0.5">
                      <span className="text-slate-400 text-xs font-medium tracking-wide">
                        {g.date}
                      </span>
                      <div className="flex items-center gap-1 text-slate-200 text-xs font-chakra font-medium tracking-wide">
                        <span className="text-[12px] leading-none select-none">🌙</span>
                        <span>{g.time}</span>
                      </div>
                    </div>

                    {/* Right: Spots Pill with accent colors */}
                    <div 
                      style={{
                        borderColor: `${accent}33`,
                        backgroundColor: `${accent}11`,
                        color: accent,
                      }}
                      className="border px-3 py-1.5 rounded-full flex items-center gap-2 font-chakra text-[11px] font-bold shadow-inner"
                    >
                      {renderDots(g.occupied, g.total)}
                      <span className="tracking-wide">{g.occupied}/{g.total}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* shadCN-like Dialog Modal */}
      {selectedGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop Overlay */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer transition-opacity animate-in fade-in duration-200"
            onClick={closeModal}
          />
          
          {/* Modal Container */}
          <div 
            className="relative w-full max-w-[460px] bg-[#2D3139] border border-[#414752] rounded-2xl p-6 shadow-2xl z-10 mx-4 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Close button icon */}
            <button 
              onClick={closeModal}
              className="absolute right-4 top-4 text-slate-400 hover:text-white cursor-pointer transition-colors p-1"
              aria-label="Close dialog"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* STEP 1: Game Summary Description */}
            {modalStep === "summary" && (
              <div className="flex flex-col">
                <div className="mb-5">
                  <span style={{ color: accent }} className="font-chakra text-[10px] tracking-widest uppercase font-bold block mb-1">
                    // MATCH RESERVATION
                  </span>
                  <h3 className="font-saira font-black text-2xl text-white uppercase tracking-wide leading-none">
                    Lock In Squad Spot
                  </h3>
                </div>
                
                {/* Visual Details Card */}
                <div className="bg-[#353A43] border border-[#414752] rounded-xl p-4 flex flex-col gap-3 mb-6 text-xs font-chakra tracking-wide">
                  <div className="flex justify-between border-b border-[#414752] pb-2">
                    <span className="text-slate-400 font-bold uppercase">Arena Location</span>
                    <span className="text-white font-semibold font-sans">{selectedGame.turfName}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#414752] pb-2">
                    <span className="text-slate-400 font-bold uppercase">Match Host</span>
                    <span className="text-white font-semibold font-sans">{selectedGame.host.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#414752] pb-2">
                    <span className="text-slate-400 font-bold uppercase">Scheduled Date</span>
                    <span className="text-white font-semibold font-sans">{selectedGame.date}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#414752] pb-2">
                    <span className="text-slate-400 font-bold uppercase">Time Slot</span>
                    <span className="text-white font-semibold font-sans">{selectedGame.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-bold uppercase">Spots Filled</span>
                    <span className="text-emerald-400 font-black">{selectedGame.occupied}/{selectedGame.total}</span>
                  </div>
                </div>

                <button 
                  onClick={() => setModalStep("form")}
                  style={{
                    backgroundColor: accent,
                    clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                  }}
                  className="w-full text-white border-none py-3.5 font-saira font-black text-base tracking-widest uppercase cursor-pointer hover:brightness-110 active:scale-98 transition-all shadow-lg shadow-red-600/10"
                >
                  Book Now
                </button>
              </div>
            )}

            {/* STEP 2: Registration Detail Form */}
            {modalStep === "form" && (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                <div>
                  <span style={{ color: accent }} className="font-chakra text-[10px] tracking-widest uppercase font-bold block mb-1">
                    // PLAYER REGISTRATION
                  </span>
                  <h3 className="font-saira font-black text-2xl text-white uppercase tracking-wide leading-none">
                    Confirm Details
                  </h3>
                </div>

                <div className="flex flex-col gap-3.5 text-[10px] font-chakra tracking-widest">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-slate-400 font-bold uppercase">Full Name</span>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formInput.name}
                      onChange={handleFormChange}
                      placeholder="John Doe"
                      className="bg-[#21242C] border border-[#414752] rounded px-3.5 py-2.5 text-white focus:outline-none focus:border-red-500 transition-colors font-sans text-sm tracking-normal font-semibold"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-slate-400 font-bold uppercase">Email Address / Mail ID</span>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formInput.email}
                      onChange={handleFormChange}
                      placeholder="john@example.com"
                      className="bg-[#21242C] border border-[#414752] rounded px-3.5 py-2.5 text-white focus:outline-none focus:border-red-500 transition-colors font-sans text-sm tracking-normal font-semibold"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-slate-400 font-bold uppercase">Phone Number</span>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formInput.phone}
                      onChange={handleFormChange}
                      placeholder="+1 (555) 000-0000"
                      className="bg-[#21242C] border border-[#414752] rounded px-3.5 py-2.5 text-white focus:outline-none focus:border-red-500 transition-colors font-sans text-sm tracking-normal font-semibold"
                    />
                  </label>
                </div>

                {errorMsg && (
                  <div className="text-red-400 font-bold font-chakra text-[10px] tracking-wider border border-red-500/20 bg-red-500/5 px-3.5 py-2.5 rounded">
                    ⚠ {errorMsg}
                  </div>
                )}

                <div className="flex gap-3 mt-2">
                  <button 
                    type="button"
                    onClick={() => setModalStep("summary")}
                    className="flex-1 bg-transparent hover:bg-white/5 border border-[#414752] text-slate-350 py-3 font-saira font-bold text-sm tracking-wider uppercase cursor-pointer transition-colors"
                    style={{
                      clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                    }}
                  >
                    Back
                  </button>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: accent,
                      clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                    }}
                    className="flex-1 text-white border-none py-3 font-saira font-black text-sm tracking-widest uppercase cursor-pointer hover:brightness-110 active:scale-98 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: Booking Success Screen */}
            {modalStep === "success" && (
              <div className="flex flex-col items-center text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center mb-4 text-emerald-400 shadow-md">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h3 className="font-saira font-black text-2xl text-white uppercase tracking-wide leading-none mb-2">
                  Spot Reserved!
                </h3>
                <p className="text-slate-300 text-sm max-w-sm mb-6 leading-relaxed">
                  Thank you, <strong className="text-white">{formInput.name}</strong>. Your spot has been successfully locked. We've sent confirmation emails to <strong className="text-white">{formInput.email}</strong> and the Arena Admin.
                </p>

                <button 
                  onClick={closeModal}
                  style={{
                    backgroundColor: accent,
                    clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                  }}
                  className="w-full max-w-[180px] text-white border-none py-3 font-saira font-bold text-sm tracking-wider uppercase cursor-pointer hover:brightness-110 transition-colors"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
