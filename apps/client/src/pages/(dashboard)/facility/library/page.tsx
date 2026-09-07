import React from 'react';
import { BookCatalogTable } from '@/components/library/BookCatalogTable';
import { BookSearchBar } from '@/components/library/BookSearchBar';
import { BookOpen } from 'lucide-react';

export default function FacilityLibraryDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#8a1538]" />
            Library Management
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Catalog, Book Issues, and Fines.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
        <BookSearchBar />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <BookCatalogTable />
      </div>
    </div>
  );
}
