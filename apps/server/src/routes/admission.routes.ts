import { Router } from 'express';
import { getApplications, getApplicationById, updateApplicationStatus } from '../controllers/admission.controller';

const router = Router();
router.get('/', getApplications);
router.get('/:id', getApplicationById);
router.put('/:id/status', updateApplicationStatus);
export default router;
