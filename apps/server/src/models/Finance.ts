import mongoose, { Schema, Document } from 'mongoose';

export interface IFeeStructure extends Document {
  programId: mongoose.Types.ObjectId;
  semester: number;
  tuitionFee: number;
  developmentFee: number;
  examFee: number;
  total: number;
  dueDate: Date;
}
const FeeStructureSchema = new Schema({
  programId: { type: Schema.Types.ObjectId, ref: 'Branch', required: true },
  semester: { type: Number, required: true },
  tuitionFee: { type: Number, required: true },
  developmentFee: { type: Number, required: true },
  examFee: { type: Number, required: true },
  total: { type: Number, required: true },
  dueDate: { type: Date, required: true }
}, { timestamps: true });
export const FeeStructure = mongoose.model<IFeeStructure>('FeeStructure', FeeStructureSchema);

export interface IPayment extends Document {
  studentId: mongoose.Types.ObjectId;
  feeStructureId: mongoose.Types.ObjectId;
  amount: number;
  status: 'PENDING' | 'SUCCESS' | 'FAILED';
  transactionId?: string;
  paymentMethod: 'ONLINE' | 'CASH' | 'DD';
  paymentDate?: Date;
}
const PaymentSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  feeStructureId: { type: Schema.Types.ObjectId, ref: 'FeeStructure', required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['PENDING', 'SUCCESS', 'FAILED'], default: 'PENDING' },
  transactionId: { type: String },
  paymentMethod: { type: String, enum: ['ONLINE', 'CASH', 'DD'], default: 'ONLINE' },
  paymentDate: { type: Date }
}, { timestamps: true });
export const Payment = mongoose.model<IPayment>('Payment', PaymentSchema);
