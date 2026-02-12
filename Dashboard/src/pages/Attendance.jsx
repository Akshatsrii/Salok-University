import { useState, useRef, useEffect, useCallback } from "react";
import AttendanceDetails from "../components/attendance/AttendanceDetails";
import AttendanceChart from "../components/attendance/AttendanceChart";
import AttendanceCalendar from "../components/attendance/AttendanceCalendar";
import AttendanceStats from "../components/attendance/AttendanceStats";
import SubjectWiseAttendance from "../components/attendance/SubjectWiseAttendance";
import {
  Download,
  Camera,
  Fingerprint,
  QrCode,
  X,
  AlertCircle,
  ChevronLeft,
  Loader2,
} from "lucide-react";
import { Html5QrcodeScanner } from "html5-qrcode";

/* ================= CONSTANTS ================= */

const VIEWS = {
  OVERVIEW: "overview",
  SUBJECT: "subject",
  CALENDAR: "calendar",
  CHART: "chart",
};

const VIEW_LABELS = {
  [VIEWS.OVERVIEW]: "Overview",
  [VIEWS.SUBJECT]: "By Subject",
  [VIEWS.CALENDAR]: "Calendar",
  [VIEWS.CHART]: "Analytics",
};

const ATTENDANCE_METHODS = {
  FACE: "face",
  FINGERPRINT: "fingerprint",
  QR: "qr",
};

const SEMESTERS = [
  { value: "current", label: "Current Semester" },
  { value: "sem5", label: "Semester 1" },
  { value: "sem4", label: "Semester 2" },
  { value: "sem3", label: "Semester 3" },
   { value: "sem5", label: "Semester 4" },
    { value: "sem5", label: "Semester 5" },
     { value: "sem5", label: "Semester 6" },
     { value: "sem5", label: "Semester 7" },
      { value: "sem5", label: "Semester 8" },
];

const SUBJECTS = [
  { code: "CS601", name: "Machine Learning" },
  { code: "CS602", name: "Artificial Intelligence" },
  { code: "CS603", name: "Cloud Computing" },
  { code: "CS604", name: "Big Data Analytics" },
];

// Simulated detection times (in ms)
const DETECTION_TIMES = {
  [ATTENDANCE_METHODS.FACE]: 2500,
  [ATTENDANCE_METHODS.FINGERPRINT]: 2000,
  [ATTENDANCE_METHODS.QR]: 0, // QR is instant when scanned
};

