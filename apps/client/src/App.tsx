import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './pages/(dashboard)/layout';
import PageForgotPassword from './pages/(auth)/forgot-password/page';
import PageLogin from './pages/(auth)/login/page';
import PageMfa from './pages/(auth)/mfa/page';
import PageRegister from './pages/(auth)/register/page';
import AuthLayout from './pages/(auth)/layout';
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
import PageAcademicCalendar from './pages/(public)/academic-calendar/page';
import GenericInfoPage from './pages/(public)/GenericInfoPage';
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
import PagePhdAdmission from './pages/(public)/phd-admission/page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/about" element={<PageAbout />} />
        <Route path="/academics" element={<PageAcademics />} />
        <Route path="/academic-calendar" element={<PageAcademicCalendar />} />
        
        {/* Dynamic / Generic Content Routes (Grid Section 1: Admissions & Marksheets) */}
        <Route path="/ud-admission" element={<GenericInfoPage title="University Departments (UD) Admission" category="Admission" description="Welcome to the University Departments Admission portal. Explore the programs offered, eligibility criteria, and fee structure for the upcoming academic session." features={["Online application processing", "Merit-based selection", "Reservation policy compliance", "Dedicated helpdesk support"]} />} />
        <Route path="/cam-2023" element={<GenericInfoPage title="CAM-2023 Guidelines" category="Admission" description="Centralized Admission for M.Tech/M.Arch (CAM-2023) information and past year seat allocation statistics." features={["Past year cut-off ranks", "Seat matrix statistics", "Allotment procedures"]} />} />
        <Route path="/phd-admission" element={<PagePhdAdmission />} />
        <Route path="/syllabus" element={<GenericInfoPage title="Academic Syllabus" category="Admission" description="Download the official syllabus for all UG and PG programs. Ensure you are studying according to the latest academic council approvals." features={["B.Tech, B.Arch, MBA, MCA", "Choice Based Credit System (CBCS)", "Updated course outcomes"]} />} />
        
        <Route path="/marksheet-online" element={<GenericInfoPage title="Online Application for Marksheet" category="Certificate Applications" description="Apply for your semester marksheets, transcripts, or duplicate certificates completely online without visiting the university." features={["Digital fee payment", "Track application status", "Home delivery via speed post"]} documents={["Online Application Manual.pdf", "Fee Structure.pdf"]} />} />
        <Route path="/marksheet-offline" element={<GenericInfoPage title="Offline Application Process" category="Certificate Applications" description="Guidelines and forms for offline application of marksheets and certificates. Submit at the Examination Controller office." features={["Downloadable form no. 16", "Challan generation", "In-person verification"]} documents={["Form No. 16 Download.pdf", "Challan Format.pdf"]} />} />
        <Route path="/academic-certificates" element={<GenericInfoPage title="Various Academic Certificates" category="Certificate Applications" description="Apply for Migration Certificate, Provisional Degree Certificate (PDC), Character Certificate, or Medium of Instruction (MOI)." features={["Instant digital copy", "Verifiable QR code", "Standardized formats"]} />} />

        {/* Dynamic / Generic Content Routes (Grid Section 3: Circulars) */}
        <Route path="/rti-information" element={<GenericInfoPage title="RTI Information" category="Circulars" description="Information regarding the Right to Information Act, 2005. Details of the Public Information Officer (PIO) and First Appellate Authority." features={["Download RTI Application", "Fee details", "Appeal procedure"]} />} />
        <Route path="/circulars" element={<GenericInfoPage title="University Circulars" category="Circulars" description="Official circulars, orders, and notifications issued by the Registrar and Vice Chancellor." features={["Holiday announcements", "Administrative orders", "Faculty notices"]} />} />
        <Route path="/minutes" element={<GenericInfoPage title="BOM / AC / FC Minutes" category="Circulars" description="Minutes of the meetings for the Board of Management, Academic Council, and Finance Committee." features={["PDF records of meetings", "Key decisions", "Action taken reports"]} documents={["BOM Minutes 2025.pdf", "Academic Council Minutes.pdf"]} />} />
        <Route path="/rusa" element={<GenericInfoPage title="RUSA Minutes" category="Circulars" description="Rashtriya Uchchatar Shiksha Abhiyan (RUSA) project updates, minutes of meetings, and fund utilization reports." features={["Project tracking", "Committee minutes", "Financial reports"]} />} />
        <Route path="/form-16" element={<GenericInfoPage title="Download Form No. 16" category="Circulars" description="General examination/certificate application Form No. 16 for various administrative and examination related tasks." features={["Direct PDF download", "Instructions to fill", "Submission desk details"]} documents={["Form No. 16.pdf"]} />} />
        <Route path="/teqip" element={<GenericInfoPage title="TEQIP-III" category="Circulars" description="Technical Education Quality Improvement Programme (TEQIP-III) related documents, procurement details, and faculty development programs." features={["Procurement plan", "Audit reports", "FDP announcements"]} />} />
        <Route path="/central-library" element={<GenericInfoPage title="Central Library" category="Circulars" description="Guidelines, book bank rules, and online journal access instructions for the University Central Library." features={["E-journal access", "Book bank scheme", "Library timings"]} documents={["Library Rules.pdf", "E-Journal Passwords.pdf"]} />} />

        {/* Dynamic / Generic Content Routes (Grid Section 2: Examination & Important Links) */}
        <Route path="/exam-centers" element={<GenericInfoPage title="Exam Centers & Seating Arrangement" category="Examination" description="Find your designated examination center and detailed seating arrangement for the upcoming semester exams." features={["Center allocation rules", "Admit card verification", "Prohibited items list"]} />} />
        <Route path="/timetable" element={<GenericInfoPage title="University Time Table" category="Examination" description="Download the official theory and practical examination timetable for all affiliated colleges and university departments." features={["UG & PG schedules", "Shift timings", "Holiday adjustments"]} />} />
        <Route path="/exam-notices" element={<GenericInfoPage title="Examination Notices" category="Examination" description="Stay updated with the latest circulars, form filling dates, and fee submission deadlines from the Controller of Examination." features={["Late fee dates", "Form correction window", "Helpline numbers"]} />} />
        <Route path="/copy-view" element={<GenericInfoPage title="Copy View Notice" category="Examination" description="Procedure and application guidelines for students who wish to view their evaluated answer scripts." features={["Application timeline", "Fee per subject", "Revaluation linkage"]} />} />
        <Route path="/convocation-2026" element={<GenericInfoPage title="XV Convocation-2026" category="Examination" description="Details regarding the XV Convocation ceremony, dress code, registration, and degree distribution." features={["Chief guest details", "Dress code instructions", "Alumni registration"]} />} />
        <Route path="/mercy-chance" element={<GenericInfoPage title="Mercy Chance Examination" category="Examination" description="Special examination notification for students who have exhausted their maximum duration to complete the degree." features={["Eligibility criteria", "Special fee structure", "Subject limitations"]} />} />

        <Route path="/thought-lab" element={<GenericInfoPage title="Thought Lab" category="Important Links" description="An initiative to foster innovation, critical thinking, and psychological well-being among students and faculty." features={["Meditation sessions", "Cognitive training", "Research grants"]} />} />
        <Route path="/results-utd" element={<GenericInfoPage title="Results Page UTD" category="Important Links" description="Check the official semester results for all University Teaching Departments (UTD)." features={["CGPA calculation", "SGPA breakdown", "Revaluation results"]} />} />
        <Route path="/e-samadhan" element={<GenericInfoPage title="e-Samadhan portal" category="Important Links" description="UGC's centralized grievance redressal portal for students, faculty, and staff." features={["Anonymous complaints", "Anti-ragging helpline", "Fast-track resolution"]} />} />
        <Route path="/affiliated-colleges" element={<GenericInfoPage title="Affiliated Colleges" category="Important Links" description="Directory of all engineering, management, and architecture colleges affiliated with Salok University." features={["College codes", "Intake capacity", "Inspection reports"]} />} />

        {/* Dynamic / Generic Content Routes (Grid Section 4: Student Support) */}
        <Route path="/expert-lecture" element={<GenericInfoPage title="Expert Faculty Lecture" category="Student Support Services" description="Schedule and details of upcoming guest lectures by industry experts and distinguished academicians." features={["Industry insights", "Interactive Q&A", "E-certificates for attendance"]} />} />
        <Route path="/dean-welfare" element={<GenericInfoPage title="Dean Student Welfare" category="Student Support Services" description="Information regarding student welfare schemes, scholarships, and cultural activities overseen by the DSW." features={["Scholarship forms", "Cultural club registrations", "Student health insurance"]} documents={["Welfare Scheme Guidelines.pdf", "Scholarship Form.pdf"]} />} />
        <Route path="/programs" element={<GenericInfoPage title="Programs Offered" category="Student Support Services" description="Comprehensive list of all Undergraduate, Postgraduate, and Doctoral programs offered by the university." features={["B.Tech & B.Arch", "MBA & MCA", "M.Tech & Ph.D"]} />} />
        <Route path="/complaints" element={<GenericInfoPage title="Register Complaints" category="Student Support Services" description="Internal grievance registration portal for students regarding hostel, mess, academics, or administration." features={["Track complaint status", "Escalation matrix", "Confidentiality assured"]} />} />
        <Route path="/sc-st-cell" element={<GenericInfoPage title="SC/ST/OBC Cell (Grievances)" category="Student Support Services" description="Dedicated cell to resolve grievances and promote the welfare of students from marginalized communities." features={["Fellowship assistance", "Discrimination reporting", "Counseling sessions"]} />} />
        <Route path="/student-credentials" element={<GenericInfoPage title="Student Credentials" category="Student Support Services" description="Portal to verify digital student credentials, ID cards, and official email addresses." features={["Digital ID generation", "Email password reset", "Wi-Fi access codes"]} />} />
        <Route path="/placement" element={<GenericInfoPage title="Training & Placement" category="Student Support Services" description="Central Training and Placement Cell providing internship opportunities and campus recruitment drives." features={["Resume building workshops", "Mock interviews", "Company profiles"]} documents={["Placement Brochure 2026.pdf"]} />} />
        <Route path="/womens-cell" element={<GenericInfoPage title="Mahila Utpeedan Samiti" category="Student Support Services" description="Women's Grievance Redressal Cell dedicated to ensuring a safe and harassment-free campus environment." features={["Zero tolerance policy", "Internal Complaints Committee", "Emergency helplines"]} />} />

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

        {/* Auth Routes wrapped in layout */}
        <Route element={<AuthLayout />}>
          <Route path="/forgot-password" element={<PageForgotPassword />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/mfa" element={<PageMfa />} />
          <Route path="/register" element={<PageRegister />} />
        </Route>

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
