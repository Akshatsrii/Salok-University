"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

export const PerformanceCurveChart = () => {
  // Bell curve distribution data
  const data = [
    { grade: 'F', count: 2 },
    { grade: 'D', count: 5 },
    { grade: 'C', count: 15 },
    { grade: 'B', count: 35 },
    { grade: 'A', count: 25 },
    { grade: 'O', count: 8 },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm col-span-1 md:col-span-3">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-bold text-[#1a2b4c]">Class Performance Curve</h3>
          <p className="text-xs text-gray-500 mt-1">Machine Learning (CS401) - Mid Terms</p>
        </div>
        <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-1.5 outline-none focus:ring-2 focus:ring-[#ffb800]">
          <option>Machine Learning</option>
          <option>Data Structures</option>
          <option>Algorithm Design</option>
        </select>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffb800" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ffb800" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="grade" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              cursor={{ stroke: '#e2e8f0', strokeWidth: 2, strokeDasharray: '3 3' }}
            />
            <Area 
              type="monotone" 
              dataKey="count" 
              stroke="#ffb800" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorCount)" 
              activeDot={{ r: 6, fill: '#ffb800', stroke: '#fff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
