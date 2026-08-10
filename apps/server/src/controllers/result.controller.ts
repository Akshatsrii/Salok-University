import { Request, Response } from 'express';
import { Result } from '../models/Result';
import { CGPACalculatorService } from '../services/cgpaCalculator.service';

export const processResult = async (req: Request, res: Response) => {
  try {
    const { tenantId, examinationId, studentId, marks } = req.body;

    let totalScored = 0;
    let totalMax = 0;

    marks.forEach((m: any) => {
      totalScored += m.scoredMarks;
      totalMax += m.maxMarks;
    });

    const percentage = totalMax > 0 ? (totalScored / totalMax) * 100 : 0;
    const sgpa = CGPACalculatorService.calculateSGPA(marks);
    
    // For this demonstration, CGPA is just a mock function based on SGPA
    const cgpa = sgpa; 
    
    const hasBacklog = CGPACalculatorService.checkBacklogs(marks);

    const result = new Result({
      tenantId,
      examinationId,
      studentId,
      marks,
      totalScored,
      totalMax,
      percentage,
      sgpa,
      cgpa,
      hasBacklog
    });

    await result.save();
    res.status(201).json({ success: true, data: result });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getStudentResult = async (req: Request, res: Response) => {
  try {
    const { examId, studentId } = req.params;
    const result = await Result.findOne({ examinationId: examId, studentId })
      .populate('marks.subjectId', 'name code');
      
    if (!result) return res.status(404).json({ success: false, message: 'Result not found' });
    
    res.status(200).json({ success: true, data: result });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const applyRevaluation = async (req: Request, res: Response) => {
  try {
    const { resultId } = req.params;
    
    const result = await Result.findByIdAndUpdate(
      resultId, 
      { isRevaluationApplied: true, revaluationStatus: 'Pending' },
      { new: true }
    );

    res.status(200).json({ success: true, data: result });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
