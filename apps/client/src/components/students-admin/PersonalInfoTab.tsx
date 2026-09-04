export const PersonalInfoTab = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-500">Full Name</label>
          <div className="mt-1 text-gray-900 font-medium">Rahul Sharma</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Date of Birth</label>
          <div className="mt-1 text-gray-900 font-medium">15 Aug 2004</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Gender</label>
          <div className="mt-1 text-gray-900 font-medium">Male</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Phone</label>
          <div className="mt-1 text-gray-900 font-medium">+91 9876543210</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Email</label>
          <div className="mt-1 text-gray-900 font-medium">rahul.s@example.com</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Address</label>
          <div className="mt-1 text-gray-900 font-medium">123, Sector 4, New Delhi</div>
        </div>
      </div>
    </div>
  );
};
