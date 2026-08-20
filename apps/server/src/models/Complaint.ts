import mongoose, { Schema, Document } from 'mongoose';

export interface IComplaint extends Document {
  userId: mongoose.Types.ObjectId; // User raising the complaint
  category: 'Hostel' | 'Academic' | 'Maintenance' | 'Disciplinary' | 'Other';
  subject: string;
  description: string;
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  assignedTo?: mongoose.Types.ObjectId; // Staff member assigned to resolve
  resolutionNotes?: string;
}

const ComplaintSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    category: { 
      type: String, 
      required: true,
      enum: ['Hostel', 'Academic', 'Maintenance', 'Disciplinary', 'Other']
    },
    subject: { type: String, required: true },
    description: { type: String, required: true },
    status: { 
      type: String, 
      enum: ['Open', 'In Progress', 'Resolved', 'Closed'],
      default: 'Open'
    },
    assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
    resolutionNotes: { type: String }
  },
  { timestamps: true }
);

export default mongoose.models.Complaint || mongoose.model<IComplaint>('Complaint', ComplaintSchema);
