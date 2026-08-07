import { Users, TrendingDown, TrendingUp } from 'lucide-react';

export const DepartmentAttendanceOverview = () => {
  const departments = [
    { name: 'Computer Science', percentage: 88, trend: 'up' },
    { name: 'Mechanical', percentage: 72, trend: 'down' },
    { name: 'Business Admin', percentage: 85, trend: 'up' },
    { name: 'Biotechnology', percentage: 91, trend: 'up' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Users className="w-5 h-5 text-blue-600" /> Department Overview (Today)
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {departments.map((dept, idx) => (
          <div key={idx} className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-sm text-gray-500 mb-2">{dept.name}</div>
            <div className="flex items-end justify-between">
              <span className={`text-2xl font-bold ${dept.percentage < 75 ? 'text-red-600' : 'text-gray-900'}`}>
                {dept.percentage}%
              </span>
              {dept.trend === 'up' ? (
                <TrendingUp className="w-4 h-4 text-green-500 mb-1" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500 mb-1" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
