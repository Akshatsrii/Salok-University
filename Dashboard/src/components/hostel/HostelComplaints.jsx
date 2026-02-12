return (
  <div className="bg-[#111] border border-gray-800 rounded-xl shadow-xl text-white">
    
    {/* Header */}
    <div className="p-6 border-b border-gray-800 flex items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold text-orange-500">
          Hostel Complaints
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Report issues and track their resolution
        </p>
      </div>

      <button
        onClick={() => setShowHistory(!showHistory)}
        className="flex items-center gap-2 px-4 py-2 bg-black border border-gray-700 hover:border-orange-500 rounded-lg transition-all text-sm"
      >
        <span>{showHistory ? "📝" : "📋"}</span>
        {showHistory ? "New Complaint" : "View History"}
      </button>
    </div>

    <div className="p-6">
      {!showHistory ? (
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Category */}
          <div>
            <label className="block text-sm mb-3 text-gray-300">
              Complaint Category *
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {complaintCategories.map((category) => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() =>
                    handleInputChange("category", category.value)
                  }
                  className={`p-4 rounded-lg border transition-all ${
                    formData.category === category.value
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-gray-700 hover:border-orange-500"
                  }`}
                >
                  <div className="text-2xl mb-2">
                    {category.icon}
                  </div>
                  <div className="text-sm">
                    {category.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Subcategory */}
          {selectedCategory && (
            <div className="animate-fadeIn">
              <label className="block text-sm mb-2 text-gray-300">
                Specific Issue *
              </label>
              <select
                value={formData.subcategory}
                onChange={(e) =>
                  handleInputChange(
                    "subcategory",
                    e.target.value
                  )
                }
                className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select issue...</option>
                {selectedCategory.subcategories.map(
                  (sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  )
                )}
              </select>
            </div>
          )}

          {/* Priority + Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Priority */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Priority Level *
              </label>
              <div className="grid grid-cols-2 gap-2">
                {priorityLevels.map((priority) => (
                  <button
                    key={priority.value}
                    type="button"
                    onClick={() =>
                      handleInputChange(
                        "priority",
                        priority.value
                      )
                    }
                    className={`p-3 rounded-lg border transition-all ${
                      formData.priority === priority.value
                        ? "border-orange-500 bg-orange-500/10 text-orange-400"
                        : "border-gray-700 text-gray-300 hover:border-orange-500"
                    }`}
                  >
                    {priority.icon} {priority.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Location *
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) =>
                  handleInputChange(
                    "location",
                    e.target.value
                  )
                }
                className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-orange-500"
                placeholder="Room 204, A-Block"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Detailed Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                handleInputChange(
                  "description",
                  e.target.value
                )
              }
              rows="5"
              maxLength={MAX_CHARS}
              className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 resize-none"
            />
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>
                Minimum {MIN_CHARS} characters
              </span>
              <span>
                {charCount}/{MAX_CHARS}
              </span>
            </div>
          </div>

          {/* Anonymous */}
          <div className="bg-black border border-gray-800 rounded-lg p-4">
            <label className="flex gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.anonymous}
                onChange={(e) =>
                  handleInputChange(
                    "anonymous",
                    e.target.checked
                  )
                }
                className="mt-1 accent-orange-500"
              />
              <div>
                <span className="text-sm font-medium">
                  Submit Anonymously
                </span>
                <p className="text-xs text-gray-400">
                  Only administration can see identity.
                </p>
              </div>
            </label>
          </div>

          {/* Status */}
          {submitStatus && (
            <div
              className={`p-4 rounded-lg border ${
                submitStatus.type === "success"
                  ? "bg-green-900/20 border-green-600 text-green-400"
                  : "bg-red-900/20 border-red-600 text-red-400"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-full py-3 rounded-lg font-medium transition-all ${
              isFormValid && !isSubmitting
                ? "bg-orange-500 text-black hover:bg-orange-600 active:scale-95"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
          >
            {isSubmitting
              ? "Submitting Complaint..."
              : "Submit Complaint"}
          </button>
        </form>
      ) : (
        /* Complaint History (Dark Version) */
        <div className="space-y-4">
          {complaintHistory.map((complaint) => (
            <div
              key={complaint.id}
              className="bg-black border border-gray-800 rounded-lg p-4"
            >
              <div className="flex justify-between mb-2">
                <span className="font-mono text-sm text-gray-400">
                  #{complaint.id}
                </span>
                <span className="text-xs px-3 py-1 rounded bg-orange-500/20 text-orange-400">
                  {statusConfig[complaint.status].icon}{" "}
                  {statusConfig[complaint.status].label}
                </span>
              </div>

              <h4 className="font-semibold text-white">
                {complaint.category} -{" "}
                {complaint.subcategory}
              </h4>

              <p className="text-sm text-gray-400 mt-1">
                {complaint.description}
              </p>

              {complaint.response && (
                <div className="mt-3 bg-orange-500/10 border border-orange-500/30 p-3 rounded">
                  <p className="text-xs text-orange-400 mb-1">
                    Admin Response:
                  </p>
                  <p className="text-sm text-gray-300">
                    {complaint.response}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);
