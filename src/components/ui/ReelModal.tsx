import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Heart, Instagram, ExternalLink, Eye } from 'lucide-react';
import { InstagramReel, CAFE_INFO } from '../../data/cafeData';

interface ReelModalProps {
  reel: InstagramReel | null;
  onClose: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ reel, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (reel && videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsMuted(true);
        if (videoRef.current) videoRef.current.play();
      });
      setIsPlaying(true);
    }
  }, [reel]);

  if (!reel) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-brand-darkgreen/90 backdrop-blur-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center transition-colors focus:outline-none shadow-lg border border-white/20"
          aria-label="Close reel player"
        >
          <X className="w-6 h-6" />
        </button>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-sm sm:max-w-md aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-brand-tan/30 flex flex-col justify-between"
        >
          {/* Video Stream */}
          <video
            ref={videoRef}
            src={reel.videoUrl}
            poster={reel.thumbnail}
            loop
            playsInline
            muted={isMuted}
            onClick={togglePlay}
            className="absolute inset-0 w-full h-full object-cover cursor-pointer"
          />

          {/* Top Bar Overlay */}
          <div className="relative z-20 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-brand-green/90 text-brand-ivory text-[10px] font-semibold tracking-wider uppercase backdrop-blur-md flex items-center gap-1 border border-brand-tan/30">
                <Instagram className="w-3 h-3 text-brand-tan" />
                REEL
              </span>
              <span className="text-xs font-medium text-white/80">{reel.tag}</span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center backdrop-blur-md"
                aria-label="Toggle mute"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-brand-tan" /> : <Volume2 className="w-4 h-4 text-white" />}
              </button>
            </div>
          </div>

          {/* Center Play/Pause Indicator Overlay */}
          <div
            onClick={togglePlay}
            className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
          >
            {!isPlaying && (
              <div className="w-16 h-16 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl">
                <Play className="w-8 h-8 text-brand-tan ml-1" />
              </div>
            )}
          </div>

          {/* Bottom Bar Overlay */}
          <div className="relative z-20 p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white space-y-3">
            {/* Social Engagement Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs font-semibold">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="flex items-center gap-1.5 text-white hover:text-rose-400 transition-colors"
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-rose-500 text-rose-500' : 'text-white'}`} />
                  <span>{reel.likes}</span>
                </button>

                <div className="flex items-center gap-1.5 text-white/80">
                  <Eye className="w-4 h-4 text-brand-tan" />
                  <span>{reel.views} views</span>
                </div>
              </div>
            </div>

            {/* Caption */}
            <p className="text-xs sm:text-sm font-light text-stone-200 line-clamp-3 leading-relaxed font-sans">
              {reel.caption}
            </p>

            {/* Direct CTA */}
            <a
              href={CAFE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full py-3 px-4 rounded-full bg-brand-green text-brand-ivory text-xs font-semibold uppercase tracking-wider hover:bg-brand-darkgreen transition-all shadow-lg flex items-center justify-center gap-2 border border-brand-tan/30"
            >
              <Instagram className="w-4 h-4 text-brand-tan" />
              Watch on {CAFE_INFO.instagram}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
