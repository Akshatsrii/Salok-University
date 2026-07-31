import mongoose, { Schema, Document } from 'mongoose';

export interface ILibraryBook extends Document {
  title: string;
  author: string;
  isbn: string;
  totalCopies: number;
  availableCopies: number;
}

const LibraryBookSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
    totalCopies: { type: Number, required: true, default: 1 },
    availableCopies: { type: Number, required: true, default: 1 },
  },
  { timestamps: true }
);

export const LibraryBook = mongoose.model<ILibraryBook>('LibraryBook', LibraryBookSchema);
