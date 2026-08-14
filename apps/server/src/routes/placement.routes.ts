import { Router } from 'express';
import { createCompany, getCompanies, createDrive, getDrives, applyForDrive, updateApplicationStatus } from '../controllers/placement.controller';

const router = Router();

router.post('/companies', createCompany);
router.get('/companies', getCompanies);

router.post('/drives', createDrive);
router.get('/drives', getDrives);

router.post('/applications', applyForDrive);
router.patch('/applications/:id/status', updateApplicationStatus);

export default router;
