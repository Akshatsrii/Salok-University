import mongoose, { Schema, Document } from 'mongoose';

export interface IDepartment extends Document {
  tenantId: mongoose.Types.ObjectId;
  name: string;
  code: string;
  hodId?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const DepartmentSchema: Schema = new Schema(
  {
    tenantId: { type: Schema.Types.ObjectId, ref: 'University', required: true },
    name: { type: String, required: true },
    code: { type: String, required: true },
    hodId: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

DepartmentSchema.index({ tenantId: 1, code: 1 }, { unique: true });

export const Department = mongoose.model<IDepartment>('Department', DepartmentSchema);
