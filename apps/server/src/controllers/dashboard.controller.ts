import { Request, Response } from 'express';

export const getAdminDashboardStats = async (req: Request, res: Response) => {
  try {
    // In a real application, these would be aggregations from MongoDB
    const stats = {
      overview: {
        totalStudents: 15234,
        teachers: 542,
        todaysAttendance: 92,
        feesCollected: 45.2, // in Cr
        feesPending: 5.8,
        placements: 840,
        todaysClasses: 412,
        liveBuses: 45,
        hostelOccupancy: 88,
        examStatus: 'Ongoing'
      },
      admissionTrends: [
        { month: 'Jan', admissions: 120 },
        { month: 'Feb', admissions: 250 },
        { month: 'Mar', admissions: 400 },
        { month: 'Apr', admissions: 800 },
        { month: 'May', admissions: 1200 },
        { month: 'Jun', admissions: 1800 },
      ],
      attendanceTrends: [
        { day: 'Mon', attendance: 92 },
        { day: 'Tue', attendance: 94 },
        { day: 'Wed', attendance: 89 },
        { day: 'Thu', attendance: 95 },
        { day: 'Fri', attendance: 85 },
        { day: 'Sat', attendance: 70 },
      ],
      revenue: [
        { month: 'Jul', revenue: 20 },
        { month: 'Aug', revenue: 45 },
        { month: 'Sep', revenue: 60 },
        { month: 'Oct', revenue: 85 },
        { month: 'Nov', revenue: 100 },
        { month: 'Dec', revenue: 140 },
      ],
      placements: [
        { name: 'Tech/IT', value: 450 },
        { name: 'Finance', value: 150 },
        { name: 'Consulting', value: 120 },
        { name: 'Core Engg', value: 90 },
        { name: 'Others', value: 30 },
      ],
      coursePopularity: [
        { course: 'B.Tech CSE', students: 1200 },
        { course: 'BBA', students: 800 },
        { course: 'B.Sc Bio', students: 600 },
        { course: 'B.Com', students: 400 },
        { course: 'BA Arts', students: 300 },
      ]
    };

    res.status(200).json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch dashboard stats' });
  }
};
