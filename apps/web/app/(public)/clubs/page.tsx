import { EventListing } from '../../../components/extras/EventListing';
import { Users } from 'lucide-react';

export default function ClubsPage() {
  const clubs = [
    { name: "Robotics Society", members: 120, category: "Technical" },
    { name: "Debate Club", members: 85, category: "Literary" },
    { name: "Music Society", members: 200, category: "Cultural" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-[#1a2b4c] mb-4">Student Clubs & Societies</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">Explore your passions and build lifelong friendships through our diverse student organizations.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Clubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubs.map((club, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-[#1a2b4c]">{club.name}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {club.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  {club.members} Active Members
                </div>
                <button className="mt-4 text-[#007bff] font-semibold text-sm hover:underline">
                  Join Club &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <EventListing />
        </div>
      </div>
    </div>
  );
}
