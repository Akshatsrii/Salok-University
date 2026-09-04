
import { FileEdit } from "lucide-react";
import { Link } from "react-router-dom";

export const PendingGradingWidget = () => {
  const pending = [
    { title: "Mid-Term Project", course: "Machine Learning", count: 24, priority: "high" },
    { title: "Lab Record 3", course: "Algorithm Design", count: 45, priority: "normal" },
    { title: "Assignment 1", course: "Data Structures", count: 12, priority: "normal" },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-[#1a2b4c]">Pending Grading</h3>
      </div>

      <div className="space-y-4">
        {pending.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gray-100">
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
              <p className="text-xs text-gray-500 mt-0.5">{item.course}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-xs font-bold px-2 py-1 rounded-md ${item.priority === 'high' ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-600'}`}>
                {item.count} left
              </span>
              <button className="text-[#007bff] hover:bg-blue-50 p-2 rounded-lg transition-colors">
                <FileEdit className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <Link href="/teacher/assignments" className="text-[#007bff] text-sm font-semibold hover:underline w-full text-center block">
          View All Assignments
        </Link>
      </div>
    </div>
  );
};
