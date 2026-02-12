import { Link } from "react-router-dom";
import {
  CalendarCheck,
  CreditCard,
  FileText,
  MessageSquare,
  Download,
  Building2,
} from "lucide-react";

const quickActions = [
  { icon: CalendarCheck, label: "Mark Attendance", to: "/attendance" },
  { icon: CreditCard, label: "Pay Fees", to: "/payments/fee" },
  { icon: MessageSquare, label: "Feedback", to: "/feedback" },
  { icon: Building2, label: "Hostel", to: "/hostel/details" },
];

export default function QuickActions() {
  return (
    <div className="bg-black rounded-xl shadow-lg p-6 border border-gray-800">
      <h3 className="font-semibold text-orange-400 mb-6 text-lg">
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {quickActions.map((action, idx) => (
          <Link
            key={idx}
            to={action.to}
            className="group flex flex-col items-center p-5 rounded-xl 
                       bg-gray-900 border border-gray-800
                       hover:border-orange-500 hover:bg-gray-800
                       transition-all duration-300"
          >
            <div
              className="p-4 rounded-full mb-3 
                         bg-orange-500 
                         group-hover:bg-orange-600
                         group-hover:scale-110
                         transition-all duration-300"
            >
              <action.icon className="w-6 h-6 text-white" />
            </div>

            <span className="text-sm text-gray-300 font-medium text-center group-hover:text-orange-400 transition-colors">
              {action.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
