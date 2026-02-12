import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  KeyRound,
  CalendarCheck,
  FileText,
  CreditCard,
  Building2,
  MessageSquare,
  Download,
  ChevronRight,
  X,
} from "lucide-react";

const menuSections = [
  {
    title: "MY PROFILE",
    items: [
      { to: "/profile", icon: User, label: "Basic Details" },
      { to: "/profile/password", icon: KeyRound, label: "Change Password" },
      { to: "/attendance", icon: CalendarCheck, label: "Attendance Details" },
    ],
  },
  {
    title: "PAYMENTS",
    items: [
      { to: "/payments/estimate", icon: CreditCard, label: "Semester Fee Estimate" },
      { to: "/payments/fee", icon: CreditCard, label: "Semester Fee" },
    ],
  },
  {
    title: "HOSTEL",
    items: [
      { to: "/hostel/details", icon: Building2, label: "Hostel Details" },
      { to: "/hostel/leave", icon: FileText, label: "Apply Hostel Leaving" },
    ],
  },
  {
    title: "FEEDBACK",
    items: [
      { to: "/feedback", icon: MessageSquare, label: "Feedback" },
      { to: "/download", icon: Download, label: "Download Forms" },
    ],
  },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside
      className={`
        fixed top-0 left-0 h-full w-64
        bg-black border-r border-gray-800
        z-50 flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
    >
      {/* Close Button (Mobile) */}
      <button
        onClick={onClose}
        className="lg:hidden absolute top-4 right-4 p-2 hover:bg-orange-500/20 rounded-lg transition"
      >
        <X className="w-5 h-5 text-orange-500" />
      </button>

      {/* Profile Section */}
      <div className="p-6 text-center border-b border-gray-800 bg-gradient-to-b from-[#111] to-black">
        <div className="relative inline-block">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
            alt="Student"
            className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-orange-500 shadow-lg object-cover"
          />
          <span className="absolute bottom-2 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-black"></span>
        </div>

        <h2 className="font-semibold text-orange-500">Riya Bansal</h2>
        <p className="text-xs text-gray-400 mt-1">B.Tech • CSE</p>
        <p className="text-xs text-gray-500">ID: 2024001</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-thin scrollbar-thumb-orange-500/40">

        {/* Home */}
        <NavLink
          to="/"
          end
          onClick={onClose}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-orange-500 text-black shadow-md"
                : "text-gray-300 hover:bg-orange-500/10 hover:text-orange-500"
            }`
          }
        >
          <Home className="w-5 h-5" />
          <span className="font-medium">Home</span>
        </NavLink>

        {/* Dynamic Sections */}
        {menuSections.map((section) => (
          <div key={section.title} className="pt-4">
            <p className="text-xs font-semibold text-orange-500 uppercase tracking-wider px-4 mb-2">
              {section.title}
            </p>

            <div className="space-y-1">
              {section.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group ${
                      isActive
                        ? "bg-orange-500 text-black shadow-md"
                        : "text-gray-300 hover:bg-orange-500/10 hover:text-orange-500"
                    }`
                  }
                >
                  <item.icon className="w-4 h-4" />
                  <span className="flex-1 text-sm">{item.label}</span>

                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-orange-500" />
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800 bg-[#111]">
        <div className="text-xs text-center text-gray-400">
          <p className="font-medium text-orange-500">Academic Year 2024-25</p>
          <p className="mt-1">Semester: 6th</p>
        </div>
      </div>
    </aside>
  );
}
