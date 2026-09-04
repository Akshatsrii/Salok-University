import { FileText, Clock } from 'lucide-react';

export const AssignmentsDueWidget = () => {
  const assignments = [
    { title: 'OS Process Scheduling', subject: 'Operating Systems', due: 'Tomorrow, 11:59 PM', urgent: true },
    { title: 'Graph Algorithms', subject: 'Data Structures', due: 'Next Friday', urgent: false },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:col-span-2 lg:col-span-1">
      <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
        <FileText className="w-5 h-5 text-orange-500" /> Due Assignments
      </h3>
      
      <div className="space-y-4">
        {assignments.map((assignment, idx) => (
          <div key={idx} className="flex justify-between items-center p-3 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow">
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">{assignment.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{assignment.subject}</p>
            </div>
            <div className={`text-xs font-semibold flex items-center gap-1 ${assignment.urgent ? 'text-red-600 bg-red-50' : 'text-gray-600 bg-gray-50'} px-2 py-1 rounded-md`}>
              <Clock className="w-3 h-3" /> {assignment.due}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
