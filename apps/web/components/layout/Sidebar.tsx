"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Building,
  Bus,
  Briefcase,
  Megaphone,
  BookOpen,
  Settings,
  GraduationCap
} from "lucide-react";

export const Sidebar = () => {
  const pathname = usePathname();

  const getNavItems = () => {
    // Basic role detection from path for demonstration
    if (pathname.startsWith("/student")) {
      return [
        { name: "Dashboard", href: "/student", icon: LayoutDashboard },
        { name: "Assignments", href: "/student/assignments", icon: BookOpen },
        { name: "Placement", href: "/student/placement", icon: Briefcase },
        { name: "AI Tools", href: "/student/ai-tools", icon: Settings },
      ];
    } else if (pathname.startsWith("/teacher")) {
      return [
        { name: "Dashboard", href: "/teacher", icon: LayoutDashboard },
        { name: "Classes", href: "/teacher/classes", icon: BookOpen },
        { name: "Attendance", href: "/teacher/attendance", icon: Users },
        { name: "Assignments", href: "/teacher/assignments", icon: BookOpen },
        { name: "Students", href: "/teacher/students", icon: Users },
        { name: "Research", href: "/teacher/research", icon: BookOpen },
        { name: "Timetable", href: "/teacher/timetable", icon: LayoutDashboard },
        { name: "AI Assistant", href: "/teacher/ai-assistant", icon: Settings },
      ];
    } else {
      // Admin by default
      return [
        { name: "Overview", href: "/admin", icon: LayoutDashboard },
        { name: "Admissions", href: "/admin/admissions", icon: GraduationCap },
        { name: "Students", href: "/admin/students", icon: Users },
        { name: "Placement Cell", href: "/admin/placement/dashboard", icon: Briefcase },
        { name: "Hostel", href: "/facility/hostel/rooms", icon: Building },
        { name: "Transport", href: "/facility/transport/routes", icon: Bus },
        { name: "Communications", href: "/admin/notices", icon: Megaphone },
      ];
    }
  };

  const navItems = getNavItems();

  return (
    <aside className="w-64 fixed inset-y-0 left-0 bg-[#1a2b4c] border-r border-[#1a2b4c] flex flex-col z-40 transition-transform duration-300 shadow-xl">
      <div className="h-20 flex items-center px-6 border-b border-white/10">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1a2b4c] font-bold text-lg group-hover:bg-[#ffb800] transition-colors shadow-sm">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">SALOK</span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        <div className="mb-4 px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Main Menu</div>
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/admin" && item.href !== "/student" && item.href !== "/teacher");
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                isActive 
                  ? "bg-[#ffb800] text-[#1a2b4c] shadow-sm" 
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-[#1a2b4c]" : "text-gray-400 group-hover:text-white"}`} />
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-white/10">
        <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
          <Settings className="w-5 h-5 text-gray-400" />
          System Settings
        </button>
      </div>
    </aside>
  );
};
