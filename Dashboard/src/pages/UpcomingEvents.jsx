import { Calendar, MapPin } from "lucide-react";

const events = [
  { 
    title: "Mid-Semester Exams", 
    date: "Mar 15-20, 2024", 
    location: "Exam Hall",
    color: "bg-red-100 text-red-700"
  },
  { 
    title: "Technical Fest", 
    date: "Mar 25, 2024", 
    location: "Main Auditorium",
    color: "bg-purple-100 text-purple-700"
  },
  { 
    title: "Guest Lecture: AI/ML", 
    date: "Mar 28, 2024", 
    location: "Seminar Hall",
    color: "bg-blue-100 text-blue-700"
  },
];

export default function UpcomingEvents() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="font-semibold text-gray-800 mb-4">Upcoming Events</h3>
      <div className="space-y-3">
        {events.map((event, idx) => (
          <div key={idx} className={`${event.color} p-4 rounded-lg`}>
            <h4 className="font-semibold text-sm mb-2">{event.title}</h4>
            <div className="flex items-center gap-2 text-xs mb-1">
              <Calendar className="w-3 h-3" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <MapPin className="w-3 h-3" />
              <span>{event.location}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 text-sm text-primary hover:underline font-medium">
        View All Events
      </button>
    </div>
  );
}