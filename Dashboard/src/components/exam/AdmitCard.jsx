import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function AdmitCard() {
  const navigate = useNavigate();
  const admitCardRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  // Mock data - replace with actual API call
  const admitCardData = {
    examName: "End Semester Examination - 2026",
    semester: "5th Semester",
    session: "January - June 2026",
    student: {
      name: "JOHN DOE",
      rollNumber: "2024001",
      enrollment: "EN2024001234",
      course: "Bachelor of Technology",
      branch: "Computer Science & Engineering",
      photo: "https://via.placeholder.com/150x180/4F46E5/FFFFFF?text=PHOTO", // Replace with actual photo
      signature: "https://via.placeholder.com/120x40/000000/FFFFFF?text=Signature",
    },
    examDetails: {
      center: "Main Campus, Block A",
      centerCode: "EXAM-001",
      venue: "Examination Hall - Ground Floor",
      reportingTime: "8:30 AM",
      examDate: "March 15, 2026 - March 22, 2026",
    },
    examSchedule: [
      {
        date: "15 Mar 2026",
        day: "Monday",
        subjectCode: "CS501",
        subjectName: "Database Management Systems",
        time: "9:00 AM - 12:00 PM",
      },
      {
        date: "17 Mar 2026",
        day: "Wednesday",
        subjectCode: "CS502",
        subjectName: "Operating Systems",
        time: "9:00 AM - 12:00 PM",
      },
      {
        date: "19 Mar 2026",
        day: "Friday",
        subjectCode: "CS503",
        subjectName: "Computer Networks",
        time: "9:00 AM - 12:00 PM",
      },
      {
        date: "20 Mar 2026",
        day: "Saturday",
        subjectCode: "CS504",
        subjectName: "Software Engineering",
        time: "9:00 AM - 12:00 PM",
      },
      {
        date: "22 Mar 2026",
        day: "Monday",
        subjectCode: "CS505",
        subjectName: "Web Technologies",
        time: "9:00 AM - 12:00 PM",
      },
    ],
    instructions: [
      "Candidates must report to the examination center 30 minutes before the exam.",
      "Original Admit Card along with valid ID proof is mandatory.",
      "Electronic devices including mobile phones, smartwatches are strictly prohibited.",
      "Candidates should bring their own stationery, calculators are not allowed unless specified.",
      "Entry will be denied after the exam has commenced.",
      "Maintain silence and follow all instructions given by the invigilator.",
      "Any malpractice will lead to cancellation of candidature.",
      "Rough work should be done only on the sheets provided.",
    ],
    authorities: {
      controller: {
        name: "Dr. Sarah Johnson",
        designation: "Controller of Examinations",
        signature: "https://via.placeholder.com/150x50/000000/FFFFFF?text=Signature",
      },
    },
    qrCode: "https://via.placeholder.com/100x100/000000/FFFFFF?text=QR", // Generate actual QR code
    issueDate: "February 6, 2026",
  };

  const downloadAsPDF = async () => {
    setIsDownloading(true);
    try {
      const element = admitCardRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`AdmitCard_${admitCardData.student.rollNumber}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to download admit card. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Action Buttons - Hidden in print */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-4 rounded-xl shadow-md flex flex-wrap gap-3 items-center justify-between print:hidden"
      >
        <div>
          <h1 className="text-xl font-bold text-gray-800">Examination Admit Card</h1>
          <p className="text-sm text-gray-600">
            Download or print your admit card for the examination
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-all flex items-center shadow hover:shadow-md"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Instructions
          </button>
          <button
            onClick={handlePrint}
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-lg transition-all flex items-center shadow hover:shadow-md"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            Print
          </button>
          <button
            onClick={downloadAsPDF}
            disabled={isDownloading}
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-lg transition-all flex items-center shadow hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDownloading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Downloading...
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download PDF
              </>
            )}
          </button>
        </div>
      </motion.div>

      {/* Instructions Panel */}
      {showInstructions && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg shadow print:hidden"
        >
          <h3 className="text-lg font-semibold text-amber-900 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Important Instructions
          </h3>
          <ul className="space-y-2">
            {admitCardData.instructions.map((instruction, index) => (
              <li key={index} className="flex items-start text-amber-900">
                <span className="text-amber-600 font-bold mr-2">{index + 1}.</span>
                <span>{instruction}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Admit Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        ref={admitCardRef}
        className="bg-white rounded-xl shadow-xl overflow-hidden print:shadow-none"
      >
        {/* Header with University Branding */}
        <div className="bg-gradient-to-r from-primary to-blue-700 text-white p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative text-center">
            <div className="flex items-center justify-center mb-3">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-1">UNIVERSITY NAME</h1>
            <p className="text-blue-100 text-sm mb-3">
              (Accredited with 'A' Grade by NAAC)
            </p>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
              <h2 className="text-xl font-semibold">EXAMINATION ADMIT CARD</h2>
            </div>
            <p className="text-blue-100 mt-2">{admitCardData.examName}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          {/* Student Details Section */}
          <div className="border-2 border-gray-200 rounded-lg p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Photo and Signature */}
              <div className="flex-shrink-0">
                <div className="space-y-4">
                  <div className="border-2 border-gray-300 p-2 bg-gray-50">
                    <img
                      src={admitCardData.student.photo}
                      alt="Student Photo"
                      className="w-32 h-40 object-cover"
                    />
                    <p className="text-xs text-center text-gray-600 mt-1">
                      Student Photo
                    </p>
                  </div>
                  <div className="border-2 border-gray-300 p-2 bg-gray-50">
                    <img
                      src={admitCardData.student.signature}
                      alt="Signature"
                      className="w-32 h-12 object-contain"
                    />
                    <p className="text-xs text-center text-gray-600 mt-1">
                      Student Signature
                    </p>
                  </div>
                </div>
              </div>

              {/* Student Information */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-primary">
                  CANDIDATE DETAILS
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      Student Name
                    </p>
                    <p className="font-bold text-gray-900 text-lg">
                      {admitCardData.student.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      Roll Number
                    </p>
                    <p className="font-bold text-gray-900 text-lg">
                      {admitCardData.student.rollNumber}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      Enrollment Number
                    </p>
                    <p className="font-semibold text-gray-800">
                      {admitCardData.student.enrollment}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      Course
                    </p>
                    <p className="font-semibold text-gray-800">
                      {admitCardData.student.course}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      Branch/Specialization
                    </p>
                    <p className="font-semibold text-gray-800">
                      {admitCardData.student.branch}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      Semester
                    </p>
                    <p className="font-semibold text-gray-800">
                      {admitCardData.semester}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      Session
                    </p>
                    <p className="font-semibold text-gray-800">
                      {admitCardData.session}
                    </p>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex-shrink-0 hidden md:block">
                <div className="border-2 border-gray-300 p-2 bg-gray-50">
                  <img
                    src={admitCardData.qrCode}
                    alt="QR Code"
                    className="w-24 h-24"
                  />
                  <p className="text-xs text-center text-gray-600 mt-1">Verify</p>
                </div>
              </div>
            </div>
          </div>

          {/* Examination Center Details */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 mb-6 rounded-r-lg">
            <h3 className="text-md font-bold text-blue-900 mb-3 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              EXAMINATION CENTER DETAILS
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-blue-600 font-semibold">Center Name</p>
                <p className="text-gray-800 font-medium">
                  {admitCardData.examDetails.center}
                </p>
              </div>
              <div>
                <p className="text-xs text-blue-600 font-semibold">Center Code</p>
                <p className="text-gray-800 font-medium">
                  {admitCardData.examDetails.centerCode}
                </p>
              </div>
              <div>
                <p className="text-xs text-blue-600 font-semibold">Venue</p>
                <p className="text-gray-800 font-medium">
                  {admitCardData.examDetails.venue}
                </p>
              </div>
              <div>
                <p className="text-xs text-blue-600 font-semibold">Reporting Time</p>
                <p className="text-gray-800 font-medium">
                  {admitCardData.examDetails.reportingTime}
                </p>
              </div>
            </div>
          </div>

          {/* Exam Schedule */}
          <div className="mb-6">
            <h3 className="text-md font-bold text-gray-800 mb-3 pb-2 border-b-2 border-gray-300">
              EXAMINATION SCHEDULE
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Date
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Day
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Subject Code
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Subject Name
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {admitCardData.examSchedule.map((exam, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm font-medium text-gray-900">
                        {exam.date}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                        {exam.day}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm font-semibold text-primary">
                        {exam.subjectCode}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                        {exam.subjectName}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                        {exam.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Important Instructions */}
          <div className="bg-red-50 border-l-4 border-red-500 p-5 mb-6 rounded-r-lg">
            <h3 className="text-md font-bold text-red-900 mb-3 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              IMPORTANT INSTRUCTIONS
            </h3>
            <ul className="space-y-2 text-sm text-red-900">
              {admitCardData.instructions.slice(0, 4).map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer with Signatures */}
          <div className="border-t-2 border-gray-300 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-end">
              <div className="mb-4 md:mb-0">
                <p className="text-xs text-gray-600 mb-1">Issue Date</p>
                <p className="font-semibold text-gray-800">{admitCardData.issueDate}</p>
              </div>

              <div className="text-right">
                <img
                  src={admitCardData.authorities.controller.signature}
                  alt="Authority Signature"
                  className="h-12 ml-auto mb-1"
                />
                <div className="border-t-2 border-gray-800 pt-1">
                  <p className="font-semibold text-gray-800">
                    {admitCardData.authorities.controller.name}
                  </p>
                  <p className="text-xs text-gray-600">
                    {admitCardData.authorities.controller.designation}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Note */}
          <div className="mt-6 text-center text-xs text-gray-500 border-t pt-4">
            <p>
              This is a computer-generated admit card and does not require a physical
              signature.
            </p>
            <p className="mt-1">
              For any discrepancies, please contact the Examination Cell immediately.
            </p>
          </div>
        </div>

        {/* Bottom Decorative Border */}
        <div className="h-2 bg-gradient-to-r from-primary to-blue-700"></div>
      </motion.div>

      {/* Additional Notes - Hidden in print */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl shadow border border-green-200 print:hidden"
      >
        <div className="flex items-start">
          <svg
            className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <h3 className="font-semibold text-green-900 mb-2">Next Steps</h3>
            <ul className="text-sm text-green-800 space-y-1">
              <li>✓ Download and keep multiple copies of your admit card</li>
              <li>✓ Carry a valid photo ID proof along with the admit card</li>
              <li>✓ Reach the examination center 30 minutes before reporting time</li>
              <li>✓ Check the exam schedule and venue carefully</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Back Button - Hidden in print */}
      <div className="flex justify-center print:hidden">
        <button
          onClick={() => navigate("/exam/examination")}
          className="bg-white hover:bg-gray-50 border-2 border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-all flex items-center shadow"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Status
        </button>
      </div>
    </div>
  );
}