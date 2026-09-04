
import { useState } from 'react';
import { Users, CheckCircle, Clock } from 'lucide-react';

export const DriverAttendanceTable = () => {
  const [drivers] = useState([
    { id: 'd1', name: 'Ramu Kaka', bus: 'UP32-AB-1234', shift: 'Morning', status: 'PRESENT', checkIn: '06:15 AM' },
    { id: 'd2', name: 'Shyam Singh', bus: 'UP32-XY-9876', shift: 'Morning', status: 'LATE', checkIn: '07:30 AM' },
    { id: 'd3', name: 'Hari Om', bus: 'UP32-ZZ-5555', shift: 'Evening', status: 'PENDING', checkIn: '-' }
  ]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Users className="w-5 h-5 text-indigo-500" /> Driver Attendance
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-3 rounded-tl-lg">Driver Name</th>
              <th className="px-4 py-3">Bus Assigned</th>
              <th className="px-4 py-3">Shift</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 rounded-tr-lg">Check-In Time</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map(driver => (
              <tr key={driver.id} className="border-b border-gray-100">
                <td className="px-4 py-3 font-medium text-gray-800">{driver.name}</td>
                <td className="px-4 py-3 text-gray-600 font-semibold">{driver.bus}</td>
                <td className="px-4 py-3 text-gray-500">{driver.shift}</td>
                <td className="px-4 py-3">
                  {driver.status === 'PRESENT' && <span className="flex items-center gap-1 text-green-600 font-medium"><CheckCircle className="w-4 h-4" /> Present</span>}
                  {driver.status === 'LATE' && <span className="flex items-center gap-1 text-orange-600 font-medium"><Clock className="w-4 h-4" /> Late</span>}
                  {driver.status === 'PENDING' && <span className="text-gray-400 font-medium">Pending</span>}
                </td>
                <td className="px-4 py-3 text-gray-500">{driver.checkIn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
