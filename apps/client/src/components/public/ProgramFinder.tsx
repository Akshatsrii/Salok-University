import { useState } from "react";
import { Search, ChevronRight, BookOpen } from "lucide-react";
import { GsapReveal } from "../shared/GsapReveal";

const programs = [
  { name: "B.Tech Computer Science", type: "Undergraduate", duration: "4 Years" },
  { name: "B.Tech Mechanical", type: "Undergraduate", duration: "4 Years" },
  { name: "MBA Finance", type: "Postgraduate", duration: "2 Years" },
  { name: "MBA Marketing", type: "Postgraduate", duration: "2 Years" },
  { name: "Ph.D. in AI", type: "Doctoral", duration: "3-5 Years" },
  { name: "BBA", type: "Undergraduate", duration: "3 Years" },
];

export function ProgramFinder() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = programs.filter(p => 
    (filter === "All" || p.type === filter) &&
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 w-full max-w-5xl mx-auto -mt-20 relative z-20">
      <GsapReveal>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#1a2b4c] flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-[#ffb800]" /> Find Your Program
            </h2>
            <p className="text-gray-500 mt-2">Explore 50+ undergraduate and postgraduate courses.</p>
          </div>
          
          <div className="flex bg-gray-100 p-1 rounded-full">
            {["All", "Undergraduate", "Postgraduate"].map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={"px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === f ? 'bg-white shadow-sm text-[#007bff]' : 'text-gray-500 hover:text-gray-900'}"}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mb-8">
          <input 
            type="text" 
            placeholder="Search by course name, e.g. Computer Science..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-gray-50 border-2 border-gray-100 focus:border-[#007bff] rounded-2xl px-6 py-4 pl-14 outline-none transition-all text-lg"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          {filtered.length > 0 ? filtered.map((prog, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[#007bff] hover:shadow-md cursor-pointer transition-all group">
              <div>
                <h4 className="text-lg font-bold text-[#1a2b4c] group-hover:text-[#007bff] transition-colors">{prog.name}</h4>
                <div className="flex gap-3 text-sm text-gray-500 mt-1">
                  <span className="bg-gray-100 px-2 py-0.5 rounded">{prog.type}</span>
                  <span className="bg-gray-100 px-2 py-0.5 rounded">{prog.duration}</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#007bff] group-hover:translate-x-1 transition-transform" />
            </div>
          )) : (
            <div className="col-span-2 text-center py-12 text-gray-500">
              No programs found matching your search.
            </div>
          )}
        </div>
      </GsapReveal>
    </div>
  );
}
