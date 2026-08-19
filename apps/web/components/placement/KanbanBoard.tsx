"use client";

import { Building, MoreHorizontal, Clock, CheckCircle } from "lucide-react";

export const KanbanBoard = () => {
  const columns = [
    {
      title: "Applied",
      count: 2,
      color: "bg-blue-50 border-blue-100",
      textColor: "text-[#007bff]",
      cards: [
        { company: "Google", role: "SDE Intern", date: "2 days ago", iconBg: "bg-blue-100", iconColor: "text-blue-600" },
        { company: "Microsoft", role: "SWE", date: "4 days ago", iconBg: "bg-blue-100", iconColor: "text-blue-600" }
      ]
    },
    {
      title: "Interviewing",
      count: 1,
      color: "bg-[#fffdf5] border-[#ffdb70]/50",
      textColor: "text-[#ffb800]",
      cards: [
        { company: "Amazon", role: "Frontend Dev", date: "Tomorrow, 10 AM", iconBg: "bg-orange-100", iconColor: "text-orange-600" }
      ]
    },
    {
      title: "Offered",
      count: 1,
      color: "bg-emerald-50 border-emerald-100",
      textColor: "text-emerald-600",
      cards: [
        { company: "TCS Digital", role: "System Engineer", date: "Accepted", iconBg: "bg-emerald-100", iconColor: "text-emerald-600" }
      ]
    }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full h-[600px] overflow-x-auto pb-4">
      {columns.map((col, idx) => (
        <div key={idx} className={`flex-1 min-w-[300px] rounded-3xl p-4 border ${col.color}`}>
          <div className="flex justify-between items-center mb-4 px-2">
            <h3 className={`font-bold ${col.textColor} flex items-center gap-2`}>
              {col.title} <span className="bg-white px-2 py-0.5 rounded-full text-xs shadow-sm">{col.count}</span>
            </h3>
            <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal className="w-5 h-5" /></button>
          </div>
          
          <div className="space-y-4">
            {col.cards.map((card, cIdx) => (
              <div key={cIdx} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#007bff]/20 transition-all cursor-pointer group">
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2 rounded-xl ${card.iconBg} ${card.iconColor} group-hover:scale-110 transition-transform`}>
                    <Building className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50 px-2 py-1 rounded-md">Tech</span>
                </div>
                <h4 className="font-bold text-gray-900">{card.company}</h4>
                <p className="text-sm text-gray-500 mb-4">{card.role}</p>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 border-t border-gray-50 pt-3">
                  {col.title === 'Offered' ? (
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Clock className="w-3.5 h-3.5 text-[#ffb800]" />
                  )}
                  {card.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
