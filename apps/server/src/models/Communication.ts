import mongoose, { Schema, Document } from 'mongoose';

export interface INotice extends Document {
  title: string;
  content: string;
  targetScope: string; // 'ALL', 'STUDENTS', 'FACULTY', 'SPECIFIC_BRANCH'
  targetBranch?: string;
  channels: string[]; // ['SMS', 'EMAIL', 'PUSH', 'WHATSAPP']
  createdBy: mongoose.Types.ObjectId;
  createdAt: Date;
}

const NoticeSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  targetScope: { type: String, required: true, enum: ['ALL', 'STUDENTS', 'FACULTY', 'SPECIFIC_BRANCH'] },
  targetBranch: { type: String },
  channels: [{ type: String, enum: ['SMS', 'EMAIL', 'PUSH', 'WHATSAPP'] }],
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export interface IComplaint extends Document {
  subject: string;
  description: string;
  submittedBy: mongoose.Types.ObjectId;
  category: string; // 'HOSTEL', 'ACADEMIC', 'TRANSPORT', 'OTHER'
  aiCategory?: string; // AI generated category
  priority: string; // 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'
  status: string; // 'PENDING', 'IN_PROGRESS', 'RESOLVED', 'REJECTED'
  resolutionNotes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ComplaintSchema = new Schema({
  subject: { type: String, required: true },
  description: { type: String, required: true },
  submittedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, required: true },
  aiCategory: { type: String },
  priority: { type: String, enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'], default: 'MEDIUM' },
  status: { type: String, enum: ['PENDING', 'IN_PROGRESS', 'RESOLVED', 'REJECTED'], default: 'PENDING' },
  resolutionNotes: { type: String }
}, { timestamps: true });

export interface INotification extends Document {
  recipient: mongoose.Types.ObjectId;
  title: string;
  message: string;
  type: string; // 'NOTICE', 'ALERT', 'REMINDER'
  read: boolean;
  createdAt: Date;
}

const NotificationSchema = new Schema({
  recipient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  type: { type: String, required: true },
  read: { type: Boolean, default: false }
}, { timestamps: true });

export interface IAuditLog extends Document {
  action: string;
  performedBy: mongoose.Types.ObjectId;
  targetResource: string;
  details: string;
  timestamp: Date;
}

const AuditLogSchema = new Schema({
  action: { type: String, required: true },
  performedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  targetResource: { type: String, required: true },
  details: { type: String }
}, { timestamps: true });

export const Notice = mongoose.model<INotice>('Notice', NoticeSchema);
export const Complaint = mongoose.model<IComplaint>('Complaint', ComplaintSchema);
export const Notification = mongoose.model<INotification>('Notification', NotificationSchema);
export const AuditLog = mongoose.model<IAuditLog>('AuditLog', AuditLogSchema);
