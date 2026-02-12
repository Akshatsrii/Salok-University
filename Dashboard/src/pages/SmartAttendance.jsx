import { useState } from "react";
import { Camera, Fingerprint, QrCode, CheckCircle } from "lucide-react";

const initialSubjects = [
  { code: "CS601", name: "Machine Learning", attended: 24, total: 30 },
  { code: "CS604", name: "Big Data Analytics", attended: 18, total: 30 },
];

export default function SmartAttendance() {
  const [subjects, setSubjects] = useState(initialSubjects);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [method, setMethod] = useState(null);
  const [message, setMessage] = useState("");

  const markAttendance = () => {
    setSubjects((prev) =>
      prev.map((sub) =>
        sub.code === selectedSubject.code
          ? { ...sub, attended: sub.attended + 1 }
          : sub
      )
    );

    setMessage("Attendance marked successfully!");

    setTimeout(() => {
      setMessage("");
      setMethod(null);
      setSelectedSubject(null);
    }, 2000);
  };

  // =============================
  // SUBJECT LIST VIEW
  // =============================
  if (!selectedSubject) {
    return (
      <div className="space-y-6 text-white">
        <h2 className="text-3xl font-bold text-orange-500">
          Select Subject for Attendance
        </h2>

        {subjects.map((subject) => {
          const percentage = (
            (subject.attended / subject.total) *
            100
          ).toFixed(1);

          return (
            <div
              key={subject.code}
              onClick={() => setSelectedSubject(subject)}
              className="bg-black p-6 rounded-xl border border-gray-800 
                         hover:border-orange-500 hover:bg-gray-900 
                         cursor-pointer transition-all duration-300"
            >
              <h3 className="text-xl font-semibold">
                {subject.name}
              </h3>

              <p className="text-gray-400 text-sm">
                {subject.code}
              </p>

              <div className="mt-4">
                <p className="text-orange-400 font-semibold">
                  {percentage}%
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-800 h-2 rounded-full mt-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // =============================
  // METHOD SELECTION VIEW
  // =============================
  if (!method) {
    return (
      <div className="space-y-6 text-white">
        <button
          onClick={() => setSelectedSubject(null)}
          className="text-orange-500 hover:underline"
        >
          ← Back to Subjects
        </button>

        <h2 className="text-2xl font-bold text-orange-500">
          {selectedSubject.name}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Face Recognition */}
          <div
            onClick={() => setMethod("face")}
            className="bg-black p-6 rounded-xl border border-gray-800 
                       hover:border-orange-500 hover:bg-gray-900 
                       cursor-pointer text-center transition"
          >
            <Camera className="mx-auto text-orange-500 w-10 h-10 mb-3" />
            <p>Face Recognition</p>
          </div>

          {/* Fingerprint */}
          <div
            onClick={() => setMethod("fingerprint")}
            className="bg-black p-6 rounded-xl border border-gray-800 
                       hover:border-orange-500 hover:bg-gray-900 
                       cursor-pointer text-center transition"
          >
            <Fingerprint className="mx-auto text-orange-500 w-10 h-10 mb-3" />
            <p>Fingerprint</p>
          </div>

          {/* QR Code */}
          <div
            onClick={() => setMethod("qr")}
            className="bg-black p-6 rounded-xl border border-gray-800 
                       hover:border-orange-500 hover:bg-gray-900 
                       cursor-pointer text-center transition"
          >
            <QrCode className="mx-auto text-orange-500 w-10 h-10 mb-3" />
            <p>QR Scan</p>
          </div>
        </div>
      </div>
    );
  }

  // =============================
  // SIMULATION VIEW
  // =============================
  return (
    <div className="text-white space-y-6">
      <button
        onClick={() => setMethod(null)}
        className="text-orange-500 hover:underline"
      >
        ← Back
      </button>

      <div className="bg-black p-8 rounded-xl border border-gray-800 text-center">

        {method === "face" && (
          <>
            <Camera className="mx-auto text-orange-500 w-16 h-16 mb-4 animate-pulse" />
            <p className="text-gray-300">Detecting Face...</p>
          </>
        )}

        {method === "fingerprint" && (
          <>
            <Fingerprint className="mx-auto text-orange-500 w-16 h-16 mb-4 animate-pulse" />
            <p className="text-gray-300">Scanning Fingerprint...</p>
          </>
        )}

        {method === "qr" && (
          <>
            <QrCode className="mx-auto text-orange-500 w-16 h-16 mb-4 animate-pulse" />
            <p className="text-gray-300">Scanning QR Code...</p>
          </>
        )}

        <button
          onClick={markAttendance}
          className="mt-6 bg-orange-500 hover:bg-orange-600 
                     text-black px-6 py-2 rounded-lg font-semibold transition"
        >
          Mark Attendance
        </button>

        {message && (
          <div className="mt-4 text-green-400 flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5" />
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
