import { useState } from "react";
import {
  Trophy,
  Calendar,
  MapPin,
  Users,
  Award,
  ExternalLink,
  Code2,
  Target,
  Clock,
  TrendingUp,
  Medal,
  Star,
  Plus,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  Github,
  Globe,
  Zap,
  Briefcase,
  DollarSign,
  CheckCircle2,   // ✅ FIX 1: missing import
} from "lucide-react";

export default function Hackathons() {
  const [hackathons, setHackathons] = useState([
    /* ---- DATA UNCHANGED ---- */
  ]);

  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCard, setExpandedCard] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  /* ---- LOGIC UNCHANGED ---- */

  const HackathonCard = ({ hackathon }) => {
    const isExpanded = expandedCard === hackathon.id;
    const StatusIcon = statusConfig[hackathon.status]?.icon || Trophy;
    const statusStyle = statusConfig[hackathon.status];
    const positionBadge = positionBadges[hackathon.position];

    return (
      <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 overflow-hidden">
        <div className="p-6">

          {/* EXPANDED SECTION */}
          {isExpanded && (
            <div className="space-y-4 pt-4 border-t border-gray-200">

              {/* PROJECT LINK */}
              {hackathon.projectUrl && (
                <a
                  href={hackathon.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium"
                >
                  <Github className="w-4 h-4" />
                  View Project on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          )}

          {/* FOOTER */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <button
              onClick={() =>
                setExpandedCard(isExpanded ? null : hackathon.id)
              }
              className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium"
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
      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-xl">
          <span className="text-sm text-gray-600">Completed</span>
          <CheckCircle2 className="w-5 h-5 text-green-600" />
        </div>
      </div>

      {/* LIST */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredHackathons.map((hackathon) => (
          <HackathonCard key={hackathon.id} hackathon={hackathon} />
        ))}
      </div>
    </div>
  );
}
