import { ExaminationNav } from '../../../../components/examination/ExaminationNav';
import { ExamDashboardStats } from '../../../../components/examination/ExamDashboardStats';

export default function ExaminationDashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Examination Module</h1>
        <p className="text-gray-500 mt-1">Manage schedules, hall tickets, results, and certificates.</p>
      </div>

      <ExaminationNav />
      <ExamDashboardStats />
      
      <div className="mt-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Welcome to Examination Control</h3>
        <p className="text-gray-600">Select an option from the navigation menu to proceed with your tasks. You can manage schedules, check eligibility for hall tickets, enter marks, declare results, or process revaluation requests from here.</p>
      </div>
    </div>
  );
}