export default function Attendance() {
  /* ================= MAIN STATE ================= */

  const [selectedView, setSelectedView] = useState(VIEWS.OVERVIEW);
  const [selectedSemester, setSelectedSemester] = useState("current");
  const [showMarkModal, setShowMarkModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // 🔥 SINGLE SOURCE OF TRUTH - Attendance Data
  const [attendanceData, setAttendanceData] = useState([
    { code: "CS601", name: "Machine Learning", attended: 28, total: 32 },
    { code: "CS602", name: "Artificial Intelligence", attended: 30, total: 33 },
    { code: "CS603", name: "Cloud Computing", attended: 24, total: 30 },
    { code: "CS604", name: "Big Data Analytics", attended: 22, total: 31 },
  ]);

  /* ================= REFS ================= */

  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const qrScannerRef = useRef(null);
  const successTimeoutRef = useRef(null);
  const detectionTimeoutRef = useRef(null);

  /* ================= CLEANUP ================= */

  useEffect(() => {
    return () => {
      cleanupResources();
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
      if (detectionTimeoutRef.current) {
        clearTimeout(detectionTimeoutRef.current);
      }
    };
  }, []);

  const cleanupResources = useCallback(() => {
    stopCamera();
    stopQRScanner();
  }, []);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }, []);

  const stopQRScanner = useCallback(() => {
    if (qrScannerRef.current) {
      qrScannerRef.current.clear().catch((err) => {
        console.warn("QR scanner cleanup error:", err);
      });
      qrScannerRef.current = null;
    }
  }, []);

  /* ================= MARK SUCCESS ================= */

  const markSuccess = useCallback(() => {
    if (!selectedSubject) return;

    cleanupResources();
    setIsProcessing(false);

    // Update attendance data
    setAttendanceData((prev) =>
      prev.map((sub) =>
        sub.code === selectedSubject.code
          ? {
              ...sub,
              attended: sub.attended + 1,
              total: sub.total + 1,
            }
          : sub
      )
    );

    setSuccessMessage(`✅ Attendance marked successfully for ${selectedSubject.name}`);

    // Auto-close modal after success
    successTimeoutRef.current = setTimeout(() => {
      resetModal();
    }, 1500);
  }, [selectedSubject, cleanupResources]);

  /* ================= RESET MODAL ================= */

  const resetModal = useCallback(() => {
    cleanupResources();
    if (detectionTimeoutRef.current) {
      clearTimeout(detectionTimeoutRef.current);
    }
    setShowMarkModal(false);
    setSelectedSubject(null);
    setSelectedMethod(null);
    setSuccessMessage("");
    setErrorMessage("");
    setIsProcessing(false);
  }, [cleanupResources]);

  /* ================= CAMERA ================= */

  const startCamera = useCallback(async () => {
    setIsProcessing(true);
    setErrorMessage("");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      // Simulate face detection
      detectionTimeoutRef.current = setTimeout(() => {
        if (streamRef.current) {
          markSuccess();
        }
      }, DETECTION_TIMES[ATTENDANCE_METHODS.FACE]);
    } catch (err) {
      console.error("Camera error:", err);

      let errorMsg = "Unable to access camera. ";
      if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError") {
        errorMsg += "Please grant camera permission in your browser settings.";
      } else if (err.name === "NotFoundError") {
        errorMsg += "No camera device found on this device.";
      } else if (err.name === "NotReadableError") {
        errorMsg += "Camera is already in use by another application.";
      } else {
        errorMsg += "Please check your camera settings and try again.";
      }

      setErrorMessage(errorMsg);
      setIsProcessing(false);
    }
  }, [markSuccess]);

  /* ================= QR SCANNER ================= */

  const startQRScanner = useCallback(() => {
    setIsProcessing(true);
    setErrorMessage("");

    try {
      const scanner = new Html5QrcodeScanner(
        "qr-reader",
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
          aspectRatio: 1.0,
        },
        false
      );

      qrScannerRef.current = scanner;

      scanner.render(
        (decodedText) => {
          console.log("QR Code scanned:", decodedText);
          markSuccess();
        },
        (error) => {
          // Suppress continuous scan errors
          if (!error.includes("NotFoundException")) {
            console.warn("QR Scan error:", error);
          }
        }
      );
    } catch (err) {
      console.error("QR Scanner initialization error:", err);
      setErrorMessage("Unable to initialize QR scanner. Please try again.");
      setIsProcessing(false);
    }
  }, [markSuccess]);

  /* ================= FINGERPRINT ================= */

  const processFingerprint = useCallback(() => {
    setIsProcessing(true);
    setErrorMessage("");

    // Simulate fingerprint processing
    detectionTimeoutRef.current = setTimeout(() => {
      markSuccess();
    }, DETECTION_TIMES[ATTENDANCE_METHODS.FINGERPRINT]);
  }, [markSuccess]);

  /* ================= METHOD SELECTION ================= */

  const handleMethodSelect = useCallback(
    (method) => {
      setSelectedMethod(method);

      // Small delay for smooth UI transition
      setTimeout(() => {
        switch (method) {
          case ATTENDANCE_METHODS.FACE:
            startCamera();
            break;
          case ATTENDANCE_METHODS.FINGERPRINT:
            processFingerprint();
            break;
          case ATTENDANCE_METHODS.QR:
            startQRScanner();
            break;
          default:
            break;
        }
      }, 300);
    },
    [startCamera, processFingerprint, startQRScanner]
  );

  /* ================= BACK TO SUBJECT SELECTION ================= */

  const backToSubjectSelection = useCallback(() => {
    cleanupResources();
    if (detectionTimeoutRef.current) {
      clearTimeout(detectionTimeoutRef.current);
    }
    setSelectedSubject(null);
    setSelectedMethod(null);
    setErrorMessage("");
    setIsProcessing(false);
  }, [cleanupResources]);

  /* ================= EXPORT FUNCTIONALITY ================= */

  const handleExport = useCallback(() => {
    // Implement export functionality
    console.log("Exporting attendance data for semester:", selectedSemester);
    
    // In production, this would:
    // 1. Format data as CSV/PDF
    // 2. Trigger download
    // 3. Or send to API for server-side processing
    
    // Mock export for now
    const csvContent = [
      ["Subject Code", "Subject Name", "Attended", "Total", "Percentage"],
      ...attendanceData.map((sub) => [
        sub.code,
        sub.name,
        sub.attended,
        sub.total,
        ((sub.attended / sub.total) * 100).toFixed(1) + "%",
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `attendance-${selectedSemester}-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [selectedSemester, attendanceData]);

  /* ================= VIEW RENDER ================= */

  const renderView = () => {
    const props = { attendanceData };

    switch (selectedView) {
      case VIEWS.OVERVIEW:
        return <AttendanceDetails {...props} />;
      case VIEWS.SUBJECT:
        return <SubjectWiseAttendance {...props} />;
      case VIEWS.CALENDAR:
        return <AttendanceCalendar />;
      case VIEWS.CHART:
        return <AttendanceChart {...props} />;
      default:
        return <AttendanceDetails {...props} />;
    }
  };

  /* ================= RENDER ================= */

  return (
    <div className="space-y-6 text-white min-h-screen">
      {/* ================= HEADER ================= */}
      <header className="bg-[#111] p-6 border border-gray-800 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-orange-500 mb-2">
              Attendance Tracker
            </h1>
            <p className="text-gray-400 text-sm">
              Monitor your attendance in real-time and stay on track
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Semester Selection */}
            <label htmlFor="semester-select" className="sr-only">
              Select Semester
            </label>
            <select
              id="semester-select"
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="px-4 py-2 bg-black border border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            >
              {SEMESTERS.map((sem) => (
                <option key={sem.value} value={sem.value}>
                  {sem.label}
                </option>
              ))}
            </select>

            {/* Export Button */}
            <button
              onClick={handleExport}
              className="px-4 py-2 bg-orange-500 text-black rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#111]"
              aria-label="Export attendance data"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export</span>
            </button>

            {/* Mark Attendance Button */}
            <button
              onClick={() => setShowMarkModal(true)}
              className="px-4 py-2 bg-orange-500 text-black rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#111]"
            >
              Mark Attendance
            </button>
          </div>
        </div>
      </header>

      {/* ================= STATS ================= */}
      <AttendanceStats attendanceData={attendanceData} />

      {/* ================= TABS ================= */}
      <nav
        className="bg-[#111] border border-gray-800 rounded-lg p-1"
        aria-label="Attendance views"
      >
        <div className="flex gap-2">
          {Object.values(VIEWS).map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                selectedView === view
                  ? "bg-orange-500 text-black"
                  : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
              }`}
              aria-current={selectedView === view ? "page" : undefined}
            >
              {VIEW_LABELS[view]}
            </button>
          ))}
        </div>
      </nav>

      {/* ================= MAIN CONTENT ================= */}
      <main>{renderView()}</main>

      {/* ================= ATTENDANCE MARKING MODAL ================= */}
      {showMarkModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget && !isProcessing) {
              resetModal();
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="bg-[#111] border border-gray-800 rounded-lg shadow-2xl p-6 w-full max-w-md relative max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom duration-300">
            {/* Close Button */}
            <button
              onClick={resetModal}
              disabled={isProcessing}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Title */}
            <h2
              id="modal-title"
              className="text-xl font-bold text-orange-500 mb-6 pr-8"
            >
              {!selectedSubject && "Select Subject"}
              {selectedSubject && !selectedMethod && "Choose Attendance Method"}
              {selectedSubject && selectedMethod && !successMessage && "Processing..."}
              {successMessage && "Success!"}
            </h2>

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-4 p-4 bg-red-900/20 border border-red-500/50 rounded-lg flex items-start gap-3 animate-in slide-in-from-top duration-300">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-red-300 font-medium mb-1">Error</p>
                  <p className="text-sm text-red-200">{errorMessage}</p>
                </div>
              </div>
            )}

            {/* Success Message */}
            {successMessage && (
              <div className="mb-4 p-6 bg-green-900/20 border border-green-500/50 rounded-lg animate-in zoom-in duration-300">
                <p className="text-green-300 text-center font-medium text-lg">
                  {successMessage}
                </p>
              </div>
            )}

            {/* STEP 1: SUBJECT SELECTION */}
            {!selectedSubject && !successMessage && (
              <div className="space-y-3 animate-in fade-in duration-300">
                {SUBJECTS.map((sub) => (
                  <button
                    key={sub.code}
                    onClick={() => setSelectedSubject(sub)}
                    className="w-full p-4 bg-[#1a1a1a] border border-gray-800 rounded-lg hover:border-orange-500 transition-all text-left focus:outline-none focus:ring-2 focus:ring-orange-500 group"
                  >
                    <p className="font-semibold text-white group-hover:text-orange-500 transition-colors">
                      {sub.name}
                    </p>
                    <p className="text-sm text-gray-400">{sub.code}</p>
                  </button>
                ))}
              </div>
            )}

            {/* STEP 2: METHOD SELECTION */}
            {selectedSubject && !selectedMethod && !successMessage && (
              <div className="animate-in fade-in duration-300">
                <div className="mb-4 p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                  <p className="text-sm text-orange-300">
                    <span className="font-semibold">Selected:</span> {selectedSubject.name}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {/* Face Recognition */}
                  <button
                    onClick={() => handleMethodSelect(ATTENDANCE_METHODS.FACE)}
                    disabled={isProcessing}
                    className="bg-[#1a1a1a] p-4 rounded-lg text-center hover:border-orange-500 border-2 border-transparent transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed group"
                    aria-label="Mark attendance using face recognition"
                  >
                    <Camera className="w-8 h-8 mx-auto text-orange-500 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm text-gray-300 group-hover:text-white">Face</p>
                  </button>

                  {/* Fingerprint */}
                  <button
                    onClick={() => handleMethodSelect(ATTENDANCE_METHODS.FINGERPRINT)}
                    disabled={isProcessing}
                    className="bg-[#1a1a1a] p-4 rounded-lg text-center hover:border-orange-500 border-2 border-transparent transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed group"
                    aria-label="Mark attendance using fingerprint"
                  >
                    <Fingerprint className="w-8 h-8 mx-auto text-orange-500 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm text-gray-300 group-hover:text-white">
                      Fingerprint
                    </p>
                  </button>

                  {/* QR Code */}
                  <button
                    onClick={() => handleMethodSelect(ATTENDANCE_METHODS.QR)}
                    disabled={isProcessing}
                    className="bg-[#1a1a1a] p-4 rounded-lg text-center hover:border-orange-500 border-2 border-transparent transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed group"
                    aria-label="Mark attendance using QR code"
                  >
                    <QrCode className="w-8 h-8 mx-auto text-orange-500 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm text-gray-300 group-hover:text-white">QR</p>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: FACE RECOGNITION PROCESSING */}
            {selectedMethod === ATTENDANCE_METHODS.FACE && !successMessage && (
              <div className="text-center animate-in fade-in duration-300">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full rounded-lg border-2 border-orange-500 bg-black mb-4 shadow-lg"
                  aria-label="Camera feed for face recognition"
                />
                <div className="flex items-center justify-center gap-3 text-orange-400">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <p className="animate-pulse">
                    Detecting face for {selectedSubject?.name}...
                  </p>
                </div>
              </div>
            )}

            {/* STEP 3: FINGERPRINT PROCESSING */}
            {selectedMethod === ATTENDANCE_METHODS.FINGERPRINT && !successMessage && (
              <div className="text-center py-8 animate-in fade-in duration-300">
                <div className="relative inline-block mb-4">
                  <Fingerprint className="w-24 h-24 text-orange-500 mx-auto animate-pulse" />
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-ping" />
                </div>
                <div className="flex items-center justify-center gap-3 text-orange-400">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <p>Processing fingerprint for {selectedSubject?.name}...</p>
                </div>
              </div>
            )}

            {/* STEP 3: QR SCANNER */}
            {selectedMethod === ATTENDANCE_METHODS.QR && !successMessage && (
              <div className="animate-in fade-in duration-300">
                <div id="qr-reader" className="mb-4" />
                <p className="text-sm text-gray-400 text-center flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Position the QR code within the frame to scan
                </p>
              </div>
            )}

            {/* Back Button */}
            {selectedSubject && !successMessage && !isProcessing && (
              <button
                onClick={backToSubjectSelection}
                className="mt-6 w-full text-gray-400 text-sm hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded py-2 flex items-center justify-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to Subject Selection
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}