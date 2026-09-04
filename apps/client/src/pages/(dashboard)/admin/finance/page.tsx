
import { IndianRupee, Clock, Search, Download } from "lucide-react";
import { StatCard } from "../../../../components/shared/StatCard";
import { DataTable } from "../../../../components/shared/DataTable";

export default function AdminFinancePage() {
  const stats = [
    { title: "Total Revenue (YTD)", value: "₹45.2Cr", icon: IndianRupee, color: "emerald" as const, trend: { value: 12.4, isPositive: true } },
    { title: "Pending Dues", value: "₹5.8Cr", icon: Clock, color: "rose" as const, trend: { value: 4.2, isPositive: false } },
    { title: "Transactions Today", value: "1,245", icon: IndianRupee, color: "blue" as const },
  ];

  const transactions = [
    { id: "TRX-1092", student: "Rahul Kumar", amount: "₹45,500", type: "Tuition Fee", date: "Today", status: "Completed" },
    { id: "TRX-1091", student: "Priya Singh", amount: "₹12,000", type: "Hostel Fee", date: "Today", status: "Completed" },
    { id: "TRX-1090", student: "Amit Patel", amount: "₹3,500", type: "Library Fine", date: "Yesterday", status: "Pending" },
    { id: "TRX-1089", student: "Neha Sharma", amount: "₹45,500", type: "Tuition Fee", date: "Yesterday", status: "Failed" },
  ];

  const columns = [
    { header: "Transaction ID", accessor: "id" as keyof typeof transactions[0], className: "font-mono text-xs text-gray-500" },
    { header: "Student", accessor: "student" as keyof typeof transactions[0], className: "font-semibold" },
    { header: "Type", accessor: "type" as keyof typeof transactions[0] },
    { header: "Amount", accessor: "amount" as keyof typeof transactions[0], className: "font-bold" },
    { header: "Date", accessor: "date" as keyof typeof transactions[0], className: "text-gray-500" },
    { header: "Status", accessor: "status" as keyof typeof transactions[0], className: "font-medium" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Finance Dashboard</h1>
          <p className="text-gray-500 mt-1">Monitor fee collections, transactions, and outstanding dues.</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm">
          <Download className="w-4 h-4" /> Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <StatCard 
            key={idx}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
            trend={stat.trend}
          />
        ))}
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-gray-900 text-lg">Recent Transactions</h3>
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by student or ID..." 
              className="pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#007bff] w-64"
            />
          </div>
        </div>
        
        <DataTable data={transactions} columns={columns} keyExtractor={(r) => r.id} />
      </div>
    </div>
  );
}
