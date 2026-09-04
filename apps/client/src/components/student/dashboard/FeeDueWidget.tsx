import { IndianRupee, AlertCircle } from 'lucide-react';

export const FeeDueWidget = () => {
  return (
    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-sm border border-red-100 p-6 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-100 text-red-600 rounded-lg">
            <IndianRupee className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-red-900">Fee Due</h3>
        </div>
        <AlertCircle className="w-5 h-5 text-red-500" />
      </div>
      
      <div>
        <div className="text-3xl font-bold text-red-700 mb-1">₹ 25,000</div>
        <div className="text-sm text-red-600 font-medium mb-3">Due by 15th Nov (in 5 days)</div>
        <button className="w-full bg-red-600 text-white font-medium py-2 rounded-lg hover:bg-red-700 transition-colors">
          Pay Now
        </button>
      </div>
    </div>
  );
};
