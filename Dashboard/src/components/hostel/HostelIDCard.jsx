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
    
    // Simulate download process
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // In a real app, you'd generate a PDF or image here
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
    <div className="bg-white rounded-lg shadow p-6 max-w-md">
      <h2 className="text-xl font-semibold text-primary mb-4">
        Hostel ID Card
      </h2>

      {/* ID Card Preview */}
      <div className="border-2 border-primary rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        {/* Card Header */}
        <div className="bg-primary text-white p-3 text-center">
          <h3 className="font-bold text-lg">University Hostel</h3>
          <p className="text-xs opacity-90">Student Identification Card</p>
        </div>

        {/* Card Body */}
        <div className="p-4">
          {/* Profile Section */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center text-2xl font-bold text-white shadow-md flex-shrink-0">
              {getInitials(student.name)}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-800 text-lg">
                {student.name}
              </h4>
              <p className="text-sm text-gray-600">{student.course}</p>
              <p className="text-xs text-gray-500">{student.year}</p>
              <div className="mt-2 inline-block bg-primary/10 px-2 py-1 rounded">
                <p className="text-xs font-semibold text-primary">
                  ID: {student.hostelId}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-gray-50 rounded p-2">
              <p className="text-xs text-gray-500">Room No.</p>
              <p className="font-semibold text-gray-800">{student.roomNo}</p>
            </div>
            <div className="bg-gray-50 rounded p-2">
              <p className="text-xs text-gray-500">Block</p>
              <p className="font-semibold text-gray-800">{student.block}</p>
            </div>
            <div className="bg-gray-50 rounded p-2">
              <p className="text-xs text-gray-500">Blood Group</p>
              <p className="font-semibold text-red-600">{student.bloodGroup}</p>
            </div>
            <div className="bg-gray-50 rounded p-2">
              <p className="text-xs text-gray-500">Valid Until</p>
              <p className="font-semibold text-gray-800">
                {student.validUntil}
              </p>
            </div>
          </div>

          {/* Expandable Details */}
          {showFullDetails && (
            <div className="border-t pt-3 space-y-2 animate-fadeIn">
              <div>
                <p className="text-xs text-gray-500">Contact Number</p>
                <p className="text-sm font-medium text-gray-800">
                  {student.contactNo}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm font-medium text-gray-800 break-all">
                  {student.email}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Emergency Contact</p>
                <p className="text-sm font-medium text-gray-800">
                  {student.emergencyContact}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Admission Date</p>
                <p className="text-sm font-medium text-gray-800">
                  {student.admissionDate}
                </p>
              </div>
            </div>
          )}

          {/* Toggle Details Button */}
          <button
            onClick={() => setShowFullDetails(!showFullDetails)}
            className="w-full mt-3 text-sm text-primary hover:text-primary/80 font-medium flex items-center justify-center gap-1"
          >
            {showFullDetails ? "Show Less" : "Show More Details"}
            <span className="text-xs">
              {showFullDetails ? "▲" : "▼"}
            </span>
          </button>
        </div>

        {/* Card Footer */}
        <div className="bg-gray-100 p-2 text-center border-t">
          <p className="text-xs text-gray-600">
            This card is property of University Hostel
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex gap-3">
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex-1 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          {isDownloading ? (
            <>
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Downloading...
            </>
          ) : (
            <>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download ID Card
            </>
          )}
        </button>
        
        <button
          onClick={handlePrint}
          className="bg-white border-2 border-primary text-primary px-4 py-2 rounded hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
          title="Print ID Card"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
          Print
        </button>
      </div>

      {/* Info Notice */}
      <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded p-3">
        <p className="text-xs text-yellow-800">
          <span className="font-semibold">Note:</span> Please carry this ID
          card at all times within the hostel premises. Report immediately if
          lost or damaged.
        </p>
      </div>
    </div>
  );
}