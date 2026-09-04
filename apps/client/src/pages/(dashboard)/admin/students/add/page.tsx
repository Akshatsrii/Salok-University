import { StudentCreateForm } from '../../../../../components/students-admin/StudentCreateForm';
import { Link } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

export default function AddStudentPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div>
        <Link href="/admin/students" className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Directory
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Add Student</h1>
        <p className="text-gray-500 text-sm">Manually create a new student record.</p>
      </div>
      
      <StudentCreateForm />
    </div>
  );
}
