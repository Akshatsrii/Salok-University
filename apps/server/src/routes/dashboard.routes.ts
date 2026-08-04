import { Router } from 'express';
import { getAdminDashboardStats } from '../controllers/dashboard.controller';

const router = Router();

router.get('/admin', getAdminDashboardStats);

export default router;
