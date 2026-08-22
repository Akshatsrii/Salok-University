import { Router } from 'express';
import { markAttendance, getStudentAttendance } from '../controllers/attendance.controller';
import { validate } from '../middlewares/validate.middleware';
import { markAttendanceSchema } from '../validators/attendance.validator';

const router = Router();

router.post('/mark', validate(markAttendanceSchema), markAttendance);
router.get('/:studentId', getStudentAttendance);

export default router;
