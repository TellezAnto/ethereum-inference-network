import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-gradient-to-r from-primary to-secondary" />
            <span className="text-xl font-bold font-[var(--font-heading)]">
              Infernet
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              How It Works
            </a>
            <a
              href="#developers"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              For Developers
            </a>
            <a
              href="#features"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Features
            </a>
            <Button className="glow">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section - The big intro */}

      <div className="container mx-auto max-w-7xl">
        <div className=" gap-12 lg:gap-20 items-center">
          {/* Left Column: Main Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-[var(--font-heading)] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-500 to-primary-600 animate-gradient-slow">
              Unlock a New AI Economy
            </h1>
            <p className="text-xl md:text-2xl font-medium font-[var(--font-heading)] mb-4 text-muted-foreground">
              The Global Compute Layer for the Onchain World.
            </p>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              Infernet is a permissionless P2P network connecting idle GPU power
              with AI agents and developers, enabling dynamic pricing and
              trustless, per-request micropayments.
            </p>
          </div>

          {/* Right Column: Placeholder for Illustration/Diagram */}
        </div>
      </div>

      {/* Problem & Solution Section */}

      {/* Features Section */}
      <div className="mt-16 py-12 md:py-20 lg:py-24">
        <div className="container mx-auto text-center max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-12">
            Features that Transform the Market
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Instant Payments */}
            <div className="bg-card border border-border/50 rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center size-12 mb-4 rounded-full bg-primary/20 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h16v2a2 2 0 0 0 2-2v4h-4a2 2 0 0 1 0-4h4V3a2 2 0 0 0 2-2H2a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20v-2h-4a2 2 0 0 1 0-4h4v-4h-4a2 2 0 0 1 0-4h4V12h-4a2 2 0 0 1 0-4h4V7a2 2 0 0 0-2-2h-4a2 2 0 0 1 0-4h4a2 2 0 0 0 2-2H2a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20v-2h-4a2 2 0 0 1 0-4h4v-4h-4a2 2 0 0 1 0-4h4V12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Per-Request Payments (X402)
              </h3>
              <p className="text-muted-foreground">
                Pay only for the inference you use, with instant transactions
                and no need for intermediaries.
              </p>
            </div>

            {/* Card 2: Decentralized Network */}
            <div className="bg-card border border-border/50 rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center size-12 mb-4 rounded-full bg-secondary/20 text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" />
                  <path d="M12 2V22" />
                  <path d="M2 7L12 12L22 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Permissionless Marketplace
              </h3>
              <p className="text-muted-foreground">
                Our on-chain smart contract allows anyone to join the network,
                creating an open and censorship-resistant ecosystem.
              </p>
            </div>

            {/* Card 3: Monetize Hardware */}
            <div className="bg-card border border-border/50 rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center size-12 mb-4 rounded-full bg-accent/20 text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
                  <path d="M12 18h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Efficient Monetization
              </h3>
              <p className="text-muted-foreground">
                Turn your idle GPU into a valuable asset. Providers earn
                directly from developers for every successful inference.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-card py-20 md:py-32 lg:py-48 mt-16 text-center">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl sm:text-5xl font-bold font-[var(--font-heading)] text-foreground mb-4">
              Ready to build the future of AI?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect your application or AI agent to our network in minutes.
              Our SDK simplifies blockchain interaction and instant
              micropayments.
            </p>
            <Button
              size="lg"
              className="text-lg px-8 py-4 animate-glow-pulse shadow-2xl shadow-primary/40"
            >
              Explore the Docs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
