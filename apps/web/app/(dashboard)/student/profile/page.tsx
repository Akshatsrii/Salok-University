"use client";

import { useState } from 'react';
import { User, BookOpen, Calendar, IndianRupee, Library, Building, Briefcase, Bot } from 'lucide-react';
import Link from 'next/link';

// Import all forms/views
import { PersonalDetailsForm } from '../../../../components/student/profile/PersonalDetailsForm';
import { ParentsGuardianForm } from '../../../../components/student/profile/ParentsGuardianForm';
import { MedicalEmergencyForm } from '../../../../components/student/profile/MedicalEmergencyForm';
import { AcademicInfoView } from '../../../../components/student/profile/AcademicInfoView';
import { AchievementsList } from '../../../../components/student/profile/AchievementsList';
import { ResumeSkillsForm } from '../../../../components/student/profile/ResumeSkillsForm';
import { CodingProfilesForm } from '../../../../components/student/profile/CodingProfilesForm';

export default function StudentProfilePage() {
  const [activeTab, setActiveTab] = useState('Personal Details');

  const navItems = [
    { label: 'Dashboard', icon: <BookOpen className="w-4 h-4" />, href: '/student' },
    { label: 'Attendance', icon: <Calendar className="w-4 h-4" />, href: '/student/attendance' },
    { label: 'Timetable', icon: <Calendar className="w-4 h-4" />, href: '/student/timetable' },
    { label: 'Assignments', icon: <BookOpen className="w-4 h-4" />, href: '/student/assignments' },
    { label: 'Exams & Results', icon: <BookOpen className="w-4 h-4" />, href: '/student/exams' },
    { label: 'Fees', icon: <IndianRupee className="w-4 h-4" />, href: '/student/fees' },
    { label: 'Library', icon: <Library className="w-4 h-4" />, href: '/student/library' },
    { label: 'Hostel', icon: <Building className="w-4 h-4" />, href: '/student/hostel' },
    { label: 'Placement', icon: <Briefcase className="w-4 h-4" />, href: '/student/placement' },
    { label: 'AI Assistant', icon: <Bot className="w-4 h-4" />, href: '/student/ai' },
    { label: 'Profile', icon: <User className="w-4 h-4" />, href: '/student/profile' },
  ];

  const profileTabs = [
    'Personal Details',
    'Parents/Guardian',
    'Medical & Emergency',
    'Academic Info',
    'Achievements',
    'Resume & Skills',
    'Coding Profiles'
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Student Navbar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-6 overflow-x-auto py-3 no-scrollbar">
            {navItems.map((item, idx) => (
              <Link 
                key={idx} 
                href={item.href}
                className={`flex items-center gap-2 whitespace-nowrap text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                  item.label === 'Profile' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {item.icon} {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="p-8 max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Tabs */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex flex-col">
                {profileTabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-left px-6 py-4 text-sm font-medium transition-colors border-l-4 ${
                      activeTab === tab 
                        ? 'border-blue-600 bg-blue-50 text-blue-700' 
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            {activeTab === 'Personal Details' && <PersonalDetailsForm />}
            {activeTab === 'Parents/Guardian' && <ParentsGuardianForm />}
            {activeTab === 'Medical & Emergency' && <MedicalEmergencyForm />}
            {activeTab === 'Academic Info' && <AcademicInfoView />}
            {activeTab === 'Achievements' && <AchievementsList />}
            {activeTab === 'Resume & Skills' && <ResumeSkillsForm />}
            {activeTab === 'Coding Profiles' && <CodingProfilesForm />}
          </div>
        </div>
      </div>
    </div>
  );
}
