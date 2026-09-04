
export const SeatAllocationBoard = () => {
  const courses = [
    { name: 'B.Tech CSE', total: 120, allocated: 85, reserved: 20 },
    { name: 'BBA Data Analytics', total: 60, allocated: 45, reserved: 10 },
    { name: 'B.Sc Biotechnology', total: 40, allocated: 38, reserved: 2 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Seat Allocation Overview</h3>
      <div className="space-y-6">
        {courses.map((course, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold text-gray-800">{course.name}</span>
              <span className="text-gray-500">
                {course.allocated + course.reserved} / {course.total} Filled
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 flex overflow-hidden">
              <div 
                className="bg-blue-600 h-3" 
                style={{ width: `${(course.allocated / course.total) * 100}%` }}
                title={`Allocated: ${course.allocated}`}
              ></div>
              <div 
                className="bg-purple-400 h-3" 
                style={{ width: `${(course.reserved / course.total) * 100}%` }}
                title={`Reserved (Management Quota): ${course.reserved}`}
              ></div>
            </div>
            <div className="flex gap-4 mt-2 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div> Allocated ({course.allocated})
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div> Reserved ({course.reserved})
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-gray-200"></div> Available ({course.total - course.allocated - course.reserved})
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
