import Link from "next/link";
import { GraduationCap, Users, Calendar, Bus, Home as HomeIcon, Briefcase, ChevronRight, ArrowRight } from "lucide-react";

export default function Home() {
  const modules = [
    {
      title: "Admin Portal",
      description: "Manage users, admissions, fees, and university settings with advanced AI insights.",
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      href: "/admin",
      color: "bg-indigo-50",
      border: "hover:border-indigo-200",
      shadow: "hover:shadow-indigo-500/10"
    },
    {
      title: "Student Portal",
      description: "Access your timetable, attendance, assignments, and semester results.",
      icon: <GraduationCap className="w-6 h-6 text-sky-600" />,
      href: "/student",
      color: "bg-sky-50",
      border: "hover:border-sky-200",
      shadow: "hover:shadow-sky-500/10"
    },
    {
      title: "Faculty Portal",
      description: "Manage classes, mark attendance, and grade assignments effortlessly.",
      icon: <Calendar className="w-6 h-6 text-teal-600" />,
      href: "/teacher",
      color: "bg-teal-50",
      border: "hover:border-teal-200",
      shadow: "hover:shadow-teal-500/10"
    },
    {
      title: "Hostel & Facility",
      description: "Room allocation, mess menu, visitors, and gate passes management.",
      icon: <HomeIcon className="w-6 h-6 text-orange-600" />,
      href: "/facility/hostel/rooms",
      color: "bg-orange-50",
      border: "hover:border-orange-200",
      shadow: "hover:shadow-orange-500/10"
    },
    {
      title: "Transport Module",
      description: "Live GPS tracking, bus routes, and automated maintenance logs.",
      icon: <Bus className="w-6 h-6 text-amber-600" />,
      href: "/facility/transport/routes",
      color: "bg-amber-50",
      border: "hover:border-amber-200",
      shadow: "hover:shadow-amber-500/10"
    },
    {
      title: "Placement Cell",
      description: "Company drives, AI mock interviews, and smart resume builder.",
      icon: <Briefcase className="w-6 h-6 text-purple-600" />,
      href: "/admin/placement/dashboard",
      color: "bg-purple-50",
      border: "hover:border-purple-200",
      shadow: "hover:shadow-purple-500/10"
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-200/40 blur-3xl opacity-50 mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] rounded-full bg-sky-200/40 blur-3xl opacity-50 mix-blend-multiply animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-purple-200/30 blur-3xl opacity-50 mix-blend-multiply animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-screen">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mb-20 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100/50 text-indigo-700 text-sm font-semibold tracking-wide backdrop-blur-sm shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Salok ERP v2.0 is live
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Next-Gen <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">
              University Management
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A unified, AI-powered system designed to streamline academic, administrative, and facility operations into one beautiful, intelligent interface.
          </p>

          <div className="pt-4 flex items-center justify-center gap-4">
            <Link href="/admin" className="premium-button text-base px-8 py-3.5">
              Enter Admin Portal
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Link
                key={index}
                href={module.href}
                className={`group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-slate-200/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white ${module.border} ${module.shadow}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl ${module.color} flex items-center justify-center mb-6 shadow-sm border border-black/5 group-hover:scale-110 transition-transform duration-300`}>
                    {module.icon}
                  </div>
                  
                  <h2 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {module.title}
                  </h2>
                  
                  <p className="text-slate-500 leading-relaxed text-sm flex-1 mb-6">
                    {module.description}
                  </p>

                  <div className="mt-auto flex items-center text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    Access Module
                    <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 text-center">
          <p className="text-sm font-medium text-slate-400">
            © 2026 Salok University. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
