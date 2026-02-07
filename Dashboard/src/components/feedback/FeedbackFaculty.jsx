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
    teaching: 0,
    content: 0,
    accessibility: 0,
  });

  const facultyList = [
    { name: "Dr. A. Sharma", department: "Computer Science", subjects: ["Data Structures", "Algorithms"] },
    { name: "Prof. R. Mehta", department: "Computer Science", subjects: ["Operating Systems", "Computer Networks"] },
    { name: "Dr. S. Verma", department: "Information Technology", subjects: ["Database Management", "Web Development"] },
    { name: "Prof. N. Gupta", department: "Computer Science", subjects: ["Computer Networks", "Cyber Security"] },
  ];

  const [availableSubjects, setAvailableSubjects] = useState([]);

  const ratingCategories = [
    { key: "teachingQuality", label: "Teaching Quality", description: "Clarity and effectiveness" },
    { key: "courseContent", label: "Course Content", description: "Relevance and depth" },
    { key: "accessibility", label: "Accessibility", description: "Approachability and support" },
  ];

  const ratingLabels = {
    0: "Not Rated",
    1: "Poor",
    2: "Fair",
    3: "Good",
    4: "Very Good",
    5: "Excellent",
  };

  const validateForm = () => {
    const newErrors = {};

    if (!feedback.faculty) {
      newErrors.faculty = "Please select a faculty member";
    }

    if (!feedback.subject) {
      newErrors.subject = "Please select a subject";
    }

    if (feedback.rating === 0) {
      newErrors.rating = "Please provide an overall rating";
    }

    if (feedback.teachingQuality === 0) {
      newErrors.teachingQuality = "Please rate teaching quality";
    }

    if (feedback.courseContent === 0) {
      newErrors.courseContent = "Please rate course content";
    }

    if (feedback.accessibility === 0) {
      newErrors.accessibility = "Please rate accessibility";
    }

    if (feedback.comments.trim() && feedback.comments.trim().length < 10) {
      newErrors.comments = "Comments must be at least 10 characters if provided";
    }

    if (feedback.comments.trim().length > 500) {
      newErrors.comments = "Comments must not exceed 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFacultyChange = (e) => {
    const selectedFaculty = facultyList.find(f => f.name === e.target.value);
    setFeedback({
      ...feedback,
      faculty: e.target.value,
      subject: "", // Reset subject when faculty changes
    });
    setAvailableSubjects(selectedFaculty ? selectedFaculty.subjects : []);
    
    if (errors.faculty) {
      setErrors({ ...errors, faculty: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFeedback({
      ...feedback,
      [name]: type === "checkbox" ? checked : value,
    });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleRating = (category, value) => {
    setFeedback({ ...feedback, [category]: value });
    
    if (errors[category]) {
      setErrors({ ...errors, [category]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setShowSuccess(true);
      
      // Reset form
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
      setErrors({});

      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      alert("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const StarRating = ({ category, value, label, description, required = false }) => {
    const hoverKey = category === "rating" ? "overall" : category;
    const displayRating = hoveredStar[hoverKey] || value;

    return (
      <div>
        <label className="block text-sm font-medium mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {description && (
          <p className="text-xs text-gray-500 mb-2">{description}</p>
        )}
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => handleRating(category, star)}
                onMouseEnter={() => setHoveredStar({ ...hoveredStar, [hoverKey]: star })}
                onMouseLeave={() => setHoveredStar({ ...hoveredStar, [hoverKey]: 0 })}
                className={`text-3xl transition-all hover:scale-110 ${
                  star <= displayRating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </button>
            ))}
          </div>
          <span className={`text-sm font-medium min-w-[80px] ${
            displayRating > 0 ? "text-gray-700" : "text-gray-400"
          }`}>
            {ratingLabels[displayRating]}
          </span>
        </div>
        {errors[category] && (
          <p className="text-red-500 text-sm mt-1">{errors[category]}</p>
        )}
      </div>
    );
  };

  const getAverageRating = () => {
    const ratings = [feedback.teachingQuality, feedback.courseContent, feedback.accessibility];
    const validRatings = ratings.filter(r => r > 0);
    if (validRatings.length === 0) return 0;
    return (validRatings.reduce((a, b) => a + b, 0) / validRatings.length).toFixed(1);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-primary mb-2">
          Faculty Feedback
        </h2>
        <p className="text-sm text-gray-600">
          Your feedback helps us improve teaching quality and course content
        </p>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3 animate-fadeIn">
          <svg
            className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <h3 className="font-semibold text-green-800">Feedback Submitted!</h3>
            <p className="text-sm text-green-700">
              Thank you for your valuable feedback. It will help improve the teaching experience.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Faculty Select */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Select Faculty <span className="text-red-500">*</span>
          </label>
          <select
            name="faculty"
            value={feedback.faculty}
            onChange={handleFacultyChange}
            className={`w-full border rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.faculty ? "border-red-500" : "border-gray-300"
            }`}
            required
          >
            <option value="">-- Select Faculty --</option>
            {facultyList.map((faculty) => (
              <option key={faculty.name} value={faculty.name}>
                {faculty.name} ({faculty.department})
              </option>
            ))}
          </select>
          {errors.faculty && (
            <p className="text-red-500 text-sm mt-1">{errors.faculty}</p>
          )}
        </div>

        {/* Subject Select */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            name="subject"
            value={feedback.subject}
            onChange={handleChange}
            className={`w-full border rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.subject ? "border-red-500" : "border-gray-300"
            } ${!feedback.faculty ? "bg-gray-100 cursor-not-allowed" : ""}`}
            required
            disabled={!feedback.faculty}
          >
            <option value="">
              {feedback.faculty ? "-- Select Subject --" : "Select faculty first"}
            </option>
            {availableSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        {/* Divider */}
        <div className="border-t pt-6">
          <h3 className="font-semibold text-gray-800 mb-4">Rating Criteria</h3>
        </div>

        {/* Overall Rating */}
        <StarRating
          category="rating"
          value={feedback.rating}
          label="Overall Rating"
          description="Your overall experience with this faculty"
          required
        />

        {/* Specific Ratings */}
        {ratingCategories.map((category) => (
          <StarRating
            key={category.key}
            category={category.key}
            value={feedback[category.key]}
            label={category.label}
            description={category.description}
            required
          />
        ))}

        {/* Average Rating Display */}
        {getAverageRating() > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-blue-900">
                Average Category Rating
              </span>
              <div className="flex items-center gap-2">
                <span className="text-2xl text-yellow-400">★</span>
                <span className="text-xl font-bold text-blue-900">
                  {getAverageRating()} / 5.0
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Comments */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Additional Comments
          </label>
          <textarea
            name="comments"
            value={feedback.comments}
            onChange={handleChange}
            rows="4"
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
              errors.comments ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Share specific examples or suggestions for improvement..."
          />
          <div className="flex justify-between items-center mt-1">
            {errors.comments ? (
              <p className="text-red-500 text-sm">{errors.comments}</p>
            ) : (
              <p className="text-gray-500 text-sm">
                {feedback.comments.length}/500 characters
              </p>
            )}
          </div>
        </div>

        {/* Anonymous Checkbox */}
        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
          <input
            type="checkbox"
            id="anonymous"
            name="anonymous"
            checked={feedback.anonymous}
            onChange={handleChange}
            className="w-4 h-4 text-primary focus:ring-2 focus:ring-primary"
          />
          <label htmlFor="anonymous" className="text-sm text-gray-700 cursor-pointer">
            Submit feedback anonymously
          </label>
        </div>

        {/* Info Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <div className="flex gap-2">
            <svg
              className="w-5 h-5 text-yellow-600 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-xs text-yellow-800">
              Your honest feedback is valuable and will be kept confidential. All feedback is reviewed by the academic committee to enhance teaching quality.
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Submitting Feedback...
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Submit Feedback
            </>
          )}
        </button>
      </form>
    </div>
  );
}