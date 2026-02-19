import { useState, useMemo } from "react";

const getInitials = (name) => {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
};

const semesterLabel = (sem) => {
  const s = parseInt(sem);
  const suffix = ["th", "st", "nd", "rd"];
  const v = s % 100;
  return (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
};

const SortIcon = ({ column, sortConfig }) => {
  const active = sortConfig.key === column;
  return (
    <span className="inline-flex flex-col ml-1.5 opacity-40 group-hover:opacity-100 transition">
      <svg className={`w-2.5 h-2.5 -mb-0.5 ${active && sortConfig.dir === "asc" ? "opacity-100" : ""}`}
        fill={active && sortConfig.dir === "asc" ? "#ea580c" : "currentColor"} viewBox="0 0 16 16">
        <path d="M8 4l4 6H4z" />
      </svg>
      <svg className={`w-2.5 h-2.5 ${active && sortConfig.dir === "desc" ? "opacity-100" : ""}`}
        fill={active && sortConfig.dir === "desc" ? "#ea580c" : "currentColor"} viewBox="0 0 16 16">
        <path d="M8 12L4 6h8z" />
      </svg>
    </span>
  );
};

const StudentsTable = ({ students = [] }) => {
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "name", dir: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const rowsPerPage = 5;

  const handleSort = (key) => {
    setSortConfig((prev) =>
      prev.key === key ? { key, dir: prev.dir === "asc" ? "desc" : "asc" } : { key, dir: "asc" }
    );
    setCurrentPage(1);
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return students.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        String(s.roll).includes(q) ||
        String(s.sem).includes(q)
    );
  }, [search, students]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (aVal < bVal) return sortConfig.dir === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.dir === "asc" ? 1 : -1;
      return 0;
    });
  }, [filtered, sortConfig]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / rowsPerPage));
  const paginated = sorted.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const toggleRow = (roll) => {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      next.has(roll) ? next.delete(roll) : next.add(roll);
      return next;
    });
  };

  const toggleAll = () => {
    const pageRolls = paginated.map((s) => s.roll);
    const allSelected = pageRolls.every((r) => selectedRows.has(r));
    setSelectedRows((prev) => {
      const next = new Set(prev);
      allSelected ? pageRolls.forEach((r) => next.delete(r)) : pageRolls.forEach((r) => next.add(r));
      return next;
    });
  };

  const allPageSelected =
    paginated.length > 0 && paginated.every((s) => selectedRows.has(s.roll));

  /* All semesters → unified dark orange theme */
  const semColors = {
    1: "bg-orange-500/8 text-orange-600 border border-orange-500/15",
    2: "bg-orange-500/10 text-orange-500 border border-orange-500/18",
    3: "bg-orange-500/12 text-orange-500 border border-orange-500/20",
    4: "bg-orange-500/10 text-orange-400 border border-orange-500/22",
    5: "bg-orange-500/12 text-orange-400 border border-orange-500/25",
    6: "bg-orange-500/15 text-orange-400 border border-orange-500/28",
    7: "bg-orange-600/12 text-orange-300 border border-orange-500/30",
    8: "bg-orange-600/15 text-orange-300 border border-orange-500/32",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        .st-table-root {
          font-family: 'DM Sans', sans-serif;
          background: #0d0d0d;
          border: 1px solid rgba(234,88,12,0.12);
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }
        .st-table-root::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(234,88,12,0.35), transparent);
        }

        /* Toolbar */
        .st-toolbar {
          display: flex; flex-wrap: wrap;
          align-items: center; justify-content: space-between;
          gap: 12px; padding: 16px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .st-title { color: #ffffff; font-weight: 600; font-size: 16px; font-family: 'DM Sans', sans-serif; }
        .st-subtitle { color: #3a3838; font-size: 11px; margin-top: 2px; font-family: 'DM Mono', monospace; }

        /* Search */
        .st-search-wrap { position: relative; }
        .st-search-icon {
          position: absolute; left: 10px; top: 50%; transform: translateY(-50%);
          width: 15px; height: 15px; color: #2e2e2e; pointer-events: none;
        }
        .st-search {
          padding: 8px 14px 8px 34px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 10px;
          font-size: 13px; color: #f0ece8;
          font-family: 'DM Sans', sans-serif;
          outline: none; width: 192px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .st-search:focus {
          border-color: rgba(234,88,12,0.4);
          box-shadow: 0 0 0 3px rgba(234,88,12,0.07);
        }
        .st-search::placeholder { color: #252525; }

        /* Table */
        .st-table { width: 100%; text-align: left; font-size: 13px; border-collapse: collapse; }

        .st-thead { background: rgba(255,255,255,0.02); }
        .st-th {
          padding: 10px 12px;
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #3a3838; font-family: 'DM Mono', monospace;
          white-space: nowrap;
        }
        .st-th-sortable { cursor: pointer; user-select: none; }
        .st-th-sortable:hover { color: #ea580c; }

        .st-tr {
          border-top: 1px solid rgba(255,255,255,0.03);
          cursor: pointer;
          transition: background 0.15s;
        }
        .st-tr:hover { background: rgba(234,88,12,0.04); }
        .st-tr-selected { background: rgba(234,88,12,0.06); }

        .st-td { padding: 12px; vertical-align: middle; }

        /* Avatar */
        .st-avatar {
          width: 32px; height: 32px; border-radius: "50%";
          background: linear-gradient(135deg, #7c2d12, #c2410c, #ea580c);
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 11px; font-weight: 700;
          flex-shrink: 0; border-radius: 50%;
          border: 1px solid rgba(234,88,12,0.3);
          font-family: 'DM Mono', monospace;
        }
        .st-name { color: #f0ece8; font-weight: 500; }

        /* Roll badge */
        .st-roll {
          font-family: 'DM Mono', monospace;
          color: #6b6868;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 2px 8px; border-radius: 6px;
          font-size: 11px;
        }

        /* Row index */
        .st-index { color: #2e2e2e; font-size: 11px; text-align: center; font-family: 'DM Mono', monospace; }

        /* Selection badge */
        .st-sel-badge {
          font-size: 11px; color: #ea580c;
          background: rgba(234,88,12,0.1);
          border: 1px solid rgba(234,88,12,0.2);
          padding: 4px 12px; border-radius: 8px;
          font-family: 'DM Mono', monospace;
        }

        /* Action buttons */
        .st-action-btn {
          padding: 6px; border-radius: 8px; background: none; border: none;
          color: #2e2e2e; cursor: pointer; transition: all 0.18s;
        }
        .st-action-btn:hover.view  { color: #ea580c; background: rgba(234,88,12,0.1); }
        .st-action-btn:hover.edit  { color: #fb923c; background: rgba(251,146,60,0.1); }
        .st-action-btn:hover.del   { color: #ef4444; background: rgba(239,68,68,0.1); }

        /* Empty state */
        .st-empty {
          text-align: center; padding: 60px 20px;
          color: #2e2e2e;
          font-family: 'DM Sans', sans-serif; font-size: 13px;
        }

        /* Footer */
        .st-footer {
          display: flex; flex-wrap: wrap;
          align-items: center; justify-content: space-between;
          gap: 12px; padding: 14px 20px;
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .st-footer-info { color: #2e2e2e; font-size: 11px; font-family: 'DM Mono', monospace; }

        /* Pagination */
        .st-page-btn {
          padding: 6px 12px; border-radius: 8px;
          font-size: 11px; font-family: 'DM Sans', sans-serif;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          color: #474444; cursor: pointer;
          transition: all 0.18s;
        }
        .st-page-btn:hover:not(:disabled) { border-color: rgba(234,88,12,0.3); color: #ea580c; }
        .st-page-btn:disabled { opacity: 0.25; cursor: not-allowed; }
        .st-page-num {
          width: 30px; height: 30px; border-radius: 8px;
          font-size: 11px; font-family: 'DM Mono', monospace;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          color: #474444; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.18s;
        }
        .st-page-num:hover { border-color: rgba(234,88,12,0.3); color: #ea580c; }
        .st-page-num.active {
          background: linear-gradient(135deg, #c2410c, #ea580c);
          border-color: #ea580c; color: #fff; font-weight: 700;
        }

        input[type="checkbox"] { accent-color: #ea580c; width: 14px; height: 14px; cursor: pointer; }
      `}</style>

      <div className="st-table-root">

        {/* ── Toolbar ── */}
        <div className="st-toolbar">
          <div>
            <div className="st-title">Students</div>
            <div className="st-subtitle">
              {filtered.length} of {students.length} student{students.length !== 1 ? "s" : ""}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {selectedRows.size > 0 && (
              <span className="st-sel-badge">{selectedRows.size} selected</span>
            )}
            <div className="st-search-wrap">
              <svg className="st-search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text" className="st-search"
                placeholder="Search students..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              />
            </div>
          </div>
        </div>

        {/* ── Table ── */}
        <div style={{ overflowX: "auto" }}>
          <table className="st-table">
            <thead className="st-thead">
              <tr>
                <th className="st-th" style={{ paddingLeft: 20, paddingRight: 8, width: 32 }}>
                  <input type="checkbox" checked={allPageSelected} onChange={toggleAll} />
                </th>
                <th className="st-th" style={{ width: 32, textAlign: "center" }}>#</th>

                {[
                  { label: "Student",  key: "name" },
                  { label: "Roll No",  key: "roll" },
                  { label: "Semester", key: "sem"  },
                ].map(({ label, key }) => (
                  <th key={key} className="st-th st-th-sortable" onClick={() => handleSort(key)}>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      {label}
                      <SortIcon column={key} sortConfig={sortConfig} />
                    </span>
                  </th>
                ))}

                <th className="st-th" style={{ textAlign: "center" }}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={6} className="st-empty">
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                      <svg style={{ width: 36, height: 36, color: "#1e1e1e" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>No students found</span>
                    </div>
                  </td>
                </tr>
              ) : (
                paginated.map((s, i) => {
                  const globalIndex = (currentPage - 1) * rowsPerPage + i + 1;
                  const isSelected = selectedRows.has(s.roll);
                  const sem = parseInt(s.sem);

                  return (
                    <tr
                      key={s.roll}
                      onClick={() => toggleRow(s.roll)}
                      className={`st-tr ${isSelected ? "st-tr-selected" : ""}`}
                    >
                      {/* Checkbox */}
                      <td className="st-td" style={{ paddingLeft: 20, paddingRight: 8 }}>
                        <input type="checkbox" checked={isSelected}
                          onChange={() => toggleRow(s.roll)}
                          onClick={(e) => e.stopPropagation()} />
                      </td>

                      {/* Index */}
                      <td className="st-td st-index">{globalIndex}</td>

                      {/* Name + Avatar */}
                      <td className="st-td">
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div className="st-avatar">{getInitials(s.name)}</div>
                          <span className="st-name">{s.name}</span>
                        </div>
                      </td>

                      {/* Roll */}
                      <td className="st-td">
                        <span className="st-roll">{s.roll}</span>
                      </td>

                      {/* Semester */}
                      <td className="st-td">
                        <span style={{
                          fontSize: "10px", fontWeight: 600, fontFamily: "'DM Mono',monospace",
                          padding: "3px 10px", borderRadius: "20px",
                          background: "rgba(234,88,12,0.1)",
                          border: "1px solid rgba(234,88,12,0.22)",
                          color: `hsl(${20 + sem * 3}, 85%, ${65 - sem * 2}%)`,
                        }}>
                          {sem}{semesterLabel(sem)} Sem
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="st-td" style={{ textAlign: "center" }} onClick={(e) => e.stopPropagation()}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                          {/* View */}
                          <button className="st-action-btn view" title="View"
                            onMouseEnter={e => { e.currentTarget.style.color = "#ea580c"; e.currentTarget.style.background = "rgba(234,88,12,0.1)"; }}
                            onMouseLeave={e => { e.currentTarget.style.color = "#2e2e2e"; e.currentTarget.style.background = "none"; }}>
                            <svg style={{ width: 15, height: 15 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          {/* Edit */}
                          <button className="st-action-btn edit" title="Edit"
                            onMouseEnter={e => { e.currentTarget.style.color = "#fb923c"; e.currentTarget.style.background = "rgba(251,146,60,0.1)"; }}
                            onMouseLeave={e => { e.currentTarget.style.color = "#2e2e2e"; e.currentTarget.style.background = "none"; }}>
                            <svg style={{ width: 15, height: 15 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          {/* Delete */}
                          <button className="st-action-btn del" title="Delete"
                            onMouseEnter={e => { e.currentTarget.style.color = "#ef4444"; e.currentTarget.style.background = "rgba(239,68,68,0.1)"; }}
                            onMouseLeave={e => { e.currentTarget.style.color = "#2e2e2e"; e.currentTarget.style.background = "none"; }}>
                            <svg style={{ width: 15, height: 15 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* ── Pagination Footer ── */}
        <div className="st-footer">
          <p className="st-footer-info">
            Showing {Math.min((currentPage - 1) * rowsPerPage + 1, sorted.length)}–{Math.min(currentPage * rowsPerPage, sorted.length)} of {sorted.length} results
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <button className="st-page-btn"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}>← Prev</button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button key={page}
                onClick={() => setCurrentPage(page)}
                className={`st-page-num ${currentPage === page ? "active" : ""}`}>
                {page}
              </button>
            ))}

            <button className="st-page-btn"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}>Next →</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentsTable;