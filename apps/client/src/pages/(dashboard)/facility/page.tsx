import { Link } from "react-router-dom";
import { 
  Building, Bus, BookOpen, AlertTriangle, 
  Users, Activity, FileText, CheckCircle2
} from "lucide-react";

export default function FacilityDashboard() {
  const metrics = [
    { title: "Hostel Occupancy", value: "84%", icon: Building, color: "text-blue-600", bg: "bg-blue-100" },
    { title: "Active Transport Routes", value: "24", icon: Bus, color: "text-green-600", bg: "bg-green-100" },
    { title: "Library Books Issued", value: "1,245", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-100" },
    { title: "Pending Complaints", value: "12", icon: AlertTriangle, color: "text-amber-600", bg: "bg-amber-100" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 animate-reveal">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Facility Management</h1>
          <p className="text-gray-500 mt-1">Overview of Hostel, Transport, and Library operations</p>
        </div>
        <div className="flex gap-3 text-sm">
          <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> All Systems Operational
          </span>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${m.bg} ${m.color}`}>
              <m.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500">{m.title}</p>
              <h3 className="text-2xl font-black text-gray-900">{m.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modules */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Hostel Management */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-[#1a2b4c] p-4 flex justify-between items-center">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Building className="w-5 h-5 text-blue-300" /> Hostel Management
            </h3>
            <Link to="/facility/hostel" className="text-xs text-white/80 hover:text-white hover:underline">Manage</Link>
          </div>
          <div className="p-4 space-y-3">
            <Link to="/facility/hostel/rooms" className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-colors">
              <span className="font-bold text-sm text-gray-700 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500"/> Room Allocation</span>
              <ChevronRightIcon />
            </Link>
            <Link to="/facility/hostel/mess" className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-colors">
              <span className="font-bold text-sm text-gray-700 flex items-center gap-2"><Activity className="w-4 h-4 text-blue-500"/> Mess Operations</span>
              <ChevronRightIcon />
            </Link>
            <Link to="/facility/hostel/complaints" className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-colors bg-amber-50/50">
              <span className="font-bold text-sm text-gray-700 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-500"/> View Complaints (8)</span>
              <ChevronRightIcon />
            </Link>
          </div>
        </div>

        {/* Transport Management */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-[#1a2b4c] p-4 flex justify-between items-center">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Bus className="w-5 h-5 text-green-300" /> Transport Operations
            </h3>
            <Link to="/facility/transport" className="text-xs text-white/80 hover:text-white hover:underline">Manage</Link>
          </div>
          <div className="p-4 space-y-3">
            <Link to="/facility/transport/routes" className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-colors">
              <span className="font-bold text-sm text-gray-700 flex items-center gap-2"><Activity className="w-4 h-4 text-blue-500"/> Active Routes</span>
              <ChevronRightIcon />
            </Link>
            <Link to="/facility/transport/live-tracking" className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-colors">
              <span className="font-bold text-sm text-gray-700 flex items-center gap-2"><div className="w-4 h-4 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div> Live Tracking</span>
              <ChevronRightIcon />
            </Link>
            <Link to="/facility/transport/maintenance" className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-colors">
              <span className="font-bold text-sm text-gray-700 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-500"/> Bus Maintenance (3)</span>
              <ChevronRightIcon />
            </Link>
          </div>
        </div>

        {/* Library Management */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-[#1a2b4c] p-4 flex justify-between items-center">
            <h3 className="font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-300" /> Library Desk
            </h3>
            <Link to="/facility/library" className="text-xs text-white/80 hover:text-white hover:underline">Manage</Link>
          </div>
          <div className="p-4 space-y-3">
            <Link to="/facility/library" className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-colors">
              <span className="font-bold text-sm text-gray-700 flex items-center gap-2"><FileText className="w-4 h-4 text-blue-500"/> Issue/Return Book</span>
              <ChevronRightIcon />
            </Link>
            <Link to="/facility/library" className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-colors bg-amber-50/50">
              <span className="font-bold text-sm text-gray-700 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-500"/> Overdue Books (45)</span>
              <ChevronRightIcon />
            </Link>
            <Link to="/facility/library" className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-colors">
              <span className="font-bold text-sm text-gray-700 flex items-center gap-2"><Users className="w-4 h-4 text-blue-500"/> E-Journal Access Stats</span>
              <ChevronRightIcon />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function ChevronRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}
