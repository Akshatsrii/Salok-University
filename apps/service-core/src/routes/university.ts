import express, { Request, Response } from 'express';
import { University } from 'database';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const university = new University(req.body);
    await university.save();
    res.status(201).json(university);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create university' });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const universities = await University.find();
    res.json(universities);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch universities' });
  }
});

export default router;
