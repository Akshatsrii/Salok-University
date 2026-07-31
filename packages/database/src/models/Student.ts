import mongoose, { Schema, Document } from 'mongoose';

export interface IStudentProfile extends Document {
  userId: mongoose.Types.ObjectId; // References User
  enrollmentNumber: string;
  courseId: mongoose.Types.ObjectId; // References Course
  currentSemester: number;
  cgpa: number;
  attendancePercentage: number;
}

const StudentProfileSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    enrollmentNumber: { type: String, required: true, unique: true },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    currentSemester: { type: Number, required: true, default: 1 },
    cgpa: { type: Number, default: 0.0 },
    attendancePercentage: { type: Number, default: 0.0 },
  },
  { timestamps: true }
);

export const StudentProfile = mongoose.model<IStudentProfile>('StudentProfile', StudentProfileSchema);
