import { useState } from 'react';

export default function HostelDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showMessMenu, setShowMessMenu] = useState(false);

  // Sample hostel data - replace with API call
  const hostelData = {
    hostelName: 'A-Block (Boys)',
    roomNumber: '204',
    floor: '2nd Floor',
    roomType: 'Double Occupancy',
    block: 'A',
    wing: 'East Wing',
    messStatus: 'active',
    checkInDate: '2024-08-15',
    roommates: [
      { name: 'Rahul Sharma', rollNo: 'CS21B1001', course: 'CSE' },
      { name: 'You', rollNo: 'CS21B1025', course: 'CSE' }
    ],
    warden: {
      name: 'Dr. Prakash Kumar',
      phone: '+91 98765 43210',
      email: 'warden.ablock@college.edu'
    },
    facilities: [
      { name: 'Wi-Fi', available: true, icon: '📶' },
      { name: 'Laundry', available: true, icon: '🧺' },
      { name: 'Common Room', available: true, icon: '🎮' },
      { name: 'Gym', available: true, icon: '💪' },
      { name: 'Study Hall', available: true, icon: '📚' },
      { name: 'Canteen', available: false, icon: '☕' }
    ],
    messInfo: {
      status: 'active',
      balance: 4850,
      lastPayment: '2024-02-01',
      nextPayment: '2024-03-01',
      dailyMeals: 3,
      preference: 'Vegetarian'
    },
    complaints: [
      { id: 1, type: 'Maintenance', status: 'resolved', date: '2024-01-28' },
      { id: 2, type: 'Cleanliness', status: 'pending', date: '2024-02-05' }
    ],
    announcements: [
      { id: 1, title: 'Hostel Meeting', date: '2024-02-10', priority: 'high' },
      { id: 2, title: 'Mess Menu Update', date: '2024-02-08', priority: 'medium' }
    ]
  };

  const weeklyMenu = {
    Monday: { breakfast: 'Poha, Tea', lunch: 'Dal, Rice, Roti, Sabzi', dinner: 'Rajma, Rice, Roti' },
    Tuesday: { breakfast: 'Idli, Sambhar', lunch: 'Chole, Rice, Roti', dinner: 'Paneer Curry, Roti' },
    Wednesday: { breakfast: 'Paratha, Curd', lunch: 'Dal Fry, Rice, Roti', dinner: 'Mix Veg, Roti' },
    Thursday: { breakfast: 'Upma, Tea', lunch: 'Kadhi, Rice, Roti', dinner: 'Chana Masala, Roti' },
    Friday: { breakfast: 'Sandwich, Tea', lunch: 'Dal Tadka, Rice, Roti', dinner: 'Veg Biryani' },
    Saturday: { breakfast: 'Dosa, Chutney', lunch: 'Special Thali', dinner: 'Fried Rice, Manchurian' },
    Sunday: { breakfast: 'Aloo Paratha', lunch: 'Pav Bhaji', dinner: 'Dal Makhani, Naan' }
  };

  const statusConfig = {
    active: { label: 'Active', color: 'text-green-600', bg: 'bg-green-100', icon: '✓' },
    inactive: { label: 'Inactive', color: 'text-red-600', bg: 'bg-red-100', icon: '✗' },
    pending: { label: 'Pending', color: 'text-yellow-600', bg: 'bg-yellow-100', icon: '⏳' }
  };

  const InfoCard = ({ icon, label, value, accent, subtext }) => (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-gradient-to-br from-white to-gray-50">
      <div className="flex items-start justify-between mb-2">
        <span className="text-2xl">{icon}</span>
        {accent && (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${accent.bg} ${accent.color}`}>
            {accent.label}
          </span>
        )}
      </div>
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="font-semibold text-gray-900 text-lg">{value}</p>
      {subtext && <p className="text-xs text-gray-400 mt-1">{subtext}</p>}
    </div>
  );

  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Basic Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <InfoCard
          icon="🏠"
          label="Hostel Name"
          value={hostelData.hostelName}
          subtext={`${hostelData.wing}, ${hostelData.floor}`}
        />
        <InfoCard
          icon="🚪"
          label="Room Number"
          value={hostelData.roomNumber}
          subtext={hostelData.roomType}
        />
        <InfoCard
          icon="🍽️"
          label="Mess Status"
          value={statusConfig[hostelData.messInfo.status].label}
          accent={statusConfig[hostelData.messInfo.status]}
          subtext={`Balance: ₹${hostelData.messInfo.balance}`}
        />
        <InfoCard
          icon="📅"
          label="Check-in Date"
          value={new Date(hostelData.checkInDate).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          })}
          subtext={`${Math.floor((new Date() - new Date(hostelData.checkInDate)) / (1000 * 60 * 60 * 24))} days`}
        />
      </div>

      {/* Roommates */}
      <div className="border border-gray-200 rounded-lg p-5">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span>👥</span> Roommates
        </h3>
        <div className="space-y-3">
          {hostelData.roommates.map((roommate, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-semibold">
                {roommate.name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{roommate.name}</p>
                <p className="text-sm text-gray-500">{roommate.rollNo} • {roommate.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facilities */}
      <div className="border border-gray-200 rounded-lg p-5">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span>⚡</span> Facilities
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {hostelData.facilities.map((facility, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg border-2 text-center transition-all ${
                facility.available
                  ? 'border-green-200 bg-green-50 hover:border-green-300'
                  : 'border-gray-200 bg-gray-50 opacity-50'
              }`}
            >
              <div className="text-2xl mb-1">{facility.icon}</div>
              <p className="text-xs font-medium text-gray-700">{facility.name}</p>
              {!facility.available && (
                <p className="text-xs text-red-500 mt-1">N/A</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const MessTab = () => (
    <div className="space-y-6">
      {/* Mess Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <InfoCard
          icon="💰"
          label="Current Balance"
          value={`₹${hostelData.messInfo.balance}`}
          accent={{ bg: 'bg-green-100', color: 'text-green-700', label: 'Paid' }}
        />
        <InfoCard
          icon="🥗"
          label="Daily Meals"
          value={hostelData.messInfo.dailyMeals}
          subtext={hostelData.messInfo.preference}
        />
        <InfoCard
          icon="📅"
          label="Last Payment"
          value={new Date(hostelData.messInfo.lastPayment).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
          })}
        />
        <InfoCard
          icon="⏰"
          label="Next Payment"
          value={new Date(hostelData.messInfo.nextPayment).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
          })}
          subtext="Due in 22 days"
        />
      </div>

      {/* Weekly Menu */}
      <div className="border border-gray-200 rounded-lg p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <span>📋</span> Weekly Mess Menu
          </h3>
          <button
            onClick={() => setShowMessMenu(!showMessMenu)}
            className="text-sm text-primary hover:underline"
          >
            {showMessMenu ? 'Hide Menu' : 'View Full Menu'}
          </button>
        </div>
        
        {showMessMenu && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 px-3 font-semibold text-gray-700">Day</th>
                  <th className="text-left py-2 px-3 font-semibold text-gray-700">Breakfast</th>
                  <th className="text-left py-2 px-3 font-semibold text-gray-700">Lunch</th>
                  <th className="text-left py-2 px-3 font-semibold text-gray-700">Dinner</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(weeklyMenu).map(([day, meals]) => (
                  <tr key={day} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-3 font-medium text-gray-900">{day}</td>
                    <td className="py-3 px-3 text-gray-600">{meals.breakfast}</td>
                    <td className="py-3 px-3 text-gray-600">{meals.lunch}</td>
                    <td className="py-3 px-3 text-gray-600">{meals.dinner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );

  const ContactTab = () => (
    <div className="space-y-6">
      {/* Warden Info */}
      <div className="border border-gray-200 rounded-lg p-5">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span>👨‍💼</span> Hostel Warden
        </h3>
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center text-2xl font-bold">
              {hostelData.warden.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900 text-lg">{hostelData.warden.name}</p>
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>📞</span>
                  <a href={`tel:${hostelData.warden.phone}`} className="hover:text-primary">
                    {hostelData.warden.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>✉️</span>
                  <a href={`mailto:${hostelData.warden.email}`} className="hover:text-primary">
                    {hostelData.warden.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="border border-gray-200 rounded-lg p-5">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span>🚨</span> Emergency Contacts
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { name: 'Security', number: '+91 98765 11111', icon: '🛡️' },
            { name: 'Medical', number: '+91 98765 22222', icon: '🏥' },
            { name: 'Maintenance', number: '+91 98765 33333', icon: '🔧' },
            { name: 'Fire Safety', number: '+91 98765 44444', icon: '🚒' }
          ].map((contact, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <span className="text-2xl">{contact.icon}</span>
              <div>
                <p className="font-medium text-gray-900">{contact.name}</p>
                <a href={`tel:${contact.number}`} className="text-sm text-gray-600 hover:text-primary">
                  {contact.number}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Announcements */}
      <div className="border border-gray-200 rounded-lg p-5">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span>📢</span> Recent Announcements
        </h3>
        <div className="space-y-3">
          {hostelData.announcements.map((announcement) => (
            <div 
              key={announcement.id} 
              className={`p-3 rounded-lg border-l-4 ${
                announcement.priority === 'high' 
                  ? 'bg-red-50 border-red-500' 
                  : 'bg-blue-50 border-blue-500'
              }`}
            >
              <div className="flex items-start justify-between">
                <p className="font-medium text-gray-900">{announcement.title}</p>
                <span className="text-xs text-gray-500">
                  {new Date(announcement.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🏠' },
    { id: 'mess', label: 'Mess', icon: '🍽️' },
    { id: 'contact', label: 'Contact & Info', icon: '📞' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-primary">Hostel Dashboard</h2>
            <p className="text-sm text-gray-500 mt-1">
              Manage your hostel information and services
            </p>
          </div>
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            {hostelData.block}-Block
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 px-6">
        <div className="flex gap-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-all border-b-2 ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'mess' && <MessTab />}
        {activeTab === 'contact' && <ContactTab />}
      </div>
    </div>
  );
}