"use client";

import { useState } from 'react';
import { Activity, CheckCircle, Clock } from 'lucide-react';
import type { ApplicationStatus } from '../../types/placement';

export const ApplicationStatusTracker = () => {
  const [applications] = useState<ApplicationStatus[]>([
    { id: 'a1', companyName: 'Google', role: 'Software Engineer', appliedDate: '2026-08-01', status: 'TECH_CLEARED' },
    { id: 'a2', companyName: 'Microsoft', role: 'SDE-1', appliedDate: '2026-07-15', status: 'REJECTED' }
  ]);

  const stages = ['APPLIED', 'SHORTLISTED', 'APTITUDE_CLEARED', 'TECH_CLEARED', 'HR_CLEARED', 'SELECTED'];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Activity className="w-5 h-5 text-green-500" /> My Applications
      </h3>

      <div className="space-y-6">
        {applications.map(app => (
          <div key={app.id} className="border border-gray-200 rounded-lg p-5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-gray-900">{app.companyName}</h4>
                <p className="text-sm font-semibold text-gray-600">{app.role}</p>
                <p className="text-xs text-gray-400 mt-1">Applied: {app.appliedDate}</p>
              </div>
              <div>
                {app.status === 'REJECTED' ? (
                  <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">Rejected</span>
                ) : app.status === 'SELECTED' ? (
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Offer Received
                  </span>
                ) : (
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                    <Clock className="w-3 h-3" /> In Progress
                  </span>
                )}
              </div>
            </div>

            {/* Progress Bar (Skipped for Rejected/Selected to save space, shown for In Progress) */}
            {app.status !== 'REJECTED' && app.status !== 'SELECTED' && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between relative">
                  <div className="absolute left-0 top-1/2 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
                  
                  {stages.map((stage, idx) => {
                    const currentIndex = stages.indexOf(app.status);
                    const isCompleted = idx <= currentIndex;
                    const isCurrent = idx === currentIndex;
                    
                    return (
                      <div key={stage} className="relative z-10 flex flex-col items-center">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          isCompleted ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-gray-300'
                        } ${isCurrent ? 'ring-4 ring-indigo-100' : ''}`}></div>
                        <span className={`absolute top-6 text-[10px] font-bold text-center w-16 -ml-6 ${
                          isCurrent ? 'text-indigo-600' : isCompleted ? 'text-gray-700' : 'text-gray-400'
                        }`}>
                          {stage.replace('_', ' ')}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="h-8"></div> {/* Spacer for absolute text */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
