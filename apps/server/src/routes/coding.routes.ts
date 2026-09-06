import { Router } from 'express';
import { getProblems } from '../controllers/coding.controller';
const router = Router();
router.get('/problems', getProblems);
export default router;
