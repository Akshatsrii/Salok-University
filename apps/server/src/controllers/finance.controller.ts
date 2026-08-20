import { Request, Response } from 'express';
import FeeStructure from '../models/FeeStructure';
import Payment from '../models/Payment';

export const getFeeStructures = async (req: Request, res: Response) => {
  try {
    const feeStructures = await FeeStructure.find().populate('courseId');
    res.status(200).json(feeStructures);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const createFeeStructure = async (req: Request, res: Response) => {
  try {
    const feeStructure = await FeeStructure.create(req.body);
    res.status(201).json({ message: 'Fee structure created', data: feeStructure });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getStudentPayments = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const payments = await Payment.find({ studentId }).populate('feeStructureId');
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const recordPayment = async (req: Request, res: Response) => {
  try {
    const payment = await Payment.create(req.body);
    res.status(201).json({ message: 'Payment recorded', data: payment });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
