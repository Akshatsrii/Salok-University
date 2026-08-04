import { StatCardGrid } from '../../../components/admin/dashboard/StatCardGrid';
import { AdmissionTrendChart } from '../../../components/admin/dashboard/AdmissionTrendChart';
import { AttendanceTrendChart } from '../../../components/admin/dashboard/AttendanceTrendChart';
import { RevenueChart } from '../../../components/admin/dashboard/RevenueChart';
import { PlacementChart } from '../../../components/admin/dashboard/PlacementChart';
import { CoursePopularityChart } from '../../../components/admin/dashboard/CoursePopularityChart';
import { AIInsightsPanel } from '../../../components/admin/dashboard/AIInsightsPanel';

export default function AdminDashboardPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500 mt-1">Overview of university operations and key metrics.</p>
        </div>
      </div>
      
      <StatCardGrid />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <AdmissionTrendChart />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AttendanceTrendChart />
            <CoursePopularityChart />
          </div>
          <RevenueChart />
        </div>
        
        <div className="space-y-8">
          <AIInsightsPanel />
          <PlacementChart />
        </div>
      </div>
    </div>
  );
}
