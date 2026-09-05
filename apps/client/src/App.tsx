import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './pages/(dashboard)/layout';
import PageForgotPassword from './pages/(auth)/forgot-password/page';
import PageLogin from './pages/(auth)/login/page';
import PageMfa from './pages/(auth)/mfa/page';
import PageRegister from './pages/(auth)/register/page';
import PageAdminAdmissionsCounselling from './pages/(dashboard)/admin/admissions/counselling/page';
import PageAdminAdmissionsMeritList from './pages/(dashboard)/admin/admissions/merit-list/page';
import PageAdminAdmissions from './pages/(dashboard)/admin/admissions/page';
import PageAdminAdmissionsId from './pages/(dashboard)/admin/admissions/[id]/page';
import PageAdminAttendance from './pages/(dashboard)/admin/attendance/page';
import PageAdminCommunications from './pages/(dashboard)/admin/communications/page';
import PageAdminComplaints from './pages/(dashboard)/admin/complaints/page';
import PageAdminExaminationCertificates from './pages/(dashboard)/admin/examination/certificates/page';
import PageAdminExaminationHallTickets from './pages/(dashboard)/admin/examination/hall-tickets/page';
import PageAdminExaminationMarksEntry from './pages/(dashboard)/admin/examination/marks-entry/page';
import PageAdminExamination from './pages/(dashboard)/admin/examination/page';
import PageAdminExaminationResults from './pages/(dashboard)/admin/examination/results/page';
import PageAdminExaminationRevaluation from './pages/(dashboard)/admin/examination/revaluation/page';
import PageAdminExaminationSchedule from './pages/(dashboard)/admin/examination/schedule/page';
import PageAdminFinance from './pages/(dashboard)/admin/finance/page';
import PageAdminNotices from './pages/(dashboard)/admin/notices/page';
import PageAdmin from './pages/(dashboard)/admin/page';
import PageAdminPlacementCompanies from './pages/(dashboard)/admin/placement/companies/page';
import PageAdminPlacementDashboard from './pages/(dashboard)/admin/placement/dashboard/page';
import PageAdminPlacementDrives from './pages/(dashboard)/admin/placement/drives/page';
import PageAdminPlacement from './pages/(dashboard)/admin/placement/page';
import PageAdminPlacementReports from './pages/(dashboard)/admin/placement/reports/page';
import PageAdminStudentsAdd from './pages/(dashboard)/admin/students/add/page';
import PageAdminStudentsBulkImport from './pages/(dashboard)/admin/students/bulk-import/page';
import PageAdminStudents from './pages/(dashboard)/admin/students/page';
import PageAdminStudentsReports from './pages/(dashboard)/admin/students/reports/page';
import PageAdminStudentsId from './pages/(dashboard)/admin/students/[id]/page';
import PageFacilityHostelComplaints from './pages/(dashboard)/facility/hostel/complaints/page';
import PageFacilityHostelMess from './pages/(dashboard)/facility/hostel/mess/page';
import PageFacilityHostel from './pages/(dashboard)/facility/hostel/page';
import PageFacilityHostelRooms from './pages/(dashboard)/facility/hostel/rooms/page';
import PageFacilityHostelVisitors from './pages/(dashboard)/facility/hostel/visitors/page';
import PageFacilityLibrary from './pages/(dashboard)/facility/library/page';
import PageFacilityTransportAttendance from './pages/(dashboard)/facility/transport/attendance/page';
import PageFacilityTransportLiveTracking from './pages/(dashboard)/facility/transport/live-tracking/page';
import PageFacilityTransportMaintenance from './pages/(dashboard)/facility/transport/maintenance/page';
import PageFacilityTransport from './pages/(dashboard)/facility/transport/page';
import PageFacilityTransportRoutes from './pages/(dashboard)/facility/transport/routes/page';
import PageParent from './pages/(dashboard)/parent/page';
import PageStudentAiTools from './pages/(dashboard)/student/ai-tools/page';
import PageStudentAssignments from './pages/(dashboard)/student/assignments/page';
import PageStudentAssignmentsId from './pages/(dashboard)/student/assignments/[id]/page';
import PageStudentAttendance from './pages/(dashboard)/student/attendance/page';
import PageStudentFees from './pages/(dashboard)/student/fees/page';
import PageStudentHostel from './pages/(dashboard)/student/hostel/page';
import PageStudentLibrary from './pages/(dashboard)/student/library/page';
import PageStudentNotifications from './pages/(dashboard)/student/notifications/page';
import PageStudent from './pages/(dashboard)/student/page';
import PageStudentPlacementMockInterview from './pages/(dashboard)/student/placement/mock-interview/page';
import PageStudentPlacement from './pages/(dashboard)/student/placement/page';
import PageStudentPlacementResume from './pages/(dashboard)/student/placement/resume/page';
import PageStudentProfile from './pages/(dashboard)/student/profile/page';
import PageStudentTimetable from './pages/(dashboard)/student/timetable/page';
import PageStudentTransport from './pages/(dashboard)/student/transport/page';
import PageSuperAdminFeeStructure from './pages/(dashboard)/super-admin/fee-structure/page';
import PageSuperAdminInfrastructure from './pages/(dashboard)/super-admin/infrastructure/page';
import PageSuperAdminSettings from './pages/(dashboard)/super-admin/settings/page';
import PageSuperAdminUsersRoles from './pages/(dashboard)/super-admin/users-roles/page';
import PageSuperadminAcademicStructure from './pages/(dashboard)/superadmin/academic-structure/page';
import PageSuperadminCalendar from './pages/(dashboard)/superadmin/calendar/page';
import PageSuperadminFeeStructure from './pages/(dashboard)/superadmin/fee-structure/page';
import PageSuperadminInfrastructure from './pages/(dashboard)/superadmin/infrastructure/page';
import PageSuperadmin from './pages/(dashboard)/superadmin/page';
import PageSuperadminSettings from './pages/(dashboard)/superadmin/settings/page';
import PageSuperadminUniversity from './pages/(dashboard)/superadmin/university/page';
import PageSuperadminUsersRoles from './pages/(dashboard)/superadmin/users-roles/page';
import PageTeacherAiAssistant from './pages/(dashboard)/teacher/ai-assistant/page';
import PageTeacherAiTools from './pages/(dashboard)/teacher/ai-tools/page';
import PageTeacherAssignmentsCreate from './pages/(dashboard)/teacher/assignments/create/page';
import PageTeacherAssignments from './pages/(dashboard)/teacher/assignments/page';
import PageTeacherAssignmentsIdSubmissions from './pages/(dashboard)/teacher/assignments/[id]/submissions/page';
import PageTeacherAttendance from './pages/(dashboard)/teacher/attendance/page';
import PageTeacherClasses from './pages/(dashboard)/teacher/classes/page';
import PageTeacher from './pages/(dashboard)/teacher/page';
import PageTeacherResearch from './pages/(dashboard)/teacher/research/page';
import PageTeacherStudents from './pages/(dashboard)/teacher/students/page';
import PageTeacherTimetable from './pages/(dashboard)/teacher/timetable/page';
import PageAbout from './pages/(public)/about/page';
import PageAcademics from './pages/(public)/academics/page';
import PageAdmissionsApply from './pages/(public)/admissions/apply/page';
import PageAdmissions from './pages/(public)/admissions/page';
import PageAdvertisement from './pages/(public)/advertisement/page';
import PageAlumni from './pages/(public)/alumni/page';
import PageAlumniAssociation from './pages/(public)/alumni-association/page';
import PageAnnualReport from './pages/(public)/annual-report/page';
import PageCampusLife from './pages/(public)/campus-life/page';
import PageClubs from './pages/(public)/clubs/page';
import PageContact from './pages/(public)/contact/page';
import PageConvocation from './pages/(public)/convocation/page';
import PageDisclosures from './pages/(public)/disclosures/page';
import PageEventsGallery from './pages/(public)/events-gallery/page';
import PageLibrary from './pages/(public)/library/page';
import PageHome from './pages/(public)/page';
import PagePlacements from './pages/(public)/placements/page';
import PageRecruitment from './pages/(public)/recruitment/page';
import PageResearch from './pages/(public)/research/page';
import PageStrategicPlan from './pages/(public)/strategic-plan/page';
import PageVisionMission from './pages/(public)/vision-mission/page';
import PagePageTsx from './pages/page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/about" element={<PageAbout />} />
        <Route path="/academics" element={<PageAcademics />} />
        <Route path="/admissions/apply" element={<PageAdmissionsApply />} />
        <Route path="/admissions" element={<PageAdmissions />} />
        <Route path="/advertisement" element={<PageAdvertisement />} />
        <Route path="/alumni" element={<PageAlumni />} />
        <Route path="/alumni-association" element={<PageAlumniAssociation />} />
        <Route path="/annual-report" element={<PageAnnualReport />} />
        <Route path="/campus-life" element={<PageCampusLife />} />
        <Route path="/clubs" element={<PageClubs />} />
        <Route path="/contact" element={<PageContact />} />
        <Route path="/convocation" element={<PageConvocation />} />
        <Route path="/disclosures" element={<PageDisclosures />} />
        <Route path="/events-gallery" element={<PageEventsGallery />} />
        <Route path="/library" element={<PageLibrary />} />
        <Route path="/" element={<PageHome />} />
        <Route path="/placements" element={<PagePlacements />} />
        <Route path="/recruitment" element={<PageRecruitment />} />
        <Route path="/research" element={<PageResearch />} />
        <Route path="/strategic-plan" element={<PageStrategicPlan />} />
        <Route path="/vision-mission" element={<PageVisionMission />} />

        {/* Auth Routes */}
        <Route path="/forgot-password" element={<PageForgotPassword />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/mfa" element={<PageMfa />} />
        <Route path="/register" element={<PageRegister />} />

        {/* Dashboard Routes wrapped in layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/admin/admissions/counselling" element={<PageAdminAdmissionsCounselling />} />
          <Route path="/admin/admissions/merit-list" element={<PageAdminAdmissionsMeritList />} />
          <Route path="/admin/admissions" element={<PageAdminAdmissions />} />
          <Route path="/admin/admissions/:" element={<PageAdminAdmissionsId />} />
          <Route path="/admin/attendance" element={<PageAdminAttendance />} />
          <Route path="/admin/communications" element={<PageAdminCommunications />} />
          <Route path="/admin/complaints" element={<PageAdminComplaints />} />
          <Route path="/admin/examination/certificates" element={<PageAdminExaminationCertificates />} />
          <Route path="/admin/examination/hall-tickets" element={<PageAdminExaminationHallTickets />} />
          <Route path="/admin/examination/marks-entry" element={<PageAdminExaminationMarksEntry />} />
          <Route path="/admin/examination" element={<PageAdminExamination />} />
          <Route path="/admin/examination/results" element={<PageAdminExaminationResults />} />
          <Route path="/admin/examination/revaluation" element={<PageAdminExaminationRevaluation />} />
          <Route path="/admin/examination/schedule" element={<PageAdminExaminationSchedule />} />
          <Route path="/admin/finance" element={<PageAdminFinance />} />
          <Route path="/admin/notices" element={<PageAdminNotices />} />
          <Route path="/admin" element={<PageAdmin />} />
          <Route path="/admin/placement/companies" element={<PageAdminPlacementCompanies />} />
          <Route path="/admin/placement/dashboard" element={<PageAdminPlacementDashboard />} />
          <Route path="/admin/placement/drives" element={<PageAdminPlacementDrives />} />
          <Route path="/admin/placement" element={<PageAdminPlacement />} />
          <Route path="/admin/placement/reports" element={<PageAdminPlacementReports />} />
          <Route path="/admin/students/add" element={<PageAdminStudentsAdd />} />
          <Route path="/admin/students/bulk-import" element={<PageAdminStudentsBulkImport />} />
          <Route path="/admin/students" element={<PageAdminStudents />} />
          <Route path="/admin/students/reports" element={<PageAdminStudentsReports />} />
          <Route path="/admin/students/:" element={<PageAdminStudentsId />} />
          <Route path="/facility/hostel/complaints" element={<PageFacilityHostelComplaints />} />
          <Route path="/facility/hostel/mess" element={<PageFacilityHostelMess />} />
          <Route path="/facility/hostel" element={<PageFacilityHostel />} />
          <Route path="/facility/hostel/rooms" element={<PageFacilityHostelRooms />} />
          <Route path="/facility/hostel/visitors" element={<PageFacilityHostelVisitors />} />
          <Route path="/facility/library" element={<PageFacilityLibrary />} />
          <Route path="/facility/transport/attendance" element={<PageFacilityTransportAttendance />} />
          <Route path="/facility/transport/live-tracking" element={<PageFacilityTransportLiveTracking />} />
          <Route path="/facility/transport/maintenance" element={<PageFacilityTransportMaintenance />} />
          <Route path="/facility/transport" element={<PageFacilityTransport />} />
          <Route path="/facility/transport/routes" element={<PageFacilityTransportRoutes />} />
          <Route path="/parent" element={<PageParent />} />
          <Route path="/student/ai-tools" element={<PageStudentAiTools />} />
          <Route path="/student/assignments" element={<PageStudentAssignments />} />
          <Route path="/student/assignments/:" element={<PageStudentAssignmentsId />} />
          <Route path="/student/attendance" element={<PageStudentAttendance />} />
          <Route path="/student/fees" element={<PageStudentFees />} />
          <Route path="/student/hostel" element={<PageStudentHostel />} />
          <Route path="/student/library" element={<PageStudentLibrary />} />
          <Route path="/student/notifications" element={<PageStudentNotifications />} />
          <Route path="/student" element={<PageStudent />} />
          <Route path="/student/placement/mock-interview" element={<PageStudentPlacementMockInterview />} />
          <Route path="/student/placement" element={<PageStudentPlacement />} />
          <Route path="/student/placement/resume" element={<PageStudentPlacementResume />} />
          <Route path="/student/profile" element={<PageStudentProfile />} />
          <Route path="/student/timetable" element={<PageStudentTimetable />} />
          <Route path="/student/transport" element={<PageStudentTransport />} />
          <Route path="/super-admin/fee-structure" element={<PageSuperAdminFeeStructure />} />
          <Route path="/super-admin/infrastructure" element={<PageSuperAdminInfrastructure />} />
          <Route path="/super-admin/settings" element={<PageSuperAdminSettings />} />
          <Route path="/super-admin/users-roles" element={<PageSuperAdminUsersRoles />} />
          <Route path="/superadmin/academic-structure" element={<PageSuperadminAcademicStructure />} />
          <Route path="/superadmin/calendar" element={<PageSuperadminCalendar />} />
          <Route path="/superadmin/fee-structure" element={<PageSuperadminFeeStructure />} />
          <Route path="/superadmin/infrastructure" element={<PageSuperadminInfrastructure />} />
          <Route path="/superadmin" element={<PageSuperadmin />} />
          <Route path="/superadmin/settings" element={<PageSuperadminSettings />} />
          <Route path="/superadmin/university" element={<PageSuperadminUniversity />} />
          <Route path="/superadmin/users-roles" element={<PageSuperadminUsersRoles />} />
          <Route path="/teacher/ai-assistant" element={<PageTeacherAiAssistant />} />
          <Route path="/teacher/ai-tools" element={<PageTeacherAiTools />} />
          <Route path="/teacher/assignments/create" element={<PageTeacherAssignmentsCreate />} />
          <Route path="/teacher/assignments" element={<PageTeacherAssignments />} />
          <Route path="/teacher/assignments/:/submissions" element={<PageTeacherAssignmentsIdSubmissions />} />
          <Route path="/teacher/attendance" element={<PageTeacherAttendance />} />
          <Route path="/teacher/classes" element={<PageTeacherClasses />} />
          <Route path="/teacher" element={<PageTeacher />} />
          <Route path="/teacher/research" element={<PageTeacherResearch />} />
          <Route path="/teacher/students" element={<PageTeacherStudents />} />
          <Route path="/teacher/timetable" element={<PageTeacherTimetable />} />
        </Route>
        
        {/* Fallback */}
        <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-2xl font-bold">404 - Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
