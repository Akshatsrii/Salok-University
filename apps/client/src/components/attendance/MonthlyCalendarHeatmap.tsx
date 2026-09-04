export const MonthlyCalendarHeatmap = () => {
  // Mock data for 30 days
  const days = Array.from({ length: 30 }, (_, i) => {
    if (i % 7 === 6 || i % 7 === 0) return 'Holiday';
    if (i === 12 || i === 18) return 'Absent';
    if (i === 5) return 'Late';
    return 'Present';
  });

  const getColor = (status: string) => {
    switch(status) {
      case 'Present': return 'bg-green-500';
      case 'Absent': return 'bg-red-500';
      case 'Late': return 'bg-yellow-500';
      case 'Holiday': return 'bg-gray-200';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="font-bold text-gray-900 mb-4">August 2026</h3>
      
      <div className="grid grid-cols-7 gap-2 mb-6">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
          <div key={idx} className="text-center text-xs font-semibold text-gray-400">{day}</div>
        ))}
        {days.map((status, idx) => (
          <div 
            key={idx} 
            title={status}
            className={`aspect-square rounded-sm ${getColor(status)} opacity-90 hover:opacity-100 transition-opacity cursor-pointer`}
          ></div>
        ))}
      </div>

      <div className="flex gap-4 text-xs text-gray-600 justify-center">
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-green-500 rounded-sm"></div> Present</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-red-500 rounded-sm"></div> Absent</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-yellow-500 rounded-sm"></div> Late</div>
      </div>
    </div>
  );
};
