export interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: string;
  sources?: string[];
}

export interface ChatResponse {
  answer: string;
  sources?: string[];
  timestamp: string;
}

export interface AIErrorResponse {
  error: string;
}
