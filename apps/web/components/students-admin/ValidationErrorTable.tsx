import { AlertCircle } from 'lucide-react';

export const ValidationErrorTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-red-200 overflow-hidden">
      <div className="p-4 bg-red-50 border-b border-red-100 flex items-center gap-3">
        <AlertCircle className="w-5 h-5 text-red-600" />
        <div>
          <h4 className="font-semibold text-red-900">Validation Errors Found</h4>
          <p className="text-sm text-red-700">Please fix the following errors in your CSV file and try uploading again.</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 font-medium text-gray-600 border-b border-gray-200">Row</th>
              <th className="p-3 font-medium text-gray-600 border-b border-gray-200">Field</th>
              <th className="p-3 font-medium text-gray-600 border-b border-gray-200">Value Provided</th>
              <th className="p-3 font-medium text-gray-600 border-b border-gray-200">Error Message</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="p-3 font-medium">12</td>
              <td className="p-3">Email</td>
              <td className="p-3 text-red-600 font-mono">rahul.example.com</td>
              <td className="p-3">Invalid email format (missing @)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">45</td>
              <td className="p-3">Phone</td>
              <td className="p-3 text-red-600 font-mono">98765</td>
              <td className="p-3">Phone number must be at least 10 digits</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">89</td>
              <td className="p-3">Course</td>
              <td className="p-3 text-red-600 font-mono">B.Tech Mechanical</td>
              <td className="p-3">Course not found in database</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
