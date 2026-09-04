
import { CheckSquare, Wand2 } from "lucide-react";

export const MCQGenerator = () => {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center group cursor-pointer hover:border-[#ffb800] transition-colors">
      <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative">
        <CheckSquare className="w-8 h-8" />
        <div className="absolute -bottom-1 -right-1 bg-[#ffb800] p-1.5 rounded-lg text-[#1a2b4c]">
          <Wand2 className="w-3 h-3" />
        </div>
      </div>
      <h3 className="font-bold text-gray-900 mb-1">MCQ Quiz</h3>
      <p className="text-xs text-gray-500">Generate multiple choice quizzes instantly</p>
    </div>
  );
};
