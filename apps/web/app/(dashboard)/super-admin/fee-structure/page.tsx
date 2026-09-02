import { CreditCard, IndianRupee, PieChart } from "lucide-react";

export default function FeeStructurePage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#1a2b4c]">Fee Structure Master</h1>
          <p className="text-gray-500 mt-1">Define global fee configurations for all courses.</p>
        </div>
        <button className="bg-[#1a2b4c] hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg transition-colors">
          + Add New Fee Head
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "B.Tech (CS)", fee: "?1,50,000", students: 1200 },
          { title: "B.Tech (Mechanical)", fee: "?1,20,000", students: 850 },
          { title: "MBA (Finance)", fee: "?2,00,000", students: 400 },
          { title: "Ph.D. (Research)", fee: "?50,000", students: 120 },
        ].map((course, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#007bff] transition-colors cursor-pointer">
            <h3 className="text-lg font-bold text-[#1a2b4c] mb-2">{course.title}</h3>
            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Annual Fee</p>
                <p className="text-[#007bff] font-bold text-xl">{course.fee}</p>
              </div>
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400">
                <IndianRupee className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
        <PieChart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-[#1a2b4c]">Fee Dashboard Coming Soon</h3>
        <p className="text-gray-500 mt-2">Detailed analytics and fee collection tracking modules are being integrated.</p>
      </div>
    </div>
  );
}
