import StatusBadge from "./StatusBadge";
import { useState } from "react";

const BASE_URL = "http://localhost:5000/api";

export default function AdmissionCard({ request, refresh }) {
  const [showDetails, setShowDetails] = useState(false);
  const [updating, setUpdating] = useState(false);

  const updateStatus = async (status) => {
    try {
      setUpdating(true);

      await fetch(`${BASE_URL}/admissions/${request._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status })
      });

      if (refresh) refresh();

    } catch (error) {
      console.error("Error updating status:", error);
    }

    setUpdating(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 overflow-hidden group">

      <div className="bg-gradient-to-r from-orange-600/10 to-orange-500/10 border-b border-orange-500/20 p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">
                {request.name?.charAt(0).toUpperCase()}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                {request.name}
              </h3>
            </div>
          </div>

          <StatusBadge status={request.status} />
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center space-x-2 text-gray-300">
          <p className="font-semibold">{request.course}</p>
        </div>

        {showDetails && (
          <div className="mt-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700 space-y-2">
            {request.qualification && (
              <div className="text-sm text-gray-300">
                Qualification: {request.qualification}
              </div>
            )}
            {request.marks && (
              <div className="text-sm text-orange-400">
                Marks: {request.marks}%
              </div>
            )}
            {request.address && (
              <div className="text-sm text-gray-300">
                Address: {request.address}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="p-4 bg-gray-900/50 border-t border-gray-800 flex items-center justify-between gap-2">

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-sm text-gray-400 hover:text-orange-400"
        >
          {showDetails ? "Hide" : "View"} Details
        </button>

        <div className="flex items-center gap-2 ml-auto">

          {request.status?.toLowerCase() === "pending" && (
            <>
              <button
                disabled={updating}
                onClick={() => updateStatus("approved")}
                className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 disabled:opacity-50"
              >
                Approve
              </button>

              <button
                disabled={updating}
                onClick={() => updateStatus("rejected")}
                className="bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 disabled:opacity-50"
              >
                Reject
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
