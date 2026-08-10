import { Router } from 'express';
import { 
  processResult, 
  getStudentResult, 
  applyRevaluation 
} from '../controllers/result.controller';

const router = Router();

router.post('/', processResult);
router.get('/exam/:examId/student/:studentId', getStudentResult);
router.post('/revaluation/:resultId', applyRevaluation);

export default router;
