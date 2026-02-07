import { useState } from "react";

export default function ApplyHostelLeaving() {
  const [form, setForm] = useState({
    fromDate: "",
    toDate: "",
    reason: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getTodayDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  const validateForm = () => {
    const newErrors = {};
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const fromDate = new Date(form.fromDate);
    const toDate = new Date(form.toDate);

    // Validate from date
    if (!form.fromDate) {
      newErrors.fromDate = "From date is required";
    } else if (fromDate < today) {
      newErrors.fromDate = "From date cannot be in the past";
    }

    // Validate to date
    if (!form.toDate) {
      newErrors.toDate = "To date is required";
    } else if (toDate < fromDate) {
      newErrors.toDate = "To date must be after from date";
    }

    // Validate reason
    if (!form.reason.trim()) {
      newErrors.reason = "Reason is required";
    } else if (form.reason.trim().length < 10) {
      newErrors.reason = "Reason must be at least 10 characters";
    } else if (form.reason.trim().length > 500) {
      newErrors.reason = "Reason must not exceed 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateDuration = () => {
    if (form.fromDate && form.toDate) {
      const from = new Date(form.fromDate);
      const to = new Date(form.toDate);
      const diffTime = Math.abs(to - from);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      return diffDays;
    }
    return 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      alert(
        `Hostel leave request submitted successfully!\n\nFrom: ${form.fromDate}\nTo: ${form.toDate}\nDuration: ${calculateDuration()} day(s)\nReason: ${form.reason}`
      );

      // Reset form after successful submission
      setForm({
        fromDate: "",
        toDate: "",
        reason: "",
      });
      setErrors({});
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const duration = calculateDuration();

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-xl">
      <h2 className="text-xl font-semibold mb-4 text-primary">
        Apply for Hostel Leave
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* From Date */}
        <div>
          <label className="block text-sm font-medium mb-1">
            From Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="fromDate"
            value={form.fromDate}
            onChange={handleChange}
            min={getTodayDate()}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.fromDate ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.fromDate && (
            <p className="text-red-500 text-sm mt-1">{errors.fromDate}</p>
          )}
        </div>

        {/* To Date */}
        <div>
          <label className="block text-sm font-medium mb-1">
            To Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="toDate"
            value={form.toDate}
            onChange={handleChange}
            min={form.fromDate || getTodayDate()}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.toDate ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.toDate && (
            <p className="text-red-500 text-sm mt-1">{errors.toDate}</p>
          )}
        </div>

        {/* Duration Display */}
        {duration > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded px-3 py-2">
            <p className="text-sm text-blue-800">
              <span className="font-medium">Duration:</span> {duration} day
              {duration !== 1 ? "s" : ""}
            </p>
          </div>
        )}

        {/* Reason */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Reason <span className="text-red-500">*</span>
          </label>
          <textarea
            name="reason"
            value={form.reason}
            onChange={handleChange}
            rows="4"
            placeholder="Please provide a detailed reason for your leave request..."
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
              errors.reason ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          <div className="flex justify-between items-center mt-1">
            {errors.reason ? (
              <p className="text-red-500 text-sm">{errors.reason}</p>
            ) : (
              <p className="text-gray-500 text-sm">
                {form.reason.length}/500 characters
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}