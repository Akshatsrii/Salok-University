import mongoose, { Schema, Document } from 'mongoose';

export interface IRoom extends Document {
  roomNumber: string;
  block: string;
  capacity: number;
  occupants: mongoose.Types.ObjectId[];
  type: 'AC' | 'NON_AC';
  status: 'AVAILABLE' | 'FULL' | 'MAINTENANCE';
}

const RoomSchema: Schema = new Schema({
  roomNumber: { type: String, required: true },
  block: { type: String, required: true },
  capacity: { type: Number, required: true, default: 2 },
  occupants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  type: { type: String, enum: ['AC', 'NON_AC'], default: 'NON_AC' },
  status: { type: String, enum: ['AVAILABLE', 'FULL', 'MAINTENANCE'], default: 'AVAILABLE' }
}, { timestamps: true });

export const Room = mongoose.model<IRoom>('Room', RoomSchema);

export interface IHostelComplaint extends Document {
  studentId: mongoose.Types.ObjectId;
  roomId: mongoose.Types.ObjectId;
  category: 'PLUMBING' | 'ELECTRICAL' | 'CARPENTRY' | 'CLEANING' | 'OTHER';
  description: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'RESOLVED';
}

const ComplaintSchema: Schema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  roomId: { type: Schema.Types.ObjectId, ref: 'Room', required: true },
  category: { type: String, enum: ['PLUMBING', 'ELECTRICAL', 'CARPENTRY', 'CLEANING', 'OTHER'], required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['PENDING', 'IN_PROGRESS', 'RESOLVED'], default: 'PENDING' }
}, { timestamps: true });

export const HostelComplaint = mongoose.model<IHostelComplaint>('HostelComplaint', ComplaintSchema);

export interface IGatePass extends Document {
  studentId: mongoose.Types.ObjectId;
  purpose: string;
  outTime: Date;
  expectedInTime: Date;
  actualInTime?: Date;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'EXPIRED';
}

const GatePassSchema: Schema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  purpose: { type: String, required: true },
  outTime: { type: Date, required: true },
  expectedInTime: { type: Date, required: true },
  actualInTime: { type: Date },
  status: { type: String, enum: ['PENDING', 'APPROVED', 'REJECTED', 'EXPIRED'], default: 'PENDING' }
}, { timestamps: true });

export const GatePass = mongoose.model<IGatePass>('GatePass', GatePassSchema);
