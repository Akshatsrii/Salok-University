import { Users, Shield, Key } from "lucide-react";

export default function UsersRolesPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#1a2b4c]">Users & Roles Management</h1>
          <p className="text-gray-500 mt-1">Manage system access, permissions, and user accounts.</p>
        </div>
        <button className="bg-[#007bff] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
          + Invite User
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-[#007bff] rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Users</p>
            <h3 className="text-2xl font-bold text-[#1a2b4c]">12,450</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-50 text-[#ffb800] rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Active Roles</p>
            <h3 className="text-2xl font-bold text-[#1a2b4c]">8</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
            <Key className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Pending Invites</p>
            <h3 className="text-2xl font-bold text-[#1a2b4c]">24</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-[#1a2b4c]">Recent Users</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-sm">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {["Rahul Sharma", "Priya Singh", "Amit Verma"].map((name, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-[#1a2b4c]">{name}</td>
                  <td className="px-6 py-4 text-gray-500">{name.split(' ')[0].toLowerCase()}@salok.edu</td>
                  <td className="px-6 py-4">
                    <span className="bg-blue-50 text-[#007bff] px-3 py-1 rounded-full text-xs font-bold">Student</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold">Active</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
