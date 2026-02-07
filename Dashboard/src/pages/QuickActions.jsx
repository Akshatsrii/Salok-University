import { Link } from "react-router-dom";
import { 
  CalendarCheck, 
  CreditCard, 
  FileText, 
  MessageSquare,
  Download,
  Building2 
} from "lucide-react";

const quickActions = [
  { icon: CalendarCheck, label: "Mark Attendance", to: "/attendance", color: "bg-blue-500" },
  { icon: CreditCard, label: "Pay Fees", to: "/payments/fee", color: "bg-green-500" },
  // { icon: FileText, label: "Exam Form", to: "/exam/form", color: "bg-purple-500" },
  // { icon: Download, label: "Admit Card", to: "/exam/admit", color: "bg-orange-500" },
  { icon: MessageSquare, label: "Feedback", to: "/feedback", color: "bg-pink-500" },
  { icon: Building2, label: "Hostel", to: "/hostel/details", color: "bg-indigo-500" },
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="font-semibold text-gray-800 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {quickActions.map((action, idx) => (
          <Link
            key={idx}
            to={action.to}
            className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className={`${action.color} p-3 rounded-full mb-2 group-hover:scale-110 transition-transform`}>
              <action.icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-center text-gray-700 font-medium">
              {action.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
} 