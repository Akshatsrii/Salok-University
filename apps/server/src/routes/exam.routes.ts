import { Router } from 'express';
import { getExams } from '../controllers/exam.controller';
const router = Router();
router.get('/', getExams);
export default router;
