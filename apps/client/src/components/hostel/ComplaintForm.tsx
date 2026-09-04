
import { useState } from 'react';
import { Wrench } from 'lucide-react';

export const ComplaintForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Wrench className="w-5 h-5 text-red-500" /> Log a Maintenance Complaint
      </h3>

      {submitted ? (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg font-medium border border-green-100">
          Complaint logged successfully. The facility team will look into it shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Plumbing (Leakages, Blockages)</option>
              <option>Electrical (Fan, Lights, Sockets)</option>
              <option>Carpentry (Beds, Cupboards, Doors)</option>
              <option>Cleaning & Hygiene</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Issue Description</label>
            <textarea 
              rows={3} 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Describe the issue in your room..."
              required
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition-colors">
            Submit Complaint
          </button>
        </form>
      )}
    </div>
  );
};
