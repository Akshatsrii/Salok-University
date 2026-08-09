import { Request, Response } from 'express';
import { Timetable } from '../models/Timetable';
import { TimetableOptimizerService } from '../services/timetableOptimizer.service';

export const getCourseTimetable = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const schedule = await Timetable.find({ courseId })
      .populate('subjectId', 'name code')
      .populate('teacherId', 'name')
      .sort({ dayOfWeek: 1, startTime: 1 });
      
    res.status(200).json({ success: true, data: schedule });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getTeacherTimetable = async (req: Request, res: Response) => {
  try {
    const { teacherId } = req.params;
    const schedule = await Timetable.find({ teacherId })
      .populate('subjectId', 'name code')
      .populate('courseId', 'name')
      .sort({ dayOfWeek: 1, startTime: 1 });
      
    res.status(200).json({ success: true, data: schedule });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addTimetableEntry = async (req: Request, res: Response) => {
  try {
    // Before saving, run through the AI optimizer conflict checker
    const conflicts = await TimetableOptimizerService.checkConflicts(req.body);
    
    if (conflicts.length > 0) {
      return res.status(409).json({
        success: false,
        message: 'Conflicts detected in the proposed schedule.',
        conflicts
      });
    }

    const entry = new Timetable(req.body);
    await entry.save();
    res.status(201).json({ success: true, data: entry });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const autoOptimizeCourseTimetable = async (req: Request, res: Response) => {
  try {
    const { tenantId, courseId } = req.body;
    const result = await TimetableOptimizerService.optimizeSchedule(tenantId, courseId);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
