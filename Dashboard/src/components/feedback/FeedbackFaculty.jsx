import { useState } from "react";

export default function FeedbackFaculty() {
  const [feedback, setFeedback] = useState({
    faculty: "",
    subject: "",
    rating: 0,
    teachingQuality: 0,
    courseContent: 0,
    accessibility: 0,
    comments: "",
    anonymous: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hoveredStar, setHoveredStar] = useState({
    overall: 0,
    teachingQuality: 0,
    courseContent: 0,
    accessibility: 0,
  });

  const facultyList = [
    { name: "Dr. A. Sharma", department: "Computer Science", subjects: ["Data Structures", "Algorithms"] },
    { name: "Prof. R. Mehta", department: "Computer Science", subjects: ["Operating Systems", "Computer Networks"] },
    { name: "Dr. S. Verma", department: "Information Technology", subjects: ["Database Management", "Web Development"] },
    { name: "Prof. N. Gupta", department: "Computer Science", subjects: ["Computer Networks", "Cyber Security"] },
  ];

  const [availableSubjects, setAvailableSubjects] = useState([]);

  const ratingLabels = {
    0: "Not Rated",
    1: "Poor",
    2: "Fair",
    3: "Good",
    4: "Very Good",
    5: "Excellent",
  };

  const handleFacultyChange = (e) => {
    const selectedFaculty = facultyList.find(f => f.name === e.target.value);
    setFeedback({ ...feedback, faculty: e.target.value, subject: "" });
    setAvailableSubjects(selectedFaculty ? selectedFaculty.subjects : []);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFeedback({ ...feedback, [name]: type === "checkbox" ? checked : value });
  };

  const handleRating = (category, value) => {
    setFeedback({ ...feedback, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setShowSuccess(true);

    setFeedback({
      faculty: "",
      subject: "",
      rating: 0,
      teachingQuality: 0,
      courseContent: 0,
      accessibility: 0,
      comments: "",
      anonymous: false,
    });

    setAvailableSubjects([]);
    setTimeout(() => setShowSuccess(false), 3000);
    setIsSubmitting(false);
  };

  const StarRating = ({ category, value, label }) => {
    const displayRating = hoveredStar[category] || value;

    return (
      <div>
        <label className="block text-sm font-medium text-orange-400 mb-2">
          {label}
        </label>

        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => handleRating(category, star)}
                onMouseEnter={() => setHoveredStar({ ...hoveredStar, [category]: star })}
                onMouseLeave={() => setHoveredStar({ ...hoveredStar, [category]: 0 })}
                className={`text-3xl transition-all hover:scale-110 ${
                  star <= displayRating ? "text-orange-500" : "text-gray-600"
                }`}
              >
                ★
              </button>
            ))}
          </div>
          <span className="text-sm font-medium text-gray-400">
            {ratingLabels[displayRating]}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#111] border border-gray-800 rounded-xl shadow-xl p-8 max-w-3xl text-white">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-orange-500 mb-2">
          Faculty Feedback
        </h2>
        <p className="text-sm text-gray-400">
          Help us improve teaching quality and learning experience
        </p>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="mb-6 bg-green-500/10 border border-green-500 rounded-lg p-4">
          <p className="text-green-400 font-semibold">
            ✅ Feedback Submitted Successfully!
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Faculty */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Select Faculty
          </label>
          <select
            name="faculty"
            value={feedback.faculty}
            onChange={handleFacultyChange}
            className="w-full bg-black border border-gray-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500"
          >
            <option value="">-- Select Faculty --</option>
            {facultyList.map((faculty) => (
              <option key={faculty.name} value={faculty.name}>
                {faculty.name} ({faculty.department})
              </option>
            ))}
          </select>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Subject
          </label>
          <select
            name="subject"
            value={feedback.subject}
            onChange={handleChange}
            disabled={!feedback.faculty}
            className="w-full bg-black border border-gray-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
          >
            <option value="">-- Select Subject --</option>
            {availableSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        {/* Ratings */}
        <StarRating category="rating" value={feedback.rating} label="Overall Rating" />
        <StarRating category="teachingQuality" value={feedback.teachingQuality} label="Teaching Quality" />
        <StarRating category="courseContent" value={feedback.courseContent} label="Course Content" />
        <StarRating category="accessibility" value={feedback.accessibility} label="Accessibility" />

        {/* Comments */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Additional Comments
          </label>
          <textarea
            name="comments"
            value={feedback.comments}
            onChange={handleChange}
            rows="4"
            className="w-full bg-black border border-gray-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 resize-none"
            placeholder="Write your feedback..."
          />
        </div>

        {/* Anonymous */}
        <div className="flex items-center gap-2 bg-black border border-gray-800 p-3 rounded-lg">
          <input
            type="checkbox"
            name="anonymous"
            checked={feedback.anonymous}
            onChange={handleChange}
            className="w-4 h-4 accent-orange-500"
          />
          <label className="text-sm text-gray-400">
            Submit feedback anonymously
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-lg font-semibold transition-all flex justify-center items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
              Submitting...
            </>
          ) : (
            "Submit Feedback"
          )}
        </button>
      </form>
    </div>
  );
}
