import { Router } from 'express';
import { getTimetable, generateTimetable } from '../controllers/timetable.controller';

const router = Router();
router.get('/', getTimetable);
router.post('/generate', generateTimetable);
export default router;
