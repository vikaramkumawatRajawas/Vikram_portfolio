import React from 'react';
import { Mail, ArrowUp, Code2, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, InstagramIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'profiles', label: 'Profiles' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="footer-section">
      {/* Animated Wave / Gold Light Trails Background */}
      <div className="wave-container">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax-wave">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(245, 197, 66, 0.03)" />
            <use href="#gentle-wave" x="48" y="3" fill="rgba(255, 217, 102, 0.05)" />
            <use href="#gentle-wave" x="48" y="5" fill="rgba(212, 167, 44, 0.08)" />
          </g>
        </svg>
      </div>

      <div className="container footer-main-content">
        {/* Grid Columns */}
        <div className="footer-grid">
          {/* Column 1: Brand & Bio */}
          <div className="footer-brand-col">
            <div className="f-logo-row">
              <div className="f-logo-badge">
                <span>VK</span>
              </div>
              <div>
                <h3 className="f-name">Vikram Kumawat</h3>
                <p className="f-role">Backend Developer</p>
              </div>
            </div>

            <p className="f-tagline">
              Building practical software solutions with a backend-first mindset.
            </p>

            <div className="f-location-badge">
              <MapPin size={14} className="text-gold" /> Jaipur, Rajasthan, India
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="f-col-title">Navigation</h4>
            <div className="f-nav-links">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="f-nav-link"
                >
                  <Code2 size={13} className="text-gold" /> {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Connect & Socials */}
          <div className="footer-social-col">
            <h4 className="f-col-title">Connect</h4>
            <p className="f-connect-desc">
              Reach out across developer platforms or via direct email.
            </p>

            <div className="footer-socials">
              <a
                href="https://github.com/vikaramkumawatRajawas"
                target="_blank"
                rel="noopener noreferrer"
                className="f-social-btn"
                title="Open Source"
                data-cursor="Open Source"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/vikram-kumawat-8267922b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="f-social-btn"
                title="Connect With Me"
                data-cursor="Connect With Me"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://leetcode.com/u/vikramkumawat9351/"
                target="_blank"
                rel="noopener noreferrer"
                className="f-social-btn"
                title="Solve & Learn"
                data-cursor="Solve & Learn"
              >
                <LeetcodeIcon size={18} />
              </a>
              <a
                href="https://www.instagram.com/my_lord_hanuman_123"
                target="_blank"
                rel="noopener noreferrer"
                className="f-social-btn"
                title="Follow Me"
                data-cursor="Follow Me"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="mailto:kumawatvikram642@gmail.com"
                className="f-social-btn"
                title="Send Email"
                data-cursor="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Separator Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © 2026 Vikram Kumawat. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="back-to-top-btn" title="Back to top">
            <ArrowUp size={16} className="text-gold" /> Top
          </button>
        </div>
      </div>

      <style>{`
        .footer-section {
          position: relative;
          background: var(--bg-rich);
          border-top: 1px solid var(--bg-glass-border);
          padding-top: 60px;
          padding-bottom: 36px;
          overflow: hidden;
        }

        .wave-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          overflow: hidden;
          pointer-events: none;
        }

        .waves {
          width: 100%;
          height: 100%;
        }

        .parallax-wave > use {
          animation: moveWave 25s cubic-bezier(.55,.5,.45,.5) infinite;
        }
        .parallax-wave > use:nth-child(1) {
          animation-delay: -2s;
          animation-duration: 7s;
        }
        .parallax-wave > use:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 10s;
        }
        .parallax-wave > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 13s;
        }

        @keyframes moveWave {
          0% { transform: translate3d(-90px,0,0); }
          100% { transform: translate3d(85px,0,0); }
        }

        .footer-main-content {
          position: relative;
          z-index: 2;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1.2fr;
          gap: 40px;
          margin-bottom: 48px;
        }

        .f-logo-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }

        .f-logo-badge {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: var(--gold-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #030303;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.2rem;
          box-shadow: 0 0 15px var(--gold-glow);
        }

        .f-name {
          font-size: 1.2rem;
          color: var(--text-main);
        }

        .f-role {
          font-family: var(--font-code);
          font-size: 0.8rem;
          color: var(--gold-primary);
        }

        .f-tagline {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 16px;
          max-width: 320px;
        }

        .f-location-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          color: var(--text-dim);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--bg-glass-border);
          padding: 4px 12px;
          border-radius: 20px;
        }

        .f-col-title {
          font-size: 1.05rem;
          color: var(--gold-bright);
          margin-bottom: 18px;
          font-family: var(--font-heading);
          letter-spacing: 0.5px;
        }

        .f-nav-links {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .f-nav-link {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-body);
          font-size: 0.88rem;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: color var(--transition-fast);
          text-align: left;
        }

        .f-nav-link:hover {
          color: var(--gold-bright);
        }

        .f-connect-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 18px;
          line-height: 1.6;
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .f-social-btn {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--bg-glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .f-social-btn:hover {
          color: var(--gold-bright);
          border-color: var(--gold-primary);
          background: rgba(245, 197, 66, 0.12);
          transform: translateY(-3px);
          box-shadow: 0 0 15px var(--gold-glow);
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid var(--bg-glass-border);
        }

        .copyright-text {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--bg-glass-border);
          color: var(--text-main);
          font-family: var(--font-heading);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .back-to-top-btn:hover {
          background: var(--gold-gradient);
          color: #030303;
          transform: translateY(-2px);
          box-shadow: 0 0 15px var(--gold-glow);
        }

        .back-to-top-btn:hover .text-gold {
          color: #030303;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .f-nav-links {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 600px) {
          .f-nav-links {
            grid-template-columns: repeat(2, 1fr);
          }
          .footer-bottom-bar {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
