import React from "react"

const Logo = () => {
  return (
    <svg
    className="h-8 w-8"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
      >
    <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" className="text-primary" stopColor="currentColor" />
    <stop offset="100%" className="text-secondary" stopColor="currentColor" />
    </linearGradient>
    </defs>
    <g fill="url(#logoGradient)">
    {/* Central neural network hub */}
    <circle cx="16" cy="16" r="3" />

    {/* Network nodes */}
    <circle cx="8" cy="8" r="2" />
    <circle cx="24" cy="8" r="2" />
    <circle cx="8" cy="24" r="2" />
    <circle cx="24" cy="24" r="2" />
    <circle cx="16" cy="4" r="1.5" />
    <circle cx="4" cy="16" r="1.5" />
    <circle cx="28" cy="16" r="1.5" />
    <circle cx="16" cy="28" r="1.5" />

    {/* Connection lines */}
    <line x1="16" y1="16" x2="8" y2="8" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.7" />
    <line x1="16" y1="16" x2="24" y2="8" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.7" />
    <line x1="16" y1="16" x2="8" y2="24" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.7" />
    <line x1="16" y1="16" x2="24" y2="24" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.7" />
    <line x1="16" y1="16" x2="16" y2="4" stroke="url(#logoGradient)" strokeWidth="1" opacity="0.5" />
    <line x1="16" y1="16" x2="4" y2="16" stroke="url(#logoGradient)" strokeWidth="1" opacity="0.5" />
    <line x1="16" y1="16" x2="28" y2="16" stroke="url(#logoGradient)" strokeWidth="1" opacity="0.5" />
    <line x1="16" y1="16" x2="16" y2="28" stroke="url(#logoGradient)" strokeWidth="1" opacity="0.5" />
    </g>
    </svg>
  )
}

export default Logo
