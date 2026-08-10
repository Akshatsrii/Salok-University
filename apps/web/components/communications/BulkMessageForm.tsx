"use client";

import { useState } from 'react';
import { Send, Users, Smartphone, Mail, Bell } from 'lucide-react';

export const BulkMessageForm = () => {
  const [channels, setChannels] = useState({ email: true, sms: false, push: false, whatsapp: false });
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleSend = () => {
    setSending(true);
    // Simulate sending to notification-service workers
    setTimeout(() => {
      setSending(false);
      setMessage('');
      alert("Broadcast message queued successfully via selected channels!");
    }, 1500);
  };

  const toggleChannel = (key: keyof typeof channels) => {
    setChannels(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-2">Broadcast Message</h3>
      <p className="text-sm text-gray-500 mb-6">Send important updates to all students via multiple channels.</p>

      <div className="space-y-6 max-w-2xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Select Channels</label>
          <div className="flex gap-4">
            <button 
              onClick={() => toggleChannel('email')}
              className={`flex-1 py-3 border rounded-lg flex items-center justify-center gap-2 transition-colors ${channels.email ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
            >
              <Mail className="w-5 h-5" /> Email
            </button>
            <button 
              onClick={() => toggleChannel('sms')}
              className={`flex-1 py-3 border rounded-lg flex items-center justify-center gap-2 transition-colors ${channels.sms ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
            >
              <Smartphone className="w-5 h-5" /> SMS
            </button>
            <button 
              onClick={() => toggleChannel('push')}
              className={`flex-1 py-3 border rounded-lg flex items-center justify-center gap-2 transition-colors ${channels.push ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
            >
              <Bell className="w-5 h-5" /> Push
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Target Audience</label>
          <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 w-fit">
            <Users className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">All Students (Active)</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message Content</label>
          <textarea 
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your announcement here..."
            className="w-full border border-gray-300 rounded-md p-3 outline-none focus:ring-1 focus:ring-blue-500 resize-none"
          />
        </div>

        <button 
          onClick={handleSend}
          disabled={sending || !message.trim() || !Object.values(channels).some(Boolean)}
          className="w-full py-3 bg-blue-600 text-white rounded-md font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {sending ? 'Queueing Broadcast...' : <><Send className="w-4 h-4" /> Send Broadcast</>}
        </button>
      </div>
    </div>
  );
};
