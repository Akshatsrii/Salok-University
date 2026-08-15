import { initPinecone } from '../vector-db/pinecone.client';
import { generateEmbedding } from '../embeddings/embed.service';

/**
 * Retrieval-Augmented Generation (RAG) Service
 * Queries the vector database for context and constructs a prompt for the LLM.
 */
export const answerWithRAG = async (question: string) => {
  console.log(`[RAG Service] Processing question: "${question}"`);
  
  // 1. Generate embedding for the question
  const queryVector = await generateEmbedding(question);
  
  // 2. Query Pinecone for relevant context
  const index = await initPinecone();
  const results = await index.query({
    vector: queryVector,
    topK: 3,
    includeMetadata: true
  });
  
  // 3. Extract context
  const context = results.matches.map((m: any) => m.metadata.text).join('\n');
  
  console.log(`[RAG Service] Retrieved Context:\n${context}`);
  
  // 4. Construct prompt (Stub for LLM call)
  const prompt = `Use the following context to answer the question.\nContext: ${context}\nQuestion: ${question}\nAnswer:`;
  
  // 5. Call LLM (OpenAI/Gemini)
  // const llmResponse = await openai.chat.completions.create(...)
  const llmResponse = `Based on university policies: ${context} (This is an AI generated response using RAG)`;
  
  return {
    answer: llmResponse,
    sources: results.matches.map((m: any) => m.metadata.text)
  };
};
