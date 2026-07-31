import mongoose, { Schema, Document } from 'mongoose';

export interface IHostelRoom extends Document {
  buildingId: mongoose.Types.ObjectId; // References Building (from Infrastructure)
  roomNumber: string;
  capacity: number;
  occupants: mongoose.Types.ObjectId[]; // References Student Profile or User
  wardenId?: mongoose.Types.ObjectId; // References User (Hostel Warden)
}

const HostelRoomSchema: Schema = new Schema(
  {
    buildingId: { type: Schema.Types.ObjectId, ref: 'Building', required: true },
    roomNumber: { type: String, required: true },
    capacity: { type: Number, required: true, default: 2 },
    occupants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    wardenId: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

export const HostelRoom = mongoose.model<IHostelRoom>('HostelRoom', HostelRoomSchema);
