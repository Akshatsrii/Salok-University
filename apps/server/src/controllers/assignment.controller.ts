import { Request, Response } from 'express';
import { Assignment } from '../models/Assignment';
import mongoose from 'mongoose';

export const createAssignment = async (req: Request, res: Response) => {
  try {
    const assignment = new Assignment(req.body);
    await assignment.save();
    res.status(201).json({ success: true, data: assignment });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAssignmentsByCourse = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const assignments = await Assignment.find({ courseId }).sort({ dueDate: 1 });
    res.status(200).json({ success: true, data: assignments });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const submitAssignment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { studentId, fileUrl } = req.body;

    // Simulate AI grading on submission
    const aiPlagiarismScore = Math.floor(Math.random() * 20); // Random 0-20%
    const assignment = await Assignment.findById(id);
    const aiSuggestedMarks = assignment ? Math.floor(assignment.maxMarks * (0.7 + Math.random() * 0.3)) : 0; // 70-100% of max

    const submission = {
      studentId: new mongoose.Types.ObjectId(studentId),
      fileUrl,
      submittedAt: new Date(),
      status: 'Pending Grading' as const,
      aiPlagiarismScore,
      aiSuggestedMarks,
    };

    const updated = await Assignment.findByIdAndUpdate(
      id,
      { $push: { submissions: submission } },
      { new: true }
    );

    res.status(200).json({ success: true, data: updated });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const gradeSubmission = async (req: Request, res: Response) => {
  try {
    const { id, submissionId } = req.params;
    const { marks, feedback } = req.body;

    const assignment = await Assignment.findOneAndUpdate(
      { _id: id, 'submissions._id': submissionId },
      {
        $set: {
          'submissions.$.marks': marks,
          'submissions.$.feedback': feedback,
          'submissions.$.status': 'Graded',
        },
      },
      { new: true }
    );

    res.status(200).json({ success: true, data: assignment });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
