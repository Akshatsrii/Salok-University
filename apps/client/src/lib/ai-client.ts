import axios from 'axios';
import { ChatResponse } from '../types/ai';

export const askAI = async (message: string, userId: string = 'guest'): Promise<ChatResponse> => {
  try {
    const response = await axios.post<ChatResponse>('/api/v1/ai/chat', {
      message,
      userId
    });
    return response.data;
  } catch (error) {
    console.error('[AI Client] Failed to get response from AI:', error);
    throw new Error('Failed to communicate with AI Service');
  }
};
