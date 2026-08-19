"use client";

import { MessageCircle, X, Send } from "lucide-react";
import { useState } from "react";

export const FloatingAIWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-[#ffb800] text-[#1a2b4c] rounded-full shadow-2xl hover:scale-110 hover:shadow-[#ffb800]/30 transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <MessageCircle className="w-8 h-8" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-8 right-8 z-50 w-[350px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        <div className="bg-[#1a2b4c] p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#ffb800] rounded-full flex items-center justify-center text-[#1a2b4c]">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Salok AI</h3>
              <p className="text-[10px] text-gray-300">Online | Ask me anything</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="h-80 bg-gray-50 p-4 overflow-y-auto flex flex-col gap-3 text-sm">
          <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-sm self-start shadow-sm max-w-[85%] text-gray-700">
            Hi! I am the Salok University AI Assistant. You can ask me about admissions, fees, syllabus, or hostel facilities!
          </div>
        </div>

        <div className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
          <input 
            type="text" 
            placeholder="Type your question..." 
            className="flex-1 bg-gray-50 rounded-xl px-4 py-2 text-sm outline-none border border-transparent focus:border-[#007bff]/30 focus:bg-white transition-all"
          />
          <button className="p-2 bg-[#007bff] text-white rounded-xl hover:bg-blue-600 transition-colors">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};
