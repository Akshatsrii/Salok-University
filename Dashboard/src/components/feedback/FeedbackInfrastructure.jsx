import { useState } from 'react';

export default function FeedbackInfrastructure() {
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [charCount, setCharCount] = useState(0);

  const MAX_CHARS = 500;
  const MIN_CHARS = 10;

  const categories = [
    { value: 'labs', label: 'Labs' },
    { value: 'classrooms', label: 'Classrooms' },
    { value: 'library', label: 'Library' },
    { value: 'facilities', label: 'Facilities' },
    { value: 'equipment', label: 'Equipment' },
    { value: 'other', label: 'Other' }
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
        type: 'error',
        message: `Please provide at least ${MIN_CHARS} characters of feedback.`
      });
      return;
    }

    if (!category) {
      setSubmitStatus({
        type: 'error',
        message: 'Please select a category.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Replace with actual API call:
      // const response = await fetch('/api/feedback', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ feedback, category })
      // });

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your feedback has been submitted successfully.'
      });
      
      // Reset form
      setFeedback('');
      setCategory('');
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

  const isValid = feedback.trim().length >= MIN_CHARS && category;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-primary">
          Infrastructure Feedback
        </h2>
        <span className="text-sm text-gray-500">
          Help us improve
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category Selection */}
        <div>
          <label 
            htmlFor="category" 
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Category <span className="text-red-500">*</span>
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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

        {/* Feedback Textarea */}
        <div>
          <label 
            htmlFor="feedback" 
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Feedback <span className="text-red-500">*</span>
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            rows="5"
            placeholder="Share your feedback about labs, classrooms, library, facilities..."
            required
            aria-describedby="char-count feedback-help"
          />
          <div className="flex justify-between items-center mt-2">
            <p id="feedback-help" className="text-xs text-gray-500">
              Minimum {MIN_CHARS} characters required
            </p>
            <span 
              id="char-count"
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
            className={`p-3 rounded-lg ${
              submitStatus.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
            role="alert"
          >
            {submitStatus.message}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={`w-full px-4 py-3 rounded-lg font-medium transition-all ${
            isValid && !isSubmitting
              ? 'bg-primary text-white hover:bg-primary/90 active:scale-95'
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
              Submitting...
            </span>
          ) : (
            'Submit Feedback'
          )}
        </button>
      </form>
    </div>
  );
}