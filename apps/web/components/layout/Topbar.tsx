"use client";

import { usePathname } from "next/navigation";
import { Search, ChevronDown } from "lucide-react";
import { NotificationDrawer } from "../shared/NotificationDrawer";

export const Topbar = () => {
  const pathname = usePathname();
  
  // Format pathname into breadcrumbs
  const pathSegments = pathname.split('/').filter(Boolean);
  const title = pathSegments.length > 0 
    ? pathSegments[pathSegments.length - 1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    : 'Dashboard';

  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-30 transition-colors">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-[#1a2b4c] tracking-tight">{title}</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search student, notice..." 
            className="pl-10 pr-4 py-2 w-64 bg-slate-100 dark:bg-slate-800 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-full text-sm transition-all outline-none text-slate-900 dark:text-white placeholder:text-slate-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <NotificationDrawer />
        </div>

        <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>

        <button className="flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 p-1.5 rounded-full md:rounded-xl transition-colors">
          <img 
            src="https://ui-avatars.com/api/?name=Admin+User&background=4f46e5&color=fff" 
            alt="Profile" 
            className="w-8 h-8 rounded-full shadow-sm"
          />
          <div className="hidden md:flex flex-col items-start">
            <span className="text-sm font-semibold text-slate-900 dark:text-white leading-none">Admin User</span>
            <span className="text-xs text-slate-500 mt-1 leading-none">Super Administrator</span>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400 hidden md:block" />
        </button>
      </div>
    </header>
  );
};
