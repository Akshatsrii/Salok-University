import { JobBoard } from '../../../components/extras/JobBoard';
import { DonationForm } from '../../../components/extras/DonationForm';
import { EventListing } from '../../../components/extras/EventListing';
import { Network } from 'lucide-react';

export default function AlumniPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16 bg-[#1a2b4c] text-white py-16 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#007bff]/20 rounded-full blur-3xl -ml-20 -mt-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ffb800]/20 rounded-full blur-3xl -mr-20 -mb-20"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
            <Network className="w-8 h-8 text-[#ffb800]" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4">Alumni Network</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Stay connected with your alma mater, mentor current students, and grow your professional network globally.</p>
          <button className="mt-8 bg-[#ffb800] text-[#1a2b4c] font-bold px-8 py-3 rounded-xl hover:bg-[#e6a600] transition-colors">
            Register as Alumni
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <JobBoard />
        <EventListing />
        <DonationForm />
      </div>
    </div>
  );
}
