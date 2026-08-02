import mongoose, { Schema, Document } from 'mongoose';

export interface ITeacher extends Document {
  userId: mongoose.Types.ObjectId;
  employeeId: string;
  departmentId: mongoose.Types.ObjectId;
  designation: string;
  subjects: mongoose.Types.ObjectId[];
  qualifications: string[];
  joiningDate: Date;
  salaryStructureId?: mongoose.Types.ObjectId;
  researchPapers: string[];
  publications: string[];
  mentorshipStudents: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const TeacherSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    employeeId: { type: String, required: true, unique: true },
    departmentId: { type: Schema.Types.ObjectId, ref: 'Department', required: true },
    designation: { type: String, required: true },
    subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
    qualifications: [{ type: String }],
    joiningDate: { type: Date, required: true },
    salaryStructureId: { type: Schema.Types.ObjectId, ref: 'SalaryStructure' },
    researchPapers: [{ type: String }],
    publications: [{ type: String }],
    mentorshipStudents: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
  },
  { timestamps: true }
);

export const Teacher = mongoose.model<ITeacher>('Teacher', TeacherSchema);
