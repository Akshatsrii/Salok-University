import { Router } from 'express';
import { 
  createExamination, 
  getExaminationsByCourse, 
  generateHallTicket 
} from '../controllers/exam.controller';

const router = Router();

router.post('/', createExamination);
router.get('/course/:courseId', getExaminationsByCourse);
router.get('/:examId/student/:studentId/hall-ticket', generateHallTicket);

export default router;
