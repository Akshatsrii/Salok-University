import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

// Ensure you have GEMINI_API_KEY set in your environment
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'mock-key');

/**
 * Simulates document OCR and verification using Gemini Vision capabilities.
 * In a real implementation, you'd pass a base64 image or a file part to the model.
 */
export const verifyDocumentOCR = async (documentData: string) => {
  try {
    const prompt = `Analyze this document data and verify if it appears to be a legitimate Aadhaar or Marksheet. Output a JSON with a 'score' (0-100) and 'isFake' (boolean). Data: ${documentData}`;
    
    // Fallback if no API key is provided
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'mock-key') {
      console.warn("No GEMINI_API_KEY found, using mock OCR data.");
      return { score: 88, isFake: false };
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    try {
      // Basic JSON parsing logic if model outputs markdown blocks
      const jsonStr = text.replace(/```json/g, '').replace(/```/g, '');
      return JSON.parse(jsonStr);
    } catch(e) {
      return { score: 70, isFake: false, raw: text };
    }
  } catch (error) {
    console.error('Error verifying document:', error);
    throw error;
  }
};

/**
 * Generates an academic recommendation using Gemini text model.
 */
export const generateRecommendation = async (studentContext: string) => {
  try {
    const prompt = `Act as an Academic Advisor. Based on this student's context, provide a short, actionable recommendation for their studies: ${studentContext}`;
    
    // Fallback if no API key is provided
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'mock-key') {
      return "Based on your recent performance, I recommend focusing on Graph Algorithms. Would you like me to generate a personalized practice sheet?";
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating recommendation:', error);
    throw error;
  }
};
