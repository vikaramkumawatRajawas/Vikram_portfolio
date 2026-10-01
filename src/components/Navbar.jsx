import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code2 } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'profiles', label: 'Profiles' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* VK Logo Brand */}
        <a href="#home" className="nav-brand" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
          <div className="logo-badge">
            <span className="logo-text">VK</span>
          </div>
          <div className="brand-info">
            <span className="brand-name">Vikram Kumawat</span>
            <span className="brand-title">Backend Developer</span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
              {activeSection === link.id && <span className="active-indicator" />}
            </button>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu Trigger */}
        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle dark/light theme"
          >
            {theme === 'dark' ? <Sun className="icon-gold" size={20} /> : <Moon className="icon-gold" size={20} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn mobile-only"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} className="text-gold" /> : <Menu size={24} className="text-gold" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass-card">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              <Code2 size={16} className="text-gold" />
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--nav-height);
          z-index: 1000;
          transition: all var(--transition-normal);
          background: transparent;
        }

        .navbar-scrolled {
          background: var(--bg-glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--bg-glass-border);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-badge {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: var(--gold-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px var(--gold-glow);
        }

        .logo-text {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.15rem;
          color: #030303;
          letter-spacing: 0.5px;
        }

        .brand-info {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-main);
          letter-spacing: -0.2px;
        }

        .brand-title {
          font-size: 0.72rem;
          color: var(--gold-primary);
          font-family: var(--font-code);
          letter-spacing: 1px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          position: relative;
          padding: 8px 0;
          transition: color var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--gold-bright);
        }

        .nav-link.active {
          color: var(--gold-primary);
          font-weight: 600;
        }

        .active-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--gold-gradient);
          border-radius: 2px;
          box-shadow: 0 0 8px var(--gold-bright);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .theme-toggle-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--bg-glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .theme-toggle-btn:hover {
          background: rgba(245, 197, 66, 0.14);
          border-color: var(--gold-primary);
          box-shadow: 0 0 15px var(--gold-glow);
          transform: rotate(15deg);
        }

        .mobile-menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
        }

        .desktop-only {
          display: flex;
        }

        .mobile-only {
          display: none;
        }

        .mobile-drawer {
          position: absolute;
          top: var(--nav-height);
          left: 18px;
          right: 18px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 999;
          border-top: 1px solid var(--bg-glass-border);
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: transparent;
          border: none;
          border-radius: var(--radius-sm);
          color: var(--text-main);
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
        }

        .mobile-nav-link.active {
          background: rgba(245, 197, 66, 0.12);
          color: var(--gold-bright);
        }

        @media (max-width: 992px) {
          .desktop-only {
            display: none;
          }
          .mobile-only {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}
