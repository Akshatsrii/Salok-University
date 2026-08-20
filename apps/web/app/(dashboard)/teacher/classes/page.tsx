import { SubjectList } from '../../../../components/teacher/SubjectList';
import { LectureUploader } from '../../../../components/teacher/LectureUploader';
import { NotesUploader } from '../../../../components/teacher/NotesUploader';

export default function TeacherClassesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Classes & Materials</h1>
          <p className="text-gray-500 mt-1">Manage your subjects, lectures, and study materials.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <SubjectList />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <LectureUploader />
          <NotesUploader />
        </div>
      </div>
    </div>
  );
}
