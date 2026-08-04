import { Users, UserCheck, GraduationCap, IndianRupee, Briefcase, BookOpen, Bus, Building, CheckCircle, Clock } from 'lucide-react';
import { StatCard } from '../../shared/StatCard';

export const StatCardGrid = () => {
  const stats = [
    { label: 'Total Students', value: '15,234', trend: 5.2, icon: <Users className="w-6 h-6 text-blue-600" /> },
    { label: 'Teachers', value: '542', trend: 2.1, icon: <GraduationCap className="w-6 h-6 text-indigo-600" /> },
    { label: "Today's Attendance", value: '92%', trend: -1.5, icon: <UserCheck className="w-6 h-6 text-green-600" /> },
    { label: 'Fees Collected', value: '₹45.2Cr', trend: 12.4, icon: <IndianRupee className="w-6 h-6 text-emerald-600" /> },
    { label: 'Fees Pending', value: '₹5.8Cr', trend: -4.2, icon: <Clock className="w-6 h-6 text-red-600" /> },
    { label: 'Placements', value: '840', trend: 15.3, icon: <Briefcase className="w-6 h-6 text-purple-600" /> },
    { label: "Today's Classes", value: '412', trend: 0, icon: <BookOpen className="w-6 h-6 text-orange-600" /> },
    { label: 'Live Buses', value: '45/50', trend: 0, icon: <Bus className="w-6 h-6 text-yellow-600" /> },
    { label: 'Hostel Occupancy', value: '88%', trend: 2.4, icon: <Building className="w-6 h-6 text-cyan-600" /> },
    { label: 'Exam Status', value: 'Ongoing', trend: 0, icon: <CheckCircle className="w-6 h-6 text-blue-500" /> },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {stats.map((stat, idx) => (
        <StatCard 
          key={idx}
          label={stat.label}
          value={stat.value}
          trend={stat.trend}
          icon={stat.icon}
        />
      ))}
    </div>
  );
};
