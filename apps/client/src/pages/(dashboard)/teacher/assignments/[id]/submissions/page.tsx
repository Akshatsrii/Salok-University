import { SubmissionGradingTable } from '../../../../../../components/assignments/SubmissionGradingTable';
import { Link } from "react-router-dom";
import { ArrowLeft, Users, CheckCircle, Clock } from 'lucide-react';

export default function SubmissionsGradingPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <Link href="/teacher/assignments" className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 w-fit mb-2">
        <ArrowLeft className="w-4 h-4" /> Back to Assignments
      </Link>
      
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">OS CPU Scheduling Simulation</h1>
          <p className="text-gray-500 mt-1">B.Tech Computer Science - Semester 6 | Due: 15 Aug 2026</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><Users className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Submissions</p>
            <p className="text-2xl font-bold text-gray-900">42 <span className="text-sm font-normal text-gray-500">/ 60</span></p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-green-50 text-green-600 rounded-lg"><CheckCircle className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Graded</p>
            <p className="text-2xl font-bold text-gray-900">18</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-orange-50 text-orange-600 rounded-lg"><Clock className="w-6 h-6" /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Pending Review</p>
            <p className="text-2xl font-bold text-gray-900">24</p>
          </div>
        </div>
      </div>

      <SubmissionGradingTable />
    </div>
  );
}
