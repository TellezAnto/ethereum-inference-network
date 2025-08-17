# 🌐 Ethereum Inference Network (EIN)

> *A decentralized AI inference marketplace connecting idle GPU power with developers and AI agents through micropayments.*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/antonios-projects-2e05eff8/v0-new-blank-app)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/8RCEubK6VPZ)

## 🚀 Overview

EIN transforms idle GPU resources into a monetizable marketplace where developers and AI agents can access cost-effective AI inference through revolutionary **per-request micropayments**. Built on the X402 protocol, it enables instant, trustless transactions without intermediaries.

## 🏗️ How It Works

### For Developers & AI Agents
1. **Make API requests** to available AI endpoints
2. **Pay $0.009 per request** automatically via X402 protocol  
3. **Get instant responses** from distributed GPU providers
4. **No setup fees** or monthly commitments

### For GPU Providers
1. **Connect idle GPUs** to the network
2. **Earn real-time payments** for successful inference
3. **Set your own pricing** in the marketplace
4. **Get paid instantly** via smart contracts

## 💡 Key Features

- **🔄 Micropayment Infrastructure**: X402 protocol enables $0.009 per-request payments
- **🌐 Permissionless Network**: Open, censorship-resistant ecosystem
- **⚡ Instant Settlements**: Real-time payments for successful inference
- **🔗 Multi-Provider Support**: ASI, OpenRouter, and Walrus Network integration

## 📡 API Endpoints & Usage

### Making Requests

All API endpoints require payment via the X402 protocol. Here's how to send requests:

#### ASI Chat Completions
```bash
curl -X POST https://your-domain.com/api/asi/chat/completions \
  -H "Content-Type: application/json" \
  -H "X-Payment: [X402_PAYMENT_PROOF]" \
  -d '{
    "messages": [{"role": "user", "content": "Hello!"}],
    "temperature": 0.7,
    "max_tokens": 1024
  }'
```

#### OpenRouter Chat Completions
```bash
curl -X POST https://your-domain.com/api/open-router/chat-completion/[provider]/[model] \
  -H "Content-Type: application/json" \
  -H "X-Payment: [X402_PAYMENT_PROOF]" \
  -d '{
    "messages": [{"role": "user", "content": "Hello!"}],
    "temperature": 0.7
  }'
```

### 🔒 Request Redaction

**Sensitive data protection is automatically handled:**
- API keys and authorization headers are redacted from logs
- Uses `fast-redact` library for secure data sanitization
- Request bodies are filtered to remove sensitive information
- Only essential debugging information is preserved

### 💰 X402 Middleware Payment Conditions

**Payment is required for all API endpoints:**

| Endpoint | Price | Network | Description |
|----------|-------|---------|-------------|
| `/api/asi/chat/completions` | $0.009 | base-sepolia | ASI chat inference |
| `/api/open-router/**` | $0.009 | base-sepolia | OpenRouter model access |

**Payment Requirements:**
- **Facilitator URL**: `https://x402.org/facilitator`
- **Network**: Base Sepolia (testnet)
- **Timeout**: 30 seconds maximum per request
- **Payment Proof**: Must include valid X402 payment proof in request headers

**Failed Payment Handling:**
- Requests without valid payment proof return HTTP 402 (Payment Required)
- Invalid payments are automatically rejected
- Payment verification happens before API processing

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS, Radix UI
- **Payment**: X402 protocol with `@coinbase/x402` and `x402-next`
- **API Integration**: OpenRouter, ASI Alliance, Walrus Network
- **Security**: Request redaction, API key protection

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/ethereum-inference-network.git
   cd ethereum-inference-network
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env.local
   # Set your API keys and wallet address
   ```

4. **Run development server**
   ```bash
   pnpm dev
   ```

## 🔧 Environment Variables

```env
# Payment Configuration
PAYMENT_RECEIVING_WALLET_ADDRESS=0x...

# API Keys
ASI_API_KEY=your_asi_api_key
OPENROUTER_API_KEY=your_openrouter_api_key
```

## 🌍 Endpoints

- **ASI**: `/api/asi/chat/completions` - Artificial Superintelligence Alliance
- **OpenRouter**: `/api/open-router/**` - Multiple AI model providers
- **Walrus**: `/api/walrus/` - Walrus Network integration
