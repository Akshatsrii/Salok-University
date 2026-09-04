import { MenteeList } from '../../../../components/teacher/MenteeList';
import { ParentMeetingScheduler } from '../../../../components/teacher/ParentMeetingScheduler';

export default function TeacherStudentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student & Mentee Management</h1>
          <p className="text-gray-500 mt-1">Track student progress and schedule parent meetings.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MenteeList />
        <ParentMeetingScheduler />
      </div>
    </div>
  );
}
