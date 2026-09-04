import { Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

export const AIFeedbackPanel = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 shadow-sm border border-indigo-100">
      <h3 className="text-lg font-bold text-indigo-900 flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-indigo-600" /> AI Feedback Analysis
      </h3>

      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-50">
          <h4 className="font-semibold text-gray-900 text-sm mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" /> Strengths
          </h4>
          <p className="text-sm text-gray-600">Your ER diagram perfectly captures the 1:N relationship between Departments and Employees. Good use of normalization principles up to 3NF.</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-50">
          <h4 className="font-semibold text-gray-900 text-sm mb-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-orange-500" /> Areas for Improvement
          </h4>
          <p className="text-sm text-gray-600">The SQL query for finding the second highest salary is slightly inefficient. Consider using the `DENSE_RANK()` window function instead of subqueries for better performance on large datasets.</p>
        </div>

        <div className="mt-4 pt-4 border-t border-indigo-200">
          <p className="text-xs text-indigo-700 font-medium">
            * Note: This feedback is AI-generated to help you learn and improve. Your final grade is determined by your instructor.
          </p>
        </div>
      </div>
    </div>
  );
};
