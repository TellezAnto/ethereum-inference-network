import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"
import Logo from "@/components/Logo"
import Link from "next/link"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "E I N - Decentralized AI Inference Network",
  description: "A permissionless P2P network connecting idle GPU power with AI agents and developers",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${openSans.variable}`}>
      <head>
        <style>{`
html {
  font-family: ${openSans.style.fontFamily};
  --font-sans: ${openSans.variable};
  --font-heading: ${workSans.variable};
}
        `}</style>
      </head>
      <body className="dark">
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link href={"/"} className="flex items-center space-x-2">
            <Logo/>
              <span className="text-xl font-bold font-[var(--font-heading)]">
                EIN
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="/#pricing"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Pricing
              </a>
              <a
                href="/#features"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Features
              </a>
              <a
                href="/open-router"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Browse Models
              </a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
