export class RAGRetriever {
  /**
   * Retrieves relevant context for a user query.
   */
  async retrieveContext(query: string): Promise<string> {
    console.log(`[RAG] Retrieving context for: ${query}`);
    
    // Stub: Returns mock syllabus or rules
    if (query.includes('exam')) {
      return "Context: Final exams carry 60% weightage. A minimum of 75% attendance is required to sit for the exam.";
    }
    
    return "Context: General university rules apply.";
  }
}
