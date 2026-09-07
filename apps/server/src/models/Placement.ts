import mongoose, { Schema, Document } from 'mongoose';

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
