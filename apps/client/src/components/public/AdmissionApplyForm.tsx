
import { useState } from 'react';

export const AdmissionApplyForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '', dob: '', gender: 'Male', phone: '', email: '', aadhaarNumber: '', courseApplied: 'B.Tech CSE'
  });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application Submitted Successfully!');
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <div className={`flex-1 text-center font-bold ${step === 1 ? 'text-blue-600' : 'text-gray-400'}`}>1. Personal Info</div>
        <div className={`flex-1 text-center font-bold ${step === 2 ? 'text-blue-600' : 'text-gray-400'}`}>2. Document Upload</div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" className="mt-1 w-full border border-gray-300 rounded-md p-2" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="date" className="mt-1 w-full border border-gray-300 rounded-md p-2" value={formData.dob} onChange={e => setFormData({...formData, dob: e.target.value})} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full border border-gray-300 rounded-md p-2" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" className="mt-1 w-full border border-gray-300 rounded-md p-2" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Aadhaar Number</label>
                <input type="text" className="mt-1 w-full border border-gray-300 rounded-md p-2" value={formData.aadhaarNumber} onChange={e => setFormData({...formData, aadhaarNumber: e.target.value})} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Course Applied For</label>
                <select className="mt-1 w-full border border-gray-300 rounded-md p-2" value={formData.courseApplied} onChange={e => setFormData({...formData, courseApplied: e.target.value})}>
                  <option>B.Tech CSE</option>
                  <option>BBA Data Analytics</option>
                  <option>B.Sc Biotechnology</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button type="button" onClick={handleNext} className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Next Step</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Document Upload</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Passport Size Photo</label>
                <input type="file" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Scanned Signature</label>
                <input type="file" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Aadhaar Card (PDF/Image)</label>
                <input type="file" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">12th Marksheet</label>
                <input type="file" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
              </div>
            </div>
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-md text-sm text-yellow-800">
              Note: All documents will be verified by our AI system. Please ensure they are clear and legible.
            </div>
            <div className="mt-6 flex justify-between">
              <button type="button" onClick={handlePrev} className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300">Back</button>
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">Submit Application</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
