export const MarksEntryGrid = () => {
  const students = [
    { id: '2023CS001', name: 'Aarav Patel', marks: 85 },
    { id: '2023CS002', name: 'Diya Singh', marks: 92 },
    { id: '2023CS003', name: 'Rohan Kumar', marks: 45 },
    { id: '2023CS004', name: 'Priya Sharma', marks: 78 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6">
      <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Marks Entry</h3>
          <p className="text-sm text-gray-500">Subject: Data Structures (B.Tech CS - Sem 6) | Max Marks: 100</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
          Save & Lock Marks
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-white border-b border-gray-200">
            <tr>
              <th className="p-4 font-semibold text-gray-600 w-32">Roll No</th>
              <th className="p-4 font-semibold text-gray-600">Student Name</th>
              <th className="p-4 font-semibold text-gray-600 w-48 text-right">Marks Obtained</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-900">{student.id}</td>
                <td className="p-4 text-gray-700">{student.name}</td>
                <td className="p-4 text-right">
                  <input 
                    type="number" 
                    defaultValue={student.marks}
                    min={0} max={100}
                    className={`w-24 border rounded-md p-2 text-right outline-none focus:ring-1 focus:ring-blue-500 ${
                      student.marks < 50 ? 'border-red-300 bg-red-50 text-red-700' : 'border-gray-300'
                    }`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
