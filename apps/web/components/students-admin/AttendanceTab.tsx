export const AttendanceTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Attendance Overview</h3>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">Good Standing</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border border-gray-100 rounded-lg bg-gray-50 text-center">
          <div className="text-sm text-gray-500 mb-1">Total Classes</div>
          <div className="text-2xl font-bold text-gray-900">120</div>
        </div>
        <div className="p-4 border border-gray-100 rounded-lg bg-gray-50 text-center">
          <div className="text-sm text-gray-500 mb-1">Attended</div>
          <div className="text-2xl font-bold text-blue-600">105</div>
        </div>
        <div className="p-4 border border-gray-100 rounded-lg bg-gray-50 text-center">
          <div className="text-sm text-gray-500 mb-1">Percentage</div>
          <div className="text-2xl font-bold text-green-600">87.5%</div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-md font-semibold text-gray-800 mb-4">Subject-wise Breakdown</h4>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Data Structures</span>
              <span className="font-semibold text-green-600">90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Operating Systems</span>
              <span className="font-semibold text-yellow-600">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Computer Networks</span>
              <span className="font-semibold text-green-600">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
