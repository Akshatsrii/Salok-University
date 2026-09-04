
import { useState } from 'react';
import { Building2 } from 'lucide-react';

export const CompanyForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Building2 className="w-5 h-5 text-indigo-600" /> Onboard New Company
      </h3>

      {submitted ? (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg font-medium border border-green-100">
          Company onboarded successfully.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input type="text" required className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tier</label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none">
                <option>TIER_1 (Dream)</option>
                <option>TIER_2 (Super Dream)</option>
                <option>TIER_3 (Mass)</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
              <input type="url" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
          </div>
          
          <h4 className="font-semibold text-gray-700 pt-2 border-t border-gray-100 mt-4">HR Contact</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white font-medium py-2 rounded-md hover:bg-indigo-700 transition-colors mt-4">
            Onboard Company
          </button>
        </form>
      )}
    </div>
  );
};
