import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-96">
          <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
            <div className="font-semibold">Ask Salok AI</div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-gray-700 max-w-[85%] mb-4 border border-gray-100">
              Hi! I'm Salok AI. How can I help you today?
            </div>
          </div>
          <div className="p-4 bg-white border-t border-gray-100">
            <input 
              type="text" 
              placeholder="Type your question..." 
              className="w-full px-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors hover:scale-105"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}
    </div>
  );
};
