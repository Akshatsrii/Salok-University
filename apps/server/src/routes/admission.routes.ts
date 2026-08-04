import { Router } from 'express';
import { applyForAdmission, getApplications, getApplicationById } from '../controllers/admission.controller';

const router = Router();

router.post('/apply', applyForAdmission);
router.get('/applications', getApplications);
router.get('/applications/:id', getApplicationById);

export default router;
