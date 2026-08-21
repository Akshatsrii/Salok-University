"use client";

import { Heart } from "lucide-react";

export const DonationForm = () => {
  return (
    <div className="bg-[#1a2b4c] p-6 rounded-3xl border border-[#ffb800]/20 shadow-sm col-span-1 text-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#ffb800] rounded-xl text-[#1a2b4c]">
          <Heart className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-lg">Support Salok</h3>
      </div>
      
      <p className="text-sm text-gray-300 mb-6">
        Your contribution helps us provide scholarships to deserving students.
      </p>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {["₹1,000", "₹5,000", "₹10,000"].map((amt, idx) => (
          <button key={idx} className="bg-white/10 hover:bg-[#ffb800] hover:text-[#1a2b4c] font-bold py-2 rounded-xl text-sm transition-colors border border-white/20 hover:border-[#ffb800]">
            {amt}
          </button>
        ))}
      </div>
      
      <button className="w-full bg-[#ffb800] text-[#1a2b4c] font-bold py-3 rounded-xl hover:bg-[#e6a600] transition-colors shadow-md shadow-[#ffb800]/20">
        Donate Custom Amount
      </button>
    </div>
  );
};
