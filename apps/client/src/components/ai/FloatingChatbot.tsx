
import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
    { role: 'ai', text: 'Hi! I am the Salok University AI Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    
    // Simulate AI response based on stub in ai-service
    setTimeout(() => {
      let reply = "I can help you with your timetable, attendance, or university policies.";
      if (input.toLowerCase().includes('exam')) {
        reply = "Based on your timetable, your next exam 'Data Structures' is on 15th August at 10:00 AM in Hall A.";
      }
      setMessages(prev => [...prev, { role: 'ai', text: reply }]);
    }, 1000);
    
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 w-80 h-[28rem] flex flex-col overflow-hidden">
          <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              <span className="font-bold">Salok AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div key={i} className={`max-w-[85%] p-3 rounded-lg text-sm ${
                msg.role === 'ai' ? 'bg-white border border-gray-200 text-gray-800 self-start' : 'bg-blue-600 text-white self-end'
              }`}>
                {msg.text}
              </div>
            ))}
          </div>
          
          <div className="p-3 bg-white border-t border-gray-200 flex gap-2">
            <input 
              type="text" 
              placeholder="Ask me anything..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm outline-none focus:border-blue-500"
            />
            <button 
              onClick={handleSend}
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-2"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
