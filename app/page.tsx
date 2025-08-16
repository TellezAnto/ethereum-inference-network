import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Main Content */}
            <div className="text-center lg:text-left space-y-8">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-[var(--font-heading)] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-500 to-primary-600 animate-gradient-slow">
                The Premier AI Inference Marketplace
              </h1>
              <p className="text-xl md:text-2xl font-medium font-[var(--font-heading)] mb-4 text-muted-foreground">
                Where Intelligence Meets Instant Payments.
              </p>
              <p className="text-lg mb-8 text-muted-foreground max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                Experience the future of AI access through our revolutionary marketplace.
                Agents and developers pay just <span className="text-primary font-semibold">$0.009 per request </span>
                for instant access to cutting-edge models from ASI, OpenAI, Deepseek and more.
                No subscriptions, no commitments—just pure, on-demand AI intelligence.
              </p>

              {/* Hero CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Building
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  View Models
                </Button>
              </div>
            </div>

            {/* Right Column: Visual Dashboard */}
            <div className="relative">
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">Live Network Stats</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-muted-foreground">Active</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary">3</div>
                      <div className="text-sm text-muted-foreground">AI Providers</div>
                    </div>
                    <div className="bg-secondary/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-secondary">$0.009</div>
                      <div className="text-sm text-muted-foreground">Per Request</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">ASI Alliance</span>
                      <span className="text-green-500 font-medium">Available</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">OpenRouter</span>
                      <span className="text-green-500 font-medium">Available</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Anthropic Claude</span>
                      <span className="text-green-500 font-medium">Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-lg animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Showcase Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 via-background to-secondary/5 relative">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-heading)] mb-4 text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            No hidden fees, no monthly subscriptions. Pay only for what you use.
          </p>

          <div className="relative">
            <div className="bg-card/80 backdrop-blur border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl max-w-md mx-auto">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  $0.009
                </div>
                <div className="text-xl font-semibold text-foreground">Per AI Request</div>
                <div className="text-muted-foreground">
                  Access to ASI, OpenAI, Anthropic & Deepseek
                </div>
                <div className="pt-4">
                  <div className="flex items-center justify-center space-x-2 text-sm text-green-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Instant settlement via X402</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating price indicators */}
            <div className="absolute -top-6 -left-6 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium animate-bounce">
              No setup fees
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              Pay as you go
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 lg:py-32 relative">
        <div className="container mx-auto text-center max-w-6xl px-4">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-6">
              Revolutionary Marketplace Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built for the next generation of AI applications and autonomous agents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Card 1: Instant Payments */}
            <div className="group bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:bg-card/70 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-center size-16 mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 text-primary mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Micro-Transaction Magic
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Revolutionary X402 protocol enables lightning-fast micropayments.
                  Pay exactly $0.009 per AI request—no monthly fees, no minimum commitments,
                  just pure pay-as-you-go intelligence.
                </p>
              </div>
            </div>

            {/* Card 2: Multi-Provider Network */}
            <div className="group bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:bg-card/70 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-center size-16 mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/40 text-secondary mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v6m0 6v6" />
                    <path d="m21 12-6-3-6 3-6-3" />
                    <path d="m21 12-6 3-6-3-6 3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Multi-Provider AI Arsenal
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access elite AI models from Artificial Superintelligence Alliance,
                  OpenAI's GPT series, Anthropic's Claude, and Deepseek models—all through
                  one unified, permissionless marketplace interface.
                </p>
              </div>
            </div>

            {/* Card 3: Agent Architecture */}
            <div className="group bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:bg-card/70 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-center size-16 mb-6 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 text-accent mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <path d="M21 12c.552 0 1-.448 1-1V9c0-.552-.448-1-1-1h-1V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1H2c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h1v1a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-1h1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Agent-Native Architecture
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Built from the ground up for autonomous agents and developers alike.
                  Seamless API integration, instant payments, and enterprise-grade
                  reliability make AI accessible to every use case.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">AI Networks Integrated</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-secondary">$0.009</div>
              <div className="text-sm text-muted-foreground">Fixed Price Per Request</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-accent">0s</div>
              <div className="text-sm text-muted-foreground">Payment Settlement Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Showcase Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 via-background to-secondary/5 relative">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-heading)] mb-4 text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            No hidden fees, no monthly subscriptions. Pay only for what you use.
          </p>

          <div className="relative">
            <div className="bg-card/80 backdrop-blur border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl max-w-md mx-auto">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  $0.009
                </div>
                <div className="text-xl font-semibold text-foreground">Per AI Request</div>
                <div className="text-muted-foreground">
                  Access to ASI, OpenAI, Anthropic & Deepseek
                </div>
                <div className="pt-4">
                  <div className="flex items-center justify-center space-x-2 text-sm text-green-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Instant settlement via X402</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating price indicators */}
            <div className="absolute -top-6 -left-6 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium animate-bounce">
              No setup fees
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              Pay as you go
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,theme(colors.primary/10),transparent_70%)]" />

        <div className="container mx-auto max-w-5xl px-4 text-center relative z-10">
          <div className="bg-card/30 backdrop-blur-xl border border-border/30 rounded-3xl p-12 md:p-16 shadow-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[var(--font-heading)] text-foreground mb-6">
              Join the Intelligence Revolution
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform how your agents and applications access AI.
              Start with a single API call—pay $0.009 per request across
              our premium model ecosystem. No setup fees, no lengthy onboarding.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button
                size="lg"
                className="text-lg px-10 py-5 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:shadow-2xl transition-all duration-300 animate-glow-pulse"
              >
                Start Building Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-5 border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/10 backdrop-blur transition-all duration-300"
              >
                View Available Models
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>ASI Alliance</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>OpenRouter</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span>Deepseek</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
