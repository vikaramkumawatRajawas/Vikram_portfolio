import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 300);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 800);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-content">
        {/* Glowing Gold Orbit & Circle */}
        <div className="loader-ring-wrapper">
          <div className="loader-orbit" />
          <div className="loader-ring-glow" />
          <div className="logo-box">
            <span className="logo-initials">VK</span>
          </div>
        </div>

        {/* Text & Status */}
        <h2 className="loading-name">VIKRAM KUMAWAT</h2>
        <p className="loading-title">&lt;/&gt; BACKEND DEVELOPER</p>

        {/* Progress Bar & Percentage */}
        <div className="progress-container">
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="progress-text">{progress}%</span>
        </div>
      </div>

      <style>{`
        .loading-screen {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #030303;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.5s;
        }

        .loading-screen.fade-out {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .loader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .loader-ring-wrapper {
          position: relative;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
        }

        .loader-orbit {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: #F5C542;
          border-right-color: #FFD966;
          animation: spinOrbit 1.2s linear infinite;
        }

        .loader-ring-glow {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(245, 197, 66, 0.25);
          box-shadow: 0 0 25px rgba(245, 197, 66, 0.3);
          animation: pulseRing 2s ease-in-out infinite alternate;
        }

        .logo-box {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #070707, #151515);
          border: 1px solid rgba(245, 197, 66, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(245, 197, 66, 0.2);
        }

        .logo-initials {
          font-family: 'Outfit', sans-serif;
          font-size: 2.2rem;
          font-weight: 900;
          background: linear-gradient(135deg, #D4A72C, #FFD966, #F5C542);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 1px;
        }

        .loading-name {
          font-family: 'Outfit', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: 3px;
          margin-bottom: 6px;
        }

        .loading-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.82rem;
          color: #F5C542;
          letter-spacing: 2px;
          margin-bottom: 28px;
        }

        .progress-container {
          width: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .progress-bar-track {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(135deg, #D4A72C, #FFD966, #F5C542);
          box-shadow: 0 0 10px #FFD966;
          transition: width 0.15s ease-out;
          border-radius: 4px;
        }

        .progress-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          color: #8D8D8D;
        }

        @keyframes spinOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.06); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
