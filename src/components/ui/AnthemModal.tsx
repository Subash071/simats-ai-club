import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Sparkles, Image as ImageIcon, ArrowLeft } from 'lucide-react';
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
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
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

  const toggleLogoView = () => {
    if (!showLogoImage) {
      if (videoRef.current) videoRef.current.pause();
      setShowLogoImage(true);
    } else {
      setShowLogoImage(false);
      if (videoRef.current) videoRef.current.play().catch(() => {});
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
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-background/80">
              <div className="flex items-center gap-3">
                {/* Clickable Logo inside popup to toggle Logo Image */}
                <button
                  type="button"
                  onClick={toggleLogoView}
                  className="relative group p-0 bg-transparent border-0 cursor-pointer focus:outline-none rounded-full"
                  aria-label="Toggle Club Logo"
                >
                  <img
                    src="/logo.png"
                    alt="Club Logo"
                    onError={(e) => { e.currentTarget.src = '/logo.jpg'; }}
                    className="w-9 h-9 rounded-full border-2 border-accent group-hover:scale-110 transition-transform object-cover shadow-sm"
                  />
                </button>

                <div>
                  <h3 className="text-sm md:text-base font-display font-bold text-foreground flex items-center gap-2">
                    {siteConfig.clubName}
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/30">
                      <Sparkles className="w-3 h-3" /> Official
                    </span>
                  </h3>
                  <p className="text-xs text-muted">
                    {showLogoImage ? "Official Emblem & Crest" : "Anthem & Logo Demonstration"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Toggle Button between Video and Logo */}
                <button
                  type="button"
                  onClick={toggleLogoView}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-accent/10 text-accent hover:bg-accent/20 border border-accent/30 transition-all cursor-pointer"
                >
                  {showLogoImage ? (
                    <>
                      <Play className="w-3.5 h-3.5 fill-accent" />
                      <span>Play Video</span>
                    </>
                  ) : (
                    <>
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>View Logo</span>
                    </>
                  )}
                </button>

                <button
                  onClick={closeAnthem}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-muted hover:text-foreground transition-colors cursor-pointer"
                  title="Close (Esc)"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
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
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-neutral-950/98 backdrop-blur-md flex flex-col items-center justify-center p-6 z-20"
                  >
                    <div className="flex flex-col items-center text-center max-w-sm">
                      <div className="p-2 rounded-full bg-gradient-to-tr from-accent/30 via-accent/10 to-transparent shadow-[0_0_50px_rgba(0,240,255,0.3)] mb-4">
                        <img
                          src="/logo.png"
                          alt="Official SIMATS AI Club Crest Logo"
                          onError={(e) => { e.currentTarget.src = '/logo.jpg'; }}
                          className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full object-cover border-2 border-accent shadow-2xl"
                        />
                      </div>
                      <h4 className="font-display font-bold text-lg md:text-xl text-foreground mb-1">
                        {siteConfig.clubName}
                      </h4>
                      <p className="text-xs md:text-sm text-accent mb-4">
                        Official Emblem &amp; Crest &bull; Saveetha University
                      </p>
                      
                      <button
                        type="button"
                        onClick={toggleLogoView}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-accent text-background font-semibold text-xs md:text-sm hover:bg-accent/90 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Back to Video
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-border bg-background/80">
              <div className="text-xs text-muted flex items-center gap-2">
                {showLogoImage ? (
                  <button
                    type="button"
                    onClick={toggleLogoView}
                    className="text-accent hover:underline flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Return to video playback
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={toggleLogoView}
                    className="text-accent hover:underline flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <ImageIcon className="w-3.5 h-3.5" /> Click logo to view high-res emblem
                  </button>
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
