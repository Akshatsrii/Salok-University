import mongoose, { Schema, Document } from 'mongoose';

export interface IBranch extends Document {
  courseId: mongoose.Types.ObjectId;
  name: string;
  code: string;
  createdAt: Date;
  updatedAt: Date;
}

const BranchSchema: Schema = new Schema(
  {
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    name: { type: String, required: true },
    code: { type: String, required: true },
  },
  { timestamps: true }
);

BranchSchema.index({ courseId: 1, code: 1 }, { unique: true });

export const Branch = mongoose.model<IBranch>('Branch', BranchSchema);
