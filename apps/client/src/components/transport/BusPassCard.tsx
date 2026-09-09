import React from 'react';
import { QrCode, ShieldCheck } from 'lucide-react';

export function BusPassCard() {
  return (
    <div className="bg-gradient-to-br from-[#8a1538] to-[#4a0b1e] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
      <div className="absolute right-0 top-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
      <div className="absolute left-0 bottom-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-10 -mb-10 pointer-events-none"></div>
      
      <div className="relative z-10 flex justify-between items-start mb-8">
        <div>
          <p className="text-white/70 text-xs font-bold uppercase tracking-wider mb-1">Transit Pass</p>
          <h3 className="font-black text-xl">Salok University</h3>
        </div>
        <ShieldCheck className="w-8 h-8 text-emerald-400" />
      </div>

      <div className="relative z-10 flex items-center justify-between">
        <div>
          <p className="text-white/70 text-xs mb-1">Pass Holder</p>
          <p className="font-bold mb-4">Aditi Verma</p>
          
          <p className="text-white/70 text-xs mb-1">Route & Stop</p>
          <p className="font-bold mb-4">Route 42 • City Center</p>

          <p className="text-white/70 text-xs mb-1">Valid Until</p>
          <p className="font-bold text-amber-400">Dec 2026</p>
        </div>
        
        <div className="bg-white p-2 rounded-xl">
          <QrCode className="w-24 h-24 text-gray-900" />
        </div>
      </div>
    </div>
  );
}
