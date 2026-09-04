
import { Briefcase } from "lucide-react";
import { EmptyState } from "../shared/EmptyState";

export const JobBoard = () => {
  const jobs: any[] = [
    // { role: "Software Engineer II", company: "Google", location: "Bangalore" },
    // { role: "Product Manager", company: "Microsoft", location: "Hyderabad" }
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm col-span-1">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600">
          <Briefcase className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-gray-900 text-lg">Alumni Job Board</h3>
      </div>
      
      {jobs.length > 0 ? (
        <>
          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <div key={idx} className="p-3 rounded-xl border border-gray-100 hover:border-emerald-100 transition-colors">
                <h4 className="font-bold text-gray-900 text-sm">{job.role}</h4>
                <p className="text-xs text-gray-500 mt-1">{job.company} • {job.location}</p>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 bg-gray-50 text-gray-700 font-bold py-2 rounded-xl text-sm hover:bg-gray-100 transition-colors">
            View All Jobs
          </button>
        </>
      ) : (
        <EmptyState 
          title="No jobs posted yet" 
          description="Alumni will post job openings here soon." 
          icon={Briefcase} 
        />
      )}
    </div>
  );
};
