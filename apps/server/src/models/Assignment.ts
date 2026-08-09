import mongoose, { Schema, Document } from 'mongoose';

export interface ISubmission {
  studentId: mongoose.Types.ObjectId;
  fileUrl: string;
  submittedAt: Date;
  status: 'Pending Grading' | 'Graded';
  marks?: number;
  aiPlagiarismScore?: number;
  aiSuggestedMarks?: number;
  feedback?: string;
}

export interface IAssignment extends Document {
  tenantId: mongoose.Types.ObjectId;
  courseId: mongoose.Types.ObjectId;
  teacherId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  dueDate: Date;
  maxMarks: number;
  submissions: ISubmission[];
}

const SubmissionSchema: Schema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  fileUrl: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['Pending Grading', 'Graded'], default: 'Pending Grading' },
  marks: { type: Number },
  aiPlagiarismScore: { type: Number }, // percentage
  aiSuggestedMarks: { type: Number },
  feedback: { type: String },
});

const AssignmentSchema: Schema = new Schema(
  {
    tenantId: { type: Schema.Types.ObjectId, ref: 'University', required: true },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    maxMarks: { type: Number, required: true },
    submissions: [SubmissionSchema],
  },
  { timestamps: true }
);

export const Assignment = mongoose.model<IAssignment>('Assignment', AssignmentSchema);
