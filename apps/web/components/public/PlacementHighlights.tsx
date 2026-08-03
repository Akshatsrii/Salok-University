import { Briefcase, TrendingUp, Building2 } from 'lucide-react';

export const PlacementHighlights = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Record-Breaking Placements</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Our students consistently secure top roles in Fortune 500 companies globally.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-700/50 p-8 rounded-xl backdrop-blur-sm border border-blue-500/30 text-center">
            <div className="flex justify-center mb-4">
              <TrendingUp className="w-12 h-12 text-blue-200" />
            </div>
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="text-blue-200 text-lg">Placement Rate</div>
          </div>
          <div className="bg-blue-700/50 p-8 rounded-xl backdrop-blur-sm border border-blue-500/30 text-center">
            <div className="flex justify-center mb-4">
              <Briefcase className="w-12 h-12 text-blue-200" />
            </div>
            <div className="text-4xl font-bold mb-2">42 LPA</div>
            <div className="text-blue-200 text-lg">Highest Package</div>
          </div>
          <div className="bg-blue-700/50 p-8 rounded-xl backdrop-blur-sm border border-blue-500/30 text-center">
            <div className="flex justify-center mb-4">
              <Building2 className="w-12 h-12 text-blue-200" />
            </div>
            <div className="text-4xl font-bold mb-2">250+</div>
            <div className="text-blue-200 text-lg">Recruiting Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};
