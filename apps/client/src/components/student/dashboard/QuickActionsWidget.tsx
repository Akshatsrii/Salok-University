
import { CreditCard, FileText, Library, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

export const QuickActionsWidget = () => {
  const actions = [
    { icon: <CreditCard className="w-5 h-5 text-emerald-600" />, label: "Pay Fees", bg: "bg-emerald-50", href: "/student/fees" },
    { icon: <FileText className="w-5 h-5 text-[#007bff]" />, label: "Gate Pass", bg: "bg-blue-50", href: "/facility/hostel/rooms" },
    { icon: <Library className="w-5 h-5 text-purple-600" />, label: "Book Room", bg: "bg-purple-50", href: "/student/library" },
    { icon: <Coffee className="w-5 h-5 text-orange-600" />, label: "Mess Menu", bg: "bg-orange-50", href: "/student/hostel" },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm col-span-1 md:col-span-2">
      <h3 className="font-bold text-[#1a2b4c] mb-6">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, idx) => (
          <Link 
            key={idx} 
            to={action.href}
            className="flex flex-col items-center justify-center p-4 rounded-2xl border border-gray-100 hover:border-[#ffb800] hover:shadow-md transition-all group"
          >
            <div className={`w-12 h-12 rounded-full ${action.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
              {action.icon}
            </div>
            <span className="text-sm font-semibold text-gray-700 group-hover:text-[#1a2b4c]">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

