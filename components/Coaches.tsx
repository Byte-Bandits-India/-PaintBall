"use client";

interface CoachItem {
  name: string;
  cert: string;
  exp: string;
  spec: string;
  label: string;
}

interface CoachesProps {
  accent?: string;
}

export default function Coaches({ accent = "#E11B22" }: CoachesProps) {
  const coaches: CoachItem[] = [
    { name: 'Marcus "Recon" Hale', cert: "NXL Certified", exp: "12 yrs", spec: "Speedball tactics", label: "MARSHAL PORTRAIT" },
    { name: "Elena Vega", cert: "Level 2 Coach", exp: "8 yrs", spec: "Woodsball & scenario", label: "MARSHAL PORTRAIT" },
    { name: "Devon Cross", cert: "CQB Instructor", exp: "6 yrs", spec: "Close-quarters drills", label: "MARSHAL PORTRAIT" },
    { name: "Priya Nair", cert: "Youth Safety Cert", exp: "5 yrs", spec: "Beginners & juniors", label: "MARSHAL PORTRAIT" },
  ];

  return (
    <section id="coaches" className="px-6 md:px-12 py-24 bg-[#353A43] border-t border-[#515866]/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span 
            style={{ color: accent }}
            className="font-chakra text-xs tracking-widest uppercase font-bold"
          >
            // THE CREW
          </span>
          <h2 className="font-saira font-black text-4xl md:text-6xl text-white uppercase leading-none mt-3">
            Meet The Marshals
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coaches.map((c, index) => (
            <div 
              key={index}
              className="border border-[#515866] bg-[#414752] flex flex-col transition-all hover:border-slate-450 hover:-translate-y-1 hover:shadow-sm overflow-hidden"
            >
              <div 
                style={{
                  backgroundImage: "repeating-linear-gradient(135deg, #414752 0px, #414752 12px, #353A43 12px, #353A43 24px)",
                }}
                className="relative aspect-[4/5] flex items-center justify-center border-b border-[#515866]"
              >
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                <span className="font-chakra text-[10px] tracking-widest text-slate-400 font-bold">
                  // {c.label}
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-[#414752]/95 pointer-events-none" />
              </div>

              <div className="p-6">
                <h3 className="font-saira font-bold text-xl text-white uppercase mb-1 leading-none">
                  {c.name}
                </h3>
                <div 
                  style={{ color: accent }}
                  className="font-chakra text-[11px] tracking-wider uppercase font-bold mb-4"
                >
                  {c.cert}
                </div>
                
                <div className="flex flex-col gap-2 font-chakra text-[11px] font-semibold text-slate-300">
                  <div className="flex justify-between border-t border-[#515866] pt-3">
                    <span className="text-slate-400 uppercase">Experience</span>
                    <span className="text-slate-200">{c.exp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 uppercase">Specialty</span>
                    <span className="text-slate-200">{c.spec}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
