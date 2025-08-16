import { NextRequest, NextResponse } from 'next/server';

interface ModelArchitecture {
  input_modalities: string[];
  output_modalities: string[];
  tokenizer: string;
  instruct_type: string;
}

interface TopProvider {
  is_moderated: boolean;
  context_length: number;
  max_completion_tokens: number;
}

interface ModelPricing {
  prompt: string;
  completion: string;
  image: string;
  request: string;
  web_search: string;
  internal_reasoning: string;
  input_cache_read: string;
  input_cache_write: string;
}

interface Model {
  id: string;
  name: string;
  created: number;
  description: string;
  architecture: ModelArchitecture;
  top_provider: TopProvider;
  pricing: ModelPricing;
  canonical_slug?: string;
  context_length?: number;
  hugging_face_id?: string;
  per_request_limits?: object;
  supported_parameters?: string[];
}

interface ModelsResponse {
  data: Model[];
}

export async function GET(request: NextRequest) {
  try {
    const token = process.env.OPENROUTER_API_KEY;
    
    if (!token) {
      return NextResponse.json({ error: 'OpenRouter API key not configured' }, { status: 500 });
    }

    const url = new URL('https://openrouter.ai/api/v1/models');
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const useRss = searchParams.get('use_rss');
    const useRssChatLinks = searchParams.get('use_rss_chat_links');

    if (category) {
      url.searchParams.set('category', category);
    }
    if (useRss) {
      url.searchParams.set('use_rss', useRss);
    }
    if (useRssChatLinks) {
      url.searchParams.set('use_rss_chat_links', useRssChatLinks);
    }

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `OpenRouter API error: ${response.statusText}`, details: errorText },
        { status: response.status }
      );
    }

    const data: ModelsResponse = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('List models error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch models list' },
      { status: 500 }
    );
  }
}