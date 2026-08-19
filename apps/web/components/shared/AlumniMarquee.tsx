"use client";

import { Building } from "lucide-react";

export const AlumniMarquee = () => {
  const alumni = [
    { name: "Rahul S.", company: "Google", role: "SWE II" },
    { name: "Priya M.", company: "Microsoft", role: "Product Manager" },
    { name: "Amit K.", company: "Amazon", role: "SDE I" },
    { name: "Neha J.", company: "Meta", role: "Data Scientist" },
    { name: "Vikram R.", company: "Apple", role: "iOS Engineer" },
    { name: "Sneha P.", company: "Netflix", role: "UI/UX Designer" },
    { name: "Arjun D.", company: "Uber", role: "Backend Engineer" },
  ];

  // Duplicate for seamless infinite scroll
  const marqueeItems = [...alumni, ...alumni];

  return (
    <div className="w-full bg-[#1a2b4c] border-y border-white/10 py-4 overflow-hidden relative flex items-center">
      {/* Gradient fades on left and right for smooth entry/exit */}
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#1a2b4c] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#1a2b4c] to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-marquee whitespace-nowrap min-w-full">
        {marqueeItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 px-8 border-r border-white/10 last:border-0 inline-flex">
            <div className="bg-white/10 p-2 rounded-full text-[#ffb800]">
              <Building className="w-4 h-4" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">{item.name}</p>
              <p className="text-gray-400 text-xs">{item.role} @ {item.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
