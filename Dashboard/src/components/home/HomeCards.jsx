import { Link } from "react-router-dom";
import { useState } from "react";
import {
  BarChart3,
  FolderKanban,
  Trophy,
  BookOpen,
  Code2,
  Users,
  Bell,
  ClipboardCheck,
  ArrowRight,
  TrendingUp,
  Clock,
  Star,
} from "lucide-react";

const cards = [
  {
    title: "Skill Progress",
    desc: "Track technical & soft skills growth",
    icon: BarChart3,
    link: "/skills",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "group-hover:border-blue-200",
    stats: { label: "Skills Tracked", value: "12" },
    badge: { text: "75% Complete", color: "bg-blue-100 text-blue-700" },
  },
  {
    title: "Active Projects",
    desc: "View ongoing & completed projects",
    icon: FolderKanban,
    link: "/projects",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    borderColor: "group-hover:border-green-200",
    stats: { label: "Active", value: "3" },
    badge: { text: "2 New", color: "bg-green-100 text-green-700" },
  },
  {
    title: "Hackathons",
    desc: "Participated & upcoming hackathons",
    icon: Trophy,
    link: "/hackathons",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "group-hover:border-purple-200",
    stats: { label: "Participated", value: "8" },
    badge: { text: "Next: Feb 15", color: "bg-purple-100 text-purple-700" },
  },
  {
    title: "My Courses",
    desc: "Enrolled & completed courses",
    icon: BookOpen,
    link: "/courses",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
    borderColor: "group-hover:border-indigo-200",
    stats: { label: "Enrolled", value: "5" },
    badge: { text: "3 In Progress", color: "bg-indigo-100 text-indigo-700" },
  },
  {
    title: "Coding Contests",
    desc: "LeetCode, CodeChef & Codeforces",
    icon: Code2,
    link: "/contests",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    borderColor: "group-hover:border-orange-200",
    stats: { label: "Contests", value: "24" },
    badge: { text: "Rank: 1547", color: "bg-orange-100 text-orange-700" },
  },
  {
    title: "Extra-Curricular",
    desc: "NSS, NCC & cultural activities",
    icon: Users,
    link: "/activities",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
    borderColor: "group-hover:border-pink-200",
    stats: { label: "Activities", value: "6" },
    badge: { text: "Active Member", color: "bg-pink-100 text-pink-700" },
  },
  {
    title: "Notifications",
    desc: "Live academic & event alerts",
    icon: Bell,
    link: "/notifications",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    borderColor: "group-hover:border-red-200",
    stats: { label: "Unread", value: "7" },
    badge: { text: "3 Urgent", color: "bg-red-100 text-red-700" },
    pulse: true,
  },
  {
    title: "Mock Tests",
    desc: "Practice tests & performance",
    icon: ClipboardCheck,
    link: "/mocktests",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
    borderColor: "group-hover:border-teal-200",
    stats: { label: "Completed", value: "15" },
    badge: { text: "Avg: 82%", color: "bg-teal-100 text-teal-700" },
  },
];

export default function HomeCards() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Quick Access</h2>
          <p className="text-sm text-gray-600 mt-1">
            Navigate to your key academic and co-curricular activities
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>Last updated: Just now</span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          const isHovered = hoveredCard === index;

          return (
            <Link
              key={index}
              to={card.link}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 ${card.borderColor} overflow-hidden`}
            >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${card.bgColor}`}
                style={{
                  background: `linear-gradient(135deg, ${card.bgColor} 0%, white 100%)`,
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Header with Icon and Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`${card.bgColor} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm`}
                  >
                    <Icon className={`w-7 h-7 ${card.iconColor}`} />
                    
                    {/* Pulse Effect for Notifications */}
                    {card.pulse && (
                      <span className="absolute top-0 right-0 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                      </span>
                    )}
                  </div>

                  {/* Badge */}
                  {card.badge && (
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${card.badge.color} transition-transform group-hover:scale-105`}
                    >
                      {card.badge.text}
                    </span>
                  )}
                </div>

                {/* Title and Description */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {card.desc}
                </p>

                {/* Stats */}
                {card.stats && (
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
                    <TrendingUp className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-500">
                      {card.stats.label}:
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {card.stats.value}
                    </span>
                  </div>
                )}

                {/* Action Link */}
                <div className="flex items-center justify-between">
                  <span className="text-primary text-sm font-semibold flex items-center gap-1">
                    View Details
                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isHovered ? "translate-x-1" : ""
                      }`}
                    />
                  </span>

                  {/* Quick Action Indicator */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div
                className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full ${card.bgColor} opacity-20 group-hover:scale-150 transition-transform duration-500`}
              />
            </Link>
          );
        })}
      </div>

      {/* Quick Stats Summary */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 border border-blue-100">
          <div className="flex items-center gap-2 mb-1">
            <Star className="w-4 h-4 text-blue-600" />
            <span className="text-xs text-gray-600">Overall Progress</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">78%</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-4 border border-green-100">
          <div className="flex items-center gap-2 mb-1">
            <FolderKanban className="w-4 h-4 text-green-600" />
            <span className="text-xs text-gray-600">Active Tasks</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">12</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-4 border border-purple-100">
          <div className="flex items-center gap-2 mb-1">
            <Trophy className="w-4 h-4 text-purple-600" />
            <span className="text-xs text-gray-600">Achievements</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">24</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 border border-orange-100">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-orange-600" />
            <span className="text-xs text-gray-600">Growth Rate</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">+15%</p>
        </div>
      </div>
    </div>
  );
}