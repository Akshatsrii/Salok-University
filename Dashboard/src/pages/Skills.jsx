import { useState, useEffect } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Check,
  X,
  TrendingUp,
  Target,
  Award,
  Zap,
  Filter,
  Search,
  ChevronDown,
  Star,
  BarChart3,
  Sparkles,
  Calendar,
  Clock,
} from "lucide-react";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("level");

  const [newSkill, setNewSkill] = useState({
    name: "",
    level: 50,
    category: "Programming",
    goal: 80,
  });

  const categories = [
    { name: "All", icon: <BarChart3 className="w-4 h-4" />, color: "orange" },
    { name: "Programming", icon: <Zap className="w-4 h-4" />, color: "blue" },
    { name: "Frontend", icon: <Star className="w-4 h-4" />, color: "purple" },
    { name: "Database", icon: <Award className="w-4 h-4" />, color: "green" },
    { name: "Computer Science", icon: <Target className="w-4 h-4" />, color: "yellow" },
    { name: "Tools", icon: <Edit2 className="w-4 h-4" />, color: "pink" },
  ];

  // Load from localStorage
  useEffect(() => {
    const savedSkills = JSON.parse(localStorage.getItem("skills")) || [];
    setSkills(savedSkills);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills]);

  // Filter and sort skills
  const filteredSkills = skills
    .filter((s) => activeCategory === "All" || s.category === activeCategory)
    .filter((s) => s.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "level") return b.level - a.level;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "progress") {
        const progressA = (a.level / a.goal) * 100;
        const progressB = (b.level / b.goal) * 100;
        return progressB - progressA;
      }
      return 0;
    });

  const getSkillLevel = (level) => {
    if (level >= 80)
      return {
        label: "Expert",
        color: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/30",
      };
    if (level >= 60)
      return {
        label: "Advanced",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
      };
    if (level >= 40)
      return {
        label: "Intermediate",
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
      };
    return {
      label: "Beginner",
      color: "text-gray-400",
      bg: "bg-gray-500/10",
      border: "border-gray-500/30",
    };
  };

  const getAverageSkillLevel = () => {
    if (!skills.length) return 0;
    const total = skills.reduce((sum, s) => sum + s.level, 0);
    return Math.round(total / skills.length);
  };

  const handleAddSkill = () => {
    if (!newSkill.name.trim()) return;

    const skill = {
      ...newSkill,
      _id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };

    setSkills([...skills, skill]);
    setShowAddModal(false);
    setNewSkill({
      name: "",
      level: 50,
      category: "Programming",
      goal: 80,
    });
  };

  const handleDeleteSkill = (id) => {
    if (!window.confirm("Are you sure you want to delete this skill?")) return;
    const filtered = skills.filter((s) => s._id !== id);
    setSkills(filtered);
  };

  const handleUpdateSkill = (id, level) => {
    const updated = skills.map((s) => (s._id === id ? { ...s, level } : s));
    setSkills(updated);
    setEditingSkill(null);
  };

  const SkillCard = ({ skill }) => {
    const skillLevelInfo = getSkillLevel(skill.level);
    const progress = Math.min((skill.level / skill.goal) * 100, 100);
    const isEditing = editingSkill === skill._id;
    const [tempLevel, setTempLevel] = useState(skill.level);
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group bg-[#111] border border-gray-800 rounded-xl p-6 
          hover:border-orange-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20
          transition-all duration-300 relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Achievement Badge */}
        {skill.level >= skill.goal && (
          <div className="absolute top-4 right-4 animate-bounce">
            <Award className="w-6 h-6 text-yellow-400" />
          </div>
        )}

        <div className="flex justify-between mb-4 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-lg text-white group-hover:text-orange-400 transition-colors">
                {skill.name}
              </h3>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`text-xs px-2 py-1 rounded-full border ${skillLevelInfo.bg} ${skillLevelInfo.color} ${skillLevelInfo.border}`}
              >
                {skillLevelInfo.label}
              </span>
              <span className="text-xs text-gray-500">{skill.category}</span>
            </div>
          </div>

          <div className="flex gap-2 items-start">
            <button
              onClick={() => setEditingSkill(skill._id)}
              className="p-2 hover:bg-orange-500/10 rounded-lg transition-colors group/btn"
            >
              <Edit2 className="w-4 h-4 text-orange-400 group-hover/btn:text-orange-300 transition-colors" />
            </button>
            <button
              onClick={() => handleDeleteSkill(skill._id)}
              className="p-2 hover:bg-red-500/10 rounded-lg transition-colors group/btn"
            >
              <Trash2 className="w-4 h-4 text-red-500 group-hover/btn:text-red-400 transition-colors" />
            </button>
          </div>
        </div>

        {isEditing ? (
          <div className="space-y-3 relative z-10">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Adjust Level</span>
              <span className="text-orange-400 font-bold">{tempLevel}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={tempLevel}
              onChange={(e) => setTempLevel(+e.target.value)}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => handleUpdateSkill(skill._id, tempLevel)}
                className="p-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg transition-colors"
              >
                <Check className="w-4 h-4 text-green-400" />
              </button>
              <button
                onClick={() => setEditingSkill(null)}
                className="p-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-red-400" />
              </button>
            </div>
          </div>
        ) : (
          <div className="relative z-10">
            <div className="flex items-baseline gap-2 mb-3">
              <p className="text-3xl font-bold text-orange-500">
                {skill.level}
                <span className="text-lg text-gray-500">%</span>
              </p>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Target className="w-3 h-3" />
                Goal: {skill.goal}%
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden relative">
                <div
                  className="bg-gradient-to-r from-orange-500 to-orange-400 h-3 rounded-full 
                    transition-all duration-700 ease-out relative overflow-hidden"
                  style={{ width: isHovered ? `${skill.level}%` : "0%" }}
                >
                  {/* Shimmer effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    style={{
                      backgroundSize: "200% 100%",
                      animation: "shimmer 2s infinite",
                    }}
                  />
                </div>

                {/* Goal marker */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white/40"
                  style={{ left: `${skill.goal}%` }}
                />
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-gray-500">{Math.round(progress)}% to goal</span>
                <span
                  className={`font-medium ${
                    skill.level >= skill.goal ? "text-green-400" : "text-gray-400"
                  }`}
                >
                  {skill.level >= skill.goal
                    ? "✓ Achieved!"
                    : `${skill.goal - skill.level}% remaining`}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 space-y-8">
      {/* Header with gradient */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-transparent blur-3xl" />
        <div className="relative flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent mb-2 flex items-center gap-2">
              Skill Progress Tracker
              <Sparkles className="text-orange-500 w-8 h-8 animate-pulse" />
            </h1>
            <p className="text-gray-400 text-sm">
              Track and improve your technical abilities
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 
              text-black px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300
              shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 font-medium"
          >
            <Plus className="w-5 h-5" /> Add New Skill
          </button>
        </div>
      </div>

      {/* Enhanced Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            label: "Total Skills",
            value: skills.length,
            icon: <BarChart3 className="w-5 h-5" />,
            color: "orange",
            suffix: "",
          },
          {
            label: "Average Level",
            value: getAverageSkillLevel(),
            icon: <TrendingUp className="w-5 h-5" />,
            color: "blue",
            suffix: "%",
          },
          {
            label: "Expert Skills",
            value: skills.filter((s) => s.level >= 80).length,
            icon: <Award className="w-5 h-5" />,
            color: "green",
            suffix: "",
          },
          {
            label: "In Progress",
            value: skills.filter((s) => s.level < s.goal).length,
            icon: <Target className="w-5 h-5" />,
            color: "yellow",
            suffix: "",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group bg-[#111] border border-gray-800 p-6 rounded-xl 
              hover:border-orange-500 hover:-translate-y-1 transition-all duration-300
              hover:shadow-lg hover:shadow-orange-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/5 rounded-full blur-2xl 
              group-hover:bg-orange-500/10 transition-colors" />

            <div className="flex items-center justify-between mb-2 relative z-10">
              <p className="text-gray-400 text-sm font-medium">{item.label}</p>
              <div className={`text-${item.color}-400 opacity-50 group-hover:opacity-100 transition-opacity`}>
                {item.icon}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-orange-500 relative z-10">
              {item.value}
              {item.suffix}
            </h2>
          </div>
        ))}
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#111] border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 
              focus:border-orange-500 focus:outline-none transition-colors text-sm"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#111] border border-gray-800 rounded-lg px-4 py-2.5 pr-10 
              appearance-none focus:border-orange-500 focus:outline-none transition-colors text-sm cursor-pointer"
          >
            <option value="level">Sort by Level</option>
            <option value="name">Sort by Name</option>
            <option value="progress">Sort by Progress</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>

        {/* Filter Icon */}
        <button className="bg-[#111] border border-gray-800 p-2.5 rounded-lg hover:border-orange-500 transition-colors">
          <Filter className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 
              flex items-center gap-2 ${
                activeCategory === cat.name
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-black shadow-lg shadow-orange-500/30 scale-105"
                  : "bg-[#111] border border-gray-800 text-gray-300 hover:border-orange-500 hover:text-white"
              }`}
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      {filteredSkills.length === 0 ? (
        <div className="text-center py-20">
          <div className="bg-[#111] border border-gray-800 rounded-xl p-12 inline-block">
            <BarChart3 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg mb-2">No skills found</p>
            <p className="text-gray-600 text-sm">
              {searchTerm
                ? "Try adjusting your search"
                : "Click 'Add New Skill' to get started"}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill._id} skill={skill} />
          ))}
        </div>
      )}

      {/* Add Skill Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl w-full max-w-md 
            shadow-2xl shadow-orange-500/10 animate-slideUp">
            {/* Modal Header */}
            <div className="border-b border-gray-800 p-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 
                bg-clip-text text-transparent flex items-center gap-2">
                <Plus className="w-6 h-6 text-orange-500" />
                Add New Skill
              </h2>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">
                  Skill Name
                </label>
                <input
                  placeholder="e.g., React, Python, SQL..."
                  className="w-full bg-black border border-gray-700 rounded-lg p-3 
                    focus:border-orange-500 focus:outline-none transition-colors"
                  value={newSkill.name}
                  onChange={(e) =>
                    setNewSkill({ ...newSkill, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Category</label>
                <select
                  className="w-full bg-black border border-gray-700 rounded-lg p-3 
                    focus:border-orange-500 focus:outline-none transition-colors cursor-pointer"
                  value={newSkill.category}
                  onChange={(e) =>
                    setNewSkill({ ...newSkill, category: e.target.value })
                  }
                >
                  {categories
                    .filter((c) => c.name !== "All")
                    .map((c) => (
                      <option key={c.name}>{c.name}</option>
                    ))}
                </select>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-gray-400">Current Level</label>
                  <span className="text-orange-400 font-bold">
                    {newSkill.level}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={newSkill.level}
                  onChange={(e) =>
                    setNewSkill({ ...newSkill, level: +e.target.value })
                  }
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-gray-400">Goal</label>
                  <span className="text-orange-400 font-bold">
                    {newSkill.goal}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={newSkill.goal}
                  onChange={(e) =>
                    setNewSkill({ ...newSkill, goal: +e.target.value })
                  }
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-800 p-6 flex gap-3">
              <button
                onClick={handleAddSkill}
                className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 
                  hover:from-orange-600 hover:to-orange-700 text-black py-3 rounded-lg 
                  font-medium transition-all duration-300 shadow-lg shadow-orange-500/30"
              >
                Add Skill
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 bg-gray-800 hover:bg-gray-700 py-3 rounded-lg 
                  font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}