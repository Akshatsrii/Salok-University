"use client";

import React from 'react';

interface Column<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyExtractor: (row: T) => string | number;
}

export function DataTable<T>({ data, columns, keyExtractor }: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto bg-white rounded-3xl border border-gray-100 shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50/50 border-b border-gray-100">
            {columns.map((col, idx) => (
              <th key={idx} className={`p-4 text-xs font-bold text-gray-500 uppercase tracking-wider ${col.className || ''}`}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {data.map((row) => (
            <tr key={keyExtractor(row)} className="hover:bg-gray-50/30 transition-colors group">
              {columns.map((col, idx) => (
                <td key={idx} className={`p-4 text-sm text-gray-700 ${col.className || ''}`}>
                  {typeof col.accessor === 'function' ? col.accessor(row) : (row[col.accessor] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
