import { Router } from 'express';
import { getTransports } from '../controllers/transport.controller';
const router = Router();
router.get('/', getTransports);
export default router;
