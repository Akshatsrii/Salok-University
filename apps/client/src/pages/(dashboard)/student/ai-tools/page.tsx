import { ResumeAnalyzerUI } from '../../../../components/ai/ResumeAnalyzerUI';

export default function StudentAIToolsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">AI Student Toolkit</h1>
        <p className="text-gray-500 mt-1">Leverage Salok University AI models to improve your academic and placement performance.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <ResumeAnalyzerUI />
        </div>
        
        <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Recommendations</h3>
          <p className="text-sm text-gray-500 mb-6">Based on your recent exam performance.</p>
          
          <ul className="space-y-4">
            <li className="p-4 bg-blue-50 text-blue-800 rounded-lg text-sm font-medium border border-blue-100">
              📖 Book Suggestion: Introduction to Algorithms (Cormen)
            </li>
            <li className="p-4 bg-purple-50 text-purple-800 rounded-lg text-sm font-medium border border-purple-100">
              📺 Video Course: NPTEL Data Structures - Module 4
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
