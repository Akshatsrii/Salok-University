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
        { name: "Assignments", href: "/teacher/assignments", icon: BookOpen },
        { name: "AI Tools", href: "/teacher/ai-tools", icon: Settings },
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
    <aside className="w-64 fixed inset-y-0 left-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col z-40 transition-transform duration-300">
      <div className="h-16 flex items-center px-6 border-b border-slate-100 dark:border-slate-800">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg group-hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200">
            S
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">Salok ERP</span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        <div className="mb-4 px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Main Menu</div>
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/admin" && item.href !== "/student" && item.href !== "/teacher");
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                isActive 
                  ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 shadow-sm" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"}`} />
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-slate-100 dark:border-slate-800">
        <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 transition-colors">
          <Settings className="w-5 h-5 text-slate-400" />
          System Settings
        </button>
      </div>
    </aside>
  );
};
