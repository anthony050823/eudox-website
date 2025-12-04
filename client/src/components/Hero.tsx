import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0B102C]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.png" 
          alt="Digital Horizon Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B102C]/30 via-transparent to-[#f5f6fb] dark:to-[#0B102C]"></div>
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-cyan-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Now in Early Access
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Autonomous <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff]">
              Deal Sourcing
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
            Stop searching. Start discovering. The first AI agent engineered to proactively find private market opportunities before they hit the market.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff] hover:opacity-90 text-white border-0 rounded-xl shadow-lg shadow-cyan-500/25 h-14 px-8 text-base"
              onClick={() => {
                const element = document.querySelector("#early-access");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Early Access <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 rounded-xl h-14 px-8 text-base"
            >
              <Play className="mr-2 h-4 w-4 fill-current" /> Watch Demo
            </Button>
          </div>
          
          <div className="pt-8 flex items-center gap-8 text-sm text-gray-400">
            <div>
              <p className="font-semibold text-white text-2xl">16M+</p>
              <p>Companies Tracked</p>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div>
              <p className="font-semibold text-white text-2xl">24/7</p>
              <p>Real-time Monitoring</p>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div>
              <p className="font-semibold text-white text-2xl">10x</p>
              <p>Faster Origination</p>
            </div>
          </div>
        </div>
        
        <div className="relative hidden lg:block animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
          {/* Abstract UI Representation */}
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs text-gray-400 font-mono">agent_status: active</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4ee8dc] to-[#3dc4ff] flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                    <div className="h-16 w-full bg-white/5 rounded-lg border border-white/5 p-3">
                      <div className="h-2 w-3/4 bg-white/10 rounded-full mb-2"></div>
                      <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-32 bg-white/20 rounded-full"></div>
                    <div className="h-2 w-full bg-white/5 rounded-full"></div>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#4ee8dc]/10 to-[#3dc4ff]/10 border border-[#4ee8dc]/20 mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-cyan-300 font-medium">Signal Detected</span>
                    <span className="text-[10px] text-cyan-300/70">Just now</span>
                  </div>
                  <p className="text-sm text-gray-200">
                    High-intent acquisition target identified in Fintech sector. Revenue growth &gt; 40% YoY.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Match Found</div>
                  <div className="text-xs text-gray-400">98% Compatibility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
