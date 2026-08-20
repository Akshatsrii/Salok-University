import { Router } from 'express';
import { getAllNotices, createNotice, getUserNotifications, markNotificationRead } from '../controllers/communication.controller';

const router = Router();

router.get('/notices', getAllNotices);
router.post('/notices', createNotice);
router.get('/notifications/user/:userId', getUserNotifications);
router.put('/notifications/:id/read', markNotificationRead);

export default router;
