import { BatchPerformanceExport } from '../../../../../../components/students-admin/BatchPerformanceExport';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student Reports</h1>
          <p className="text-gray-500 mt-1">Export academic, attendance, and disciplinary reports.</p>
        </div>
      </div>

      {/* Sub-navbar / Tabs */}
      <div className="flex space-x-6 border-b border-gray-200 mb-6">
        <Link href="/admin/students" className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">All Students</Link>
        <Link href="/admin/students/reports" className="pb-3 border-b-2 border-blue-600 text-blue-600 font-medium text-sm">Reports</Link>
      </div>
      
      <BatchPerformanceExport />
    </div>
  );
}
