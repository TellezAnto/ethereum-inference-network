// Here we declare the middleware for x402
import { paymentMiddleware } from "x402-next";

// Para desarrollo en testnet
export const middleware = paymentMiddleware(
  (process.env.PAYMENT_RECEIVING_WALLET_ADDRESS ||
    "0x0000000000000000000000000000000000000000") as `0x${string}`,
  {
    "/api/asi/chat/completions": {
      price: "$0.009",
      network: "base-sepolia",
      config: {
        description: "ASI chat inference",
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
    "/api/open-router/**": {
      price: "$0.009",
      network: "base-sepolia",
      config: {
        description: "Open Router inference",
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
    url: "https://x402.org/facilitator",
  },
);

export const config = {
  matcher: ["/api/asi/:path*", "/api/walrus/:path*", "/api/open-router/:path*"],
};
