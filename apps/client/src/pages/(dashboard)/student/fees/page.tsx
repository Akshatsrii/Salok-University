import { IndianRupee, Download, CreditCard, Clock } from "lucide-react";

export default function StudentFeesPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-[#1a2b4c] mb-2">Fee Details</h1>
      <p className="text-gray-500 mb-8">View your fee structure, make payments, and download receipts.</p>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-[#1a2b4c] to-blue-900 text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-blue-200 text-sm font-medium mb-1">Total Due Amount</div>
            <div className="text-4xl font-bold flex items-center mb-6"><IndianRupee className="w-8 h-8" /> 45,000</div>
            <div className="flex gap-4">
              <button className="bg-[#ffb800] text-[#1a2b4c] font-bold px-6 py-2 rounded-xl flex items-center gap-2 hover:bg-[#e6a600]">
                <CreditCard className="w-4 h-4" /> Pay Now
              </button>
            </div>
          </div>
          <IndianRupee className="w-48 h-48 absolute -right-8 -bottom-8 text-white/5" />
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
          <h3 className="text-lg font-bold text-[#1a2b4c] mb-4">Upcoming Deadline</h3>
          <div className="flex items-center gap-4 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100">
            <Clock className="w-6 h-6 shrink-0" />
            <div>
              <div className="font-bold">Semester 4 Tuition Fee</div>
              <div className="text-sm">Due in 5 days (Oct 15, 2026)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-[#1a2b4c] mb-4">Payment History</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 border-b border-gray-100">
              <th className="pb-3 font-medium">Receipt No.</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Description</th>
              <th className="pb-3 font-medium">Amount</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b border-gray-50">
              <td className="py-4">#REC-90821</td>
              <td className="py-4">Sep 1, 2026</td>
              <td className="py-4">Hostel Fee (Fall)</td>
              <td className="py-4">?20,000</td>
              <td className="py-4"><span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">PAID</span></td>
              <td className="py-4"><button className="text-blue-600 hover:underline flex items-center gap-1 text-sm"><Download className="w-4 h-4"/> Receipt</button></td>
            </tr>
            <tr>
              <td className="py-4">#REC-80432</td>
              <td className="py-4">Jan 15, 2026</td>
              <td className="py-4">Tuition Fee (Sem 3)</td>
              <td className="py-4">?45,000</td>
              <td className="py-4"><span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">PAID</span></td>
              <td className="py-4"><button className="text-blue-600 hover:underline flex items-center gap-1 text-sm"><Download className="w-4 h-4"/> Receipt</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
