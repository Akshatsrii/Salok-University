import { Sidebar } from "../../components/layout/Sidebar";
import { Topbar } from "../../components/layout/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#fffdf5]">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Topbar />
        <main className="flex-1 p-6 md:p-8">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 min-h-[calc(100vh-8rem)] overflow-hidden">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
