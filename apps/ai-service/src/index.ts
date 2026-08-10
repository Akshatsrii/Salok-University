import { ChatbotService } from '../chatbot/service';
import { OCRParserService } from '../document-ai/ocrParser';
import { ResumeAnalyzerService } from '../placement-ai/resumeAnalyzer';
import { FaceMatcherService } from '../attendance-ai/faceMatcher';

console.log("Starting AI Service...");

export const aiService = {
  chatbot: new ChatbotService(),
  documentParser: new OCRParserService(),
  resumeAnalyzer: new ResumeAnalyzerService(),
  faceMatcher: new FaceMatcherService(),
};

// Start Express server in a real implementation
console.log("AI Service running and ready to accept requests.");
