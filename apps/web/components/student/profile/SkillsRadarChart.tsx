"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export const SkillsRadarChart = () => {
  const data = [
    { subject: 'Coding', A: 90, fullMark: 100 },
    { subject: 'Algorithms', A: 85, fullMark: 100 },
    { subject: 'Communication', A: 70, fullMark: 100 },
    { subject: 'Mathematics', A: 95, fullMark: 100 },
    { subject: 'Project Mgmt', A: 75, fullMark: 100 },
    { subject: 'Design', A: 60, fullMark: 100 },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm col-span-1 h-96 flex flex-col">
      <h3 className="font-bold text-[#1a2b4c] mb-2">Skill Analysis</h3>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid stroke="#f1f5f9" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar name="Student" dataKey="A" stroke="#007bff" fill="#007bff" fillOpacity={0.4} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
