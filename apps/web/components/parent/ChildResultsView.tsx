"use client";

import { Award, TrendingUp } from "lucide-react";

export const ChildResultsView = () => {
  const semesters = [
    { sem: "Sem 3", sgpa: "8.9" },
    { sem: "Sem 2", sgpa: "8.5" },
    { sem: "Sem 1", sgpa: "8.2" }
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm col-span-1">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-50 rounded-xl text-purple-600">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-gray-900 text-lg">Academic Results</h3>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500">Overall CGPA</p>
          <span className="text-2xl font-extrabold text-[#1a2b4c]">8.53</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {semesters.map((s, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 rounded-xl border border-gray-50 bg-gray-50/50">
            <span className="text-sm font-semibold text-gray-700">{s.sem} SGPA</span>
            <span className="font-bold text-[#1a2b4c]">{s.sgpa}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-[#007bff] text-sm font-semibold cursor-pointer hover:underline">
        <TrendingUp className="w-4 h-4" />
        View Detailed Progress Graph
      </div>
    </div>
  );
};
