import { useState } from 'react';
import { 
  FileText, 
  Clock, 
  Calendar, 
  TrendingUp, 
  Award, 
  Play, 
  CheckCircle, 
  AlertCircle,
  BarChart3,
  Target,
  Users,
  ChevronRight
} from 'lucide-react';

export default function MockTests() {
  const [selectedTab, setSelectedTab] = useState('all');
  
  const tests = [
    {
      id: 1,
      name: "DSA Mock Test",
      subject: "Data Structures & Algorithms",
      score: 72,
      totalMarks: 100,
      duration: 60,
      attemptedOn: "2026-02-05",
      status: "completed",
      difficulty: "medium",
      rank: 45,
      totalParticipants: 230,
      correctAnswers: 18,
      totalQuestions: 25,
      timeSpent: 58,
      topics: ["Arrays", "Trees", "Graphs"],
      averageScore: 65
    },
    {
      id: 2,
      name: "Aptitude Test",
      subject: "Quantitative & Logical Reasoning",
      score: 80,
      totalMarks: 100,
      duration: 45,
      attemptedOn: "2026-02-03",
      status: "completed",
      difficulty: "easy",
      rank: 28,
      totalParticipants: 180,
      correctAnswers: 32,
      totalQuestions: 40,
      timeSpent: 42,
      topics: ["Arithmetic", "Logic", "Patterns"],
      averageScore: 68
    },
    {
      id: 3,
      name: "DBMS Fundamentals",
      subject: "Database Management Systems",
      score: null,
      totalMarks: 100,
      duration: 60,
      scheduledFor: "2026-02-09",
      status: "upcoming",
      difficulty: "hard",
      topics: ["SQL", "Normalization", "Transactions"],
      totalQuestions: 30
    },
    {
      id: 4,
      name: "Operating Systems",
      subject: "OS Concepts",
      score: null,
      totalMarks: 100,
      duration: 75,
      scheduledFor: "2026-02-12",
      status: "upcoming",
      difficulty: "medium",
      topics: ["Processes", "Memory", "Scheduling"],
      totalQuestions: 35
    }
  ];

  const getStatusBadge = (status) => {
    const styles = {
      completed: "bg-green-100 text-green-700 border-green-200",
      upcoming: "bg-blue-100 text-blue-700 border-blue-200",
      ongoing: "bg-yellow-100 text-yellow-700 border-yellow-200"
    };
    const icons = {
      completed: <CheckCircle className="w-3.5 h-3.5" />,
      upcoming: <Clock className="w-3.5 h-3.5" />,
      ongoing: <Play className="w-3.5 h-3.5" />
    };
    return (
      <span className={`px-2.5 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${styles[status]}`}>
        {icons[status]}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getDifficultyBadge = (difficulty) => {
    const styles = {
      easy: "bg-green-50 text-green-700 border-green-200",
      medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
      hard: "bg-red-50 text-red-700 border-red-200"
    };
    return (
      <span className={`px-2 py-0.5 rounded text-xs font-medium border ${styles[difficulty]}`}>
        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
      </span>
    );
  };

  const getScoreColor = (score, average) => {
    if (score >= 80) return "text-green-600";
    if (score >= average) return "text-blue-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getProgressColor = (score) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-blue-500";
    if (score >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  const filteredTests = tests.filter(test => {
    if (selectedTab === 'completed') return test.status === 'completed';
    if (selectedTab === 'upcoming') return test.status === 'upcoming';
    return true;
  });

  const stats = {
    total: tests.length,
    completed: tests.filter(t => t.status === 'completed').length,
    upcoming: tests.filter(t => t.status === 'upcoming').length,
    averageScore: tests.filter(t => t.score).reduce((sum, t) => sum + t.score, 0) / 
                  tests.filter(t => t.score).length || 0
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <FileText className="w-7 h-7 text-gray-700" />
          <h1 className="text-2xl font-bold">Mock Tests</h1>
        </div>
        <p className="text-gray-600">Track your performance and prepare for upcoming tests</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Tests</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
            <FileText className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Upcoming</p>
              <p className="text-2xl font-bold text-blue-600">{stats.upcoming}</p>
            </div>
            <Clock className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Score</p>
              <p className="text-2xl font-bold text-purple-600">
                {stats.averageScore.toFixed(0)}%
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        {['all', 'completed', 'upcoming'].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 font-medium capitalize transition-colors ${
              selectedTab === tab
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab}
            <span className="ml-2 text-xs text-gray-500">
              ({tab === 'all' ? tests.length : 
                tab === 'completed' ? stats.completed : stats.upcoming})
            </span>
          </button>
        ))}
      </div>

      {/* Tests List */}
      <div className="space-y-4">
        {filteredTests.map((test) => (
          <div 
            key={test.id} 
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden"
          >
            <div className="p-5">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{test.name}</h3>
                    {getStatusBadge(test.status)}
                    {getDifficultyBadge(test.difficulty)}
                  </div>
                  <p className="text-sm text-gray-600">{test.subject}</p>
                </div>
                
                {test.status === 'completed' && (
                  <div className="text-right">
                    <div className={`text-3xl font-bold ${getScoreColor(test.score, test.averageScore)}`}>
                      {test.score}%
                    </div>
                    <p className="text-xs text-gray-500">
                      Avg: {test.averageScore}%
                    </p>
                  </div>
                )}
              </div>

              {/* Progress Bar for Completed Tests */}
              {test.status === 'completed' && (
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${getProgressColor(test.score)}`}
                      style={{ width: `${test.score}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Test Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">
                    {test.duration} mins
                    {test.status === 'completed' && test.timeSpent && 
                      ` (${test.timeSpent})`}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">
                    {test.status === 'completed' 
                      ? new Date(test.attemptedOn).toLocaleDateString()
                      : new Date(test.scheduledFor).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Target className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">
                    {test.status === 'completed' 
                      ? `${test.correctAnswers}/${test.totalQuestions}`
                      : `${test.totalQuestions} questions`}
                  </span>
                </div>
                
                {test.status === 'completed' && (
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">
                      Rank: {test.rank}/{test.totalParticipants}
                    </span>
                  </div>
                )}
              </div>

              {/* Topics */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {test.topics.map((topic, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                {test.status === 'completed' ? (
                  <>
                    <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      View Analysis
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Retake
                    </button>
                  </>
                ) : (
                  <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Start Test
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Performance Indicator for Completed Tests */}
            {test.status === 'completed' && (
              <div className={`px-5 py-2 text-xs flex items-center gap-2 ${
                test.score >= test.averageScore 
                  ? 'bg-green-50 text-green-700' 
                  : 'bg-yellow-50 text-yellow-700'
              }`}>
                {test.score >= test.averageScore ? (
                  <>
                    <Award className="w-4 h-4" />
                    Above average performance! Keep it up.
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-4 h-4" />
                    Below average. Review topics and try again.
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTests.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <p className="text-lg font-medium text-gray-600">No tests found</p>
          <p className="text-sm text-gray-500">
            {selectedTab === 'completed' 
              ? "You haven't completed any tests yet"
              : "No upcoming tests scheduled"}
          </p>
        </div>
      )}
    </div>
  );
}