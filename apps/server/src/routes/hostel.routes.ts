import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import {
  getRooms,
  createRoom,
  allocateRoom,
  getComplaints,
  createComplaint,
  updateComplaintStatus,
  getGatePasses,
  requestGatePass,
  decideGatePass,
  getHostelOverview,
} from '../controllers/hostel.controller';

const router = Router();
router.use(authenticate);

router.get('/overview', getHostelOverview);
router.get('/rooms', getRooms);
router.post('/rooms', createRoom);
router.post('/rooms/:roomId/allocate', allocateRoom);
router.get('/complaints', getComplaints);
router.post('/complaints', createComplaint);
router.patch('/complaints/:id/status', updateComplaintStatus);
router.get('/gate-passes', getGatePasses);
router.post('/gate-passes', requestGatePass);
router.patch('/gate-passes/:id', decideGatePass);

export default router;
