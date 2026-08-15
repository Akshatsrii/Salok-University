import Link from "next/link";
import { GraduationCap, Users, Calendar, Bus, Home as HomeIcon, Briefcase } from "lucide-react";

export default function Home() {
  const modules = [
    {
      title: "Admin Portal",
      description: "Manage users, admissions, fees, and university settings.",
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      href: "/admin",
    },
    {
      title: "Student Portal",
      description: "Access your timetable, attendance, assignments, and results.",
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      href: "/student",
    },
    {
      title: "Faculty Portal",
      description: "Manage classes, mark attendance, and grade assignments.",
      icon: <Calendar className="w-8 h-8 text-teal-500" />,
      href: "/teacher",
    },
    {
      title: "Hostel & Facility",
      description: "Room allocation, mess menu, visitors, and gate passes.",
      icon: <HomeIcon className="w-8 h-8 text-orange-500" />,
      href: "/facility/hostel/rooms",
    },
    {
      title: "Transport",
      description: "Live GPS tracking, bus routes, and maintenance logs.",
      icon: <Bus className="w-8 h-8 text-yellow-500" />,
      href: "/facility/transport/routes",
    },
    {
      title: "Placement Cell",
      description: "Company drives, mock interviews, and resume builder.",
      icon: <Briefcase className="w-8 h-8 text-purple-500" />,
      href: "/admin/placement/dashboard",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-5xl w-full text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Welcome to <span className="text-indigo-600">Salok University ERP</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A centralized, modern system for managing university operations, student life, transport, hostels, and placement drives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {modules.map((module, index) => (
          <Link
            key={index}
            href={module.href}
            className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-indigo-100 transition-all transform hover:-translate-y-1 flex flex-col items-center text-center gap-4"
          >
            <div className="p-4 bg-gray-50 rounded-full group-hover:bg-indigo-50 transition-colors">
              {module.icon}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {module.title}
              </h2>
              <p className="text-sm text-gray-500">{module.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-sm text-gray-400">
        Salok University ERP v1.0 • Built with Next.js 15
      </div>
    </div>
  );
}
