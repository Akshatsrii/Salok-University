import React from 'react';
import { Home, BookOpen, Bus, AlertCircle } from 'lucide-react';

export function FacilityStatCardGrid({ stats }: { stats: any }) {
  const cards = [
    {
      title: 'Hostel Occupancy',
      value: `${stats.hostelOccupancy}%`,
      subtitle: 'Across 4 blocks',
      icon: Home,
      color: 'bg-blue-50 text-blue-600',
      borderColor: 'border-blue-100',
    },
    {
      title: 'Books Issued Today',
      value: stats.booksIssuedToday,
      subtitle: 'Central Library',
      icon: BookOpen,
      color: 'bg-green-50 text-green-600',
      borderColor: 'border-green-100',
    },
    {
      title: 'Active Buses',
      value: stats.activeBuses,
      subtitle: 'Currently on route',
      icon: Bus,
      color: 'bg-amber-50 text-amber-600',
      borderColor: 'border-amber-100',
    },
    {
      title: 'Pending Complaints',
      value: stats.pendingComplaints,
      subtitle: 'Hostel & Infrastructure',
      icon: AlertCircle,
      color: 'bg-red-50 text-red-600',
      borderColor: 'border-red-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, idx) => (
        <div key={idx} className={`bg-white rounded-xl p-6 border shadow-sm flex items-start justify-between ${card.borderColor}`}>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">{card.title}</p>
            <h3 className="text-3xl font-bold text-gray-900">{card.value}</h3>
            <p className="text-xs text-gray-400 mt-2">{card.subtitle}</p>
          </div>
          <div className={`p-3 rounded-lg ${card.color}`}>
            <card.icon className="w-6 h-6" />
          </div>
        </div>
      ))}
    </div>
  );
}
