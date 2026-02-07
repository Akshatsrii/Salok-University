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
  GraduationCap
} from "lucide-react";

const menuSections = [
  {
    title: "MY PROFILE",
    items: [
      { to: "/profile", icon: User, label: "Basic Details" },
      { to: "/profile/password", icon: KeyRound, label: "Change Password" },
      { to: "/attendance", icon: CalendarCheck, label: "Attendance Details" },
    ]
  },
  // {
  //   title: "EXAM",
  //   items: [
  //     { to: "/exam/form", icon: FileText, label: "Exam Form" },
  //     { to: "/exam/admit", icon: GraduationCap, label: "Admit Card" },
  //   ]
  // },
  {
    title: "PAYMENTS",
    items: [
      { to: "/payments/estimate", icon: CreditCard, label: "Semester Fee Estimate" },
      { to: "/payments/fee", icon: CreditCard, label: "Semester Fee" },
    ]
  },
  {
    title: "HOSTEL",
    items: [
      { to: "/hostel/details", icon: Building2, label: "Hostel Details" },
      { to: "/hostel/leave", icon: FileText, label: "Apply Hostel Leaving" },
    ]
  },
  {
    title: "FEEDBACK",
    items: [
      { to: "/feedback", icon: MessageSquare, label: "Feedback" },
      { to: "/download", icon: Download, label: "Download Forms" },
    ]
  }
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50 
          w-64 bg-white border-r 
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          flex flex-col
        `}
      >
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* User Profile Section */}
        <div className="p-6 text-center border-b bg-gradient-to-b from-gray-50 to-white">
          <div className="relative inline-block">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
              alt="Riya Bansal"
              className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-white shadow-md object-cover"
            />
            <div className="absolute bottom-2 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <h2 className="font-semibold text-gray-800">Riya Bansal</h2>
          <p className="text-xs text-gray-500 mt-1">B.Tech • CSE</p>
          <p className="text-xs text-gray-400 mt-0.5">ID: 2024001</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {/* Home Link */}
          <NavLink
            to="/"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-700 hover:bg-secondary hover:text-primary"
              }`
            }
          >
            <Home className="w-5 h-5 flex-shrink-0" />
            <span className="font-medium">Home</span>
          </NavLink>

          {/* Menu Sections */}
          {menuSections.map((section, idx) => (
            <div key={idx} className="pt-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-2">
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
                          ? "bg-primary text-white shadow-sm"
                          : "text-gray-700 hover:bg-secondary hover:text-primary"
                      }`
                    }
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="flex-1 text-sm">{item.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t bg-gray-50">
          <div className="text-xs text-center text-gray-500">
            <p className="font-medium">Academic Year 2024-25</p>
            <p className="mt-1">Semester: 6th</p>
          </div>
        </div>
      </aside>
    </>
  );
}