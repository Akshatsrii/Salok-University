import { Book, Search, Plus, Filter, AlertCircle } from "lucide-react";

export default function FacilityLibraryPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#1a2b4c]">Library Management</h1>
          <p className="text-gray-500">Manage catalog, issue books, and track returns.</p>
        </div>
        <button className="bg-[#007bff] text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-blue-700">
          <Plus className="w-4 h-4" /> Add New Book
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <Book className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-[#1a2b4c]">12,450</div>
            <div className="text-sm text-gray-500">Total Books</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-[#1a2b4c]">342</div>
            <div className="text-sm text-gray-500">Issued Currently</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-[#1a2b4c]">45</div>
            <div className="text-sm text-gray-500">Overdue Returns</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search by ISBN, Title, or Author..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <button className="border border-gray-200 px-4 py-2 rounded-xl flex items-center gap-2 text-gray-600 hover:bg-gray-50">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
        
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 border-b border-gray-100">
              <th className="pb-3 font-medium">ISBN</th>
              <th className="pb-3 font-medium">Book Title</th>
              <th className="pb-3 font-medium">Author</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td colSpan={5} className="py-8 text-center text-gray-400">Loading catalog from backend...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
