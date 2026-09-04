
import { useState, useEffect } from "react";
import { Book, Utensils } from "lucide-react";
import { LoadingSkeleton } from "../../shared/LoadingSkeleton";

export const LibraryMessWidget = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm col-span-1">
        <LoadingSkeleton rows={5} />
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-6">
      {/* Library Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Book className="w-5 h-5 text-[#007bff]" />
          <h3 className="font-bold text-[#1a2b4c]">Library Dues</h3>
        </div>
        <div className="bg-gray-50 p-4 rounded-2xl flex justify-between items-center border border-gray-100">
          <div>
            <p className="font-semibold text-gray-800 text-sm">Introduction to Algorithms</p>
            <p className="text-xs text-gray-500">Thomas H. Cormen</p>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-md">Due Tomorrow</span>
          </div>
        </div>
      </div>

      <div className="h-px bg-gray-100 w-full"></div>

      {/* Mess Menu Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Utensils className="w-5 h-5 text-orange-500" />
          <h3 className="font-bold text-[#1a2b4c]">Today's Mess Menu</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 font-medium w-20">Breakfast</span>
            <span className="text-gray-800 font-semibold text-right">Aloo Paratha, Curd, Tea</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 font-medium w-20">Lunch</span>
            <span className="text-gray-800 font-semibold text-right">Rajma Chawal, Salad, Roti</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 font-medium w-20">Dinner</span>
            <span className="text-gray-800 font-semibold text-right">Paneer Butter Masala, Naan</span>
          </div>
        </div>
      </div>
    </div>
  );
};
