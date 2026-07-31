import mongoose, { Schema, Document } from 'mongoose';

export interface IDepartment extends Document {
  universityId: mongoose.Types.ObjectId;
  name: string;
  code: string;
  headOfDepartment?: mongoose.Types.ObjectId;
}

const DepartmentSchema: Schema = new Schema(
  {
    universityId: { type: Schema.Types.ObjectId, ref: 'University', required: true },
    name: { type: String, required: true },
    code: { type: String, required: true },
    headOfDepartment: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

export const Department = mongoose.model<IDepartment>('Department', DepartmentSchema);

export interface ICourse extends Document {
  departmentId: mongoose.Types.ObjectId;
  name: string;
  code: string;
  durationYears: number;
  totalCredits: number;
}

const CourseSchema: Schema = new Schema(
  {
    departmentId: { type: Schema.Types.ObjectId, ref: 'Department', required: true },
    name: { type: String, required: true },
    code: { type: String, required: true },
    durationYears: { type: Number, required: true },
    totalCredits: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Course = mongoose.model<ICourse>('Course', CourseSchema);

export interface ISemester extends Document {
  courseId: mongoose.Types.ObjectId;
  semesterNumber: number;
  startDate: Date;
  endDate: Date;
}

const SemesterSchema: Schema = new Schema(
  {
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    semesterNumber: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  { timestamps: true }
);

export const Semester = mongoose.model<ISemester>('Semester', SemesterSchema);
