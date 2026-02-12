import { useState, useEffect } from "react";
import { Save, Camera } from "lucide-react";

export default function BasicDetails() {
  const defaultData = {
    firstName: "Riya",
    lastName: "Bansal",
    studentId: "2024001",
    email: "riya.bansal@salok.edu",
    phone: "+91 98765 43210",
    dateOfBirth: "2004-05-15",
    gender: "Female",
    bloodGroup: "O+",
    address: "123, Model Town, Jaipur",
    guardianName: "Rajesh Bansal",
    guardianPhone: "+91 98765 12345",
    profilePhoto:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  };

  const [formData, setFormData] = useState(defaultData);
  const [originalData, setOriginalData] = useState(defaultData);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("studentProfile");
    if (saved) {
      setFormData(JSON.parse(saved));
      setOriginalData(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFormData({ ...formData, profilePhoto: imageURL });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("studentProfile", JSON.stringify(formData));
    setOriginalData(formData);
    setIsEditing(false);
    alert("Profile updated successfully 🖤🧡");
  };

  const handleCancel = () => {
    setFormData(originalData);
    setIsEditing(false);
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black
                    p-8 rounded-2xl shadow-2xl border border-gray-800
                    text-white transition-all duration-300">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-orange-500">
            Basic Details
          </h2>
          <p className="text-gray-400 mt-2">
            Manage and update your personal information
          </p>
        </div>

        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="px-6 py-2 bg-orange-500 hover:bg-orange-600
                       text-black font-semibold rounded-lg
                       shadow-lg hover:shadow-orange-500/40
                       transition-all duration-300"
          >
            Edit Profile
          </button>
        )}
      </div>

      {/* Profile Section */}
      <div className="mb-10 pb-8 border-b border-gray-800">
        <div className="flex items-center gap-8">
          <div className="relative">
            <img
              src={formData.profilePhoto}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover
                         border-4 border-orange-500
                         shadow-lg shadow-orange-500/30"
            />

            {isEditing && (
              <label className="absolute bottom-2 right-2
                                bg-orange-500 text-black
                                p-2 rounded-full cursor-pointer
                                hover:bg-orange-600 transition">
                <Camera className="w-4 h-4" />
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handlePhotoUpload}
                />
              </label>
            )}
          </div>

          <div>
            <h3 className="text-xl font-bold">
              {formData.firstName} {formData.lastName}
            </h3>
            <p className="text-gray-400 text-sm">
              Student ID: {formData.studentId}
            </p>
            <p className="text-gray-400 text-sm">
              B.Tech • CSE • 6th Semester
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-10">

        {/* Personal Info */}
        <div>
          <h3 className="text-xl font-semibold text-orange-500 mb-5">
            Personal Information
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: "First Name", name: "firstName" },
              { label: "Last Name", name: "lastName" },
              { label: "Email", name: "email", type: "email" },
              { label: "Phone", name: "phone" },
              { label: "Date of Birth", name: "dateOfBirth", type: "date" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm text-gray-400 mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 rounded-lg
                             bg-gray-900 border border-gray-700
                             focus:ring-2 focus:ring-orange-500
                             focus:border-orange-500
                             disabled:bg-gray-800
                             transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-xl font-semibold text-orange-500 mb-5">
            Address
          </h3>

          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            disabled={!isEditing}
            rows="3"
            className="w-full px-4 py-3 rounded-lg
                       bg-gray-900 border border-gray-700
                       focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Guardian */}
        <div>
          <h3 className="text-xl font-semibold text-orange-500 mb-5">
            Guardian Information
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Guardian Name"
              className="px-4 py-3 rounded-lg
                         bg-gray-900 border border-gray-700
                         focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="text"
              name="guardianPhone"
              value={formData.guardianPhone}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Guardian Phone"
              className="px-4 py-3 rounded-lg
                         bg-gray-900 border border-gray-700
                         focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Buttons */}
        {isEditing && (
          <div className="flex gap-4 pt-8 border-t border-gray-800">
            <button
              type="submit"
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600
                         text-black font-semibold rounded-lg
                         shadow-lg hover:shadow-orange-500/40
                         transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save Changes
              </span>
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700
                         text-white rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
