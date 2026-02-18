import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import AdmissionForm from "./AdmissionForm";
import PendingRequests from "./PendingRequests";

const BASE_URL = "http://localhost:5000/api";

export default function AdmissionDashboard() {
  const [tab, setTab] = useState("form");

  const [totalCount, setTotalCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [approvedCount, setApprovedCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);

  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    try {
      const totalRes = await fetch(`${BASE_URL}/admissions`);
      const totalData = await totalRes.json();
      setTotalCount(totalData.length);

      const pendingRes = await fetch(`${BASE_URL}/admissions/status/pending`);
      const pendingData = await pendingRes.json();
      setPendingCount(pendingData.length);

      const approvedRes = await fetch(`${BASE_URL}/admissions/status/approved`);
      const approvedData = await approvedRes.json();
      setApprovedCount(approvedData.length);

      const rejectedRes = await fetch(`${BASE_URL}/admissions/status/rejected`);
      const rejectedData = await rejectedRes.json();
      setRejectedCount(rejectedData.length);

    } catch (error) {
      console.error("Error fetching dashboard counts:", error);
    }
  };

  const tabs = [
    { id: "form", label: "New Admission", badge: null },
    { id: "pending", label: "Pending Requests", badge: pendingCount },
    { id: "approved", label: "Approved", badge: approvedCount },
    { id: "rejected", label: "Rejected", badge: rejectedCount }
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-black via-gray-900 to-orange-950 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />

        <div className="flex-1 overflow-y-auto p-6">

          {/* Header */}
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Admission Management
              </h1>
              <p className="text-gray-400">
                Manage student admissions and applications
              </p>
            </div>

            {/* Stats */}
            <div className="flex space-x-4">
              <div className="bg-gray-900/50 border border-orange-500/20 rounded-lg px-4 py-3">
                <p className="text-xs text-gray-500">Total Applications</p>
                <p className="text-xl font-bold text-white">{totalCount}</p>
              </div>

              <div className="bg-gray-900/50 border border-orange-500/20 rounded-lg px-4 py-3">
                <p className="text-xs text-gray-500">Approved</p>
                <p className="text-xl font-bold text-white">{approvedCount}</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-gray-900/50 border border-orange-500/20 rounded-xl p-2 mb-6">
            <div className="flex space-x-2">
              {tabs.map(tabItem => (
                <button
                  key={tabItem.id}
                  onClick={() => setTab(tabItem.id)}
                  className={`flex-1 py-3 rounded-lg font-semibold text-sm
                    ${tab === tabItem.id
                      ? "bg-orange-600 text-white"
                      : "text-gray-400 hover:text-orange-400"
                    }`}
                >
                  {tabItem.label}
                  {tabItem.badge !== null && (
                    <span className="ml-2 bg-orange-500/20 px-2 py-0.5 rounded text-xs">
                      {tabItem.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

         {/* Content */}
<div className="bg-gray-900/30 rounded-xl p-6 min-h-[500px]">
  {tab === "form" && <AdmissionForm />}

  {tab === "pending" && (
    <PendingRequests forcedFilter="pending" />
  )}

  {tab === "approved" && (
    <PendingRequests forcedFilter="approved" />
  )}

  {tab === "rejected" && (
    <PendingRequests forcedFilter="rejected" />
  )}
</div>


        </div>
      </div>
    </div>
  );
}
