"use client";

import { useState } from 'react';
import { Mic, Video, Play, MessageSquare } from 'lucide-react';

export const MockInterviewLauncher = () => {
  const [started, setStarted] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6 text-center overflow-hidden relative">
      {!started ? (
        <div className="py-8">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mic className="w-10 h-10 text-indigo-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Mock Interview</h3>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            Practice for your upcoming drives with our AI interviewer. Get real-time feedback on your answers, body language, and confidence.
          </p>
          
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setStarted(true)}
              className="bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-lg shadow-indigo-200"
            >
              <Video className="w-5 h-5" /> Start Video Interview
            </button>
            <button 
              onClick={() => setStarted(true)}
              className="bg-gray-100 text-gray-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" /> Text Interview
            </button>
          </div>
        </div>
      ) : (
        <div className="py-4">
          <div className="bg-black rounded-xl aspect-video w-full max-w-3xl mx-auto flex items-center justify-center relative shadow-2xl border-4 border-gray-800">
            <p className="text-white flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
              Camera and Microphone feed would appear here
            </p>
            
            {/* AI Avatar Stub */}
            <div className="absolute bottom-4 right-4 w-32 h-40 bg-gray-800 rounded-lg border-2 border-gray-700 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full mb-2 flex items-center justify-center">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex gap-1 items-center justify-center">
                  <span className="w-1 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1 h-5 bg-white rounded-full animate-bounce" style={{ animationDelay: '100ms' }}></span>
                  <span className="w-1 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></span>
                </div>
              </div>
              <p className="text-white text-xs font-bold">AI Interviewer</p>
            </div>
            
            <button 
              onClick={() => setStarted(false)}
              className="absolute top-4 right-4 bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold hover:bg-red-700"
            >
              End Session
            </button>
          </div>
          <p className="text-gray-500 mt-4 text-sm max-w-xl mx-auto">
            "Hello! I am your AI interviewer. Let's start by discussing your recent project mentioned in your resume. Could you walk me through your technical decisions?"
          </p>
        </div>
      )}
    </div>
  );
};
