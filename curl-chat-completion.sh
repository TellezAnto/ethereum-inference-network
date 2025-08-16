#!/bin/bash

curl -X POST http://localhost:3000/api/open-router/chat-completion/openai/gpt-3.5-turbo \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {
        "role": "user",
        "content": "What is the meaning of life?"
      }
    ]
  }'
