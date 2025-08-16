import { NextRequest, NextResponse } from 'next/server';

interface GenerationData {
  id: string;
  total_cost: number;
  created_at: string;
  model: string;
  origin: string;
  usage: number;
  is_byok: boolean;
  upstream_id?: string;
  cache_discount?: number;
  upstream_inference_cost?: number;
  app_id?: number;
  streamed?: boolean;
  cancelled?: boolean;
  provider_name?: string;
  latency?: number;
  moderation_latency?: number;
  generation_time?: number;
  finish_reason?: string;
  native_finish_reason?: string;
  tokens_prompt?: number;
  tokens_completion?: number;
  native_tokens_prompt?: number;
  native_tokens_completion?: number;
  native_tokens_reasoning?: number;
  num_media_prompt?: number;
  num_media_completion?: number;
  num_search_results?: number;
}

interface OpenRouterResponse {
  data: GenerationData;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ provider: string; model: string }> }
) {
  try {
    const resolvedParams = await params;
    const { provider, model } = resolvedParams;
    const fullId = `${provider}/${model}`;


    // Use environment variable for OpenRouter API calls
    const token = process.env.OPENROUTER_API_KEY;

    if (!token) {
      return NextResponse.json({ error: 'OpenRouter API key not configured' }, { status: 500 });
    }

    console.log('Provider:', provider);
    console.log('Model:', model);
    console.log('Full ID:', fullId);

    const url = new URL('https://openrouter.ai/api/v1/generation');
    url.searchParams.set('id', fullId);

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `OpenRouter API error: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data: OpenRouterResponse = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Generation API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch generation data' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ provider: string; model: string }> }
) {
  const resolvedParams = await params;
  return NextResponse.json({
    provider: resolvedParams.provider,
    model: resolvedParams.model,
    fullId: `${resolvedParams.provider}/${resolvedParams.model}`
  });
}
