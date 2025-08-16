# Ethereum Inference Network (EIN) - Project Overview

## What is EIN?

The Ethereum Inference Network is a **permissionless P2P network** that connects idle GPU power with AI agents and developers. It creates a decentralized marketplace for AI inference, enabling dynamic pricing and trustless, per-request micropayments.

## Core Value Proposition

**"Unlock a New AI Economy - The Global Compute Layer for the Onchain World"**

EIN transforms idle GPU resources into a valuable, monetizable asset while providing developers and AI agents with cost-effective, pay-per-use AI inference capabilities.

## Key Features

### 🔄 Per-Request Payments (X402)
- Pay only for the inference you actually use
- Instant transactions without intermediaries
- Micropayment infrastructure for AI services

### 🌐 Permissionless Marketplace
- Open, censorship-resistant ecosystem
- Anyone can join the network
- On-chain smart contract governance

### 💰 Efficient Monetization
- GPU owners earn directly from developers
- Real-time payments for successful inference
- Turn idle hardware into revenue streams

## Technical Architecture

### Frontend
- **Next.js 15** React application with TypeScript
- **Tailwind CSS** for styling with custom animations
- **Radix UI** components for accessible interface
- **Dark mode** optimized design

### API Infrastructure
- **OpenRouter Integration**: Proxy to various AI model providers
- **ASI (Artificial Superintelligence Alliance)** endpoints
- **Walrus Network** integration
- Dynamic routing for multiple providers and models

### Key Dependencies
- `@coinbase/x402` - Payment protocol implementation
- `x402-next` - Next.js specific X402 integration
- Multiple Radix UI components for interface
- Comprehensive TypeScript support

## Project Structure

```
ethereum-inference-network/
├── app/
│   ├── api/                    # API routes
│   │   ├── asi/               # ASI endpoints
│   │   ├── open-router/       # OpenRouter proxy endpoints
│   │   └── walrus/            # Walrus network endpoints
│   ├── open-router/           # Model listing interface
│   └── page.tsx              # Landing page
├── components/                # React components
│   ├── Logo.tsx              # Network logo component
│   └── ui/                   # Shared UI components
└── middleware.ts             # Request middleware
```

## Current Status

This appears to be an active development project building infrastructure for:
1. **AI Model Marketplace**: Connecting GPU providers with AI consumers
2. **Payment Infrastructure**: Implementing X402 protocol for micropayments
3. **Multi-Provider Support**: Integrating various AI service providers
4. **User Interface**: Web application for interacting with the network

The project represents a significant step toward decentralizing AI inference and creating new economic models around distributed computing resources.