import mongoose, { Schema, Document } from 'mongoose';

export interface ISubject extends Document {
  semesterId: mongoose.Types.ObjectId;
  name: string;
  code: string;
  credits: number;
  type: 'theory' | 'lab';
  teacherId?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const SubjectSchema: Schema = new Schema(
  {
    semesterId: { type: Schema.Types.ObjectId, ref: 'Semester', required: true },
    name: { type: String, required: true },
    code: { type: String, required: true },
    credits: { type: Number, required: true },
    type: { type: String, enum: ['theory', 'lab'], required: true },
    teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
  },
  { timestamps: true }
);

SubjectSchema.index({ semesterId: 1, code: 1 }, { unique: true });

export const Subject = mongoose.model<ISubject>('Subject', SubjectSchema);
