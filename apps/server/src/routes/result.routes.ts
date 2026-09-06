import { Router } from 'express';
import { getResults } from '../controllers/result.controller';
const router = Router();
router.get('/', getResults);
export default router;
