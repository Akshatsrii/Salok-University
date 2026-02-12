import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ExamForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    rollNumber: "",
    semester: "",
    course: "",
    email: "",
    phone: "",
    examType: "regular",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.studentName.trim())
      newErrors.studentName = "Student name is required";

    if (!formData.rollNumber.trim())
      newErrors.rollNumber = "Roll number is required";

    if (!formData.semester)
      newErrors.semester = "Please select a semester";

    if (!formData.course)
      newErrors.course = "Please select a course";

    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.phone.trim())
      newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Application submitted successfully!");
    navigate("/exam/examination");

    setIsSubmitting(false);
  };

  const semesters = [
    { value: "", label: "Select Semester" },
    { value: "1", label: "1st Semester" },
    { value: "2", label: "2nd Semester" },
    { value: "3", label: "3rd Semester" },
    { value: "4", label: "4th Semester" },
    { value: "5", label: "5th Semester" },
    { value: "6", label: "6th Semester" },
    { value: "7", label: "7th Semester" },
    { value: "8", label: "8th Semester" },
  ];

  const courses = [
    { value: "", label: "Select Course" },
    { value: "btech-cs", label: "B.Tech - Computer Science" },
    { value: "btech-ec", label: "B.Tech - Electronics" },
    { value: "btech-me", label: "B.Tech - Mechanical" },
    { value: "btech-ce", label: "B.Tech - Civil" },
    { value: "mba", label: "MBA" },
    { value: "mca", label: "MCA" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#111] border border-gray-800 text-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="mb-6 border-b border-gray-800 pb-4">
        <h2 className="text-orange-500 text-2xl font-bold mb-2">
          Semester Examination Application
        </h2>
        <p className="text-gray-400">
          Fill out the form below to apply for your semester examination.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Personal Info */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-4">
            Personal Information
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {["studentName", "rollNumber", "email", "phone"].map((field) => (
              <div key={field}>
                <label className="block text-sm mb-2 capitalize">
                  {field.replace(/([A-Z])/g, " $1")}{" "}
                  <span className="text-red-500">*</span>
                </label>

                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-black border rounded-lg focus:ring-2 focus:ring-orange-500 transition ${
                    errors[field]
                      ? "border-red-500"
                      : "border-gray-700"
                  }`}
                />

                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[field]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Academic Info */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-4">
            Academic Details
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500"
            >
              {courses.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>

            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500"
            >
              {semesters.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>

            <div className="md:col-span-2 flex gap-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="examType"
                  value="regular"
                  checked={formData.examType === "regular"}
                  onChange={handleChange}
                  className="text-orange-500 focus:ring-orange-500"
                />
                <span className="ml-2">Regular</span>
              </label>

              <label className="flex items-center">
                <input
                  type="radio"
                  name="examType"
                  value="backlog"
                  checked={formData.examType === "backlog"}
                  onChange={handleChange}
                  className="text-orange-500 focus:ring-orange-500"
                />
                <span className="ml-2">Backlog / Improvement</span>
              </label>
            </div>
          </div>
        </div>

        {/* Notice */}
        <div className="bg-[#1a1a1a] border-l-4 border-orange-500 p-4 rounded">
          <h4 className="text-orange-400 font-semibold mb-2">
            Important Notes
          </h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>• Ensure all details are accurate before submission</li>
            <li>• Application fee payment required within 48 hours</li>
            <li>• Admit card available 7 days before exam</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-lg transition"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="border border-gray-700 px-6 py-3 rounded-lg hover:border-orange-500 text-gray-400 hover:text-orange-400 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </motion.div>
  );
}
