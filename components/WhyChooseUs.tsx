"use client";

interface WhyItem {
  n: string;
  title: string;
  body: string;
}

interface WhyChooseUsProps {
  accent?: string;
}

export default function WhyChooseUs({ accent = "#E11B22" }: WhyChooseUsProps) {
  const why: WhyItem[] = [
    { n: "01", title: "Easy Online Booking", body: "Pick a field, pick a time, lock your squad in under sixty seconds. Real-time availability, instant confirmation." },
    { n: "02", title: "Certified Marshals", body: "Every game is run by trained, league-certified marshals. Safety briefed, fair play enforced, zero chaos." },
    { n: "03", title: "Community Leagues", body: "Weekly rec nights, ranked ladders and monthly scenario big games. There is always something on the board." },
    { n: "04", title: "Premium Gear", body: "Maintained tournament markers, anti-fog masks and fresh paint. Rental is included on every walk-on session." },
  ];

  return (
    <section className="px-6 md:px-12 py-24 bg-[#353A43] border-t border-[#414752]/80">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span 
            style={{ color: accent }}
            className="font-chakra text-xs tracking-widest uppercase font-bold"
          >
            // WHY BATTLE GRID
          </span>
          <h2 className="font-saira font-black text-4xl md:text-6xl text-white uppercase leading-none mt-3">
            Run By Players,<br />Built For Battle.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
          {/* Big Prime Card */}
          <div 
            className="relative overflow-hidden p-10 border border-red-900/50 bg-gradient-to-br from-[#4A1E24] to-[#2D161A] flex flex-col justify-between min-h-[360px]"
          >
            <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-radial from-red-600/5 to-transparent pointer-events-none" />
            <span 
              style={{ color: accent }}
              className="font-chakra text-xs tracking-widest font-bold uppercase"
            >
              SECTOR PRIME
            </span>
            <div>
              <h3 className="font-saira font-black text-4xl md:text-5xl uppercase text-white leading-none mb-4">
                Tournament-<br />Standard Fields
              </h3>
              <p className="text-slate-200 text-base leading-relaxed max-w-md">
                Pro turf, regulation bunkers, and fresh paint maintained daily. The same surfaces leagues compete on — open to you every single day.
              </p>
            </div>
          </div>

          {/* 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {why.map((w) => (
              <div 
                key={w.n}
                className="p-8 border border-[#515866] bg-[#414752] flex flex-col justify-between transition-all hover:border-[#676F80] hover:-translate-y-1 hover:shadow-sm"
              >
                <span className="font-saira font-black text-4xl text-slate-500/70 leading-none">
                  {w.n}
                </span>
                <div>
                  <h4 className="font-saira font-bold text-xl uppercase text-white mt-4 mb-2">
                    {w.title}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {w.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
