"use client";

interface AmenityItem {
  code: string;
  name: string;
}

interface AmenitiesProps {
  accent?: string;
}

export default function Amenities({ accent = "#E11B22" }: AmenitiesProps) {
  const amenities: AmenityItem[] = [
    { code: "PK", name: "Free Parking" },
    { code: "LK", name: "Locker Rooms" },
    { code: "H2O", name: "Hydration Bar" },
    { code: "GR", name: "Gear Rental" },
    { code: "PS", name: "Pro Shop" },
    { code: "CF", name: "Cafe & Snacks" },
    { code: "WF", name: "Free WiFi" },
    { code: "SD", name: "Spectator Deck" },
  ];

  return (
    <section className="px-6 md:px-12 py-24 bg-[#2D3139] border-t border-[#414752]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span 
            style={{ color: accent }}
            className="font-chakra text-xs tracking-widest uppercase font-bold"
          >
            // BASE CAMP
          </span>
          <h2 className="font-saira font-black text-4xl md:text-6xl text-white uppercase leading-none mt-3">
            Everything On Site
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {amenities.map((a, index) => (
            <div 
              key={index}
              className="flex items-center gap-5 p-6 border border-[#414752] bg-[#353A43] hover:border-[#515866] transition-all"
            >
              <span 
                style={{
                  clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                  borderColor: `${accent}60`, // slightly transparent accent border
                  color: accent
                }}
                className="flex items-center justify-center w-14 h-14 flex-shrink-0 border font-chakra font-black text-base tracking-wider bg-[#2D3139] shadow-sm"
              >
                {a.code}
              </span>
              <span className="font-saira font-bold text-lg text-slate-100 uppercase tracking-wide">
                {a.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
