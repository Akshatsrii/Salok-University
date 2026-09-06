import { Router } from 'express';
import { getPlacements } from '../controllers/placement.controller';
const router = Router();
router.get('/', getPlacements);
export default router;
