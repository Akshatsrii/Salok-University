import { Router } from 'express';
import { getAttendance, markAttendance } from '../controllers/attendance.controller';

const router = Router();
router.get('/', getAttendance);
router.post('/', markAttendance);
export default router;
