import mongoose, { Schema, Document } from 'mongoose';

export interface ITimetable extends Document {
  tenantId: mongoose.Types.ObjectId;
  courseId: mongoose.Types.ObjectId; // E.g., B.Tech CS Sem 6
  subjectId: mongoose.Types.ObjectId;
  teacherId: mongoose.Types.ObjectId;
  roomId: string; // E.g., "Room 304", "Lab 1"
  dayOfWeek: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
  startTime: string; // HH:mm format (e.g., "09:00")
  endTime: string;   // HH:mm format (e.g., "10:30")
}

const TimetableSchema: Schema = new Schema(
  {
    tenantId: { type: Schema.Types.ObjectId, ref: 'University', required: true },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    subjectId: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
    teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true },
    roomId: { type: String, required: true },
    dayOfWeek: {
      type: String,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      required: true,
    },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
  },
  { timestamps: true }
);

// Prevent same room from being double-booked at the same time on the same day
TimetableSchema.index({ tenantId: 1, roomId: 1, dayOfWeek: 1, startTime: 1 }, { unique: true });

// Prevent same teacher from being double-booked at the same time on the same day
TimetableSchema.index({ tenantId: 1, teacherId: 1, dayOfWeek: 1, startTime: 1 }, { unique: true });

export const Timetable = mongoose.model<ITimetable>('Timetable', TimetableSchema);
