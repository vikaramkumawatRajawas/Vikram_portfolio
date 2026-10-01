import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check element under cursor for special hover states
      const target = e.target.closest('a, button, [data-cursor]');
      if (target) {
        setIsHovered(true);
        const cursorAttr = target.getAttribute('data-cursor');
        if (cursorAttr) {
          setHoverText(cursorAttr);
        } else if (target.classList.contains('project-thumb-container') || target.closest('.project-card')) {
          setHoverText('VIEW');
        } else {
          setHoverText('');
        }
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Center Gold Dot */}
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Outer Soft Ring / View Badge */}
      <div
        className={`cursor-ring ${isHovered ? 'cursor-expanded' : ''} ${hoverText ? 'has-text' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {hoverText && <span className="cursor-label">{hoverText}</span>}
      </div>

      <style>{`
        .cursor-dot {
          position: fixed;
          width: 8px;
          height: 8px;
          background: #FFD966;
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 10px #F5C542;
          transition: transform 0.1s ease, width 0.2s ease, height 0.2s ease;
        }

        .cursor-ring {
          position: fixed;
          width: 36px;
          height: 36px;
          border: 1.5px solid rgba(245, 197, 66, 0.6);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: width 0.25s ease-out, height 0.25s ease-out, border-color 0.25s ease, background 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(1px);
        }

        .cursor-ring.cursor-expanded {
          width: 54px;
          height: 54px;
          border-color: #F5C542;
          background: rgba(245, 197, 66, 0.1);
          box-shadow: 0 0 20px rgba(245, 197, 66, 0.3);
        }

        .cursor-ring.has-text {
          width: 64px;
          height: 64px;
          border-color: #FFD966;
          background: rgba(212, 167, 44, 0.85);
          backdrop-filter: blur(8px);
        }

        .cursor-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          font-weight: 700;
          color: #030303;
          letter-spacing: 1px;
        }
      `}</style>
    </>
  );
}
