import { Router } from 'express';
import { getFeeStructures, createFeeStructure, getStudentPayments, recordPayment } from '../controllers/finance.controller';

const router = Router();

router.get('/fees', getFeeStructures);
router.post('/fees', createFeeStructure);
router.get('/payments/student/:studentId', getStudentPayments);
router.post('/payments', recordPayment);

export default router;
