import { Router } from 'express';
import { chatHandler } from './chatbot.controller';

const router = Router();

// POST /api/v1/ai/chat
router.post('/chat', chatHandler);

export default router;
