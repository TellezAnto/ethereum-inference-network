"use client"

interface Provider {
  name: string;
  logo: string;
  gradient: string;
}

const providers: Provider[] = [
  { name: "OpenAI", logo: "AI", gradient: "from-green-400 to-green-600" },
  { name: "Anthropic", logo: "A", gradient: "from-orange-400 to-red-500" },
  { name: "Deepseek", logo: "DS", gradient: "from-blue-400 to-purple-600" },
  { name: "ASI Alliance", logo: "ASI", gradient: "from-cyan-400 to-teal-600" },
  { name: "Meta", logo: "M", gradient: "from-blue-500 to-indigo-600" },
  { name: "Google", logo: "G", gradient: "from-red-400 to-yellow-500" },
  { name: "Mistral", logo: "MI", gradient: "from-purple-400 to-pink-600" },
  { name: "Cohere", logo: "C", gradient: "from-emerald-400 to-cyan-600" },
];

export default function ProviderCarousel() {
  const doubledProviders = [...providers, ...providers];

  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex animate-scroll-x space-x-4 w-max">
        {doubledProviders.map((provider, index) => (
          <div
            key={`${provider.name}-${index}`}
            className="flex items-center space-x-3 bg-card/50 backdrop-blur border border-border/30 rounded-full px-6 py-3 hover:bg-card/70 transition-all duration-300 whitespace-nowrap hover:scale-105"
          >
            <div className={`w-8 h-8 bg-gradient-to-br ${provider.gradient} rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
              {provider.logo}
            </div>
            <span className="text-foreground font-medium">{provider.name}</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
        ))}
      </div>
      
      {/* Gradient overlays for seamless scroll effect */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      
      <style jsx>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-x {
          animation: scroll-x 30s linear infinite;
        }
        
        .animate-scroll-x:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}