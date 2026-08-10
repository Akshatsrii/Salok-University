import { BulkMessageForm } from '../../../../components/communications/BulkMessageForm';

export default function AdminCommunicationsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">University Communications</h1>
        <p className="text-gray-500 mt-1">Send bulk emails, SMS, and Push notifications to students and faculty.</p>
      </div>

      <BulkMessageForm />
    </div>
  );
}
