import { Router } from 'express';
import { 
  getCourseTimetable, 
  getTeacherTimetable, 
  addTimetableEntry, 
  autoOptimizeCourseTimetable 
} from '../controllers/timetable.controller';

const router = Router();

router.get('/course/:courseId', getCourseTimetable);
router.get('/teacher/:teacherId', getTeacherTimetable);
router.post('/entry', addTimetableEntry);
router.post('/optimize', autoOptimizeCourseTimetable);

export default router;
