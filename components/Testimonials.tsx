"use client";

import { useState, useEffect } from "react";

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

interface TestimonialsProps {
  accent?: string;
}

export default function Testimonials({ accent = "#E11B22" }: TestimonialsProps) {
  const testimonials: TestimonialItem[] = [
    { quote: 'Booked a birthday squad of twelve. Gear was dialed in, marshals ran the games tight, and not one kid wanted to leave. Best run paintball op around.', name: 'Marcus D.', role: 'Group of 12', rating: 5 },
    { quote: 'I came in never having held a marker. Two hours later I was lighting people up in the speedball arena. The beginner brief actually works.', name: 'Sofia R.', role: 'First-timer', rating: 5 },
    { quote: 'Play here every week with my league. Fields are tournament-grade, the staging area is clean, and the pro shop has whatever you blew up last session.', name: 'Tariq B.', role: 'Operator member', rating: 5 },
    { quote: 'Ran our company offsite here. Booking was painless, indoor CQB meant weather was a non-issue, and the whole team is still talking about it.', name: 'Hannah K.', role: 'Corporate event', rating: 5 },
  ];

  const [tIndex, setTIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTIndex((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setTIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setTIndex((prev) => (prev + 1) % testimonials.length);
  };

  const activeT = testimonials[tIndex];

  return (
    <section className="px-6 md:px-12 py-24 bg-[#353A43] border-t border-[#515866]/50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Rating header */}
        <div className="inline-flex items-center gap-4 mb-12">
          <span className="font-saira font-black text-6xl text-white leading-none">
            4.9
          </span>
          <div className="text-left">
            <div style={{ color: accent }} className="text-lg tracking-widest leading-none">
              ★★★★★
            </div>
            <div className="font-chakra text-[10px] tracking-widest text-slate-300 font-bold mt-2">
              2,400+ GAMES PLAYED
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative min-h-[220px] px-2 md:px-6 transition-all duration-300">
          <div style={{ color: accent }} className="text-sm tracking-[0.2em] mb-4">
            ★★★★★
          </div>
          <p className="font-saira font-semibold text-2xl md:text-4xl text-white leading-snug mb-8 max-w-3xl mx-auto italic">
            &ldquo;{activeT.quote}&rdquo;
          </p>
          <div className="font-saira font-extrabold text-lg text-slate-200 uppercase tracking-wider">
            {activeT.name}
          </div>
          <div 
            style={{ color: accent }}
            className="font-chakra text-xs tracking-widest font-bold mt-1 uppercase"
          >
            {activeT.role}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-5 mt-10">
          <button 
            onClick={handlePrev}
            className="w-11 h-11 border border-[#515866] bg-[#414752] text-white font-bold hover:bg-[#515866] hover:border-slate-400 transition-colors flex items-center justify-center cursor-pointer"
          >
            ←
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setTIndex(i)}
                style={{
                  backgroundColor: i === tIndex ? accent : "#414752",
                }}
                className="w-2.5 h-2.5 rounded-full border-none p-0 cursor-pointer transition-colors"
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-11 h-11 border border-[#515866] bg-[#414752] text-white font-bold hover:bg-[#515866] hover:border-slate-400 transition-colors flex items-center justify-center cursor-pointer"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
