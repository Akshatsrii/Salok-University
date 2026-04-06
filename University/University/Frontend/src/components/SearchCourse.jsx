import { useState, useEffect } from "react";

export default function SearchCourse() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const levels = ["All", "Undergraduate", "Postgraduate", "Diploma", "Certificate"];
  const departments = ["All", "Engineering", "Science", "Arts", "Commerce", "Law", "Medicine"];

  const popularCourses = [
    { name: "Computer Science", icon: "💻", level: "Undergraduate", department: "Engineering" },
    { name: "Mechanical Engineering", icon: "⚙️", level: "Undergraduate", department: "Engineering" },
    { name: "Business Administration", icon: "💼", level: "Postgraduate", department: "Commerce" },
    { name: "Data Science", icon: "📊", level: "Postgraduate", department: "Science" },
    { name: "Artificial Intelligence", icon: "🤖", level: "Postgraduate", department: "Engineering" },
    { name: "English Literature", icon: "📚", level: "Undergraduate", department: "Arts" },
    { name: "Civil Engineering", icon: "🏗️", level: "Undergraduate", department: "Engineering" },
    { name: "Psychology", icon: "🧠", level: "Undergraduate", department: "Science" },
  ];

  const filteredSuggestions = popularCourses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    const matchesDepartment = selectedDepartment === "All" || course.department === selectedDepartment;
    return matchesSearch && matchesLevel && matchesDepartment;
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate search
    setTimeout(() => {
      setIsSearching(false);
      alert(`Searching for: ${searchTerm}\nLevel: ${selectedLevel}\nDepartment: ${selectedDepartment}`);
    }, 1000);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.search-container')) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 py-16 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_40px)]"></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <span className="text-white/90 uppercase tracking-wider font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              🎓 Admissions Open
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Find Your Perfect Course
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Explore our wide range of programs and take the first step towards your dream career
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="search-container relative">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            {/* Main Search Bar */}
            <div className="relative mb-6">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                  🔍
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder="Search for courses, programs, or keywords..."
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors duration-300"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchTerm("");
                      setShowSuggestions(false);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Suggestions Dropdown */}
              {showSuggestions && searchTerm && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 max-h-80 overflow-y-auto z-20">
                  <div className="p-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                      Suggested Courses
                    </div>
                    {filteredSuggestions.map((course, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          setSearchTerm(course.name);
                          setShowSuggestions(false);
                        }}
                        className="w-full text-left px-3 py-3 rounded-lg hover:bg-orange-50 transition-colors duration-200 flex items-center gap-3 group"
                      >
                        <span className="text-2xl transform group-hover:scale-110 transition-transform duration-200">
                          {course.icon}
                        </span>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                            {course.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {course.level} • {course.department}
                          </div>
                        </div>
                        <span className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {/* Level Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Program Level
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors duration-300 cursor-pointer"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* Department Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Department
                </label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 transition-colors duration-300 cursor-pointer"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              disabled={isSearching}
              className="w-full group relative px-8 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-white flex items-center justify-center gap-3">
                {isSearching ? (
                  <>
                    <span className="animate-spin text-xl">⚙️</span>
                    Searching...
                  </>
                ) : (
                  <>
                    Search Courses
                    <span className="text-xl transform group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </>
                )}
              </span>
            </button>
          </div>
        </form>

        {/* Popular Searches */}
        <div className="mt-8 text-center">
          <p className="text-white/90 text-sm font-semibold mb-4">Popular Searches:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {popularCourses.slice(0, 5).map((course, index) => (
              <button
                key={index}
                onClick={() => {
                  setSearchTerm(course.name);
                  setShowSuggestions(false);
                }}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-105 flex items-center gap-2"
              >
                <span>{course.icon}</span>
                <span>{course.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "100+", label: "Courses", icon: "📚" },
            { number: "50+", label: "Departments", icon: "🏛️" },
            { number: "10K+", label: "Students", icon: "🎓" },
            { number: "95%", label: "Placement", icon: "💼" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-white/80 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}