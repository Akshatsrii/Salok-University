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

    if (!form.fromDate) {
      newErrors.fromDate = "From date is required";
    } else if (fromDate < today) {
      newErrors.fromDate = "From date cannot be in the past";
    }

    if (!form.toDate) {
      newErrors.toDate = "To date is required";
    } else if (toDate < fromDate) {
      newErrors.toDate = "To date must be after from date";
    }

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
      const diffDays =
        Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      return diffDays;
    }
    return 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert(
        `Hostel leave request submitted successfully!\n\nFrom: ${form.fromDate}\nTo: ${form.toDate}\nDuration: ${calculateDuration()} day(s)`
      );

      setForm({
        fromDate: "",
        toDate: "",
        reason: "",
      });
      setErrors({});
    } catch {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const duration = calculateDuration();

  return (
    <div className="bg-[#111] border border-gray-800 rounded-xl shadow-xl p-6 max-w-xl text-white">
      <h2 className="text-xl font-semibold mb-6 text-orange-500">
        Apply for Hostel Leave
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* From Date */}
        <div>
          <label className="block text-sm mb-2 text-gray-300">
            From Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="fromDate"
            value={form.fromDate}
            onChange={handleChange}
            min={getTodayDate()}
            className={`w-full bg-black border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 ${
              errors.fromDate
                ? "border-red-500"
                : "border-gray-700"
            }`}
          />
          {errors.fromDate && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fromDate}
            </p>
          )}
        </div>

        {/* To Date */}
        <div>
          <label className="block text-sm mb-2 text-gray-300">
            To Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="toDate"
            value={form.toDate}
            onChange={handleChange}
            min={form.fromDate || getTodayDate()}
            className={`w-full bg-black border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 ${
              errors.toDate
                ? "border-red-500"
                : "border-gray-700"
            }`}
          />
          {errors.toDate && (
            <p className="text-red-500 text-sm mt-1">
              {errors.toDate}
            </p>
          )}
        </div>

        {/* Duration */}
        {duration > 0 && (
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg px-3 py-2">
            <p className="text-sm text-orange-400">
              Duration: <span className="font-semibold">{duration}</span>{" "}
              day{duration !== 1 ? "s" : ""}
            </p>
          </div>
        )}

        {/* Reason */}
        <div>
          <label className="block text-sm mb-2 text-gray-300">
            Reason <span className="text-red-500">*</span>
          </label>
          <textarea
            name="reason"
            value={form.reason}
            onChange={handleChange}
            rows="4"
            maxLength={500}
            placeholder="Provide detailed reason for leave..."
            className={`w-full bg-black border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 resize-none ${
              errors.reason
                ? "border-red-500"
                : "border-gray-700"
            }`}
          />
          <div className="flex justify-between mt-2 text-xs">
            {errors.reason ? (
              <p className="text-red-500">{errors.reason}</p>
            ) : (
              <p className="text-gray-500">
                {form.reason.length}/500 characters
              </p>
            )}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-lg font-medium transition-all ${
            !isSubmitting
              ? "bg-orange-500 text-black hover:bg-orange-600 active:scale-95"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}
