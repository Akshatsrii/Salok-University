import { Router } from 'express';
import { markAttendance, getStudentAttendance } from '../controllers/attendance.controller';

const router = Router();

router.post('/mark', markAttendance);
router.get('/:studentId', getStudentAttendance);

export default router;
