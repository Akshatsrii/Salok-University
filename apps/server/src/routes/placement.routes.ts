import { Router } from 'express';
import { getDrives, createDrive, getCompanies } from '../controllers/placement.controller';

const router = Router();
router.get('/drives', getDrives);
router.post('/drives', createDrive);
router.get('/companies', getCompanies);
export default router;
