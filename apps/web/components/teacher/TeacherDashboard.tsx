"use client";

import { Users, BookOpen, Clock, FileText } from "lucide-react";
import { StatCard } from "../shared/StatCard";

export const TeacherDashboard = () => {
  const stats = [
    { title: "Total Students", value: "145", icon: Users, color: "blue" as const },
    { title: "Classes Today", value: "3", icon: Clock, color: "emerald" as const },
    { title: "Pending Grading", value: "24", icon: FileText, color: "rose" as const },
    { title: "Research Papers", value: "12", icon: BookOpen, color: "amber" as const },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, idx) => (
        <StatCard 
          key={idx}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          color={stat.color}
        />
      ))}
    </div>
  );
};
