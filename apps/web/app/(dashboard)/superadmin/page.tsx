"use client";

import { Building2, Users, Database, ShieldAlert, CheckCircle, Search } from "lucide-react";
import { StatCard } from "../../../components/shared/StatCard";
import { DataTable } from "../../../components/shared/DataTable";

export default function SuperadminPage() {
  const stats = [
    { title: "Total Users", value: "18,452", icon: Users, color: "blue" as const, trend: { value: 2.1, isPositive: true } },
    { title: "Active Tenants", value: "1", icon: Building2, color: "emerald" as const },
    { title: "System Health", value: "99.9%", icon: CheckCircle, color: "emerald" as const, trend: { value: 0.1, isPositive: true } },
    { title: "Security Alerts", value: "0", icon: ShieldAlert, color: "amber" as const }
  ];

  const recentAudits = [
    { id: "1", user: "system_admin", action: "Updated Global Settings", module: "Settings", time: "10 mins ago" },
    { id: "2", user: "devops_agent", action: "Ran Database Backup", module: "Infrastructure", time: "2 hours ago" },
    { id: "3", user: "akshat_srii", action: "Promoted user to Admin", module: "IAM", time: "5 hours ago" },
  ];

  const auditColumns = [
    { header: "User", accessor: "user" as keyof typeof recentAudits[0], className: "font-semibold" },
    { header: "Action", accessor: "action" as keyof typeof recentAudits[0] },
    { header: "Module", accessor: "module" as keyof typeof recentAudits[0] },
    { header: "Time", accessor: "time" as keyof typeof recentAudits[0], className: "text-right text-gray-500" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Superadmin Console</h1>
        <p className="text-gray-500 mt-1">Manage global university settings and monitor system infrastructure.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 text-gray-600 rounded-xl">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">System Audit Logs</h3>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search logs..." 
                className="pl-9 pr-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#007bff]"
              />
            </div>
          </div>
          <DataTable data={recentAudits} columns={auditColumns} keyExtractor={(r) => r.id} />
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-gray-900 text-lg mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-semibold text-gray-700 transition-colors">
              Manage API Keys
            </button>
            <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-semibold text-gray-700 transition-colors">
              Configure Rate Limits
            </button>
            <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-semibold text-gray-700 transition-colors">
              View Deployment Status
            </button>
            <button className="w-full text-left px-4 py-3 bg-red-50 hover:bg-red-100 rounded-xl text-sm font-semibold text-red-600 transition-colors">
              Trigger Manual Backup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
