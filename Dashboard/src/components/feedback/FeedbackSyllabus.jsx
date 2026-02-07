import { useState } from 'react';

export default function FeedbackSyllabus() {
  const [formData, setFormData] = useState({
    subject: '',
    semester: '',
    relevance: '',
    structure: '',
    outcomes: '',
    coverage: '',
    difficulty: '',
    additionalComments: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [charCount, setCharCount] = useState(0);

  const MAX_CHARS = 500;
  const MIN_CHARS = 20;

  const subjects = [
    'Data Structures',
    'Algorithms',
    'Database Management',
    'Operating Systems',
    'Computer Networks',
    'Software Engineering',
    'Web Development',
    'Machine Learning',
    'Other'
  ];

  const semesters = ['1', '2', '3', '4', '5', '6', '7', '8'];

  const ratingOptions = [
    { value: '5', label: 'Excellent', emoji: '😊' },
    { value: '4', label: 'Good', emoji: '🙂' },
    { value: '3', label: 'Average', emoji: '😐' },
    { value: '2', label: 'Below Average', emoji: '🙁' },
    { value: '1', label: 'Poor', emoji: '😞' }
  ];

  const coverageOptions = [
    { value: 'too_much', label: 'Too Much Content' },
    { value: 'balanced', label: 'Well Balanced' },
    { value: 'too_little', label: 'Too Little Content' }
  ];

  const difficultyOptions = [
    { value: 'too_easy', label: 'Too Easy' },
    { value: 'appropriate', label: 'Appropriate' },
    { value: 'too_hard', label: 'Too Difficult' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (field === 'additionalComments') {
      setCharCount(value.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.subject || !formData.semester) {
      setSubmitStatus({
        type: 'error',
        message: 'Please select subject and semester.'
      });
      return;
    }

    if (!formData.relevance || !formData.structure || !formData.outcomes) {
      setSubmitStatus({
        type: 'error',
        message: 'Please rate all aspects of the syllabus.'
      });
      return;
    }

    if (formData.additionalComments.trim().length < MIN_CHARS) {
      setSubmitStatus({
        type: 'error',
        message: `Please provide at least ${MIN_CHARS} characters in additional comments.`
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Replace with actual API call:
      // const response = await fetch('/api/feedback/syllabus', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your syllabus feedback has been submitted successfully.'
      });

      // Reset form
      setFormData({
        subject: '',
        semester: '',
        relevance: '',
        structure: '',
        outcomes: '',
        coverage: '',
        difficulty: '',
        additionalComments: ''
      });
      setCharCount(0);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit feedback. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = 
    formData.subject && 
    formData.semester && 
    formData.relevance && 
    formData.structure && 
    formData.outcomes &&
    formData.additionalComments.trim().length >= MIN_CHARS;

  const RatingSelector = ({ label, value, onChange, field }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="grid grid-cols-5 gap-2">
        {ratingOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(field, option.value)}
            className={`p-3 rounded-lg border-2 transition-all text-center ${
              value === option.value
                ? 'border-primary bg-primary/10 shadow-sm scale-105'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="text-2xl mb-1">{option.emoji}</div>
            <div className="text-xs font-medium text-gray-700">{option.label}</div>
          </button>
        ))}
      </div>
    </div>
  );

  const MultiChoiceSelector = ({ label, options, value, onChange, field }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(field, option.value)}
            className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
              value === option.value
                ? 'border-primary bg-primary text-white'
                : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-primary mb-2">
          Syllabus Feedback
        </h2>
        <p className="text-sm text-gray-600">
          Help us improve the syllabus by sharing your thoughts on structure, 
          relevance, and course outcomes.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Subject and Semester Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <select
              id="subject"
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              required
            >
              <option value="">Select subject...</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-2">
              Semester <span className="text-red-500">*</span>
            </label>
            <select
              id="semester"
              value={formData.semester}
              onChange={(e) => handleInputChange('semester', e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              required
            >
              <option value="">Select semester...</option>
              {semesters.map((sem) => (
                <option key={sem} value={sem}>
                  Semester {sem}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Rating Sections */}
        <div className="space-y-5 pt-2">
          <RatingSelector
            label="Syllabus Relevance to Industry"
            value={formData.relevance}
            onChange={handleInputChange}
            field="relevance"
          />

          <RatingSelector
            label="Syllabus Structure & Organization"
            value={formData.structure}
            onChange={handleInputChange}
            field="structure"
          />

          <RatingSelector
            label="Course Learning Outcomes"
            value={formData.outcomes}
            onChange={handleInputChange}
            field="outcomes"
          />
        </div>

        {/* Multiple Choice Sections */}
        <div className="space-y-5 pt-2">
          <MultiChoiceSelector
            label="Content Coverage"
            options={coverageOptions}
            value={formData.coverage}
            onChange={handleInputChange}
            field="coverage"
          />

          <MultiChoiceSelector
            label="Difficulty Level"
            options={difficultyOptions}
            value={formData.difficulty}
            onChange={handleInputChange}
            field="difficulty"
          />
        </div>

        {/* Additional Comments */}
        <div>
          <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Comments & Suggestions <span className="text-red-500">*</span>
          </label>
          <textarea
            id="comments"
            value={formData.additionalComments}
            onChange={(e) => handleInputChange('additionalComments', e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            rows="5"
            maxLength={MAX_CHARS}
            placeholder="Share specific suggestions for improvement, missing topics, or any other feedback..."
            required
          />
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-gray-500">
              Minimum {MIN_CHARS} characters required
            </p>
            <span 
              className={`text-xs font-medium ${
                charCount > MAX_CHARS * 0.9 
                  ? 'text-orange-500' 
                  : 'text-gray-500'
              }`}
            >
              {charCount}/{MAX_CHARS}
            </span>
          </div>
        </div>

        {/* Status Messages */}
        {submitStatus && (
          <div
            className={`p-4 rounded-lg border ${
              submitStatus.type === 'success'
                ? 'bg-green-50 text-green-800 border-green-200'
                : 'bg-red-50 text-red-800 border-red-200'
            }`}
            role="alert"
          >
            <div className="flex items-start gap-2">
              <span className="text-lg">
                {submitStatus.type === 'success' ? '✓' : '⚠'}
              </span>
              <p className="text-sm font-medium">{submitStatus.message}</p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`w-full px-5 py-3 rounded-lg font-medium transition-all ${
            isFormValid && !isSubmitting
              ? 'bg-primary text-white hover:bg-primary/90 active:scale-95 shadow-sm'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg 
                className="animate-spin h-5 w-5" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting Feedback...
            </span>
          ) : (
            'Submit Syllabus Feedback'
          )}
        </button>
      </form>
    </div>
  );
}