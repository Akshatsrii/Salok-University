import { z } from 'zod';

export const submitApplicationSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  courseId: z.string(),
  departmentId: z.string(),
  previousEducation: z.array(z.object({
    institution: z.string(),
    degree: z.string(),
    yearOfCompletion: z.number(),
    percentage: z.number().min(0).max(100),
  })).min(1),
});

export const updateApplicationStatusSchema = z.object({
  status: z.enum(['Pending', 'Reviewed', 'Accepted', 'Rejected', 'Waitlisted']),
  remarks: z.string().optional(),
});
