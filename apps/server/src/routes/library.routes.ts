import { Router } from 'express';
import { getBooks } from '../controllers/library.controller';
const router = Router();
router.get('/', getBooks);
export default router;
