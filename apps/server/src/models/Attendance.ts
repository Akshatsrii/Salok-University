import mongoose, { Schema, Document } from 'mongoose';

export interface IAttendance extends Document {
  tenantId: mongoose.Types.ObjectId;
  studentId: mongoose.Types.ObjectId;
  courseId: mongoose.Types.ObjectId;
  date: Date;
  status: 'Present' | 'Absent' | 'Late';
  method: 'QR' | 'FaceID' | 'Manual';
  markedBy?: mongoose.Types.ObjectId; // Teacher ID if manual
  aiFlags: {
    proxySuspected: boolean;
    reason?: string;
  };
}

const AttendanceSchema: Schema = new Schema(
  {
    tenantId: { type: Schema.Types.ObjectId, ref: 'University', required: true },
    studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    date: { type: Date, required: true, default: Date.now },
    status: {
      type: String,
      enum: ['Present', 'Absent', 'Late'],
      required: true,
    },
    method: {
      type: String,
      enum: ['QR', 'FaceID', 'Manual'],
      required: true,
    },
    markedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    aiFlags: {
      proxySuspected: { type: Boolean, default: false },
      reason: { type: String },
    },
  },
  { timestamps: true }
);

// Ensure a student can't be marked multiple times for the same course on the same day
AttendanceSchema.index({ studentId: 1, courseId: 1, date: 1 }, { unique: true });

export const Attendance = mongoose.model<IAttendance>('Attendance', AttendanceSchema);
