import { Router } from 'express';
import chatbotRoutes from '../chatbot/chatbot.routes';

const router = Router();

// Mount all chatbot APIs under /chat
router.use('/chat', chatbotRoutes);

// In a full implementation, we'd mount predictor and document routes here as well:
// router.use('/predict', predictorRoutes);
// router.use('/document', documentAiRoutes);

export default router;
