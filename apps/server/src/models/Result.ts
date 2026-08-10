import mongoose, { Schema, Document } from 'mongoose';

export interface IResult extends Document {
  tenantId: mongoose.Types.ObjectId;
  examinationId: mongoose.Types.ObjectId;
  studentId: mongoose.Types.ObjectId;
  marks: {
    subjectId: mongoose.Types.ObjectId;
    scoredMarks: number;
    maxMarks: number;
    isPass: boolean;
    grade: string;
  }[];
  totalScored: number;
  totalMax: number;
  percentage: number;
  sgpa: number;
  cgpa: number;
  hasBacklog: boolean;
  isRevaluationApplied: boolean;
  revaluationStatus?: 'Pending' | 'Processed';
}

const ResultSchema: Schema = new Schema(
  {
    tenantId: { type: Schema.Types.ObjectId, ref: 'University', required: true },
    examinationId: { type: Schema.Types.ObjectId, ref: 'Examination', required: true },
    studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    marks: [
      {
        subjectId: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
        scoredMarks: { type: Number, required: true },
        maxMarks: { type: Number, required: true },
        isPass: { type: Boolean, required: true },
        grade: { type: String, required: true },
      },
    ],
    totalScored: { type: Number, required: true },
    totalMax: { type: Number, required: true },
    percentage: { type: Number, required: true },
    sgpa: { type: Number, required: true },
    cgpa: { type: Number, required: true },
    hasBacklog: { type: Boolean, required: true, default: false },
    isRevaluationApplied: { type: Boolean, default: false },
    revaluationStatus: { type: String, enum: ['Pending', 'Processed'] },
  },
  { timestamps: true }
);

// Prevent duplicate results for the same exam and student
ResultSchema.index({ examinationId: 1, studentId: 1 }, { unique: true });

export const Result = mongoose.model<IResult>('Result', ResultSchema);
