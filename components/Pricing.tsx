"use client";

import { useState } from "react";
import Link from "next/link";

interface WalkRate {
  tier: string;
  price: number;
  note: string;
}

interface MemberPlan {
  name: string;
  monthly: number;
  blurb: string;
  popular: boolean;
  perks: string[];
}

interface PricingProps {
  accent?: string;
}

export default function Pricing({ accent = "#E11B22" }: PricingProps) {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  const walk: WalkRate[] = [
    { tier: "WEEKDAY", price: 1499, note: "Mon–Thu · all day" },
    { tier: "WEEKEND", price: 1999, note: "Fri–Sun · peak" },
    { tier: "STUDENT", price: 1199, note: "Valid ID required" },
    { tier: "SQUAD 6+", price: 1299, note: "Per player" },
  ];

  const plans: MemberPlan[] = [
    { name: "RECRUIT", monthly: 1999, blurb: "For the casual drop-in.", popular: false, perks: ["2 sessions / month", "10% gear discount", "Member-only events", "Online booking"] },
    { name: "OPERATOR", monthly: 3999, blurb: "For the weekly regular.", popular: true, perks: ["Priority booking", "4 sessions / month", "20% gear discount", "Free rental every visit", "Tournament access"] },
    { name: "ELITE", monthly: 7999, blurb: "For the dedicated competitor.", popular: false, perks: ["Unlimited play", "30% gear discount", "Monthly coaching credit", "4 guest passes / month", "VIP locker & lounge"] },
  ];

  return (
    <section id="pricing" className="px-6 md:px-12 py-24 bg-[#2D3139]">
      <div className="max-w-7xl mx-auto">
        {/* Walk-on section */}
        <div className="text-center mb-12">
          <span 
            style={{ color: accent }}
            className="font-chakra text-xs tracking-widest uppercase font-bold"
          >
            // WALK-ON RATES
          </span>
          <h2 className="font-saira font-black text-4xl md:text-6xl text-white uppercase leading-none mt-3">
            Pay &amp; Play
          </h2>
          <p className="text-slate-300 text-base mt-4 max-w-md mx-auto">
            Every walk-on includes marker, mask, air &amp; 200 rounds. Just show up.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {walk.map((r) => (
            <div 
              key={r.tier}
              className="p-8 border border-[#414752] bg-[#353A43] text-center transition-all hover:border-[#515866] hover:-translate-y-0.5"
            >
              <div className="font-chakra text-xs tracking-widest text-slate-400 font-bold mb-4">
                {r.tier}
              </div>
              <div className="font-saira font-black text-5xl text-white">
                ₹{r.price}
              </div>
              <div className="font-chakra text-[10px] tracking-wider text-slate-500 font-semibold uppercase mt-3">
                {r.note}
              </div>
            </div>
          ))}
        </div>

        {/* Memberships section */}
        <div className="text-center mb-12">
          <span 
            style={{ color: accent }}
            className="font-chakra text-xs tracking-widest uppercase font-bold"
          >
            // MEMBERSHIPS
          </span>
          <h2 className="font-saira font-black text-4xl md:text-6xl text-white uppercase leading-none mt-3">
            Join The Ranks
          </h2>
          
          <div className="inline-flex border border-[#414752] bg-[#353A43] p-1.5 mt-8">
            <button 
              onClick={() => setBilling("monthly")}
              style={{
                backgroundColor: billing === "monthly" ? accent : "transparent",
                color: billing === "monthly" ? "#fff" : "#9A9AA2",
              }}
              className="px-6 py-2.5 cursor-pointer font-chakra text-xs tracking-widest uppercase font-bold transition-all"
            >
              Monthly
            </button>
            <button 
              onClick={() => setBilling("annual")}
              style={{
                backgroundColor: billing === "annual" ? accent : "transparent",
                color: billing === "annual" ? "#fff" : "#9A9AA2",
              }}
              className="px-6 py-2.5 cursor-pointer font-chakra text-xs tracking-widest uppercase font-bold transition-all"
            >
              Annual · 2mo free
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((m) => {
            const price = billing === "annual" ? m.monthly * 10 : m.monthly;
            const period = billing === "annual" ? "/yr" : "/mo";
            const save = billing === "annual" ? `✓ ₹${m.monthly * 2} saved per year` : "";

            return (
              <div 
                key={m.name}
                className={`relative p-8 border transition-all hover:-translate-y-1 bg-[#353A43] ${
                  m.popular 
                    ? "border-red-500/50 shadow-xl scale-102 z-10" 
                    : "border-[#414752]"
                }`}
              >
                {m.popular && (
                  <div 
                    style={{ backgroundColor: accent }}
                    className="absolute top-0 right-0 text-white font-chakra text-[10px] tracking-widest font-bold px-4 py-2"
                  >
                    MOST PICKED
                  </div>
                )}
                <div className="font-saira font-black text-2xl tracking-wide text-white uppercase">
                  {m.name}
                </div>
                <p className="text-slate-300 text-xs mt-1.5 mb-6">
                  {m.blurb}
                </p>
                <div className="flex items-baseline gap-1.5 mb-1.5">
                  <span className="font-saira font-black text-5xl leading-none text-white">
                    ₹{price}
                  </span>
                  <span className="font-chakra text-xs text-slate-400 uppercase font-semibold">
                    {period}
                  </span>
                </div>
                <div className="height-[18px] font-chakra text-[10px] tracking-wider text-green-500 font-bold uppercase mb-6">
                  {save || "\u00A0"}
                </div>
                
                <Link 
                  href="#book"
                  style={{
                    backgroundColor: m.popular ? accent : "transparent",
                    color: "#fff",
                    borderColor: m.popular ? accent : "#515866",
                  }}
                  className="block text-center font-saira font-bold text-sm tracking-widest uppercase py-3.5 border transition-all hover:opacity-90 hover:border-white"
                >
                  Become {m.name}
                </Link>

                <div className="flex flex-col gap-3 mt-8">
                  {m.perks.map((p, index) => (
                    <div key={index} className="flex items-start gap-3 text-slate-200 text-sm leading-tight font-medium">
                      <span style={{ color: accent }} className="font-extrabold flex-shrink-0">
                        +
                      </span>
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
