import { useState, useEffect } from "react";
import {
  Code2,
  Database,
  Laptop,
  Brain,
  Award,
  TrendingUp,
  Target,
  Calendar,
  Plus,
  Edit2,
  Trash2,
  Check,
  X,
} from "lucide-react";

export default function Skills() {
  const [skills, setSkills] = useState([
    {
      id: 1,
      name: "JavaScript",
      level: 80,
      category: "Programming",
      icon: Code2,
      lastUpdated: "2 days ago",
      trending: "up",
      goal: 90,
      endorsements: 12,
      color: "yellow",
    },
    {
      id: 2,
      name: "React",
      level: 75,
      category: "Frontend",
      icon: Laptop,
      lastUpdated: "1 week ago",
      trending: "up",
      goal: 85,
      endorsements: 8,
      color: "blue",
    },
    {
      id: 3,
      name: "Data Structures",
      level: 65,
      category: "Computer Science",
      icon: Brain,
      lastUpdated: "3 days ago",
      trending: "stable",
      goal: 80,
      endorsements: 5,
      color: "purple",
    },
    {
      id: 4,
      name: "SQL",
      level: 70,
      category: "Database",
      icon: Database,
      lastUpdated: "5 days ago",
      trending: "up",
      goal: 85,
      endorsements: 10,
      color: "green",
    },
    {
      id: 5,
      name: "Python",
      level: 85,
      category: "Programming",
      icon: Code2,
      lastUpdated: "1 day ago",
      trending: "up",
      goal: 95,
      endorsements: 15,
      color: "indigo",
    },
    {
      id: 6,
      name: "Git",
      level: 78,
      category: "Tools",
      icon: Code2,
      lastUpdated: "4 days ago",
      trending: "stable",
      goal: 85,
      endorsements: 7,
      color: "orange",
    },
  ]);

  const [activeCategory, setActiveCategory] = useState("All");
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);
  const [newSkill, setNewSkill] = useState({
    name: "",
    level: 50,
    category: "Programming",
    goal: 80,
  });

  const categories = ["All", "Programming", "Frontend", "Database", "Computer Science", "Tools"];

  const colorSchemes = {
    yellow: {
      bg: "bg-yellow-50",
      bar: "bg-yellow-500",
      text: "text-yellow-600",
      border: "border-yellow-200",
    },
    blue: {
      bg: "bg-blue-50",
      bar: "bg-blue-500",
      text: "text-blue-600",
      border: "border-blue-200",
    },
    purple: {
      bg: "bg-purple-50",
      bar: "bg-purple-500",
      text: "text-purple-600",
      border: "border-purple-200",
    },
    green: {
      bg: "bg-green-50",
      bar: "bg-green-500",
      text: "text-green-600",
      border: "border-green-200",
    },
    indigo: {
      bg: "bg-indigo-50",
      bar: "bg-indigo-500",
      text: "text-indigo-600",
      border: "border-indigo-200",
    },
    orange: {
      bg: "bg-orange-50",
      bar: "bg-orange-500",
      text: "text-orange-600",
      border: "border-orange-200",
    },
  };

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const getSkillLevel = (level) => {
    if (level >= 80) return { label: "Expert", color: "text-green-600" };
    if (level >= 60) return { label: "Advanced", color: "text-blue-600" };
    if (level >= 40) return { label: "Intermediate", color: "text-yellow-600" };
    return { label: "Beginner", color: "text-gray-600" };
  };

  const getAverageSkillLevel = () => {
    const total = filteredSkills.reduce((sum, skill) => sum + skill.level, 0);
    return Math.round(total / filteredSkills.length);
  };

  const handleAddSkill = () => {
    if (!newSkill.name.trim()) return;

    const skill = {
      id: Date.now(),
      ...newSkill,
      icon: Code2,
      lastUpdated: "Just now",
      trending: "stable",
      endorsements: 0,
      color: "blue",
    };

    setSkills([...skills, skill]);
    setNewSkill({ name: "", level: 50, category: "Programming", goal: 80 });
    setShowAddModal(false);
  };

  const handleDeleteSkill = (id) => {
    if (window.confirm("Are you sure you want to delete this skill?")) {
      setSkills(skills.filter((skill) => skill.id !== id));
    }
  };

  const handleUpdateSkill = (id, newLevel) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id
          ? { ...skill, level: newLevel, lastUpdated: "Just now" }
          : skill
      )
    );
    setEditingSkill(null);
  };

  const SkillCard = ({ skill }) => {
    const Icon = skill.icon;
    const skillLevelInfo = getSkillLevel(skill.level);
    const colorScheme = colorSchemes[skill.color];
    const progressToGoal = Math.min((skill.level / skill.goal) * 100, 100);
    const isEditing = editingSkill === skill.id;
    const [tempLevel, setTempLevel] = useState(skill.level);

    return (
      <div
        className={`group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border ${colorScheme.border} hover:border-opacity-50`}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`${colorScheme.bg} w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
            >
              <Icon className={`w-6 h-6 ${colorScheme.text}`} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">{skill.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-500">{skill.category}</span>
                <span className="text-xs text-gray-300">•</span>
                <span className={`text-xs font-semibold ${skillLevelInfo.color}`}>
                  {skillLevelInfo.label}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => {
                setEditingSkill(skill.id);
                setTempLevel(skill.level);
              }}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              title="Edit skill level"
            >
              <Edit2 className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={() => handleDeleteSkill(skill.id)}
              className="p-1.5 hover:bg-red-50 rounded-lg transition-colors"
              title="Delete skill"
            >
              <Trash2 className="w-4 h-4 text-red-600" />
            </button>
          </div>
        </div>

        {/* Progress Section */}
        {isEditing ? (
          <div className="mb-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Adjust Level: {tempLevel}%
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleUpdateSkill(skill.id, tempLevel)}
                  className="p-1 bg-green-50 hover:bg-green-100 rounded transition-colors"
                >
                  <Check className="w-4 h-4 text-green-600" />
                </button>
                <button
                  onClick={() => setEditingSkill(null)}
                  className="p-1 bg-red-50 hover:bg-red-100 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={tempLevel}
              onChange={(e) => setTempLevel(parseInt(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, ${colorScheme.bar.replace('bg-', '')} 0%, ${colorScheme.bar.replace('bg-', '')} ${tempLevel}%, #e5e7eb ${tempLevel}%, #e5e7eb 100%)`,
              }}
            />
          </div>
        ) : (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                Current Level
              </span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-800">
                  {skill.level}%
                </span>
                {skill.trending === "up" && (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className={`${colorScheme.bar} h-3 rounded-full transition-all duration-1000 ease-out relative`}
                style={{ width: `${skill.level}%` }}
              >
                <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        )}

        {/* Goal Progress */}
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                Goal: {skill.goal}%
              </span>
            </div>
            <span className="text-xs font-semibold text-gray-800">
              {Math.round(progressToGoal)}% achieved
            </span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${progressToGoal}%` }}
            />
          </div>
        </div>

        {/* Footer Info */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{skill.lastUpdated}</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="w-3 h-3" />
            <span>{skill.endorsements} endorsements</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Skill Progress Tracker
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Track and improve your technical skills
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-colors shadow-md"
        >
          <Plus className="w-5 h-5" />
          Add New Skill
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-100">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-600">Total Skills</span>
          </div>
          <p className="text-3xl font-bold text-gray-800">{skills.length}</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-white p-4 rounded-xl border border-green-100">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-600">Average Level</span>
          </div>
          <p className="text-3xl font-bold text-gray-800">
            {getAverageSkillLevel()}%
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-xl border border-purple-100">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-gray-600">Expert Skills</span>
          </div>
          <p className="text-3xl font-bold text-gray-800">
            {skills.filter((s) => s.level >= 80).length}
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-white p-4 rounded-xl border border-orange-100">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-gray-600">In Progress</span>
          </div>
          <p className="text-3xl font-bold text-gray-800">
            {skills.filter((s) => s.level < s.goal).length}
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              activeCategory === category
                ? "bg-primary text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            {category}
            {category !== "All" && (
              <span className="ml-2 text-xs opacity-75">
                ({skills.filter((s) => s.category === category).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>

      {/* Empty State */}
      {filteredSkills.length === 0 && (
        <div className="text-center py-12">
          <Brain className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            No skills in this category
          </h3>
          <p className="text-sm text-gray-500">
            Try selecting a different category or add a new skill
          </p>
        </div>
      )}

      {/* Add Skill Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Add New Skill
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Skill Name
                </label>
                <input
                  type="text"
                  value={newSkill.name}
                  onChange={(e) =>
                    setNewSkill({ ...newSkill, name: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., TypeScript"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={newSkill.category}
                  onChange={(e) =>
                    setNewSkill({ ...newSkill, category: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {categories.filter((c) => c !== "All").map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Level: {newSkill.level}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={newSkill.level}
                  onChange={(e) =>
                    setNewSkill({ ...newSkill, level: parseInt(e.target.value) })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Goal: {newSkill.goal}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={newSkill.goal}
                  onChange={(e) =>
                    setNewSkill({ ...newSkill, goal: parseInt(e.target.value) })
                  }
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleAddSkill}
                className="flex-1 bg-primary text-white px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Add Skill
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}