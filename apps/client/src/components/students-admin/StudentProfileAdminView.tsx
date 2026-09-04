
import { useState } from 'react';
import { PersonalInfoTab } from './PersonalInfoTab';
import { AcademicTab } from './AcademicTab';
import { AttendanceTab } from './AttendanceTab';
import { FeesTab } from './FeesTab';
import { DocumentsTab } from './DocumentsTab';
import { DisciplinaryTab } from './DisciplinaryTab';

export const StudentProfileAdminView = ({ studentId }: { studentId: string }) => {
  const [activeTab, setActiveTab] = useState('Personal');
  
  const tabs = ['Personal', 'Academic', 'Attendance', 'Fees', 'Documents', 'Disciplinary'];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden min-h-[500px]">
      <div className="flex border-b border-gray-200 overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="p-6">
        {activeTab === 'Personal' && <PersonalInfoTab />}
        {activeTab === 'Academic' && <AcademicTab />}
        {activeTab === 'Attendance' && <AttendanceTab />}
        {activeTab === 'Fees' && <FeesTab />}
        {activeTab === 'Documents' && <DocumentsTab />}
        {activeTab === 'Disciplinary' && <DisciplinaryTab />}
      </div>
    </div>
  );
};
