import { Trophy, Medal, Star } from 'lucide-react';

export const AchievementsList = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Extracurricular & Achievements</h3>
        <button className="px-4 py-2 bg-blue-50 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors">
          + Add Achievement
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-4 p-5 border border-gray-100 rounded-xl bg-white shadow-sm">
          <div className="p-3 bg-yellow-50 text-yellow-600 rounded-full">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-lg">Winner, National Hackathon 2025</h4>
            <p className="text-sm text-gray-500 mt-1">Secured 1st place among 500+ teams in the Smart India Hackathon.</p>
            <div className="mt-3 flex gap-2">
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-medium">Technical</span>
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-medium">National Level</span>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 border border-gray-100 rounded-xl bg-white shadow-sm">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
            <Star className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-lg">President, Coding Club</h4>
            <p className="text-sm text-gray-500 mt-1">Elected as the president of the university's official coding club for the year 2025-26.</p>
            <div className="mt-3 flex gap-2">
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-medium">Leadership</span>
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-medium">University Level</span>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 border border-gray-100 rounded-xl bg-white shadow-sm">
          <div className="p-3 bg-green-50 text-green-600 rounded-full">
            <Medal className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-lg">Runner-up, Inter-College Basketball</h4>
            <p className="text-sm text-gray-500 mt-1">Part of the university team that secured 2nd place in the state-level sports meet.</p>
            <div className="mt-3 flex gap-2">
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-medium">Sports</span>
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-medium">State Level</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
