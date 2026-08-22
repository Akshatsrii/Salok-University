import { Router } from 'express';
import { applyForAdmission, getApplications, getApplicationById } from '../controllers/admission.controller';
import { validate } from '../middlewares/validate.middleware';
import { submitApplicationSchema } from '../validators/admission.validator';

const router = Router();

router.post('/apply', validate(submitApplicationSchema), applyForAdmission);
router.get('/applications', getApplications);
router.get('/applications/:id', getApplicationById);

export default router;
