import { Request, Response } from 'express';
import { Attendance } from '../models/Attendance';
import mongoose from 'mongoose';

export const markAttendance = async (req: Request, res: Response) => {
  try {
    const { studentId, courseId, tenantId, method } = req.body;
    
    // AI Flagging: Check for duplicate rapid scans (proxy suspected)
    // If the same IP/Device marks multiple attendances within 1 minute, flag it.
    // For mock purposes, we will simulate this by checking if there was any attendance marked in the last minute for this course.
    const oneMinuteAgo = new Date(Date.now() - 60000);
    const recentScans = await Attendance.countDocuments({
      courseId,
      createdAt: { $gte: oneMinuteAgo }
    });

    let proxySuspected = false;
    let reason = '';

    if (recentScans > 3 && method === 'QR') {
      proxySuspected = true;
      reason = 'Rapid consecutive QR scans detected from multiple students in a short time window. Possible proxy.';
    }

    const attendance = new Attendance({
      tenantId: tenantId || new mongoose.Types.ObjectId(), // Mock
      studentId,
      courseId,
      status: 'Present',
      method,
      aiFlags: {
        proxySuspected,
        reason
      }
    });

    await attendance.save();
    res.status(201).json({ success: true, data: attendance });
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(400).json({ success: false, message: 'Attendance already marked for today' });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getStudentAttendance = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const records = await Attendance.find({ studentId }).sort({ date: -1 });
    res.status(200).json({ success: true, data: records });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
