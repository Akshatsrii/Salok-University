import { DownloadCloud, BarChart2 } from 'lucide-react';

export const BatchPerformanceExport = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
        <BarChart2 className="w-5 h-5 text-blue-600" />
        Batch Performance Reports
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all group cursor-pointer">
          <h4 className="font-semibold text-gray-900 mb-2">B.Tech CSE - 2026</h4>
          <p className="text-sm text-gray-500 mb-6">Comprehensive academic and attendance performance report for the entire batch.</p>
          <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-800">
            <DownloadCloud className="w-4 h-4" /> Download PDF
          </button>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all group cursor-pointer">
          <h4 className="font-semibold text-gray-900 mb-2">BBA - 2025</h4>
          <p className="text-sm text-gray-500 mb-6">Semester 4 results, placement statistics, and attendance metrics.</p>
          <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-800">
            <DownloadCloud className="w-4 h-4" /> Download Excel
          </button>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all group cursor-pointer bg-gray-50">
          <h4 className="font-semibold text-gray-900 mb-2 text-center mt-2">Custom Report</h4>
          <p className="text-sm text-gray-500 mb-4 text-center">Generate a customized report with specific filters and parameters.</p>
          <button className="mx-auto block px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-700">
            Build Report
          </button>
        </div>
      </div>
    </div>
  );
};
