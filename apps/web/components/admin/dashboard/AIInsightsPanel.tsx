import { Sparkles, ArrowRight, AlertTriangle } from 'lucide-react';

export const AIInsightsPanel = () => {
  const insights = [
    {
      type: 'warning',
      text: 'Attendance in B.Tech 3rd Year is trending 5% lower than average. Consider notifying faculty advisors.',
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
    },
    {
      type: 'positive',
      text: 'Fee collection for Q3 is on track. Projected to exceed target by 12%.',
      icon: <Sparkles className="w-5 h-5 text-green-500" />,
    },
    {
      type: 'neutral',
      text: '15 buses are due for maintenance next week. Rerouting suggestions have been generated.',
      icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-6 rounded-xl text-white shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Sparkles className="w-32 h-32" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-purple-300" />
          <h3 className="text-xl font-bold">Salok AI Insights</h3>
        </div>
        
        <div className="space-y-4">
          {insights.map((insight, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md p-4 rounded-lg flex gap-4 items-start border border-white/10">
              <div className="mt-0.5 p-2 bg-white/10 rounded-full">
                {insight.icon}
              </div>
              <p className="text-sm leading-relaxed text-blue-50">{insight.text}</p>
            </div>
          ))}
        </div>
        
        <button className="mt-6 w-full py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-lg font-semibold text-sm flex items-center justify-center gap-2">
          View Detailed AI Report <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
