return (
  <div className="bg-[#111] border border-gray-800 rounded-xl shadow-xl text-white">

    {/* Header */}
    <div className="p-6 border-b border-gray-800 flex items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold text-orange-500">
          Hostel Dashboard
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Manage your hostel information and services
        </p>
      </div>

      <div className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
        {hostelData.block}-Block
      </div>
    </div>

    {/* Tabs */}
    <div className="border-b border-gray-800 px-6">
      <div className="flex gap-1 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-all border-b-2 ${
              activeTab === tab.id
                ? "border-orange-500 text-orange-400"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
    </div>

    {/* Tab Content */}
    <div className="p-6 space-y-6">

      {/* OVERVIEW TAB */}
      {activeTab === "overview" && (
        <div className="space-y-6">

          {/* Info Cards */}
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
              accent={{
                bg: "bg-green-900/20",
                color: "text-green-400",
                label:
                  statusConfig[hostelData.messInfo.status].label,
              }}
              subtext={`Balance: ₹${hostelData.messInfo.balance}`}
            />
            <InfoCard
              icon="📅"
              label="Check-in Date"
              value={new Date(
                hostelData.checkInDate
              ).toLocaleDateString()}
            />
          </div>

          {/* Roommates */}
          <div className="bg-black border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-orange-400 mb-4">
              👥 Roommates
            </h3>

            <div className="space-y-3">
              {hostelData.roommates.map((roommate, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg"
                >
                  <div className="w-10 h-10 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center font-semibold">
                    {roommate.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">
                      {roommate.name}
                    </p>
                    <p className="text-sm text-gray-400">
                      {roommate.rollNo} • {roommate.course}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div className="bg-black border border-gray-800 rounded-lg p-5">
            <h3 className="font-semibold text-orange-400 mb-4">
              ⚡ Facilities
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {hostelData.facilities.map((facility, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border text-center transition-all ${
                    facility.available
                      ? "border-green-600 bg-green-900/20"
                      : "border-gray-700 bg-[#1a1a1a] opacity-50"
                  }`}
                >
                  <div className="text-2xl mb-1">
                    {facility.icon}
                  </div>
                  <p className="text-xs">
                    {facility.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MESS TAB */}
      {activeTab === "mess" && (
        <div className="space-y-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <InfoCard
              icon="💰"
              label="Balance"
              value={`₹${hostelData.messInfo.balance}`}
            />
            <InfoCard
              icon="🥗"
              label="Daily Meals"
              value={hostelData.messInfo.dailyMeals}
            />
            <InfoCard
              icon="📅"
              label="Next Payment"
              value={new Date(
                hostelData.messInfo.nextPayment
              ).toLocaleDateString()}
            />
          </div>

          {/* Weekly Menu */}
          <div className="bg-black border border-gray-800 rounded-lg p-5">
            <div className="flex justify-between mb-4">
              <h3 className="text-orange-400 font-semibold">
                📋 Weekly Mess Menu
              </h3>
              <button
                onClick={() =>
                  setShowMessMenu(!showMessMenu)
                }
                className="text-sm text-orange-400 hover:underline"
              >
                {showMessMenu
                  ? "Hide Menu"
                  : "View Full Menu"}
              </button>
            </div>

            {showMessMenu && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700 text-gray-400">
                      <th className="text-left py-2 px-3">
                        Day
                      </th>
                      <th className="text-left py-2 px-3">
                        Breakfast
                      </th>
                      <th className="text-left py-2 px-3">
                        Lunch
                      </th>
                      <th className="text-left py-2 px-3">
                        Dinner
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(weeklyMenu).map(
                      ([day, meals]) => (
                        <tr
                          key={day}
                          className="border-b border-gray-800 hover:bg-[#1a1a1a]"
                        >
                          <td className="py-3 px-3 font-medium">
                            {day}
                          </td>
                          <td className="py-3 px-3 text-gray-400">
                            {meals.breakfast}
                          </td>
                          <td className="py-3 px-3 text-gray-400">
                            {meals.lunch}
                          </td>
                          <td className="py-3 px-3 text-gray-400">
                            {meals.dinner}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CONTACT TAB */}
      {activeTab === "contact" && (
        <div className="space-y-6">

          <div className="bg-black border border-gray-800 rounded-lg p-5">
            <h3 className="text-orange-400 font-semibold mb-4">
              👨‍💼 Hostel Warden
            </h3>

            <p className="text-lg font-semibold">
              {hostelData.warden.name}
            </p>

            <p className="text-gray-400 mt-2">
              📞 {hostelData.warden.phone}
            </p>
            <p className="text-gray-400">
              ✉ {hostelData.warden.email}
            </p>
          </div>

          <div className="bg-black border border-gray-800 rounded-lg p-5">
            <h3 className="text-orange-400 font-semibold mb-4">
              📢 Announcements
            </h3>

            <div className="space-y-3">
              {hostelData.announcements.map(
                (announcement) => (
                  <div
                    key={announcement.id}
                    className="p-3 rounded-lg bg-[#1a1a1a] border border-gray-800"
                  >
                    <p className="font-medium">
                      {announcement.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(
                        announcement.date
                      ).toLocaleDateString()}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);
