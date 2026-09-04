
import { useState } from 'react';
import { Github, Code, ExternalLink } from 'lucide-react';
import { Link } from "react-router-dom";

export const CodingProfilesForm = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Coding Profiles</h3>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 bg-blue-50 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors"
        >
          {isEditing ? 'Cancel Editing' : 'Edit Profiles'}
        </button>
      </div>

      <div className="space-y-4">
        {/* GitHub */}
        <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl bg-white">
          <Github className="w-8 h-8 text-gray-800" />
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-500 mb-1">GitHub Username</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                disabled={!isEditing} 
                defaultValue="rahulsharma-dev" 
                className="w-full border border-gray-300 rounded-md p-2 text-sm disabled:bg-gray-50 disabled:text-gray-600" 
              />
              {!isEditing && (
                <Link href="https://github.com/rahulsharma-dev" target="_blank" className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-500">
                  <ExternalLink className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* LeetCode */}
        <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl bg-white">
          <Code className="w-8 h-8 text-yellow-600" />
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-500 mb-1">LeetCode Username</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                disabled={!isEditing} 
                defaultValue="rahul_codes" 
                className="w-full border border-gray-300 rounded-md p-2 text-sm disabled:bg-gray-50 disabled:text-gray-600" 
              />
              {!isEditing && (
                <Link href="https://leetcode.com/rahul_codes" target="_blank" className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-500">
                  <ExternalLink className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="flex justify-end mt-6">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition-colors">
            Save Profiles
          </button>
        </div>
      )}
    </div>
  );
};
