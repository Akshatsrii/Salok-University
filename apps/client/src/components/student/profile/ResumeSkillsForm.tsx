
import { useState } from 'react';
import { UploadCloud, FileText, X } from 'lucide-react';

export const ResumeSkillsForm = () => {
  const [skills, setSkills] = useState(['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'Python', 'Data Structures']);
  const [newSkill, setNewSkill] = useState('');

  const addSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newSkill.trim() !== '') {
      e.preventDefault();
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (indexToRemove: number) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Resume</h3>
        <div className="flex items-center gap-6 p-6 border border-gray-200 rounded-xl bg-gray-50">
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-1">
              <FileText className="w-5 h-5 text-blue-600" /> Rahul_Sharma_Resume_2026.pdf
            </h4>
            <p className="text-sm text-gray-500">Last updated on 10 Aug 2025 • 2.4 MB</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">View</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 flex items-center gap-2">
              <UploadCloud className="w-4 h-4" /> Update Resume
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Skills</h3>
        <div className="p-6 border border-gray-200 rounded-xl bg-white">
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, idx) => (
              <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm font-medium border border-gray-200">
                {skill}
                <button onClick={() => removeSkill(idx)} className="text-gray-400 hover:text-red-500">
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            ))}
          </div>
          <input 
            type="text" 
            placeholder="Type a skill and press Enter to add..." 
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={addSkill}
            className="w-full border border-gray-300 rounded-md p-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};
