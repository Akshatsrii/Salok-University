import { Construction } from "lucide-react";

export default function SuperAdminPage() {
  return (
    <div className="p-8">
      <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[500px] text-center">
        <Construction className="w-20 h-20 text-[#007bff] mb-6" />
        <h1 className="text-3xl font-bold text-[#1a2b4c] mb-4">Settings Management</h1>
        <p className="text-gray-500 max-w-lg">
          This super admin module is currently being wired up to the backend API.
          The backend controllers and routes are ready, and this UI will display the DataTable shortly.
        </p>
      </div>
    </div>
  );
}
