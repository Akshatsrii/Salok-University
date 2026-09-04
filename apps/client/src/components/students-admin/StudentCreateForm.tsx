
export const StudentCreateForm = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-3xl mx-auto">
      <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Add New Student</h3>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Student ID (Auto-generated)</label>
            <input type="text" disabled value="STU-2026-004" className="mt-1 w-full border border-gray-200 bg-gray-50 rounded-md p-2 text-gray-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" className="mt-1 w-full border border-gray-300 rounded-md p-2" placeholder="e.g. Rahul Sharma" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" className="mt-1 w-full border border-gray-300 rounded-md p-2" placeholder="rahul@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" className="mt-1 w-full border border-gray-300 rounded-md p-2" placeholder="+91 9876543210" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Course Enrolled</label>
            <select className="mt-1 w-full border border-gray-300 rounded-md p-2 bg-white">
              <option>B.Tech Computer Science</option>
              <option>BBA Data Analytics</option>
              <option>B.Sc Biotechnology</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Batch Year</label>
            <input type="text" className="mt-1 w-full border border-gray-300 rounded-md p-2" placeholder="2026" />
          </div>
        </div>

        <div className="pt-4 flex justify-end gap-4 border-t border-gray-100">
          <button type="button" className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-medium">Cancel</button>
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">Save Student</button>
        </div>
      </form>
    </div>
  );
};
