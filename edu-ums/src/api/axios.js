import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function runChat(prompt) {
  if (!prompt) return "⚠️ Please enter a message.";

  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
      config: {
        temperature: 0.7,
      },
    });

    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "⚠️ Unable to connect to AI.";
  }
}
