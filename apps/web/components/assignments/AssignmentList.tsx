import { FileText, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const AssignmentList = () => {
  const assignments = [
    { id: '1', title: 'OS CPU Scheduling Simulation', course: 'Operating Systems', due: 'Tomorrow, 11:59 PM', status: 'Pending', urgent: true },
    { id: '2', title: 'Data Structures Graph Assignment', course: 'Data Structures', due: '10 Aug 2026', status: 'Submitted', urgent: false },
    { id: '3', title: 'Database Normalization', course: 'Database Systems', due: '01 Aug 2026', status: 'Graded', marks: '52/55', urgent: false },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {assignments.map((assignment) => (
        <div key={assignment.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full hover:shadow-md transition-shadow relative overflow-hidden">
          {assignment.urgent && <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>}
          
          <div className="flex-1">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><FileText className="w-5 h-5" /></div>
              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                assignment.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                assignment.status === 'Submitted' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
              }`}>
                {assignment.status}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{assignment.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{assignment.course}</p>
            
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-2">
              <Clock className={`w-4 h-4 ${assignment.urgent ? 'text-red-500' : 'text-gray-400'}`} />
              <span className={assignment.urgent ? 'text-red-600' : ''}>Due: {assignment.due}</span>
            </div>

            {assignment.status === 'Graded' && (
              <div className="flex items-center gap-2 text-sm font-medium text-green-700 mt-3 bg-green-50 w-fit px-2 py-1 rounded-md border border-green-100">
                <CheckCircle className="w-4 h-4" /> Score: {assignment.marks}
              </div>
            )}
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-100">
            <Link 
              href={`/student/assignments/${assignment.id}`} 
              className={`w-full py-2 flex items-center justify-center rounded-md text-sm font-semibold transition-colors ${
                assignment.status === 'Pending' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {assignment.status === 'Pending' ? 'Submit Now' : 'View Details'}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
