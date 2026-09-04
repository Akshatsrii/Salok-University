
import { Bus, Map, MapPin, Navigation } from "lucide-react";

export default function TransportMapPage() {
  const routes = [
    { name: "Route 1 - City Center", status: "On Time", occupancy: "45/50", driver: "Rajesh K.", loc: "Sector 14" },
    { name: "Route 2 - Metro Station", status: "Delayed 5m", occupancy: "30/40", driver: "Amit S.", loc: "MG Road" },
    { name: "Route 3 - South Campus", status: "Arrived", occupancy: "10/50", driver: "Vikram", loc: "Main Gate" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Live Transport Map</h1>
          <p className="text-gray-500 mt-1">Track university buses in real-time.</p>
        </div>
        <button className="premium-button">
          Add New Route
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Fake Map UI */}
        <div className="lg:col-span-2 bg-gray-100 rounded-3xl border border-gray-200 shadow-sm min-h-[500px] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#1a2b4c 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
          <div className="absolute top-1/4 left-1/4 p-3 bg-white rounded-full shadow-lg border-2 border-[#007bff] animate-bounce">
            <Bus className="w-6 h-6 text-[#007bff]" />
          </div>
          <div className="absolute top-1/2 right-1/3 p-3 bg-white rounded-full shadow-lg border-2 border-[#ffb800] animate-bounce" style={{ animationDelay: '0.5s' }}>
            <Bus className="w-6 h-6 text-[#ffb800]" />
          </div>
          <div className="absolute bottom-1/4 right-1/4 p-4 bg-[#1a2b4c] text-white rounded-2xl shadow-xl flex items-center gap-3">
            <MapPin className="w-5 h-5 text-pink-500" />
            <div>
              <p className="font-bold text-sm">University Main Gate</p>
              <p className="text-xs text-gray-400">Destination</p>
            </div>
          </div>
        </div>

        {/* Live Routes Panel */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
          <h3 className="font-bold text-[#1a2b4c] mb-6 flex items-center gap-2">
            <Navigation className="w-5 h-5 text-[#007bff]" /> Active Routes
          </h3>
          <div className="space-y-4 flex-1 overflow-y-auto">
            {routes.map((route, idx) => (
              <div key={idx} className="p-4 border border-gray-100 rounded-2xl hover:shadow-md transition-shadow group cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-900 text-sm">{route.name}</h4>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${route.status === 'On Time' ? 'bg-emerald-50 text-emerald-600' : route.status === 'Arrived' ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-red-600'}`}>
                    {route.status}
                  </span>
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>Driver: <span className="font-semibold text-gray-700">{route.driver}</span></p>
                  <p>Occupancy: <span className="font-semibold text-gray-700">{route.occupancy}</span></p>
                  <p className="flex items-center gap-1 mt-2 text-[#007bff]">
                    <MapPin className="w-3 h-3" /> {route.loc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
