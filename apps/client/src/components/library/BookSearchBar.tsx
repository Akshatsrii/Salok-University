import React from 'react';
import { Search } from 'lucide-react';

export function BookSearchBar() {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#8a1538] focus:border-[#8a1538] sm:text-sm transition duration-150 ease-in-out"
          placeholder="Search by Title, Author, or ISBN..."
        />
      </div>
      <button className="bg-[#8a1538] text-white px-6 py-2 rounded-md font-bold hover:bg-[#6c102c] transition-colors">
        Search
      </button>
    </div>
  );
}
