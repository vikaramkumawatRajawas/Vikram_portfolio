import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="floating-back-to-top"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={20} className="arrow-icon" />

      <style>{`
        .floating-back-to-top {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 1000;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #D4A72C, #FFD966, #F5C542);
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: #030303;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5), 0 0 20px rgba(245, 197, 66, 0.4);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          animation: popUp 0.3s ease-out;
        }

        .floating-back-to-top:hover {
          transform: translateY(-6px) scale(1.1) rotate(-8deg);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7), 0 0 30px rgba(255, 217, 102, 0.7);
        }

        .arrow-icon {
          transition: transform 0.2s ease;
        }

        .floating-back-to-top:hover .arrow-icon {
          transform: translateY(-2px);
        }

        @keyframes popUp {
          from { opacity: 0; transform: scale(0.5) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @media (max-width: 768px) {
          .floating-back-to-top {
            bottom: 24px;
            right: 20px;
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </button>
  );
}
