import React from 'react';
import { ArrowRight, Download, Mail, FileText } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';
import MagneticButton from './MagneticButton';
import { GithubIcon, LinkedinIcon, InstagramIcon, LeetcodeIcon } from './SocialIcons';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    const resumeText = `VIKRAM KUMAWAT - BACKEND DEVELOPER
Location: Jaipur, Rajasthan, India
Email: kumawatvikram642@gmail.com | Phone: 9351680540
Education: BCA (UEM Jaipur, 2024-2027) | Current CGPA: 8.44 / 10

SKILLS:
- Languages: Java, Python, JavaScript
- Frontend: HTML5, CSS3, React.js
- Database: MySQL
- Tools: Git, GitHub, VS Code, Antigravity

FEATURED PROJECTS:
1. unifyED - Centralized Digital Platform for Comprehensive College Management
2. Viora - Music & Video Streaming Platform
3. NeoLibrary - Digital Library Management Platform
4. LifeOS - Personal Digital Life Management Platform
5. UrbanNest Lifestyle - Lifestyle Web Platform
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Vikram_Kumawat_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Holographic Glow Beams */}
      <div className="hero-holographic-glow" />
      <div className="hero-beam-line line-1" />
      <div className="hero-beam-line line-2" />

      <div className="container hero-container">
        {/* Left Side Content */}
        <div className="hero-content">
          <div className="badge-dev animate-badge">
            <span>&lt;/&gt; BACKEND DEVELOPER</span>
          </div>

          <h1 className="hero-title animate-title">
            <span className="word-fade word-1">Vikram </span>
            <span className="word-fade word-2 text-gradient">Kumawat</span>
          </h1>

          <p className="hero-subtitle animate-subtitle">
            Building practical software solutions with a backend-first mindset.
          </p>

          <p className="hero-description animate-desc">
            I build practical web applications and software solutions while continuously developing my skills in backend development, programming, databases, and modern web technologies.
          </p>

          {/* Magnetic Action Buttons */}
          <div className="hero-buttons animate-buttons">
            <MagneticButton onClick={() => scrollTo('projects')} className="btn-gold">
              View Projects <ArrowRight size={18} />
            </MagneticButton>

            <MagneticButton onClick={handleDownloadResume} className="btn-secondary">
              <Download size={18} className="text-gold" /> Download Resume
            </MagneticButton>

            <MagneticButton onClick={() => scrollTo('contact')} className="btn-outline-gold">
              Contact Me
            </MagneticButton>
          </div>

          {/* Social Icons */}
          <div className="hero-socials animate-socials">
            <a
              href="https://github.com/vikaramkumawatRajawas"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub Profile"
              data-cursor="GITHUB"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vikram-kumawat-8267922b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn Profile"
              data-cursor="LINKEDIN"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="https://leetcode.com/u/vikramkumawat9351/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LeetCode Profile"
              data-cursor="LEETCODE"
            >
              <LeetcodeIcon size={20} />
            </a>
            <a
              href="https://www.instagram.com/my_lord_hanuman_123"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Instagram Profile"
              data-cursor="INSTAGRAM"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href="mailto:kumawatvikram642@gmail.com"
              className="social-icon-btn"
              title="Send Email"
              data-cursor="EMAIL"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Side Interactive 3D Scene & Floating Code Panels */}
        <div className="hero-3d-wrapper">
          <div className="three-canvas-frame" data-cursor="3D SCENE">
            <ThreeCanvas />

            {/* Floating Code Panels with Holographic Neon Borders */}
            <div className="floating-code-card glass-card panel-1">
              <span className="code-tag">const</span> developer = &#123; <span className="code-prop">learn</span>: <span className="code-val">true</span>, <span className="code-prop">build</span>: <span className="code-val">true</span>, <span className="code-prop">grow</span>: <span className="code-val">true</span> &#125;;
            </div>

            <div className="floating-code-card glass-card panel-2">
              <span className="code-comment">// Backend // Database // Web Development // Problem Solving</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          padding-top: calc(var(--nav-height) + 30px);
          padding-bottom: 60px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-holographic-glow {
          position: absolute;
          top: 15%;
          left: 5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(245, 197, 66, 0.12) 0%, transparent 70%);
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }

        .hero-beam-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold-bright), transparent);
          opacity: 0.35;
          pointer-events: none;
          z-index: 0;
        }
        .hero-beam-line.line-1 {
          top: 25%;
          left: 0;
          right: 0;
          animation: moveBeam 12s linear infinite;
        }
        .hero-beam-line.line-2 {
          top: 75%;
          left: 0;
          right: 0;
          animation: moveBeam 16s linear infinite reverse;
        }

        @keyframes moveBeam {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 40px;
          align-items: center;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          z-index: 2;
        }

        .hero-title {
          font-size: clamp(3rem, 5.5vw, 4.8rem);
          font-weight: 800;
          letter-spacing: -1.5px;
          margin-bottom: 12px;
          line-height: 1.05;
        }

        /* Staggered Text Animations */
        .animate-badge { animation: slideUpFade 0.6s ease-out forwards; }
        .word-fade.word-1 { display: inline-block; animation: slideUpFade 0.7s 0.2s ease-out both; }
        .word-fade.word-2 { display: inline-block; animation: slideUpFade 0.7s 0.4s ease-out both; }
        .animate-subtitle { animation: slideUpFade 0.7s 0.6s ease-out both; }
        .animate-desc { animation: slideUpFade 0.7s 0.8s ease-out both; }
        .animate-buttons { animation: slideUpFade 0.7s 1.0s ease-out both; }
        .animate-socials { animation: slideUpFade 0.7s 1.2s ease-out both; }

        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(24px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: var(--gold-bright);
          font-family: var(--font-heading);
          font-weight: 500;
          margin-bottom: 20px;
        }

        .hero-description {
          font-size: 1.05rem;
          color: var(--text-muted);
          max-width: 560px;
          margin-bottom: 36px;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 40px;
        }

        .hero-socials {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .social-icon-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--bg-glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .social-icon-btn:hover {
          color: var(--gold-bright);
          border-color: var(--gold-primary);
          background: rgba(245, 197, 66, 0.14);
          box-shadow: 0 0 22px var(--gold-glow);
          transform: translateY(-4px);
        }

        .hero-3d-wrapper {
          position: relative;
          height: 560px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .three-canvas-frame {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .floating-code-card {
          position: absolute;
          padding: 12px 18px;
          font-family: var(--font-code);
          font-size: 0.85rem;
          z-index: 10;
          white-space: nowrap;
          border-color: rgba(245, 197, 66, 0.35);
          box-shadow: 0 10px 30px rgba(0,0,0,0.8), 0 0 20px var(--gold-glow);
          animation: floatSlow 6s ease-in-out infinite alternate;
        }

        .panel-1 {
          top: 6%;
          left: -4%;
        }

        .panel-2 {
          bottom: 10%;
          right: -2%;
          animation-delay: -3s;
        }

        .code-tag { color: var(--gold-primary); font-weight: 600; }
        .code-prop { color: var(--gold-bright); }
        .code-val { color: #a3e635; }
        .code-comment { color: var(--text-dim); font-style: italic; }

        @keyframes floatSlow {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-14px) rotate(1.5deg); }
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 50px;
          }
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-buttons {
            justify-content: center;
          }
          .hero-socials {
            justify-content: center;
          }
          .hero-3d-wrapper {
            height: 420px;
          }
          .floating-code-card {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
