import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Sparkles } from 'lucide-react';
import { useAnthemModal } from '../../context/AnthemModalContext';
import { siteConfig } from '../../data/siteConfig';

export function AnthemModal() {
  const { isOpen, closeAnthem } = useAnthemModal();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeAnthem();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Try to play video automatically when opened
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // Fallback if browser blocks sound autoplay
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          }
        });
      }
    } else {
      document.body.style.overflow = '';
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeAnthem]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeAnthem}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-card/95 border border-accent/40 rounded-2xl shadow-[0_0_60px_rgba(0,240,255,0.25)] overflow-hidden flex flex-col z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-background/60">
              <div className="flex items-center gap-3">
                <img
                  src={siteConfig.logo}
                  alt="Club Logo"
                  className="w-8 h-8 rounded-full border border-accent/40 object-cover shadow-sm"
                />
                <div>
                  <h3 className="text-sm md:text-base font-display font-bold text-foreground flex items-center gap-2">
                    {siteConfig.clubName}
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/30">
                      <Sparkles className="w-3 h-3" /> Official Anthem
                    </span>
                  </h3>
                  <p className="text-xs text-muted">
                    Official Logo &amp; Anthem Demonstration
                  </p>
                </div>
              </div>

              <button
                onClick={closeAnthem}
                className="p-2 rounded-full hover:bg-white/10 text-muted hover:text-foreground transition-colors"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              <video
                ref={videoRef}
                src="/anthem.mp4"
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-border bg-background/60">
              <div className="text-xs text-muted flex items-center gap-2">
                <Play className="w-3.5 h-3.5 text-accent fill-accent" />
                <span>Click play with sound to enjoy the full anthem</span>
              </div>
              <button
                onClick={closeAnthem}
                className="px-4 py-1.5 text-xs md:text-sm font-medium rounded-lg bg-accent text-background hover:bg-accent/90 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              >
                Continue to Website
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
