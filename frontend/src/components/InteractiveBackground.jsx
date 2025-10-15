import React, { useEffect, useRef } from 'react';
import './InteractiveBackground.css';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const gradientRef = useRef({ x: 50, y: 50 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Smooth interpolation towards mouse position
      gradientRef.current.x += (mouseRef.current.x - gradientRef.current.x) * 0.05;
      gradientRef.current.y += (mouseRef.current.y - gradientRef.current.y) * 0.05;

      // Create gradient
      const gradient = ctx.createRadialGradient(
        (gradientRef.current.x / 100) * canvas.width,
        (gradientRef.current.y / 100) * canvas.height,
        0,
        (gradientRef.current.x / 100) * canvas.width,
        (gradientRef.current.y / 100) * canvas.height,
        canvas.width * 0.8
      );

      gradient.addColorStop(0, 'rgba(138, 116, 249, 0.4)');
      gradient.addColorStop(0.3, 'rgba(99, 102, 241, 0.3)');
      gradient.addColorStop(0.6, 'rgba(59, 130, 246, 0.2)');
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0)');

      // Clear and fill
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="interactive-bg-canvas" />
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
    </>
  );
};

export default InteractiveBackground;
