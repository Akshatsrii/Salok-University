
import { useState, useEffect } from "react";
import { CreditCard, CheckCircle2 } from "lucide-react";
import { LoadingSkeleton } from "../shared/LoadingSkeleton";

export const ChildFeesView = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm col-span-1">
        <LoadingSkeleton rows={4} />
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm col-span-1">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-xl text-[#007bff]">
            <CreditCard className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-gray-900 text-lg">Fee Status</h3>
        </div>
        <span className="text-sm font-semibold bg-red-100 text-red-600 px-3 py-1 rounded-full">Due</span>
      </div>
      
      <div className="mb-4">
        <p className="text-xs text-gray-500 mb-1">Total Outstanding (Semester 4)</p>
        <p className="text-3xl font-extrabold text-[#1a2b4c]">₹45,500</p>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Tuition Fee</span>
          <span className="font-semibold">₹40,000</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Library Fee</span>
          <span className="font-semibold">₹2,500</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Exam Fee</span>
          <span className="font-semibold">₹3,000</span>
        </div>
      </div>

      <button className="w-full bg-[#ffb800] text-[#1a2b4c] font-bold py-3 rounded-xl hover:bg-[#e6a600] transition-colors">
        Pay Now via Gateway
      </button>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs font-semibold text-gray-500 mb-2">Recent Payments</p>
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center gap-1.5 text-gray-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Sem 3 Tuition
          </div>
          <span className="font-semibold">₹40,000</span>
        </div>
      </div>
    </div>
  );
};
