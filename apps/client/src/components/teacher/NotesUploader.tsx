
import { FileText, UploadCloud } from "lucide-react";
import { useState } from "react";

export const NotesUploader = () => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <FileText className="w-5 h-5 text-emerald-500" />
        <h3 className="font-bold text-[#1a2b4c] text-lg">Upload Notes & PDFs</h3>
      </div>

      <div 
        className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all ${isDragging ? 'border-[#ffb800] bg-[#fffdf5]' : 'border-gray-200 hover:border-gray-300'}`}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => { e.preventDefault(); setIsDragging(false); }}
      >
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <UploadCloud className="w-6 h-6 text-gray-400" />
        </div>
        <p className="font-bold text-gray-700 mb-1">Drag & Drop your PDFs here</p>
        <p className="text-xs text-gray-500 mb-4">PDF, PPT, DOCX up to 50MB</p>
        <button className="bg-[#ffb800] text-[#1a2b4c] px-6 py-2 rounded-xl text-sm font-semibold hover:bg-[#e6a600] transition-colors">
          Browse Files
        </button>
      </div>
    </div>
  );
};
