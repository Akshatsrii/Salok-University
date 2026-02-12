import { Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const activities = [
  {
    type: "success",
    icon: CheckCircle,
    message: "Semester fee payment completed",
    time: "2 hours ago",
    color: "text-green-400",
  },
  {
    type: "info",
    icon: AlertCircle,
    message: "New assignment uploaded in Data Structures",
    time: "5 hours ago",
    color: "text-blue-400",
  },
  {
    type: "warning",
    icon: Clock,
    message: "Exam form submission deadline in 3 days",
    time: "1 day ago",
    color: "text-orange-400",
  },
  {
    type: "error",
    icon: XCircle,
    message: "Attendance below 75% in Operating Systems",
    time: "2 days ago",
    color: "text-red-400",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-black rounded-xl shadow-lg p-6 border border-gray-800">
      
      {/* Title */}
      <h3 className="font-semibold text-orange-400 mb-6 text-lg">
        Recent Activity
      </h3>

      {/* Activity List */}
      <div className="space-y-5">
        {activities.map((activity, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 pb-4 border-b border-gray-800 last:border-b-0 
                       hover:bg-gray-900 p-3 rounded-lg transition"
          >
            <activity.icon
              className={`w-5 h-5 ${activity.color} flex-shrink-0 mt-1`}
            />

            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-200">
                {activity.message}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <button
        className="w-full mt-6 py-2 rounded-lg 
                   bg-orange-500 hover:bg-orange-600 
                   text-white text-sm font-medium 
                   transition-colors"
      >
        View All Activity
      </button>
    </div>
  );
}
