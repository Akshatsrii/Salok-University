import { Router } from 'express';
import { getCommunications } from '../controllers/communication.controller';
const router = Router();
router.get('/', getCommunications);
export default router;
