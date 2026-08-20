import mongoose, { Schema, Document } from 'mongoose';

export interface IIssueBook extends Document {
  bookId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId; // Could be Student or Teacher
  userModel: 'Student' | 'Teacher';
  issueDate: Date;
  dueDate: Date;
  returnDate?: Date;
  status: 'issued' | 'returned' | 'overdue' | 'lost';
  fineAmount?: number;
  finePaid?: boolean;
}

const IssueBookSchema: Schema = new Schema(
  {
    bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    userId: { type: Schema.Types.ObjectId, required: true, refPath: 'userModel' },
    userModel: { type: String, required: true, enum: ['Student', 'Teacher'] },
    issueDate: { type: Date, default: Date.now },
    dueDate: { type: Date, required: true },
    returnDate: { type: Date },
    status: { 
      type: String, 
      enum: ['issued', 'returned', 'overdue', 'lost'], 
      default: 'issued' 
    },
    fineAmount: { type: Number, default: 0 },
    finePaid: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.models.IssueBook || mongoose.model<IIssueBook>('IssueBook', IssueBookSchema);
