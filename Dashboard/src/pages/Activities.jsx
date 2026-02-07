import { useState } from "react";
import {
  Users,
  Heart,
  Music,
  Mic,
  Trophy,
  Calendar,
  MapPin,
  Award,
  Target,
  TrendingUp,
  Star,
  Camera,
  Palette,
  Dumbbell,
  BookOpen,
  Globe,
  Plus,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Clock,
  CheckCircle2,
  Flag,
  Sparkles,
} from "lucide-react";

export default function Activities() {
  const [activities, setActivities] = useState([
    {
      id: 1,
      title: "NSS Volunteer – Blood Donation Camp",
      organization: "National Service Scheme (NSS)",
      category: "Social Service",
      role: "Lead Volunteer",
      duration: "Sep 2023 - Present",
      hours: 120,
      status: "Ongoing",
      location: "University Campus & Community Centers",
      description:
        "Organized and coordinated multiple blood donation camps, managing volunteer teams and coordinating with hospitals to ensure smooth operations",
      achievements: [
        "Organized 5 successful blood donation camps",
        "Collected 300+ units of blood",
        "Led team of 25 volunteers",
        "Received NSS Excellence Award 2024",
      ],
      skills: ["Leadership", "Event Management", "Team Coordination", "Healthcare Awareness"],
      impact: "Helped save lives of 900+ patients through blood donations",
      images: 12,
      certificate: true,
      featured: true,
      icon: Heart,
      color: "red",
      startDate: "Sep 2023",
      upcomingEvent: "Blood Donation Camp - March 15, 2025",
      participants: 150,
    },
    {
      id: 2,
      title: "NCC Annual Training Camp",
      organization: "National Cadet Corps (NCC)",
      category: "Defense & Discipline",
      role: "Cadet Sergeant",
      duration: "Aug 2022 - Dec 2024",
      hours: 240,
      status: "Completed",
      location: "NCC Training Ground, Delhi",
      description:
        "Participated in intensive military training programs including drill, weapon training, adventure activities, and leadership development",
      achievements: [
        "Awarded Best Cadet Award 2023",
        "Participated in Republic Day Parade",
        "Completed Advanced Leadership Course",
        "Led platoon in Annual Camp",
      ],
      skills: ["Discipline", "Physical Fitness", "Leadership", "Teamwork", "Adventure Sports"],
      impact: "Developed strong leadership and discipline skills, inspired 50+ juniors",
      images: 25,
      certificate: true,
      featured: true,
      icon: Flag,
      color: "green",
      startDate: "Aug 2022",
      completionDate: "Dec 2024",
      grade: "A+ Certificate",
      participants: 200,
    },
    {
      id: 3,
      title: "College Cultural Fest Organizer",
      organization: "Annual Cultural Festival - TechFest 2024",
      category: "Cultural & Arts",
      role: "Core Organizing Committee Member",
      duration: "Jan 2024 - Mar 2024",
      hours: 80,
      status: "Completed",
      location: "University Main Auditorium",
      description:
        "Part of the core team responsible for organizing the annual cultural festival with 3000+ participants, managing events, sponsorships, and logistics",
      achievements: [
        "Managed 15+ cultural events",
        "Secured sponsorships worth ₹5 lakhs",
        "Coordinated with 50+ performers",
        "Event attracted 3000+ participants",
      ],
      skills: ["Event Planning", "Sponsorship Management", "Budgeting", "Marketing", "Coordination"],
      impact: "Successfully organized university's largest cultural fest with 3000+ attendees",
      images: 45,
      certificate: true,
      featured: false,
      icon: Music,
      color: "purple",
      startDate: "Jan 2024",
      completionDate: "Mar 2024",
      budget: "₹8 lakhs",
      participants: 3000,
    },
    {
      id: 4,
      title: "College Debate Society - President",
      organization: "Debate & Literary Society",
      category: "Literary & Debate",
      role: "President",
      duration: "Jul 2023 - Present",
      hours: 150,
      status: "Ongoing",
      location: "University Campus",
      description:
        "Leading the debate society, organizing inter-college competitions, conducting weekly sessions, and representing university at national level debates",
      achievements: [
        "Won 8 inter-college debate competitions",
        "Organized National Debate Championship",
        "Increased society membership by 200%",
        "Best Speaker Award at State Level",
      ],
      skills: ["Public Speaking", "Critical Thinking", "Research", "Leadership", "Communication"],
      impact: "Mentored 100+ students in public speaking and debate",
      images: 18,
      certificate: false,
      featured: true,
      icon: Mic,
      color: "blue",
      startDate: "Jul 2023",
      upcomingEvent: "Inter-University Debate - Feb 20, 2025",
      participants: 80,
    },
    {
      id: 5,
      title: "Sports Committee - Cricket Team Captain",
      organization: "University Sports Committee",
      category: "Sports & Fitness",
      role: "Team Captain",
      duration: "Aug 2022 - Present",
      hours: 200,
      status: "Ongoing",
      location: "University Sports Complex",
      description:
        "Leading the university cricket team in inter-college tournaments, organizing practice sessions, and promoting sports culture on campus",
      achievements: [
        "Won Inter-University Cricket Championship 2024",
        "Best Captain Award",
        "Scored 450+ runs in tournaments",
        "Built team from 15 to 30 active players",
      ],
      skills: ["Teamwork", "Strategy", "Physical Fitness", "Leadership", "Sportsmanship"],
      impact: "Led team to championship victory, promoted sports participation",
      images: 30,
      certificate: true,
      featured: false,
      icon: Dumbbell,
      color: "orange",
      startDate: "Aug 2022",
      upcomingEvent: "State Level Tournament - Mar 10, 2025",
      participants: 30,
    },
    {
      id: 6,
      title: "Environmental Club - Green Campus Initiative",
      organization: "Eco Club",
      category: "Environment & Sustainability",
      role: "Co-Founder & Coordinator",
      duration: "Jan 2023 - Present",
      hours: 100,
      status: "Ongoing",
      location: "University Campus & Local Community",
      description:
        "Co-founded environmental club focused on sustainability, organized tree plantation drives, waste management campaigns, and awareness programs",
      achievements: [
        "Planted 500+ trees on campus",
        "Reduced plastic usage by 40%",
        "Organized 10+ awareness campaigns",
        "Implemented campus-wide recycling program",
      ],
      skills: ["Environmental Awareness", "Project Management", "Community Engagement", "Advocacy"],
      impact: "Made campus 40% more sustainable, planted 500+ trees",
      images: 22,
      certificate: false,
      featured: true,
      icon: Globe,
      color: "teal",
      startDate: "Jan 2023",
      upcomingEvent: "Tree Plantation Drive - Feb 25, 2025",
      participants: 60,
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCard, setExpandedCard] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const categoryColors = {
    "Social Service": { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" },
    "Defense & Discipline": { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
    "Cultural & Arts": { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
    "Literary & Debate": { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    "Sports & Fitness": { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
    "Environment & Sustainability": { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200" },
  };

  const statusConfig = {
    Ongoing: { color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" },
    Completed: { color: "text-green-600", bg: "bg-green-50", border: "border-green-200" },
  };

  const categories = [
    "All",
    "Social Service",
    "Defense & Discipline",
    "Cultural & Arts",
    "Literary & Debate",
    "Sports & Fitness",
    "Environment & Sustainability",
  ];

  const filteredActivities = activities
    .filter((activity) =>
      activeFilter === "All" ? true : activity.category === activeFilter
    )
    .filter(
      (activity) =>
        activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const stats = {
    total: activities.length,
    ongoing: activities.filter((a) => a.status === "Ongoing").length,
    completed: activities.filter((a) => a.status === "Completed").length,
    totalHours: activities.reduce((sum, a) => sum + a.hours, 0),
  };

  const ActivityCard = ({ activity }) => {
    const isExpanded = expandedCard === activity.id;
    const Icon = activity.icon;
    const categoryStyle = categoryColors[activity.category];
    const statusStyle = statusConfig[activity.status];

    return (
      <div
        className={`group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 ${
          activity.featured
            ? "border-yellow-300 bg-gradient-to-br from-yellow-50/30 to-white"
            : "border-gray-200 hover:border-primary/30"
        } overflow-hidden`}
      >
        {/* Featured Banner */}
        {activity.featured && (
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 text-xs font-bold flex items-center gap-2">
            <Star className="w-4 h-4 fill-white" />
            FEATURED ACTIVITY
          </div>
        )}

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div
              className={`${categoryStyle.bg} w-14 h-14 rounded-xl flex items-center justify-center border ${categoryStyle.border} group-hover:scale-110 transition-transform flex-shrink-0`}
            >
              <Icon className={`w-7 h-7 ${categoryStyle.text}`} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-gray-800 group-hover:text-primary transition-colors mb-1">
                {activity.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {activity.organization}
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className={`px-3 py-1 ${categoryStyle.bg} ${categoryStyle.text} rounded-full text-xs font-semibold border ${categoryStyle.border}`}
                >
                  {activity.category}
                </span>
                <span
                  className={`px-3 py-1 ${statusStyle.bg} ${statusStyle.color} rounded-full text-xs font-semibold border ${statusStyle.border}`}
                >
                  {activity.status}
                </span>
              </div>
            </div>
          </div>

          {/* Role & Duration */}
          <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-900">
                  {activity.role}
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs text-blue-700">
                <Clock className="w-3 h-3" />
                {activity.hours} hours
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-blue-700">
              <Calendar className="w-3 h-3" />
              {activity.duration}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700 mb-4 leading-relaxed line-clamp-3">
            {activity.description}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="w-4 h-4 text-gray-400" />
              <span>{activity.participants} participants</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Camera className="w-4 h-4 text-gray-400" />
              <span>{activity.images} photos</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="truncate">{activity.location}</span>
            </div>
            {activity.certificate && (
              <div className="flex items-center gap-2 text-sm text-green-600">
                <CheckCircle2 className="w-4 h-4" />
                <span>Certified</span>
              </div>
            )}
          </div>

          {/* Upcoming Event */}
          {activity.upcomingEvent && activity.status === "Ongoing" && (
            <div className="mb-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-semibold text-orange-900">
                  UPCOMING EVENT
                </span>
              </div>
              <p className="text-sm text-orange-800 font-medium">
                {activity.upcomingEvent}
              </p>
            </div>
          )}

          {/* Expandable Section */}
          {isExpanded && (
            <div className="space-y-4 pt-4 border-t border-gray-200 animate-fadeIn">
              {/* Achievements */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {activity.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Star className="w-3 h-3 text-yellow-600 fill-yellow-600" />
                      </div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Developed */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Skills Developed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activity.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full font-medium border border-purple-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <h4 className="text-sm font-semibold text-green-900 mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  Impact Created
                </h4>
                <p className="text-sm text-green-800">{activity.impact}</p>
              </div>

              {/* Additional Info */}
              {(activity.grade || activity.budget) && (
                <div className="grid grid-cols-2 gap-4">
                  {activity.grade && (
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Grade/Rating</p>
                      <p className="text-sm font-bold text-blue-800">
                        {activity.grade}
                      </p>
                    </div>
                  )}
                  {activity.budget && (
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Budget Managed</p>
                      <p className="text-sm font-bold text-purple-800">
                        {activity.budget}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Timeline */}
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="text-xs font-semibold text-gray-700 mb-2">
                  TIMELINE
                </h4>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>Started: {activity.startDate}</p>
                  {activity.completionDate && (
                    <p>Completed: {activity.completionDate}</p>
                  )}
                  {!activity.completionDate && activity.status === "Ongoing" && (
                    <p className="text-blue-600 font-medium">Currently Active</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-3">
              {activity.certificate && (
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <Award className="w-4 h-4" />
                  <span>Certificate</span>
                </div>
              )}
            </div>

            <button
              onClick={() =>
                setExpandedCard(isExpanded ? null : activity.id)
              }
              className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
            >
              {isExpanded ? "Show Less" : "View Details"}
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
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
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            Extra-Curricular Activities
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Showcase your leadership, community service, and diverse interests
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors shadow-md"
        >
          <Plus className="w-5 h-5" />
          Add Activity
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Total Activities</span>
            <Users className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-3xl font-bold text-gray-800">{stats.total}</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-xl border border-green-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Ongoing</span>
            <Activity className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-gray-800">{stats.ongoing}</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-xl border border-purple-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Completed</span>
            <CheckCircle2 className="w-5 h-5 text-purple-600" />
          </div>
          <p className="text-3xl font-bold text-gray-800">{stats.completed}</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-white p-5 rounded-xl border border-orange-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Total Hours</span>
            <Clock className="w-5 h-5 text-orange-600" />
          </div>
          <p className="text-3xl font-bold text-gray-800">{stats.totalHours}</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search activities by title, organization, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              activeFilter === category
                ? "bg-primary text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            {category}
            <span className="ml-2 text-xs opacity-75">
              (
              {category === "All"
                ? activities.length
                : activities.filter((a) => a.category === category).length}
              )
            </span>
          </button>
        ))}
      </div>

      {/* Activities Grid */}
      {filteredActivities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Users className="w-20 h-20 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No activities found
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            {searchQuery
              ? "Try adjusting your search criteria"
              : "Start adding your extra-curricular activities"}
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Add Your First Activity
          </button>
        </div>
      )}
    </div>
  );
}