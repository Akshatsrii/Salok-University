import { StudentProfileAdminView } from '../../../../../components/students-admin/StudentProfileAdminView';
import { Link } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

export default async function StudentProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div>
        <Link to="/admin/students" className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Directory
        </Link>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Student Profile</h1>
            <p className="text-gray-500 text-sm">ID: {resolvedParams.id}</p>
          </div>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50">
            Edit Profile
          </button>
        </div>
      </div>
      
      <StudentProfileAdminView studentId={resolvedParams.id} />
    </div>
  );
}
