import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  isbn: string;
  publisher: string;
  edition?: string;
  category: string;
  totalCopies: number;
  availableCopies: number;
  location: string; // e.g., "Aisle 4, Shelf B"
  coverImage?: string;
}

const BookSchema: Schema = new Schema(
  {
    title: { type: String, required: true, index: true },
    author: { type: String, required: true, index: true },
    isbn: { type: String, required: true, unique: true },
    publisher: { type: String, required: true },
    edition: { type: String },
    category: { type: String, required: true, index: true },
    totalCopies: { type: Number, required: true, min: 1 },
    availableCopies: { type: Number, required: true, min: 0 },
    location: { type: String, required: true },
    coverImage: { type: String }
  },
  { timestamps: true }
);

export default mongoose.models.Book || mongoose.model<IBook>('Book', BookSchema);
