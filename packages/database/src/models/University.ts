import mongoose, { Schema, Document } from 'mongoose';

export interface IUniversity extends Document {
  name: string;
  subdomain: string; // for domain mapping (e.g., xyz.salok.com)
  logoUrl?: string;
  address?: string;
  contactEmail: string;
  establishedYear?: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UniversitySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    subdomain: { type: String, required: true, unique: true },
    logoUrl: { type: String },
    address: { type: String },
    contactEmail: { type: String, required: true },
    establishedYear: { type: Number },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const University = mongoose.model<IUniversity>('University', UniversitySchema);
