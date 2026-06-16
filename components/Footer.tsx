"use client";

import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  accent?: string;
}

export default function Footer({ accent = "#E11B22" }: FooterProps) {
  const socials = ["IG", "FB", "YT", "WA"];
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-12 py-16 bg-[#2D3139] border-t border-[#414752]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#414752]">
          
          {/* Logo Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="w-[100px] h-[100px] relative -mt-4 -ml-2 mb-3 border border-[#414752] shadow-sm">
              <Image 
                src="/logo.png" 
                alt="Battle Grid Paintball" 
                fill 
                className="object-contain"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              Southern California's premier indoor &amp; outdoor paintball destination. Gear up, squad up, step onto the grid.
            </p>
          </div>

          {/* Column 2: Play */}
          <div className="lg:col-span-2">
            <span className="font-chakra text-[10px] tracking-widest text-slate-400 font-bold mb-4 block uppercase">
              Play
            </span>
            <div className="flex flex-col gap-3 text-sm font-semibold">
              <Link href="#fields" className="text-slate-300 hover:text-white transition-colors">
                Field Booking
              </Link>
              <Link href="#programs" className="text-slate-300 hover:text-white transition-colors">
                Coaching
              </Link>
              <Link href="#tournaments" className="text-slate-300 hover:text-white transition-colors">
                Tournaments
              </Link>
              <Link href="#pricing" className="text-slate-300 hover:text-white transition-colors">
                Memberships
              </Link>
            </div>
          </div>

          {/* Column 3: Arena */}
          <div className="lg:col-span-2">
            <span className="font-chakra text-[10px] tracking-widest text-slate-400 font-bold mb-4 block uppercase">
              Arena
            </span>
            <div className="flex flex-col gap-3 text-sm font-semibold">
              <Link href="#arena" className="text-slate-300 hover:text-white transition-colors">
                The Compound
              </Link>
              <Link href="#coaches" className="text-slate-300 hover:text-white transition-colors">
                Our Marshals
              </Link>
              <Link href="#location" className="text-slate-300 hover:text-white transition-colors">
                Visit Us
              </Link>
              <Link href="#location" className="text-slate-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Column 4: Follow */}
          <div className="lg:col-span-4">
            <span className="font-chakra text-[10px] tracking-widest text-slate-400 font-bold mb-4 block uppercase">
              Follow Us
            </span>
            <div className="flex gap-2">
              {socials.map((s) => (
                <Link 
                  key={s}
                  href="#top"
                  className="flex items-center justify-center w-10 h-10 border border-[#414752] bg-[#353A43] text-slate-300 font-chakra text-xs font-bold transition-all hover:text-white hover:border-[#515866] hover:shadow-sm"
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))"
                  }}
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-wrap justify-between items-center gap-4 pt-6 font-chakra text-[10px] tracking-widest text-slate-400 font-bold uppercase">
          <span>
            © {year} BATTLE GRID PAINTBALL · ALL RIGHTS RESERVED
          </span>
          <div className="flex gap-6">
            <Link href="#top" className="text-slate-400 hover:text-slate-200 transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="#top" className="text-slate-400 hover:text-slate-200 transition-colors">
              TERMS
            </Link>
            <Link href="#top" className="text-slate-400 hover:text-slate-200 transition-colors">
              WAIVER
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
