
import { useState } from 'react';
import { AlertCircle, Bot, MessageSquare, CheckCircle, Clock } from 'lucide-react';

export const ComplaintQueueGeneric = () => {
  const [filter, setFilter] = useState('ALL');

  const complaints = [
    { id: 'C-1042', subject: "Wifi not working in Block B", category: "IT_SUPPORT", aiCategory: "NETWORK_ISSUE", priority: "HIGH", status: "PENDING", date: "2 hrs ago", student: "Rahul Verma" },
    { id: 'C-1043', subject: "Water cooler broken on 3rd floor", category: "HOSTEL", aiCategory: "MAINTENANCE", priority: "MEDIUM", status: "IN_PROGRESS", date: "5 hrs ago", student: "Sneha Patel" },
    { id: 'C-1044', subject: "Missing marks in Internal Exam", category: "ACADEMIC", aiCategory: "EXAMINATION", priority: "CRITICAL", status: "PENDING", date: "1 day ago", student: "Amit Kumar" },
    { id: 'C-1045', subject: "Bus 12 delayed constantly", category: "TRANSPORT", aiCategory: "TRANSPORT_TIMING", priority: "LOW", status: "RESOLVED", date: "2 days ago", student: "Pooja Singh" },
  ];

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'CRITICAL': return "bg-red-100 text-red-700 border-red-200";
      case 'HIGH': return "bg-orange-100 text-orange-700 border-orange-200";
      case 'MEDIUM': return "bg-blue-100 text-blue-700 border-blue-200";
      case 'LOW': return "bg-gray-100 text-gray-700 border-gray-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'RESOLVED': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'IN_PROGRESS': return <Clock className="w-4 h-4 text-blue-500" />;
      default: return <AlertCircle className="w-4 h-4 text-red-500" />;
    }
  };

  const filteredComplaints = filter === 'ALL' ? complaints : complaints.filter(c => c.status === filter);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">University Complaint Queue</h2>
            <p className="text-sm text-gray-500 mt-1">AI-categorized grievances from all departments.</p>
          </div>
          <div className="flex gap-2">
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
            >
              <option value="ALL">All Status</option>
              <option value="PENDING">Pending</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="RESOLVED">Resolved</option>
            </select>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {filteredComplaints.map((complaint) => (
          <div key={complaint.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {complaint.id}
                  </span>
                  <span className={`text-xs font-bold px-2 py-1 rounded border ${getPriorityColor(complaint.priority)}`}>
                    {complaint.priority}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{complaint.subject}</h3>
                <p className="text-sm text-gray-500 mb-4">Reported by <span className="font-medium text-gray-700">{complaint.student}</span> • {complaint.date}</p>
                
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200">
                    <MessageSquare className="w-3.5 h-3.5" />
                    {complaint.category}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                    <Bot className="w-3.5 h-3.5" />
                    AI Category: {complaint.aiCategory}
                  </div>
                </div>
              </div>

              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-4 md:min-w-[150px]">
                <div className="flex items-center gap-1.5 font-medium text-sm text-gray-700">
                  {getStatusIcon(complaint.status)}
                  {complaint.status.replace('_', ' ')}
                </div>
                <button className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors w-full md:w-auto">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
