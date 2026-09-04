import { Clock, MapPin } from 'lucide-react';

export const TodayTimetableWidget = () => {
  const classes = [
    { time: '09:00 AM - 10:30 AM', subject: 'Data Structures', room: 'Room 304, Block A', type: 'Lecture' },
    { time: '11:00 AM - 12:30 PM', subject: 'Operating Systems', room: 'Lab 2, Block C', type: 'Lab' },
    { time: '02:00 PM - 03:00 PM', subject: 'Computer Networks', room: 'Room 102, Block B', type: 'Lecture' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:col-span-2 lg:col-span-1">
      <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5 text-blue-600" /> Today's Schedule
      </h3>
      
      <div className="space-y-4">
        {classes.map((cls, idx) => (
          <div key={idx} className="flex gap-4 p-3 rounded-lg border border-gray-50 bg-gray-50 hover:bg-blue-50 hover:border-blue-100 transition-colors">
            <div className="w-1 bg-blue-600 rounded-full"></div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-semibold text-gray-900">{cls.subject}</h4>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${cls.type === 'Lab' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                  {cls.type}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {cls.time}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {cls.room}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
