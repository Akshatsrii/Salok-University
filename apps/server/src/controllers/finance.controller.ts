import { Request, Response } from 'express';
import { FeeStructure, Payment } from '../models/Finance';

export const getFeeStructures = async (req: Request, res: Response) => {
  try {
    const fees = await FeeStructure.find().populate('programId').lean();
    res.json(fees);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching fee structures' });
  }
};

export const createFeeStructure = async (req: Request, res: Response) => {
  try {
    const fee = await FeeStructure.create(req.body);
    res.status(201).json(fee);
  } catch (err) {
    res.status(500).json({ message: 'Error creating fee structure' });
  }
};

export const getPayments = async (req: Request, res: Response) => {
  try {
    const payments = await Payment.find().populate('studentId', 'name email').populate('feeStructureId').lean();
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching payments' });
  }
};

export const initiatePayment = async (req: Request, res: Response) => {
  try {
    const payment = await Payment.create({ ...req.body, status: 'PENDING' });
    res.status(201).json(payment);
  } catch (err) {
    res.status(500).json({ message: 'Error initiating payment' });
  }
};

export const verifyPayment = async (req: Request, res: Response) => {
  try {
    const { paymentId } = req.params;
    const { transactionId, status } = req.body;
    
    const payment = await Payment.findByIdAndUpdate(
      paymentId,
      { status, transactionId, paymentDate: new Date() },
      { new: true }
    );
    res.json(payment);
  } catch (err) {
    res.status(500).json({ message: 'Error verifying payment' });
  }
};
