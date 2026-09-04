import { Utensils } from 'lucide-react';

export const MessMenu = () => {
  const todaysMenu = {
    breakfast: 'Aloo Paratha, Curd, Tea',
    lunch: 'Dal Makhani, Mix Veg, Rice, Roti',
    snacks: 'Samosa, Coffee',
    dinner: 'Paneer Tikka Masala, Naan, Gulab Jamun'
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Utensils className="w-5 h-5 text-orange-500" /> Today's Mess Menu
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg">
          <p className="text-xs font-bold text-orange-800 uppercase mb-1">Breakfast (8:00 AM - 10:00 AM)</p>
          <p className="text-sm font-medium text-gray-800">{todaysMenu.breakfast}</p>
        </div>
        <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg">
          <p className="text-xs font-bold text-orange-800 uppercase mb-1">Lunch (12:30 PM - 2:30 PM)</p>
          <p className="text-sm font-medium text-gray-800">{todaysMenu.lunch}</p>
        </div>
        <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg">
          <p className="text-xs font-bold text-orange-800 uppercase mb-1">Snacks (5:00 PM - 6:00 PM)</p>
          <p className="text-sm font-medium text-gray-800">{todaysMenu.snacks}</p>
        </div>
        <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg">
          <p className="text-xs font-bold text-orange-800 uppercase mb-1">Dinner (8:00 PM - 10:00 PM)</p>
          <p className="text-sm font-medium text-gray-800">{todaysMenu.dinner}</p>
        </div>
      </div>
    </div>
  );
};
