import { Router } from 'express';
import { getUniversityDetails, updateUniversityDetails } from '../controllers/university.controller';

const router = Router();

router.get('/', getUniversityDetails);
router.put('/', updateUniversityDetails);

export default router;
