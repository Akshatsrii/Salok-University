
import { useState, useEffect } from 'react';
import { Navigation } from 'lucide-react';

export const LiveGPSMap = () => {
  const [buses, setBuses] = useState([
    { id: 'b1', name: 'UP32-AB-1234', route: 'City Center Express', status: 'ACTIVE', speed: '45 km/h' },
    { id: 'b2', name: 'UP32-XY-9876', route: 'Gomti Nagar Route', status: 'STOPPED', speed: '0 km/h' }
  ]);

  // In a real app, this would use socket.io-client to listen for 'location_changed' events
  // and update a Google Map or Leaflet map.

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Navigation className="w-5 h-5 text-blue-500" /> Live Fleet Tracking
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Map Placeholder */}
        <div className="lg:col-span-3 bg-gray-100 rounded-lg h-[400px] border border-gray-200 flex flex-col items-center justify-center text-gray-400 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=26.8467,80.9462&zoom=13&size=800x400&sensor=false')] bg-cover bg-center"></div>
          <Navigation className="w-12 h-12 mb-2 z-10 text-blue-500 animate-pulse" />
          <span className="font-semibold z-10 text-gray-700">Connecting to Live GPS Feed (Socket.io)...</span>
          <span className="text-xs mt-1 z-10 text-gray-500">Google Maps Integration Placeholder</span>
        </div>

        {/* Bus List */}
        <div className="lg:col-span-1 space-y-4">
          <h4 className="font-semibold text-gray-700">Active Fleet</h4>
          {buses.map(bus => (
            <div key={bus.id} className="p-3 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-gray-800 text-sm">{bus.name}</span>
                <span className={`w-2 h-2 rounded-full mt-1.5 ${bus.status === 'ACTIVE' ? 'bg-green-500 animate-pulse' : 'bg-orange-500'}`}></span>
              </div>
              <p className="text-xs text-gray-500 mb-1">{bus.route}</p>
              <div className="flex justify-between text-xs font-semibold text-gray-600 bg-gray-50 p-1.5 rounded">
                <span>Speed:</span>
                <span className={bus.status === 'ACTIVE' ? 'text-blue-600' : 'text-orange-600'}>{bus.speed}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
