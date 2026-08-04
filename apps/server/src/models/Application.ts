import mongoose, { Schema, Document } from 'mongoose';

export interface IApplication extends Document {
  tenantId: mongoose.Types.ObjectId;
  userId?: mongoose.Types.ObjectId; // If they register later or beforehand
  personalInfo: {
    fullName: string;
    dob: Date;
    gender: 'Male' | 'Female' | 'Other';
    phone: string;
    email: string;
    aadhaarNumber: string;
  };
  courseApplied: string;
  documents: {
    photoUrl?: string;
    signatureUrl?: string;
    aadhaarUrl?: string;
    marksheetsUrl?: string[];
    tcUrl?: string;
    migrationUrl?: string;
  };
  status: 'Draft' | 'Submitted' | 'Under Review' | 'Verified' | 'Rejected' | 'Merit Listed' | 'Seat Allocated';
  aiVerificationScore: number;
  aiVerificationNotes: string;
  applicationDate: Date;
  updatedAt: Date;
}

const ApplicationSchema: Schema = new Schema(
  {
    tenantId: { type: Schema.Types.ObjectId, ref: 'University', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    personalInfo: {
      fullName: { type: String, required: true },
      dob: { type: Date, required: true },
      gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
      aadhaarNumber: { type: String, required: true },
    },
    courseApplied: { type: String, required: true },
    documents: {
      photoUrl: { type: String },
      signatureUrl: { type: String },
      aadhaarUrl: { type: String },
      marksheetsUrl: [{ type: String }],
      tcUrl: { type: String },
      migrationUrl: { type: String },
    },
    status: {
      type: String,
      enum: ['Draft', 'Submitted', 'Under Review', 'Verified', 'Rejected', 'Merit Listed', 'Seat Allocated'],
      default: 'Submitted',
    },
    aiVerificationScore: { type: Number, default: 0 },
    aiVerificationNotes: { type: String, default: '' },
    applicationDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Application = mongoose.model<IApplication>('Application', ApplicationSchema);
