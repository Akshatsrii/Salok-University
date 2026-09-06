import { Request, Response } from 'express';

export const getDashboardStats = async (req: Request, res: Response) => {
  res.json({ message: 'Dashboard stats placeholder' });
};
