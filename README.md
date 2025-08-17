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

## 📋 Smart Contract Registry

### 🏛️ EIN Registry Contract
**Live at [`0xBd5E8518091e19c562cCE62FE26830f586972084`](https://basescan.org/address/0xBd5E8518091e19c562cCE62FE26830f586972084) on Base Mainnet**

The EIN Registry is the backbone of our decentralized inference network, enabling trustless discovery and registration of AI inference nodes. Node operators stake ETH to join the network, while users discover and connect to reliable AI providers.

#### 🎯 Key Features

| Feature | Description | Details |
|---------|-------------|---------|
| **💰 Node Registration** | Operators stake 1 ETH | Ensures commitment & network quality |
| **🤖 Provider/Model Support** | Flexible AI provider integration | OpenAI, Anthropic, Mistral, etc. |
| **💳 Per-Request Pricing** | Simple, transparent pricing | Pay per inference request, not tokens |
| **🔄 Payment Separation** | Secure payment handling | Operator & payment addresses separated |
| **⭐ Reputation System** | Quality assurance | 0-10000 scale performance tracking |
| **🔍 Model Discovery** | Easy provider/model lookup | Find nodes by specific requirements |

#### 🏗️ Node Structure

Each registered node maintains comprehensive service information:

```solidity
struct Node {
    address operator;              // Node controller address
    address paymentAddress;        // Payment destination
    string baseEndpoint;          // API base URL
    string provider;              // "openai", "anthropic", etc.
    string[] models;              // Supported model list
    uint256[] pricesPerRequest;   // Per-model pricing (wei)
    uint256 reputation;           // Performance score (0-10000)
    uint256 stakedAmount;         // ETH stake amount
}
```

#### 🔧 Core Functions

**For Node Operators:**

```solidity
// Register new node (requires 1 ETH stake)
registerNode(
    string baseEndpoint,      // "https://api.mynode.com"
    string provider,          // "openai"
    address paymentAddress,   // 0x123...
    string[] models,          // ["gpt-4", "gpt-3.5-turbo"]
    uint256[] pricesPerRequest // [0.001 ether, 0.0005 ether]
)

// Update node configuration
updateNode(string baseEndpoint, string provider, string[] models, uint256[] pricesPerRequest)

// Update payment destination
updatePaymentAddress(address newPaymentAddress)

// Adjust model pricing
updatePrice(string model, uint256 newPrice)

// Leave network & withdraw stake
deactivateNode()
```

**For Users & Integrators:**

```solidity
// Discover nodes by provider/model
getNodesByProviderModel("openai", "gpt-4") → address[]

// Get complete endpoint URL
getEndpointUrl(nodeAddress, "gpt-4") → "https://api.mynode.com/openai/gpt-4"

// Get comprehensive node details
getNodeDetailsForProviderModel("openai", "gpt-4") 
→ (operators[], paymentAddresses[], endpoints[], prices[], reputations[])

// List all active providers
getAllProviders() → string[]

// Get all network nodes
getAllActiveNodes() → address[]
```

#### 🌐 Endpoint Format

All inference nodes follow a standardized URL structure:
```
[baseEndpoint]/[provider]/[model]
```

**Examples:**
- `https://api.mynode.com/openai/gpt-4`
- `https://api.mynode.com/anthropic/claude-3`
- `https://inference.example.com/mistral/mixtral-8x7b`

#### 📊 Integration Examples

**Registering as a Node Provider:**
```javascript
const tx = await registry.registerNode(
    "https://api.myservice.com",
    "openai",
    "0xPaymentAddress...",
    ["gpt-4", "gpt-3.5-turbo"],
    [ethers.parseEther("0.001"), ethers.parseEther("0.0005")],
    { value: ethers.parseEther("1.0") }
);
```

**Finding and Using Nodes:**
```javascript
// Discover GPT-4 providers
const nodes = await registry.getNodesByProviderModel("openai", "gpt-4");

// Get optimized endpoint
const endpoint = await registry.getEndpointUrl(nodes[0], "gpt-4");

// Fetch detailed provider info
const details = await registry.getNodeDetailsForProviderModel("openai", "gpt-4");
// Compare prices and reputations to select best provider
```

#### 🔐 Security & Trust

- **💎 Stake-Based Security**: 1 ETH minimum stake ensures node commitment
- **⭐ Reputation Tracking**: Performance-based scoring (0-10000 scale)
- **🛡️ Payment Isolation**: Separate operator and payment addresses
- **📝 Event Transparency**: All actions logged via smart contract events
- **🔒 Withdrawal Protection**: Only operators can deactivate nodes
