import { BedDouble, Info } from 'lucide-react';

export const RoomInfoCard = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <BedDouble className="w-5 h-5 text-blue-600" /> My Room Details
      </h3>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center border-b border-blue-200 pb-4 mb-4">
          <div>
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Block A</p>
            <p className="text-3xl font-extrabold text-blue-900 mt-1">Room 102</p>
          </div>
          <div className="text-right">
            <span className="bg-white text-blue-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              NON-AC
            </span>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-blue-600 uppercase mb-2">Roommates</p>
          <ul className="space-y-2">
            <li className="flex justify-between items-center p-2 bg-white bg-opacity-60 rounded">
              <span className="font-medium text-blue-900">Raj Sharma (You)</span>
              <span className="text-xs text-blue-700">CS-302</span>
            </li>
            <li className="flex justify-between items-center p-2 bg-white bg-opacity-60 rounded">
              <span className="font-medium text-blue-900">Amit Singh</span>
              <span className="text-xs text-blue-700">CS-305</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-start gap-3 text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
        <Info className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
        <p>Your room is scheduled for weekly cleaning every Wednesday at 11:00 AM.</p>
      </div>
    </div>
  );
};
