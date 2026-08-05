import { AlertTriangle, ShieldCheck } from 'lucide-react';

export const DisciplinaryTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Disciplinary Records</h3>
        <button className="px-3 py-1.5 text-sm font-semibold bg-red-50 text-red-700 rounded-md hover:bg-red-100">
          + Add Incident
        </button>
      </div>

      <div className="p-6 border border-gray-200 rounded-lg bg-gray-50 flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-3">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <h4 className="text-lg font-medium text-gray-900">Clean Record</h4>
        <p className="text-gray-500 text-sm mt-1 max-w-sm">
          This student currently has no disciplinary actions or warnings on file.
        </p>
      </div>

      {/* Example of what a record would look like */}
      {/* <div className="mt-6 border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r-lg">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900">Late Library Return Warning</h4>
            <p className="text-sm text-gray-700 mt-1">Student was issued a formal warning for keeping reference books beyond the permitted duration.</p>
            <div className="text-xs text-gray-500 mt-2">Reported by: Chief Librarian on 12 Sep 2024</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
