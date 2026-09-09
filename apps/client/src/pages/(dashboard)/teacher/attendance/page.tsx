import React from 'react';
import { AttendanceCaptureUI } from '@/components/attendance/AttendanceCaptureUI';
import { AttendanceMarkingGrid } from '@/components/attendance/AttendanceMarkingGrid';
import { CalendarCheck, Users } from 'lucide-react';

export default function TeacherAttendanceDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <CalendarCheck className="w-8 h-8 text-[#8a1538]" />
            Class Attendance
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Mark daily attendance and track defaulters.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl flex items-center gap-3">
            <Users className="w-8 h-8 text-emerald-500" />
            <div>
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Today's Avg</p>
              <p className="text-xl font-bold text-emerald-600">92%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <AttendanceCaptureUI />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <AttendanceMarkingGrid />
        </div>
      </div>
    </div>
  );
}
