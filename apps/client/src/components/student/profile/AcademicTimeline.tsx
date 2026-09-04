
import { CheckCircle, Clock } from "lucide-react";

export const AcademicTimeline = () => {
  const timeline = [
    { sem: "Semester 5", status: "Ongoing", sgpa: "TBD", subjects: 6, date: "Aug 2026 - Dec 2026" },
    { sem: "Semester 4", status: "Completed", sgpa: "9.2", subjects: 5, date: "Jan 2026 - May 2026" },
    { sem: "Semester 3", status: "Completed", sgpa: "8.8", subjects: 6, date: "Aug 2025 - Dec 2025" },
    { sem: "Semester 2", status: "Completed", sgpa: "8.5", subjects: 5, date: "Jan 2025 - May 2025" },
    { sem: "Semester 1", status: "Completed", sgpa: "8.9", subjects: 6, date: "Aug 2024 - Dec 2024" },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm col-span-1 md:col-span-2 h-96 overflow-y-auto custom-scrollbar">
      <h3 className="font-bold text-[#1a2b4c] mb-6 sticky top-0 bg-white z-10 pb-2">Academic Timeline</h3>
      
      <div className="relative pl-6 border-l-2 border-gray-100 space-y-8">
        {timeline.map((item, idx) => (
          <div key={idx} className="relative">
            {item.status === 'Completed' ? (
              <CheckCircle className="absolute -left-[35px] bg-white text-emerald-500 w-6 h-6 rounded-full" />
            ) : (
              <Clock className="absolute -left-[35px] bg-white text-[#ffb800] w-6 h-6 rounded-full" />
            )}
            
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 hover:border-[#007bff] transition-colors group">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-gray-900">{item.sem}</h4>
                {item.status === 'Completed' ? (
                  <span className="text-sm font-bold text-gray-700 bg-gray-200 px-3 py-1 rounded-full">SGPA: {item.sgpa}</span>
                ) : (
                  <span className="text-sm font-bold text-[#ffb800] bg-[#fffdf5] border border-[#ffdb70]/50 px-3 py-1 rounded-full">{item.status}</span>
                )}
              </div>
              <div className="text-xs text-gray-500 flex justify-between">
                <span>{item.subjects} Core Subjects</span>
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
