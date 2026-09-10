import { useState } from "react";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { Calendar, ChevronRight, Download, Printer } from "lucide-react";
import { Link } from "react-router-dom";

// Hardcoded data matching the user's provided syllabus/calendar content
const coursesData = [
  {
    id: "bba",
    title: "Bachelor of Business Administration (BBA) for Odd Semester",
    semesters: ["I", "III", "V"],
    rows: [
      { label: "Induction Program/ Summer Internship", values: ["01.08.2026", "-", "06.05.2026- 07.07.2026"] },
      { label: "Commencement of Classes", values: ["17.08.2026", "13.07.2026", "13.07.2026"] },
      { label: "Commencement of First Mid Term", values: ["15.10.2026", "31.08.2026", "31.08.2026"] },
      { label: "Commencement of Second Mid Term", values: ["30.11.2026", "12.10.2026", "12.10.2026"] },
      { label: "Last Working Day", values: ["19.12.2026", "13.11.2026", "13.11.2026"] },
      { label: "Commencement of Practical Exams", values: ["-", "16.11.2026", "16.11.2026"] },
      { label: "Commencement of Theory Exams", values: ["04.01.2027", "27.11.2026", "26.11.2026"] },
    ],
    nextSems: { title: "Commencement of Classes for next even semesters (2026-27)", headers: ["II", "IV", "VI"], values: ["27.01.2027", "02.01.2027", "02.01.2027"] }
  },
  {
    id: "mba",
    title: "Master of Business Administration (MBA) for Odd Semester",
    semesters: ["I", "III"],
    rows: [
      { label: "Induction/Orientation Programme", values: ["01.08.2026", "-"] },
      { label: "Commencement of Classes", values: ["18.08.2026", "17.08.2026"] },
      { label: "Commencement of First Mid Term", values: ["15.10.2026", "05.10.2026"] },
      { label: "Commencement of Second Mid Term", values: ["30.11.2026", "16.11.2026"] },
      { label: "Last Working Day", values: ["19.12.2026", "18.12.2026"] },
      { label: "Commencement of Practical Exams", values: ["21.12.2026", "20.12.2026"] },
      { label: "Commencement of Theory Exams", values: ["08.01.2027", "09.01.2027"] },
    ],
    nextSems: { title: "Commencement of classes for next even semesters (2026-27)", headers: ["II", "IV"], values: ["19.01.2027", "25.01.2027"] }
  },
  {
    id: "mca",
    title: "Master of Computer Applications (MCA) for Odd Semester",
    semesters: ["I", "III"],
    rows: [
      { label: "Induction/Orientation Programme", values: ["01.08.2026", "-"] },
      { label: "Commencement of Classes", values: ["18.08.2026", "17.08.2026"] },
      { label: "Commencement of First Mid Term", values: ["15.10.2026", "05.10.2026"] },
      { label: "Commencement of Second Mid Term", values: ["30.11.2026", "16.11.2026"] },
      { label: "Last Working Day", values: ["19.12.2026", "18.12.2026"] },
      { label: "Commencement of Practical Exams", values: ["21.12.2026", "20.12.2026"] },
      { label: "Commencement of Theory Exams", values: ["08.01.2027", "09.01.2027"] },
    ],
    nextSems: { title: "Commencement of classes for next even semesters (2026-27)", headers: ["II", "IV"], values: ["19.01.2027", "25.01.2027"] }
  },
  {
    id: "bca",
    title: "Bachelor of Computer Applications (BCA) for Odd Semester",
    semesters: ["I", "III", "V"],
    rows: [
      { label: "Induction Program/ Summer Internship", values: ["01.08.2026", "-", "06.05.2026 – 07.07.2026"] },
      { label: "Commencement of Classes", values: ["17.08.2026", "13.07.2026", "13.07.2026"] },
      { label: "Commencement of First Mid Term", values: ["15.10.2026", "31.08.2026", "31.08.2026"] },
      { label: "Commencement of Second Mid Term", values: ["30.11.2026", "12.10.2026", "12.10.2026"] },
      { label: "Last Working Day", values: ["19.12.2026", "13.11.2026", "13.11.2026"] },
      { label: "Commencement of Practical Exams", values: ["21.12.2026", "16.11.2026", "16.11.2026"] },
      { label: "Commencement of Theory Exams", values: ["08.01.2027", "27.11.2026", "26.11.2026"] },
    ],
    nextSems: { title: "Commencement of classes for next Even semesters (2027-28)", headers: ["II", "IV", "VI"], values: ["27.01.2027", "02.01.2027", "02.01.2027"] }
  },
  {
    id: "btech",
    title: "Bachelor of Technology (B.TECH.) for Odd Semester",
    semesters: ["I", "III", "V", "VII"],
    rows: [
      { label: "Induction Program", values: ["01.08.2026", "-", "-", "-"] },
      { label: "Commencement of Classes", values: ["18.08.2026", "01.08.2026", "06.07.2026", "06.07.2026"] },
      { label: "First Mid Term", values: ["15.10.2026", "28.09.2026", "31.08.2026", "31.08.2026"] },
      { label: "Second Mid Term", values: ["30.11.2026", "19.11.2026", "12.10.2026", "12.10.2026"] },
      { label: "Last Working Day", values: ["19.12.2026", "15.12.2026", "13.11.2026", "13.11.2026"] },
      { label: "Commencement of Practical Exams", values: ["21.12.2026", "16.12.2026", "16.11.2026", "16.11.2026"] },
      { label: "Commencement of Theory Exams", values: ["08.01.2027", "07.01.2027", "27.11.2026", "26.11.2026"] },
    ]
  }
];

