import { Calendar, MapPin } from "lucide-react";

const events = [
  { 
    title: "Mid-Semester Exams", 
    date: "Mar 15-20, 2024", 
    location: "Exam Hall",
    badge: "Important"
  },
  { 
    title: "Technical Fest", 
    date: "Mar 25, 2024", 
    location: "Main Auditorium",
    badge: "Event"
  },
  { 
    title: "Guest Lecture: AI/ML", 
    date: "Mar 28, 2024", 
    location: "Seminar Hall",
    badge: "Seminar"
  },
];

export default function UpcomingEvents() {
  return (
    <div className="bg-black text-white rounded-xl shadow-lg p-6 border border-gray-800">
      
      <h3 className="font-semibold text-orange-500 text-lg mb-5">
        Upcoming Events
      </h3>

      <div className="space-y-4">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="bg-[#111] p-4 rounded-lg border border-gray-800 
                       hover:border-orange-500 hover:bg-gray-900 
                       transition-all duration-300"
          >
            {/* Title + Badge */}
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-sm">
                {event.title}
              </h4>

              <span className="text-xs px-2 py-1 rounded-full 
                               bg-orange-500/20 text-orange-400">
                {event.badge}
              </span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
              <Calendar className="w-3 h-3 text-orange-500" />
              <span>{event.date}</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <MapPin className="w-3 h-3 text-orange-500" />
              <span>{event.location}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-5 text-sm text-orange-500 
                         hover:text-orange-400 hover:underline 
                         font-medium transition">
        View All Events
      </button>
    </div>
  );
}
