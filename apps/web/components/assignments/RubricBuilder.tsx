"use client";

import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

export const RubricBuilder = () => {
  const [criteria, setCriteria] = useState([
    { id: 1, name: 'Code Quality', marks: 40 },
    { id: 2, name: 'Documentation', marks: 20 },
  ]);

  const addCriterion = () => {
    setCriteria([...criteria, { id: Date.now(), name: '', marks: 0 }]);
  };

  const removeCriterion = (id: number) => {
    setCriteria(criteria.filter(c => c.id !== id));
  };

  const totalMarks = criteria.reduce((sum, c) => sum + (Number(c.marks) || 0), 0);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-900">Grading Rubric</h3>
        <span className="text-sm font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
          Total: {totalMarks} Marks
        </span>
      </div>

      <div className="space-y-4">
        {criteria.map((c, index) => (
          <div key={c.id} className="flex gap-4 items-center">
            <div className="flex-1">
              <input 
                type="text" 
                defaultValue={c.name}
                placeholder="Criterion Name (e.g., Code Quality)" 
                className="w-full border border-gray-300 rounded-md p-2 text-sm outline-none focus:ring-1 focus:ring-blue-500" 
              />
            </div>
            <div className="w-24">
              <input 
                type="number" 
                defaultValue={c.marks}
                placeholder="Marks" 
                className="w-full border border-gray-300 rounded-md p-2 text-sm outline-none focus:ring-1 focus:ring-blue-500" 
              />
            </div>
            <button 
              onClick={() => removeCriterion(c.id)}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <button 
        onClick={addCriterion}
        className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
      >
        <Plus className="w-4 h-4" /> Add Criterion
      </button>
    </div>
  );
};
