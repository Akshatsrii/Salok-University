import { useState } from "react";

export default function HostelIDCard() {
  const [student] = useState({
    name: "Riya Bansal",
    roomNo: "203",
    block: "A",
    hostelId: "HSTL2024",
    bloodGroup: "O+",
    course: "B.Tech CSE",
    year: "3rd Year",
    contactNo: "+91 98765 43210",
    email: "riya.bansal@university.edu",
    validUntil: "June 2026",
    emergencyContact: "+91 98765 00000",
    admissionDate: "July 2022",
  });

  const [isDownloading, setIsDownloading] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(false);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("ID Card downloaded successfully!");
    } catch (error) {
      alert("Failed to download ID card. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-[#0f172a] text-gray-200 rounded-xl shadow-2xl border border-orange-500/20 p-6 max-w-md">

      <h2 className="text-2xl font-bold text-orange-400 mb-6">
        Hostel ID Card
      </h2>

      {/* ID Card */}
      <div className="border border-orange-500/30 rounded-xl overflow-hidden bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-lg">

        {/* Header */}
        <div className="bg-orange-500 text-white p-4 text-center">
          <h3 className="font-bold text-lg">University Hostel</h3>
          <p className="text-xs opacity-90">Student Identification Card</p>
        </div>

        {/* Body */}
        <div className="p-5">

          {/* Profile Section */}
          <div className="flex items-start gap-4 mb-5">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg flex-shrink-0">
              {getInitials(student.name)}
            </div>

            <div className="flex-1">
              <h4 className="font-bold text-lg text-white">
                {student.name}
              </h4>
              <p className="text-sm text-gray-400">{student.course}</p>
              <p className="text-xs text-gray-500">{student.year}</p>

              <div className="mt-2 inline-block bg-orange-500/20 px-3 py-1 rounded-full">
                <p className="text-xs font-semibold text-orange-400">
                  ID: {student.hostelId}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-[#1e293b] border border-gray-700 rounded-lg p-3">
              <p className="text-xs text-gray-500">Room No.</p>
              <p className="font-semibold text-white">{student.roomNo}</p>
            </div>

            <div className="bg-[#1e293b] border border-gray-700 rounded-lg p-3">
              <p className="text-xs text-gray-500">Block</p>
              <p className="font-semibold text-white">{student.block}</p>
            </div>

            <div className="bg-[#1e293b] border border-gray-700 rounded-lg p-3">
              <p className="text-xs text-gray-500">Blood Group</p>
              <p className="font-semibold text-red-400">{student.bloodGroup}</p>
            </div>

            <div className="bg-[#1e293b] border border-gray-700 rounded-lg p-3">
              <p className="text-xs text-gray-500">Valid Until</p>
              <p className="font-semibold text-white">{student.validUntil}</p>
            </div>
          </div>

          {/* Expandable Details */}
          {showFullDetails && (
            <div className="border-t border-gray-700 pt-4 space-y-3 animate-fadeIn">
              <div>
                <p className="text-xs text-gray-500">Contact Number</p>
                <p className="text-sm font-medium text-white">
                  {student.contactNo}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm font-medium text-white break-all">
                  {student.email}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Emergency Contact</p>
                <p className="text-sm font-medium text-white">
                  {student.emergencyContact}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Admission Date</p>
                <p className="text-sm font-medium text-white">
                  {student.admissionDate}
                </p>
              </div>
            </div>
          )}

          {/* Toggle */}
          <button
            onClick={() => setShowFullDetails(!showFullDetails)}
            className="w-full mt-4 text-sm text-orange-400 hover:text-orange-300 font-medium flex items-center justify-center gap-1"
          >
            {showFullDetails ? "Show Less" : "Show More Details"}
            <span className="text-xs">
              {showFullDetails ? "▲" : "▼"}
            </span>
          </button>
        </div>

        {/* Footer */}
        <div className="bg-[#1e293b] border-t border-gray-700 p-3 text-center">
          <p className="text-xs text-gray-400">
            Property of University Hostel
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 disabled:opacity-50"
        >
          {isDownloading ? "Downloading..." : "Download ID"}
        </button>

        <button
          onClick={handlePrint}
          className="border border-orange-500 text-orange-400 hover:bg-orange-500/10 px-4 py-2 rounded-lg transition-all"
        >
          Print
        </button>
      </div>

      {/* Notice */}
      <div className="mt-5 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
        <p className="text-xs text-yellow-400">
          <span className="font-semibold">Note:</span> Carry this ID card at all times inside the hostel premises.
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
