
import { User, MessageCircle, AlertCircle } from "lucide-react";

export const MenteeList = () => {
  const mentees = [
    { name: "Rahul Sharma", id: "CS21045", cgpa: "8.9", status: "Good", warning: false },
    { name: "Priya Singh", id: "CS21089", cgpa: "9.2", status: "Excellent", warning: false },
    { name: "Amit Kumar", id: "CS21102", cgpa: "5.4", status: "At Risk", warning: true },
    { name: "Neha Jain", id: "CS21115", cgpa: "7.8", status: "Average", warning: false },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm col-span-1 md:col-span-2">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-[#1a2b4c] text-lg">My Mentees</h3>
        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">12 Assigned</span>
      </div>

      <div className="space-y-4">
        {mentees.map((mentee, idx) => (
          <div key={idx} className={`flex items-center justify-between p-4 rounded-2xl border ${mentee.warning ? 'border-red-200 bg-red-50' : 'border-gray-100 hover:border-[#007bff]/30'}`}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                  {mentee.name}
                  {mentee.warning && <AlertCircle className="w-4 h-4 text-red-500" />}
                </h4>
                <p className="text-xs text-gray-500">{mentee.id} • CGPA: <span className="font-semibold">{mentee.cgpa}</span></p>
              </div>
            </div>
            
            <button className="text-[#007bff] hover:bg-blue-50 p-2 rounded-lg transition-colors">
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
