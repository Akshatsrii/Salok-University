import { Award, CheckCircle } from 'lucide-react';

export const GradeDisplay = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-green-200 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -z-10 opacity-50"></div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-green-600" /> Final Grade
          </h3>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
            <CheckCircle className="w-3 h-3" /> Graded
          </span>
        </div>

        <div className="flex items-end gap-2">
          <span className="text-5xl font-extrabold text-gray-900">92</span>
          <span className="text-xl font-semibold text-gray-400 mb-1">/ 100</span>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Instructor Remarks:</h4>
          <p className="text-sm text-gray-600 italic">"Excellent work on the normalization step. Your ER diagram was very clear and easy to follow. Keep it up!" - Dr. A. Sharma</p>
        </div>
      </div>
    </div>
  );
};
