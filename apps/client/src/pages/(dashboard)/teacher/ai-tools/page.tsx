import { GradePredictor } from '../../../../components/ai/GradePredictor';

export default function TeacherAIToolsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Faculty AI Toolkit</h1>
        <p className="text-gray-500 mt-1">Leverage Salok University AI models to analyze class performance and predict grades.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <GradePredictor />
        </div>
        
        <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Automated Rubric Generator</h3>
          <p className="text-sm text-gray-500 mb-6">Generate grading rubrics from assignment prompts.</p>
          
          <div className="p-4 border border-dashed border-gray-300 rounded-lg text-center">
            <p className="text-gray-500 text-sm">Select an assignment to generate a rubric.</p>
            <button className="mt-3 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
              Browse Assignments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
