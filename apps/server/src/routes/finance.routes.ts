import { Router } from 'express';
import { getFeeStructures, createFeeStructure, getPayments, initiatePayment, verifyPayment } from '../controllers/finance.controller';

const router = Router();
router.get('/structures', getFeeStructures);
router.post('/structures', createFeeStructure);
router.get('/payments', getPayments);
router.post('/payments', initiatePayment);
router.patch('/payments/:paymentId/verify', verifyPayment);
export default router;
