import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, ShieldCheck, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Pinned Fixed Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="modal-fixed-close-btn"
        aria-label="Close modal"
        title="Close (Esc)"
      >
        <X size={24} className="text-gold" />
      </button>

      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header Visual */}
        <div className="modal-image-wrapper">
          <img src={project.image} alt={project.title} className="modal-image" />
          <div className="modal-image-overlay" />
          <div className="modal-header-text">
            <span className="modal-badge">{project.subtitle}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="modal-body">
          <div className="modal-grid">
            {/* Left Column: Problem, Solution & Roles */}
            <div className="modal-main-info">
              <h3 className="modal-section-title">
                <Layers size={18} className="icon-gold" /> Overview & Problem Statement
              </h3>
              <p className="modal-text">{project.description}</p>

              {project.problem && (
                <>
                  <h4 className="modal-sub-title">The Challenge</h4>
                  <p className="modal-text">{project.problem}</p>
                </>
              )}

              {project.solution && (
                <>
                  <h4 className="modal-sub-title">The Engineering Solution</h4>
                  <p className="modal-text">{project.solution}</p>
                </>
              )}

              {project.roles && (
                <div className="roles-block">
                  <h4 className="modal-sub-title">
                    <ShieldCheck size={16} className="icon-gold" /> Supported User Roles
                  </h4>
                  <div className="roles-tags">
                    {project.roles.map((role, idx) => (
                      <span key={idx} className="role-tag">
                        <CheckCircle size={13} className="text-gold" /> {role}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Tech Stack & Actions */}
            <div className="modal-sidebar">
              <div className="sidebar-box glass-card">
                <h4 className="sidebar-title">
                  <Cpu size={16} className="icon-gold" /> Technologies
                </h4>
                <div className="tech-tags">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="modal-tech-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="modal-action-buttons">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold full-width"
                >
                  Live Demo <ExternalLink size={16} />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary full-width"
                >
                  <GithubIcon size={16} className="text-gold" /> View Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: rgba(3, 3, 3, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: modalFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-fixed-close-btn {
          position: fixed;
          top: 24px;
          right: 28px;
          z-index: 100000;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(16, 16, 16, 0.9);
          border: 1.5px solid var(--gold-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 0 25px var(--gold-glow);
          transition: all 0.25s ease;
        }

        .modal-fixed-close-btn:hover {
          background: var(--gold-gradient);
          transform: scale(1.1) rotate(90deg);
          box-shadow: 0 0 35px var(--gold-glow-intense);
        }

        .modal-fixed-close-btn:hover .text-gold {
          color: #030303;
        }

        .modal-container {
          max-width: 920px;
          width: 100%;
          max-height: 88vh;
          overflow-y: auto;
          position: relative;
          border: 1px solid var(--gold-primary);
          box-shadow: 0 25px 60px -10px rgba(0, 0, 0, 0.95), 0 0 40px var(--gold-glow);
          animation: modalSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-image-wrapper {
          position: relative;
          height: 320px;
          width: 100%;
          overflow: hidden;
        }

        .modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 20%, rgba(10, 10, 10, 0.98) 100%);
        }

        .modal-header-text {
          position: absolute;
          bottom: 24px;
          left: 32px;
          right: 32px;
        }

        .modal-badge {
          display: inline-block;
          font-family: var(--font-code);
          font-size: 0.85rem;
          color: var(--gold-bright);
          background: rgba(245, 197, 66, 0.15);
          border: 1px solid var(--bg-glass-border);
          padding: 4px 12px;
          border-radius: 12px;
          margin-bottom: 8px;
        }

        .modal-title {
          font-size: 2.2rem;
          color: var(--text-main);
        }

        .modal-body {
          padding: 32px;
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 32px;
        }

        .modal-section-title {
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          color: var(--gold-bright);
        }

        .modal-sub-title {
          font-size: 1.05rem;
          color: var(--text-main);
          margin-top: 20px;
          margin-bottom: 8px;
        }

        .modal-text {
          color: var(--text-muted);
          font-size: 0.98rem;
          line-height: 1.7;
        }

        .roles-block {
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid var(--bg-glass-border);
        }

        .roles-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 10px;
        }

        .role-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 8px;
          background: rgba(245, 197, 66, 0.08);
          border: 1px solid var(--bg-glass-border);
          font-family: var(--font-code);
          font-size: 0.85rem;
        }

        .sidebar-box {
          padding: 20px;
          margin-bottom: 24px;
        }

        .sidebar-title {
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
          color: var(--gold-bright);
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .modal-tech-tag {
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--bg-glass-border);
          font-family: var(--font-code);
          font-size: 0.8rem;
        }

        .modal-action-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .full-width {
          width: 100%;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 768px) {
          .modal-overlay {
            padding: 16px;
          }
          .modal-fixed-close-btn {
            top: 16px;
            right: 16px;
            width: 42px;
            height: 42px;
          }
          .modal-grid {
            grid-template-columns: 1fr;
          }
          .modal-image-wrapper {
            height: 220px;
          }
          .modal-title {
            font-size: 1.7rem;
          }
        }
      `}</style>
    </div>
  );
}
