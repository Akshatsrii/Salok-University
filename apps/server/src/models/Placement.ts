import mongoose, { Schema, Document } from 'mongoose';

export interface ICompany extends Document {
  name: string;
  industry: string;
  website: string;
  hrContactName: string;
  hrContactEmail: string;
  tier: 'TIER_1' | 'TIER_2' | 'TIER_3';
}

const CompanySchema: Schema = new Schema({
  name: { type: String, required: true },
  industry: { type: String },
  website: { type: String },
  hrContactName: { type: String },
  hrContactEmail: { type: String },
  tier: { type: String, enum: ['TIER_1', 'TIER_2', 'TIER_3'], default: 'TIER_2' }
}, { timestamps: true });

export const Company = mongoose.model<ICompany>('Company', CompanySchema);

export interface IPlacementDrive extends Document {
  companyId: mongoose.Types.ObjectId;
  jobTitle: string;
  package: string;
  eligibility: {
    minCGPA: number;
    allowedBranches: string[];
    maxBacklogs: number;
  };
  jobDescriptionUrl: string;
  registrationDeadline: Date;
  status: 'UPCOMING' | 'ONGOING' | 'COMPLETED' | 'CANCELLED';
}

const PlacementDriveSchema: Schema = new Schema({
  companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  jobTitle: { type: String, required: true },
  package: { type: String, required: true },
  eligibility: {
    minCGPA: { type: Number, required: true },
    allowedBranches: [{ type: String }],
    maxBacklogs: { type: Number, default: 0 }
  },
  jobDescriptionUrl: { type: String },
  registrationDeadline: { type: Date, required: true },
  status: { type: String, enum: ['UPCOMING', 'ONGOING', 'COMPLETED', 'CANCELLED'], default: 'UPCOMING' }
}, { timestamps: true });

export const PlacementDrive = mongoose.model<IPlacementDrive>('PlacementDrive', PlacementDriveSchema);

export interface IJobApplication extends Document {
  studentId: mongoose.Types.ObjectId;
  driveId: mongoose.Types.ObjectId;
  status: 'APPLIED' | 'SHORTLISTED' | 'APTITUDE_CLEARED' | 'TECH_CLEARED' | 'HR_CLEARED' | 'SELECTED' | 'REJECTED';
  resumeUrl: string;
  appliedAt: Date;
}

const JobApplicationSchema: Schema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  driveId: { type: Schema.Types.ObjectId, ref: 'PlacementDrive', required: true },
  status: { type: String, enum: ['APPLIED', 'SHORTLISTED', 'APTITUDE_CLEARED', 'TECH_CLEARED', 'HR_CLEARED', 'SELECTED', 'REJECTED'], default: 'APPLIED' },
  resumeUrl: { type: String },
  appliedAt: { type: Date, default: Date.now }
}, { timestamps: true });

export const JobApplication = mongoose.model<IJobApplication>('JobApplication', JobApplicationSchema);
