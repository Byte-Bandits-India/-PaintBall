"use client";

import { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  arenaName?: string;
  accent?: string;
}

export default function Navbar({ arenaName = "BATTLE GRID", accent = "#E11B22" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2D3139]/85 backdrop-blur-md border-b border-[#414752]/80">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        <Link href="#top" className="flex items-baseline gap-2.5 no-underline whitespace-nowrap group">
          <span className="font-saira font-black text-2xl tracking-wider text-white leading-none whitespace-nowrap">
            {arenaName}
          </span>
          <span 
            style={{ color: accent }}
            className="font-chakra font-bold text-xs tracking-[0.4em] pb-0.5"
          >
            PAINTBALL
          </span>
        </Link>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8 font-chakra text-xs tracking-widest uppercase font-semibold">
          <Link href="#fields" className="text-slate-300 hover:text-white transition-colors">
            Fields
          </Link>
          <Link href="#pricing" className="text-slate-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#tournaments" className="text-slate-300 hover:text-white transition-colors">
            Events
          </Link>
          <Link href="#coaches" className="text-slate-300 hover:text-white transition-colors">
            Coaches
          </Link>
          <Link href="#location" className="text-slate-300 hover:text-white transition-colors">
            Visit
          </Link>
          <Link 
            href="#book" 
            className="inline-flex items-center gap-2 text-white no-underline px-5 py-2.5 font-bold tracking-widest transition-transform hover:scale-105 active:scale-95"
            style={{
              backgroundColor: accent,
              clipPath: "polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px)",
            }}
          >
            Book a Game
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="flex md:hidden items-center justify-center p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <svg className="h-6 w-6 fill-none stroke-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation drawer overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-40 bg-[#2D3139]/95 backdrop-blur-lg border-b border-[#414752]/90 flex flex-col gap-5 p-6 md:hidden font-chakra text-sm tracking-widest uppercase font-semibold">
          <Link 
            href="#fields" 
            onClick={closeMenu}
            className="text-slate-200 hover:text-white transition-colors py-1.5 border-b border-[#414752]/30"
          >
            Fields
          </Link>
          <Link 
            href="#pricing" 
            onClick={closeMenu}
            className="text-slate-200 hover:text-white transition-colors py-1.5 border-b border-[#414752]/30"
          >
            Pricing
          </Link>
          <Link 
            href="#tournaments" 
            onClick={closeMenu}
            className="text-slate-200 hover:text-white transition-colors py-1.5 border-b border-[#414752]/30"
          >
            Events
          </Link>
          <Link 
            href="#coaches" 
            onClick={closeMenu}
            className="text-slate-200 hover:text-white transition-colors py-1.5 border-b border-[#414752]/30"
          >
            Coaches
          </Link>
          <Link 
            href="#location" 
            onClick={closeMenu}
            className="text-slate-200 hover:text-white transition-colors py-1.5 border-b border-[#414752]/30"
          >
            Visit
          </Link>
          <Link 
            href="#book" 
            onClick={closeMenu}
            className="text-center text-white no-underline py-3 font-bold tracking-widest uppercase transition-transform active:scale-95 mt-2"
            style={{
              backgroundColor: accent,
              clipPath: "polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px)",
            }}
          >
            Book a Game
          </Link>
        </div>
      )}
    </nav>
  );
}
