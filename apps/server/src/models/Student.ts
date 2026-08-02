import mongoose, { Schema, Document } from 'mongoose';

export interface IStudent extends Document {
  userId: mongoose.Types.ObjectId;
  rollNumber: string;
  admissionId: string;
  departmentId: mongoose.Types.ObjectId;
  courseId: mongoose.Types.ObjectId;
  branchId: mongoose.Types.ObjectId;
  semester: number;
  batchYear: number;
  parents: {
    fatherName?: string;
    motherName?: string;
    guardianContact?: string;
  };
  medical: {
    bloodGroup?: string;
    conditions?: string;
    allergies?: string;
  };
  emergencyContact: {
    name?: string;
    relation?: string;
    phone?: string;
  };
  address: {
    permanent?: string;
    current?: string;
  };
  documents: {
    aadhaarUrl?: string;
    photoUrl?: string;
    signatureUrl?: string;
    marksheetUrls?: string[];
    transferCertUrl?: string;
    migrationCertUrl?: string;
  };
  academic: {
    cgpa?: number;
    backlogs?: mongoose.Types.ObjectId[];
    achievements?: string[];
    projects?: string[];
    internships?: string[];
    certificates?: string[];
  };
  codingProfiles: {
    github?: string;
    linkedin?: string;
    leetcode?: string;
    codeforces?: string;
    codechef?: string;
    hackerrank?: string;
  };
  hostelId?: mongoose.Types.ObjectId;
  busRouteId?: mongoose.Types.ObjectId;
  scholarshipId?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const StudentSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    rollNumber: { type: String, required: true, unique: true },
    admissionId: { type: String, required: true, unique: true },
    departmentId: { type: Schema.Types.ObjectId, ref: 'Department', required: true },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    branchId: { type: Schema.Types.ObjectId, ref: 'Branch', required: true },
    semester: { type: Number, required: true },
    batchYear: { type: Number, required: true },
    parents: {
      fatherName: { type: String },
      motherName: { type: String },
      guardianContact: { type: String },
    },
    medical: {
      bloodGroup: { type: String },
      conditions: { type: String },
      allergies: { type: String },
    },
    emergencyContact: {
      name: { type: String },
      relation: { type: String },
      phone: { type: String },
    },
    address: {
      permanent: { type: String },
      current: { type: String },
    },
    documents: {
      aadhaarUrl: { type: String },
      photoUrl: { type: String },
      signatureUrl: { type: String },
      marksheetUrls: [{ type: String }],
      transferCertUrl: { type: String },
      migrationCertUrl: { type: String },
    },
    academic: {
      cgpa: { type: Number },
      backlogs: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
      achievements: [{ type: String }],
      projects: [{ type: String }],
      internships: [{ type: String }],
      certificates: [{ type: String }],
    },
    codingProfiles: {
      github: { type: String },
      linkedin: { type: String },
      leetcode: { type: String },
      codeforces: { type: String },
      codechef: { type: String },
      hackerrank: { type: String },
    },
    hostelId: { type: Schema.Types.ObjectId, ref: 'Hostel' },
    busRouteId: { type: Schema.Types.ObjectId, ref: 'BusRoute' },
    scholarshipId: { type: Schema.Types.ObjectId, ref: 'Scholarship' },
  },
  { timestamps: true }
);

export const Student = mongoose.model<IStudent>('Student', StudentSchema);
