import { SubmissionUploader } from '../../../../../components/assignments/SubmissionUploader';
import { AIFeedbackPanel } from '../../../../../components/assignments/AIFeedbackPanel';
import { GradeDisplay } from '../../../../../components/assignments/GradeDisplay';
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Info } from 'lucide-react';

export default function AssignmentDetailPage() {
  // Stub status for demonstration. Change to 'Graded' to see feedback and grades.
  const status: string = 'Pending';

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <Link="/student/assignments" className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 w-fit mb-2">
        <ArrowLeft className="w-4 h-4" /> Back to Assignments
      </Link>
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Database Normalization</h1>
        <p className="text-gray-500 mt-1">Database Systems | Instructor: Dr. A. Sharma</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-gray-500" /> Instructions
            </h3>
            <div className="prose prose-sm text-gray-600 max-w-none">
              <p>Given the unnormalized table mapping in the attached document, you are required to:</p>
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                <li>Convert the table to 1NF.</li>
                <li>Identify partial dependencies and convert to 2NF.</li>
                <li>Identify transitive dependencies and convert to 3NF.</li>
                <li>Draw the final ER Diagram based on your 3NF tables.</li>
              </ol>
              <p className="mt-4 font-semibold text-gray-900">Submit your answer as a single PDF file containing both the step-by-step normalization process and the ER diagram.</p>
            </div>
          </div>

          {status === 'Pending' && <SubmissionUploader />}
          {status === 'Graded' && <AIFeedbackPanel />}
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
              <Info className="w-5 h-5 text-gray-500" /> Details
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Maximum Marks</span>
                <span className="font-semibold text-gray-900">100</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Format</span>
                <span className="font-semibold text-gray-900">PDF, DOCX</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-gray-500">Plagiarism Check</span>
                <span className="font-semibold text-blue-600">Enabled</span>
              </div>
            </div>
          </div>

          {status === 'Graded' && <GradeDisplay />}
        </div>
      </div>
    </div>
  );
}
