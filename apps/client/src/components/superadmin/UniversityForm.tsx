import React from 'react';
import { Save } from 'lucide-react';

export function UniversityForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">University Name</label>
        <input type="text" defaultValue="Salok University" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-1 focus:ring-[#8a1538] outline-none" />
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">Establishment Year</label>
        <input type="text" defaultValue="1995" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-1 focus:ring-[#8a1538] outline-none" />
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">Affiliation / Accreditation</label>
        <input type="text" defaultValue="UGC, NAAC A++" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-1 focus:ring-[#8a1538] outline-none" />
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">Primary Domain</label>
        <input type="text" defaultValue="salok.edu.in" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-1 focus:ring-[#8a1538] outline-none" />
      </div>
      
      <div className="pt-4 border-t border-gray-100">
        <button type="button" className="w-full bg-[#8a1538] text-white py-2.5 rounded-lg font-bold hover:bg-[#6c102c] transition flex items-center justify-center gap-2">
          <Save className="w-4 h-4" /> Save Profile
        </button>
      </div>
    </form>
  );
}
