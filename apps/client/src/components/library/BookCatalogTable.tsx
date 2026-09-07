import React from 'react';
import { BookMarked } from 'lucide-react';

export function BookCatalogTable() {
  const books = [
    { id: 1, title: 'Introduction to Algorithms', author: 'Cormen', isbn: '978-0262033848', total: 5, available: 2 },
    { id: 2, title: 'Clean Code', author: 'Robert C. Martin', isbn: '978-0132350884', total: 10, available: 0 },
    { id: 3, title: 'Database System Concepts', author: 'Silberschatz', isbn: '978-0078022159', total: 8, available: 8 },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
            <th className="p-4 font-bold">Book Title</th>
            <th className="p-4 font-bold">Author</th>
            <th className="p-4 font-bold">ISBN</th>
            <th className="p-4 font-bold text-center">Availability</th>
            <th className="p-4 font-bold text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {books.map(book => (
            <tr key={book.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
              <td className="p-4 font-bold text-gray-900 flex items-center gap-3">
                <BookMarked className="w-5 h-5 text-gray-400" />
                {book.title}
              </td>
              <td className="p-4 text-gray-600">{book.author}</td>
              <td className="p-4 text-gray-500 font-mono text-xs">{book.isbn}</td>
              <td className="p-4 text-center">
                <span className={`px-2 py-1 rounded text-xs font-bold ${book.available > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {book.available} / {book.total}
                </span>
              </td>
              <td className="p-4 text-right">
                <button 
                  className="text-sm font-bold text-[#8a1538] hover:underline disabled:opacity-50 disabled:no-underline"
                  disabled={book.available === 0}
                >
                  Issue
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
