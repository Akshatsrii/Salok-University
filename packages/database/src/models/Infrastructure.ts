import mongoose, { Schema, Document } from 'mongoose';

export interface ICampus extends Document {
  universityId: mongoose.Types.ObjectId;
  name: string;
  location: string;
}

const CampusSchema: Schema = new Schema(
  {
    universityId: { type: Schema.Types.ObjectId, ref: 'University', required: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true }
);

export const Campus = mongoose.model<ICampus>('Campus', CampusSchema);

export interface IBuilding extends Document {
  campusId: mongoose.Types.ObjectId;
  name: string;
  totalFloors: number;
}

const BuildingSchema: Schema = new Schema(
  {
    campusId: { type: Schema.Types.ObjectId, ref: 'Campus', required: true },
    name: { type: String, required: true },
    totalFloors: { type: Number, default: 1 },
  },
  { timestamps: true }
);

export const Building = mongoose.model<IBuilding>('Building', BuildingSchema);

export enum RoomType {
  CLASSROOM = 'CLASSROOM',
  LAB = 'LAB',
  LIBRARY = 'LIBRARY',
  HOSTEL = 'HOSTEL',
  OFFICE = 'OFFICE',
}

export interface IRoom extends Document {
  buildingId: mongoose.Types.ObjectId;
  roomNumber: string;
  type: RoomType;
  capacity: number;
}

const RoomSchema: Schema = new Schema(
  {
    buildingId: { type: Schema.Types.ObjectId, ref: 'Building', required: true },
    roomNumber: { type: String, required: true },
    type: { type: String, enum: Object.values(RoomType), required: true },
    capacity: { type: Number, required: true, default: 30 },
  },
  { timestamps: true }
);

export const Room = mongoose.model<IRoom>('Room', RoomSchema);
