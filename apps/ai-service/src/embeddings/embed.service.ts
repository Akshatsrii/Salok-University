/**
 * Service for generating text embeddings using an AI provider (e.g. OpenAI or Gemini).
 */

export const generateEmbedding = async (text: string): Promise<number[]> => {
  console.log(`[EmbedService] Generating embedding for text: "${text.substring(0, 30)}..."`);
  
  // Real implementation would call OpenAI/Gemini API here
  // const response = await openai.embeddings.create({ model: "text-embedding-ada-002", input: text });
  // return response.data[0].embedding;
  
  // Returning a mock 1536-dimensional vector for testing
  return Array.from({ length: 1536 }, () => Math.random());
};

export const embedDocuments = async (documents: string[]) => {
  const embeddings = [];
  for (const doc of documents) {
    const vector = await generateEmbedding(doc);
    embeddings.push({ id: Math.random().toString(36).substring(7), values: vector, metadata: { text: doc } });
  }
  return embeddings;
};
