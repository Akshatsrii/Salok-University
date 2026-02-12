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

  const DetailRow = ({ label, value, highlight = false }) => (
    <div className="flex justify-between items-center py-3 border-b border-gray-700 last:border-0">
      <span className="text-gray-400 text-sm">{label}</span>
      <span
        className={`font-medium text-sm ${
          highlight ? "text-orange-400" : "text-gray-200"
        }`}
      >
        {value}
      </span>
    </div>
  );

  const StatusBadge = ({ status }) => {
    const colors = {
      Paid: "bg-green-500/20 text-green-400",
      Pending: "bg-yellow-500/20 text-yellow-400",
      Overdue: "bg-red-500/20 text-red-400",
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${
          colors[status] || "bg-gray-500/20 text-gray-400"
        }`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="bg-[#0f172a] text-gray-200 rounded-xl shadow-2xl border border-orange-500/20 p-6 max-w-2xl">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-orange-400">
          Student Hostel Details
        </h2>

        <button
          onClick={() => setShowQRCode(!showQRCode)}
          className="text-sm text-orange-400 hover:text-orange-300 font-medium"
        >
          QR Code
        </button>
      </div>

      {/* QR Code */}
      {showQRCode && (
        <div className="mb-6 bg-[#1e293b] rounded-xl p-4 border border-gray-700">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-200">Quick Access QR</h3>
            <button
              onClick={() => setShowQRCode(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center">
              <div className="w-32 h-32 bg-black opacity-10 grid grid-cols-8 gap-0.5 p-2">
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
            <p className="text-xs text-gray-400 mt-2">
              Scan to access hostel details
            </p>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-gray-700 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? "text-orange-400 border-b-2 border-orange-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <span className="mr-1">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[300px]">

        {activeTab === "personal" && (
          <div>
            <DetailRow label="Student Name" value={studentDetails.personalInfo.name} highlight />
            <DetailRow label="Registration No" value={studentDetails.personalInfo.registrationNo} />
            <DetailRow label="Course" value={studentDetails.personalInfo.course} />
            <DetailRow label="Year" value={studentDetails.personalInfo.year} />
            <DetailRow label="Blood Group" value={studentDetails.personalInfo.bloodGroup} />
            <DetailRow label="Email" value={studentDetails.personalInfo.email} />
            <DetailRow label="Phone" value={studentDetails.personalInfo.phone} />
            <DetailRow label="Parent Contact" value={studentDetails.personalInfo.parentContact} />
          </div>
        )}

        {activeTab === "hostel" && (
          <div>
            <DetailRow label="Hostel Name" value={studentDetails.hostelInfo.hostelName} highlight />
            <DetailRow label="Block" value={studentDetails.hostelInfo.block} />
            <DetailRow label="Room Number" value={studentDetails.hostelInfo.roomNumber} />
            <DetailRow label="Room Type" value={studentDetails.hostelInfo.roomType} />
            <DetailRow label="Floor" value={studentDetails.hostelInfo.floor} />
            <DetailRow label="Admission Date" value={studentDetails.hostelInfo.admissionDate} />
            <div className="flex justify-between items-center py-3 border-b border-gray-700">
              <span className="text-gray-400 text-sm">Fee Status</span>
              <StatusBadge status={studentDetails.hostelInfo.feeStatus} />
            </div>
            <DetailRow label="Valid Until" value={studentDetails.hostelInfo.validUntil} />
          </div>
        )}

        {activeTab === "warden" && (
          <div>
            <div className="bg-[#1e293b] rounded-xl p-4 mb-4 flex items-center gap-4 border border-gray-700">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                {studentDetails.wardenInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">
                  {studentDetails.wardenInfo.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {studentDetails.wardenInfo.designation}
                </p>
              </div>
            </div>

            <DetailRow label="Contact Number" value={studentDetails.wardenInfo.contact} />
            <DetailRow label="Email" value={studentDetails.wardenInfo.email} />
            <DetailRow label="Office Hours" value={studentDetails.wardenInfo.officeHours} />

            <div className="mt-4 flex gap-3">
              <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg">
                Call Warden
              </button>
              <button className="flex-1 border border-orange-500 text-orange-400 hover:bg-orange-500/10 py-2 rounded-lg">
                Send Email
              </button>
            </div>
          </div>
        )}

        {activeTab === "facilities" && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              {studentDetails.facilities.map((facility, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border ${
                    facility.available
                      ? "border-green-500/30 bg-green-500/10"
                      : "border-gray-700 bg-gray-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                        facility.available
                          ? "bg-green-500 text-white"
                          : "bg-gray-600 text-gray-300"
                      }`}
                    >
                      {facility.available ? "✓" : "✕"}
                    </div>
                    <span
                      className={`font-medium ${
                        facility.available ? "text-white" : "text-gray-500"
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

      {/* Footer Buttons */}
      <div className="mt-6 pt-6 border-t border-gray-700 flex gap-3">
        <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg">
          Download Details
        </button>
        <button className="flex-1 border border-orange-500 text-orange-400 hover:bg-orange-500/10 py-3 rounded-lg">
          Share
        </button>
      </div>
    </div>
  );
}
