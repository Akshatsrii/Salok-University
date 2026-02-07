import { useState } from 'react';

export default function HostelComplaints() {
  const [formData, setFormData] = useState({
    category: '',
    subcategory: '',
    priority: 'medium',
    location: '',
    description: '',
    anonymous: false,
    attachments: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [charCount, setCharCount] = useState(0);
  const [showHistory, setShowHistory] = useState(false);

  const MAX_CHARS = 500;
  const MIN_CHARS = 20;

  const complaintCategories = [
    {
      value: 'maintenance',
      label: 'Maintenance',
      icon: '🔧',
      subcategories: [
        'Electrical Issues',
        'Plumbing Problems',
        'Furniture Damage',
        'Door/Window Repair',
        'AC/Fan Issues',
        'Ceiling/Wall Damage'
      ]
    },
    {
      value: 'cleanliness',
      label: 'Cleanliness',
      icon: '🧹',
      subcategories: [
        'Room Cleaning',
        'Bathroom Hygiene',
        'Corridor Cleaning',
        'Common Area',
        'Waste Disposal',
        'Pest Control'
      ]
    },
    {
      value: 'mess',
      label: 'Mess & Food',
      icon: '🍽️',
      subcategories: [
        'Food Quality',
        'Food Hygiene',
        'Menu Variety',
        'Mess Timing',
        'Billing Issue',
        'Staff Behavior'
      ]
    },
    {
      value: 'security',
      label: 'Security',
      icon: '🛡️',
      subcategories: [
        'Entry/Exit Issue',
        'Missing Items',
        'Unauthorized Access',
        'CCTV Not Working',
        'Gate Timing',
        'Visitor Management'
      ]
    },
    {
      value: 'facilities',
      label: 'Facilities',
      icon: '⚡',
      subcategories: [
        'Wi-Fi Issues',
        'Laundry Service',
        'Common Room',
        'Study Hall',
        'Gym Equipment',
        'Water Supply'
      ]
    },
    {
      value: 'noise',
      label: 'Noise & Disturbance',
      icon: '🔊',
      subcategories: [
        'Loud Music',
        'Construction Noise',
        'Late Night Disturbance',
        'Common Area Noise',
        'Generator Noise',
        'Other Disturbances'
      ]
    },
    {
      value: 'roommate',
      label: 'Roommate Issues',
      icon: '👥',
      subcategories: [
        'Room Change Request',
        'Behavioral Issues',
        'Hygiene Concerns',
        'Personal Space',
        'Conflicts',
        'Other Issues'
      ]
    },
    {
      value: 'other',
      label: 'Other',
      icon: '📝',
      subcategories: [
        'Administrative',
        'Documentation',
        'Fee Related',
        'General Inquiry',
        'Suggestions',
        'Other'
      ]
    }
  ];

  const priorityLevels = [
    { value: 'low', label: 'Low', color: 'bg-green-100 text-green-800 border-green-300', icon: '🟢' },
    { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-800 border-yellow-300', icon: '🟡' },
    { value: 'high', label: 'High', color: 'bg-orange-100 text-orange-800 border-orange-300', icon: '🟠' },
    { value: 'urgent', label: 'Urgent', color: 'bg-red-100 text-red-800 border-red-300', icon: '🔴' }
  ];

  // Sample complaint history
  const complaintHistory = [
    {
      id: 'HC2024001',
      category: 'Maintenance',
      subcategory: 'Plumbing Problems',
      description: 'Bathroom tap is leaking continuously',
      status: 'resolved',
      priority: 'high',
      date: '2024-02-01',
      resolvedDate: '2024-02-03',
      response: 'Plumber assigned. Issue fixed on 03 Feb 2024.'
    },
    {
      id: 'HC2024002',
      category: 'Cleanliness',
      subcategory: 'Bathroom Hygiene',
      description: 'Common bathroom not cleaned properly',
      status: 'in_progress',
      priority: 'medium',
      date: '2024-02-05',
      response: 'Cleaning staff has been notified. Will be resolved by tomorrow.'
    },
    {
      id: 'HC2024003',
      category: 'Facilities',
      subcategory: 'Wi-Fi Issues',
      description: 'Internet not working in room 204',
      status: 'pending',
      priority: 'medium',
      date: '2024-02-06',
      response: null
    }
  ];

  const statusConfig = {
    pending: { 
      label: 'Pending', 
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      icon: '⏳'
    },
    in_progress: { 
      label: 'In Progress', 
      color: 'bg-blue-100 text-blue-800 border-blue-200',
      icon: '🔄'
    },
    resolved: { 
      label: 'Resolved', 
      color: 'bg-green-100 text-green-800 border-green-200',
      icon: '✓'
    },
    rejected: { 
      label: 'Rejected', 
      color: 'bg-red-100 text-red-800 border-red-200',
      icon: '✗'
    }
  };

  const selectedCategory = complaintCategories.find(cat => cat.value === formData.category);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (field === 'description') {
      setCharCount(value.length);
    }

    if (field === 'category') {
      setFormData(prev => ({ ...prev, subcategory: '' }));
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + formData.attachments.length > 3) {
      setSubmitStatus({
        type: 'error',
        message: 'Maximum 3 attachments allowed.'
      });
      return;
    }
    setFormData(prev => ({ 
      ...prev, 
      attachments: [...prev.attachments, ...files] 
    }));
  };

  const removeAttachment = (index) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.category || !formData.subcategory) {
      setSubmitStatus({
        type: 'error',
        message: 'Please select category and subcategory.'
      });
      return;
    }

    if (!formData.location.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please specify the location.'
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
      
      const complaintId = `HC${Date.now().toString().slice(-6)}`;
      
      // Replace with actual API call:
      // const formDataObj = new FormData();
      // Object.keys(formData).forEach(key => {
      //   if (key === 'attachments') {
      //     formData.attachments.forEach(file => formDataObj.append('attachments', file));
      //   } else {
      //     formDataObj.append(key, formData[key]);
      //   }
      // });
      // const response = await fetch('/api/hostel/complaints', {
      //   method: 'POST',
      //   body: formDataObj
      // });

      setSubmitStatus({
        type: 'success',
        message: `Complaint submitted successfully! Your complaint ID is ${complaintId}. You'll be notified once it's assigned to the concerned department.`
      });

      // Reset form
      setFormData({
        category: '',
        subcategory: '',
        priority: 'medium',
        location: '',
        description: '',
        anonymous: false,
        attachments: []
      });
      setCharCount(0);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit complaint. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = 
    formData.category && 
    formData.subcategory && 
    formData.location.trim() &&
    formData.description.trim().length >= MIN_CHARS;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-primary">Hostel Complaints</h2>
            <p className="text-sm text-gray-500 mt-1">
              Report issues and track their resolution
            </p>
          </div>
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm font-medium"
          >
            <span>{showHistory ? '📝' : '📋'}</span>
            {showHistory ? 'New Complaint' : 'View History'}
          </button>
        </div>
      </div>

      <div className="p-6">
        {!showHistory ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Category Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Complaint Category <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {complaintCategories.map((category) => (
                  <button
                    key={category.value}
                    type="button"
                    onClick={() => handleInputChange('category', category.value)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.category === category.value
                        ? 'border-primary bg-primary/5 shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <div className="text-sm font-medium text-gray-900">{category.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Subcategory */}
            {selectedCategory && (
              <div className="animate-fadeIn">
                <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700 mb-2">
                  Specific Issue <span className="text-red-500">*</span>
                </label>
                <select
                  id="subcategory"
                  value={formData.subcategory}
                  onChange={(e) => handleInputChange('subcategory', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select specific issue...</option>
                  {selectedCategory.subcategories.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Priority and Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Priority */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Priority Level <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {priorityLevels.map((priority) => (
                    <button
                      key={priority.value}
                      type="button"
                      onClick={() => handleInputChange('priority', priority.value)}
                      className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                        formData.priority === priority.value
                          ? priority.color + ' border-current'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <span className="mr-1">{priority.icon}</span>
                      {priority.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  id="location"
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="e.g., Room 204, A-Block or Common Bathroom, 2nd Floor"
                  required
                />
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
                placeholder="Describe the issue in detail. Include when it started, how it affects you, and any other relevant information..."
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

            {/* File Attachments */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Attachments <span className="text-gray-400 text-xs">(Optional, max 3 images)</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-primary transition-colors">
                <input
                  type="file"
                  id="file-upload"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  disabled={formData.attachments.length >= 3}
                />
                <label
                  htmlFor="file-upload"
                  className={`flex flex-col items-center justify-center cursor-pointer ${
                    formData.attachments.length >= 3 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <span className="text-3xl mb-2">📎</span>
                  <span className="text-sm text-gray-600">
                    Click to upload images (JPG, PNG)
                  </span>
                </label>
              </div>

              {formData.attachments.length > 0 && (
                <div className="mt-3 space-y-2">
                  {formData.attachments.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🖼️</span>
                        <span className="text-sm text-gray-700 truncate max-w-xs">
                          {file.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({(file.size / 1024).toFixed(1)} KB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeAttachment(index)}
                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
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
                    Your name will not be visible to anyone except the hostel administration.
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
                  Submitting Complaint...
                </span>
              ) : (
                'Submit Complaint'
              )}
            </button>
          </form>
        ) : (
          /* Complaint History */
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Your Complaints</h3>
              <span className="text-sm text-gray-500">
                {complaintHistory.length} total
              </span>
            </div>

            {complaintHistory.map((complaint) => (
              <div
                key={complaint.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-sm font-medium text-gray-700">
                        #{complaint.id}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                        statusConfig[complaint.status].color
                      }`}>
                        {statusConfig[complaint.status].icon} {statusConfig[complaint.status].label}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {complaint.category} - {complaint.subcategory}
                    </h4>
                    <p className="text-sm text-gray-600">{complaint.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-3">
                  <span>📅 Submitted: {new Date(complaint.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  })}</span>
                  {complaint.resolvedDate && (
                    <span>✓ Resolved: {new Date(complaint.resolvedDate).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric'
                    })}</span>
                  )}
                  <span className={`px-2 py-1 rounded ${
                    priorityLevels.find(p => p.value === complaint.priority)?.color
                  }`}>
                    {priorityLevels.find(p => p.value === complaint.priority)?.icon} {
                      priorityLevels.find(p => p.value === complaint.priority)?.label
                    } Priority
                  </span>
                </div>

                {complaint.response && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-xs font-medium text-blue-900 mb-1">
                      Response from Administration:
                    </p>
                    <p className="text-sm text-blue-800">{complaint.response}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

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