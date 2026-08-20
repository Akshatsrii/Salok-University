import mongoose, { Schema, Document } from 'mongoose';

export interface INotice extends Document {
  title: string;
  content: string;
  authorId: mongoose.Types.ObjectId;
  departmentId?: mongoose.Types.ObjectId; // If null, global notice
  targetAudience: 'All' | 'Students' | 'Teachers' | 'Staff';
  attachmentUrl?: string;
  isImportant: boolean;
  publishedAt: Date;
  expiresAt?: Date;
}

const NoticeSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    departmentId: { type: Schema.Types.ObjectId, ref: 'Department' },
    targetAudience: { 
      type: String, 
      enum: ['All', 'Students', 'Teachers', 'Staff'], 
      default: 'All' 
    },
    attachmentUrl: { type: String },
    isImportant: { type: Boolean, default: false },
    publishedAt: { type: Date, default: Date.now },
    expiresAt: { type: Date }
  },
  { timestamps: true }
);

export default mongoose.models.Notice || mongoose.model<INotice>('Notice', NoticeSchema);
