import { useState } from "react";
import {
  FolderKanban,
  Calendar,
  Users,
  Plus,
  Filter,
  Search,
  Clock,
  CheckCircle2,
  PlayCircle,
  PauseCircle,
  XCircle,
  Star,
  Github,
  Globe,
  TrendingUp,
  Award,
  Eye,
} from "lucide-react";

export default function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "Student Dashboard",
      status: "Active",
      description:
        "A comprehensive dashboard for students to track academic progress, assignments, and attendance",
      category: "Web Development",
      startDate: "Jan 2025",
      endDate: "Mar 2025",
      progress: 65,
      team: ["You", "Rahul", "Priya"],
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/student-dashboard",
      liveUrl: "https://student-dashboard.vercel.app",
      priority: "High",
      tasks: { total: 20, completed: 13 },
      featured: true,
    },
    {
      id: 2,
      title: "Hospital Management System",
      status: "Completed",
      description:
        "Full-stack hospital management system with patient records, appointments, and billing",
      category: "Full Stack",
      startDate: "Sep 2024",
      endDate: "Dec 2024",
      progress: 100,
      team: ["You", "Amit", "Sneha", "Karan"],
      technologies: ["Java", "Spring Boot", "MySQL", "Angular"],
      githubUrl: "https://github.com/yourusername/hospital-mgmt",
      liveUrl: null,
      priority: "Medium",
      tasks: { total: 45, completed: 45 },
      featured: true,
      awards: ["Best Project Award", "Innovation Prize"],
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const statusConfig = {
    Active: { icon: PlayCircle, color: "text-green-600", bg: "bg-green-50" },
    Completed: { icon: CheckCircle2, color: "text-blue-600", bg: "bg-blue-50" },
    "On Hold": { icon: PauseCircle, color: "text-yellow-600", bg: "bg-yellow-50" },
    Planning: { icon: Clock, color: "text-purple-600", bg: "bg-purple-50" },
    Cancelled: { icon: XCircle, color: "text-red-600", bg: "bg-red-50" },
  };

  const filteredProjects = projects.filter(
    (p) =>
      (activeFilter === "All" || p.status === activeFilter) &&
      (p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const ProjectCard = ({ project }) => {
    const StatusIcon = statusConfig[project.status]?.icon || FolderKanban;

    return (
      <div className="group bg-white rounded-xl shadow-md border hover:shadow-xl transition">
        {project.featured && (
          <div className="absolute top-3 right-3 bg-yellow-400 text-white px-3 py-1 text-xs rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 fill-white" />
            Featured
          </div>
        )}

        <div className="p-6">
          <h3 className="font-bold text-lg text-gray-800 mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            {project.description}
          </p>

          <div className="flex items-center gap-2 mb-3">
            <StatusIcon className="w-4 h-4 text-gray-600" />
            <span className="text-sm">{project.status}</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <Users className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{project.team.length} members</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">
              {project.startDate} – {project.endDate}
            </span>

            <div className="flex gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <Github className="w-4 h-4 text-gray-600" />
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <Globe className="w-4 h-4 text-gray-600" />
                </a>
              )}

              <button className="p-2 hover:bg-gray-100 rounded">
                <Eye className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          {project.awards && (
            <div className="mt-4 pt-4 border-t">
              {project.awards.map((award, i) => (
                <span
                  key={i}
                  className="inline-block mr-2 mb-2 bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded"
                >
                  <Award className="inline w-3 h-3 mr-1" />
                  {award}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <FolderKanban className="w-8 h-8 text-primary" />
          My Projects
        </h1>
        <button className="bg-primary text-white px-4 py-2 rounded flex items-center gap-2">
          <Plus className="w-4 h-4" /> New Project
        </button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <input
            className="pl-10 pr-4 py-2 border rounded w-full"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div
        className={`grid gap-6 ${
          viewMode === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        }`}
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
