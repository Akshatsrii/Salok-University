import React from 'react';
import { FinanceDashboard } from '@/components/finance/FinanceDashboard';
import { FeeCollectionTable } from '@/components/finance/FeeCollectionTable';
import { WalletCards } from 'lucide-react';

export default function AdminFinancePage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <WalletCards className="w-8 h-8 text-[#8a1538]" />
            Finance & Accounts
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Overview of revenue, pending fees, and recent transactions.
          </p>
        </div>
        <button className="bg-[#8a1538] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#6c102c] transition-colors shadow-sm">
          Generate Report
        </button>
      </div>

      <FinanceDashboard />
      
      <div className="mt-8">
        <FeeCollectionTable />
      </div>
    </div>
  );
}
