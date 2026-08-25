import { Users, UserCheck, GraduationCap, IndianRupee, Briefcase, BookOpen, Bus, Building, CheckCircle, Clock } from 'lucide-react';
import { StatCard } from '../../shared/StatCard';

export const StatCardGrid = () => {
  const stats = [
    { title: 'Total Students', value: '15,234', trend: { value: 5.2, isPositive: true }, icon: Users, color: 'blue' as const },
    { title: 'Teachers', value: '542', trend: { value: 2.1, isPositive: true }, icon: GraduationCap, color: 'purple' as const },
    { title: "Today's Attendance", value: '92%', trend: { value: 1.5, isPositive: false }, icon: UserCheck, color: 'emerald' as const },
    { title: 'Fees Collected', value: '₹45.2Cr', trend: { value: 12.4, isPositive: true }, icon: IndianRupee, color: 'emerald' as const },
    { title: 'Fees Pending', value: '₹5.8Cr', trend: { value: 4.2, isPositive: false }, icon: Clock, color: 'rose' as const },
    { title: 'Placements', value: '840', trend: { value: 15.3, isPositive: true }, icon: Briefcase, color: 'purple' as const },
    { title: "Today's Classes", value: '412', icon: BookOpen, color: 'amber' as const },
    { title: 'Live Buses', value: '45/50', icon: Bus, color: 'amber' as const },
    { title: 'Hostel Occupancy', value: '88%', trend: { value: 2.4, isPositive: true }, icon: Building, color: 'blue' as const },
    { title: 'Exam Status', value: 'Ongoing', icon: CheckCircle, color: 'emerald' as const },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {stats.map((stat, idx) => (
        <StatCard 
          key={idx}
          title={stat.title}
          value={stat.value}
          trend={stat.trend}
          icon={stat.icon}
          color={stat.color}
        />
      ))}
    </div>
  );
};
