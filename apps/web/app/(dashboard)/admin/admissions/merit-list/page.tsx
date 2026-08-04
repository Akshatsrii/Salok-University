import { MeritListTable } from '../../../../../components/admissions/MeritListTable';

export default function MeritListPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Merit Lists</h1>
        <p className="text-gray-500 mt-1">Manage and publish merit lists for different courses.</p>
      </div>
      
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 mb-6">
        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
          <option>B.Tech CSE</option>
          <option>BBA Data Analytics</option>
          <option>B.Sc Biotechnology</option>
        </select>
        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
          <option>Phase 1</option>
          <option>Phase 2</option>
          <option>Spot Round</option>
        </select>
        <button className="bg-gray-100 px-4 py-2 rounded-md text-sm font-semibold">Filter</button>
      </div>

      <MeritListTable />
    </div>
  );
}
