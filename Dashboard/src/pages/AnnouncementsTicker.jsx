import { Megaphone } from "lucide-react";

const announcements = [
  "Last date to submit exam forms: March 10, 2024",
  "Hostel fee payment deadline extended to March 15",
  "New placement opportunities available - Check placement portal",
];

export default function AnnouncementsTicker() {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
      <div className="flex items-start gap-3">
        <Megaphone className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="font-semibold text-yellow-800 text-sm mb-2">Important Announcements</h4>
          <ul className="space-y-1">
            {announcements.map((announcement, idx) => (
              <li key={idx} className="text-sm text-yellow-700">• {announcement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}