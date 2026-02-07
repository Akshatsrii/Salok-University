import { useState } from 'react';

export default function IQACFeedback() {
  const [formData, setFormData] = useState({
    category: '',
    subcategory: '',
    priority: '',
    anonymous: false,
    description: '',
    suggestions: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [charCounts, setCharCounts] = useState({
    description: 0,
    suggestions: 0
  });

  const MAX_CHARS = 1000;
  const MIN_CHARS = 30;

  const categories = [
    {
      value: 'academic',
      label: 'Academic Excellence',
      icon: '📚',
      subcategories: [
        'Curriculum Design',
        'Teaching Methods',
        'Assessment Methods',
        'Learning Resources',
        'Academic Calendar'
      ]
    },
    {
      value: 'infrastructure',
      label: 'Infrastructure & Facilities',
      icon: '🏫',
      subcategories: [
        'Classrooms',
        'Laboratories',
        'Library',
        'Sports Facilities',
        'Internet & IT Infrastructure'
      ]
    },
    {
      value: 'governance',
      label: 'Governance & Leadership',
      icon: '⚖️',
      subcategories: [
        'Administrative Processes',
        'Decision Making',
        'Communication',
        'Transparency',
        'Student Participation'
      ]
    },
    {
      value: 'student_support',
      label: 'Student Support Services',
      icon: '🤝',
      subcategories: [
        'Career Guidance',
        'Counseling Services',
        'Financial Aid',
        'Grievance Redressal',
        'Health & Wellness'
      ]
    },
    {
      value: 'research',
      label: 'Research & Innovation',
      icon: '🔬',
      subcategories: [
        'Research Facilities',
        'Funding Support',
        'Publications',
        'Intellectual Property',
        'Industry Collaboration'
      ]
    },
    {
      value: 'extension',
      label: 'Extension & Outreach',
      icon: '🌍',
      subcategories: [
        'Community Service',
        'Social Initiatives',
        'Environmental Activities',
        'Cultural Programs',
        'Industry Connect'
      ]
    }
  ];

  const priorityLevels = [
    { value: 'low', label: 'Low', color: 'bg-green-100 text-green-800 border-green-200' },
    { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
    { value: 'high', label: 'High', color: 'bg-orange-100 text-orange-800 border-orange-200' },
    { value: 'critical', label: 'Critical', color: 'bg-red-100 text-red-800 border-red-200' }
  ];

  const selectedCategory = categories.find(cat => cat.value === formData.category);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (field === 'description' || field === 'suggestions') {
      setCharCounts(prev => ({ ...prev, [field]: value.length }));
    }

    // Reset subcategory when category changes
    if (field === 'category') {
      setFormData(prev => ({ ...prev, subcategory: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.category || !formData.subcategory) {
      setSubmitStatus({
        type: 'error',
        message: 'Please select both category and subcategory.'
      });
      return;
    }

    if (!formData.priority) {
      setSubmitStatus({
        type: 'error',
        message: 'Please select priority level.'
      });
      return;
    }

    if (formData.description.trim().length < MIN_CHARS) {
      setSubmitStatus({
        type: 'error',
        message: `Description must be at least ${MIN_CHARS} characters.`
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Replace with actual API call:
      // const response = await fetch('/api/feedback/iqac', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your IQAC feedback has been submitted and will be reviewed by the quality assurance team.'
      });

      // Reset form
      setFormData({
        category: '',
        subcategory: '',
        priority: '',
        anonymous: false,
        description: '',
        suggestions: ''
      });
      setCharCounts({ description: 0, suggestions: 0 });
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
    formData.category && 
    formData.subcategory && 
    formData.priority &&
    formData.description.trim().length >= MIN_CHARS;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-xl font-semibold text-primary">
            IQAC Feedback
          </h2>
          <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
            Quality Assurance
          </span>
        </div>
        <p className="text-sm text-gray-600">
          Your feedback helps us maintain and improve institutional quality standards. 
          Share your observations and suggestions for continuous improvement.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category Selection */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-3">
            Feedback Category <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => handleInputChange('category', category.value)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  formData.category === category.value
                    ? 'border-primary bg-primary/5 shadow-sm'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-sm font-medium text-gray-900">
                    {category.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Subcategory Selection */}
        {selectedCategory && (
          <div className="animate-fadeIn">
            <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700 mb-2">
              Specific Area <span className="text-red-500">*</span>
            </label>
            <select
              id="subcategory"
              value={formData.subcategory}
              onChange={(e) => handleInputChange('subcategory', e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              required
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

        {/* Priority Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Priority Level <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {priorityLevels.map((priority) => (
              <button
                key={priority.value}
                type="button"
                onClick={() => handleInputChange('priority', priority.value)}
                className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                  formData.priority === priority.value
                    ? priority.color + ' border-current shadow-sm'
                    : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {priority.label}
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Detailed Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            rows="5"
            maxLength={MAX_CHARS}
            placeholder="Describe the issue, observation, or area for improvement in detail. Include specific examples where possible..."
            required
          />
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-gray-500">
              Minimum {MIN_CHARS} characters required
            </p>
            <span 
              className={`text-xs font-medium ${
                charCounts.description > MAX_CHARS * 0.9 
                  ? 'text-orange-500' 
                  : 'text-gray-500'
              }`}
            >
              {charCounts.description}/{MAX_CHARS}
            </span>
          </div>
        </div>

        {/* Suggestions */}
        <div>
          <label htmlFor="suggestions" className="block text-sm font-medium text-gray-700 mb-2">
            Improvement Suggestions
            <span className="text-gray-400 text-xs ml-2">(Optional)</span>
          </label>
          <textarea
            id="suggestions"
            value={formData.suggestions}
            onChange={(e) => handleInputChange('suggestions', e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            rows="4"
            maxLength={MAX_CHARS}
            placeholder="Share your suggestions or recommendations for improvement..."
          />
          <div className="flex justify-end mt-2">
            <span className="text-xs text-gray-500">
              {charCounts.suggestions}/{MAX_CHARS}
            </span>
          </div>
        </div>

        {/* Anonymous Option */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.anonymous}
              onChange={(e) => handleInputChange('anonymous', e.target.checked)}
              className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <div className="flex-1">
              <span className="text-sm font-medium text-gray-900 block">
                Submit Anonymously
              </span>
              <span className="text-xs text-gray-600">
                Your identity will not be shared with anyone. Only the IQAC committee will review this feedback.
              </span>
            </div>
          </label>
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
              <p className="text-sm font-medium flex-1">{submitStatus.message}</p>
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
              Submitting to IQAC...
            </span>
          ) : (
            'Submit IQAC Feedback'
          )}
        </button>

        {/* Info Footer */}
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <div className="flex gap-2">
            <span className="text-blue-600 text-lg">ℹ️</span>
            <div className="text-xs text-blue-800">
              <p className="font-medium mb-1">Your feedback matters!</p>
              <p className="text-blue-700">
                The IQAC team reviews all submissions within 7 working days and takes 
                appropriate action for quality improvement. You'll be notified of the status 
                in your feedback history.
              </p>
            </div>
          </div>
        </div>
      </form>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}