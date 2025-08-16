import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-gradient-to-r from-primary to-secondary"></div>
            <span className="text-xl font-bold font-[var(--font-heading)]">Infernet</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-muted-foreground hover:text-accent transition-colors">
              How It Works
            </a>
            <a href="#developers" className="text-muted-foreground hover:text-accent transition-colors">
              For Developers
            </a>
            <a href="#features" className="text-muted-foreground hover:text-accent transition-colors">
              Features
            </a>
            <Button className="glow">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-heading)] mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Unlock a New AI Economy
          </h1>
          <p className="text-xl md:text-2xl font-[var(--font-heading)] mb-4 text-muted-foreground">
            A Global Compute Layer for the Onchain World
          </p>
          <p className="text-lg mb-8 text-muted-foreground max-w-3xl mx-auto">
            Infernet is a permissionless P2P network connecting idle GPU power with AI agents and developers, enabling
            dynamic pricing and trustless, per-request micropayments with X402.
          </p>
          <Button size="lg" className="glow text-lg px-8 py-4">
            Launch App
          </Button>
        </div>

        {/* Hero Illustration */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-2xl">
            <div className="grid grid-cols-3 gap-4 opacity-20">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="h-16 w-16 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-24 w-24 rounded-full bg-gradient-to-r from-primary to-secondary glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Opportunity Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="text-2xl font-[var(--font-heading)] text-destructive">
                  The Centralized Bottleneck
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-destructive"></div>
                  <span>Fixed pricing and high costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-destructive"></div>
                  <span>Censorship & geo-restrictions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-destructive"></div>
                  <span>Wasted GPU resources globally</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-destructive"></div>
                  <span>Limited model access</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-[var(--font-heading)] text-primary">
                  The Infernet Advantage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>True market competition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Censorship-resistant inference</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Monetize your idle hardware</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Access any model, anywhere</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold font-[var(--font-heading)] text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Provider Onboarding", desc: "Register your GPU node using a simple CLI command" },
              {
                step: "2",
                title: "On-Chain Discovery",
                desc: "Node availability and pricing registered on Base smart contract",
              },
              { step: "3", title: "Client Request", desc: "Developers use SDK to find the best provider" },
              { step: "4", title: "Atomic Micropayment", desc: "Per-request payment sent instantly via X402" },
              {
                step: "5",
                title: "Trustless Execution",
                desc: "Provider performs inference and returns verified result",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-2xl font-bold mx-auto mb-4 glow">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold font-[var(--font-heading)] mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Developers Section */}
      <section id="developers" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-[var(--font-heading)] mb-4">Build on the Infernet Protocol</h2>
            <p className="text-xl text-muted-foreground">Seamless integration for dApps and AI agents</p>
          </div>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">SDK Integration Example</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-background p-4 rounded-lg text-sm overflow-x-auto">
                <code className="text-primary">{`import { InfernetClient } from '@infernet/sdk'

const client = new InfernetClient({
  network: 'base',
  apiKey: process.env.INFERNET_API_KEY
})

// Find available providers
const providers = await client.findProviders({
  model: 'llama-2-7b',
  maxPrice: 0.001,
  region: 'us-east'
})

// Execute inference
const result = await client.inference({
  provider: providers[0].id,
  prompt: 'Explain quantum computing',
  maxTokens: 100
})

console.log(result.output)`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-6 w-6 rounded bg-gradient-to-r from-primary to-secondary"></div>
                <span className="text-lg font-bold font-[var(--font-heading)]">Infernet</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Decentralized AI inference network for the future of compute.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Developers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    SDK
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Examples
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 Infernet. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
