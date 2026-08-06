"use client";

import { useState } from 'react';

export const ParentsGuardianForm = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Parent / Guardian Details</h3>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 bg-blue-50 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors"
        >
          {isEditing ? 'Cancel Editing' : 'Edit Details'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <h4 className="font-semibold text-gray-800 border-b border-gray-100 pb-2 mb-4">Father's Details</h4>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" disabled={!isEditing} defaultValue="Arun Sharma" className="mt-1 w-full border border-gray-300 rounded-md p-2.5 disabled:bg-gray-50 disabled:text-gray-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Occupation</label>
          <input type="text" disabled={!isEditing} defaultValue="Engineer" className="mt-1 w-full border border-gray-300 rounded-md p-2.5 disabled:bg-gray-50 disabled:text-gray-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="tel" disabled={!isEditing} defaultValue="+91 9876543211" className="mt-1 w-full border border-gray-300 rounded-md p-2.5 disabled:bg-gray-50 disabled:text-gray-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input type="email" disabled={!isEditing} defaultValue="arun.s@example.com" className="mt-1 w-full border border-gray-300 rounded-md p-2.5 disabled:bg-gray-50 disabled:text-gray-500" />
        </div>
      </div>

      {isEditing && (
        <div className="flex justify-end mt-6">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition-colors">
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};
