import { NextRequest, NextResponse } from 'next/server';

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
  refusal?: string;
}

interface ChatCompletionChoice {
  message: ChatMessage;
  logprobs?: object;
  finish_reason: string;
  index: number;
}

interface ChatCompletionUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

interface ChatCompletionResponse {
  id: string;
  choices: ChatCompletionChoice[];
  provider: string;
  model: string;
  object: string;
  created: number;
  system_fingerprint?: object;
  usage?: ChatCompletionUsage;
}

interface ChatCompletionRequest {
  model: string;
  messages: ChatMessage[];
  models?: string[];
  provider?: object;
  reasoning?: object;
  usage?: object;
  transforms?: string[];
  stream?: boolean;
  max_tokens?: number;
  temperature?: number;
  seed?: number;
  top_p?: number;
  top_k?: number;
  frequency_penalty?: number;
  presence_penalty?: number;
  repetition_penalty?: number;
  logit_bias?: Record<string, number>;
  top_logprobs?: number;
  min_p?: number;
  top_a?: number;
  user?: string;
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ provider: string; model: string }> }
) {
  try {
    const resolvedParams = await params;
    const { provider, model } = resolvedParams;
    const fullModelId = `${provider}/${model}`;


    const token = process.env.OPENROUTER_API_KEY;
    
    if (!token) {
      return NextResponse.json({ error: 'OpenRouter API key not configured' }, { status: 500 });
    }

    console.log('Provider:', provider);
    console.log('Model:', model);
    console.log('Full Model ID:', fullModelId);

    const body: ChatCompletionRequest = await request.json();
    
    body.model = fullModelId;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `OpenRouter API error: ${response.statusText}`, details: errorText },
        { status: response.status }
      );
    }

    const data: ChatCompletionResponse = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Chat completion error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat completion' },
      { status: 500 }
    );
  }
}