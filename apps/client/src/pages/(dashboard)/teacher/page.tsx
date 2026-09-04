import { LiveClassRosterWidget } from '../../../components/teacher/dashboard/LiveClassRosterWidget';
import { PendingGradingWidget } from '../../../components/teacher/dashboard/PendingGradingWidget';
import { PerformanceCurveChart } from '../../../components/teacher/dashboard/PerformanceCurveChart';

export default function TeacherDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome, Dr. Smith!</h1>
        <p className="text-gray-500 mt-1">Here is your academic overview for today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <LiveClassRosterWidget />
        <PendingGradingWidget />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <PerformanceCurveChart />
      </div>
      
      {/* Quick Stats or generic placeholders could go here */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
        {[
          { label: "Total Students", value: "145", color: "text-[#007bff]", bg: "bg-blue-50" },
          { label: "Average Attendance", value: "88%", color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Classes Taken", value: "42", color: "text-purple-600", bg: "bg-purple-50" },
          { label: "AI Insights Generated", value: "12", color: "text-[#ffb800]", bg: "bg-[#fffdf5]" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-center items-center text-center">
            <h3 className="text-gray-500 font-medium text-sm mb-2">{stat.label}</h3>
            <div className={`text-3xl font-extrabold ${stat.color} ${stat.bg} w-full py-2 rounded-xl`}>{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
