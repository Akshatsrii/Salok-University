import { useState } from "react";
import {
  BookOpen,
  Clock,
  Calendar,
  Award,
  TrendingUp,
  Play,
  CheckCircle2,
  PlayCircle,
  Download,
  ExternalLink,
  Star,
  Users,
  BarChart3,
  Plus,
  Filter,
  Search,
  Target,
  Video,
  FileText,
  Code2,
  Globe,
  ChevronDown,
  ChevronUp,
  Pause,
} from "lucide-react";

export default function Courses() {
  const [courses] = useState([
    {
      id: 1,
      title: "Data Structures & Algorithms",
      platform: "Coursera",
      instructor: "Dr. Robert Sedgewick",
      institution: "Princeton University",
      status: "Completed",
      progress: 100,
      enrollDate: "Sep 2024",
      completionDate: "Dec 2024",
      duration: "12 weeks",
      category: "Computer Science",
      level: "Advanced",
      rating: 4.8,
      studentsEnrolled: 250000,
      certificate: true,
      certificateUrl: "https://coursera.org/cert/xyz123",
      description:
        "Comprehensive course covering fundamental data structures and algorithms",
      skills: ["Arrays", "Trees", "Graphs", "DP"],
      modules: [
        { name: "Intro", completed: true },
        { name: "Sorting", completed: true },
      ],
      assignments: { total: 8, completed: 8 },
      quizzes: { total: 12, completed: 12 },
      finalGrade: "98%",
      featured: true,
      courseUrl: "https://coursera.org/learn/algorithms",
    },
  ]);

  const [expandedCard, setExpandedCard] = useState(null);

  const CourseCard = ({ course }) => {
    const isExpanded = expandedCard === course.id;

    return (
      <div className="bg-white rounded-xl shadow-md border p-6">
        <h3 className="font-bold text-lg">{course.title}</h3>

        {isExpanded && (
          <div className="space-y-4 mt-4 border-t pt-4">

            {/* ✅ FIX 1: Certificate link */}
            {course.certificate && course.certificateUrl && (
              <a
                href={course.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-yellow-50 border-2 border-yellow-300 rounded-lg"
              >
                <Award className="w-5 h-5 text-yellow-600" />
                <span className="font-semibold text-yellow-800">
                  View Certificate
                </span>
                <Download className="w-4 h-4 text-yellow-600" />
              </a>
            )}

            {/* ✅ FIX 2: Course link */}
            <a
              href={course.courseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm text-primary font-medium"
            >
              <Globe className="w-4 h-4" />
              Visit Course Page
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}

        <button
          onClick={() =>
            setExpandedCard(isExpanded ? null : course.id)
          }
          className="mt-4 text-primary text-sm font-medium flex items-center gap-1"
        >
          {isExpanded ? "Show Less" : "View Details"}
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <BookOpen className="w-8 h-8 text-primary" />
        My Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
