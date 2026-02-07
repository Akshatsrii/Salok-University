import { useState } from "react";
import {
  Code2,
  Trophy,
  TrendingUp,
  Award,
  Target,
  Calendar,
  Zap,
  Star,
  Flame,
  BarChart3,
  ExternalLink,
  Medal,
  Clock,
  CheckCircle2,
  Plus,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  Activity,
  Crown,
} from "lucide-react";

export default function Contests() {
  const [platforms] = useState([
    {
      id: 1,
      name: "LeetCode",
      username: "coder_pro",
      profileUrl: "https://leetcode.com/coder_pro",
      logo: "LC",
      color: "orange",
      totalSolved: 320,
      easy: 150,
      medium: 130,
      hard: 40,
      rank: "Knight",
      globalRank: 45230,
      rating: 1847,
      maxRating: 1920,
      contestsParticipated: 28,
      badges: ["50 Days", "100 Problems", "Contest Master"],
      currentStreak: 15,
      maxStreak: 45,
      weakTopics: ["Dynamic Programming", "Graph Algorithms"],
      strongTopics: ["Arrays", "Strings", "Hash Tables"],
      recentActivity: "Solved 3 problems today",
      lastActive: "2 hours ago",
      achievements: [
        { name: "Problem Solver", icon: "🎯", description: "Solved 300+ problems" },
        { name: "Contest Participant", icon: "🏆", description: "Participated in 25+ contests" },
      ],
      weeklyGoal: { target: 10, completed: 7 },
      featured: true,
    },
  ]);

  const [expandedCard, setExpandedCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const colorSchemes = {
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      text: "text-orange-600",
      accent: "bg-orange-500",
    },
  };

  const filteredPlatforms = platforms.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const PlatformCard = ({ platform }) => {
    const isExpanded = expandedCard === platform.id;
    const colorScheme = colorSchemes[platform.color];

    return (
      <div className="bg-white rounded-xl shadow-md border hover:shadow-xl transition">
        {platform.featured && (
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 text-xs font-bold flex items-center gap-2">
            <Star className="w-4 h-4 fill-white" />
            TOP PERFORMER
          </div>
        )}

        <div className="p-6">
          <div className="flex justify-between mb-4">
            <div>
              <h3 className="font-bold text-xl">{platform.name}</h3>
              <p className="text-sm text-gray-600">@{platform.username}</p>
            </div>
            <div className="text-3xl font-bold">{platform.totalSolved}</div>
          </div>

          <div className="text-sm text-gray-600 mb-3">
            {platform.recentActivity}
          </div>

          {isExpanded && (
            <div className="space-y-3 pt-4 border-t">
              <a
                href={platform.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-primary text-white rounded-lg hover:bg-primary/90"
              >
                View Full Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

          <div className="flex justify-between items-center mt-4 pt-4 border-t">
            <a
              href={platform.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-primary flex items-center gap-1"
            >
              <ExternalLink className="w-3 h-3" />
              Profile
            </a>

            <button
              onClick={() =>
                setExpandedCard(isExpanded ? null : platform.id)
              }
              className="text-primary text-sm font-medium flex items-center gap-1"
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
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <Code2 className="w-8 h-8 text-primary" />
        Coding Contests & Practice
      </h1>

      <div className="relative">
        <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
        <input
          className="pl-10 pr-4 py-2 border rounded w-full"
          placeholder="Search platforms..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPlatforms.map((platform) => (
          <PlatformCard key={platform.id} platform={platform} />
        ))}
      </div>
    </div>
  );
}
