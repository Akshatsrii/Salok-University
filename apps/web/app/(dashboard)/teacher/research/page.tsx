import { PublicationList } from '../../../../components/teacher/PublicationList';
import { ConferenceForm } from '../../../../components/teacher/ConferenceForm';

export default function TeacherResearchPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Research & Publications</h1>
          <p className="text-gray-500 mt-1">Manage your academic research and conference requests.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PublicationList />
        <ConferenceForm />
      </div>
    </div>
  );
}
