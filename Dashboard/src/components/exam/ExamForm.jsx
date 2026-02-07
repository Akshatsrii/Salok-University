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

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = "Student name is required";
    }
    if (!formData.rollNumber.trim()) {
      newErrors.rollNumber = "Roll number is required";
    }
    if (!formData.semester) {
      newErrors.semester = "Please select a semester";
    }
    if (!formData.course) {
      newErrors.course = "Please select a course";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Replace with actual API call
      // const response = await fetch('/api/exam/apply', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      console.log("Form submitted:", formData);
      
      // Show success message and redirect
      alert("Application submitted successfully!");
      navigate("/exam/examination");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
      transition={{ duration: 0.4 }}
      className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="mb-6 border-b pb-4">
        <h2 className="text-primary text-2xl font-bold mb-2">
          Semester Examination Application
        </h2>
        <p className="text-gray-600">
          Fill out the form below to apply for your semester examination.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Personal Information
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Student Name */}
            <div>
              <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
                Student Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                  errors.studentName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your full name"
              />
              {errors.studentName && (
                <p className="mt-1 text-sm text-red-500">{errors.studentName}</p>
              )}
            </div>

            {/* Roll Number */}
            <div>
              <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Roll Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="rollNumber"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                  errors.rollNumber ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="e.g., 2024001"
              />
              {errors.rollNumber && (
                <p className="mt-1 text-sm text-red-500">{errors.rollNumber}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="student@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="10-digit mobile number"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>
          </div>
        </div>

        {/* Academic Information Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Academic Details
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Course */}
            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                Course <span className="text-red-500">*</span>
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                  errors.course ? "border-red-500" : "border-gray-300"
                }`}
              >
                {courses.map((course) => (
                  <option key={course.value} value={course.value}>
                    {course.label}
                  </option>
                ))}
              </select>
              {errors.course && (
                <p className="mt-1 text-sm text-red-500">{errors.course}</p>
              )}
            </div>

            {/* Semester */}
            <div>
              <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-2">
                Semester <span className="text-red-500">*</span>
              </label>
              <select
                id="semester"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                  errors.semester ? "border-red-500" : "border-gray-300"
                }`}
              >
                {semesters.map((sem) => (
                  <option key={sem.value} value={sem.value}>
                    {sem.label}
                  </option>
                ))}
              </select>
              {errors.semester && (
                <p className="mt-1 text-sm text-red-500">{errors.semester}</p>
              )}
            </div>

            {/* Exam Type */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Examination Type <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="examType"
                    value="regular"
                    checked={formData.examType === "regular"}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="ml-2 text-gray-700">Regular</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="examType"
                    value="backlog"
                    checked={formData.examType === "backlog"}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="ml-2 text-gray-700">Backlog/Improvement</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <div className="flex">
            <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="text-sm font-semibold text-blue-800 mb-1">Important Notes</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Ensure all details are accurate before submission</li>
                <li>• Application fee payment required within 48 hours</li>
                <li>• Admit card will be available 7 days before the exam</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Submit Application
              </>
            )}
          </button>
          
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="sm:w-auto px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </motion.div>
  );
}