"use client";

import { Search, Command } from "lucide-react";
import { useState, useEffect } from "react";

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-500 px-4 py-2 rounded-xl text-sm hover:bg-gray-100 hover:border-gray-300 transition-colors w-64"
      >
        <Search className="w-4 h-4" />
        <span>Search Salok ERP...</span>
        <div className="ml-auto flex items-center gap-1 opacity-60">
          <Command className="w-3 h-3" />
          <span className="text-xs font-bold">K</span>
        </div>
      </button>

      {/* Overlay & Palette */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#1a2b4c]/40 backdrop-blur-sm" 
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Modal */}
          <div className="relative bg-white/90 backdrop-blur-md w-full max-w-xl rounded-2xl shadow-2xl border border-white/50 overflow-hidden transform transition-all animate-reveal">
            <div className="flex items-center px-4 border-b border-gray-100">
              <Search className="w-5 h-5 text-[#007bff]" />
              <input 
                type="text" 
                placeholder="Search students, courses, settings..." 
                className="w-full bg-transparent px-4 py-4 outline-none text-gray-900 placeholder:text-gray-400 font-medium"
                autoFocus
              />
              <button onClick={() => setIsOpen(false)} className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-md">ESC</button>
            </div>

            <div className="p-4 max-h-80 overflow-y-auto">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Suggestions</div>
              <div className="space-y-1">
                {['Pay Semester Fees', 'View Placement Drives', 'Student Profile', 'Download Syllabus'].map((item, i) => (
                  <button key={i} className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-[#ffb800]/10 hover:text-[#1a2b4c] rounded-xl transition-colors text-left font-medium">
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
