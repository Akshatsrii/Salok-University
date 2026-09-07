import { Request, Response } from 'express';
import { Company, PlacementDrive } from '../models/Placement';

export const getDrives = async (req: Request, res: Response) => {
  try {
    const drives = await PlacementDrive.find().populate('companyId').sort({ driveDate: 1 }).lean();
    res.json(drives);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching drives' });
  }
};

export const createDrive = async (req: Request, res: Response) => {
  try {
    const drive = await PlacementDrive.create(req.body);
    res.status(201).json(drive);
  } catch (err) {
    res.status(500).json({ message: 'Error creating drive' });
  }
};

export const getCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await Company.find().lean();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching companies' });
  }
};
