import mongoose, { Schema, Document } from 'mongoose';

export interface ITeacher extends Document {
  userId: mongoose.Types.ObjectId;
  department: string;
  designation: string;
  subjects: mongoose.Types.ObjectId[];
  mentees: mongoose.Types.ObjectId[];
  researchPublications: Array<{
    title: string;
    journal: string;
    year: number;
    link: string;
  }>;
  timetableSlots: Array<{
    day: string;
    time: string;
    subjectId: mongoose.Types.ObjectId;
    room: string;
  }>;
  createdAt: Date;
  updatedAt: Date;
}

const TeacherSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    subjects: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    mentees: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    researchPublications: [
      {
        title: { type: String, required: true },
        journal: { type: String, required: true },
        year: { type: Number, required: true },
        link: { type: String }
      }
    ],
    timetableSlots: [
      {
        day: { type: String, required: true },
        time: { type: String, required: true },
        subjectId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
        room: { type: String, required: true }
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.models.Teacher || mongoose.model<ITeacher>('Teacher', TeacherSchema);
