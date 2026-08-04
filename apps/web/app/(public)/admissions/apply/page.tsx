import { AdmissionApplyForm } from '../../../../components/public/AdmissionApplyForm';

export default function ApplyAdmissionPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Apply to Salok University</h1>
        <p className="mt-2 text-gray-600">Join our diverse community of learners and innovators.</p>
      </div>
      <AdmissionApplyForm />
    </div>
  );
}
