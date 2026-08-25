"use client";

import { Bell, AlertCircle, Calendar, CheckCircle2, Search } from "lucide-react";

export default function StudentNotificationsPage() {
  const notifications = [
    { id: 1, type: "urgent", title: "Semester Fee Due", message: "Your tuition fee of ₹45,500 is due by Aug 30. Please clear the dues to avoid late fees.", time: "2 hours ago", read: false },
    { id: 2, type: "academic", title: "Exam Schedule Released", message: "Mid-term examination schedule for B.Tech CS has been published on the portal.", time: "Yesterday", read: false },
    { id: 3, type: "event", title: "Tech Fest 2027", message: "Registrations for the annual Tech Fest are now open. Early bird discounts available.", time: "2 days ago", read: true },
    { id: 4, type: "system", title: "System Maintenance", message: "The student portal will be down for maintenance from 2 AM to 4 AM on Sunday.", time: "3 days ago", read: true },
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case "urgent": return <AlertCircle className="w-5 h-5 text-rose-600" />;
      case "academic": return <Calendar className="w-5 h-5 text-blue-600" />;
      case "event": return <Bell className="w-5 h-5 text-amber-600" />;
      default: return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
    }
  };

  const getBg = (type: string) => {
    switch(type) {
      case "urgent": return "bg-rose-50";
      case "academic": return "bg-blue-50";
      case "event": return "bg-amber-50";
      default: return "bg-emerald-50";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-500 mt-1">Stay updated with important university alerts and notices.</p>
        </div>
        <button className="text-sm font-semibold text-[#007bff] hover:underline bg-blue-50 px-4 py-2 rounded-xl transition-colors hover:bg-blue-100">
          Mark all as read
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-semibold">All</button>
            <button className="px-4 py-2 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 text-sm font-semibold transition-colors">Unread</button>
            <button className="px-4 py-2 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 text-sm font-semibold transition-colors">Academic</button>
          </div>
          
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search notifications..." 
              className="pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#007bff] w-64 bg-gray-50 focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          {notifications.map((notif) => (
            <div key={notif.id} className={`p-4 rounded-2xl flex gap-4 transition-all hover:bg-gray-50 cursor-pointer border border-transparent ${notif.read ? 'opacity-70' : 'bg-blue-50/30 border-blue-100/50 hover:bg-blue-50/50'}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${getBg(notif.type)}`}>
                {getIcon(notif.type)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className={`text-base font-bold text-gray-900 ${notif.read ? 'font-semibold' : 'font-extrabold text-[#1a2b4c]'}`}>{notif.title}</h3>
                  <span className="text-xs font-medium text-gray-500 whitespace-nowrap ml-4">{notif.time}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{notif.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
