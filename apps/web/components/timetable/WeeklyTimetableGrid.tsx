export const WeeklyTimetableGrid = ({ isTeacher }: { isTeacher?: boolean }) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const times = ['09:00 - 10:00', '10:00 - 11:00', '11:15 - 12:15', '12:15 - 01:15', '02:00 - 03:00', '03:00 - 04:00'];

  const schedule: Record<string, any> = {
    'Monday_09:00 - 10:00': { subject: 'Data Structures', teacher: 'Dr. A. Sharma', room: 'Room 304', color: 'bg-blue-50 border-blue-200 text-blue-900' },
    'Monday_10:00 - 11:00': { subject: 'Operating Systems', teacher: 'Prof. R. Kumar', room: 'Room 301', color: 'bg-green-50 border-green-200 text-green-900' },
    'Tuesday_11:15 - 12:15': { subject: 'Database Systems', teacher: 'Dr. M. Singh', room: 'Lab 1', color: 'bg-purple-50 border-purple-200 text-purple-900' },
    'Wednesday_02:00 - 03:00': { subject: 'Computer Networks', teacher: 'Prof. S. Verma', room: 'Room 302', color: 'bg-orange-50 border-orange-200 text-orange-900' },
    'Thursday_10:00 - 11:00': { subject: 'Software Engineering', teacher: 'Dr. P. Patel', room: 'Room 305', color: 'bg-indigo-50 border-indigo-200 text-indigo-900' },
    'Friday_11:15 - 12:15': { subject: 'AI & Machine Learning', teacher: 'Prof. K. Das', room: 'Lab 3', color: 'bg-pink-50 border-pink-200 text-pink-900' },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="p-4 font-medium text-gray-500 w-32 border-r border-gray-200">Time</th>
              {days.map(day => (
                <th key={day} className="p-4 font-semibold text-gray-700 border-r border-gray-200 last:border-0 text-center min-w-[150px]">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {times.map((time, idx) => (
              <tr key={idx} className="border-b border-gray-100 last:border-0">
                <td className="p-4 font-medium text-gray-500 border-r border-gray-100 whitespace-nowrap bg-gray-50">
                  {time}
                </td>
                {days.map(day => {
                  const cell = schedule[`${day}_${time}`];
                  return (
                    <td key={day} className="p-2 border-r border-gray-100 last:border-0">
                      {cell ? (
                        <div className={`p-3 rounded-lg border ${cell.color} h-full transition-shadow hover:shadow-md cursor-pointer`}>
                          <div className="font-bold mb-1">{cell.subject}</div>
                          {!isTeacher && <div className="text-xs opacity-80">{cell.teacher}</div>}
                          {isTeacher && <div className="text-xs opacity-80 font-semibold">{cell.room}</div>}
                          <div className="text-xs opacity-80 mt-1">{cell.room}</div>
                        </div>
                      ) : (
                        <div className="h-full min-h-[80px] rounded-lg border border-dashed border-gray-200 flex items-center justify-center">
                          <span className="text-xs text-gray-400">Free Slot</span>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
