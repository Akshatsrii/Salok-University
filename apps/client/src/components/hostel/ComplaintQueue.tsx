
import { useState } from 'react';
import { Wrench, CheckCircle } from 'lucide-react';
import type { Complaint } from '../../types/hostel';

export const ComplaintQueue = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([
    { id: 'c1', studentId: 'stu1', roomId: '101', category: 'PLUMBING', description: 'Leaking tap in bathroom', status: 'PENDING', createdAt: '2026-08-12' },
    { id: 'c2', studentId: 'stu2', roomId: '102', category: 'ELECTRICAL', description: 'Fan making noise', status: 'IN_PROGRESS', createdAt: '2026-08-11' }
  ]);

  const updateStatus = (id: string, newStatus: Complaint['status']) => {
    setComplaints(complaints.map(c => c.id === id ? { ...c, status: newStatus } : c));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Wrench className="w-5 h-5 text-gray-700" /> Maintenance Queue
      </h3>

      <div className="space-y-4">
        {complaints.map(complaint => (
          <div key={complaint.id} className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-800">Room {complaint.roomId}</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                  {complaint.category}
                </span>
              </div>
              <p className="text-sm text-gray-600">{complaint.description}</p>
              <p className="text-xs text-gray-400 mt-1">Reported on: {complaint.createdAt}</p>
            </div>
            
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                complaint.status === 'PENDING' ? 'bg-orange-100 text-orange-700' :
                complaint.status === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-700' :
                'bg-green-100 text-green-700'
              }`}>
                {complaint.status}
              </span>
              
              {complaint.status !== 'RESOLVED' && (
                <button 
                  onClick={() => updateStatus(complaint.id, complaint.status === 'PENDING' ? 'IN_PROGRESS' : 'RESOLVED')}
                  className="p-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-500 rounded-full transition-colors"
                  title="Mark Next Step"
                >
                  <CheckCircle className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
