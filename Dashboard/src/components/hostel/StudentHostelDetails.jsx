import { useState } from "react";

export default function StudentHostelDetails() {
  const [studentDetails] = useState({
    personalInfo: {
      name: "Riya Bansal",
      registrationNo: "CSE2021-045",
      course: "B.Tech Computer Science",
      year: "3rd Year",
      bloodGroup: "O+",
      email: "riya.bansal@university.edu",
      phone: "+91 98765 43210",
      parentContact: "+91 98765 00000",
    },
    hostelInfo: {
      hostelName: "University Girls Hostel",
      block: "Block A",
      roomNumber: "203",
      roomType: "Double Sharing",
      floor: "2nd Floor",
      admissionDate: "15 July 2021",
      feeStatus: "Paid",
      validUntil: "30 June 2025",
    },
    wardenInfo: {
      name: "Mr. Sharma",
      designation: "Chief Warden",
      contact: "+91 98765 11111",
      email: "sharma.warden@university.edu",
      officeHours: "9:00 AM - 6:00 PM",
    },
    facilities: [
      { name: "Mess", available: true },
      { name: "Laundry", available: true },
      { name: "WiFi", available: true },
      { name: "Gym", available: true },
      { name: "Common Room", available: true },
      { name: "Study Room", available: true },
    ],
  });

  const [activeTab, setActiveTab] = useState("personal");
  const [showQRCode, setShowQRCode] = useState(false);

  const tabs = [
    { id: "personal", label: "Personal", icon: "👤" },
    { id: "hostel", label: "Hostel", icon: "🏠" },
    { id: "warden", label: "Warden", icon: "👨‍💼" },
    { id: "facilities", label: "Facilities", icon: "⚡" },
  ];

  const DetailRow = ({ label, value, highlight = false, link = false }) => (
    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
      <span className="text-gray-600 text-sm">{label}</span>
      <span
        className={`font-medium text-sm ${
          highlight
            ? "text-primary"
            : link
            ? "text-blue-600 hover:underline cursor-pointer"
            : "text-gray-800"
        }`}
      >
        {value}
      </span>
    </div>
  );

  const StatusBadge = ({ status }) => {
    const colors = {
      Paid: "bg-green-100 text-green-800",
      Pending: "bg-yellow-100 text-yellow-800",
      Overdue: "bg-red-100 text-red-800",
    };

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-semibold ${
          colors[status] || "bg-gray-100 text-gray-800"
        }`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary">
          Student Hostel Details
        </h2>
        <button
          onClick={() => setShowQRCode(!showQRCode)}
          className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
            />
          </svg>
          QR Code
        </button>
      </div>

      {/* QR Code Modal */}
      {showQRCode && (
        <div className="mb-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">Quick Access QR</h3>
            <button
              onClick={() => setShowQRCode(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
              <div className="w-32 h-32 bg-gray-900 opacity-10 grid grid-cols-8 gap-0.5 p-2">
                {[...Array(64)].map((_, i) => (
                  <div
                    key={i}
                    className={`${
                      Math.random() > 0.5 ? "bg-black" : "bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Scan to access hostel details
            </p>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <span className="mr-1">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[300px]">
        {/* Personal Info Tab */}
        {activeTab === "personal" && (
          <div className="space-y-0">
            <DetailRow
              label="Student Name"
              value={studentDetails.personalInfo.name}
              highlight
            />
            <DetailRow
              label="Registration No"
              value={studentDetails.personalInfo.registrationNo}
            />
            <DetailRow
              label="Course"
              value={studentDetails.personalInfo.course}
            />
            <DetailRow
              label="Year"
              value={studentDetails.personalInfo.year}
            />
            <DetailRow
              label="Blood Group"
              value={studentDetails.personalInfo.bloodGroup}
            />
            <DetailRow
              label="Email"
              value={studentDetails.personalInfo.email}
              link
            />
            <DetailRow
              label="Phone"
              value={studentDetails.personalInfo.phone}
            />
            <DetailRow
              label="Parent Contact"
              value={studentDetails.personalInfo.parentContact}
            />
          </div>
        )}

        {/* Hostel Info Tab */}
        {activeTab === "hostel" && (
          <div className="space-y-0">
            <DetailRow
              label="Hostel Name"
              value={studentDetails.hostelInfo.hostelName}
              highlight
            />
            <DetailRow
              label="Block"
              value={studentDetails.hostelInfo.block}
            />
            <DetailRow
              label="Room Number"
              value={studentDetails.hostelInfo.roomNumber}
            />
            <DetailRow
              label="Room Type"
              value={studentDetails.hostelInfo.roomType}
            />
            <DetailRow
              label="Floor"
              value={studentDetails.hostelInfo.floor}
            />
            <DetailRow
              label="Admission Date"
              value={studentDetails.hostelInfo.admissionDate}
            />
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 text-sm">Fee Status</span>
              <StatusBadge status={studentDetails.hostelInfo.feeStatus} />
            </div>
            <DetailRow
              label="Valid Until"
              value={studentDetails.hostelInfo.validUntil}
            />
          </div>
        )}

        {/* Warden Info Tab */}
        {activeTab === "warden" && (
          <div>
            <div className="bg-blue-50 rounded-lg p-4 mb-4 flex items-start gap-4">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                {studentDetails.wardenInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">
                  {studentDetails.wardenInfo.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {studentDetails.wardenInfo.designation}
                </p>
              </div>
            </div>
            <div className="space-y-0">
              <DetailRow
                label="Contact Number"
                value={studentDetails.wardenInfo.contact}
              />
              <DetailRow
                label="Email"
                value={studentDetails.wardenInfo.email}
                link
              />
              <DetailRow
                label="Office Hours"
                value={studentDetails.wardenInfo.officeHours}
              />
            </div>
            <div className="mt-4 flex gap-3">
              <button className="flex-1 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors text-sm">
                Call Warden
              </button>
              <button className="flex-1 bg-white border border-primary text-primary px-4 py-2 rounded hover:bg-primary/5 transition-colors text-sm">
                Send Email
              </button>
            </div>
          </div>
        )}

        {/* Facilities Tab */}
        {activeTab === "facilities" && (
          <div>
            <p className="text-sm text-gray-600 mb-4">
              Available facilities in your hostel:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {studentDetails.facilities.map((facility, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border-2 ${
                    facility.available
                      ? "border-green-200 bg-green-50"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                        facility.available
                          ? "bg-green-500 text-white"
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {facility.available ? "✓" : "✕"}
                    </div>
                    <span
                      className={`font-medium text-sm ${
                        facility.available ? "text-gray-800" : "text-gray-500"
                      }`}
                    >
                      {facility.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-6 border-t border-gray-200 flex gap-3">
        <button className="flex-1 bg-primary text-white px-4 py-2.5 rounded hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
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
          Download Details
        </button>
        <button className="flex-1 bg-white border-2 border-primary text-primary px-4 py-2.5 rounded hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
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
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          Share
        </button>
      </div>
    </div>
  );
}