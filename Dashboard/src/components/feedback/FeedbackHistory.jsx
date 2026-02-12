import { useState } from "react";

export default function FeedbackHistory() {
  const [feedbackItems] = useState([
    {
      id: 1,
      type: "Faculty Feedback",
      category: "Teaching Quality",
      status: "submitted",
      date: "2024-02-05",
      response:
        "Thank you for your feedback. We have forwarded this to the concerned department.",
    },
    {
      id: 2,
      type: "Syllabus Feedback",
      category: "Course Content",
      status: "reviewed",
      date: "2024-02-03",
      response: null,
    },
    {
      id: 3,
      type: "Infrastructure Feedback",
      category: "Labs",
      status: "pending",
      date: "2024-02-01",
      response: null,
    },
    {
      id: 4,
      type: "Faculty Feedback",
      category: "Punctuality",
      status: "submitted",
      date: "2024-01-28",
      response: null,
    },
    {
      id: 5,
      type: "Infrastructure Feedback",
      category: "Library",
      status: "resolved",
      date: "2024-01-25",
      response:
        "The library hours have been extended as per your suggestion.",
    },
  ]);

  const [filter, setFilter] = useState("all");
  const [expandedId, setExpandedId] = useState(null);

  const statusConfig = {
    pending: {
      label: "Pending",
      color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
      dotColor: "bg-yellow-500",
    },
    submitted: {
      label: "Submitted",
      color: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      dotColor: "bg-blue-500",
    },
    reviewed: {
      label: "Reviewed",
      color: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      dotColor: "bg-purple-500",
    },
    resolved: {
      label: "Resolved",
      color: "bg-green-500/10 text-green-400 border-green-500/30",
      dotColor: "bg-green-500",
    },
  };

  const filteredItems =
    filter === "all"
      ? feedbackItems
      : feedbackItems.filter((item) => item.status === filter);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const statusCounts = {
    all: feedbackItems.length,
    pending: feedbackItems.filter((i) => i.status === "pending").length,
    submitted: feedbackItems.filter((i) => i.status === "submitted").length,
    reviewed: feedbackItems.filter((i) => i.status === "reviewed").length,
    resolved: feedbackItems.filter((i) => i.status === "resolved").length,
  };

  return (
    <div className="bg-[#111] border border-gray-800 p-6 rounded-xl shadow-xl text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-orange-500">
            Feedback History
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Track your submitted feedback
          </p>
        </div>
        <div className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm font-medium border border-orange-500/30">
          {filteredItems.length} items
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-2">
        {["all", "pending", "submitted", "reviewed", "resolved"].map(
          (status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                filter === status
                  ? "bg-orange-500 text-black"
                  : "bg-black border border-gray-700 text-gray-400 hover:border-orange-500"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
              <span className="ml-2 text-xs opacity-70">
                ({statusCounts[status]})
              </span>
            </button>
          )
        )}
      </div>

      {/* Feedback List */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <div className="text-5xl mb-3">📋</div>
          No feedback found
        </div>
      ) : (
        <ul className="space-y-4">
          {filteredItems.map((item) => {
            const config = statusConfig[item.status];
            const isExpanded = expandedId === item.id;

            return (
              <li
                key={item.id}
                className="border border-gray-800 rounded-lg overflow-hidden hover:border-orange-500 transition-all"
              >
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-4 cursor-pointer hover:bg-[#1a1a1a] transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`w-2 h-2 rounded-full ${config.dotColor}`}
                        />
                        <h3 className="font-semibold text-white">
                          {item.type}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="bg-black border border-gray-700 px-2 py-1 rounded">
                          {item.category}
                        </span>
                        •
                        <span>{item.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${config.color}`}
                      >
                        {config.label}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-4 pb-4 pt-3 bg-black border-t border-gray-800">
                    {item.response ? (
                      <div className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-700">
                        <p className="text-xs text-orange-400 mb-1">
                          Administration Response
                        </p>
                        <p className="text-sm text-gray-300">
                          {item.response}
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500 italic">
                        No response yet. We'll notify you once reviewed.
                      </p>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
