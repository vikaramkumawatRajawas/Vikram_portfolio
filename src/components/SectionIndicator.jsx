import React from 'react';

export default function SectionIndicator({ scrollProgress = 0 }) {
  const sections = [
    { id: 'hero', label: '01 HERO', range: [0, 15] },
    { id: 'about', label: '02 ABOUT', range: [15, 32] },
    { id: 'skills', label: '03 SKILLS', range: [32, 48] },
    { id: 'projects', label: '04 PROJECTS', range: [48, 68] },
    { id: 'education', label: '05 EDUCATION', range: [68, 85] },
    { id: 'contact', label: '06 CONTACT', range: [85, 100] },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="section-indicator-sidebar">
      <div className="indicator-track">
        <div
          className="indicator-fill"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      <div className="indicator-list">
        {sections.map((sec) => {
          const isActive =
            scrollProgress >= sec.range[0] && scrollProgress <= sec.range[1];

          return (
            <button
              key={sec.id}
              className={`indicator-item ${isActive ? 'active' : ''}`}
              onClick={() => scrollToSection(sec.id)}
              title={`Scroll to ${sec.label}`}
            >
              <span className="indicator-dot" />
              <span className="indicator-label">{sec.label}</span>
            </button>
          );
        })}
      </div>

      <style>{`
        .section-indicator-sidebar {
          position: fixed;
          left: 2rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 1.2rem;
          pointer-events: auto;
        }

        .indicator-track {
          width: 2px;
          height: 180px;
          background: rgba(245, 197, 66, 0.15);
          position: relative;
          border-radius: 2px;
          overflow: hidden;
        }

        .indicator-fill {
          width: 100%;
          background: var(--gold-gradient, linear-gradient(135deg, #F5C542 0%, #FFD966 50%, #D4A72C 100%));
          box-shadow: 0 0 10px rgba(245, 197, 66, 0.8);
          transition: height 0.15s ease-out;
        }

        .indicator-list {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .indicator-item {
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.4);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 2px 0;
        }

        .indicator-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          transition: all 0.3s ease;
        }

        .indicator-item:hover {
          color: rgba(255, 255, 255, 0.9);
        }

        .indicator-item:hover .indicator-dot {
          background: #F5C542;
          box-shadow: 0 0 8px #F5C542;
          transform: scale(1.3);
        }

        .indicator-item.active {
          color: #F5C542;
          text-shadow: 0 0 12px rgba(245, 197, 66, 0.6);
        }

        .indicator-item.active .indicator-dot {
          background: #F5C542;
          box-shadow: 0 0 12px #F5C542, 0 0 20px #FFD966;
          transform: scale(1.6);
        }

        @media (max-width: 1024px) {
          .section-indicator-sidebar {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
