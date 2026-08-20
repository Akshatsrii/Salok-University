import { Request, Response } from 'express';
import Notice from '../models/Notice';
import Notification from '../models/Notification';

export const getAllNotices = async (req: Request, res: Response) => {
  try {
    const notices = await Notice.find().sort({ publishedAt: -1 }).populate('authorId', 'firstName lastName');
    res.status(200).json(notices);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const createNotice = async (req: Request, res: Response) => {
  try {
    const notice = await Notice.create(req.body);
    res.status(201).json({ message: 'Notice created', data: notice });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getUserNotifications = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const notifications = await Notification.find({ recipientId: userId }).sort({ createdAt: -1 });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const markNotificationRead = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findByIdAndUpdate(id, { isRead: true }, { new: true });
    res.status(200).json({ message: 'Marked as read', data: notification });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
