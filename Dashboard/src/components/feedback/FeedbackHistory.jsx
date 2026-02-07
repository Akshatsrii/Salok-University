import { useState } from 'react';

export default function FeedbackHistory() {
  // Sample data - replace with API call
  const [feedbackItems] = useState([
    {
      id: 1,
      type: 'Faculty Feedback',
      category: 'Teaching Quality',
      status: 'submitted',
      date: '2024-02-05',
      response: 'Thank you for your feedback. We have forwarded this to the concerned department.'
    },
    {
      id: 2,
      type: 'Syllabus Feedback',
      category: 'Course Content',
      status: 'reviewed',
      date: '2024-02-03',
      response: null
    },
    {
      id: 3,
      type: 'Infrastructure Feedback',
      category: 'Labs',
      status: 'pending',
      date: '2024-02-01',
      response: null
    },
    {
      id: 4,
      type: 'Faculty Feedback',
      category: 'Punctuality',
      status: 'submitted',
      date: '2024-01-28',
      response: null
    },
    {
      id: 5,
      type: 'Infrastructure Feedback',
      category: 'Library',
      status: 'resolved',
      date: '2024-01-25',
      response: 'The library hours have been extended as per your suggestion.'
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const statusConfig = {
    pending: {
      label: 'Pending',
      icon: '⏳',
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      dotColor: 'bg-yellow-500'
    },
    submitted: {
      label: 'Submitted',
      icon: '✓',
      color: 'bg-blue-100 text-blue-800 border-blue-200',
      dotColor: 'bg-blue-500'
    },
    reviewed: {
      label: 'Reviewed',
      icon: '👁',
      color: 'bg-purple-100 text-purple-800 border-purple-200',
      dotColor: 'bg-purple-500'
    },
    resolved: {
      label: 'Resolved',
      icon: '✔',
      color: 'bg-green-100 text-green-800 border-green-200',
      dotColor: 'bg-green-500'
    }
  };

  const filteredItems = filter === 'all' 
    ? feedbackItems 
    : feedbackItems.filter(item => item.status === filter);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const statusCounts = {
    all: feedbackItems.length,
    pending: feedbackItems.filter(item => item.status === 'pending').length,
    submitted: feedbackItems.filter(item => item.status === 'submitted').length,
    reviewed: feedbackItems.filter(item => item.status === 'reviewed').length,
    resolved: feedbackItems.filter(item => item.status === 'resolved').length
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-primary">
            Feedback History
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Track your submitted feedback
          </p>
        </div>
        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
          {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {['all', 'pending', 'submitted', 'reviewed', 'resolved'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              filter === status
                ? 'bg-primary text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
            <span className="ml-2 text-xs opacity-75">
              ({statusCounts[status]})
            </span>
          </button>
        ))}
      </div>

      {/* Feedback List */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-5xl mb-3">📋</div>
          <p className="text-gray-500 font-medium">No feedback found</p>
          <p className="text-sm text-gray-400 mt-1">
            {filter === 'all' 
              ? 'You haven\'t submitted any feedback yet' 
              : `No ${filter} feedback`}
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {filteredItems.map((item) => {
            const config = statusConfig[item.status];
            const isExpanded = expandedId === item.id;

            return (
              <li
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
              >
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`w-2 h-2 rounded-full ${config.dotColor}`} />
                        <h3 className="font-semibold text-gray-900 truncate">
                          {item.type}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          {item.category}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500">
                          {formatDate(item.date)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${config.color} whitespace-nowrap`}>
                        <span className="mr-1">{config.icon}</span>
                        {config.label}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-200">
                    {item.response ? (
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <div className="flex items-start gap-2">
                          <span className="text-primary text-lg">💬</span>
                          <div className="flex-1">
                            <p className="text-xs font-medium text-gray-500 mb-1">
                              Response from Administration
                            </p>
                            <p className="text-sm text-gray-700">
                              {item.response}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500 italic">
                        No response yet. We'll notify you once reviewed.
                      </p>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}