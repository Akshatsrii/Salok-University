import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart3,
  Folder,
  Trophy,
  BookOpen,
  Code2,
  Users,
  Bell,
  ClipboardCheck,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Activity,
  Zap,
  Star,
} from "lucide-react";

export default function HomeCards() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      title: "Skill Progress",
      desc: "Track technical & soft skills growth",
      stat: "Skills Tracked: 12",
      badge: "75% Complete",
      icon: <BarChart3 />,
      trend: "+12%",
      color: "orange",
      path: "/skills",
      progress: 75,
    },
    {
      title: "Active Projects",
      desc: "View ongoing & completed projects",
      stat: "Active: 3",
      badge: "2 New",
      icon: <Folder />,
      trend: "+2",
      color: "blue",
      path: "/projects",
      progress: 60,
    },
    {
      title: "Hackathons",
      desc: "Participated & upcoming hackathons",
      stat: "Participated: 8",
      badge: "Next: Feb 15",
      icon: <Trophy />,
      trend: "Winner x2",
      color: "yellow",
      path: "/hackathons",
      progress: 85,
    },
    {
      title: "My Courses",
      desc: "Enrolled & completed courses",
      stat: "Enrolled: 5",
      badge: "3 In Progress",
      icon: <BookOpen />,
      trend: "60% Done",
      color: "green",
      path: "/courses",
      progress: 60,
    },
    {
      title: "Coding Contests",
      desc: "LeetCode, CodeChef & Codeforces",
      stat: "Contests: 24",
      badge: "Rank: 1547",
      icon: <Code2 />,
      trend: "↑147",
      color: "purple",
      path: "/contests",
      progress: 70,
    },
    {
      title: "Extra-Curricular",
      desc: "NSS, NCC & cultural activities",
      stat: "Activities: 6",
      badge: "Active Member",
      icon: <Users />,
      trend: "4 Events",
      color: "pink",
      path: "/activities",
      progress: 55,
    },
    {
      title: "Notice",
      desc: "Live academic & event alerts",
      stat: "Unread: 7",
      badge: "3 Urgent",
      icon: <Bell />,
      trend: "New",
      color: "red",
      path: "/notifications",
      progress: 100,
      pulse: true,
    },
    {
      title: "Mock Tests",
      desc: "Practice tests & performance",
      stat: "Completed: 15",
      badge: "Avg: 82%",
      icon: <ClipboardCheck />,
      trend: "+5%",
      color: "cyan",
      path: "/mocktests",
      progress: 82,
    },
  ];

  const colorMap = {
    orange: {
      border: "group-hover:border-orange-500",
      shadow: "group-hover:shadow-orange-500/20",
      glow: "bg-orange-500",
      badge: "bg-orange-500/20 text-orange-400 border-orange-500/40",
      iconBg: "bg-orange-500/10 text-orange-500",
      iconHover: "group-hover:bg-orange-500 group-hover:text-black",
      button: "text-orange-500 group-hover:text-orange-400",
      progress: "bg-orange-500",
      gradient: "from-orange-500/20 via-orange-500/10 to-transparent",
    },
    blue: {
      border: "group-hover:border-blue-500",
      shadow: "group-hover:shadow-blue-500/20",
      glow: "bg-blue-500",
      badge: "bg-blue-500/20 text-blue-400 border-blue-500/40",
      iconBg: "bg-blue-500/10 text-blue-500",
      iconHover: "group-hover:bg-blue-500 group-hover:text-black",
      button: "text-blue-500 group-hover:text-blue-400",
      progress: "bg-blue-500",
      gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
    },
    yellow: {
      border: "group-hover:border-yellow-500",
      shadow: "group-hover:shadow-yellow-500/20",
      glow: "bg-yellow-500",
      badge: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
      iconBg: "bg-yellow-500/10 text-yellow-500",
      iconHover: "group-hover:bg-yellow-500 group-hover:text-black",
      button: "text-yellow-500 group-hover:text-yellow-400",
      progress: "bg-yellow-500",
      gradient: "from-yellow-500/20 via-yellow-500/10 to-transparent",
    },
    green: {
      border: "group-hover:border-green-500",
      shadow: "group-hover:shadow-green-500/20",
      glow: "bg-green-500",
      badge: "bg-green-500/20 text-green-400 border-green-500/40",
      iconBg: "bg-green-500/10 text-green-500",
      iconHover: "group-hover:bg-green-500 group-hover:text-black",
      button: "text-green-500 group-hover:text-green-400",
      progress: "bg-green-500",
      gradient: "from-green-500/20 via-green-500/10 to-transparent",
    },
    purple: {
      border: "group-hover:border-purple-500",
      shadow: "group-hover:shadow-purple-500/20",
      glow: "bg-purple-500",
      badge: "bg-purple-500/20 text-purple-400 border-purple-500/40",
      iconBg: "bg-purple-500/10 text-purple-500",
      iconHover: "group-hover:bg-purple-500 group-hover:text-black",
      button: "text-purple-500 group-hover:text-purple-400",
      progress: "bg-purple-500",
      gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
    },
    pink: {
      border: "group-hover:border-pink-500",
      shadow: "group-hover:shadow-pink-500/20",
      glow: "bg-pink-500",
      badge: "bg-pink-500/20 text-pink-400 border-pink-500/40",
      iconBg: "bg-pink-500/10 text-pink-500",
      iconHover: "group-hover:bg-pink-500 group-hover:text-black",
      button: "text-pink-500 group-hover:text-pink-400",
      progress: "bg-pink-500",
      gradient: "from-pink-500/20 via-pink-500/10 to-transparent",
    },
    red: {
      border: "group-hover:border-red-500",
      shadow: "group-hover:shadow-red-500/20",
      glow: "bg-red-500",
      badge: "bg-red-500/20 text-red-400 border-red-500/40",
      iconBg: "bg-red-500/10 text-red-500",
      iconHover: "group-hover:bg-red-500 group-hover:text-black",
      button: "text-red-500 group-hover:text-red-400",
      progress: "bg-red-500",
      gradient: "from-red-500/20 via-red-500/10 to-transparent",
    },
    cyan: {
      border: "group-hover:border-cyan-500",
      shadow: "group-hover:shadow-cyan-500/20",
      glow: "bg-cyan-500",
      badge: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
      iconBg: "bg-cyan-500/10 text-cyan-500",
      iconHover: "group-hover:bg-cyan-500 group-hover:text-black",
      button: "text-cyan-500 group-hover:text-cyan-400",
      progress: "bg-cyan-500",
      gradient: "from-cyan-500/20 via-cyan-500/10 to-transparent",
    },
  };

  const getQuickStats = () => {
    return [
      {
        label: "Total Activities",
        value: cards.reduce((sum, card) => {
          const num = parseInt(card.stat.match(/\d+/)?.[0] || 0);
          return sum + num;
        }, 0),
        icon: <Activity className="w-5 h-5" />,
        color: "text-orange-500",
      },
      {
        label: "Avg Progress",
        value: `${Math.round(
          cards.reduce((sum, card) => sum + (card.progress || 0), 0) / cards.length
        )}%`,
        icon: <TrendingUp className="w-5 h-5" />,
        color: "text-green-500",
      },
      {
        label: "Active Now",
        value: cards.filter((c) => c.badge.includes("New") || c.badge.includes("In Progress")).length,
        icon: <Zap className="w-5 h-5" />,
        color: "text-blue-500",
      },
      {
        label: "Achievements",
        value: "24",
        icon: <Star className="w-5 h-5" />,
        color: "text-yellow-500",
      },
    ];
  };

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Enhanced Header with Gradient */}
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-transparent blur-3xl -z-10" />
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 flex items-center gap-3">
              <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
                Dashboard Overview
              </span>
              <Sparkles className="text-orange-500 w-8 h-8 animate-pulse" />
            </h1>
            <p className="text-gray-400 text-lg">
              Track your academic journey and achievements
            </p>
          </div>

          {/* Quick Action */}
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 
            text-black px-6 py-3 rounded-xl font-medium transition-all duration-300 
            shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {getQuickStats().map((stat, index) => (
          <div
            key={index}
            className="bg-[#111111] border border-gray-800 rounded-xl p-4 
              hover:border-gray-700 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
              <div className={`${stat.color} opacity-60 group-hover:opacity-100 transition-opacity`}>
                {stat.icon}
              </div>
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {cards.map((card, index) => {
          const colors = colorMap[card.color];
          const isHovered = hoveredCard === index;

          return (
            <div
              key={index}
              onClick={() => navigate(card.path)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative bg-[#111111] rounded-2xl p-6 shadow-lg border border-gray-800 
                ${colors.border} ${colors.shadow}
                hover:-translate-y-2 transition-all duration-300 group cursor-pointer overflow-hidden`}
            >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Animated Glow Effect */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 ${colors.glow} 
                  opacity-0 group-hover:opacity-20 blur-3xl rounded-full 
                  -translate-y-16 translate-x-16 transition-all duration-500`}
              />

              {/* Pulse effect for notifications */}
              {card.pulse && (
                <div className="absolute top-2 right-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                </div>
              )}

              <div className="relative z-10">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`${colors.badge} px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-sm`}
                  >
                    {card.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    <TrendingUp className="w-3 h-3" />
                    <span className="font-medium">{card.trend}</span>
                  </div>
                </div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl 
                    ${colors.iconBg} ${colors.iconHover} mb-4 
                    group-hover:scale-110 group-hover:rotate-6 
                    transition-all duration-300 shadow-lg`}
                >
                  {card.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-400 mb-3 group-hover:text-gray-300 transition-colors line-clamp-2">
                  {card.desc}
                </p>

                <p className="text-sm font-medium text-gray-300 mb-4">
                  {card.stat}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Progress</span>
                    <span className="font-medium">{card.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${colors.progress} rounded-full transition-all duration-700 ease-out relative overflow-hidden`}
                      style={{
                        width: isHovered ? `${card.progress}%` : "0%",
                      }}
                    >
                      {/* Shimmer Effect */}
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        style={{
                          animation: "shimmer 2s infinite",
                          backgroundSize: "200% 100%",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* View Details Button */}
                <div
                  className={`${colors.button} text-sm font-medium 
                    flex items-center gap-2 group/btn transition-all duration-300`}
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover Shine Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)",
                  transform: isHovered ? "translateX(100%)" : "translateX(-100%)",
                  transition: "transform 1s ease-in-out",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Recent Activity Section */}
      <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Activity className="w-6 h-6 text-orange-500" />
            Recent Activity
          </h2>
          <button className="text-orange-500 text-sm font-medium hover:text-orange-400 transition-colors flex items-center gap-1">
            View All
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {[
            {
              action: "Completed React Advanced course",
              time: "2 hours ago",
              type: "course",
              color: "green",
            },
            {
              action: "Won 1st place in CodeChef contest",
              time: "1 day ago",
              type: "achievement",
              color: "yellow",
            },
            {
              action: "Added new skill: TypeScript",
              time: "2 days ago",
              type: "skill",
              color: "blue",
            },
            {
              action: "Joined upcoming hackathon",
              time: "3 days ago",
              type: "event",
              color: "purple",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-900/50 transition-colors group cursor-pointer"
            >
              <div
                className={`w-2 h-2 rounded-full bg-${activity.color}-500 group-hover:scale-125 transition-transform`}
              />
              <div className="flex-1">
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {activity.action}
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}