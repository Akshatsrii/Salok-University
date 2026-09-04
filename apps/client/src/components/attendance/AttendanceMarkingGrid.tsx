
import { useState } from 'react';
import { Search, Save } from 'lucide-react';

export const AttendanceMarkingGrid = () => {
  const [students, setStudents] = useState([
    { id: 'STU-001', name: 'Rahul Sharma', status: 'Present' },
    { id: 'STU-002', name: 'Priya Patel', status: 'Present' },
    { id: 'STU-003', name: 'Amit Kumar', status: 'Absent' },
    { id: 'STU-004', name: 'Neha Gupta', status: 'Late' },
    { id: 'STU-005', name: 'Rohan Singh', status: 'Present' },
  ]);

  const toggleStatus = (id: string, newStatus: string) => {
    setStudents(students.map(s => s.id === id ? { ...s, status: newStatus } : s));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Mark Attendance: Data Structures (CS304)</h3>
          <p className="text-sm text-gray-500">Date: {new Date().toLocaleDateString()} | Time: 09:00 AM - 10:30 AM</p>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search student..." 
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm w-full focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <Save className="w-4 h-4" /> Save
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 font-medium text-gray-600 border-b border-gray-200">Roll No</th>
              <th className="p-4 font-medium text-gray-600 border-b border-gray-200">Student Name</th>
              <th className="p-4 font-medium text-gray-600 border-b border-gray-200 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-900">{student.id}</td>
                <td className="p-4 text-gray-700">{student.name}</td>
                <td className="p-4 flex justify-center gap-2">
                  <button 
                    onClick={() => toggleStatus(student.id, 'Present')}
                    className={`px-3 py-1 rounded-md text-xs font-semibold border ${
                      student.status === 'Present' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    Present
                  </button>
                  <button 
                    onClick={() => toggleStatus(student.id, 'Absent')}
                    className={`px-3 py-1 rounded-md text-xs font-semibold border ${
                      student.status === 'Absent' ? 'bg-red-100 text-red-700 border-red-200' : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    Absent
                  </button>
                  <button 
                    onClick={() => toggleStatus(student.id, 'Late')}
                    className={`px-3 py-1 rounded-md text-xs font-semibold border ${
                      student.status === 'Late' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    Late
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
