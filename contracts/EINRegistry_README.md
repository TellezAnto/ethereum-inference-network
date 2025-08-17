# EIN Registry Contract
## Live at 0xBd5E8518091e19c562cCE62FE26830f586972084 in Base Mainnet

## Overview

The EIN (Ethereum Inference Network) Registry is a smart contract that enables decentralized discovery and registration of AI inference nodes. Nodes can register their services, specify supported models and pricing, and users can discover available providers.

## Key Features

- **Node Registration**: Operators stake 1 ETH to register their inference service
- **Provider/Model Support**: Nodes specify provider (e.g., "openai") and supported models
- **Per-Request Pricing**: Simple pricing model based on requests, not tokens
- **Payment Address**: Separate payment address from operator address
- **Reputation System**: Track node performance and reliability (0-10000 scale)
- **Model Discovery**: Find nodes by provider/model combination

## Contract Structure

### Node Information
Each registered node contains:
- `operator`: Address that controls the node
- `paymentAddress`: Where payments should be sent
- `baseEndpoint`: Base API URL (e.g., "https://api.example.com")
- `provider`: Provider name (e.g., "openai", "anthropic")
- `models[]`: Array of supported models
- `pricesPerRequest[]`: Price per request for each model (in wei)
- `reputation`: Performance score (0-10000, starting at 8000)
- `stakedAmount`: ETH staked by the operator

## Key Functions

### For Node Operators

#### Register Node
```solidity
registerNode(
    string baseEndpoint,      // "https://api.mynode.com"
    string provider,          // "openai"
    address paymentAddress,   // 0x123...
    string[] models,          // ["gpt-4", "gpt-3.5-turbo"]
    uint256[] pricesPerRequest // [0.001 ether, 0.0005 ether]
)
```
**Required**: Send 1 ETH as stake

#### Update Node Configuration
```solidity
updateNode(
    string baseEndpoint,
    string provider,
    string[] models,
    uint256[] pricesPerRequest
)
```

#### Update Payment Address
```solidity
updatePaymentAddress(address newPaymentAddress)
```

#### Update Model Price
```solidity
updatePrice(string model, uint256 newPrice)
```

#### Deactivate and Withdraw
```solidity
deactivateNode()
```
Returns the 1 ETH stake to operator

### For Users/Integrators

#### Discover Nodes by Provider/Model
```solidity
getNodesByProviderModel("openai", "gpt-4")
// Returns: address[] of node operators
```

#### Get Full Endpoint URL
```solidity
getEndpointUrl(nodeAddress, "gpt-4")
// Returns: "https://api.mynode.com/openai/gpt-4"
```

#### Get Detailed Node Information
```solidity
getNodeDetailsForProviderModel("openai", "gpt-4")
// Returns: operators, paymentAddresses, endpoints, prices, reputations
```

#### Get All Active Nodes
```solidity
getAllActiveNodes()
// Returns: address[] of all active nodes
```

#### Get All Providers
```solidity
getAllProviders()
// Returns: string[] of unique provider names
```

## Integration Example

### For Node Operators
```javascript
// Register as a node
const tx = await registry.registerNode(
    "https://api.myservice.com",
    "openai",
    "0xPaymentAddress...",
    ["gpt-4", "gpt-3.5-turbo"],
    [ethers.parseEther("0.001"), ethers.parseEther("0.0005")],
    { value: ethers.parseEther("1.0") }
);
```

### For Users Finding Nodes
```javascript
// Find nodes supporting OpenAI GPT-4
const nodes = await registry.getNodesByProviderModel("openai", "gpt-4");

// Get endpoint for first node
const endpoint = await registry.getEndpointUrl(nodes[0], "gpt-4");
// Result: "https://api.myservice.com/openai/gpt-4"

// Get detailed info
const details = await registry.getNodeDetailsForProviderModel("openai", "gpt-4");
// Use details.prices to compare costs
// Use details.reputations to pick reliable nodes
```

## Endpoint Format

Nodes expose their inference APIs at:
```
[baseEndpoint]/[provider]/[model]
```

Example endpoints:
- `https://api.mynode.com/openai/gpt-4`
- `https://api.mynode.com/anthropic/claude-3`
- `https://inference.example.com/mistral/mixtral-8x7b`

## Events

- `NodeRegistered`: New node joins the network
- `NodeUpdated`: Node configuration changed
- `NodeDeactivated`: Node leaves the network
- `PriceUpdated`: Model pricing changed
- `PaymentAddressUpdated`: Payment destination changed
- `RequestCompleted`: Inference request recorded

## Security Considerations

1. **Stake Requirement**: 1 ETH stake ensures node commitment
2. **Reputation System**: Tracks node reliability over time
3. **Payment Separation**: Payment address separate from operator for security
4. **No Direct Payments**: Contract doesn't handle payments, only registry
5. **Withdrawal Protection**: Only operator can deactivate and withdraw stake

## Future Enhancements

- Slashing mechanism for misbehaving nodes
- Time-weighted reputation decay
- Model versioning support
- Batch pricing updates
- Node metadata (region, latency, specializations)
- Integration with payment/settlement layer
