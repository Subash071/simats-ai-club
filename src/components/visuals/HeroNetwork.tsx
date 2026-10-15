import React, { useEffect, useRef } from 'react';

export function HeroNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let scrollY = 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Star layers
    const layers = [
      { speed: 0.1, stars: [] as any[], count: 100, radius: 0.8 },
      { speed: 0.3, stars: [] as any[], count: 50, radius: 1.5 },
      { speed: 0.6, stars: [] as any[], count: 25, radius: 2.2 },
    ];

    let shootingStars: any[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      layers.forEach(layer => {
        layer.stars = [];
        for (let i = 0; i < layer.count; i++) {
          layer.stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            opacity: Math.random(),
            baseOpacity: Math.random() * 0.5 + 0.1,
            twinkleSpeed: Math.random() * 0.02 + 0.005,
          });
        }
      });
    };

    const drawStar = (x: number, y: number, radius: number, opacity: number) => {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 240, 255, ${opacity})`;
      ctx.fill();
      // Optional subtle glow
      ctx.shadowBlur = radius * 4;
      ctx.shadowColor = 'rgba(0, 240, 255, 0.8)';
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    let currentMouseOffset = { x: 0, y: 0 };
    let targetMouseOffset = { x: 0, y: 0 };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse interpolation (lerp)
      targetMouseOffset.x = (mouse.x - canvas.width / 2) * 0.15; // Increased sensitivity (0.15 instead of 0.05)
      targetMouseOffset.y = (mouse.y - canvas.height / 2) * 0.15;

      currentMouseOffset.x += (targetMouseOffset.x - currentMouseOffset.x) * 0.05;
      currentMouseOffset.y += (targetMouseOffset.y - currentMouseOffset.y) * 0.05;

      // Draw stars
      layers.forEach((layer) => {
        layer.stars.forEach((star) => {
          // Twinkle effect
          if (!prefersReducedMotion) {
            star.opacity += star.twinkleSpeed;
            if (star.opacity > 1 || star.opacity < star.baseOpacity) {
              star.twinkleSpeed = -star.twinkleSpeed;
            }
          }

          // Parallax and scroll calculation
          let x = star.x + (currentMouseOffset.x * layer.speed);
          let y = star.y + (currentMouseOffset.y * layer.speed) - (scrollY * layer.speed);

          // Wrap around screen
          x = (x % canvas.width + canvas.width) % canvas.width;
          y = (y % canvas.height + canvas.height) % canvas.height;

          drawStar(x, y, layer.radius, star.opacity);
        });
      });

      // Shooting stars
      if (!prefersReducedMotion && Math.random() < 0.08 && shootingStars.length < 5) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: -50, // Start slightly above screen
          length: Math.random() * 100 + 40,
          speed: Math.random() * 15 + 15, // Faster
          angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
          opacity: 1
        });
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity -= 0.015;

        if (ss.opacity <= 0 || ss.x > canvas.width || ss.y > canvas.height) {
          shootingStars.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x - Math.cos(ss.angle) * ss.length, ss.y - Math.sin(ss.angle) * ss.length);
        
        const gradient = ctx.createLinearGradient(
          ss.x, ss.y,
          ss.x - Math.cos(ss.angle) * ss.length, ss.y - Math.sin(ss.angle) * ss.length
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
        gradient.addColorStop(1, 'rgba(0, 240, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-80"
      style={{ mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  );
}
