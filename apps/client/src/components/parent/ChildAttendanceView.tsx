
import { CalendarCheck, AlertTriangle } from "lucide-react";

export const ChildAttendanceView = () => {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm col-span-1">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600">
            <CalendarCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-gray-900 text-lg">Attendance</h3>
        </div>
        <span className="text-2xl font-extrabold text-emerald-600">85%</span>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Total Classes</span>
          <span className="font-semibold text-gray-900">120</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Present</span>
          <span className="font-semibold text-gray-900">102</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Absent</span>
          <span className="font-semibold text-red-500">18</span>
        </div>
      </div>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-xl flex items-start gap-2">
        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
        <p className="text-xs text-amber-700">Attendance is hovering near the 75% mandatory threshold. Please monitor.</p>
      </div>
    </div>
  );
};
