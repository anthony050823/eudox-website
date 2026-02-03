import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
  sessionId: string;
  onTrackEvent: (eventType: string, currentTime: number, duration: number) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, isOpen, onClose, sessionId, onTrackEvent }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [trackedMilestones, setTrackedMilestones] = useState({
    progress_25: false,
    progress_50: false,
    progress_75: false,
    complete: false,
  });
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // Auto-play when modal opens
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [isOpen]);

  // Video analytics tracking
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isOpen) return;

    const trackEvent = (eventType: string) => {
      if (!video.duration) return;
      onTrackEvent(eventType, Math.floor(video.currentTime), Math.floor(video.duration));
    };

    const handlePlay = () => trackEvent("play");
    const handlePause = () => trackEvent("pause");
    
    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const progress = (video.currentTime / video.duration) * 100;

      if (progress >= 25 && !trackedMilestones.progress_25) {
        setTrackedMilestones(prev => ({ ...prev, progress_25: true }));
        trackEvent("progress_25");
      } else if (progress >= 50 && !trackedMilestones.progress_50) {
        setTrackedMilestones(prev => ({ ...prev, progress_50: true }));
        trackEvent("progress_50");
      } else if (progress >= 75 && !trackedMilestones.progress_75) {
        setTrackedMilestones(prev => ({ ...prev, progress_75: true }));
        trackEvent("progress_75");
      }
    };

    const handleEnded = () => {
      if (!trackedMilestones.complete) {
        setTrackedMilestones(prev => ({ ...prev, complete: true }));
        trackEvent("complete");
      }
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [isOpen, trackedMilestones, onTrackEvent]);

  const toggleFullscreen = async () => {
    if (!videoRef.current) return;

    try {
      if (!isFullscreen) {
        if (videoRef.current.requestFullscreen) {
          await videoRef.current.requestFullscreen();
        } else if ((videoRef.current as any).webkitRequestFullscreen) {
          await (videoRef.current as any).webkitRequestFullscreen();
        } else if ((videoRef.current as any).mozRequestFullScreen) {
          await (videoRef.current as any).mozRequestFullScreen();
        } else if ((videoRef.current as any).msRequestFullscreen) {
          await (videoRef.current as any).msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
          await (document as any).mozCancelFullScreen();
        } else if ((document as any).msExitFullscreen) {
          await (document as any).msExitFullscreen();
        }
      }
    } catch (error) {
      console.error('Fullscreen error:', error);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const changeSpeed = (speed: number) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
    setShowSpeedMenu(false);
  };

  const speedOptions = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      <div 
        ref={containerRef}
        className="relative w-[95vw] h-[95vh] max-w-[1920px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white transition-colors"
          aria-label="Close video"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Video Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          <video
            ref={videoRef}
            className="max-w-full max-h-full w-auto h-auto"
            style={{ objectFit: 'contain' }}
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            src={videoUrl}
          >
            Your browser does not support the video tag.
          </video>

          {/* Custom Controls */}
          <div className="absolute bottom-6 left-6 right-6 flex gap-3 items-center z-10">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="bg-black/60 hover:bg-black/80 text-white border-none rounded-lg px-4 py-2.5 cursor-pointer text-sm font-semibold backdrop-blur-md transition-all flex items-center gap-2"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-4 w-4" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="h-4 w-4" />
                  <span>Play</span>
                </>
              )}
            </button>

            {/* Volume Control */}
            <div 
              className="relative"
              onMouseEnter={() => setShowVolumeSlider(true)}
              onMouseLeave={() => setShowVolumeSlider(false)}
            >
              <button
                onClick={toggleMute}
                className="bg-black/60 hover:bg-black/80 text-white border-none rounded-lg px-4 py-2.5 cursor-pointer text-sm font-semibold backdrop-blur-md transition-all"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </button>
              
              {showVolumeSlider && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black/80 p-3 rounded-lg backdrop-blur-md">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-20 rotate-[-90deg] origin-center"
                    style={{ 
                      accentColor: '#06b6d4',
                      height: '4px'
                    }}
                  />
                </div>
              )}
            </div>

            {/* Speed Control */}
            <div className="relative">
              <button
                onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                className="bg-black/60 hover:bg-black/80 text-white border-none rounded-lg px-4 py-2.5 cursor-pointer text-sm font-semibold backdrop-blur-md transition-all min-w-[70px]"
              >
                {playbackSpeed}x
              </button>

              {showSpeedMenu && (
                <div className="absolute bottom-full left-0 mb-2 bg-black/90 rounded-lg overflow-hidden backdrop-blur-md min-w-[100px]">
                  {speedOptions.map(speed => (
                    <button
                      key={speed}
                      onClick={() => changeSpeed(speed)}
                      className={`w-full px-4 py-2.5 text-white border-none cursor-pointer text-sm text-left transition-all ${
                        playbackSpeed === speed 
                          ? 'bg-cyan-500/30' 
                          : 'bg-transparent hover:bg-white/10'
                      }`}
                    >
                      {speed}x
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="bg-black/60 hover:bg-black/80 text-white border-none rounded-lg px-4 py-2.5 cursor-pointer text-sm font-semibold backdrop-blur-md transition-all flex items-center gap-2"
            >
              {isFullscreen ? (
                <>
                  <Minimize className="h-4 w-4" />
                  <span>Exit</span>
                </>
              ) : (
                <>
                  <Maximize className="h-4 w-4" />
                  <span>Full</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
