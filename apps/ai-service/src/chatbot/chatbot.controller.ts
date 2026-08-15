import { Request, Response } from 'express';
import { answerWithRAG } from './rag.service';

export const chatHandler = async (req: Request, res: Response) => {
  try {
    const { message, userId } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    console.log(`[Chatbot Controller] Received message from user ${userId}: ${message}`);
    
    // Call RAG service
    const response = await answerWithRAG(message);
    
    res.json({
      answer: response.answer,
      sources: response.sources,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('[Chatbot Controller] Error:', error);
    res.status(500).json({ error: 'Internal server error while processing chat' });
  }
};
