import { useState } from 'react';

export default function SemesterFee() {
  const [isLoading, setIsLoading] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  // Sample fee data - replace with actual data from props or API
  const feeDetails = {
    amount: 5000,
    currency: '$',
    semester: 'Spring 2024',
    dueDate: 'March 15, 2024',
    status: 'pending' // 'pending', 'paid', 'overdue'
  };

  const handlePayment = async () => {
    setIsLoading(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Add your actual payment logic here
      // const response = await processPayment(feeDetails);
      
      setIsPaid(true);
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'text-green-600 bg-green-50';
      case 'overdue':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-amber-600 bg-amber-50';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-primary text-xl font-semibold">Semester Fee</h2>
        <span 
          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(isPaid ? 'paid' : feeDetails.status)}`}
          aria-label={`Payment status: ${isPaid ? 'paid' : feeDetails.status}`}
        >
          {isPaid ? 'Paid' : feeDetails.status.charAt(0).toUpperCase() + feeDetails.status.slice(1)}
        </span>
      </div>

      {/* Fee Details */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Semester:</span>
          <span className="font-medium text-gray-900">{feeDetails.semester}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Amount:</span>
          <span className="font-bold text-2xl text-primary">
            {feeDetails.currency}{feeDetails.amount.toLocaleString()}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Due Date:</span>
          <span className="font-medium text-gray-900">{feeDetails.dueDate}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* Action Button */}
      {isPaid ? (
        <div className="flex items-center justify-center gap-2 py-2 text-green-600">
          <svg 
            className="w-5 h-5" 
            fill="currentColor" 
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path 
              fillRule="evenodd" 
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
              clipRule="evenodd" 
            />
          </svg>
          <span className="font-medium">Payment Successful</span>
        </div>
      ) : (
        <button
          onClick={handlePayment}
          disabled={isLoading}
          className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium
                   hover:bg-primary/90 active:bg-primary/80
                   disabled:bg-gray-400 disabled:cursor-not-allowed
                   transition-all duration-200 ease-in-out
                   focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                   transform hover:scale-[1.02] active:scale-[0.98]"
          aria-label={isLoading ? 'Processing payment' : 'Pay semester fee now'}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg 
                className="animate-spin h-5 w-5" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                  fill="none"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" 
                />
              </svg>
              Processing...
            </span>
          ) : (
            'Pay Now'
          )}
        </button>
      )}

      {/* Additional Info */}
      {!isPaid && (
        <p className="mt-4 text-xs text-gray-500 text-center">
          Secure payment powered by your institution
        </p>
      )}
    </div>
  );
}