import { QuestionPaperGenerator } from '../../../../components/teacher/QuestionPaperGenerator';
import { MCQGenerator } from '../../../../components/teacher/MCQGenerator';
import { LabSheetGenerator } from '../../../../components/teacher/LabSheetGenerator';
import { LessonPlanGenerator } from '../../../../components/teacher/LessonPlanGenerator';

export default function TeacherAIAssistantPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Salok AI Assistant</h1>
          <p className="text-gray-500 mt-1">Supercharge your teaching workflow with our AI generation tools.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <QuestionPaperGenerator />
        <MCQGenerator />
        <LabSheetGenerator />
        <LessonPlanGenerator />
      </div>
      
      {/* Interactive AI Chat Box for teachers could go here in future */}
    </div>
  );
}
