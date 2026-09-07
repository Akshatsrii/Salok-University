import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  isbn: string;
  totalCopies: number;
  availableCopies: number;
}
const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  totalCopies: { type: Number, required: true },
  availableCopies: { type: Number, required: true }
}, { timestamps: true });
export const Book = mongoose.model<IBook>('Book', BookSchema);

export interface IIssueBook extends Document {
  bookId: mongoose.Types.ObjectId;
  studentId: mongoose.Types.ObjectId;
  issueDate: Date;
  dueDate: Date;
  returnDate?: Date;
  status: 'ISSUED' | 'RETURNED' | 'OVERDUE';
}
const IssueBookSchema = new Schema({
  bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  issueDate: { type: Date, default: Date.now },
  dueDate: { type: Date, required: true },
  returnDate: { type: Date },
  status: { type: String, enum: ['ISSUED', 'RETURNED', 'OVERDUE'], default: 'ISSUED' }
}, { timestamps: true });
export const IssueBook = mongoose.model<IIssueBook>('IssueBook', IssueBookSchema);
