import { Router } from 'express';
import { getFeeStructures, createFeeStructure, getStudentPayments, recordPayment } from '../controllers/finance.controller';
import { paymentLimiter } from '../middlewares/rateLimiter.middleware';

const router = Router();

router.get('/fees', getFeeStructures);
router.post('/fees', createFeeStructure);
router.get('/payments/student/:studentId', getStudentPayments);
router.post('/payments', paymentLimiter, recordPayment);

export default router;
