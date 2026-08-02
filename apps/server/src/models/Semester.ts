import mongoose, { Schema, Document } from 'mongoose';

export interface ISemester extends Document {
  courseId: mongoose.Types.ObjectId;
  number: number;
  startDate?: Date;
  endDate?: Date;
  subjects: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const SemesterSchema: Schema = new Schema(
  {
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    number: { type: Number, required: true },
    startDate: { type: Date },
    endDate: { type: Date },
    subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
  },
  { timestamps: true }
);

SemesterSchema.index({ courseId: 1, number: 1 }, { unique: true });

export const Semester = mongoose.model<ISemester>('Semester', SemesterSchema);
