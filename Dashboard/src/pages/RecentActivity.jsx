import { Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const activities = [
  { 
    type: "success", 
    icon: CheckCircle, 
    message: "Semester fee payment completed", 
    time: "2 hours ago",
    color: "text-green-500"
  },
  { 
    type: "info", 
    icon: AlertCircle, 
    message: "New assignment uploaded in Data Structures", 
    time: "5 hours ago",
    color: "text-blue-500"
  },
  { 
    type: "warning", 
    icon: Clock, 
    message: "Exam form submission deadline in 3 days", 
    time: "1 day ago",
    color: "text-orange-500"
  },
  { 
    type: "error", 
    icon: XCircle, 
    message: "Attendance below 75% in Operating Systems", 
    time: "2 days ago",
    color: "text-red-500"
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="font-semibold text-gray-800 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, idx) => (
          <div key={idx} className="flex items-start gap-3 pb-4 border-b last:border-b-0">
            <activity.icon className={`w-5 h-5 ${activity.color} flex-shrink-0 mt-0.5`} />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-800">{activity.message}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 text-sm text-primary hover:underline font-medium">
        View All Activity
      </button>
    </div>
  );
}