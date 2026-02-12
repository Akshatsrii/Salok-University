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
      photo: "https://via.placeholder.com/150x180/000000/FFFFFF?text=PHOTO",
      signature: "https://via.placeholder.com/120x40/000000/FFFFFF?text=Signature",
    },
    examDetails: {
      center: "Main Campus, Block A",
      centerCode: "EXAM-001",
      venue: "Examination Hall - Ground Floor",
      reportingTime: "8:30 AM",
      examDate: "March 15 - March 22, 2026",
    },
    examSchedule: [
      { date: "15 Mar 2026", day: "Mon", subjectCode: "CS501", subjectName: "DBMS", time: "9:00 AM - 12:00 PM" },
      { date: "17 Mar 2026", day: "Wed", subjectCode: "CS502", subjectName: "Operating Systems", time: "9:00 AM - 12:00 PM" },
      { date: "19 Mar 2026", day: "Fri", subjectCode: "CS503", subjectName: "Computer Networks", time: "9:00 AM - 12:00 PM" },
    ],
    instructions: [
      "Report 30 minutes before exam.",
      "Admit Card + Valid ID mandatory.",
      "No electronic devices allowed.",
      "Follow invigilator instructions.",
    ],
    issueDate: "February 6, 2026",
  };

  const downloadAsPDF = async () => {
    setIsDownloading(true);
    const canvas = await html2canvas(admitCardRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save(`AdmitCard_${admitCardData.student.rollNumber}.pdf`);
    setIsDownloading(false);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 text-white">

      {/* Top Action Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-[#111] border border-gray-800 p-4 rounded-xl shadow-md flex justify-between items-center print:hidden"
      >
        <h1 className="text-xl font-bold text-orange-500">
          Examination Admit Card
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded-lg"
          >
            Instructions
          </button>

          <button
            onClick={downloadAsPDF}
            disabled={isDownloading}
            className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded-lg"
          >
            {isDownloading ? "Downloading..." : "Download PDF"}
          </button>
        </div>
      </motion.div>

      {/* Instructions Panel */}
      {showInstructions && (
        <div className="bg-[#1a1a1a] border-l-4 border-orange-500 p-6 rounded-lg">
          <h3 className="text-orange-400 font-semibold mb-3">
            Important Instructions
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {admitCardData.instructions.map((inst, i) => (
              <li key={i}>• {inst}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Admit Card */}
      <motion.div
        ref={admitCardRef}
        className="bg-[#111] border border-gray-800 rounded-xl overflow-hidden shadow-xl"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-6 text-center">
          <h1 className="text-3xl font-bold text-white">
            SALOK UNIVERSITY
          </h1>
          <p className="text-orange-200 mt-2">
            EXAMINATION ADMIT CARD
          </p>
          <p className="text-orange-200 mt-1">
            {admitCardData.examName}
          </p>
        </div>

        <div className="p-8 space-y-6">

          {/* Student Details */}
          <div className="border border-gray-700 rounded-lg p-6">
            <h3 className="text-orange-500 font-bold mb-4">
              Candidate Details
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-xs">Student Name</p>
                <p className="font-bold text-white">
                  {admitCardData.student.name}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Roll Number</p>
                <p className="font-bold text-white">
                  {admitCardData.student.rollNumber}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Course</p>
                <p>{admitCardData.student.course}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">Branch</p>
                <p>{admitCardData.student.branch}</p>
              </div>
            </div>
          </div>

          {/* Exam Center */}
          <div className="bg-[#1a1a1a] border border-orange-500 rounded-lg p-5">
            <h3 className="text-orange-400 font-bold mb-3">
              Examination Center
            </h3>
            <p>{admitCardData.examDetails.center}</p>
            <p className="text-gray-400 text-sm">
              Reporting Time: {admitCardData.examDetails.reportingTime}
            </p>
          </div>

          {/* Exam Schedule */}
          <div>
            <h3 className="text-orange-500 font-bold mb-3">
              Examination Schedule
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-700">
                <thead className="bg-[#1a1a1a]">
                  <tr>
                    <th className="border border-gray-700 px-4 py-2 text-left text-sm">
                      Date
                    </th>
                    <th className="border border-gray-700 px-4 py-2 text-left text-sm">
                      Subject
                    </th>
                    <th className="border border-gray-700 px-4 py-2 text-left text-sm">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {admitCardData.examSchedule.map((exam, i) => (
                    <tr key={i} className="hover:bg-orange-500/10">
                      <td className="border border-gray-700 px-4 py-2 text-sm">
                        {exam.date}
                      </td>
                      <td className="border border-gray-700 px-4 py-2 text-sm text-orange-400 font-semibold">
                        {exam.subjectName}
                      </td>
                      <td className="border border-gray-700 px-4 py-2 text-sm">
                        {exam.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-700 pt-6 text-sm text-gray-400 text-center">
            Issue Date: {admitCardData.issueDate}
          </div>
        </div>

        {/* Bottom Border */}
        <div className="h-2 bg-gradient-to-r from-orange-600 to-orange-500"></div>
      </motion.div>

      {/* Back Button */}
      <div className="text-center print:hidden">
        <button
          onClick={() => navigate("/exam/examination")}
          className="bg-[#111] border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-6 py-3 rounded-lg"
        >
          Back
        </button>
      </div>
    </div>
  );
}
