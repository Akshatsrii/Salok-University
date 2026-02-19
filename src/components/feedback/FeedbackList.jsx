const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-yellow-400" : "text-gray-600"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-gray-400 text-xs ml-1">{rating}/5</span>
    </div>
  );
};

const getRatingLabel = (rating) => {
  if (rating === 5) return { label: "Excellent", color: "text-green-400 bg-green-400/10" };
  if (rating === 4) return { label: "Good", color: "text-blue-400 bg-blue-400/10" };
  if (rating === 3) return { label: "Average", color: "text-yellow-400 bg-yellow-400/10" };
  if (rating === 2) return { label: "Poor", color: "text-orange-400 bg-orange-400/10" };
  return { label: "Terrible", color: "text-red-400 bg-red-400/10" };
};

const getInitials = (name) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const avatarColors = [
  "bg-orange-600",
  "bg-purple-600",
  "bg-blue-600",
  "bg-green-600",
  "bg-pink-600",
  "bg-teal-600",
];

const FeedbackCard = ({ feedback, index }) => {
  const { label, color } = getRatingLabel(feedback.rating);
  const avatarColor = avatarColors[index % avatarColors.length];

  return (
    <div className="group bg-[#1a1a1a] border border-[#2a2a2a] hover:border-orange-500/40 p-5 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-900/10 hover:-translate-y-0.5 flex flex-col gap-4">
      
      {/* Header: Avatar + Name + Badge */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
            {getInitials(feedback.name)}
          </div>
          <div>
            <h3 className="text-white font-semibold leading-tight">{feedback.name}</h3>
            {feedback.role && (
              <p className="text-gray-500 text-xs">{feedback.role}</p>
            )}
          </div>
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${color}`}>
          {label}
        </span>
      </div>

      {/* Star Rating */}
      <StarRating rating={feedback.rating} />

      {/* Comment */}
      <p className="text-gray-400 text-sm leading-relaxed border-t border-[#2a2a2a] pt-3">
        "{feedback.comment}"
      </p>

      {/* Footer: Date */}
      {feedback.date && (
        <p className="text-gray-600 text-xs mt-auto">
          📅 {feedback.date}
        </p>
      )}
    </div>
  );
};

const FeedbackList = ({ feedbacks }) => {
  if (!feedbacks || feedbacks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <p className="text-gray-500 text-sm">No feedback yet. Be the first to share!</p>
      </div>
    );
  }

  const avgRating = (
    feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length
  ).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Summary Bar */}
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl px-6 py-4 flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-3">
          <span className="text-4xl font-bold text-orange-500">{avgRating}</span>
          <div>
            <StarRating rating={Math.round(avgRating)} />
            <p className="text-gray-500 text-xs mt-0.5">
              Based on {feedbacks.length} review{feedbacks.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Rating breakdown */}
        <div className="flex-1 min-w-[160px] space-y-1">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = feedbacks.filter((f) => f.rating === star).length;
            const pct = feedbacks.length ? (count / feedbacks.length) * 100 : 0;
            return (
              <div key={star} className="flex items-center gap-2">
                <span className="text-gray-500 text-xs w-3">{star}</span>
                <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div className="flex-1 bg-[#2a2a2a] rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-orange-500 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-gray-600 text-xs w-4 text-right">{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {feedbacks.map((f, i) => (
          <FeedbackCard key={i} feedback={f} index={i} />
        ))}
      </div>
    </div>
  );
};

export default FeedbackList;