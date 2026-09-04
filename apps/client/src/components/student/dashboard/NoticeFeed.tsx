import { Bell } from 'lucide-react';

export const NoticeFeed = () => {
  const notices = [
    { title: 'TechFest 2026 Registration Open', date: 'Today, 09:00 AM', isNew: true },
    { title: 'Mid-Sem Examination Schedule Published', date: 'Yesterday, 04:30 PM', isNew: false },
    { title: 'Library Book Return Deadline', date: '12 Aug 2026', isNew: false },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:col-span-2 lg:col-span-1">
      <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Bell className="w-5 h-5 text-blue-600" /> Recent Notices
      </h3>
      
      <div className="space-y-4">
        {notices.map((notice, idx) => (
          <div key={idx} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
            <h4 className="font-semibold text-gray-800 text-sm flex items-center gap-2">
              {notice.title}
              {notice.isNew && <span className="bg-blue-100 text-blue-700 text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">New</span>}
            </h4>
            <p className="text-xs text-gray-500 mt-1">{notice.date}</p>
          </div>
        ))}
      </div>
      <button className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-800 w-full text-center">
        View All Notices
      </button>
    </div>
  );
};
