"use client";

import { Book, ChevronRight } from "lucide-react";

export const SubjectList = () => {
  const subjects = [
    { code: "CS401", name: "Machine Learning", sem: "Semester 6", students: 65 },
    { code: "CS201", name: "Data Structures", sem: "Semester 3", students: 120 },
    { code: "CS505", name: "Advanced Algorithms", sem: "Semester 8", students: 45 },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
      <h3 className="font-bold text-[#1a2b4c] mb-6 text-lg">My Subjects</h3>
      <div className="space-y-4">
        {subjects.map((sub, idx) => (
          <div key={idx} className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-2xl transition-all cursor-pointer border border-gray-100 group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#fffdf5] text-[#ffb800] rounded-xl border border-[#ffdb70]/50">
                <Book className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-[#007bff] transition-colors">{sub.name}</h4>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                  <span className="font-semibold text-gray-600">{sub.code}</span> • {sub.sem} • {sub.students} Enrolled
                </div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#007bff] transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
};
