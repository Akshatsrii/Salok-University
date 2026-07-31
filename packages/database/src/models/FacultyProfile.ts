import mongoose, { Schema, Document } from 'mongoose';

export interface IFacultyProfile extends Document {
  userId: mongoose.Types.ObjectId; // References User
  departmentId: mongoose.Types.ObjectId; // References Department
  designation: string;
  specialization: string;
  assignedSubjects: mongoose.Types.ObjectId[]; // References Course or Subject
}

const FacultyProfileSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    departmentId: { type: Schema.Types.ObjectId, ref: 'Department', required: true },
    designation: { type: String, required: true },
    specialization: { type: String, required: true },
    assignedSubjects: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
  },
  { timestamps: true }
);

export const FacultyProfile = mongoose.model<IFacultyProfile>('FacultyProfile', FacultyProfileSchema);
