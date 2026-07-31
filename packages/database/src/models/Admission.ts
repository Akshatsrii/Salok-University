import mongoose, { Schema, Document } from 'mongoose';

export enum AdmissionStatus {
  PENDING = 'PENDING',
  VERIFIED = 'VERIFIED',
  REJECTED = 'REJECTED',
  SEAT_ALLOCATED = 'SEAT_ALLOCATED',
}

export interface IAdmissionApplication extends Document {
  universityId: mongoose.Types.ObjectId;
  appliedCourseId: mongoose.Types.ObjectId;
  studentName: string;
  email: string;
  phone: string;
  aadhaarNumber: string;
  documents: {
    photoUrl?: string;
    aadhaarUrl?: string;
    marksheetUrl?: string;
  };
  aiVerificationScore: number;
  status: AdmissionStatus;
}

const AdmissionApplicationSchema: Schema = new Schema(
  {
    universityId: { type: Schema.Types.ObjectId, ref: 'University', required: true },
    appliedCourseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    studentName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    aadhaarNumber: { type: String, required: true },
    documents: {
      photoUrl: { type: String },
      aadhaarUrl: { type: String },
      marksheetUrl: { type: String },
    },
    aiVerificationScore: { type: Number, default: 0 },
    status: {
      type: String,
      enum: Object.values(AdmissionStatus),
      default: AdmissionStatus.PENDING,
    },
  },
  { timestamps: true }
);

export const AdmissionApplication = mongoose.model<IAdmissionApplication>(
  'AdmissionApplication',
  AdmissionApplicationSchema
);
