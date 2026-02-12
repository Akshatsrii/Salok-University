import { useState } from "react";

export default function IQACFeedback() {
  const [formData, setFormData] = useState({
    category: "",
    subcategory: "",
    priority: "",
    anonymous: false,
    description: "",
    suggestions: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [charCounts, setCharCounts] = useState({
    description: 0,
    suggestions: 0,
  });

  const MAX_CHARS = 1000;
  const MIN_CHARS = 30;

  const categories = [
    {
      value: "academic",
      label: "Academic Excellence",
      icon: "📚",
      subcategories: [
        "Curriculum Design",
        "Teaching Methods",
        "Assessment Methods",
        "Learning Resources",
        "Academic Calendar",
      ],
    },
    {
      value: "infrastructure",
      label: "Infrastructure & Facilities",
      icon: "🏫",
      subcategories: [
        "Classrooms",
        "Laboratories",
        "Library",
        "Sports Facilities",
        "Internet & IT Infrastructure",
      ],
    },
  ];

  const priorityLevels = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
    { value: "critical", label: "Critical" },
  ];

  const selectedCategory = categories.find(
    (cat) => cat.value === formData.category
  );

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (field === "description" || field === "suggestions") {
      setCharCounts((prev) => ({ ...prev, [field]: value.length }));
    }

    if (field === "category") {
      setFormData((prev) => ({ ...prev, subcategory: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.category || !formData.subcategory) {
      setSubmitStatus({
        type: "error",
        message: "Please select both category and subcategory.",
      });
      return;
    }

    if (!formData.priority) {
      setSubmitStatus({
        type: "error",
        message: "Please select priority level.",
      });
      return;
    }

    if (formData.description.trim().length < MIN_CHARS) {
      setSubmitStatus({
        type: "error",
        message: `Description must be at least ${MIN_CHARS} characters.`,
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
          "Thank you! Your IQAC feedback has been submitted successfully.",
      });

      setFormData({
        category: "",
        subcategory: "",
        priority: "",
        anonymous: false,
        description: "",
        suggestions: "",
      });

      setCharCounts({ description: 0, suggestions: 0 });
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to submit feedback. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.category &&
    formData.subcategory &&
    formData.priority &&
    formData.description.trim().length >= MIN_CHARS;

  return (
    <div className="bg-[#111] border border-gray-800 p-6 rounded-xl shadow-xl text-white">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-xl font-semibold text-orange-500">
            IQAC Feedback
          </h2>
          <span className="bg-orange-500/10 text-orange-400 text-xs px-2 py-1 rounded-full">
            Quality Assurance
          </span>
        </div>
        <p className="text-sm text-gray-400">
          Share your observations for institutional quality improvement.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category */}
        <div>
          <label className="block text-sm text-gray-300 mb-3">
            Feedback Category <span className="text-red-500">*</span>
          </label>
          <div className="grid sm:grid-cols-2 gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() =>
                  handleInputChange("category", category.value)
                }
                className={`p-4 rounded-lg border text-left transition-all ${
                  formData.category === category.value
                    ? "border-orange-500 bg-orange-500/10"
                    : "border-gray-700 hover:border-orange-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{category.icon}</span>
                  <span className="text-sm text-gray-300">
                    {category.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Subcategory */}
        {selectedCategory && (
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Specific Area <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.subcategory}
              onChange={(e) =>
                handleInputChange("subcategory", e.target.value)
              }
              className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select specific area...</option>
              {selectedCategory.subcategories.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Priority */}
        <div>
          <label className="block text-sm text-gray-300 mb-3">
            Priority Level <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {priorityLevels.map((priority) => (
              <button
                key={priority.value}
                type="button"
                onClick={() =>
                  handleInputChange("priority", priority.value)
                }
                className={`p-3 rounded-lg border text-sm transition-all ${
                  formData.priority === priority.value
                    ? "border-orange-500 bg-orange-500 text-black"
                    : "border-gray-700 text-gray-300 hover:border-orange-400"
                }`}
              >
                {priority.label}
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Detailed Description <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              handleInputChange("description", e.target.value)
            }
            rows="5"
            maxLength={MAX_CHARS}
            className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 resize-none"
          />
          <div className="flex justify-between text-xs mt-2 text-gray-500">
            <span>Minimum {MIN_CHARS} characters</span>
            <span>{charCounts.description}/{MAX_CHARS}</span>
          </div>
        </div>

        {/* Suggestions */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Improvement Suggestions
          </label>
          <textarea
            value={formData.suggestions}
            onChange={(e) =>
              handleInputChange("suggestions", e.target.value)
            }
            rows="4"
            maxLength={MAX_CHARS}
            className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 resize-none"
          />
          <div className="text-right text-xs mt-2 text-gray-500">
            {charCounts.suggestions}/{MAX_CHARS}
          </div>
        </div>

        {/* Anonymous */}
        <div className="bg-black border border-gray-700 rounded-lg p-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.anonymous}
              onChange={(e) =>
                handleInputChange("anonymous", e.target.checked)
              }
              className="w-4 h-4 accent-orange-500"
            />
            <div>
              <span className="text-sm text-gray-300 font-medium block">
                Submit Anonymously
              </span>
              <span className="text-xs text-gray-500">
                Your identity will remain confidential.
              </span>
            </div>
          </label>
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
          disabled={!isFormValid || isSubmitting}
          className={`w-full px-5 py-3 rounded-lg font-medium transition-all ${
            isFormValid && !isSubmitting
              ? "bg-orange-500 text-black hover:bg-orange-600 active:scale-95"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isSubmitting ? "Submitting to IQAC..." : "Submit IQAC Feedback"}
        </button>
      </form>
    </div>
  );
}
