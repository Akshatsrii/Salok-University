import mongoose, { Schema, Document } from 'mongoose';

export interface IPayment extends Document {
  studentId: mongoose.Types.ObjectId;
  feeStructureId: mongoose.Types.ObjectId;
  amount: number;
  paymentMethod: 'credit_card' | 'debit_card' | 'net_banking' | 'upi' | 'cash';
  transactionId?: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  paymentDate?: Date;
  receiptNumber?: string;
}

const PaymentSchema: Schema = new Schema(
  {
    studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    feeStructureId: { type: Schema.Types.ObjectId, ref: 'FeeStructure', required: true },
    amount: { type: Number, required: true },
    paymentMethod: { 
      type: String, 
      enum: ['credit_card', 'debit_card', 'net_banking', 'upi', 'cash'],
      required: true
    },
    transactionId: { type: String },
    status: { 
      type: String, 
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending'
    },
    paymentDate: { type: Date },
    receiptNumber: { type: String, unique: true, sparse: true }
  },
  { timestamps: true }
);

export default mongoose.models.Payment || mongoose.model<IPayment>('Payment', PaymentSchema);
