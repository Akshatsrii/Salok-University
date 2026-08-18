import { Router } from 'express';
import {
  createNotice,
  getNotices,
  submitComplaint,
  getComplaints,
  updateComplaintStatus,
  getUserNotifications,
  markNotificationRead,
  getAuditLogs
} from '../controllers/communication.controller';

const router = Router();

// Notices
router.post('/notices', createNotice);
router.get('/notices', getNotices);

// Complaints
router.post('/complaints', submitComplaint);
router.get('/complaints', getComplaints);
router.patch('/complaints/:id/status', updateComplaintStatus);

// Notifications
router.get('/notifications/user/:userId', getUserNotifications);
router.patch('/notifications/:id/read', markNotificationRead);

// Audit Logs
router.get('/audit-logs', getAuditLogs);

export default router;
