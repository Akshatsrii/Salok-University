import { z } from 'zod';

export const markAttendanceSchema = z.object({
  studentId: z.string(),
  courseId: z.string(),
  subjectId: z.string(),
  date: z.string().datetime(),
  status: z.enum(['present', 'absent', 'late', 'excused']),
  remarks: z.string().optional(),
});
