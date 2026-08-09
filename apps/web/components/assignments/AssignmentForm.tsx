export const AssignmentForm = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Assignment Details</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Assignment Title</label>
          <input type="text" placeholder="e.g., Process Scheduling Lab" className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Target Course</label>
            <select className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-1 focus:ring-blue-500 bg-white">
              <option>B.Tech Computer Science - Sem 6</option>
              <option>B.Tech Computer Science - Sem 5</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Marks</label>
            <input type="number" defaultValue={100} className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Due Date & Time</label>
          <input type="datetime-local" className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-1 focus:ring-blue-500 text-gray-700" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Instructions / Description</label>
          <textarea rows={5} placeholder="Provide detailed instructions for the assignment..." className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-1 focus:ring-blue-500"></textarea>
        </div>

        <div className="pt-4 flex justify-end">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
            Create & Publish
          </button>
        </div>
      </div>
    </div>
  );
};
