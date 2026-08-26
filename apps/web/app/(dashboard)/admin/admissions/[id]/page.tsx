import { ApplicationDetail } from '../../../../../components/admissions/ApplicationDetail';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function ApplicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div>
        <Link href="/admin/admissions" className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Queue
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Application Review</h1>
      </div>
      
      <ApplicationDetail />
    </div>
  );
}
