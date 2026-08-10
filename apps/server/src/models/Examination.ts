import mongoose, { Schema, Document } from 'mongoose';

export interface IExamination extends Document {
  tenantId: mongoose.Types.ObjectId;
  courseId: mongoose.Types.ObjectId;
  semesterId: mongoose.Types.ObjectId;
  examName: string; // e.g., "Mid-Term Sem 6", "Finals Sem 6"
  type: 'Mid-Term' | 'Finals' | 'Practical';
  startDate: Date;
  endDate: Date;
  schedule: {
    subjectId: mongoose.Types.ObjectId;
    date: Date;
    startTime: string;
    endTime: string;
    room: string;
  }[];
}

const ExaminationSchema: Schema = new Schema(
  {
    tenantId: { type: Schema.Types.ObjectId, ref: 'University', required: true },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    semesterId: { type: Schema.Types.ObjectId, ref: 'Semester', required: true },
    examName: { type: String, required: true },
    type: { type: String, enum: ['Mid-Term', 'Finals', 'Practical'], required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    schedule: [
      {
        subjectId: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
        date: { type: Date, required: true },
        startTime: { type: String, required: true },
        endTime: { type: String, required: true },
        room: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

export const Examination = mongoose.model<IExamination>('Examination', ExaminationSchema);
