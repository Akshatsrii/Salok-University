import mongoose, { Schema, Document } from 'mongoose';

export interface IStudent extends Document {
  tenantId: mongoose.Types.ObjectId;
  userId?: mongoose.Types.ObjectId;
  studentId: string;
  personalInfo: {
    fullName: string;
    dob: Date;
    gender: 'Male' | 'Female' | 'Other';
    phone: string;
    email: string;
    address: string;
  };
  academicRecord: {
    course: string;
    batch: string;
    semester: number;
    cgpa: number;
  };
  status: 'Active' | 'Inactive' | 'Graduated' | 'Suspended';
  enrollmentDate: Date;
}

const StudentSchema: Schema = new Schema(
  {
    tenantId: { type: Schema.Types.ObjectId, ref: 'University', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    studentId: { type: String, required: true, unique: true },
    personalInfo: {
      fullName: { type: String, required: true },
      dob: { type: Date, required: true },
      gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
      address: { type: String, required: true },
    },
    academicRecord: {
      course: { type: String, required: true },
      batch: { type: String, required: true },
      semester: { type: Number, required: true },
      cgpa: { type: Number, default: 0 },
    },
    status: {
      type: String,
      enum: ['Active', 'Inactive', 'Graduated', 'Suspended'],
      default: 'Active',
    },
    enrollmentDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Student = mongoose.model<IStudent>('Student', StudentSchema);
