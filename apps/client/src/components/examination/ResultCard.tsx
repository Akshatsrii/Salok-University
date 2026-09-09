import React from 'react';
import { Award, Download } from 'lucide-react';

export function ResultCard() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 rounded-xl p-6 text-white shadow-xl relative overflow-hidden">
      <div className="absolute -right-4 -top-4 w-32 h-32 bg-white opacity-10 rounded-full blur-xl pointer-events-none"></div>
      
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-indigo-200 text-xs font-bold uppercase tracking-wider mb-1">Latest Result</p>
          <h3 className="font-black text-xl">Semester 4 (B.Tech)</h3>
        </div>
        <Award className="w-8 h-8 text-amber-400" />
      </div>

      <div className="flex items-end gap-3 mb-6">
        <span className="text-5xl font-black">9.42</span>
        <span className="text-indigo-200 font-bold mb-1">SGPA</span>
      </div>
      
      <div className="space-y-3 mb-6 border-t border-indigo-500/50 pt-4">
        <div className="flex justify-between text-sm">
          <span className="text-indigo-200">CGPA (Overall)</span>
          <span className="font-bold">9.15</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-indigo-200">Total Credits</span>
          <span className="font-bold">24</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-indigo-200">Status</span>
          <span className="text-emerald-400 font-bold">PASS with Distinction</span>
        </div>
      </div>

      <button className="w-full bg-white text-indigo-900 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-sm shadow-sm">
        <Download className="w-4 h-4" /> Download Grade Card
      </button>
    </div>
  );
}
