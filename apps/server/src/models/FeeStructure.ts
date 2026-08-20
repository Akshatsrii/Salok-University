import mongoose, { Schema, Document } from 'mongoose';

export interface IFeeStructure extends Document {
  courseId: mongoose.Types.ObjectId;
  semester: number;
  tuitionFee: number;
  libraryFee: number;
  examFee: number;
  hostelFee?: number;
  transportFee?: number;
  otherFees: number;
  totalAmount: number;
  dueDate: Date;
  academicYear: string;
}

const FeeStructureSchema: Schema = new Schema(
  {
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    semester: { type: Number, required: true },
    tuitionFee: { type: Number, required: true },
    libraryFee: { type: Number, required: true, default: 0 },
    examFee: { type: Number, required: true, default: 0 },
    hostelFee: { type: Number, default: 0 },
    transportFee: { type: Number, default: 0 },
    otherFees: { type: Number, default: 0 },
    totalAmount: { type: Number, required: true },
    dueDate: { type: Date, required: true },
    academicYear: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.models.FeeStructure || mongoose.model<IFeeStructure>('FeeStructure', FeeStructureSchema);
