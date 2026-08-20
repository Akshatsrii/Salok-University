"use client";

import { Users, BookOpen, Clock, FileText } from "lucide-react";

export const TeacherDashboard = () => {
  const stats = [
    { label: "Total Students", value: "145", icon: <Users className="w-6 h-6" />, color: "text-[#007bff]", bg: "bg-blue-50" },
    { label: "Classes Today", value: "3", icon: <Clock className="w-6 h-6" />, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Pending Grading", value: "24", icon: <FileText className="w-6 h-6" />, color: "text-red-500", bg: "bg-red-50" },
    { label: "Research Papers", value: "12", icon: <BookOpen className="w-6 h-6" />, color: "text-[#ffb800]", bg: "bg-[#fffdf5]" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
            {stat.icon}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500">{stat.label}</p>
            <p className="text-2xl font-extrabold text-gray-900">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
