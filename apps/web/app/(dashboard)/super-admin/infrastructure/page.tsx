import { Building, Home, Beaker, Library } from "lucide-react";

export default function InfrastructurePage() {
  const facilities = [
    { name: "Academic Blocks", count: 12, icon: Building, color: "text-[#007bff]", bg: "bg-blue-50" },
    { name: "Hostels", count: 8, icon: Home, color: "text-[#ffb800]", bg: "bg-amber-50" },
    { name: "Laboratories", count: 45, icon: Beaker, color: "text-purple-600", bg: "bg-purple-50" },
    { name: "Libraries", count: 3, icon: Library, color: "text-green-600", bg: "bg-green-50" },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#1a2b4c]">Infrastructure & Assets</h1>
          <p className="text-gray-500 mt-1">Monitor real-estate, classrooms, and university physical assets.</p>
        </div>
        <button className="bg-[#007bff] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
          + Map New Facility
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {facilities.map((fac, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className={"w-14 h-14 rounded-xl flex items-center justify-center  "}>
              <fac.icon className="w-7 h-7" />
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium">{fac.name}</p>
              <h3 className="text-2xl font-bold text-[#1a2b4c]">{fac.count}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-[#1a2b4c]">Maintenance Requests</h2>
        </div>
        <div className="p-8 text-center text-gray-500">
          <p>No pending maintenance requests for infrastructure.</p>
        </div>
      </div>
    </div>
  );
}
