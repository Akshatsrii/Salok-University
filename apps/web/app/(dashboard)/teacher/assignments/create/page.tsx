import { AssignmentForm } from '../../../../../components/assignments/AssignmentForm';
import { RubricBuilder } from '../../../../../components/assignments/RubricBuilder';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CreateAssignmentPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <Link href="/teacher/assignments" className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 w-fit mb-4">
        <ArrowLeft className="w-4 h-4" /> Back to Assignments
      </Link>
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Create New Assignment</h1>
        <p className="text-gray-500 mt-1">Configure details and build a grading rubric.</p>
      </div>

      <div className="space-y-6">
        <AssignmentForm />
        <RubricBuilder />
      </div>
    </div>
  );
}
