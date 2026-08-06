import { Calendar } from 'lucide-react';

export const AttendanceWidget = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
          <Calendar className="w-5 h-5" />
        </div>
        <h3 className="font-semibold text-gray-900">Attendance</h3>
      </div>
      
      <div className="flex items-end gap-2 mb-2">
        <span className="text-3xl font-bold text-gray-900">82%</span>
        <span className="text-sm text-gray-500 mb-1">overall</span>
      </div>
      
      <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '82%' }}></div>
      </div>
      
      <div className="text-sm text-gray-600">
        You need 3 more classes in <span className="font-medium text-gray-900">Data Structures</span> to reach 75%.
      </div>
    </div>
  );
};
