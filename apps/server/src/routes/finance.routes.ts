import { Router } from 'express';
import { getFeeStructures, createFeeStructure, getStudentPayments, recordPayment } from '../controllers/finance.controller';
import { paymentLimiter } from '../middlewares/rateLimiter.middleware';
import { validate } from '../middlewares/validate.middleware';
import { createFeeStructureSchema, recordPaymentSchema } from '../validators/finance.validator';

const router = Router();

router.get('/fees', getFeeStructures);
router.post('/fees', validate(createFeeStructureSchema), createFeeStructure);
router.get('/payments/student/:studentId', getStudentPayments);
router.post('/payments', paymentLimiter, validate(recordPaymentSchema), recordPayment);

export default router;
