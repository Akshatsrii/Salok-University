import { useState } from "react";
import { Eye, EyeOff, Lock, CheckCircle, XCircle } from "lucide-react";

export default function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const [passwordStrength, setPasswordStrength] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "newPassword") {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z\d]/.test(password)) strength++;
    setPasswordStrength(strength);
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword === formData.currentPassword) {
      alert("New password cannot be same as current password!");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (passwordStrength < 3) {
      alert("Password is too weak!");
      return;
    }

    setSuccessMessage("Password updated successfully 🧡");

    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    setPasswordStrength(0);

    setTimeout(() => {
      setSuccessMessage("");
    }, 4000);
  };

  const handleReset = () => {
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setPasswordStrength(0);
    setSuccessMessage("");
  };

  const strengthText = ["Very Weak", "Weak", "Fair", "Strong"];
  const strengthColor = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
  ];

  const passwordRequirements = [
    { text: "At least 8 characters", met: formData.newPassword.length >= 8 },
    {
      text: "Contains uppercase & lowercase",
      met: /[a-z]/.test(formData.newPassword) && /[A-Z]/.test(formData.newPassword),
    },
    { text: "Contains a number", met: /\d/.test(formData.newPassword) },
    {
      text: "Contains special character",
      met: /[^a-zA-Z\d]/.test(formData.newPassword),
    },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black
                    p-8 rounded-2xl shadow-2xl border border-gray-800
                    text-white transition-all duration-300">

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-orange-500">
          Change Password
        </h2>
        <p className="text-gray-400 mt-2">
          Update your password to keep your account secure
        </p>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="mb-6 bg-green-900/40 border border-green-600
                        text-green-400 p-3 rounded-lg text-sm">
          {successMessage}
        </div>
      )}

      {/* Security Notice */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-8">
        <div className="flex gap-3">
          <Lock className="w-5 h-5 text-orange-500 mt-1" />
          <div>
            <h3 className="font-semibold text-orange-400 text-sm mb-1">
              Password Security Tips
            </h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Use a unique password</li>
              <li>• Avoid personal information</li>
              <li>• Use a password manager</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">

        {["currentPassword", "newPassword", "confirmPassword"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {field === "currentPassword"
                ? "Current Password"
                : field === "newPassword"
                ? "New Password"
                : "Confirm New Password"}
            </label>

            <div className="relative">
              <input
                type={showPasswords[field] ? "text" : "password"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 pr-10
                           bg-gray-900 border border-gray-700
                           rounded-lg text-white
                           focus:ring-2 focus:ring-orange-500
                           focus:border-orange-500 transition"
              />

              <button
                type="button"
                onClick={() => togglePasswordVisibility(field)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500"
              >
                {showPasswords[field] ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {field === "confirmPassword" &&
              formData.confirmPassword &&
              formData.newPassword !== formData.confirmPassword && (
                <p className="text-xs text-red-400 mt-1">
                  Passwords do not match
                </p>
              )}
          </div>
        ))}

        {/* Password Strength */}
        {formData.newPassword && (
          <div>
            <div className="flex justify-between mb-2 text-xs text-gray-400">
              <span>Password Strength:</span>
              <span>{strengthText[passwordStrength - 1] || "Very Weak"}</span>
            </div>

            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  strengthColor[passwordStrength - 1] || "bg-red-500"
                }`}
                style={{ width: `${(passwordStrength / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Requirements */}
        <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl">
          <h4 className="text-sm font-semibold text-orange-400 mb-4">
            Password Requirements
          </h4>

          {passwordRequirements.map((req, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm mb-2">
              {req.met ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <XCircle className="w-4 h-4 text-gray-600" />
              )}
              <span className={req.met ? "text-green-400" : "text-gray-400"}>
                {req.text}
              </span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-6 border-t border-gray-800">
          <button
            type="submit"
            disabled={
              formData.newPassword !== formData.confirmPassword ||
              passwordStrength < 3
            }
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600
                       text-black font-semibold rounded-lg
                       disabled:bg-gray-700 disabled:text-gray-400
                       disabled:cursor-not-allowed transition"
          >
            Update Password
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700
                       text-white rounded-lg transition"
          >
            Reset
          </button>
        </div>

      </form>
    </div>
  );
}
