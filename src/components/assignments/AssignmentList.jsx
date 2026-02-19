import { useState } from "react";

const statusConfig = {
  pending: { label: "Pending", color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20" },
  submitted: { label: "Submitted", color: "text-green-400 bg-green-400/10 border-green-400/20" },
  overdue: { label: "Overdue", color: "text-red-400 bg-red-400/10 border-red-400/20" },
  graded: { label: "Graded", color: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
};

const priorityConfig = {
  high: { label: "High Priority", color: "bg-red-500" },
  medium: { label: "Medium Priority", color: "bg-yellow-500" },
  low: { label: "Low Priority", color: "bg-green-500" },
};

const getDaysLeft = (dueDate) => {
  const today = new Date();
  const due = new Date(dueDate);
  const diff = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
  return diff;
};

const DaysLeftBadge = ({ dueDate }) => {
  const days = getDaysLeft(dueDate);
  if (days < 0) return <span className="text-xs text-red-400">Overdue by {Math.abs(days)}d</span>;
  if (days === 0) return <span className="text-xs text-orange-400 font-semibold">Due Today!</span>;
  if (days <= 3) return <span className="text-xs text-yellow-400">{days}d left</span>;
  return <span className="text-xs text-gray-500">{days}d left</span>;
};

const AssignmentCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const status = statusConfig[item.status] || statusConfig.pending;
  const priority = priorityConfig[item.priority] || priorityConfig.medium;

  return (
    <div className="group bg-[#1a1a1a] border border-[#2a2a2a] hover:border-orange-500/40 rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-0.5">
      {/* Top Row: Priority dot + Status badge */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${priority.color}`} title={priority.label} />
          <span className="text-gray-600 text-xs">{item.subject}</span>
        </div>
        <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${status.color}`}>
          {status.label}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-white font-semibold text-base leading-snug group-hover:text-orange-400 transition-colors">
        {item.title}
      </h3>

      {/* Description (expandable) */}
      {item.description && (
        <div>
          <p className={`text-gray-500 text-sm leading-relaxed ${expanded ? "" : "line-clamp-2"}`}>
            {item.description}
          </p>
          {item.description.length > 100 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-orange-500 text-xs mt-1 hover:text-orange-400 transition"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>
      )}

      {/* Due date + Days Left */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#2a2a2a]">
        <div className="flex items-center gap-1.5 text-gray-500 text-xs">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {item.due}
        </div>
        <DaysLeftBadge dueDate={item.due} />
      </div>

      {/* Optional: grade display */}
      {item.grade && (
        <div className="flex items-center gap-2 bg-[#222] rounded-lg px-3 py-2">
          <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          <span className="text-gray-400 text-xs">Grade:</span>
          <span className="text-white text-sm font-bold">{item.grade}</span>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="flex-1 py-2 text-xs rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-medium transition-all active:scale-95">
          View Details
        </button>
        {item.status !== "submitted" && item.status !== "graded" && (
          <button className="flex-1 py-2 text-xs rounded-lg bg-[#222] hover:bg-[#2a2a2a] text-gray-300 font-medium border border-[#333] transition-all active:scale-95">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

// ─── Filter Bar ───────────────────────────────────────────────────────────────
const FILTERS = ["All", "Pending", "Submitted", "Overdue", "Graded"];
const SORTS = ["Due Date", "Priority", "Title"];

const AssignmentList = ({ list = [] }) => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Due Date");
  const [search, setSearch] = useState("");

  const priorityOrder = { high: 0, medium: 1, low: 2 };

  const filtered = list
    .filter((item) => {
      const matchFilter = filter === "All" || item.status?.toLowerCase() === filter.toLowerCase();
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.subject.toLowerCase().includes(search.toLowerCase());
      return matchFilter && matchSearch;
    })
    .sort((a, b) => {
      if (sort === "Due Date") return new Date(a.due) - new Date(b.due);
      if (sort === "Priority") return (priorityOrder[a.priority] ?? 1) - (priorityOrder[b.priority] ?? 1);
      if (sort === "Title") return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <div className="space-y-6">
      {/* Search + Sort */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search assignments..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-white text-sm placeholder-gray-600 outline-none focus:border-orange-500 transition"
          />
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-gray-300 text-sm outline-none focus:border-orange-500 transition cursor-pointer"
        >
          {SORTS.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>

      {/* Filter Pills */}
      <div className="flex gap-2 flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
              filter === f
                ? "bg-orange-600 border-orange-600 text-white"
                : "bg-[#1a1a1a] border-[#2a2a2a] text-gray-400 hover:border-orange-500/50 hover:text-white"
            }`}
          >
            {f}
            <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-xs ${filter === f ? "bg-orange-700" : "bg-[#2a2a2a]"}`}>
              {f === "All" ? list.length : list.filter((i) => i.status?.toLowerCase() === f.toLowerCase()).length}
            </span>
          </button>
        ))}
      </div>

      {/* Empty States */}
      {list.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <p className="text-gray-400 font-medium">No assignments yet</p>
          <p className="text-gray-600 text-sm mt-1">Check back later for new assignments.</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-gray-400 font-medium">No results found</p>
          <p className="text-gray-600 text-sm mt-1">Try adjusting your search or filter.</p>
        </div>
      ) : (
        <>
          <p className="text-gray-600 text-xs">
            Showing <span className="text-orange-400 font-medium">{filtered.length}</span> of {list.length} assignments
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <AssignmentCard key={item.id ?? i} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AssignmentList;