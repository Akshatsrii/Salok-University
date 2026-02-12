import { Megaphone } from "lucide-react";

const announcements = [
  "Last date to submit exam forms: March 10, 2024",
  "Hostel fee payment deadline extended to March 15",
  "New placement opportunities available - Check placement portal",
];

export default function AnnouncementsTicker() {
  return (
    <div className="bg-orange-50 dark:bg-orange-900/20 
                    border-l-4 border-orange-500 
                    p-4 rounded-lg 
                    transition-colors duration-300">

      <div className="flex items-start gap-3">

        {/* Icon */}
        <Megaphone className="w-5 h-5 
                              text-orange-600 dark:text-orange-400 
                              flex-shrink-0 mt-0.5" />

        {/* Content */}
        <div className="flex-1">
          <h4 className="font-semibold 
                         text-orange-800 dark:text-orange-300 
                         text-sm mb-2">
            Important Announcements
          </h4>

          <ul className="space-y-1">
            {announcements.map((announcement, idx) => (
              <li
                key={idx}
                className="text-sm 
                           text-orange-700 dark:text-orange-200 
                           hover:text-orange-900 
                           transition-colors cursor-pointer"
              >
                • {announcement}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
