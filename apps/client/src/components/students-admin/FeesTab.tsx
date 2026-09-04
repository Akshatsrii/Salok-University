export const FeesTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Fees & Financials</h3>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">No Dues</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 border border-gray-100 rounded-lg bg-gray-50 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Total Fees (Sem 6)</div>
            <div className="text-xl font-bold text-gray-900">₹65,000</div>
          </div>
        </div>
        <div className="p-5 border border-green-100 rounded-lg bg-green-50 flex items-center justify-between">
          <div>
            <div className="text-sm text-green-600 font-medium">Paid Amount</div>
            <div className="text-xl font-bold text-green-700">₹65,000</div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-md font-semibold text-gray-800 mb-4">Payment History</h4>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 font-medium text-gray-600">Date</th>
                <th className="p-3 font-medium text-gray-600">Description</th>
                <th className="p-3 font-medium text-gray-600">Amount</th>
                <th className="p-3 font-medium text-gray-600 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-3">15 Jan 2026</td>
                <td className="p-3">Sem 6 Tuition Fee</td>
                <td className="p-3">₹65,000</td>
                <td className="p-3 text-right text-green-600 font-medium">Success</td>
              </tr>
              <tr>
                <td className="p-3">10 Aug 2025</td>
                <td className="p-3">Sem 5 Tuition Fee</td>
                <td className="p-3">₹65,000</td>
                <td className="p-3 text-right text-green-600 font-medium">Success</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