export default function PageAcademicCalendar() {
  const [activeCourseId, setActiveCourseId] = useState("bba");

  const activeCourse = coursesData.find((c) => c.id === activeCourseId);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <PublicNavbar />

      {/* HEADER SECTION MATCHING IMAGE 4 */}
      <section className="bg-[#1e446d] py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-wide">Academic Calendar</h1>
          <div className="text-white/80 text-sm flex items-center justify-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Academic Calendar</span>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1 flex flex-col lg:flex-row gap-8">
        
        {/* SIDEBAR NAVIGATION */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden sticky top-24">
            <div className="bg-[#f59e0b] text-white p-4 font-bold text-lg flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Course Categories
            </div>
            <ul className="divide-y divide-gray-100">
              {coursesData.map((course) => (
                <li key={course.id}>
                  <button
                    onClick={() => setActiveCourseId(course.id)}
                    className={`w-full text-left p-4 flex items-center justify-between transition-colors ${
                      activeCourseId === course.id 
                      ? "bg-[#1e446d]/5 text-[#1e446d] font-bold border-l-4 border-[#1e446d]" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent"
                    }`}
                  >
                    <span className="text-sm truncate pr-2">{course.title.split("for")[0].trim()}</span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${activeCourseId === course.id ? "text-[#1e446d]" : "text-gray-400"}`} />
                  </button>
                </li>
              ))}
              <li>
                <a href="#" className="w-full text-left p-4 flex items-center justify-between text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors border-l-4 border-transparent">
                  <span className="text-sm">B.Arch. (Architecture)</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>
              </li>
              <li>
                <a href="#" className="w-full text-left p-4 flex items-center justify-between text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors border-l-4 border-transparent">
                  <span className="text-sm">M.Tech. (Engineering)</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-6 bg-[#fff9f0] border border-[#fef3c7] rounded-lg p-5">
            <h4 className="font-bold text-[#b45309] mb-3">Quick Links</h4>
            <div className="space-y-3 text-sm flex flex-col">
              <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-[#1e446d] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span> Purchase / Tender
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-[#1e446d] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span> NIRF DATA
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-[#1e446d] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span> RTU Home
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-[#1e446d] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span> Download PDF Archive
              </a>
            </div>
          </div>
        </div>

        {/* MAIN CALENDAR TABLE */}
        <div className="lg:w-3/4">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
            
            {/* Action Bar */}
            <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="font-bold text-gray-800 text-xl tracking-tight">Session 2026-27</h2>
              <div className="flex gap-2">
                <button className="bg-white border border-gray-300 p-2 rounded hover:bg-gray-100 transition-colors text-gray-600 tooltip" title="Print">
                  <Printer className="w-4 h-4" />
                </button>
                <button className="bg-[#1e446d] text-white px-4 py-2 rounded font-medium text-sm hover:bg-[#153456] transition-colors flex items-center gap-2 shadow-sm">
                  <Download className="w-4 h-4" /> Download PDF
                </button>
              </div>
            </div>

            <div className="p-6">
              {/* Premium Heading Banners matching image */}
              <div className="bg-black text-white text-center py-2.5 font-bold text-sm mb-1 tracking-widest uppercase border-l-[6px] border-[#f59e0b]">
                SALOK UNIVERSITY
              </div>
              <div className="bg-black text-white text-center py-2.5 font-bold text-[13px] mb-8 tracking-widest uppercase border-l-[6px] border-[#f59e0b]">
                ACADEMIC CALENDAR FOR ODD SEMESTER FOR SESSION 2026-27
              </div>

              {activeCourse && (
                <div className="overflow-x-auto border border-gray-200">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr>
                        <th className="py-4 px-6 bg-white border-b border-r border-gray-200 font-bold text-gray-800 text-lg whitespace-nowrap">
                          {activeCourse.title}
                        </th>
                        {activeCourse.semesters.map((sem, idx) => (
                          <th key={idx} className={`py-4 px-6 bg-white border-b border-gray-200 font-bold text-gray-800 text-lg text-center ${idx !== activeCourse.semesters.length - 1 ? 'border-r' : ''}`}>
                            {sem}
                          </th>
                        ))}
                      </tr>
                      <tr>
                        <th className="py-3 px-6 bg-white border-b border-r border-gray-200 font-bold text-gray-800 text-[15px]">
                          Semester
                        </th>
                        {activeCourse.semesters.map((sem, idx) => (
                          <th key={idx} className={`py-3 px-6 bg-[#f8fafc] border-b border-gray-200 font-bold text-gray-800 text-[15px] text-center ${idx !== activeCourse.semesters.length - 1 ? 'border-r' : ''}`}>
                            {sem}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {activeCourse.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-6 text-[13px] text-gray-700 font-medium border-r border-gray-200 w-1/3">
                            {row.label}
                          </td>
                          {row.values.map((val, vIdx) => (
                            <td key={vIdx} className={`py-4 px-6 text-[13px] text-gray-600 text-center ${vIdx !== row.values.length - 1 ? 'border-r border-gray-200' : ''}`}>
                              {val}
                            </td>
                          ))}
                        </tr>
                      ))}
                      
                      {activeCourse.nextSems && (
                        <>
                          <tr className="bg-[#f8fafc]">
                            <td className="py-4 px-6 text-[13px] text-gray-700 font-bold border-r border-gray-200 w-1/3">
                              {activeCourse.nextSems.title}
                            </td>
                            {activeCourse.nextSems.headers.map((h, hIdx) => (
                              <td key={hIdx} className={`py-4 px-6 text-[13px] font-bold text-gray-800 text-center ${hIdx !== activeCourse.nextSems.headers.length - 1 ? 'border-r border-gray-200' : ''}`}>
                                {h}
                              </td>
                            ))}
                          </tr>
                          <tr className="bg-white">
                            <td className="py-4 px-6 text-[13px] text-gray-700 font-medium border-r border-gray-200 w-1/3">
                              
                            </td>
                            {activeCourse.nextSems.values.map((val, vIdx) => (
                              <td key={vIdx} className={`py-4 px-6 text-[13px] font-medium text-gray-600 text-center ${vIdx !== activeCourse.nextSems.values.length - 1 ? 'border-r border-gray-200' : ''}`}>
                                {val}
                              </td>
                            ))}
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="mt-8 p-4 bg-red-50 border border-red-100 rounded text-red-600 text-[13px] flex items-start gap-2">
                <span className="font-bold">Note:</span> 
                <span>All Changes in dates are highlighted in official communications. Practical Training schedules for even semesters will be declared separately by the examination controller.</span>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      <Footer />
    </div>
  );
}
