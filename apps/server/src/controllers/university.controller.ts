import { Request, Response } from 'express';
import University from '../models/University';

export const getUniversityDetails = async (req: Request, res: Response) => {
  try {
    const university = await University.findOne();
    if (!university) {
      return res.status(404).json({ message: 'University details not found' });
    }
    res.status(200).json(university);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updateUniversityDetails = async (req: Request, res: Response) => {
  try {
    const updated = await University.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.status(200).json({ message: 'University details updated successfully', data: updated });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
