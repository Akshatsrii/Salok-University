import mongoose, { Schema, Document } from 'mongoose';

export enum UserRole {
  SUPERADMIN = 'superadmin',
  UNIVERSITYADMIN = 'universityadmin',
  REGISTRAR = 'registrar',
  ADMISSIONOFFICER = 'admissionofficer',
  FINANCE = 'finance',
  TEACHER = 'teacher',
  STUDENT = 'student',
  PARENT = 'parent',
  LIBRARIAN = 'librarian',
  HOSTELWARDEN = 'hostelwarden',
  PLACEMENTOFFICER = 'placementofficer',
  EXAMCONTROLLER = 'examcontroller',
  HOD = 'hod',
  COORDINATOR = 'coordinator',
  SECURITY = 'security',
  VISITOR = 'visitor'
}

export interface IUser extends Document {
  tenantId: mongoose.Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  passwordHash: string;
  role: UserRole;
  avatarUrl?: string;
  isActive: boolean;
  lastLogin?: Date;
  mfaEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    tenantId: { type: Schema.Types.ObjectId, ref: 'University', required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: Object.values(UserRole), required: true },
    avatarUrl: { type: String },
    isActive: { type: Boolean, default: true },
    lastLogin: { type: Date },
    mfaEnabled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Index for multi-tenancy querying performance
UserSchema.index({ tenantId: 1, email: 1 }, { unique: true });

export const User = mongoose.model<IUser>('User', UserSchema);
