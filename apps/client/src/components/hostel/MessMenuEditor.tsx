
import { useState } from 'react';
import { Save, Utensils } from 'lucide-react';

export const MessMenuEditor = () => {
  const [menu, setMenu] = useState({
    monday: { breakfast: 'Poha, Jalebi', lunch: 'Rajma Chawal', dinner: 'Dal Tadka, Roti' },
    tuesday: { breakfast: 'Idli Sambar', lunch: 'Chole Bhature', dinner: 'Paneer Butter Masala' }
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Mess Menu Editor</h3>
          <p className="text-sm text-gray-500">Update the weekly food menu for students.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-blue-700 flex items-center gap-2">
          <Save className="w-4 h-4" /> Save Menu
        </button>
      </div>

      <div className="space-y-6">
        {Object.entries(menu).map(([day, meals]) => (
          <div key={day} className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-gray-800 capitalize mb-4 flex items-center gap-2">
              <Utensils className="w-4 h-4 text-orange-500" /> {day}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Breakfast</label>
                <input 
                  type="text" 
                  value={meals.breakfast}
                  className="w-full border border-gray-300 rounded p-2 text-sm"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Lunch</label>
                <input 
                  type="text" 
                  value={meals.lunch}
                  className="w-full border border-gray-300 rounded p-2 text-sm"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Dinner</label>
                <input 
                  type="text" 
                  value={meals.dinner}
                  className="w-full border border-gray-300 rounded p-2 text-sm"
                  readOnly
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
