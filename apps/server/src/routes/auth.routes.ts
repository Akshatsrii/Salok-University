import { Router } from 'express';
import { register, login, mfaVerify, refresh, logout } from '../controllers/auth.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { authLimiter } from '../middlewares/rateLimiter.middleware';
import { validate } from '../middlewares/validate.middleware';
import { registerSchema, loginSchema, mfaVerifySchema } from '../validators/auth.validator';

const router = Router();

router.post('/register', authLimiter, validate(registerSchema), register);
router.post('/login', authLimiter, validate(loginSchema), login);
router.post('/mfa/verify', validate(mfaVerifySchema), mfaVerify);
router.post('/refresh', refresh);
router.post('/logout', authenticate, logout);

export default router;

