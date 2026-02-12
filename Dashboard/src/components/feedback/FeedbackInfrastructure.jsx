import { useState } from "react";

export default function FeedbackInfrastructure() {
  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [charCount, setCharCount] = useState(0);

  const MAX_CHARS = 500;
  const MIN_CHARS = 10;

  const categories = [
    { value: "labs", label: "Labs" },
    { value: "classrooms", label: "Classrooms" },
    { value: "library", label: "Library" },
    { value: "facilities", label: "Facilities" },
    { value: "equipment", label: "Equipment" },
    { value: "other", label: "Other" },
  ];

  const handleFeedbackChange = (e) => {
    const text = e.target.value;
    if (text.length <= MAX_CHARS) {
      setFeedback(text);
      setCharCount(text.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (feedback.trim().length < MIN_CHARS) {
      setSubmitStatus({
        type: "error",
        message: `Please provide at least ${MIN_CHARS} characters of feedback.`,
      });
      return;
    }

    if (!category) {
      setSubmitStatus({
        type: "error",
        message: "Please select a category.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your feedback has been submitted successfully.",
      });

      setFeedback("");
      setCategory("");
      setCharCount(0);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to submit feedback. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValid = feedback.trim().length >= MIN_CHARS && category;

  return (
    <div className="bg-[#111] border border-gray-800 p-6 rounded-xl shadow-xl text-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-orange-500">
          Infrastructure Feedback
        </h2>
        <span className="text-sm text-gray-400">Help us improve</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">Select a category...</option>
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Feedback */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Your Feedback <span className="text-red-500">*</span>
          </label>
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            rows="5"
            placeholder="Share your feedback about labs, classrooms, library, facilities..."
            className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            required
          />
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-gray-500">
              Minimum {MIN_CHARS} characters required
            </p>
            <span
              className={`text-xs font-medium ${
                charCount > MAX_CHARS * 0.9
                  ? "text-orange-400"
                  : "text-gray-500"
              }`}
            >
              {charCount}/{MAX_CHARS}
            </span>
          </div>
        </div>

        {/* Status */}
        {submitStatus && (
          <div
            className={`p-3 rounded-lg border ${
              submitStatus.type === "success"
                ? "bg-green-500/10 border-green-500/30 text-green-400"
                : "bg-red-500/10 border-red-500/30 text-red-400"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={`w-full px-4 py-3 rounded-lg font-medium transition-all ${
            isValid && !isSubmitting
              ? "bg-orange-500 text-black hover:bg-orange-600 active:scale-95"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="inline-block w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
              Submitting...
            </span>
          ) : (
            "Submit Feedback"
          )}
        </button>
      </form>
    </div>
  );
}
