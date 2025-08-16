// Here we declare the middleware for x402
//
import { paymentMiddleware } from "x402-next";

// Para desarrollo en testnet
export const middleware = paymentMiddleware(
  (process.env.PAYMENT_RECEIVING_WALLET_ADDRESS ||
    "0x0000000000000000000000000000000000000000") as `0x${string}`, // Tu dirección de wallet receptora
  {
    "/api/asi": {
      price: "$0.009",
      network: "base-sepolia",
      config: {
        description: "ASI inference",
        mimeType: "application/json",
        maxTimeoutSeconds: 30,
        outputSchema: {
          type: "object",
          properties: {
            inference: { type: "string" },
          },
        },
      },
    },
    "/api/walrus": {
      price: "$0.009",
      network: "base-sepolia",
      config: {
        description: "Walrus storage",
        mimeType: "application/json",
        maxTimeoutSeconds: 30,
        outputSchema: {
          type: "object",
          properties: {
            url: { type: "string" },
          },
        },
      },
    },
  },
  {
    url: "https://x402.org/facilitator", // Facilitador de testnet
  },
);

export const config = {
  matcher: ["/api/asi/**", "/api/walrus/**"],
};
