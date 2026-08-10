import { ExaminationNav } from '../../../../../components/examination/ExaminationNav';
import { HallTicketGenerator } from '../../../../../components/examination/HallTicketGenerator';

export default function HallTicketsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Examination Module</h1>
        <p className="text-gray-500 mt-1">Manage schedules, hall tickets, results, and certificates.</p>
      </div>

      <ExaminationNav />
      <HallTicketGenerator />
    </div>
  );
}
