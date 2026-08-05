export const AcademicTab = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Academic Records</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-500">Course</label>
          <div className="mt-1 text-gray-900 font-medium">B.Tech Computer Science</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Batch</label>
          <div className="mt-1 text-gray-900 font-medium">2026</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Current Semester</label>
          <div className="mt-1 text-gray-900 font-medium">6th Semester</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">CGPA</label>
          <div className="mt-1 text-blue-600 font-bold text-lg">8.9</div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 font-medium text-gray-600">Semester</th>
              <th className="p-3 font-medium text-gray-600">SGPA</th>
              <th className="p-3 font-medium text-gray-600">Credits Earned</th>
              <th className="p-3 font-medium text-gray-600 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="p-3">Semester 1</td>
              <td className="p-3 font-medium">8.5</td>
              <td className="p-3">24</td>
              <td className="p-3 text-right text-green-600 font-medium">Pass</td>
            </tr>
            <tr>
              <td className="p-3">Semester 2</td>
              <td className="p-3 font-medium">8.8</td>
              <td className="p-3">24</td>
              <td className="p-3 text-right text-green-600 font-medium">Pass</td>
            </tr>
            <tr>
              <td className="p-3">Semester 3</td>
              <td className="p-3 font-medium">9.1</td>
              <td className="p-3">26</td>
              <td className="p-3 text-right text-green-600 font-medium">Pass</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
