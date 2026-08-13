import mongoose, { Schema, Document } from 'mongoose';

export interface IBus extends Document {
  registrationNumber: string;
  driverName: string;
  driverContact: string;
  capacity: number;
  routeId: string;
  currentLocation?: {
    lat: number;
    lng: number;
  };
  status: 'ACTIVE' | 'MAINTENANCE' | 'OFF_DUTY';
}

const BusSchema: Schema = new Schema({
  registrationNumber: { type: String, required: true, unique: true },
  driverName: { type: String, required: true },
  driverContact: { type: String, required: true },
  capacity: { type: Number, required: true },
  routeId: { type: String, required: true },
  currentLocation: {
    lat: { type: Number },
    lng: { type: Number }
  },
  status: { type: String, enum: ['ACTIVE', 'MAINTENANCE', 'OFF_DUTY'], default: 'OFF_DUTY' }
}, { timestamps: true });

export const Bus = mongoose.model<IBus>('Bus', BusSchema);

export interface IBusStop extends Document {
  routeId: string;
  stopName: string;
  location: {
    lat: number;
    lng: number;
  };
  order: number;
  expectedTimeArrival: string; // e.g., "07:30 AM"
}

const BusStopSchema: Schema = new Schema({
  routeId: { type: String, required: true },
  stopName: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  order: { type: Number, required: true },
  expectedTimeArrival: { type: String, required: true }
}, { timestamps: true });

export const BusStop = mongoose.model<IBusStop>('BusStop', BusStopSchema);

export interface IStudentBoarding extends Document {
  studentId: mongoose.Types.ObjectId;
  busId: mongoose.Types.ObjectId;
  stopId: mongoose.Types.ObjectId;
  scanTime: Date;
  type: 'BOARDING' | 'ALIGHTING';
}

const StudentBoardingSchema: Schema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  busId: { type: Schema.Types.ObjectId, ref: 'Bus', required: true },
  stopId: { type: Schema.Types.ObjectId, ref: 'BusStop', required: true },
  scanTime: { type: Date, default: Date.now },
  type: { type: String, enum: ['BOARDING', 'ALIGHTING'], required: true }
}, { timestamps: true });

export const StudentBoarding = mongoose.model<IStudentBoarding>('StudentBoarding', StudentBoardingSchema);
