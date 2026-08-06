"use client";

import { useState } from 'react';

export const MedicalEmergencyForm = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Medical & Emergency Details</h3>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 bg-blue-50 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors"
        >
          {isEditing ? 'Cancel Editing' : 'Edit Details'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Blood Group</label>
          <select disabled={!isEditing} defaultValue="O+" className="mt-1 w-full border border-gray-300 rounded-md p-2.5 disabled:bg-gray-50 disabled:text-gray-500">
            <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
            <option>O+</option><option>O-</option><option>AB+</option><option>AB-</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Any Existing Medical Conditions</label>
          <input type="text" disabled={!isEditing} defaultValue="None" className="mt-1 w-full border border-gray-300 rounded-md p-2.5 disabled:bg-gray-50 disabled:text-gray-500" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Allergies (if any)</label>
          <input type="text" disabled={!isEditing} defaultValue="Dust" className="mt-1 w-full border border-gray-300 rounded-md p-2.5 disabled:bg-gray-50 disabled:text-gray-500" />
        </div>
        
        <div className="md:col-span-2 mt-4">
          <h4 className="font-semibold text-gray-800 border-b border-gray-100 pb-2 mb-4">Emergency Contact (Other than Parents)</h4>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Name</label>
          <input type="text" disabled={!isEditing} defaultValue="Suresh Kumar" className="mt-1 w-full border border-gray-300 rounded-md p-2.5 disabled:bg-gray-50 disabled:text-gray-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Relation</label>
          <input type="text" disabled={!isEditing} defaultValue="Uncle" className="mt-1 w-full border border-gray-300 rounded-md p-2.5 disabled:bg-gray-50 disabled:text-gray-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="tel" disabled={!isEditing} defaultValue="+91 9876543212" className="mt-1 w-full border border-gray-300 rounded-md p-2.5 disabled:bg-gray-50 disabled:text-gray-500" />
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
