import mongoose, { Schema, Document } from 'mongoose';

export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  UNIVERSITY_ADMIN = 'UNIVERSITY_ADMIN',
  REGISTRAR = 'REGISTRAR',
  ADMISSION_OFFICER = 'ADMISSION_OFFICER',
  FINANCE = 'FINANCE',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
  PARENT = 'PARENT',
  LIBRARIAN = 'LIBRARIAN',
  HOSTEL_WARDEN = 'HOSTEL_WARDEN',
  PLACEMENT_OFFICER = 'PLACEMENT_OFFICER',
  EXAM_CONTROLLER = 'EXAM_CONTROLLER',
  HOD = 'HOD',
  DEPARTMENT_COORDINATOR = 'DEPARTMENT_COORDINATOR',
  SECURITY_GUARD = 'SECURITY_GUARD',
  VISITOR = 'VISITOR',
}

export interface IUser extends Document {
  name: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  universityId?: mongoose.Types.ObjectId;
  profilePicture?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: {
      type: String,
      enum: Object.values(UserRole),
      required: true,
    },
    universityId: { type: Schema.Types.ObjectId, ref: 'University' },
    profilePicture: { type: String },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>('User', UserSchema);
