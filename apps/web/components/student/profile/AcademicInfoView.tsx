export const AcademicInfoView = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Academic Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
          <div className="text-sm text-gray-500 mb-1">Course</div>
          <div className="font-semibold text-gray-900">B.Tech Computer Science</div>
        </div>
        <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
          <div className="text-sm text-gray-500 mb-1">Current Semester</div>
          <div className="font-semibold text-gray-900">Semester 6</div>
        </div>
        <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
          <div className="text-sm text-gray-500 mb-1">Overall CGPA</div>
          <div className="font-semibold text-blue-600 text-lg">8.92</div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 font-medium text-gray-600 border-b border-gray-200">Semester</th>
              <th className="p-4 font-medium text-gray-600 border-b border-gray-200">Total Credits</th>
              <th className="p-4 font-medium text-gray-600 border-b border-gray-200">Credits Earned</th>
              <th className="p-4 font-medium text-gray-600 border-b border-gray-200">SGPA</th>
              <th className="p-4 font-medium text-gray-600 border-b border-gray-200">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="p-4 font-medium text-gray-900">Semester 1</td>
              <td className="p-4">24</td>
              <td className="p-4">24</td>
              <td className="p-4 font-semibold text-gray-900">8.5</td>
              <td className="p-4 text-green-600 font-medium">Pass</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-900">Semester 2</td>
              <td className="p-4">24</td>
              <td className="p-4">24</td>
              <td className="p-4 font-semibold text-gray-900">8.8</td>
              <td className="p-4 text-green-600 font-medium">Pass</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-900">Semester 3</td>
              <td className="p-4">26</td>
              <td className="p-4">26</td>
              <td className="p-4 font-semibold text-gray-900">9.1</td>
              <td className="p-4 text-green-600 font-medium">Pass</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-900">Semester 4</td>
              <td className="p-4">24</td>
              <td className="p-4">24</td>
              <td className="p-4 font-semibold text-gray-900">9.0</td>
              <td className="p-4 text-green-600 font-medium">Pass</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-900">Semester 5</td>
              <td className="p-4">22</td>
              <td className="p-4">22</td>
              <td className="p-4 font-semibold text-gray-900">9.2</td>
              <td className="p-4 text-green-600 font-medium">Pass</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p className="text-sm text-gray-500 mt-4 italic">* Academic records are read-only. For any corrections, please contact the administration office.</p>
    </div>
  );
};
