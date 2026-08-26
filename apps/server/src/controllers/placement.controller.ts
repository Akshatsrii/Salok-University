import { Request, Response } from 'express';
import { Company, PlacementDrive, JobApplication } from '../models/Placement';

export const createCompany = async (req: Request, res: Response) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ error: 'Server error creating company' });
  }
};

export const getCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching companies' });
  }
};

export const createDrive = async (req: Request, res: Response) => {
  try {
    const drive = new PlacementDrive(req.body);
    await drive.save();
    res.status(201).json(drive);
  } catch (error) {
    res.status(500).json({ error: 'Server error creating drive' });
  }
};

export const getDrives = async (req: Request, res: Response) => {
  try {
    const drives = await PlacementDrive.find().populate('companyId', 'name tier');
    res.json(drives);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching drives' });
  }
};

export const applyForDrive = async (req: Request, res: Response) => {
  try {
    const { studentId, driveId, resumeUrl } = req.body;
    
    // Check if already applied
    const existing = await JobApplication.findOne({ studentId, driveId });
    if (existing) {
      return res.status(400).json({ error: 'Already applied' });
    }

    const application = new JobApplication({ studentId, driveId, resumeUrl });
    await application.save();
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ error: 'Server error applying for drive' });
  }
};

export const updateApplicationStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const application = await JobApplication.findByIdAndUpdate(id, { status }, { new: true });
    res.json(application);
  } catch (error) {
    res.status(500).json({ error: 'Server error updating status' });
  }
};
