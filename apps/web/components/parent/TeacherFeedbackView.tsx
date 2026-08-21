"use client";

import { MessageSquare, Star } from "lucide-react";

export const TeacherFeedbackView = () => {
  const feedbacks = [
    { subject: "Machine Learning", teacher: "Dr. A. Sharma", text: "Excellent analytical skills. Needs to participate more in class discussions.", rating: 4 },
    { subject: "Data Structures", teacher: "Prof. K. Verma", text: "Consistently submits assignments on time. Good grasp of concepts.", rating: 5 }
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm col-span-1 md:col-span-2">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
          <MessageSquare className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-gray-900 text-lg">Teacher Feedback</h3>
      </div>
      
      <div className="space-y-4">
        {feedbacks.map((fb, idx) => (
          <div key={idx} className="p-4 rounded-2xl border border-gray-100 hover:border-indigo-100 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{fb.subject}</h4>
                <p className="text-xs text-gray-500">{fb.teacher}</p>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < fb.rating ? 'text-[#ffb800] fill-[#ffb800]' : 'text-gray-200'}`} />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-700 italic">"{fb.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};
