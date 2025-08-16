import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const asiApiKey = process.env.ASI_API_KEY;

    if (!asiApiKey) {
      return NextResponse.json(
        { error: 'ASI API key not configured' },
        { status: 500 }
      );
    }

    const asiUrl = 'https://api.asi1.ai/v1/chat/completions';

    const response = await fetch(asiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${asiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.text();
      return NextResponse.json(
        { error: `ASI API error: ${response.status}`, details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('ASI API wrapper error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}