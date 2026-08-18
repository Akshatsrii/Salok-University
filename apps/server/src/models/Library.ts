import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  isbn: string;
  category: string;
  totalCopies: number;
  availableCopies: number;
  location: string; // e.g., "Aisle 4, Shelf B"
}

const BookSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  totalCopies: { type: Number, required: true, default: 1 },
  availableCopies: { type: Number, required: true, default: 1 },
  location: { type: String }
}, { timestamps: true });

export const Book = mongoose.model<IBook>('Book', BookSchema);

export interface IIssueRecord extends Document {
  bookId: mongoose.Types.ObjectId;
  studentId: mongoose.Types.ObjectId;
  issueDate: Date;
  dueDate: Date;
  returnDate?: Date;
  status: 'ISSUED' | 'RETURNED' | 'OVERDUE';
  fineAmount: number;
}

const IssueRecordSchema: Schema = new Schema({
  bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  issueDate: { type: Date, default: Date.now },
  dueDate: { type: Date, required: true },
  returnDate: { type: Date },
  status: { type: String, enum: ['ISSUED', 'RETURNED', 'OVERDUE'], default: 'ISSUED' },
  fineAmount: { type: Number, default: 0 }
}, { timestamps: true });

export const IssueRecord = mongoose.model<IIssueRecord>('IssueRecord', IssueRecordSchema);
