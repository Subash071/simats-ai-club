import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Sparkles, Image as ImageIcon, ArrowLeft, ZoomIn } from 'lucide-react';
import { useAnthemModal } from '../../context/AnthemModalContext';
import { siteConfig } from '../../data/siteConfig';

export function AnthemModal() {
  const { isOpen, closeAnthem } = useAnthemModal();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showLogoImage, setShowLogoImage] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        if (showLogoImage) {
          setShowLogoImage(false);
          if (videoRef.current) videoRef.current.play().catch(() => {});
        } else {
          closeAnthem();
        }
      }
    };

    if (isOpen) {
      setShowLogoImage(false);
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
      setShowLogoImage(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeAnthem, showLogoImage]);

  const handleLogoClick = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setShowLogoImage(true);
  };

  const handleBackToVideo = () => {
    setShowLogoImage(false);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

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
                {/* Clickable Logo inside popup to view full Logo Image */}
                <button
                  type="button"
                  onClick={handleLogoClick}
                  title="Click to view full Logo image"
                  className="relative group p-0 bg-transparent border-0 cursor-pointer focus:outline-none rounded-full"
                >
                  <img
                    src={siteConfig.logo}
                    alt="Club Logo"
                    className="w-9 h-9 rounded-full border-2 border-accent/60 group-hover:border-accent group-hover:scale-110 transition-all object-cover shadow-sm"
                  />
                  <span className="absolute -bottom-1 -right-1 bg-accent text-background rounded-full p-0.5 shadow-md scale-80 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                </button>

                <div>
                  <h3 className="text-sm md:text-base font-display font-bold text-foreground flex items-center gap-2">
                    {siteConfig.clubName}
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/30">
                      <Sparkles className="w-3 h-3" /> Official Anthem
                    </span>
                  </h3>
                  <p className="text-xs text-muted flex items-center gap-1">
                    <span>Official Logo &amp; Anthem Demonstration</span>
                    <span className="text-accent/80">&bull; Click logo to view full image</span>
                  </p>
                </div>
              </div>

              <button
                onClick={closeAnthem}
                className="p-2 rounded-full hover:bg-white/10 text-muted hover:text-foreground transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Area (Video Player OR Full Logo Image View) */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              {/* Video Player */}
              <video
                ref={videoRef}
                src="/anthem.mp4"
                controls
                autoPlay
                playsInline
                preload="metadata"
                className={`w-full h-full object-contain transition-opacity duration-300 ${showLogoImage ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                Your browser does not support the video tag.
              </video>

              {/* Logo Image Full View Overlay */}
              <AnimatePresence>
                {showLogoImage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-6 z-20"
                  >
                    <div className="relative group max-w-xs md:max-w-sm flex flex-col items-center text-center">
                      <div className="relative p-2 rounded-full bg-gradient-to-tr from-accent/40 via-purple-500/30 to-accent/40 shadow-[0_0_60px_rgba(0,240,255,0.35)] mb-4">
                        <img
                          src={siteConfig.logo}
                          alt="Official SIMATS AI Club Crest Logo"
                          className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-accent shadow-2xl"
                        />
                      </div>
                      <h4 className="font-display font-bold text-lg md:text-xl text-foreground mb-1">
                        {siteConfig.clubName}
                      </h4>
                      <p className="text-xs md:text-sm text-accent mb-5">
                        Official Emblem &amp; Crest &bull; Saveetha University
                      </p>
                      
                      <button
                        type="button"
                        onClick={handleBackToVideo}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-accent text-background font-semibold text-sm hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Anthem Video
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-border bg-background/60">
              <div className="text-xs text-muted flex items-center gap-2">
                {showLogoImage ? (
                  <button
                    type="button"
                    onClick={handleBackToVideo}
                    className="text-accent hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Return to video playback
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={handleLogoClick}
                      className="text-accent hover:underline flex items-center gap-1 cursor-pointer font-medium"
                    >
                      <ImageIcon className="w-3.5 h-3.5" /> View Logo Image
                    </button>
                    <span className="hidden sm:inline text-muted/60">|</span>
                    <span className="hidden sm:inline">Click video to play with sound</span>
                  </>
                )}
              </div>
              <button
                onClick={closeAnthem}
                className="px-4 py-1.5 text-xs md:text-sm font-medium rounded-lg bg-accent text-background hover:bg-accent/90 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer"
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
