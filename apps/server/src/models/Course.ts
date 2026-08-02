import mongoose, { Schema, Document } from 'mongoose';

export interface ICourse extends Document {
  departmentId: mongoose.Types.ObjectId;
  name: string;
  code: string;
  durationYears: number;
  totalCredits: number;
  createdAt: Date;
  updatedAt: Date;
}

const CourseSchema: Schema = new Schema(
  {
    departmentId: { type: Schema.Types.ObjectId, ref: 'Department', required: true },
    name: { type: String, required: true },
    code: { type: String, required: true },
    durationYears: { type: Number, required: true },
    totalCredits: { type: Number, required: true },
  },
  { timestamps: true }
);

CourseSchema.index({ departmentId: 1, code: 1 }, { unique: true });

export const Course = mongoose.model<ICourse>('Course', CourseSchema);
