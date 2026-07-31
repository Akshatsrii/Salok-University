import express, { Request, Response } from 'express';
import { AdmissionApplication, AdmissionStatus } from 'database';

const router = express.Router();

// Mock OCR/AI Verification function
const simulateAIVerification = (documents: any) => {
  // Simulate AI checking the Aadhaar and Marksheet
  console.log('Running AI Document Verification...', documents);
  return {
    score: Math.floor(Math.random() * 40) + 60, // 60-100 score
    isFake: Math.random() > 0.9, // 10% chance of fake detection
  };
};

router.post('/apply', async (req: Request, res: Response) => {
  try {
    const { universityId, appliedCourseId, studentName, email, phone, aadhaarNumber, documents } = req.body;
    
    // Run AI Verification
    const aiResult = simulateAIVerification(documents);
    
    let status = AdmissionStatus.PENDING;
    if (aiResult.isFake) {
      status = AdmissionStatus.REJECTED;
    } else if (aiResult.score > 85) {
      status = AdmissionStatus.VERIFIED;
    }

    const application = new AdmissionApplication({
      universityId,
      appliedCourseId,
      studentName,
      email,
      phone,
      aadhaarNumber,
      documents,
      aiVerificationScore: aiResult.score,
      status,
    });

    await application.save();
    res.status(201).json({ message: 'Application submitted', application, aiAnalysis: aiResult });
  } catch (error) {
    res.status(400).json({ error: 'Failed to submit application' });
  }
});

router.get('/status/:id', async (req: Request, res: Response) => {
  try {
    const application = await AdmissionApplication.findById(req.params.id);
    if (!application) return res.status(404).json({ error: 'Application not found' });
    res.json(application);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
