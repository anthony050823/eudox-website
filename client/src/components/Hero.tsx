import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import AppWindow from "@/components/AppWindow";
import ChatDemo from "@/components/ChatDemo";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import VideoPlayer from "@/components/VideoPlayer";

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);

  const trackVideoMutation = trpc.analytics.trackVideo.useMutation();
  console.log('Video analytics session ID:', sessionId);

  const handleWatchDemo = () => {
    setIsVideoModalOpen(true);
  };

  const handleTrackEvent = (eventType: string, currentTime: number, duration: number) => {
    trackVideoMutation.mutate({
      sessionId,
      eventType: eventType as "play" | "pause" | "progress_25" | "progress_50" | "progress_75" | "complete",
      videoUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663218911035/DzQUFbBRJsWqGlOg.mov",
      currentTime,
      duration,
      userAgent: navigator.userAgent,
    });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0B102C] dark:bg-[#0B102C] bg-gradient-to-b from-gray-50 to-white dark:from-[#0B102C] dark:to-[#0B102C]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663218911035/kSTMhAwVVJNPHrMz.png" 
          alt="Digital Horizon Background" 
          className="w-full h-full object-cover opacity-0 dark:opacity-60 transition-opacity duration-300"
          fallbackClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-[#0B102C]/30 dark:via-transparent dark:to-[#0B102C]"></div>
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-white/10 backdrop-blur-md border border-cyan-500/30 dark:border-white/20 text-xs font-medium text-cyan-600 dark:text-cyan-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Now in Early Access
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
            Autonomous <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff]">
              Deal Sourcing
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
            The first AI agent to proactively find private-market opportunities and autonomously source deals for M&A professionals.
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
              className="bg-gray-100 dark:bg-white/5 backdrop-blur-sm border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 rounded-xl h-14 px-8 text-base"
              onClick={handleWatchDemo}
            >
              <Play className="mr-2 h-4 w-4 fill-current" /> Watch Demo
            </Button>
          </div>
          
          <div className="pt-8 flex flex-wrap items-center gap-4 sm:gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white text-2xl">16M+</p>
              <p>Companies Tracked</p>
            </div>
            <div className="w-px h-10 bg-gray-300 dark:bg-white/10"></div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white text-2xl">24/7</p>
              <p>Real-time Monitoring</p>
            </div>
            <div className="w-px h-10 bg-gray-300 dark:bg-white/10"></div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white text-2xl">10x</p>
              <p>Faster Origination</p>
            </div>
          </div>
        </div>
        
        <div className="relative hidden lg:block animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
          {/* Real App Demo */}
          <AppWindow>
            <ChatDemo />
          </AppWindow>
        </div>
      </div>

      {/* Video Player Modal */}
      <VideoPlayer
        videoUrl="https://files.manuscdn.com/user_upload_by_module/session_file/310519663218911035/DzQUFbBRJsWqGlOg.mov"
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        sessionId={sessionId}
        onTrackEvent={handleTrackEvent}
      />
    </section>
  );
}
