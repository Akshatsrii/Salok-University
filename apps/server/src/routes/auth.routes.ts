import { Router } from 'express';
import { login, mfaVerify, refresh, logout } from '../controllers/auth.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/login', login);
router.post('/mfa/verify', mfaVerify);
router.post('/refresh', refresh);
router.post('/logout', authenticate, logout);

export default router;
