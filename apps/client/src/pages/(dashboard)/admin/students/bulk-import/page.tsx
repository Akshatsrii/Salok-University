import { CSVUploader } from '../../../../../components/students-admin/CSVUploader';
import { ValidationErrorTable } from '../../../../../components/students-admin/ValidationErrorTable';
import { Link } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

export default function BulkImportPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8 bg-gray-50 min-h-screen">
      <div>
        <Link to="/admin/students" className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Directory
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Bulk Import Students</h1>
        <p className="text-gray-500 text-sm mt-1">Upload a CSV file to add multiple students at once.</p>
      </div>
      
      <CSVUploader />
      
      {/* Example of showing validation errors if they exist */}
      <div className="mt-8">
        <ValidationErrorTable />
      </div>
    </div>
  );
}

