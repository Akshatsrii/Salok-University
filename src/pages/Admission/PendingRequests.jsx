import { useState, useEffect } from "react";
import AdmissionCard from "../../components/AdmissionCard";

const BASE_URL = "http://localhost:5000/api";

export default function PendingRequests({ forcedFilter }) {
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState(forcedFilter || "pending");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  // 👇 important: agar dashboard se filter aaye to update karo
  useEffect(() => {
    if (forcedFilter) {
      setFilter(forcedFilter);
    }
  }, [forcedFilter]);

  const fetchApplications = async () => {
    try {
      const res = await fetch(`${BASE_URL}/admissions`);
      const data = await res.json();
      setApplications(data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
    setLoading(false);
  };

  const filteredData = applications.filter((req) => {
    const matchesSearch =
      req.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.course?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.email?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filter === "all" || req.status?.toLowerCase() === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          {filter.charAt(0).toUpperCase() + filter.slice(1)} Applications
        </h2>
        <div className="text-orange-400 font-bold text-xl">
          {filteredData.length}
        </div>
      </div>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
      />

      {/* 👇 Filter buttons only if forcedFilter not used */}
      {!forcedFilter && (
        <div className="flex space-x-3">
          {["all", "pending", "approved", "rejected"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-lg font-semibold ${
                filter === type
                  ? "bg-orange-600 text-white"
                  : "bg-gray-800 text-gray-400"
              }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      {loading && (
        <div className="text-white text-center py-10">
          Loading applications...
        </div>
      )}

      {!loading && filteredData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredData.map((req) => (
            <AdmissionCard
              key={req._id}
              request={req}
              refresh={fetchApplications}
            />
          ))}
        </div>
      )}

      {!loading && filteredData.length === 0 && (
        <div className="text-gray-400 text-center py-10">
          No applications found
        </div>
      )}
    </div>
  );
}
