import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = { x: width / 2, y: height / 2 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particle count: low density so as not to distract
    const particleCount = Math.min(Math.floor(window.innerWidth / 30), 45);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.4 ? '#F5C542' : '#FFD966',
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Floating Metallic Dust
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Mouse subtle repulsion/attraction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          p.x -= (dx / dist) * 0.5;
          p.y -= (dy / dist) * 0.5;
        }

        // Screen wrap
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();

        // Connect close particles with subtle line
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (pdist < 90) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#D4A72C';
            ctx.globalAlpha = (1 - pdist / 90) * 0.12;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="particle-bg-wrapper">
      <canvas ref={canvasRef} className="particle-canvas" />

      {/* Animated Abstract Gold Light Trails */}
      <div className="gold-trail trail-1" />
      <div className="gold-trail trail-2" />
      <div className="gold-trail trail-3" />

      <style>{`
        .particle-bg-wrapper {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .particle-canvas {
          width: 100%;
          height: 100%;
          display: block;
        }

        .gold-trail {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.12;
          pointer-events: none;
          animation: floatTrail 20s ease-in-out infinite alternate;
        }

        .trail-1 {
          width: 600px;
          height: 600px;
          top: -100px;
          left: -100px;
          background: radial-gradient(circle, #F5C542 0%, transparent 70%);
        }

        .trail-2 {
          width: 500px;
          height: 500px;
          top: 40%;
          right: -150px;
          background: radial-gradient(circle, #FFD966 0%, transparent 70%);
          animation-delay: -7s;
        }

        .trail-3 {
          width: 700px;
          height: 700px;
          bottom: -200px;
          left: 20%;
          background: radial-gradient(circle, #D4A72C 0%, transparent 70%);
          animation-delay: -14s;
        }

        @keyframes floatTrail {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 60px) scale(1.15); }
          100% { transform: translate(-30px, -40px) scale(0.9); }
        }
      `}</style>
    </div>
  );
}
