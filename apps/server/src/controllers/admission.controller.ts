import { Request, Response } from 'express';
import { Application } from '../models/Application';

export const applyForAdmission = async (req: Request, res: Response) => {
  try {
    const application = new Application({
      ...req.body,
      status: 'Submitted',
      // In a real scenario, this would be computed via an AI microservice or async job
      aiVerificationScore: Math.floor(Math.random() * 100), 
      aiVerificationNotes: 'AI placeholder verification notes based on document quality.'
    });

    await application.save();
    res.status(201).json({ success: true, data: application });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getApplications = async (req: Request, res: Response) => {
  try {
    // Tenant scoping would be applied by the middleware setting req.query.tenantId
    const query = req.query;
    const applications = await Application.find(query).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: applications });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getApplicationById = async (req: Request, res: Response) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }
    res.status(200).json({ success: true, data: application });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
