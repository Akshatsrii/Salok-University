const fs = require('fs');
const path = require('path');

// --- COMMIT 1: PLACEMENT BACKEND ---
const placementModel = import mongoose, { Schema, Document } from 'mongoose';

export interface ICompany extends Document {
  name: string;
  industry: string;
  website: string;
  tier: 'TIER_1' | 'TIER_2' | 'TIER_3';
}
const CompanySchema = new Schema({
  name: { type: String, required: true },
  industry: { type: String },
  website: { type: String },
  tier: { type: String, enum: ['TIER_1', 'TIER_2', 'TIER_3'], default: 'TIER_2' }
}, { timestamps: true });
export const Company = mongoose.model<ICompany>('Company', CompanySchema);

export interface IPlacementDrive extends Document {
  companyId: mongoose.Types.ObjectId;
  jobRole: string;
  packageLPA: number;
  eligibleBranches: string[];
  minCGPA: number;
  driveDate: Date;
  status: 'UPCOMING' | 'ONGOING' | 'COMPLETED';
}
const DriveSchema = new Schema({
  companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  jobRole: { type: String, required: true },
  packageLPA: { type: Number, required: true },
  eligibleBranches: [{ type: String }],
  minCGPA: { type: Number, default: 6.0 },
  driveDate: { type: Date, required: true },
  status: { type: String, enum: ['UPCOMING', 'ONGOING', 'COMPLETED'], default: 'UPCOMING' }
}, { timestamps: true });
export const PlacementDrive = mongoose.model<IPlacementDrive>('PlacementDrive', DriveSchema);
;
fs.writeFileSync('apps/server/src/models/Placement.ts', placementModel);

const placementController = import { Request, Response } from 'express';
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
;
fs.writeFileSync('apps/server/src/controllers/placement.controller.ts', placementController);

const placementRoutes = import { Router } from 'express';
import { getDrives, createDrive, getCompanies } from '../controllers/placement.controller';

const router = Router();
router.get('/drives', getDrives);
router.post('/drives', createDrive);
router.get('/companies', getCompanies);
export default router;
;
fs.writeFileSync('apps/server/src/routes/placement.routes.ts', placementRoutes);
