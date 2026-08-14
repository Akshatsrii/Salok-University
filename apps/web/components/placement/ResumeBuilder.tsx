"use client";

import { useState } from 'react';
import { FileText, Upload, Sparkles, AlertTriangle } from 'lucide-react';

export const ResumeBuilder = () => {
  const [atsScore, setAtsScore] = useState<number | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleUpload = () => {
    setIsAnalyzing(true);
    setAtsScore(null);
    // Simulate AI ATS analysis delay
    setTimeout(() => {
      setAtsScore(Math.floor(Math.random() * 40) + 60); // Random score between 60 and 99
      setIsAnalyzing(false);
    }, 2500);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" /> Resume Builder & ATS Checker
          </h3>
          <p className="text-sm text-gray-500 mt-1">Upload your resume to get an AI-powered ATS score and improvement suggestions.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Upload Area */}
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-gray-50">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
            <Upload className="w-8 h-8 text-indigo-500" />
          </div>
          <h4 className="font-bold text-gray-800">Upload Resume (PDF)</h4>
          <p className="text-xs text-gray-500 mt-2 mb-6">Max file size 5MB</p>
          
          <button 
            onClick={handleUpload}
            disabled={isAnalyzing}
            className="bg-indigo-600 text-white font-medium px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors disabled:bg-indigo-400 flex items-center gap-2"
          >
            {isAnalyzing ? (
              <><Sparkles className="w-4 h-4 animate-spin" /> Analyzing...</>
            ) : (
              'Check ATS Score'
            )}
          </button>
        </div>

        {/* Results Area */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col justify-center">
          {atsScore === null && !isAnalyzing ? (
            <div className="text-center text-gray-400">
              <Sparkles className="w-12 h-12 mx-auto mb-3 opacity-20" />
              <p>Upload a resume to see AI analysis</p>
            </div>
          ) : isAnalyzing ? (
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600 font-medium animate-pulse">Our AI is reading your resume...</p>
            </div>
          ) : (
            <div className="text-center">
              <h4 className="text-gray-600 font-semibold mb-2">Your ATS Score</h4>
              
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-gray-200"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className={atsScore && atsScore > 80 ? 'text-green-500' : atsScore && atsScore > 60 ? 'text-orange-500' : 'text-red-500'}
                    strokeDasharray={`${atsScore}, 100`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-3xl font-bold text-gray-800">{atsScore}</span>
                  <span className="text-xs text-gray-500">/ 100</span>
                </div>
              </div>

              <div className="bg-orange-50 text-orange-800 p-3 rounded-lg text-sm text-left flex items-start gap-2 border border-orange-100">
                <AlertTriangle className="w-5 h-5 shrink-0 text-orange-500" />
                <p><strong>Suggestion:</strong> Add more action verbs like "Developed", "Led", and "Optimized" to improve your impact score.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
