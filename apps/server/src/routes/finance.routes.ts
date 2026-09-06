import { Router } from 'express';
import { getFinances } from '../controllers/finance.controller';
const router = Router();
router.get('/', getFinances);
export default router;
