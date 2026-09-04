import { NoticeComposer } from '../../../../components/shared/NoticeComposer';
import { DeliveryLogTable } from '../../../../components/shared/DeliveryLogTable';

export default function AdminNoticesPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-gray-50 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Communication Center</h1>
        <p className="text-gray-500 mt-1">Broadcast notices and track delivery status.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <NoticeComposer />
        </div>
        <div className="lg:col-span-2">
          <DeliveryLogTable />
        </div>
      </div>
    </div>
  );
}
