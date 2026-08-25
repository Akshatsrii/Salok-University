"use client";

import { Book, Clock, Search, BookOpen } from "lucide-react";
import { StatCard } from "../../../../components/shared/StatCard";
import { DataTable } from "../../../../components/shared/DataTable";

export default function StudentLibraryPage() {
  const stats = [
    { title: "Books Issued", value: "3", icon: Book, color: "blue" as const },
    { title: "Overdue Books", value: "1", icon: Clock, color: "rose" as const },
    { title: "Pending Fines", value: "₹150", icon: BookOpen, color: "amber" as const },
  ];

  const issuedBooks = [
    { id: "B-1029", title: "Introduction to Algorithms", author: "Thomas H. Cormen", issueDate: "Aug 10", dueDate: "Aug 24", status: "Overdue" },
    { id: "B-4092", title: "Clean Code", author: "Robert C. Martin", issueDate: "Aug 15", dueDate: "Aug 29", status: "Active" },
    { id: "B-2281", title: "Design Patterns", author: "Gang of Four", issueDate: "Aug 20", dueDate: "Sep 03", status: "Active" },
  ];

  const columns = [
    { header: "Book Title", accessor: "title" as keyof typeof issuedBooks[0], className: "font-semibold" },
    { header: "Author", accessor: "author" as keyof typeof issuedBooks[0], className: "text-gray-500" },
    { header: "Issue Date", accessor: "issueDate" as keyof typeof issuedBooks[0] },
    { header: "Due Date", accessor: "dueDate" as keyof typeof issuedBooks[0], className: "font-medium" },
    { header: "Status", accessor: "status" as keyof typeof issuedBooks[0] },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Library Catalog</h1>
        <p className="text-gray-500 mt-1">Manage your issued books and browse the catalog.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <StatCard 
            key={idx}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-gray-900 text-lg">My Issued Books</h3>
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search catalog..." 
              className="pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#007bff] w-64"
            />
          </div>
        </div>
        
        <DataTable data={issuedBooks} columns={columns} keyExtractor={(r) => r.id} />
      </div>
    </div>
  );
}
