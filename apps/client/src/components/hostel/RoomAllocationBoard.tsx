
import { useState } from 'react';
import { BedDouble, UserPlus } from 'lucide-react';

export const RoomAllocationBoard = () => {
  const [rooms] = useState([
    { id: '101', block: 'A', capacity: 2, occupants: ['Rahul'], status: 'AVAILABLE' },
    { id: '102', block: 'A', capacity: 2, occupants: ['Amit', 'Raj'], status: 'FULL' },
    { id: '103', block: 'B', capacity: 1, occupants: [], status: 'AVAILABLE' }
  ]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Room Allocation</h3>
          <p className="text-sm text-gray-500">Manage hostel room assignments.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-blue-700">
          Auto-Allocate Pending
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map(room => (
          <div key={room.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-gray-800 flex items-center gap-2">
                <BedDouble className="w-5 h-5 text-blue-500" />
                {room.block}-{room.id}
              </h4>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                room.status === 'FULL' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
              }`}>
                {room.status}
              </span>
            </div>
            
            <div className="space-y-2">
              <p className="text-xs text-gray-500 font-medium uppercase">Occupants ({room.occupants.length}/{room.capacity})</p>
              {room.occupants.map((occ, i) => (
                <div key={i} className="bg-gray-50 p-2 rounded border border-gray-100 text-sm font-medium text-gray-700">
                  {occ}
                </div>
              ))}
              {room.occupants.length < room.capacity && (
                <button className="w-full mt-2 py-2 border-2 border-dashed border-gray-300 rounded text-gray-500 flex items-center justify-center gap-2 hover:bg-gray-50 hover:text-blue-600 transition-colors">
                  <UserPlus className="w-4 h-4" /> Add Student
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
