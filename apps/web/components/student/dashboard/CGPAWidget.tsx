import { Award, TrendingUp } from 'lucide-react';

export const CGPAWidget = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-gray-900">Current CGPA</h3>
        </div>
        <span className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
          <TrendingUp className="w-3 h-3" /> +0.2
        </span>
      </div>
      
      <div>
        <div className="text-3xl font-bold text-gray-900 mb-1">8.92</div>
        <div className="text-sm text-gray-500">Out of 10.0 (till Semester 5)</div>
      </div>
    </div>
  );
};
