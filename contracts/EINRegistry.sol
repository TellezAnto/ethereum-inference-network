// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title EINRegistry
 * @notice Registry contract for Ethereum Inference Network nodes on Base
 * @dev Allows nodes to register and users to discover inference providers
 */
contract EINRegistry {
    struct Node {
        address operator;
        address paymentAddress;
        string baseEndpoint;
        string provider;
        string[] models;
        uint256[] pricesPerRequest; // In wei (ETH)
        uint256 stakedAmount;
        uint256 reputation; // 0-10000 (100.00%)
        uint256 totalRequests;
        uint256 registeredAt;
        bool isActive;
    }

    struct ModelInfo {
        string provider;
        string model;
        uint256 nodeCount;
        uint256 minPrice;
        uint256 avgPrice;
    }

    // State variables
    mapping(address => Node) public nodes;
    address[] public nodeAddresses;
    mapping(string => mapping(string => address[])) public providerModelToNodes; // provider => model => nodes
    mapping(address => uint256) public nodeIndex;

    uint256 public totalNodes;
    uint256 public constant MIN_STAKE = 1 ether; // 1 ETH

    // Events
    event NodeRegistered(address indexed operator, address paymentAddress, string provider, string[] models);
    event NodeUpdated(address indexed operator, string provider, string[] models);
    event NodeDeactivated(address indexed operator);
    event PriceUpdated(address indexed operator, string provider, string model, uint256 price);
    event PaymentAddressUpdated(address indexed operator, address newPaymentAddress);
    event RequestCompleted(address indexed operator, address indexed user, string provider, string model);

    // Modifiers
    modifier onlyNodeOperator() {
        require(nodes[msg.sender].operator == msg.sender, "Not a node operator");
        require(nodes[msg.sender].isActive, "Node not active");
        _;
    }

    /**
     * @notice Register a new node
     * @param baseEndpoint The base HTTP endpoint for the node (e.g., "https://api.example.com")
     * @param provider The provider name (e.g., "openai", "anthropic")
     * @param paymentAddress Address where payments should be sent
     * @param models Array of supported model names
     * @param pricesPerRequest Array of prices per request (must match models length)
     */
    function registerNode(
        string memory baseEndpoint,
        string memory provider,
        address paymentAddress,
        string[] memory models,
        uint256[] memory pricesPerRequest
    ) external payable {
        require(msg.value >= MIN_STAKE, "Insufficient stake: 1 ETH required");
        require(models.length > 0, "Must support at least one model");
        require(models.length == pricesPerRequest.length, "Models and prices length mismatch");
        require(nodes[msg.sender].operator == address(0), "Node already registered");
        require(paymentAddress != address(0), "Invalid payment address");

        Node storage newNode = nodes[msg.sender];
        newNode.operator = msg.sender;
        newNode.paymentAddress = paymentAddress;
        newNode.baseEndpoint = baseEndpoint;
        newNode.provider = provider;
        newNode.models = models;
        newNode.pricesPerRequest = pricesPerRequest;
        newNode.stakedAmount = msg.value;
        newNode.reputation = 8000; // Start at 80%
        newNode.totalRequests = 0;
        newNode.registeredAt = block.timestamp;
        newNode.isActive = true;

        nodeAddresses.push(msg.sender);
        nodeIndex[msg.sender] = nodeAddresses.length - 1;
        totalNodes++;

        // Update provider-model mappings
        for (uint i = 0; i < models.length; i++) {
            providerModelToNodes[provider][models[i]].push(msg.sender);
        }

        emit NodeRegistered(msg.sender, paymentAddress, provider, models);
    }

    /**
     * @notice Update node configuration
     */
    function updateNode(
        string memory baseEndpoint,
        string memory provider,
        string[] memory models,
        uint256[] memory pricesPerRequest
    ) external onlyNodeOperator {
        require(models.length > 0, "Must support at least one model");
        require(models.length == pricesPerRequest.length, "Models and prices length mismatch");

        Node storage node = nodes[msg.sender];

        // Clear old provider-model mappings
        for (uint i = 0; i < node.models.length; i++) {
            _removeFromProviderModelMapping(node.provider, node.models[i], msg.sender);
        }

        // Update node
        node.baseEndpoint = baseEndpoint;
        node.provider = provider;
        node.models = models;
        node.pricesPerRequest = pricesPerRequest;

        // Update new provider-model mappings
        for (uint i = 0; i < models.length; i++) {
            providerModelToNodes[provider][models[i]].push(msg.sender);
        }

        emit NodeUpdated(msg.sender, provider, models);
    }

    /**
     * @notice Update payment address
     */
    function updatePaymentAddress(address newPaymentAddress) external onlyNodeOperator {
        require(newPaymentAddress != address(0), "Invalid payment address");
        nodes[msg.sender].paymentAddress = newPaymentAddress;
        emit PaymentAddressUpdated(msg.sender, newPaymentAddress);
    }

    /**
     * @notice Update price for a specific model
     */
    function updatePrice(string memory model, uint256 newPrice) external onlyNodeOperator {
        Node storage node = nodes[msg.sender];

        for (uint i = 0; i < node.models.length; i++) {
            if (keccak256(bytes(node.models[i])) == keccak256(bytes(model))) {
                node.pricesPerRequest[i] = newPrice;
                emit PriceUpdated(msg.sender, node.provider, model, newPrice);
                return;
            }
        }

        revert("Model not supported by node");
    }

    /**
     * @notice Get nodes supporting a specific provider/model combination
     * @param provider The provider name (e.g., "openai")
     * @param model The model name (e.g., "gpt-4")
     */
    function getNodesByProviderModel(string memory provider, string memory model)
        external
        view
        returns (address[] memory)
    {
        return providerModelToNodes[provider][model];
    }

    /**
     * @notice Get full endpoint URL for a node's provider/model
     * @param nodeOperator The node operator address
     * @param model The model name
     * @return The full endpoint URL in format: baseEndpoint/provider/model
     */
    function getEndpointUrl(address nodeOperator, string memory model)
        external
        view
        returns (string memory)
    {
        Node storage node = nodes[nodeOperator];
        require(node.isActive, "Node not active");

        // Verify model is supported
        bool modelSupported = false;
        for (uint i = 0; i < node.models.length; i++) {
            if (keccak256(bytes(node.models[i])) == keccak256(bytes(model))) {
                modelSupported = true;
                break;
            }
        }
        require(modelSupported, "Model not supported by node");

        // Return formatted endpoint
        return string(abi.encodePacked(node.baseEndpoint, "/", node.provider, "/", model));
    }

    /**
     * @notice Get detailed info for nodes supporting a provider/model
     */
    function getNodeDetailsForProviderModel(string memory provider, string memory model)
        external
        view
        returns (
            address[] memory operators,
            address[] memory paymentAddresses,
            string[] memory baseEndpoints,
            uint256[] memory prices,
            uint256[] memory reputations
        )
    {
        address[] memory nodeList = providerModelToNodes[provider][model];
        uint256 count = nodeList.length;

        operators = new address[](count);
        paymentAddresses = new address[](count);
        baseEndpoints = new string[](count);
        prices = new uint256[](count);
        reputations = new uint256[](count);

        for (uint i = 0; i < count; i++) {
            Node storage node = nodes[nodeList[i]];
            operators[i] = node.operator;
            paymentAddresses[i] = node.paymentAddress;
            baseEndpoints[i] = node.baseEndpoint;
            reputations[i] = node.reputation;

            // Find price for this model
            for (uint j = 0; j < node.models.length; j++) {
                if (keccak256(bytes(node.models[j])) == keccak256(bytes(model))) {
                    prices[i] = node.pricesPerRequest[j];
                    break;
                }
            }
        }
    }

    /**
     * @notice Record a completed inference request
     * @dev In production, this would be called by an authorized facilitator/oracle
     */
    function recordRequest(
        address nodeOperator,
        address user,
        string memory model
    ) external {
        Node storage node = nodes[nodeOperator];
        require(node.isActive, "Node not active");

        node.totalRequests++;

        // Simple reputation update (can be more sophisticated)
        if (node.reputation < 10000) {
            node.reputation += 1;
        }

        emit RequestCompleted(nodeOperator, user, node.provider, model);
    }

    /**
     * @notice Deactivate a node and withdraw stake
     */
    function deactivateNode() external onlyNodeOperator {
        Node storage node = nodes[msg.sender];
        node.isActive = false;
        totalNodes--;

        // Remove from provider-model mappings
        for (uint i = 0; i < node.models.length; i++) {
            _removeFromProviderModelMapping(node.provider, node.models[i], msg.sender);
        }

        // Return stake
        uint256 stake = node.stakedAmount;
        node.stakedAmount = 0;
        payable(msg.sender).transfer(stake);

        emit NodeDeactivated(msg.sender);
    }

    /**
     * @notice Get all active nodes
     */
    function getAllActiveNodes() external view returns (address[] memory) {
        address[] memory activeNodes = new address[](totalNodes);
        uint256 count = 0;

        for (uint i = 0; i < nodeAddresses.length; i++) {
            if (nodes[nodeAddresses[i]].isActive) {
                activeNodes[count] = nodeAddresses[i];
                count++;
            }
        }

        // Resize array
        assembly {
            mstore(activeNodes, count)
        }

        return activeNodes;
    }

    /**
     * @notice Get all unique providers
     */
    function getAllProviders() external view returns (string[] memory) {
        string[] memory providers = new string[](nodeAddresses.length);
        uint256 count = 0;

        for (uint i = 0; i < nodeAddresses.length; i++) {
            if (nodes[nodeAddresses[i]].isActive) {
                string memory provider = nodes[nodeAddresses[i]].provider;

                // Check if provider already exists in array
                bool exists = false;
                for (uint j = 0; j < count; j++) {
                    if (keccak256(bytes(providers[j])) == keccak256(bytes(provider))) {
                        exists = true;
                        break;
                    }
                }

                if (!exists) {
                    providers[count] = provider;
                    count++;
                }
            }
        }

        // Resize array
        assembly {
            mstore(providers, count)
        }

        return providers;
    }

    // Internal functions
    function _removeFromProviderModelMapping(
        string memory provider,
        string memory model,
        address operator
    ) internal {
        address[] storage nodeList = providerModelToNodes[provider][model];
        for (uint i = 0; i < nodeList.length; i++) {
            if (nodeList[i] == operator) {
                nodeList[i] = nodeList[nodeList.length - 1];
                nodeList.pop();
                break;
            }
        }
    }
}
