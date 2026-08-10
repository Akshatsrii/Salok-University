import { FileText, Users, CheckCircle, Clock } from 'lucide-react';

export const ExamDashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><Clock className="w-6 h-6" /></div>
        <div>
          <p className="text-sm text-gray-500 font-medium">Upcoming Exams</p>
          <p className="text-2xl font-bold text-gray-900">4</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
        <div className="p-3 bg-orange-50 text-orange-600 rounded-lg"><FileText className="w-6 h-6" /></div>
        <div>
          <p className="text-sm text-gray-500 font-medium">Pending Results</p>
          <p className="text-2xl font-bold text-gray-900">12</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
        <div className="p-3 bg-green-50 text-green-600 rounded-lg"><CheckCircle className="w-6 h-6" /></div>
        <div>
          <p className="text-sm text-gray-500 font-medium">Results Declared</p>
          <p className="text-2xl font-bold text-gray-900">45</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
        <div className="p-3 bg-purple-50 text-purple-600 rounded-lg"><Users className="w-6 h-6" /></div>
        <div>
          <p className="text-sm text-gray-500 font-medium">Revaluation Req.</p>
          <p className="text-2xl font-bold text-gray-900">18</p>
        </div>
      </div>
    </div>
  );
};
