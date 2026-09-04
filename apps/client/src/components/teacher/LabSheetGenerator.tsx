
import { Beaker, Wand2 } from "lucide-react";

export const LabSheetGenerator = () => {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center group cursor-pointer hover:border-[#ffb800] transition-colors">
      <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative">
        <Beaker className="w-8 h-8" />
        <div className="absolute -bottom-1 -right-1 bg-[#ffb800] p-1.5 rounded-lg text-[#1a2b4c]">
          <Wand2 className="w-3 h-3" />
        </div>
      </div>
      <h3 className="font-bold text-gray-900 mb-1">Lab Sheet</h3>
      <p className="text-xs text-gray-500">Generate practical lab exercises and solutions</p>
    </div>
  );
};
