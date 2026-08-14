"use client";

import { useState } from 'react';
import { Briefcase, Building, ExternalLink } from 'lucide-react';

export const EligibleDrivesList = () => {
  const [drives] = useState([
    { id: 'd1', companyName: 'Amazon', role: 'SDE-1', package: '44 LPA', deadline: '2026-08-18' },
    { id: 'd2', companyName: 'Wipro', role: 'Project Engineer', package: '6.5 LPA', deadline: '2026-08-25' }
  ]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Briefcase className="w-5 h-5 text-indigo-500" /> Eligible Placement Drives
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {drives.map(drive => (
          <div key={drive.id} className="border border-gray-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{drive.companyName}</h4>
                  <p className="text-xs font-semibold text-indigo-600">{drive.role}</p>
                </div>
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                {drive.package}
              </span>
            </div>
            
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
              <span className="text-xs text-gray-500 font-medium">Apply by: {drive.deadline}</span>
              <button className="text-sm font-bold text-indigo-600 flex items-center gap-1 group-hover:text-indigo-700">
                Apply Now <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
