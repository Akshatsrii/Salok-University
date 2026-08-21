import { ChildAttendanceView } from '../../../components/parent/ChildAttendanceView';
import { ChildFeesView } from '../../../components/parent/ChildFeesView';
import { ChildResultsView } from '../../../components/parent/ChildResultsView';
import { TeacherFeedbackView } from '../../../components/parent/TeacherFeedbackView';
import { BusTrackingView } from '../../../components/parent/BusTrackingView';

export default function ParentDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Parent Portal</h1>
          <p className="text-gray-500 mt-1">Track your child's academic progress, attendance, and fees.</p>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[#007bff] font-bold">R</div>
          <div>
            <p className="text-xs text-gray-500">Viewing as parent of</p>
            <p className="text-sm font-bold text-gray-900">Rahul Sharma (CS21045)</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ChildAttendanceView />
        <ChildFeesView />
        <ChildResultsView />
        <TeacherFeedbackView />
        <BusTrackingView />
      </div>
    </div>
  );
}
