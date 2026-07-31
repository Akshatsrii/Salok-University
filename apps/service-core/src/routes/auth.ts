import express, { Request, Response } from 'express';
import { User, University } from 'database';

const router = express.Router();

router.post('/login', async (req: Request, res: Response) => {
  // Mock login endpoint
  res.json({ message: 'Login successful', token: 'mock-jwt-token' });
});

router.post('/register', async (req: Request, res: Response) => {
  // Mock registration
  res.json({ message: 'Registration successful' });
});

export default router;
