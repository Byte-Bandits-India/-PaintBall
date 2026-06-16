"use client";

interface BentoItem {
  tag: string;
  title: string;
  sub: string;
  label: string;
}

interface BentoShowcaseProps {
  accent?: string;
}

export default function BentoShowcase({ accent = "#E11B22" }: BentoShowcaseProps) {
  const bentoMain: BentoItem = {
    tag: "SECTOR A",
    title: "The Main Arena",
    sub: "12,000 sq ft of climate-controlled battlefield",
    label: "WIDE ARENA ACTION SHOT",
  };

  const bentoRest: BentoItem[] = [
    { tag: "SECTOR B", title: "Pro Fields", sub: "Tournament-spec turf & bunkers", label: "SPEEDBALL FIELD" },
    { tag: "SECTOR C", title: "Staging Lounge", sub: "Gear up in comfort", label: "LOUNGE / STAGING" },
    { tag: "SECTOR D", title: "Coaching Zone", sub: "Drills & skills bay", label: "COACHING BAY" },
    { tag: "SECTOR E", title: "Gear Rental", sub: "Pro markers & masks", label: "RENTAL COUNTER" },
    { tag: "SECTOR F", title: "Cafe & Refuel", sub: "Hydrate & reload", label: "CAFE" },
  ];

  return (
    <section id="arena" className="px-6 md:px-12 py-24 bg-[#2D3139]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span 
            style={{ color: accent }}
            className="font-chakra text-xs tracking-widest uppercase font-bold"
          >
            // THE COMPOUND
          </span>
          <h2 className="font-saira font-black text-4xl md:text-6xl text-white uppercase leading-none mt-3 max-w-2xl">
            One Roof. Every Way To Play.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {/* Main feature card */}
          <div 
            style={{
              backgroundImage: "repeating-linear-gradient(135deg, #353A43 0px, #353A43 16px, #2D3139 16px, #2D3139 32px)",
            }}
            className="relative overflow-hidden border border-[#414752] md:col-span-2 md:row-span-2 flex flex-col justify-between p-8 group hover:border-red-500/50 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2D3139]/40 to-[#2D3139]/95 pointer-events-none" />
            <div className="relative z-10 font-chakra text-xs tracking-widest text-slate-400 font-bold">
              // {bentoMain.label}
            </div>
            
            <div className="relative z-10">
              <span 
                style={{ color: accent }}
                className="font-chakra text-xs tracking-widest font-bold block mb-2"
              >
                {bentoMain.tag}
              </span>
              <h3 className="font-saira font-extrabold text-3xl md:text-5xl text-white uppercase leading-none mb-2.5">
                {bentoMain.title}
              </h3>
              <p className="text-slate-200 text-sm md:text-base leading-relaxed">
                {bentoMain.sub}
              </p>
            </div>
          </div>

          {/* Other grid items */}
          {bentoRest.map((b, i) => (
            <div 
              key={i}
              style={{
                backgroundImage: "repeating-linear-gradient(135deg, #353A43 0px, #353A43 14px, #2D3139 14px, #2D3139 28px)",
              }}
              className="relative overflow-hidden border border-[#414752] flex flex-col justify-between p-6 hover:border-[#515866] transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2D3139]/45 to-[#2D3139]/95 pointer-events-none" />
              <div className="relative z-10 font-chakra text-[10px] tracking-widest text-slate-400 font-bold">
                // {b.label}
              </div>
              
              <div className="relative z-10">
                <span 
                  style={{ color: accent }}
                  className="font-chakra text-[10px] tracking-widest font-bold block mb-1"
                >
                  {b.tag}
                </span>
                <h3 className="font-saira font-extrabold text-xl text-white uppercase leading-none mb-1">
                  {b.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {b.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
