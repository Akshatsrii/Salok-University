import { z } from 'zod';

export const createFeeStructureSchema = z.object({
  courseId: z.string(),
  semester: z.number().int().min(1),
  tuitionFee: z.number().min(0),
  libraryFee: z.number().min(0),
  examFee: z.number().min(0),
  hostelFee: z.number().min(0).optional(),
  transportFee: z.number().min(0).optional(),
  otherFees: z.number().min(0).optional(),
  totalAmount: z.number().min(0),
  dueDate: z.string().datetime(),
  academicYear: z.string(),
});

export const recordPaymentSchema = z.object({
  studentId: z.string(),
  feeStructureId: z.string(),
  amount: z.number().min(1),
  paymentMethod: z.enum(['credit_card', 'debit_card', 'net_banking', 'upi', 'cash']),
  transactionId: z.string().optional(),
});
