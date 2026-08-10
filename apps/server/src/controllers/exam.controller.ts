import { Request, Response } from 'express';
import { Examination } from '../models/Examination';
import { ExamEligibilityService } from '../services/examEligibility.service';

export const createExamination = async (req: Request, res: Response) => {
  try {
    const exam = new Examination(req.body);
    await exam.save();
    res.status(201).json({ success: true, data: exam });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getExaminationsByCourse = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const exams = await Examination.find({ courseId }).sort({ startDate: 1 });
    res.status(200).json({ success: true, data: exams });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const generateHallTicket = async (req: Request, res: Response) => {
  try {
    const { examId, studentId } = req.params;

    const exam = await Examination.findById(examId).populate('schedule.subjectId', 'name code');
    if (!exam) {
      return res.status(404).json({ success: false, message: 'Examination not found' });
    }

    // Check Eligibility
    const eligibility = await ExamEligibilityService.checkEligibility(studentId, examId);
    if (!eligibility.eligible) {
      return res.status(403).json({
        success: false,
        message: 'Hall ticket generation failed',
        reason: eligibility.reason
      });
    }

    // Return the schedule to be printed on the hall ticket
    res.status(200).json({
      success: true,
      message: 'Hall ticket generated successfully',
      data: {
        examName: exam.examName,
        type: exam.type,
        schedule: exam.schedule
      }
    });

  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
