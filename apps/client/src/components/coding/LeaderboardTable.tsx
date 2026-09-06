import React, { useState } from 'react';
import { Trophy, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LeaderboardTable() {
  const [filter, setFilter] = useState('ALL');

  const mockData = [
    { rank: 1, name: 'Rahul Sharma', branch: 'CSE', rating: 2150, solved: 412 },
    { rank: 2, name: 'Aditi Verma', branch: 'ECE', rating: 2080, solved: 389 },
    { rank: 3, name: 'Karan Singh', branch: 'CSE', rating: 2010, solved: 350 },
    { rank: 4, name: 'Priya Patel', branch: 'IT', rating: 1955, solved: 310 },
    { rank: 5, name: 'Aman Gupta', branch: 'CSE', rating: 1920, solved: 295 },
  ];

  const filteredData = filter === 'ALL' ? mockData : mockData.filter(d => d.branch === filter);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-5 border-b border-gray-50 flex items-center justify-between">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-500" />
          Top Coders
        </h3>
        
        <div className="flex items-center gap-2 text-sm">
          <Filter className="w-4 h-4 text-gray-400" />
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border-none bg-gray-50 text-gray-700 rounded-md py-1 px-2 focus:ring-0 cursor-pointer font-medium"
          >
            <option value="ALL">Global (All Branches)</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
          </select>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
              <th className="p-4 font-bold">Rank</th>
              <th className="p-4 font-bold">Student</th>
              <th className="p-4 font-bold text-center">Rating</th>
              <th className="p-4 font-bold text-right">Problems Solved</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredData.map((user) => (
              <tr key={user.rank} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                <td className="p-4">
                  <span className={`font-black flex items-center justify-center w-6 h-6 rounded-full 
                    ${user.rank === 1 ? 'bg-amber-100 text-amber-600' : 
                      user.rank === 2 ? 'bg-gray-200 text-gray-600' : 
                      user.rank === 3 ? 'bg-orange-100 text-orange-700' : 'text-gray-400'}`}>
                    {user.rank}
                  </span>
                </td>
                <td className="p-4">
                  <p className="font-bold text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.branch}</p>
                </td>
                <td className="p-4 text-center">
                  <span className="font-bold text-[#8a1538]">{user.rating}</span>
                </td>
                <td className="p-4 text-right text-gray-600 font-medium">
                  {user.solved}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t border-gray-50 text-center">
        <Link to="/student/coding/leaderboard" className="text-sm font-bold text-[#8a1538] hover:underline">
          View Full Leaderboard
        </Link>
      </div>
    </div>
  );
}
