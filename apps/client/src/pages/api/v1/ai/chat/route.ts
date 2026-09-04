import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In production, proxy this to the internal ai-service running on port 5002
    // const res = await fetch('http://localhost:5002/api/v1/ai/chat', { ... })
    
    // Mock response for now
    const mockResponse = {
      answer: `This is a simulated AI response to: "${body.message}". According to our university policies, this query has been resolved by our AI assistant.`,
      sources: ["University Handbook 2026", "Attendance Policy Guidelines"],
      timestamp: new Date().toISOString()
    };
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return NextResponse.json(mockResponse);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process AI request' }, { status: 500 });
  }
}
