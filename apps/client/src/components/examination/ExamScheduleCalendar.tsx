import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { ExamSchedule } from '../../types/examination';

export const ExamScheduleCalendar = () => {
  const schedules: ExamSchedule[] = [
    { id: '1', course: 'B.Tech CS - Sem 6', subject: 'Compiler Design', date: '18 Aug 2026', time: '10:00 AM - 01:00 PM', room: 'Hall A' },
    { id: '2', course: 'B.Tech CS - Sem 6', subject: 'Machine Learning', date: '20 Aug 2026', time: '10:00 AM - 01:00 PM', room: 'Hall B' },
    { id: '3', course: 'B.Tech CS - Sem 6', subject: 'Cloud Computing', date: '22 Aug 2026', time: '02:00 PM - 05:00 PM', room: 'Hall A' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6">
      <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-blue-600" /> Upcoming Exam Schedules
        </h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
          Add Schedule
        </button>
      </div>
      
      <div className="divide-y divide-gray-100">
        {schedules.map((schedule) => (
          <div key={schedule.id} className="p-6 hover:bg-gray-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-gray-900 text-lg">{schedule.subject}</h4>
              <p className="text-sm text-gray-500 mt-1">{schedule.course}</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-700">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-blue-500" /> {schedule.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500" /> {schedule.time}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-500" /> {schedule.room}
              </div>
            </div>
            
            <div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
