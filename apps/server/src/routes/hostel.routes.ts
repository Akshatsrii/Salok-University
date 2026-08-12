import { Router } from 'express';
import { getRooms, allocateRoom, createComplaint, applyGatePass, approveGatePass } from '../controllers/hostel.controller';

const router = Router();

router.get('/rooms', getRooms);
router.post('/rooms/allocate', allocateRoom);

router.post('/complaints', createComplaint);

router.post('/gate-pass', applyGatePass);
router.put('/gate-pass/:id/approve', approveGatePass);

export default router;
