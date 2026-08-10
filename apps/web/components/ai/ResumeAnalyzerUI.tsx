"use client";

import { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

export const ResumeAnalyzerUI = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<{score: number, missing: string[]} | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = () => {
    if (!file) return;
    setLoading(true);
    
    // Simulate AI parsing from placement-ai service
    setTimeout(() => {
      setResult({
        score: 72,
        missing: ['System Design', 'Docker', 'GraphQL']
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">AI Resume Analyzer</h3>
      <p className="text-sm text-gray-500 mb-6">Upload your resume to check its ATS score against standard SDE roles.</p>

      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center bg-gray-50 mb-6">
        <Upload className="w-10 h-10 text-gray-400 mb-4" />
        <p className="text-sm font-medium text-gray-700">Drag and drop your PDF resume here</p>
        <p className="text-xs text-gray-400 mt-1">or click to browse</p>
        <input 
          type="file" 
          className="hidden" 
          id="resume-upload"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button 
          onClick={() => document.getElementById('resume-upload')?.click()}
          className="mt-4 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          Select File
        </button>
        {file && <p className="mt-4 text-sm font-bold text-blue-600 flex items-center gap-2"><FileText className="w-4 h-4"/> {file.name}</p>}
      </div>

      <button 
        onClick={handleUpload}
        disabled={!file || loading}
        className={`w-full py-3 rounded-md font-bold text-white transition-colors ${file && !loading ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'}`}
      >
        {loading ? 'Analyzing with Placement-AI...' : 'Analyze Resume'}
      </button>

      {result && (
        <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-bold text-gray-900 text-lg">ATS Match Score</h4>
              <p className="text-sm text-gray-600">Based on general SDE requirements</p>
            </div>
            <div className={`text-3xl font-extrabold ${result.score > 75 ? 'text-green-600' : 'text-orange-500'}`}>
              {result.score}/100
            </div>
          </div>
          
          <h5 className="font-semibold text-gray-800 text-sm mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-orange-500" /> Missing Keywords
          </h5>
          <div className="flex flex-wrap gap-2">
            {result.missing.map(kw => (
              <span key={kw} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">
                {kw}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
