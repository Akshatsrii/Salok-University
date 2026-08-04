import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  trend: number;
  icon: React.ReactNode;
}

export const StatCard = ({ label, value, trend, icon }: StatCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          {icon}
        </div>
        {trend !== 0 && (
          <div className={`flex items-center text-sm font-semibold ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend > 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
            {Math.abs(trend)}%
          </div>
        )}
      </div>
      <div>
        <h4 className="text-gray-500 text-sm font-medium mb-1">{label}</h4>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
      </div>
    </div>
  );
};
