import React from 'react';
import { ResultCard } from '@/components/examination/ResultCard';
import { ExamScheduleTable } from '@/components/examination/ExamScheduleTable';
import { GraduationCap } from 'lucide-react';

export default function StudentExamDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-[#8a1538]" />
            Examinations & Results
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            View upcoming exam schedules and past academic performance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <ResultCard />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <ExamScheduleTable />
        </div>
      </div>
    </div>
  );
}
